#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

// 3年生の漢字200字 + 読み
const GRADE3_KANJI = [
  { char: '悪', on: ['アク', 'オ'], kun: ['わる.い'] },
  { char: '安', on: ['アン'], kun: ['やす.い'] },
  { char: '暗', on: ['アン'], kun: ['くら.い'] },
  { char: '医', on: ['イ'], kun: [] },
  { char: '委', on: ['イ'], kun: [] },
  { char: '意', on: ['イ'], kun: [] },
  { char: '育', on: ['イク'], kun: ['そだ.つ', 'そだ.てる'] },
  { char: '員', on: ['イン'], kun: [] },
  { char: '院', on: ['イン'], kun: [] },
  { char: '飲', on: ['イン'], kun: ['の.む'] },
  { char: '運', on: ['ウン'], kun: ['はこ.ぶ'] },
  { char: '泳', on: ['エイ'], kun: ['およ.ぐ'] },
  { char: '駅', on: ['エキ'], kun: [] },
  { char: '央', on: ['オウ'], kun: [] },
  { char: '横', on: ['オウ'], kun: ['よこ'] },
  { char: '屋', on: ['オク'], kun: ['や'] },
  { char: '温', on: ['オン'], kun: ['あたた.かい', 'あたた.める'] },
  { char: '化', on: ['カ', 'ケ'], kun: ['ば.ける'] },
  { char: '荷', on: ['カ'], kun: ['に'] },
  { char: '界', on: ['カイ'], kun: [] },
  { char: '開', on: ['カイ'], kun: ['ひら.く', 'あ.ける'] },
  { char: '階', on: ['カイ'], kun: [] },
  { char: '寒', on: ['カン'], kun: ['さむ.い'] },
  { char: '感', on: ['カン'], kun: [] },
  { char: '漢', on: ['カン'], kun: [] },
  { char: '館', on: ['カン'], kun: ['やかた'] },
  { char: '岸', on: ['ガン'], kun: ['きし'] },
  { char: '起', on: ['キ'], kun: ['お.きる', 'お.こる'] },
  { char: '期', on: ['キ', 'ゴ'], kun: [] },
  { char: '客', on: ['キャク', 'カク'], kun: [] },
  { char: '究', on: ['キュウ'], kun: ['きわ.める'] },
  { char: '急', on: ['キュウ'], kun: ['いそ.ぐ'] },
  { char: '級', on: ['キュウ'], kun: [] },
  { char: '宮', on: ['キュウ', 'グウ'], kun: ['みや'] },
  { char: '球', on: ['キュウ'], kun: ['たま'] },
  { char: '去', on: ['キョ', 'コ'], kun: ['さ.る'] },
  { char: '橋', on: ['キョウ'], kun: ['はし'] },
  { char: '業', on: ['ギョウ', 'ゴウ'], kun: ['わざ'] },
  { char: '曲', on: ['キョク'], kun: ['ま.がる'] },
  { char: '局', on: ['キョク'], kun: [] },
  { char: '銀', on: ['ギン'], kun: [] },
  { char: '区', on: ['ク'], kun: [] },
  { char: '苦', on: ['ク'], kun: ['くる.しい', 'にが.い'] },
  { char: '具', on: ['グ'], kun: [] },
  { char: '君', on: ['クン'], kun: ['きみ'] },
  { char: '係', on: ['ケイ'], kun: ['かかり', 'かか.わる'] },
  { char: '軽', on: ['ケイ'], kun: ['かる.い'] },
  { char: '血', on: ['ケツ'], kun: ['ち'] },
  { char: '決', on: ['ケツ'], kun: ['き.める'] },
  { char: '研', on: ['ケン'], kun: ['と.ぐ'] },
  { char: '県', on: ['ケン'], kun: [] },
  { char: '庫', on: ['コ', 'ク'], kun: [] },
  { char: '湖', on: ['コ'], kun: ['みずうみ'] },
  { char: '向', on: ['コウ'], kun: ['む.く', 'む.かう'] },
  { char: '幸', on: ['コウ'], kun: ['しあわ.せ', 'さいわ.い'] },
  { char: '港', on: ['コウ'], kun: ['みなと'] },
  { char: '号', on: ['ゴウ'], kun: [] },
  { char: '根', on: ['コン'], kun: ['ね'] },
  { char: '祭', on: ['サイ'], kun: ['まつ.り'] },
  { char: '皿', on: ['ベイ'], kun: ['さら'] },
  { char: '仕', on: ['シ', 'ジ'], kun: ['つか.える'] },
  { char: '死', on: ['シ'], kun: ['し.ぬ'] },
  { char: '使', on: ['シ'], kun: ['つか.う'] },
  { char: '始', on: ['シ'], kun: ['はじ.める', 'はじ.まる'] },
  { char: '指', on: ['シ'], kun: ['ゆび', 'さ.す'] },
  { char: '歯', on: ['シ'], kun: ['は'] },
  { char: '詩', on: ['シ'], kun: [] },
  { char: '次', on: ['ジ', 'シ'], kun: ['つぎ', 'つ.ぐ'] },
  { char: '事', on: ['ジ', 'ズ'], kun: ['こと'] },
  { char: '持', on: ['ジ'], kun: ['も.つ'] },
  { char: '式', on: ['シキ'], kun: [] },
  { char: '実', on: ['ジツ'], kun: ['み', 'みの.る'] },
  { char: '写', on: ['シャ'], kun: ['うつ.す'] },
  { char: '者', on: ['シャ'], kun: ['もの'] },
  { char: '主', on: ['シュ', 'ス'], kun: ['ぬし', 'おも'] },
  { char: '守', on: ['シュ', 'ス'], kun: ['まも.る'] },
  { char: '取', on: ['シュ'], kun: ['と.る'] },
  { char: '酒', on: ['シュ'], kun: ['さけ'] },
  { char: '受', on: ['ジュ'], kun: ['う.ける'] },
  { char: '州', on: ['シュウ'], kun: ['す'] },
  { char: '拾', on: ['シュウ', 'ジュウ'], kun: ['ひろ.う'] },
  { char: '終', on: ['シュウ'], kun: ['お.わる'] },
  { char: '習', on: ['シュウ'], kun: ['なら.う'] },
  { char: '集', on: ['シュウ'], kun: ['あつ.める', 'あつ.まる'] },
  { char: '住', on: ['ジュウ'], kun: ['す.む'] },
  { char: '重', on: ['ジュウ', 'チョウ'], kun: ['おも.い', 'かさ.ねる'] },
  { char: '宿', on: ['シュク'], kun: ['やど'] },
  { char: '所', on: ['ショ'], kun: ['ところ'] },
  { char: '暑', on: ['ショ'], kun: ['あつ.い'] },
  { char: '助', on: ['ジョ'], kun: ['たす.ける'] },
  { char: '昭', on: ['ショウ'], kun: [] },
  { char: '消', on: ['ショウ'], kun: ['き.える', 'け.す'] },
  { char: '商', on: ['ショウ'], kun: ['あきな.う'] },
  { char: '章', on: ['ショウ'], kun: [] },
  { char: '勝', on: ['ショウ'], kun: ['か.つ'] },
  { char: '乗', on: ['ジョウ'], kun: ['の.る'] },
  { char: '植', on: ['ショク'], kun: ['う.える'] },
  { char: '申', on: ['シン'], kun: ['もう.す'] },
  { char: '身', on: ['シン'], kun: ['み'] },
  { char: '神', on: ['シン', 'ジン'], kun: ['かみ'] },
  { char: '真', on: ['シン'], kun: ['ま'] },
  { char: '深', on: ['シン'], kun: ['ふか.い'] },
  { char: '進', on: ['シン'], kun: ['すす.む'] },
  { char: '世', on: ['セイ', 'セ'], kun: ['よ'] },
  { char: '整', on: ['セイ'], kun: ['ととの.える'] },
  { char: '昔', on: ['セキ', 'シャク'], kun: ['むかし'] },
  { char: '全', on: ['ゼン'], kun: ['まった.く', 'すべ.て'] },
  { char: '相', on: ['ソウ', 'ショウ'], kun: ['あい'] },
  { char: '送', on: ['ソウ'], kun: ['おく.る'] },
  { char: '想', on: ['ソウ', 'ソ'], kun: [] },
  { char: '息', on: ['ソク'], kun: ['いき'] },
  { char: '速', on: ['ソク'], kun: ['はや.い'] },
  { char: '族', on: ['ゾク'], kun: [] },
  { char: '他', on: ['タ'], kun: ['ほか'] },
  { char: '打', on: ['ダ'], kun: ['う.つ'] },
  { char: '対', on: ['タイ', 'ツイ'], kun: [] },
  { char: '待', on: ['タイ'], kun: ['ま.つ'] },
  { char: '代', on: ['ダイ', 'タイ'], kun: ['か.わる', 'よ', 'しろ'] },
  { char: '第', on: ['ダイ'], kun: [] },
  { char: '題', on: ['ダイ'], kun: [] },
  { char: '炭', on: ['タン'], kun: ['すみ'] },
  { char: '短', on: ['タン'], kun: ['みじか.い'] },
  { char: '談', on: ['ダン'], kun: [] },
  { char: '着', on: ['チャク', 'ジャク'], kun: ['き.る', 'つ.く'] },
  { char: '注', on: ['チュウ'], kun: ['そそ.ぐ'] },
  { char: '柱', on: ['チュウ'], kun: ['はしら'] },
  { char: '丁', on: ['チョウ', 'テイ'], kun: [] },
  { char: '帳', on: ['チョウ'], kun: [] },
  { char: '調', on: ['チョウ'], kun: ['しら.べる', 'ととの.う'] },
  { char: '追', on: ['ツイ'], kun: ['お.う'] },
  { char: '定', on: ['テイ', 'ジョウ'], kun: ['さだ.める'] },
  { char: '庭', on: ['テイ'], kun: ['にわ'] },
  { char: '笛', on: ['テキ'], kun: ['ふえ'] },
  { char: '鉄', on: ['テツ'], kun: [] },
  { char: '転', on: ['テン'], kun: ['ころ.がる', 'ころ.ぶ'] },
  { char: '都', on: ['ト', 'ツ'], kun: ['みやこ'] },
  { char: '度', on: ['ド', 'タク'], kun: ['たび'] },
  { char: '投', on: ['トウ'], kun: ['な.げる'] },
  { char: '豆', on: ['トウ', 'ズ'], kun: ['まめ'] },
  { char: '島', on: ['トウ'], kun: ['しま'] },
  { char: '湯', on: ['トウ'], kun: ['ゆ'] },
  { char: '登', on: ['トウ', 'ト'], kun: ['のぼ.る'] },
  { char: '等', on: ['トウ'], kun: ['ひと.しい'] },
  { char: '動', on: ['ドウ'], kun: ['うご.く'] },
  { char: '童', on: ['ドウ'], kun: ['わらべ'] },
  { char: '農', on: ['ノウ'], kun: [] },
  { char: '波', on: ['ハ'], kun: ['なみ'] },
  { char: '配', on: ['ハイ'], kun: ['くば.る'] },
  { char: '倍', on: ['バイ'], kun: [] },
  { char: '箱', on: ['ソウ'], kun: ['はこ'] },
  { char: '畑', on: [], kun: ['はたけ', 'はた'] },
  { char: '発', on: ['ハツ', 'ホツ'], kun: [] },
  { char: '反', on: ['ハン', 'タン'], kun: ['そ.る'] },
  { char: '坂', on: ['ハン'], kun: ['さか'] },
  { char: '板', on: ['ハン', 'バン'], kun: ['いた'] },
  { char: '皮', on: ['ヒ'], kun: ['かわ'] },
  { char: '悲', on: ['ヒ'], kun: ['かな.しい'] },
  { char: '美', on: ['ビ'], kun: ['うつく.しい'] },
  { char: '鼻', on: ['ビ'], kun: ['はな'] },
  { char: '筆', on: ['ヒツ'], kun: ['ふで'] },
  { char: '氷', on: ['ヒョウ'], kun: ['こおり'] },
  { char: '表', on: ['ヒョウ'], kun: ['おもて', 'あらわ.す'] },
  { char: '秒', on: ['ビョウ'], kun: [] },
  { char: '病', on: ['ビョウ', 'ヘイ'], kun: ['やまい', 'や.む'] },
  { char: '品', on: ['ヒン'], kun: ['しな'] },
  { char: '負', on: ['フ'], kun: ['ま.ける', 'お.う'] },
  { char: '部', on: ['ブ'], kun: [] },
  { char: '服', on: ['フク'], kun: [] },
  { char: '福', on: ['フク'], kun: [] },
  { char: '物', on: ['ブツ', 'モツ'], kun: ['もの'] },
  { char: '平', on: ['ヘイ', 'ビョウ'], kun: ['たい.ら', 'ひら'] },
  { char: '返', on: ['ヘン'], kun: ['かえ.す'] },
  { char: '勉', on: ['ベン'], kun: [] },
  { char: '放', on: ['ホウ'], kun: ['はな.す'] },
  { char: '味', on: ['ミ'], kun: ['あじ'] },
  { char: '命', on: ['メイ', 'ミョウ'], kun: ['いのち'] },
  { char: '面', on: ['メン'], kun: ['おも', 'おもて', 'つら'] },
  { char: '問', on: ['モン'], kun: ['と.う'] },
  { char: '役', on: ['ヤク', 'エキ'], kun: [] },
  { char: '薬', on: ['ヤク'], kun: ['くすり'] },
  { char: '由', on: ['ユ', 'ユウ', 'ユイ'], kun: ['よし'] },
  { char: '油', on: ['ユ'], kun: ['あぶら'] },
  { char: '有', on: ['ユウ', 'ウ'], kun: ['あ.る'] },
  { char: '遊', on: ['ユウ', 'ユ'], kun: ['あそ.ぶ'] },
  { char: '予', on: ['ヨ'], kun: [] },
  { char: '羊', on: ['ヨウ'], kun: ['ひつじ'] },
  { char: '洋', on: ['ヨウ'], kun: [] },
  { char: '葉', on: ['ヨウ'], kun: ['は'] },
  { char: '陽', on: ['ヨウ'], kun: [] },
  { char: '様', on: ['ヨウ'], kun: ['さま'] },
  { char: '落', on: ['ラク'], kun: ['お.ちる', 'お.とす'] },
  { char: '流', on: ['リュウ', 'ル'], kun: ['なが.れる'] },
  { char: '旅', on: ['リョ'], kun: ['たび'] },
  { char: '両', on: ['リョウ'], kun: [] },
  { char: '緑', on: ['リョク', 'ロク'], kun: ['みどり'] },
  { char: '礼', on: ['レイ', 'ライ'], kun: [] },
  { char: '列', on: ['レツ'], kun: [] },
  { char: '練', on: ['レン'], kun: ['ね.る'] },
  { char: '路', on: ['ロ'], kun: ['じ'] },
  { char: '和', on: ['ワ', 'オ'], kun: ['やわ.らぐ', 'なご.む'] },
];

