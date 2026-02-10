/* ========================================
   書き順バリデーション
   ユーザーのストロークを期待される画と比較
   ======================================== */

class StrokeValidator {
  constructor() {
    // 判定の厳しさ設定
    this.thresholds = {
      easy: {
        startDistance: 0.20,   // キャンバスサイズの20%
        endDistance: 0.25,
        directionAngle: 60,    // 度
        pathScore: 0.3,        // DTWスコア閾値（低いほど厳しい）
      },
      normal: {
        startDistance: 0.15,
        endDistance: 0.20,
        directionAngle: 45,
        pathScore: 0.4,
      },
      hard: {
        startDistance: 0.12,
        endDistance: 0.15,
        directionAngle: 35,
        pathScore: 0.5,
      }
    };
    this.mode = 'easy';
  }

  setMode(mode) {
    this.mode = mode;
  }

  getThreshold() {
    return this.thresholds[this.mode] || this.thresholds.easy;
  }

  /**
   * ユーザーのストロークを期待される画と比較
   * @param {Array} userPoints - [{x, y}, ...] ユーザーが描いた点列
   * @param {Object} expectedStroke - {path, start, end, direction}
   * @param {number} canvasSize - キャンバスの基準サイズ
   * @returns {Object} {valid, reason, details}
   */
  validate(userPoints, expectedStroke, canvasSize) {
    if (!userPoints || userPoints.length < 2) {
      return { valid: false, reason: 'too_short', message: 'もうすこしながくかいてね' };
    }

    const threshold = this.getThreshold();
    const expectedPoints = this.pathToPoints(expectedStroke.path, canvasSize);

    if (!expectedPoints || expectedPoints.length < 2) {
      // パスのパースに失敗した場合はパス
      return { valid: true, reason: 'ok', message: '' };
    }

    const userStart = userPoints[0];
    const userEnd = userPoints[userPoints.length - 1];
    const expStart = expectedPoints[0];
    const expEnd = expectedPoints[expectedPoints.length - 1];

    // 1. 始点チェック
    const startDist = this.distance(userStart, expStart) / canvasSize;
    if (startDist > threshold.startDistance) {
      return {
        valid: false,
        reason: 'wrong_start',
        message: 'ここからだよ！',
        expectedStart: expStart
      };
    }

    // 2. 方向チェック
    const userAngle = this.getStrokeAngle(userPoints);
    const expAngle = this.getStrokeAngle(expectedPoints);
    const angleDiff = this.angleDifference(userAngle, expAngle);

    if (angleDiff > threshold.directionAngle) {
      // 逆方向かチェック（180度差）
      const reverseDiff = Math.abs(angleDiff - 180);
      if (reverseDiff < threshold.directionAngle) {
        return {
          valid: false,
          reason: 'reverse_direction',
          message: 'ぎゃく！こっちだよ',
          expectedDirection: expAngle
        };
      }
      return {
        valid: false,
        reason: 'wrong_direction',
        message: 'むきがちがうよ',
        expectedDirection: expAngle
      };
    }

    // 3. 経路チェック（簡易DTW）
    const pathScore = this.computePathSimilarity(userPoints, expectedPoints, canvasSize);
    if (pathScore > threshold.pathScore) {
      return {
        valid: false,
        reason: 'wrong_path',
        message: 'このせんをなぞってね',
        score: pathScore
      };
    }

    // 4. 終点チェック（ゆるめ）
    const endDist = this.distance(userEnd, expEnd) / canvasSize;
    if (endDist > threshold.endDistance) {
      // 終点は警告程度（合格にはする）
      return {
        valid: true,
        reason: 'ok_end_off',
        message: 'いいね！',
        warning: 'さいごはもうすこしこっちだよ'
      };
    }

    return { valid: true, reason: 'ok', message: 'いいね！' };
  }

