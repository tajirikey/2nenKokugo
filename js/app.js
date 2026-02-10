/* ========================================
   かんじれんしゅう - メインアプリケーション
   ======================================== */

(function () {
  'use strict';

  // ========== 永続データ ==========
  function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  }
  function saveJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  // ========== 状態管理 ==========
  const state = {
    mode: 'easy',
    currentKanji: null,
    currentKanjiChar: '',
    currentStrokeIndex: 0,
    totalStrokes: 0,
    completedKanji: new Set(loadJSON('completedKanji', [])),
    mistakeKanji: new Set(loadJSON('mistakeKanji', [])),   // 苦手漢字
    attemptCounts: loadJSON('attemptCounts', {}),           // 取り組み回数
    kanjiList: [],
    sortOrder: localStorage.getItem('sortOrder') || 'default', // default | random
    filterMode: 'all', // all | mistake
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
    sortBtns: document.querySelectorAll('.sort-btn'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    particleCanvas: document.getElementById('particle-canvas'),
  };

  let drawingCanvas;
  let validator;

  function init() {
    validator = new StrokeValidator();
    drawingCanvas = new DrawingCanvas(els.drawCanvas);
    drawingCanvas.onStrokeComplete = onUserStrokeComplete;

    setupEventListeners();
    renderKanjiGrid();
    restoreMode();
    restoreSort();
  }

  // ========== イベントリスナー ==========
  function setupEventListeners() {
    els.modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
        validator.setMode(state.mode);
        localStorage.setItem('mode', state.mode);
      });
    });

    // 並び順
    els.sortBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.sortOrder = btn.dataset.sort;
        localStorage.setItem('sortOrder', state.sortOrder);
        renderKanjiGrid(els.kanjiSearch.value);
      });
    });

    // フィルタ（にがて）
    els.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filterMode = btn.dataset.filter;
        renderKanjiGrid(els.kanjiSearch.value);
      });
    });

    els.kanjiSearch.addEventListener('input', () => renderKanjiGrid(els.kanjiSearch.value));
    els.btnBack.addEventListener('click', goToSelect);
    els.btnDemo.addEventListener('click', playDemo);
    els.btnUndo.addEventListener('click', undoStroke);
    els.btnClear.addEventListener('click', clearAndReset);
    els.btnNextKanji.addEventListener('click', goToNextKanji);
  }

  function restoreMode() {
    const saved = localStorage.getItem('mode');
    if (saved && ['easy', 'normal', 'hard'].includes(saved)) {
      state.mode = saved;
      validator.setMode(saved);
      els.modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === saved));
    }
  }

  function restoreSort() {
    els.sortBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === state.sortOrder));
  }

  // ========== 漢字グリッド表示 ==========
  function renderKanjiGrid(filter = '') {
    els.kanjiGrid.innerHTML = '';
    let allKanji = Object.keys(KANJI_DATA);

    // にがてフィルタ
    if (state.filterMode === 'mistake') {
      allKanji = allKanji.filter(k => state.mistakeKanji.has(k));
    }

    // テキスト検索
    state.kanjiList = filter
      ? allKanji.filter(k => {
          const data = KANJI_DATA[k];
          return k.includes(filter) ||
            data.readings.on.some(r => r.includes(filter)) ||
            data.readings.kun.some(r => r.includes(filter));
        })
      : allKanji;

    // 並び替え
    if (state.sortOrder === 'random') {
      state.kanjiList = [...state.kanjiList].sort(() => Math.random() - 0.5);
    }

    for (const kanji of state.kanjiList) {
      const cell = document.createElement('button');
      cell.className = 'kanji-cell';
      if (state.completedKanji.has(kanji)) cell.classList.add('completed');

      // 漢字テキスト
      const kanjiText = document.createElement('span');
      kanjiText.className = 'kanji-text';
      kanjiText.textContent = kanji;
      cell.appendChild(kanjiText);

      // 取り組み回数バッジ
      const count = state.attemptCounts[kanji] || 0;
      if (count > 0) {
        const badge = document.createElement('span');
        badge.className = 'attempt-badge';
        badge.textContent = count;
        cell.appendChild(badge);
      }

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

    // 取り組み回数を記録
    state.attemptCounts[kanjiChar] = (state.attemptCounts[kanjiChar] || 0) + 1;
    saveJSON('attemptCounts', state.attemptCounts);

    els.screenSelect.classList.remove('active');
    els.screenPractice.classList.add('active');

    els.currentKanjiLabel.textContent = kanjiChar;
    updateReadingLabel();
    updateStrokeProgress();
    hideCompletion();
    hideFeedback();

    drawingCanvas.clear();
    drawingCanvas.resize();
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
    const allDone = state.currentStrokeIndex >= strokes.length;

    for (let i = 0; i < strokes.length; i++) {
      const stroke = strokes[i];
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', stroke.path);

      if (allDone) {
        // 全画完了: お手本を極薄に
        path.setAttribute('class', 'stroke-all-done');
      } else if (i < state.currentStrokeIndex) {
        path.setAttribute('class', 'stroke-done');
      } else if (i === state.currentStrokeIndex) {
        path.setAttribute('class', state.mode === 'hard' ? 'stroke-future' : 'stroke-current');
      } else {
        path.setAttribute('class', 'stroke-future');
      }

      svg.appendChild(path);
    }

    // 始点マーカー
    if (state.mode !== 'hard' && !allDone && state.currentStrokeIndex < strokes.length) {
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
  }

  // ========== ストローク完了時の処理 ==========
  function onUserStrokeComplete(userPoints) {
    if (state.currentStrokeIndex >= state.totalStrokes) return;

    const expectedStroke = state.currentKanji.strokes[state.currentStrokeIndex];
    const mapping = drawingCanvas.getMapping();

    const mappedPoints = userPoints.map(p => ({
      x: (p.x - mapping.offsetX) / mapping.scale,
      y: (p.y - mapping.offsetY) / mapping.scale,
    }));

    const result = validator.validate(mappedPoints, expectedStroke, 109);

    if (result.valid) {
      state.currentStrokeIndex++;
      showFeedback(result.message || 'いいね！', 'success');
      renderGuide();
      updateStrokeProgress();

      if (state.currentStrokeIndex >= state.totalStrokes) {
        setTimeout(() => showCompletion(), 500);
      }
    } else {
      handleIncorrectStroke(result);
    }
  }

  function handleIncorrectStroke(result) {
    drawingCanvas.undoLastStroke();

    // 苦手漢字として記録
    state.mistakeKanji.add(state.currentKanjiChar);
    saveJSON('mistakeKanji', [...state.mistakeKanji]);

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

  function highlightStartPoint() {
    const svg = els.guideSvg;
    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    if (!stroke || !stroke.start) return;

    const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pulse.setAttribute('cx', stroke.start[0]);
    pulse.setAttribute('cy', stroke.start[1]);
    pulse.setAttribute('r', '12');
    pulse.setAttribute('fill', 'rgba(231, 76, 60, 0.3)');
    pulse.setAttribute('class', 'start-marker');
    svg.appendChild(pulse);
    setTimeout(() => { if (pulse.parentNode) pulse.remove(); }, 2000);
  }

  function playDirectionHint() {
    if (state.currentStrokeIndex >= state.totalStrokes) return;

    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    const svg = els.guideSvg;
    svg.querySelectorAll('.hint-anim').forEach(el => el.remove());

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

    const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#hint-ref-path');
    animateMotion.appendChild(mpath);
    animCircle.appendChild(animateMotion);
    svg.appendChild(animCircle);

    setTimeout(() => { svg.querySelectorAll('.hint-anim').forEach(el => el.remove()); }, 2200);
  }

  function playDemo() {
    if (state.currentStrokeIndex >= state.totalStrokes) return;
    const stroke = state.currentKanji.strokes[state.currentStrokeIndex];
    const svg = els.guideSvg;
    const existing = svg.querySelector('.stroke-demo');
    if (existing) existing.remove();

    const demoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    demoPath.setAttribute('d', stroke.path);
    demoPath.setAttribute('class', 'stroke-demo');
    svg.appendChild(demoPath);
    const length = demoPath.getTotalLength();
    demoPath.style.setProperty('--stroke-length', length);
    demoPath.setAttribute('stroke-dasharray', length);
    demoPath.setAttribute('stroke-dashoffset', length);
    setTimeout(() => { if (demoPath.parentNode) demoPath.remove(); }, 1500);
  }

  function undoStroke() {
    if (state.currentStrokeIndex > 0) {
      state.currentStrokeIndex--;
      drawingCanvas.undoLastStroke();
      renderGuide();
      updateStrokeProgress();
      hideFeedback();
    }
  }

  function clearAndReset() {
    state.currentStrokeIndex = 0;
    drawingCanvas.clear();
    renderGuide();
    updateStrokeProgress();
    hideFeedback();
  }

  function showFeedback(message, type) {
    els.feedbackText.textContent = message;
    els.feedback.className = `feedback ${type}`;
    clearTimeout(state.feedbackTimer);
    state.feedbackTimer = setTimeout(hideFeedback, 2000);
  }

  function hideFeedback() {
    els.feedback.className = 'feedback hidden';
  }

  // ========== 完成表示 + パーティクル ==========
  function showCompletion() {
    els.completionKanji.textContent = state.currentKanjiChar;
    els.completionOverlay.classList.remove('hidden');

    state.completedKanji.add(state.currentKanjiChar);
    saveJSON('completedKanji', [...state.completedKanji]);

    // ガイドを極薄に（筆跡が目立つ）
    renderGuide();

    // パーティクル発射
    launchParticles();
  }

  function hideCompletion() {
    els.completionOverlay.classList.add('hidden');
    stopParticles();
  }

  // ========== パーティクルシステム ==========
  let particleAnimId = null;

  function launchParticles() {
    const canvas = els.particleCanvas;
    if (!canvas) return;
    canvas.classList.remove('hidden');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const W = window.innerWidth;
    const H = window.innerHeight;

    const colors = ['#E74C3C', '#F39C12', '#2ECC71', '#3498DB', '#9B59B6', '#E91E63', '#FF6B6B', '#4ECDC4'];
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: W * 0.5 + (Math.random() - 0.5) * W * 0.3,
        y: H * 0.4,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 14 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.015 + 0.008,
        shape: Math.random() > 0.5 ? 'circle' : 'rect',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size, -p.size / 2, p.size * 2, p.size);
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (alive) {
        particleAnimId = requestAnimationFrame(animate);
      } else {
        canvas.classList.add('hidden');
      }
    }
    animate();
  }

  function stopParticles() {
    if (particleAnimId) {
      cancelAnimationFrame(particleAnimId);
      particleAnimId = null;
    }
    if (els.particleCanvas) els.particleCanvas.classList.add('hidden');
  }

  // ========== ナビゲーション ==========
  function goToNextKanji() {
    hideCompletion();
    const currentIndex = state.kanjiList.indexOf(state.currentKanjiChar);
    const nextIndex = (currentIndex + 1) % state.kanjiList.length;
    startPractice(state.kanjiList[nextIndex]);
  }

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
