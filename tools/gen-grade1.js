#!/usr/bin/env node
/**
 * gen-grade1.js
 *
 * Downloads KanjiVG SVG files for all 80 first-grade Japanese kanji,
 * parses stroke paths, computes start/end/direction for each stroke,
 * and outputs grade1-data.json.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Grade-1 kanji data: character, on readings, kun readings
// ---------------------------------------------------------------------------
const GRADE1_KANJI = [
  { char: "一", on: ["イチ", "イツ"], kun: ["ひと.つ"] },
  { char: "右", on: ["ウ", "ユウ"], kun: ["みぎ"] },
  { char: "雨", on: ["ウ"], kun: ["あめ", "あま"] },
  { char: "円", on: ["エン"], kun: ["まる.い"] },
  { char: "王", on: ["オウ"], kun: [] },
  { char: "音", on: ["オン", "イン"], kun: ["おと", "ね"] },
  { char: "下", on: ["カ", "ゲ"], kun: ["した", "さ.げる", "くだ.る"] },
  { char: "火", on: ["カ"], kun: ["ひ"] },
  { char: "花", on: ["カ"], kun: ["はな"] },
  { char: "貝", on: ["バイ"], kun: ["かい"] },
  { char: "学", on: ["ガク"], kun: ["まな.ぶ"] },
  { char: "気", on: ["キ", "ケ"], kun: [] },
  { char: "九", on: ["キュウ", "ク"], kun: ["ここの.つ"] },
  { char: "休", on: ["キュウ"], kun: ["やす.む"] },
  { char: "玉", on: ["ギョク"], kun: ["たま"] },
  { char: "金", on: ["キン", "コン"], kun: ["かね", "かな"] },
  { char: "空", on: ["クウ"], kun: ["そら", "あ.く", "から"] },
  { char: "月", on: ["ゲツ", "ガツ"], kun: ["つき"] },
  { char: "犬", on: ["ケン"], kun: ["いぬ"] },
  { char: "見", on: ["ケン"], kun: ["み.る"] },
  { char: "五", on: ["ゴ"], kun: ["いつ.つ"] },
  { char: "口", on: ["コウ", "ク"], kun: ["くち"] },
  { char: "校", on: ["コウ"], kun: [] },
  { char: "左", on: ["サ"], kun: ["ひだり"] },
  { char: "三", on: ["サン"], kun: ["み.つ"] },
  { char: "山", on: ["サン"], kun: ["やま"] },
  { char: "子", on: ["シ", "ス"], kun: ["こ"] },
  { char: "四", on: ["シ"], kun: ["よ.つ", "よん"] },
  { char: "糸", on: ["シ"], kun: ["いと"] },
  { char: "字", on: ["ジ"], kun: ["あざ"] },
  { char: "耳", on: ["ジ"], kun: ["みみ"] },
  { char: "七", on: ["シチ"], kun: ["なな.つ"] },
  { char: "車", on: ["シャ"], kun: ["くるま"] },
  { char: "手", on: ["シュ"], kun: ["て"] },
  { char: "十", on: ["ジュウ"], kun: ["とお"] },
  { char: "出", on: ["シュツ"], kun: ["で.る", "だ.す"] },
  { char: "女", on: ["ジョ", "ニョ"], kun: ["おんな"] },
  { char: "小", on: ["ショウ"], kun: ["ちい.さい", "こ"] },
  { char: "上", on: ["ジョウ", "ショウ"], kun: ["うえ", "あ.げる", "のぼ.る"] },
  { char: "森", on: ["シン"], kun: ["もり"] },
  { char: "人", on: ["ジン", "ニン"], kun: ["ひと"] },
  { char: "水", on: ["スイ"], kun: ["みず"] },
  { char: "正", on: ["セイ", "ショウ"], kun: ["ただ.しい", "まさ"] },
  { char: "生", on: ["セイ", "ショウ"], kun: ["い.きる", "う.まれる", "なま"] },
  { char: "青", on: ["セイ", "ショウ"], kun: ["あお"] },
  { char: "夕", on: ["セキ"], kun: ["ゆう"] },
  { char: "石", on: ["セキ", "シャク"], kun: ["いし"] },
  { char: "赤", on: ["セキ", "シャク"], kun: ["あか"] },
  { char: "千", on: ["セン"], kun: ["ち"] },
  { char: "川", on: ["セン"], kun: ["かわ"] },
  { char: "先", on: ["セン"], kun: ["さき"] },
  { char: "早", on: ["ソウ", "サッ"], kun: ["はや.い"] },
  { char: "草", on: ["ソウ"], kun: ["くさ"] },
  { char: "足", on: ["ソク"], kun: ["あし", "た.りる"] },
  { char: "村", on: ["ソン"], kun: ["むら"] },
  { char: "大", on: ["ダイ", "タイ"], kun: ["おお.きい"] },
  { char: "男", on: ["ダン", "ナン"], kun: ["おとこ"] },
  { char: "竹", on: ["チク"], kun: ["たけ"] },
  { char: "中", on: ["チュウ"], kun: ["なか"] },
  { char: "虫", on: ["チュウ"], kun: ["むし"] },
  { char: "町", on: ["チョウ"], kun: ["まち"] },
  { char: "天", on: ["テン"], kun: ["あめ", "あま"] },
  { char: "田", on: ["デン"], kun: ["た"] },
  { char: "土", on: ["ド", "ト"], kun: ["つち"] },
  { char: "二", on: ["ニ"], kun: ["ふた.つ"] },
  { char: "日", on: ["ニチ", "ジツ"], kun: ["ひ", "か"] },
  { char: "入", on: ["ニュウ"], kun: ["い.る", "はい.る"] },
  { char: "年", on: ["ネン"], kun: ["とし"] },
  { char: "白", on: ["ハク", "ビャク"], kun: ["しろ", "しら"] },
  { char: "八", on: ["ハチ"], kun: ["や.つ", "よう"] },
  { char: "百", on: ["ヒャク"], kun: [] },
  { char: "文", on: ["ブン", "モン"], kun: ["ふみ"] },
  { char: "木", on: ["ボク", "モク"], kun: ["き", "こ"] },
  { char: "本", on: ["ホン"], kun: ["もと"] },
  { char: "名", on: ["メイ", "ミョウ"], kun: ["な"] },
  { char: "目", on: ["モク", "ボク"], kun: ["め"] },
  { char: "立", on: ["リツ", "リュウ"], kun: ["た.つ"] },
  { char: "力", on: ["リョク", "リキ"], kun: ["ちから"] },
  { char: "林", on: ["リン"], kun: ["はやし"] },
  { char: "六", on: ["ロク"], kun: ["む.つ"] },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a character to its 5-digit hex code point (lowercase, zero-padded). */