// SVG path parsing
function tokenizePath(d) {
  const commands = [];
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
  let match;
  while ((match = re.exec(d)) !== null) {
    const cmd = match[1];
    const argStr = match[2].trim();
    let args = [];
    if (argStr.length > 0) {
      const numRe = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
      let nm;
      while ((nm = numRe.exec(argStr)) !== null) args.push(parseFloat(nm[0]));
    }
    commands.push({ cmd, args });
  }
  return commands;
}

function tracePathStartEnd(commands) {
  let x = 0, y = 0, startX = null, startY = null;
  let subpathStartX = 0, subpathStartY = 0;
  for (const { cmd, args } of commands) {
    switch (cmd) {
      case 'M': for (let i = 0; i < args.length; i += 2) { x = args[i]; y = args[i+1]; if (startX === null) { startX = x; startY = y; } if (i === 0) { subpathStartX = x; subpathStartY = y; } } break;
      case 'm': for (let i = 0; i < args.length; i += 2) { x += args[i]; y += args[i+1]; if (startX === null) { startX = x; startY = y; } if (i === 0) { subpathStartX = x; subpathStartY = y; } } break;
      case 'L': for (let i = 0; i < args.length; i += 2) { x = args[i]; y = args[i+1]; } break;
      case 'l': for (let i = 0; i < args.length; i += 2) { x += args[i]; y += args[i+1]; } break;
      case 'H': x = args[args.length-1]; break;
      case 'h': for (const a of args) x += a; break;
      case 'V': y = args[args.length-1]; break;
      case 'v': for (const a of args) y += a; break;
      case 'C': for (let i = 0; i < args.length; i += 6) { x = args[i+4]; y = args[i+5]; } break;
      case 'c': for (let i = 0; i < args.length; i += 6) { x += args[i+4]; y += args[i+5]; } break;
      case 'S': for (let i = 0; i < args.length; i += 4) { x = args[i+2]; y = args[i+3]; } break;
      case 's': for (let i = 0; i < args.length; i += 4) { x += args[i+2]; y += args[i+3]; } break;
      case 'Q': for (let i = 0; i < args.length; i += 4) { x = args[i+2]; y = args[i+3]; } break;
      case 'q': for (let i = 0; i < args.length; i += 4) { x += args[i+2]; y += args[i+3]; } break;
      case 'T': for (let i = 0; i < args.length; i += 2) { x = args[i]; y = args[i+1]; } break;
      case 't': for (let i = 0; i < args.length; i += 2) { x += args[i]; y += args[i+1]; } break;
      case 'A': for (let i = 0; i < args.length; i += 7) { x = args[i+5]; y = args[i+6]; } break;
      case 'a': for (let i = 0; i < args.length; i += 7) { x += args[i+5]; y += args[i+6]; } break;
      case 'Z': case 'z': x = subpathStartX; y = subpathStartY; break;
    }
  }
  const r = n => Math.round(n * 10) / 10;
  return { start: [r(startX ?? 0), r(startY ?? 0)], end: [r(x), r(y)] };
}

