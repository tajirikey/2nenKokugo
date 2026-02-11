#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');

// Parse existing kanji-data.js
let content = fs.readFileSync('js/kanji-data.js', 'utf8');
content = content.replace('const KANJI_DATA', 'var KANJI_DATA');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const KANJI_DATA = sandbox.KANJI_DATA;

// Read grade 1 data
const grade1 = JSON.parse(fs.readFileSync('tools/grade1-data.json', 'utf8'));

// Add grade: 2 to all existing entries
for (const key of Object.keys(KANJI_DATA)) {
  KANJI_DATA[key].grade = 2;
}

// Add grade 1 kanji
let added = 0;
for (const [key, value] of Object.entries(grade1)) {
  if (KANJI_DATA[key]) {
    console.log('Duplicate: ' + key + ' (exists in grade 2, skipping)');
    continue;
  }
  KANJI_DATA[key] = { ...value, grade: 1 };
  added++;
}
console.log('Added ' + added + ' grade 1 kanji');

// Format output
function formatEntry(kanji, data) {
  const lines = [];
  lines.push('  "' + kanji + '": {');
  lines.push('    grade: ' + data.grade + ',');
  const onArr = data.readings.on.map(r => JSON.stringify(r)).join(', ');
  const kunArr = data.readings.kun.map(r => JSON.stringify(r)).join(', ');
  lines.push('    readings: { on: [' + onArr + '], kun: [' + kunArr + '] },');
  lines.push('    strokes: [');
  for (const s of data.strokes) {
    const startStr = '[' + s.start.join(', ') + ']';
    const endStr = '[' + s.end.join(', ') + ']';
    lines.push('      { path: ' + JSON.stringify(s.path) + ', start: ' + startStr + ', end: ' + endStr + ', direction: ' + JSON.stringify(s.direction) + ' },');
  }
  lines.push('    ]');
  lines.push('  }');
  return lines.join('\n');
}

// Grade 1 first, then grade 2
const grade1Keys = Object.keys(KANJI_DATA).filter(k => KANJI_DATA[k].grade === 1);
const grade2Keys = Object.keys(KANJI_DATA).filter(k => KANJI_DATA[k].grade === 2);
console.log('Grade 1: ' + grade1Keys.length + ', Grade 2: ' + grade2Keys.length);

const parts = [];
for (const k of grade1Keys) parts.push(formatEntry(k, KANJI_DATA[k]));
for (const k of grade2Keys) parts.push(formatEntry(k, KANJI_DATA[k]));

const output = 'const KANJI_DATA = {\n' + parts.join(',\n') + '\n};\n';
fs.writeFileSync('js/kanji-data.js', output, 'utf8');
console.log('Total: ' + (grade1Keys.length + grade2Keys.length) + ' kanji written to js/kanji-data.js');