function charToHex5(ch) {
  return ch.codePointAt(0).toString(16).padStart(5, "0");
}

/**
 * Download a URL using curl, returning the body as a string.
 * Retries up to `retries` times on failure.
 */
function download(url, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const result = execSync(
        `curl -sS --fail --max-time 30 "${url}"`,
        { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
      );
      return result;
    } catch (err) {
      if (attempt === retries) {
        throw new Error(`Failed to download ${url} after ${retries + 1} attempts: ${err.message}`);
      }
      // Wait before retry
      execSync("sleep 2");
    }
  }
}

// ---------------------------------------------------------------------------
// SVG path parsing
// ---------------------------------------------------------------------------

/**
 * Tokenize an SVG path `d` attribute into an array of commands.
 * Each command is { cmd: 'M'|'L'|'C'|... , args: [numbers] }.
 */
function tokenizePath(d) {
  const commands = [];
  // Match command letters followed by their numeric arguments
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
  let match;
  while ((match = re.exec(d)) !== null) {
    const cmd = match[1];
    const argStr = match[2].trim();
    let args = [];
    if (argStr.length > 0) {
      // Parse numbers, handling negative signs and decimals carefully.
      // Numbers can be separated by commas or spaces, and a negative sign
      // can act as a separator.
      const numRe = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
      let nm;
      while ((nm = numRe.exec(argStr)) !== null) {
        args.push(parseFloat(nm[0]));
      }
    }
    commands.push({ cmd, args });
  }
  return commands;
}