function computeDirection(start, end) {
  const dx = end[0] - start[0], dy = end[1] - start[1];
  const a = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (a >= 22.5 && a < 67.5) return 'top-left-to-bottom-right';
  if (a >= 112.5 && a < 157.5) return 'top-right-to-bottom-left';
  if (a >= -45 && a < 45) return 'left-right';
  if (a >= 45 && a < 135) return 'top-bottom';
  if (a >= -135 && a < -45) return 'bottom-top';
  return 'right-left';
}

function extractStrokePaths(svg, hex5) {
  const snRe = new RegExp('<g\\s+id="kvg:StrokeNumbers_' + hex5 + '"[\\s\\S]*?</g>', 'i');
  const cleaned = svg.replace(snRe, '');
  const pathRe = /<path\s[^>]*?id="kvg:[0-9a-f]+-s\d+"[^>]*?\/?>/gi;
  const paths = [];
  let m;
  while ((m = pathRe.exec(cleaned)) !== null) {
    const dMatch = m[0].match(/\bd="([^"]*)"/);
    if (dMatch) paths.push(dMatch[1]);
  }
  return paths;
}

// --- Main ---
const svgDir = path.join(__dirname, 'svgs');
if (!fs.existsSync(svgDir)) fs.mkdirSync(svgDir, { recursive: true });

