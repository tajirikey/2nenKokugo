/* ========================================
   かんじれんしゅう - よみかたクイズモード
   ======================================== */

(function () {
  'use strict';

  // ========== アカウント ==========
  // app.js の state.currentAccount とは独立して、都度 localStorage から読む
  function account() {
    return localStorage.getItem('currentAccount') || 'しろ';
  }

  function accountKey(key) { return account() + ':' + key; }

  // ========== 永続化: にがてリスト・せいせき ==========
  function loadMistakes() {
    try { return JSON.parse(localStorage.getItem(accountKey('quizMistakes'))) || {}; }
    catch { return {}; }
  }
  function saveMistakes(obj) {
    localStorage.setItem(accountKey('quizMistakes'), JSON.stringify(obj));
  }

  function loadStats() {
    try {
      const s = JSON.parse(localStorage.getItem(accountKey('quizStats')));
      if (s && typeof s.total === 'number') return s;
    } catch { /* noop */ }
    return { total: 0, correct: 0, bestStreak: 0 };
  }
  function saveStats(obj) {
    localStorage.setItem(accountKey('quizStats'), JSON.stringify(obj));
  }

  // ========== 永続化: がくねん選択（全アカウント共通） ==========
  function loadGrades() {
    try {
      const g = JSON.parse(localStorage.getItem('quizGrades'));
      if (Array.isArray(g) && g.length > 0) return g;
    } catch { /* noop */ }
    return [2];
  }
  function saveGrades(arr) {
    localStorage.setItem('quizGrades', JSON.stringify(arr));
  }

  // ========== 永続化: よみかた選択（全アカウント共通） ==========
  function loadReadingType() {
    const t = localStorage.getItem('quizReadingType');
    return ['both', 'on', 'kun'].includes(t) ? t : 'both';
  }
  function saveReadingType(t) {
    localStorage.setItem('quizReadingType', t);
  }

  // 出題タイプが選択に合うか（'both' は音訓どちらもOK）
  function matchesReadingType(type) {
    return state.readingType === 'both' || state.readingType === type;
  }

  function mistakeKey(item) { return item.kanji + '|' + item.reading; }

  // ========== 出題用: 全440字ぶんの読み一覧（ダミー選択肢の材料） ==========
  const ALL_READINGS = { on: [], kun: [] };
  (function buildAllReadings() {
    for (const kanji in KANJI_DATA) {
      const data = KANJI_DATA[kanji];
      for (const r of data.readings.on) ALL_READINGS.on.push({ kanji, reading: r });
      for (const r of data.readings.kun) ALL_READINGS.kun.push({ kanji, reading: r });
    }
  })();

  const PRAISE_MESSAGES = [
    'すごい！',
    'そのちょうし！',
    'よみかたマスターまであとすこし！',
    'やったね！',
    'かんぺき！',
    'てんさい！',
  ];

  // ========== 状態 ==========
  const state = {
    grades: loadGrades(),
    readingType: loadReadingType(), // 'both' | 'on' | 'kun'
    quizMode: 'all', // 'all' | 'mistake'
    mistakes: {},
    stats: { total: 0, correct: 0, bestStreak: 0 },
    pool: [],
    deck: [],
    current: null,
    currentChoices: [],
    correctText: '',
    answering: false,
    questionIndex: 0,
    streak: 0,
    answeredInSet: 0,
    setCorrect: 0,
    setMistakes: [],
    celebrationIndex: 0,
    allClearPending: false,
    answerTimeoutId: null,
  };

  // ========== DOM要素 ==========
  const els = {
    screenSelect: document.getElementById('screen-select'),
    btnQuiz: document.getElementById('btn-quiz'),

    screenQuizSetup: document.getElementById('screen-quiz-setup'),
    btnQuizSetupBack: document.getElementById('btn-quiz-setup-back'),
    gradeChips: document.querySelectorAll('.grade-chip'),
    readingTypeBtns: document.querySelectorAll('.reading-type-btn'),
    quizModeBtns: document.querySelectorAll('.quiz-mode-btn'),
    btnModeMistake: document.getElementById('btn-mode-mistake'),
    mistakeCount: document.getElementById('mistake-count'),
    btnQuizStart: document.getElementById('btn-quiz-start'),

    screenQuiz: document.getElementById('screen-quiz'),
    btnQuizBack: document.getElementById('btn-quiz-back'),
    quizQuestionCount: document.getElementById('quiz-question-count'),
    quizStreak: document.getElementById('quiz-streak'),
    quizTypeBadge: document.getElementById('quiz-type-badge'),
    quizKanjiDisplay: document.getElementById('quiz-kanji-display'),
    correctMark: document.getElementById('quiz-correct-mark'),
    choiceBtns: document.querySelectorAll('.quiz-choice-btn'),

    celebrationOverlay: document.getElementById('quiz-celebration-overlay'),
    celebCanvas: document.getElementById('quiz-celebration-canvas'),
    celebEmoji: document.getElementById('quiz-celebration-emoji'),
    celebCount: document.getElementById('quiz-celebration-count'),
    celebMessage: document.getElementById('quiz-celebration-message'),
    celebSetScore: document.getElementById('quiz-celebration-set-score'),
    celebMistakesBlock: document.getElementById('quiz-celebration-mistakes'),
    celebMistakesChips: document.getElementById('quiz-celebration-mistakes-chips'),
    celebBestStreak: document.getElementById('quiz-celebration-best-streak'),
    celebContinueBtn: document.getElementById('btn-celebration-continue'),
    celebEndBtn: document.getElementById('btn-celebration-end'),
  };

  // ========== 画面遷移 ==========
  function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
  }

  function enterSetupScreen() {
    state.mistakes = loadMistakes();
    state.stats = loadStats();
    setupGradeChipsUI();
    setupReadingTypeUI();
    updateMistakeModeAvailability();
    showScreen(els.screenQuizSetup);
  }

  function goToSetupFromQuiz() {
    if (state.answerTimeoutId) {
      clearTimeout(state.answerTimeoutId);
      state.answerTimeoutId = null;
    }
    hideCelebrationOverlay();
    enterSetupScreen();
  }

  // ========== セットアップ画面: がくねんチップ ==========
  function setupGradeChipsUI() {
    els.gradeChips.forEach(chip => {
      const g = parseInt(chip.dataset.grade, 10);
      chip.classList.toggle('active', state.grades.includes(g));
    });
  }

  function toggleGrade(g) {
    if (state.grades.includes(g)) {
      if (state.grades.length === 1) return; // 最低1つは残す
      state.grades = state.grades.filter(x => x !== g);
    } else {
      state.grades = [...state.grades, g];
    }
    saveGrades(state.grades);
    setupGradeChipsUI();
    updateMistakeModeAvailability();
  }

  // ========== セットアップ画面: よみかた選択 ==========
  function setupReadingTypeUI() {
    els.readingTypeBtns.forEach(btn =>
      btn.classList.toggle('active', btn.dataset.rtype === state.readingType)
    );
  }

  function setReadingType(t) {
    state.readingType = t;
    saveReadingType(t);
    setupReadingTypeUI();
    updateMistakeModeAvailability();
  }

  // ========== セットアップ画面: モード選択 ==========
  function setActiveQuizMode(mode) {
    state.quizMode = mode;
    els.quizModeBtns.forEach(b => b.classList.toggle('active', b.dataset.quizmode === mode));
  }

  function updateMistakeModeAvailability() {
    let count = 0;
    for (const key in state.mistakes) {
      const m = state.mistakes[key];
      const data = KANJI_DATA[m.k];
      if (data && state.grades.includes(data.grade) && matchesReadingType(m.t)) count++;
    }
    els.mistakeCount.textContent = count;
    els.btnModeMistake.disabled = count === 0;
    els.btnModeMistake.classList.toggle('disabled', count === 0);
    if (count === 0 && state.quizMode === 'mistake') {
      setActiveQuizMode('all');
    }
  }

  // ========== 出題プール生成 ==========
  function buildPool() {
    const pool = [];
    if (state.quizMode === 'mistake') {
      for (const key in state.mistakes) {
        const m = state.mistakes[key];
        const data = KANJI_DATA[m.k];
        if (data && state.grades.includes(data.grade) && matchesReadingType(m.t)) {
          pool.push({ kanji: m.k, reading: m.r, type: m.t });
        }
      }
    } else {
      for (const kanji in KANJI_DATA) {
        const data = KANJI_DATA[kanji];
        if (!state.grades.includes(data.grade)) continue;
        if (matchesReadingType('on')) {
          for (const r of data.readings.on) pool.push({ kanji, reading: r, type: 'on' });
        }
        if (matchesReadingType('kun')) {
          for (const r of data.readings.kun) pool.push({ kanji, reading: r, type: 'kun' });
        }
      }
    }
    return pool;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ========== クイズ開始 ==========
  function startQuiz() {
    state.pool = buildPool();
    if (state.pool.length === 0) return;
    state.deck = shuffle(state.pool);
    state.questionIndex = 0;
    state.streak = 0;
    state.answeredInSet = 0;
    state.setCorrect = 0;
    state.setMistakes = [];
    state.allClearPending = false;
    showScreen(els.screenQuiz);
    nextQuestion();
  }

  function nextQuestion() {
    if (state.deck.length === 0) {
      if (state.pool.length === 0) return; // 出題対象が尽きた（にがて全部クリア後など）
      state.deck = shuffle(state.pool);
    }
    const item = state.deck.shift();
    state.current = item;
    state.questionIndex++;
    state.answering = false;
    renderQuestion(item);
  }

  // ========== 表示整形 ==========
  function formatDisplay(item) {
    if (item.type === 'kun' && item.reading.includes('.')) {
      const dotIdx = item.reading.indexOf('.');
      return { kanjiPart: item.kanji, okurigana: item.reading.slice(dotIdx + 1) };
    }
    return { kanjiPart: item.kanji, okurigana: null };
  }

  function answerText(item) {
    return item.reading.replace(/\./g, '');
  }

  function renderQuestion(item) {
    state.correctText = answerText(item);

    els.quizTypeBadge.textContent = item.type === 'on' ? 'おんよみ' : 'くんよみ';
    els.quizTypeBadge.className = 'quiz-type-badge ' + item.type;

    const disp = formatDisplay(item);
    els.quizKanjiDisplay.innerHTML = '';
    const kanjiSpan = document.createElement('span');
    kanjiSpan.className = 'quiz-kanji-main';
    kanjiSpan.textContent = disp.kanjiPart;
    els.quizKanjiDisplay.appendChild(kanjiSpan);
    if (disp.okurigana) {
      const okuriSpan = document.createElement('span');
      okuriSpan.className = 'okurigana';
      okuriSpan.textContent = disp.okurigana;
      els.quizKanjiDisplay.appendChild(okuriSpan);
    }

    els.correctMark.classList.add('hidden');
    els.correctMark.classList.remove('pop');

    els.quizQuestionCount.textContent = `${state.questionIndex}もんめ`;
    updateStreakDisplay();

    const choices = buildChoices(item);
    state.currentChoices = choices;
    els.choiceBtns.forEach((btn, i) => {
      btn.textContent = choices[i];
      btn.className = 'quiz-choice-btn';
      btn.disabled = false;
    });
  }

  function updateStreakDisplay() {
    if (state.streak >= 2) {
      els.quizStreak.textContent = `🔥${state.streak}`;
      els.quizStreak.classList.remove('hidden');
    } else {
      els.quizStreak.classList.add('hidden');
    }
  }

  // ========== 選択肢生成（3択） ==========
  function buildChoices(item) {
    const correctDisplay = state.correctText;
    const data = KANJI_DATA[item.kanji];
    const legitReadings = new Set(
      [...data.readings.on, ...data.readings.kun].map(r => r.replace(/\./g, ''))
    );

    const candidates = ALL_READINGS[item.type]
      .filter(c => c.kanji !== item.kanji)
      .map(c => ({
        kanji: c.kanji,
        display: c.reading.replace(/\./g, ''),
        okuriTail: (item.type === 'kun' && c.reading.includes('.'))
          ? c.reading.slice(c.reading.indexOf('.') + 1)
          : null,
      }));

    const pool = candidates.filter(c => c.display !== correctDisplay && !legitReadings.has(c.display));

    const dummies = [];
    const usedDisplays = new Set([correctDisplay]);

    function tryAdd(list) {
      for (const c of list) {
        if (dummies.length >= 2) break;
        if (usedDisplays.has(c.display)) continue;
        dummies.push(c);
        usedDisplays.add(c.display);
      }
    }

    // 優先1: 訓読み・ドットありの場合、同じ送り仮名（ドット以降一致）を優先
    if (item.type === 'kun' && item.reading.includes('.')) {
      const tail = item.reading.slice(item.reading.indexOf('.') + 1);
      tryAdd(shuffle(pool.filter(c => c.okuriTail === tail)));
    }
    // 優先2: 表示文字数が ±1
    if (dummies.length < 2) {
      const len = correctDisplay.length;
      tryAdd(shuffle(pool.filter(c => Math.abs(c.display.length - len) <= 1)));
    }
    // 優先3: 同タイプの任意
    if (dummies.length < 2) {
      tryAdd(shuffle(pool));
    }
    // 最終フォールバック（データが極端に少ない場合の保険）
    if (dummies.length < 2) {
      tryAdd(shuffle(candidates.filter(c => c.display !== correctDisplay)));
    }

    return shuffle([correctDisplay, ...dummies.map(d => d.display)]);
  }

  // ========== 回答フロー ==========
  function handleChoice(idx) {
    if (state.answering) return;
    state.answering = true;
    els.choiceBtns.forEach(b => { b.disabled = true; });

    const chosenText = state.currentChoices[idx];
    const isCorrect = chosenText === state.correctText;

    state.stats.total++;
    state.answeredInSet++;

    if (isCorrect) {
      state.stats.correct++;
      state.streak++;
      state.setCorrect++;
      if (state.streak > state.stats.bestStreak) state.stats.bestStreak = state.streak;
      els.choiceBtns[idx].classList.add('correct');
      showCorrectMark();
      if (state.quizMode === 'mistake') {
        clearMistakeAndCheckDone(state.current);
      }
    } else {
      state.streak = 0;
      els.choiceBtns[idx].classList.add('wrong');
      const correctIdx = state.currentChoices.indexOf(state.correctText);
      if (correctIdx >= 0) els.choiceBtns[correctIdx].classList.add('correct');
      state.setMistakes.push(state.current.kanji);
      registerMistake(state.current);
    }

    saveStats(state.stats);
    updateStreakDisplay();

    const delay = isCorrect ? 700 : 1400;
    state.answerTimeoutId = setTimeout(() => {
      state.answerTimeoutId = null;
      proceedAfterAnswer();
    }, delay);
  }

  function showCorrectMark() {
    els.correctMark.classList.remove('hidden');
    els.correctMark.classList.remove('pop');
    void els.correctMark.offsetWidth; // reflow でアニメーションを再始動
    els.correctMark.classList.add('pop');
  }

  function registerMistake(item) {
    if (state.quizMode !== 'all') return; // にがてモードでの誤答は再登録不要（既ににがて登録済みのため）
    const key = mistakeKey(item);
    state.mistakes[key] = { k: item.kanji, r: item.reading, t: item.type };
    saveMistakes(state.mistakes);
    scheduleReinsert(item);
  }

  function scheduleReinsert(item) {
    const key = mistakeKey(item);
    const alreadyScheduled = state.deck.some(d => mistakeKey(d) === key);
    if (alreadyScheduled) return;
    const pos = Math.min(4, state.deck.length);
    state.deck.splice(pos, 0, item);
  }

  function clearMistakeAndCheckDone(item) {
    const key = mistakeKey(item);
    delete state.mistakes[key];
    saveMistakes(state.mistakes);
    state.pool = state.pool.filter(p => mistakeKey(p) !== key);
    state.deck = state.deck.filter(p => mistakeKey(p) !== key);
    if (state.pool.length === 0) {
      state.allClearPending = true;
    }
  }

  function proceedAfterAnswer() {
    if (state.allClearPending) {
      state.allClearPending = false;
      showAllClearCelebration();
      return;
    }
    if (state.answeredInSet > 0 && state.answeredInSet % 10 === 0) {
      showCelebration();
      return;
    }
    nextQuestion();
  }

  // ========== 10問ごとのお祝いオーバーレイ ==========
  function showCelebration() {
    els.celebEmoji.textContent = '🎉';
    els.celebCount.textContent = `${state.questionIndex}もん クリア！`;
    els.celebMessage.textContent = PRAISE_MESSAGES[state.celebrationIndex % PRAISE_MESSAGES.length];
    state.celebrationIndex++;
    els.celebSetScore.textContent = `この10もん: ${state.setCorrect}/10 せいかい`;

    const uniqueMistakes = [...new Set(state.setMistakes)];
    if (uniqueMistakes.length > 0) {
      els.celebMistakesChips.innerHTML = '';
      uniqueMistakes.forEach(k => {
        const chip = document.createElement('span');
        chip.className = 'mistake-chip';
        chip.textContent = k;
        els.celebMistakesChips.appendChild(chip);
      });
      els.celebMistakesBlock.classList.remove('hidden');
    } else {
      els.celebMistakesBlock.classList.add('hidden');
    }

    els.celebBestStreak.textContent = `ベストストリーク: 🔥${state.stats.bestStreak}`;
    els.celebContinueBtn.classList.remove('hidden');
    els.celebEndBtn.textContent = 'おわる';

    state.setCorrect = 0;
    state.setMistakes = [];

    els.celebrationOverlay.classList.remove('hidden');
    launchConfetti();
  }

  function showAllClearCelebration() {
    els.celebEmoji.textContent = '🎉';
    els.celebCount.textContent = '';
    els.celebMessage.textContent = 'にがて ぜんぶクリア！🎉';
    els.celebSetScore.textContent = '';
    els.celebMistakesBlock.classList.add('hidden');
    els.celebBestStreak.textContent = '';
    els.celebContinueBtn.classList.add('hidden');
    els.celebEndBtn.textContent = 'セットアップへ';

    els.celebrationOverlay.classList.remove('hidden');
    launchConfetti();
  }

  function hideCelebrationOverlay() {
    els.celebrationOverlay.classList.add('hidden');
    stopConfetti();
  }

  // ========== 紙吹雪アニメーション（オーバーレイ専用） ==========
  let celebParticleAnimId = null;

  function launchConfetti() {
    const canvas = els.celebCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
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

    if (celebParticleAnimId) cancelAnimationFrame(celebParticleAnimId);

    function animate() {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
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
        celebParticleAnimId = requestAnimationFrame(animate);
      } else {
        celebParticleAnimId = null;
      }
    }
    animate();
  }

  function stopConfetti() {
    if (celebParticleAnimId) {
      cancelAnimationFrame(celebParticleAnimId);
      celebParticleAnimId = null;
    }
    const canvas = els.celebCanvas;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  // ========== イベントリスナー ==========
  function setupEventListeners() {
    els.btnQuiz.addEventListener('click', enterSetupScreen);
    els.btnQuizSetupBack.addEventListener('click', () => showScreen(els.screenSelect));
    els.btnQuizBack.addEventListener('click', goToSetupFromQuiz);

    els.gradeChips.forEach(chip => {
      chip.addEventListener('click', () => toggleGrade(parseInt(chip.dataset.grade, 10)));
    });

    els.readingTypeBtns.forEach(btn => {
      btn.addEventListener('click', () => setReadingType(btn.dataset.rtype));
    });

    els.quizModeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        setActiveQuizMode(btn.dataset.quizmode);
      });
    });

    els.btnQuizStart.addEventListener('click', startQuiz);

    els.choiceBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => handleChoice(i));
    });

    els.celebContinueBtn.addEventListener('click', () => {
      hideCelebrationOverlay();
      nextQuestion();
    });
    els.celebEndBtn.addEventListener('click', () => {
      hideCelebrationOverlay();
      enterSetupScreen();
    });
  }

  // ========== 起動 ==========
  function init() {
    setupEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