/**
 * Given the parsed commands of an SVG path, trace through them and return
 * { start: [x,y], end: [x,y] }.
 *
 * Handles: M, L, H, V, C, S, Q, T, A, Z (and lowercase relatives).
 */
function tracePathStartEnd(commands) {
  let x = 0,
    y = 0;
  let startX = null,
    startY = null;
  let subpathStartX = 0,
    subpathStartY = 0;

  for (const { cmd, args } of commands) {
    switch (cmd) {
      // ---- Move To ----
      case "M": {
        // First pair is moveto; subsequent pairs are implicit lineto.
        for (let i = 0; i < args.length; i += 2) {
          x = args[i];
          y = args[i + 1];
          if (startX === null) {
            startX = x;
            startY = y;
          }
          if (i === 0) {
            subpathStartX = x;
            subpathStartY = y;
          }
        }
        break;
      }
      case "m": {
        for (let i = 0; i < args.length; i += 2) {
          x += args[i];
          y += args[i + 1];
          if (startX === null) {
            startX = x;
            startY = y;
          }
          if (i === 0) {
            subpathStartX = x;
            subpathStartY = y;
          }
        }
        break;
      }

      // ---- Line To ----
      case "L": {
        for (let i = 0; i < args.length; i += 2) {
          x = args[i];
          y = args[i + 1];
        }
        break;
      }
      case "l": {
        for (let i = 0; i < args.length; i += 2) {
          x += args[i];
          y += args[i + 1];
        }
        break;
      }

      // ---- Horizontal Line ----
      case "H": {
        for (let i = 0; i < args.length; i++) {
          x = args[i];
        }
        break;
      }
      case "h": {
        for (let i = 0; i < args.length; i++) {
          x += args[i];
        }
        break;
      }

      // ---- Vertical Line ----
      case "V": {
        for (let i = 0; i < args.length; i++) {
          y = args[i];
        }
        break;
      }
      case "v": {
        for (let i = 0; i < args.length; i++) {
          y += args[i];
        }
        break;
      }

      // ---- Cubic Bezier (C: x1,y1 x2,y2 x,y) ----
      case "C": {
        for (let i = 0; i < args.length; i += 6) {
          x = args[i + 4];
          y = args[i + 5];
        }
        break;
      }
      case "c": {
        for (let i = 0; i < args.length; i += 6) {
          x += args[i + 4];
          y += args[i + 5];
        }
        break;
      }

      // ---- Smooth Cubic Bezier (S: x2,y2 x,y) ----
      case "S": {
        for (let i = 0; i < args.length; i += 4) {
          x = args[i + 2];
          y = args[i + 3];
        }
        break;
      }
      case "s": {
        for (let i = 0; i < args.length; i += 4) {
          x += args[i + 2];
          y += args[i + 3];
        }
        break;
      }

      // ---- Quadratic Bezier (Q: x1,y1 x,y) ----
      case "Q": {
        for (let i = 0; i < args.length; i += 4) {
          x = args[i + 2];
          y = args[i + 3];
        }
        break;
      }
      case "q": {
        for (let i = 0; i < args.length; i += 4) {
          x += args[i + 2];
          y += args[i + 3];
        }
        break;
      }

      // ---- Smooth Quadratic Bezier (T: x,y) ----
      case "T": {
        for (let i = 0; i < args.length; i += 2) {
          x = args[i];
          y = args[i + 1];
        }
        break;
      }
      case "t": {
        for (let i = 0; i < args.length; i += 2) {
          x += args[i];
          y += args[i + 1];
        }
        break;
      }

      // ---- Arc (A: rx ry x-rotation large-arc-flag sweep-flag x y) ----
      case "A": {
        for (let i = 0; i < args.length; i += 7) {
          x = args[i + 5];
          y = args[i + 6];
        }
        break;
      }
      case "a": {
        for (let i = 0; i < args.length; i += 7) {
          x += args[i + 5];
          y += args[i + 6];
        }
        break;
      }

      // ---- Close Path ----
      case "Z":
      case "z": {
        x = subpathStartX;
        y = subpathStartY;
        break;
      }
    }
  }

  return {
    start: [round1(startX ?? 0), round1(startY ?? 0)],
    end: [round1(x), round1(y)],
  };
}

