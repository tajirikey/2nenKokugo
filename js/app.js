/* ========================================
   かんじれんしゅう - メインアプリケーション
   ======================================== */

(function () {
  'use strict';

  // ========== 状態管理 ==========
  const state = {
    mode: 'easy',          // easy | normal | hard
    currentKanji: null,    // 現在の漢字データ
    currentKanjiChar: '',  // 現在の漢字文字
    currentStrokeIndex: 0, // 今書くべき画のインデックス
    totalStrokes: 0,
    completedKanji: new Set(JSON.parse(localStorage.getItem('completedKanji') || '[]')),
    kanjiList: [],         // フィルタ後の漢字リスト
  };

  // ========== DOM要素 ==========
  const els = {
    screenSelect: document.getElementById('screen-select'),
    screenPractice: document.getElementById('screen-practice'),
    kanjiGrid: document.getElementById('kanji-grid'),
    kanjiSearch: document.getElementById('kanji-search'),
    guideSvg: document.getElementById('guide-svg'),
    drawCanvas: document.getElementById('draw-canvas'),
    currentKanjiLabel: document.getElementById('current-kanji-label'),
    strokeProgress: document.getElementById('stroke-progress'),
    readingLabel: document.getElementById('reading-label'),
    feedback: document.getElementById('feedback'),
    feedbackText: document.getElementById('feedback-text'),
    completionOverlay: document.getElementById('completion-overlay'),
    completionKanji: document.getElementById('completion-kanji'),
    btnBack: document.getElementById('btn-back'),
    btnDemo: document.getElementById('btn-demo'),
    btnUndo: document.getElementById('btn-undo'),
    btnClear: document.getElementById('btn-clear'),
    btnNextKanji: document.getElementById('btn-next-kanji'),
    modeBtns: document.querySelectorAll('.mode-btn'),
  };

  // ========== モジュール初期化 ==========
  let drawingCanvas;
  let validator;

  function init() {
    validator = new StrokeValidator();
    drawingCanvas = new DrawingCanvas(els.drawCanvas);

    // ストローク完了時のコールバック
    drawingCanvas.onStrokeComplete = onUserStrokeComplete;

    setupEventListeners();
    renderKanjiGrid();
    restoreMode();
  }

  // ========== イベントリスナー ==========
  function setupEventListeners() {
    // モード切替
    els.modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
        validator.setMode(state.mode);
        localStorage.setItem('mode', state.mode);
      });
    });

    // 検索
    els.kanjiSearch.addEventListener('input', () => {
      renderKanjiGrid(els.kanjiSearch.value);
    });

    // 戻るボタン
    els.btnBack.addEventListener('click', goToSelect);

    // お手本ボタン
    els.btnDemo.addEventListener('click', playDemo);

    // 元に戻すボタン
    els.btnUndo.addEventListener('click', undoStroke);

    // 消去ボタン
    els.btnClear.addEventListener('click', clearAndReset);

    // 次の漢字ボタン
    els.btnNextKanji.addEventListener('click', goToNextKanji);
  }

  function restoreMode() {
    const saved = localStorage.getItem('mode');
    if (saved && ['easy', 'normal', 'hard'].includes(saved)) {
      state.mode = saved;
      validator.setMode(saved);
      els.modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === saved);
      });
    }
  }

  // ========== 漢字グリッド表示 ==========
  function renderKanjiGrid(filter = '') {
    els.kanjiGrid.innerHTML = '';
    const allKanji = Object.keys(KANJI_DATA);

    state.kanjiList = filter
      ? allKanji.filter(k => {
          const data = KANJI_DATA[k];
          return k.includes(filter) ||
            data.readings.on.some(r => r.includes(filter)) ||
            data.readings.kun.some(r => r.includes(filter));
        })
      : allKanji;

    for (const kanji of state.kanjiList) {
      const cell = document.createElement('button');
      cell.className = 'kanji-cell';
      if (state.completedKanji.has(kanji)) {
        cell.classList.add('completed');
      }
      cell.textContent = kanji;
      cell.addEventListener('click', () => startPractice(kanji));
      els.kanjiGrid.appendChild(cell);
    }
  }

  // ========== 練習画面 ==========
  function startPractice(kanjiChar) {
    const data = KANJI_DATA[kanjiChar];
    if (!data) return;

    state.currentKanji = data;
    state.currentKanjiChar = kanjiChar;
    state.currentStrokeIndex = 0;
    state.totalStrokes = data.strokes.length;

    // 画面切替
    els.screenSelect.classList.remove('active');
    els.screenPractice.classList.add('active');

    // UI更新
    els.currentKanjiLabel.textContent = kanjiChar;
    updateReadingLabel();
    updateStrokeProgress();
    hideCompletion();
    hideFeedback();

    // キャンバスクリア
    drawingCanvas.clear();
    drawingCanvas.resize();

    // ガイド描画
    renderGuide();
  }

  function updateReadingLabel() {
    const data = state.currentKanji;
    const readings = [];
    if (data.readings.on.length > 0) readings.push(data.readings.on.join('・'));
    if (data.readings.kun.length > 0) readings.push(data.readings.kun.join('・'));
    els.readingLabel.textContent = readings.join(' / ');
  }

  function updateStrokeProgress() {
    const idx = state.currentStrokeIndex + 1;
    const total = state.totalStrokes;
    els.strokeProgress.textContent = `${idx}/${total} かくめ`;
  }

  // ========== ガイドSVG描画 ==========
  function renderGuide() {
    const svg = els.guideSvg;
    svg.innerHTML = '';

    const strokes = state.currentKanji.strokes;

    for (let i = 0; i < strokes.length; i++) {
      const stroke = strokes[i];
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', stroke.path);

      if (i < state.currentStrokeIndex) {
        // 完了した画
        path.setAttribute('class', 'stroke-done');
      } else if (i === state.currentStrokeIndex) {
        // 現在の画
        if (state.mode === 'hard') {
          path.setAttribute('class', 'stroke-future');
        } else {
          path.setAttribute('class', 'stroke-current');
        }
      } else {
        // 未来の画
        path.setAttribute('class', 'stroke-future');
      }

      svg.appendChild(path);
    }

    // 始点マーカー（かんたん・ふつうモード）
    if (state.mode !== 'hard' && state.currentStrokeIndex < strokes.length) {
      const currentStroke = strokes[state.currentStrokeIndex];
      if (currentStroke.start) {
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        marker.setAttribute('cx', currentStroke.start[0]);
        marker.setAttribute('cy', currentStroke.start[1]);
        marker.setAttribute('r', state.mode === 'easy' ? 7 : 5);
        marker.setAttribute('class', 'start-marker');
        svg.appendChild(marker);
      }
    }

    // かんたんモード：画番号をSVG外（上部ラベル横）に表示
    // 文字に被らないよう、ヘッダーのstroke-progressに統合済み
  }

  // ========== ストローク完了時の処理 ==========
  function onUserStrokeComplete(userPoints) {
    if (state.currentStrokeIndex >= state.totalStrokes) return;

    const expectedStroke = state.currentKanji.strokes[state.currentStrokeIndex];

    // キャンバスサイズとマッピング情報を取得
    const mapping = drawingCanvas.getMapping();

    // ユーザーの点をSVG座標系に変換して判定
    const mappedPoints = userPoints.map(p => ({
      x: (p.x - mapping.offsetX) / mapping.scale,
      y: (p.y - mapping.offsetY) / mapping.scale,
    }));

    // 判定は109x109のSVG座標系で行う
    const result = validator.validate(mappedPoints, expectedStroke, 109);

    if (result.valid) {
      // 正解！
      state.currentStrokeIndex++;
      showFeedback(result.message || 'いいね！', 'success');
      renderGuide();
      updateStrokeProgress();

      // 全画完了チェック
      if (state.currentStrokeIndex >= state.totalStrokes) {
        setTimeout(() => showCompletion(), 500);
      }
    } else {
      // 不正解
      handleIncorrectStroke(result);
    }
  }

  function handleIncorrectStroke(result) {
    // 直前のストロークを消す（不正解なので）
    drawingCanvas.undoLastStroke();

    switch (result.reason) {
      case 'wrong_start':
        showFeedback(result.message, 'warning');
        highlightStartPoint();
        break;
      case 'reverse_direction':
        showFeedback(result.message, 'error');
        playDirectionHint();
        break;
      case 'wrong_direction':
        showFeedback(result.message, 'warning');
        playDirectionHint();
        break;
      case 'wrong_path':
        showFeedback(result.message, 'warning');
        break;
      case 'too_short':
        showFeedback(result.message, 'warning');
        break;
      default:
        showFeedback('もういちどやってみよう', 'warning');
    }
  }

  // ========== 始点ハイライト ==========
  function highlightStartPoint() {
    const svg = els.guideSvg;
    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    if (!stroke || !stroke.start) return;

    // 大きなパルスマーカーを追加
    const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pulse.setAttribute('cx', stroke.start[0]);
    pulse.setAttribute('cy', stroke.start[1]);
    pulse.setAttribute('r', '12');
    pulse.setAttribute('fill', 'rgba(231, 76, 60, 0.3)');
    pulse.setAttribute('class', 'start-marker');
    svg.appendChild(pulse);

    setTimeout(() => {
      if (pulse.parentNode) pulse.parentNode.removeChild(pulse);
    }, 2000);
  }

  // ========== 方向ヒントアニメーション ==========
  function playDirectionHint() {
    if (state.currentStrokeIndex >= state.totalStrokes) return;

    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    const svg = els.guideSvg;

    // 既存のデモ要素を削除
    svg.querySelectorAll('.hint-anim').forEach(el => el.remove());

    // パスに沿って動くアニメーション（mpath参照で正確な位置に）
    // まず参照用の非表示パスを追加
    const refPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    refPath.setAttribute('d', stroke.path);
    refPath.setAttribute('id', 'hint-ref-path');
    refPath.setAttribute('fill', 'none');
    refPath.setAttribute('stroke', 'none');
    refPath.classList.add('hint-anim');
    svg.appendChild(refPath);

    const animCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    animCircle.setAttribute('r', '4');
    animCircle.setAttribute('fill', '#4A90D9');
    animCircle.setAttribute('opacity', '0.8');
    animCircle.classList.add('hint-anim');

    const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    animateMotion.setAttribute('dur', '1s');
    animateMotion.setAttribute('repeatCount', '2');
    animateMotion.setAttribute('fill', 'freeze');

    // mpath参照を使い、SVG内の実際のパス座標に沿って動かす
    const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#hint-ref-path');
    animateMotion.appendChild(mpath);

    animCircle.appendChild(animateMotion);
    svg.appendChild(animCircle);

    setTimeout(() => {
      svg.querySelectorAll('.hint-anim').forEach(el => el.remove());
    }, 2200);
  }

  // ========== お手本再生 ==========
  function playDemo() {
    if (state.currentStrokeIndex >= state.totalStrokes) return;

    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    const svg = els.guideSvg;

    // 既存のデモパスを削除
    const existing = svg.querySelector('.stroke-demo');
    if (existing) existing.remove();

    // お手本パスを描画
    const demoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    demoPath.setAttribute('d', stroke.path);
    demoPath.setAttribute('class', 'stroke-demo');

    // パスの長さを取得してアニメーション設定
    svg.appendChild(demoPath);
    const length = demoPath.getTotalLength();
    demoPath.style.setProperty('--stroke-length', length);
    demoPath.setAttribute('stroke-dasharray', length);
    demoPath.setAttribute('stroke-dashoffset', length);

    // アニメーション後に削除
    setTimeout(() => {
      if (demoPath.parentNode) demoPath.parentNode.removeChild(demoPath);
    }, 1500);
  }

  // ========== 元に戻す ==========
  function undoStroke() {
    if (state.currentStrokeIndex > 0) {
      state.currentStrokeIndex--;
      drawingCanvas.undoLastStroke();
      renderGuide();
      updateStrokeProgress();
      hideFeedback();
    }
  }

  // ========== クリア ==========
  function clearAndReset() {
    state.currentStrokeIndex = 0;
    drawingCanvas.clear();
    renderGuide();
    updateStrokeProgress();
    hideFeedback();
  }

  // ========== フィードバック表示 ==========
  function showFeedback(message, type) {
    els.feedbackText.textContent = message;
    els.feedback.className = `feedback ${type}`;

    // 自動非表示
    clearTimeout(state.feedbackTimer);
    state.feedbackTimer = setTimeout(hideFeedback, 2000);
  }

  function hideFeedback() {
    els.feedback.className = 'feedback hidden';
  }

  // ========== 完成表示 ==========
  function showCompletion() {
    els.completionKanji.textContent = state.currentKanjiChar;
    els.completionOverlay.classList.remove('hidden');

    // 完了記録
    state.completedKanji.add(state.currentKanjiChar);
    localStorage.setItem('completedKanji', JSON.stringify([...state.completedKanji]));
  }

  function hideCompletion() {
    els.completionOverlay.classList.add('hidden');
  }

  // ========== 次の漢字 ==========
  function goToNextKanji() {
    hideCompletion();
    const currentIndex = state.kanjiList.indexOf(state.currentKanjiChar);
    const nextIndex = (currentIndex + 1) % state.kanjiList.length;
    startPractice(state.kanjiList[nextIndex]);
  }

  // ========== 選択画面に戻る ==========
  function goToSelect() {
    els.screenPractice.classList.remove('active');
    els.screenSelect.classList.add('active');
    renderKanjiGrid(els.kanjiSearch.value);
  }

  // ========== 起動 ==========
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
