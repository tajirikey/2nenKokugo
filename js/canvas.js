/* ========================================
   描画キャンバス
   Apple Pencil筆圧対応 + ストローク記録
   ======================================== */

class DrawingCanvas {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.isDrawing = false;
    this.currentStrokePoints = [];
    this.allStrokes = []; // 完了した全ストローク
    this.onStrokeComplete = null; // コールバック

    // スタイル設定
    this.strokeColor = '#000000';
    this.baseStrokeRatio = 0.05; // キャンバスサイズの5%がペン太さ
    this.strokeWidth = 18;

    this.setupEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const container = this.canvas.parentElement;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
    this.strokeWidth = Math.max(4, Math.min(rect.width, rect.height) * this.baseStrokeRatio);
    this.redraw();
  }

  setupEvents() {
    // Pointer Events（Apple Pencil対応）
    this.canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    this.canvas.addEventListener('pointermove', (e) => this.onPointerMove(e));
    this.canvas.addEventListener('pointerup', (e) => this.onPointerUp(e));
    this.canvas.addEventListener('pointercancel', (e) => this.onPointerUp(e));
    this.canvas.addEventListener('pointerleave', (e) => this.onPointerUp(e));

    // タッチのデフォルト動作を防止（スクロール等）
    this.canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    this.canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }

  getPoint(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  onPointerDown(e) {
    // マルチタッチ防止（Apple Pencil + 手のひら同時タッチ対策）
    if (this.isDrawing) return;

    this.isDrawing = true;
    this.currentStrokePoints = [];

    const pt = this.getPoint(e);
    this.currentStrokePoints.push(pt);

    this.ctx.beginPath();
    this.ctx.moveTo(pt.x, pt.y);
  }

  onPointerMove(e) {
    if (!this.isDrawing) return;

    // coalescedEventsで高精度なポイントを取得
    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];

    for (const evt of events) {
      const pt = this.getPoint(evt);
      this.currentStrokePoints.push(pt);

      this.ctx.lineWidth = this.strokeWidth;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.strokeStyle = this.strokeColor;
      this.ctx.lineTo(pt.x, pt.y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(pt.x, pt.y);
    }
  }

  onPointerUp(e) {
    if (!this.isDrawing) return;
    this.isDrawing = false;

    if (this.currentStrokePoints.length >= 2) {
      // ストローク完了 → コールバック
      const points = this.currentStrokePoints.map(p => ({ x: p.x, y: p.y }));
      this.allStrokes.push([...this.currentStrokePoints]);

      if (this.onStrokeComplete) {
        this.onStrokeComplete(points);
      }
    }

    this.currentStrokePoints = [];
  }

  /**
   * 直前のストロークを取り消す
   */
  undoLastStroke() {
    if (this.allStrokes.length > 0) {
      this.allStrokes.pop();
      this.redraw();
    }
  }

  /**
   * 全消去
   */
  clear() {
    this.allStrokes = [];
    this.currentStrokePoints = [];
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  /**
   * 保存済みストロークを再描画
   */
  redraw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (const stroke of this.allStrokes) {
      if (stroke.length < 2) continue;
      this.ctx.beginPath();
      this.ctx.moveTo(stroke[0].x, stroke[0].y);

      this.ctx.lineWidth = this.strokeWidth;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.strokeStyle = this.strokeColor;
      for (let i = 1; i < stroke.length; i++) {
        this.ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      this.ctx.stroke();
    }
  }

  /**
   * キャンバスの基準サイズ（短辺）
   */
  getCanvasSize() {
    return Math.min(this.canvasWidth, this.canvasHeight);
  }

  /**
   * キャンバスのオフセット（SVG座標をキャンバス座標にマッピング）
   */
  getMapping() {
    const size = this.getCanvasSize() * 0.8; // guide-svgが80%なので
    const offsetX = (this.canvasWidth - size) / 2;
    const offsetY = (this.canvasHeight - size) / 2;
    return { size, offsetX, offsetY, scale: size / 109 };
  }

  /**
   * ストロークを小さいキャンバスに描き直して画像として書き出す
   */
  exportImage(size = 300) {
    const offscreen = document.createElement('canvas');
    offscreen.width = size;
    offscreen.height = size;
    const ctx = offscreen.getContext('2d');

    const canvasSize = Math.max(this.canvasWidth, this.canvasHeight);
    if (canvasSize === 0) return null;
    const scale = size / canvasSize;
    const ox = (size - this.canvasWidth * scale) / 2;
    const oy = (size - this.canvasHeight * scale) / 2;

    for (const stroke of this.allStrokes) {
      if (stroke.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x * scale + ox, stroke[0].y * scale + oy);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x * scale + ox, stroke[i].y * scale + oy);
      }
      ctx.lineWidth = this.strokeWidth * scale;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = this.strokeColor;
      ctx.stroke();
    }

    return offscreen.toDataURL('image/png');
  }
}