// Download SVGs
console.log(`Downloading ${GRADE3_KANJI.length} SVGs...`);
let dlOk = 0, dlFail = 0;
for (const { char } of GRADE3_KANJI) {
  const hex5 = char.codePointAt(0).toString(16).padStart(5, '0');
  const svgPath = path.join(svgDir, hex5 + '.svg');
  if (fs.existsSync(svgPath) && fs.statSync(svgPath).size > 100) { dlOk++; continue; }
  const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex5}.svg`;
  try {
    execSync(`curl -s --max-time 15 "${url}" -o "${svgPath}"`);
    dlOk++;
    process.stdout.write(char + ' ');
  } catch (e) {
    dlFail++;
    process.stderr.write('FAIL:' + char + ' ');
  }
}
console.log(`\nDownloaded: ${dlOk} OK, ${dlFail} FAIL`);

// Parse and generate stroke data
const result = {};
for (const { char, on, kun } of GRADE3_KANJI) {
  const hex5 = char.codePointAt(0).toString(16).padStart(5, '0');
  const svgPath = path.join(svgDir, hex5 + '.svg');
  if (!fs.existsSync(svgPath)) { console.error('Missing: ' + char); continue; }
  const svg = fs.readFileSync(svgPath, 'utf8');
  const pathDAttrs = extractStrokePaths(svg, hex5);
  const strokes = pathDAttrs.map(d => {
    const cmds = tokenizePath(d);
    const { start, end } = tracePathStartEnd(cmds);
    return { path: d, start, end, direction: computeDirection(start, end) };
  });
  result[char] = { readings: { on, kun }, strokes };
  console.log(`${char}: ${strokes.length} strokes`);
}

const outPath = path.join(__dirname, 'grade3-data.json');
fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
console.log(`\nWrote ${Object.keys(result).length} kanji to ${outPath}`);

// Merge into kanji-data.js
let content = fs.readFileSync(path.join(__dirname, '..', 'js', 'kanji-data.js'), 'utf8');
content = content.replace('const KANJI_DATA', 'var KANJI_DATA');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const KANJI_DATA = sandbox.KANJI_DATA;

let added = 0;
for (const [key, value] of Object.entries(result)) {
  if (KANJI_DATA[key]) { console.log('Duplicate: ' + key); continue; }
  KANJI_DATA[key] = { ...value, grade: 3 };
  added++;
}
console.log(`Added ${added} grade 3 kanji`);

function formatEntry(kanji, data) {
  const lines = [];
  lines.push('  "' + kanji + '": {');
  lines.push('    grade: ' + data.grade + ',');
  const onArr = data.readings.on.map(r => JSON.stringify(r)).join(', ');
  const kunArr = data.readings.kun.map(r => JSON.stringify(r)).join(', ');
  lines.push('    readings: { on: [' + onArr + '], kun: [' + kunArr + '] },');
  lines.push('    strokes: [');
  for (const s of data.strokes) {
    lines.push('      { path: ' + JSON.stringify(s.path) + ', start: [' + s.start.join(', ') + '], end: [' + s.end.join(', ') + '], direction: ' + JSON.stringify(s.direction) + ' },');
  }
  lines.push('    ]');
  lines.push('  }');
  return lines.join('\n');
}

const grades = [1, 2, 3];
const parts = [];
for (const g of grades) {
  const keys = Object.keys(KANJI_DATA).filter(k => KANJI_DATA[k].grade === g);
  for (const k of keys) parts.push(formatEntry(k, KANJI_DATA[k]));
  console.log(`Grade ${g}: ${keys.length} kanji`);
}

const output = 'const KANJI_DATA = {\n' + parts.join(',\n') + '\n};\n';
fs.writeFileSync(path.join(__dirname, '..', 'js', 'kanji-data.js'), output, 'utf8');
console.log('Total: ' + Object.keys(KANJI_DATA).length + ' kanji');