  /**
   * SVGパス文字列を点列に変換
   */
  pathToPoints(pathStr, canvasSize) {
    const points = [];
    if (!pathStr) return points;

    // SVGパスをパース（M, L, C, Q コマンド対応）
    const viewBoxSize = 109; // KanjiVG標準
    const scale = canvasSize / viewBoxSize;

    const commands = this.parseSVGPath(pathStr);
    let cx = 0, cy = 0;

    for (const cmd of commands) {
      switch (cmd.type) {
        case 'M':
          cx = cmd.x * scale;
          cy = cmd.y * scale;
          points.push({ x: cx, y: cy });
          break;
        case 'L':
          // 直線を補間
          const lx = cmd.x * scale;
          const ly = cmd.y * scale;
          const lSteps = Math.max(5, Math.ceil(this.distance({ x: cx, y: cy }, { x: lx, y: ly }) / 5));
          for (let i = 1; i <= lSteps; i++) {
            const t = i / lSteps;
            points.push({
              x: cx + (lx - cx) * t,
              y: cy + (ly - cy) * t
            });
          }
          cx = lx;
          cy = ly;
          break;
        case 'C':
          // 3次ベジェ曲線を補間
          const steps = 20;
          for (let i = 1; i <= steps; i++) {
            const t = i / steps;
            const p = this.cubicBezier(t,
              { x: cx, y: cy },
              { x: cmd.x1 * scale, y: cmd.y1 * scale },
              { x: cmd.x2 * scale, y: cmd.y2 * scale },
              { x: cmd.x * scale, y: cmd.y * scale }
            );
            points.push(p);
          }
          cx = cmd.x * scale;
          cy = cmd.y * scale;
          break;
        case 'Q':
          // 2次ベジェ曲線を補間
          const qSteps = 15;
          for (let i = 1; i <= qSteps; i++) {
            const t = i / qSteps;
            const p = this.quadBezier(t,
              { x: cx, y: cy },
              { x: cmd.x1 * scale, y: cmd.y1 * scale },
              { x: cmd.x * scale, y: cmd.y * scale }
            );
            points.push(p);
          }
          cx = cmd.x * scale;
          cy = cmd.y * scale;
          break;
      }
    }

    return points;
  }

  /**
   * SVGパスコマンドをパース（相対コマンド c/s/q/l/m 対応）
   */
  parseSVGPath(d) {
    const commands = [];
    // 数値トークンの正規表現（負数・小数・科学記数法対応）
    const numRe = /-?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/gi;
    // コマンドごとに分割
    const cmdRe = /([MmLlCcQqSsHhVvTtAaZz])/;
    const parts = d.split(cmdRe).filter(s => s.length > 0);

    let cx = 0, cy = 0; // 現在位置

    let i = 0;
    while (i < parts.length) {
      const cmd = parts[i];
      const isCommand = /^[MmLlCcQqSsHhVvTtAaZz]$/.test(cmd);
      if (!isCommand) { i++; continue; }

      const argsStr = (i + 1 < parts.length && !/^[MmLlCcQqSsHhVvTtAaZz]$/.test(parts[i + 1]))
        ? parts[i + 1] : '';
      const nums = [];
      let m;
      const re = new RegExp(numRe.source, 'gi');
      while ((m = re.exec(argsStr)) !== null) nums.push(parseFloat(m[0]));

      const isRelative = cmd === cmd.toLowerCase();
      const type = cmd.toUpperCase();

      switch (type) {
        case 'M': {
          for (let j = 0; j < nums.length; j += 2) {
            const x = isRelative ? cx + nums[j] : nums[j];
            const y = isRelative ? cy + nums[j + 1] : nums[j + 1];
            commands.push({ type: j === 0 ? 'M' : 'L', x, y });
            cx = x; cy = y;
          }
          break;
        }
        case 'L': {
          for (let j = 0; j < nums.length; j += 2) {
            const x = isRelative ? cx + nums[j] : nums[j];
            const y = isRelative ? cy + nums[j + 1] : nums[j + 1];
            commands.push({ type: 'L', x, y });
            cx = x; cy = y;
          }
          break;
        }
        case 'H': {
          for (let j = 0; j < nums.length; j++) {
            const x = isRelative ? cx + nums[j] : nums[j];
            commands.push({ type: 'L', x, y: cy });
            cx = x;
          }
          break;
        }
        case 'V': {
          for (let j = 0; j < nums.length; j++) {
            const y = isRelative ? cy + nums[j] : nums[j];
            commands.push({ type: 'L', x: cx, y });
            cy = y;
          }
          break;
        }
        case 'C': {
          for (let j = 0; j + 5 < nums.length; j += 6) {
            const x1 = isRelative ? cx + nums[j] : nums[j];
            const y1 = isRelative ? cy + nums[j + 1] : nums[j + 1];
            const x2 = isRelative ? cx + nums[j + 2] : nums[j + 2];
            const y2 = isRelative ? cy + nums[j + 3] : nums[j + 3];
            const x = isRelative ? cx + nums[j + 4] : nums[j + 4];
            const y = isRelative ? cy + nums[j + 5] : nums[j + 5];
            commands.push({ type: 'C', x1, y1, x2, y2, x, y });
            cx = x; cy = y;
          }
          break;
        }
        case 'S': {
          for (let j = 0; j + 3 < nums.length; j += 4) {
            const x2 = isRelative ? cx + nums[j] : nums[j];
            const y2 = isRelative ? cy + nums[j + 1] : nums[j + 1];
            const x = isRelative ? cx + nums[j + 2] : nums[j + 2];
            const y = isRelative ? cy + nums[j + 3] : nums[j + 3];
            // S は前のCの反射制御点を使う（簡易的にx2,y2を両方の制御点に）
            commands.push({ type: 'C', x1: x2, y1: y2, x2, y2, x, y });
            cx = x; cy = y;
          }
          break;
        }
        case 'Q': {
          for (let j = 0; j + 3 < nums.length; j += 4) {
            const x1 = isRelative ? cx + nums[j] : nums[j];
            const y1 = isRelative ? cy + nums[j + 1] : nums[j + 1];
            const x = isRelative ? cx + nums[j + 2] : nums[j + 2];
            const y = isRelative ? cy + nums[j + 3] : nums[j + 3];
            commands.push({ type: 'Q', x1, y1, x, y });
            cx = x; cy = y;
          }
          break;
        }
        case 'Z':
          break;
      }

      i += argsStr ? 2 : 1;
    }

    return commands;
  }