/** Round to 1 decimal place. */
function round1(n) {
  return Math.round(n * 10) / 10;
}

/**
 * Compute direction category from start to end.
 * Angle is measured with atan2(dy, dx) where +y is down (SVG convention).
 * Convert to degrees: 0° = right, 90° = down, etc.
 */
function computeDirection(start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI; // -180..180

  // More specific diagonal ranges first (narrower), then broader cardinal ranges
  // "top-left-to-bottom-right": 22.5° to 67.5°
  if (angleDeg >= 22.5 && angleDeg < 67.5) return "top-left-to-bottom-right";
  // "top-right-to-bottom-left": 112.5° to 157.5°
  if (angleDeg >= 112.5 && angleDeg < 157.5) return "top-right-to-bottom-left";

  // "left-right": -45° to 45° (but excluding diagonal sub-range already handled)
  if (angleDeg >= -45 && angleDeg < 45) return "left-right";
  // "top-bottom": 45° to 135°
  if (angleDeg >= 45 && angleDeg < 135) return "top-bottom";
  // "bottom-top": -135° to -45°
  if (angleDeg >= -135 && angleDeg < -45) return "bottom-top";
  // "right-left": > 135° or < -135°
  return "right-left";
}

// ---------------------------------------------------------------------------
// SVG parsing (lightweight, no XML library needed)
// ---------------------------------------------------------------------------

/**
 * Extract stroke <path> elements from an SVG string.
 * Returns an array of `d` attribute strings, in document order.
 *
 * Strategy: find all <path ...> elements whose id matches kvg:XXXXX-sN.
 * We explicitly exclude anything inside the StrokeNumbers group.
 */
function extractStrokePaths(svg, hex5) {
  const paths = [];

  // Remove the StrokeNumbers group entirely so we don't accidentally pick up
  // anything from it (it only has <text> elements, but let's be safe).
  const snRe = new RegExp(
    `<g\\s+id="kvg:StrokeNumbers_${hex5}"[\\s\\S]*?</g>`,
    "i"
  );
  const cleaned = svg.replace(snRe, "");

  // Now extract all <path> elements with a `d` attribute.
  // KanjiVG path ids follow the pattern kvg:XXXXX-sN
  const pathRe = /<path\s[^>]*?id="kvg:[0-9a-f]+-s\d+"[^>]*?\/?>/gi;
  let m;
  while ((m = pathRe.exec(cleaned)) !== null) {
    const tag = m[0];
    const dMatch = tag.match(/\bd="([^"]*)"/);
    if (dMatch) {
      paths.push(dMatch[1]);
    }
  }

  return paths;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const result = {};
  const total = GRADE1_KANJI.length;
  console.log(`Processing ${total} kanji...\n`);

  for (let i = 0; i < total; i++) {
    const { char, on, kun } = GRADE1_KANJI[i];
    const hex5 = charToHex5(char);
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex5}.svg`;

    process.stdout.write(
      `[${String(i + 1).padStart(2)}/80] ${char} (U+${hex5.toUpperCase()}) ... `
    );

    let svg;
    try {
      svg = download(url);
    } catch (err) {
      console.error(`FAILED: ${err.message}`);
      continue;
    }

    const pathDAttrs = extractStrokePaths(svg, hex5);
    const strokes = pathDAttrs.map((d) => {
      const commands = tokenizePath(d);
      const { start, end } = tracePathStartEnd(commands);
      const direction = computeDirection(start, end);
      return { path: d, start, end, direction };
    });

    result[char] = {
      readings: { on, kun },
      strokes,
    };

    console.log(`${strokes.length} stroke(s)`);
  }

  // Write output
  const outPath = path.join(__dirname, "grade1-data.json");
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), "utf8");

  const count = Object.keys(result).length;
  console.log(`\nDone! Wrote ${count} kanji to ${outPath}`);
  if (count !== 80) {
    console.warn(`WARNING: Expected 80 kanji but got ${count}`);
  }
}

try {
  main();
} catch (err) {
  console.error("Fatal error:", err);
  process.exit(1);
}