  /**
   * 3次ベジェ曲線上の点
   */
  cubicBezier(t, p0, p1, p2, p3) {
    const mt = 1 - t;
    return {
      x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
      y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y
    };
  }

  /**
   * 2次ベジェ曲線上の点
   */
  quadBezier(t, p0, p1, p2) {
    const mt = 1 - t;
    return {
      x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
      y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
    };
  }

  /**
   * 2点間の距離
   */
  distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * ストロークの全体的な方向角度（度）
   */
  getStrokeAngle(points) {
    if (points.length < 2) return 0;
    // 最初の1/4と最後の1/4の中心点間の角度を使う（ノイズ軽減）
    const q1End = Math.max(1, Math.floor(points.length * 0.25));
    const q4Start = Math.floor(points.length * 0.75);

    let sx = 0, sy = 0;
    for (let i = 0; i < q1End; i++) {
      sx += points[i].x;
      sy += points[i].y;
    }
    sx /= q1End;
    sy /= q1End;

    let ex = 0, ey = 0;
    const q4Count = points.length - q4Start;
    for (let i = q4Start; i < points.length; i++) {
      ex += points[i].x;
      ey += points[i].y;
    }
    ex /= q4Count;
    ey /= q4Count;

    return Math.atan2(ey - sy, ex - sx) * 180 / Math.PI;
  }

  /**
   * 角度差（0～180度）
   */
  angleDifference(a1, a2) {
    let diff = Math.abs(a1 - a2) % 360;
    if (diff > 180) diff = 360 - diff;
    return diff;
  }

  /**
   * パスの類似度（簡易DTW）
   * 値が小さいほど類似
   */
  computePathSimilarity(userPoints, expectedPoints, canvasSize) {
    // 両方のポイントを同じ数にリサンプル
    const n = 20;
    const user = this.resample(userPoints, n);
    const expected = this.resample(expectedPoints, n);

    // 平均距離を計算
    let totalDist = 0;
    for (let i = 0; i < n; i++) {
      totalDist += this.distance(user[i], expected[i]);
    }

    return (totalDist / n) / canvasSize;
  }

  /**
   * 点列をN個に均等リサンプル
   */
  resample(points, n) {
    if (points.length === 0) return [];
    if (points.length === 1) return Array(n).fill(points[0]);

    // 累積距離を計算
    const cumDist = [0];
    for (let i = 1; i < points.length; i++) {
      cumDist.push(cumDist[i - 1] + this.distance(points[i - 1], points[i]));
    }
    const totalLength = cumDist[cumDist.length - 1];

    if (totalLength === 0) return Array(n).fill(points[0]);

    const result = [{ ...points[0] }];
    let j = 1;

    for (let i = 1; i < n - 1; i++) {
      const targetDist = (i / (n - 1)) * totalLength;
      while (j < cumDist.length - 1 && cumDist[j] < targetDist) j++;
      const segStart = j - 1;
      const segLen = cumDist[j] - cumDist[segStart];
      const t = segLen > 0 ? (targetDist - cumDist[segStart]) / segLen : 0;
      result.push({
        x: points[segStart].x + (points[j].x - points[segStart].x) * t,
        y: points[segStart].y + (points[j].y - points[segStart].y) * t
      });
    }

    result.push({ ...points[points.length - 1] });
    return result;
  }
}
