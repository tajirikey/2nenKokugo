const KANJI_DATA = {
"引": {
    readings: { on: ["イン"], kun: ["ひ.く", "ひ.ける"] },
    strokes: [
      { path: "M 18,23 L 45,23", start: [18, 23], end: [45, 23], direction: "left-right" },
      { path: "M 18,23 L 18,80", start: [18, 23], end: [18, 80], direction: "top-bottom" },
      { path: "M 18,52 L 45,52", start: [18, 52], end: [45, 52], direction: "left-right" },
      { path: "M 75,15 L 75,95", start: [75, 15], end: [75, 95], direction: "top-bottom" }
    ]
  },
  "羽": {
    readings: { on: ["ウ"], kun: ["は", "はね"] },
    strokes: [
      { path: "M 15,25 C 15,25 25,55 20,75", start: [15, 25], end: [20, 75], direction: "top-bottom" },
      { path: "M 25,20 L 50,20 L 50,45", start: [25, 20], end: [50, 45], direction: "complex" },
      { path: "M 25,45 L 50,45", start: [25, 45], end: [50, 45], direction: "left-right" },
      { path: "M 58,25 C 58,25 68,55 63,75", start: [58, 25], end: [63, 75], direction: "top-bottom" },
      { path: "M 68,20 L 93,20 L 93,45", start: [68, 20], end: [93, 45], direction: "complex" },
      { path: "M 68,45 L 93,45", start: [68, 45], end: [93, 45], direction: "left-right" }
    ]
  },
  "雲": {
    readings: { on: ["ウン"], kun: ["くも"] },
    strokes: [
      { path: "M 15,10 L 95,10", start: [15, 10], end: [95, 10], direction: "left-right" },
      { path: "M 25,10 L 25,45", start: [25, 10], end: [25, 45], direction: "top-bottom" },
      { path: "M 55,10 L 55,45 C 55,50 50,50 45,45", start: [55, 10], end: [45, 45], direction: "complex" },
      { path: "M 85,10 L 85,45", start: [85, 10], end: [85, 45], direction: "top-bottom" },
      { path: "M 25,45 L 85,45", start: [25, 45], end: [85, 45], direction: "left-right" },
      { path: "M 35,22 L 38,30", start: [35, 22], end: [38, 30], direction: "top-bottom" },
      { path: "M 47,22 L 44,30", start: [47, 22], end: [44, 30], direction: "top-bottom" },
      { path: "M 65,22 L 68,30", start: [65, 22], end: [68, 30], direction: "top-bottom" },
      { path: "M 77,22 L 74,30", start: [77, 22], end: [74, 30], direction: "top-bottom" },
      { path: "M 20,58 L 90,58", start: [20, 58], end: [90, 58], direction: "left-right" },
      { path: "M 30,72 L 80,72", start: [30, 72], end: [80, 72], direction: "left-right" },
      { path: "M 55,72 C 55,80 40,95 20,98", start: [55, 72], end: [20, 98], direction: "curve-left" }
    ]
  },
  "園": {
    readings: { on: ["エン"], kun: ["その"] },
    strokes: [
      { path: "M 12,12 L 97,12", start: [12, 12], end: [97, 12], direction: "left-right" },
      { path: "M 12,12 L 12,97", start: [12, 12], end: [12, 97], direction: "top-bottom" },
      { path: "M 97,12 L 97,97", start: [97, 12], end: [97, 97], direction: "top-bottom" },
      { path: "M 12,97 L 97,97", start: [12, 97], end: [97, 97], direction: "left-right" },
      { path: "M 35,28 L 75,28", start: [35, 28], end: [75, 28], direction: "left-right" },
      { path: "M 25,40 L 55,28", start: [25, 40], end: [55, 28], direction: "top-right-to-bottom-left" },
      { path: "M 55,28 L 85,45", start: [55, 28], end: [85, 45], direction: "top-left-to-bottom-right" },
      { path: "M 30,50 L 80,50", start: [30, 50], end: [80, 50], direction: "left-right" },
      { path: "M 55,50 L 55,70", start: [55, 50], end: [55, 70], direction: "top-bottom" },
      { path: "M 30,65 L 80,65", start: [30, 65], end: [80, 65], direction: "left-right" },
      { path: "M 30,50 L 30,65", start: [30, 50], end: [30, 65], direction: "top-bottom" },
      { path: "M 80,50 L 80,65", start: [80, 50], end: [80, 65], direction: "top-bottom" },
      { path: "M 35,78 C 45,90 65,90 75,78", start: [35, 78], end: [75, 78], direction: "curve-right" }
    ]
  },
  "遠": {
    readings: { on: ["エン", "オン"], kun: ["とお.い"] },
    strokes: [
      { path: "M 35,15 L 85,15", start: [35, 15], end: [85, 15], direction: "left-right" },
      { path: "M 40,28 L 55,15", start: [40, 28], end: [55, 15], direction: "top-right-to-bottom-left" },
      { path: "M 55,15 L 80,32", start: [55, 15], end: [80, 32], direction: "top-left-to-bottom-right" },
      { path: "M 40,38 L 80,38", start: [40, 38], end: [80, 38], direction: "left-right" },
      { path: "M 60,38 L 60,55", start: [60, 38], end: [60, 55], direction: "top-bottom" },
      { path: "M 40,52 L 80,52", start: [40, 52], end: [80, 52], direction: "left-right" },
      { path: "M 40,38 L 40,52", start: [40, 38], end: [40, 52], direction: "top-bottom" },
      { path: "M 80,38 L 80,52", start: [80, 38], end: [80, 52], direction: "top-bottom" },
      { path: "M 42,65 C 55,78 70,78 82,65", start: [42, 65], end: [82, 65], direction: "curve-right" },
      { path: "M 12,30 L 12,70", start: [12, 30], end: [12, 70], direction: "top-bottom" },
      { path: "M 12,30 L 30,30", start: [12, 30], end: [30, 30], direction: "left-right" },
      { path: "M 12,70 L 30,58", start: [12, 70], end: [30, 58], direction: "complex" },
      { path: "M 8,85 C 30,80 60,88 95,75", start: [8, 85], end: [95, 75], direction: "curve-right" }
    ]
  },
  "何": {
    readings: { on: ["カ"], kun: ["なに", "なん"] },
    strokes: [
      { path: "M 18,20 L 18,95", start: [18, 20], end: [18, 95], direction: "top-bottom" },
      { path: "M 18,25 L 30,55", start: [18, 25], end: [30, 55], direction: "top-left-to-bottom-right" },
      { path: "M 40,15 L 40,80 C 40,90 35,95 30,95", start: [40, 15], end: [30, 95], direction: "complex" },
      { path: "M 40,15 L 95,15", start: [40, 15], end: [95, 15], direction: "left-right" },
      { path: "M 50,35 L 85,35", start: [50, 35], end: [85, 35], direction: "left-right" },
      { path: "M 50,55 L 85,55", start: [50, 55], end: [85, 55], direction: "left-right" },
      { path: "M 68,35 L 68,55", start: [68, 35], end: [68, 55], direction: "top-bottom" }
    ]
  },
  "科": {
    readings: { on: ["カ"], kun: [] },
    strokes: [
      { path: "M 15,18 L 45,18", start: [15, 18], end: [45, 18], direction: "left-right" },
      { path: "M 30,18 L 30,50", start: [30, 18], end: [30, 50], direction: "top-bottom" },
      { path: "M 15,50 L 50,50", start: [15, 50], end: [50, 50], direction: "left-right" },
      { path: "M 10,68 L 50,68", start: [10, 68], end: [50, 68], direction: "left-right" },
      { path: "M 30,68 L 30,95", start: [30, 68], end: [30, 95], direction: "top-bottom" },
      { path: "M 10,95 L 50,95", start: [10, 95], end: [50, 95], direction: "left-right" },
      { path: "M 70,15 L 70,40", start: [70, 15], end: [70, 40], direction: "top-bottom" },
      { path: "M 60,40 Q 70,80 95,50", start: [60, 40], end: [95, 50], direction: "complex" },
      { path: "M 60,55 C 65,85 70,95 80,95", start: [60, 55], end: [80, 95], direction: "curve-right" }
    ]
  },
  "夏": {
    readings: { on: ["カ", "ゲ"], kun: ["なつ"] },
    strokes: [
      { path: "M 25,12 L 85,12", start: [25, 12], end: [85, 12], direction: "left-right" },
      { path: "M 55,12 L 55,35", start: [55, 12], end: [55, 35], direction: "top-bottom" },
      { path: "M 30,28 L 80,28", start: [30, 28], end: [80, 28], direction: "left-right" },
      { path: "M 30,28 L 30,55", start: [30, 28], end: [30, 55], direction: "top-bottom" },
      { path: "M 80,28 L 80,55", start: [80, 28], end: [80, 55], direction: "top-bottom" },
      { path: "M 35,42 L 75,42", start: [35, 42], end: [75, 42], direction: "left-right" },
      { path: "M 30,55 L 80,55", start: [30, 55], end: [80, 55], direction: "left-right" },
      { path: "M 40,62 L 70,62", start: [40, 62], end: [70, 62], direction: "left-right" },
      { path: "M 55,55 L 25,95", start: [55, 55], end: [25, 95], direction: "top-right-to-bottom-left" },
      { path: "M 55,55 C 65,75 80,90 90,95", start: [55, 55], end: [90, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "家": {
    readings: { on: ["カ", "ケ"], kun: ["いえ", "や"] },
    strokes: [
      { path: "M 55,5 L 55,30", start: [55, 5], end: [55, 30], direction: "top-bottom" },
      { path: "M 55,5 L 10,35", start: [55, 5], end: [10, 35], direction: "top-right-to-bottom-left" },
      { path: "M 55,5 L 100,35", start: [55, 5], end: [100, 35], direction: "top-left-to-bottom-right" },
      { path: "M 30,40 L 80,40", start: [30, 40], end: [80, 40], direction: "left-right" },
      { path: "M 35,52 L 75,52", start: [35, 52], end: [75, 52], direction: "left-right" },
      { path: "M 55,40 L 55,65", start: [55, 40], end: [55, 65], direction: "top-bottom" },
      { path: "M 38,65 C 35,72 30,78 22,82", start: [38, 65], end: [22, 82], direction: "curve-left" },
      { path: "M 72,65 C 78,72 82,78 88,82", start: [72, 65], end: [88, 82], direction: "curve-right" },
      { path: "M 45,70 C 40,85 30,95 15,98", start: [45, 70], end: [15, 98], direction: "curve-left" },
      { path: "M 65,70 C 70,85 80,95 95,98", start: [65, 70], end: [95, 98], direction: "curve-right" }
    ]
  },
  "歌": {
    readings: { on: ["カ"], kun: ["うた", "うた.う"] },
    strokes: [
      { path: "M 12,15 L 48,15", start: [12, 15], end: [48, 15], direction: "left-right" },
      { path: "M 18,15 L 18,45 C 18,50 15,52 12,52", start: [18, 15], end: [12, 52], direction: "complex" },
      { path: "M 25,30 L 42,30", start: [25, 30], end: [42, 30], direction: "left-right" },
      { path: "M 42,15 L 42,45", start: [42, 15], end: [42, 45], direction: "top-bottom" },
      { path: "M 12,55 L 48,55", start: [12, 55], end: [48, 55], direction: "left-right" },
      { path: "M 18,55 L 18,85 C 18,90 15,92 12,92", start: [18, 55], end: [12, 92], direction: "complex" },
      { path: "M 25,70 L 42,70", start: [25, 70], end: [42, 70], direction: "left-right" },
      { path: "M 42,55 L 42,85", start: [42, 55], end: [42, 85], direction: "top-bottom" },
      { path: "M 60,15 L 60,55", start: [60, 15], end: [60, 55], direction: "top-bottom" },
      { path: "M 60,30 L 90,15", start: [60, 30], end: [90, 15], direction: "complex" },
      { path: "M 60,55 L 85,40", start: [60, 55], end: [85, 40], direction: "complex" },
      { path: "M 68,60 L 68,95", start: [68, 60], end: [68, 95], direction: "top-bottom" },
      { path: "M 75,70 C 80,80 88,90 95,95", start: [75, 70], end: [95, 95], direction: "top-left-to-bottom-right" },
      { path: "M 85,65 C 90,75 95,85 98,90", start: [85, 65], end: [98, 90], direction: "top-left-to-bottom-right" }
    ]
  },
  "画": {
    readings: { on: ["ガ", "カク"], kun: [] },
    strokes: [
      { path: "M 15,15 L 95,15", start: [15, 15], end: [95, 15], direction: "left-right" },
      { path: "M 25,15 L 25,80", start: [25, 15], end: [25, 80], direction: "top-bottom" },
      { path: "M 85,15 L 85,80", start: [85, 15], end: [85, 80], direction: "top-bottom" },
      { path: "M 40,30 L 70,30", start: [40, 30], end: [70, 30], direction: "left-right" },
      { path: "M 40,30 L 40,65", start: [40, 30], end: [40, 65], direction: "top-bottom" },
      { path: "M 70,30 L 70,65", start: [70, 30], end: [70, 65], direction: "top-bottom" },
      { path: "M 40,65 L 70,65", start: [40, 65], end: [70, 65], direction: "left-right" },
      { path: "M 15,80 L 95,80", start: [15, 80], end: [95, 80], direction: "left-right" }
    ]
  },
  "回": {
    readings: { on: ["カイ", "エ"], kun: ["まわ.る", "まわ.す"] },
    strokes: [
      { path: "M 15,15 L 95,15", start: [15, 15], end: [95, 15], direction: "left-right" },
      { path: "M 15,15 L 15,95", start: [15, 15], end: [15, 95], direction: "top-bottom" },
      { path: "M 95,15 L 95,95", start: [95, 15], end: [95, 95], direction: "top-bottom" },
      { path: "M 40,40 L 70,40 L 70,70 L 40,70 L 40,40", start: [40, 40], end: [40, 40], direction: "complex" },
      { path: "M 40,40 L 40,70", start: [40, 40], end: [40, 70], direction: "top-bottom" },
      { path: "M 15,95 L 95,95", start: [15, 95], end: [95, 95], direction: "left-right" }
    ]
  },
  "会": {
    readings: { on: ["カイ", "エ"], kun: ["あ.う"] },
    strokes: [
      { path: "M 55,8 L 30,30", start: [55, 8], end: [30, 30], direction: "top-right-to-bottom-left" },
      { path: "M 55,8 L 80,30", start: [55, 8], end: [80, 30], direction: "top-left-to-bottom-right" },
      { path: "M 20,42 L 90,42", start: [20, 42], end: [90, 42], direction: "left-right" },
      { path: "M 35,55 L 75,55", start: [35, 55], end: [75, 55], direction: "left-right" },
      { path: "M 55,42 L 55,95", start: [55, 42], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,70 C 40,85 25,90 15,95", start: [55, 70], end: [15, 95], direction: "curve-left" }
    ]
  },
  "海": {
    readings: { on: ["カイ"], kun: ["うみ"] },
    strokes: [
      { path: "M 10,20 L 10,30", start: [10, 20], end: [10, 30], direction: "top-bottom" },
      { path: "M 10,42 L 10,52", start: [10, 42], end: [10, 52], direction: "top-bottom" },
      { path: "M 10,62 L 10,72", start: [10, 62], end: [10, 72], direction: "top-bottom" },
      { path: "M 30,15 L 95,15", start: [30, 15], end: [95, 15], direction: "left-right" },
      { path: "M 30,15 L 30,90", start: [30, 15], end: [30, 90], direction: "top-bottom" },
      { path: "M 40,35 L 85,35", start: [40, 35], end: [85, 35], direction: "left-right" },
      { path: "M 62,15 L 62,55", start: [62, 15], end: [62, 55], direction: "top-bottom" },
      { path: "M 40,55 L 85,55", start: [40, 55], end: [85, 55], direction: "left-right" },
      { path: "M 35,75 C 50,65 70,65 90,75", start: [35, 75], end: [90, 75], direction: "curve-right" }
    ]
  },
  "絵": {
    readings: { on: ["カイ", "エ"], kun: [] },
    strokes: [
      { path: "M 15,22 L 22,35", start: [15, 22], end: [22, 35], direction: "top-left-to-bottom-right" },
      { path: "M 10,40 L 40,40", start: [10, 40], end: [40, 40], direction: "left-right" },
      { path: "M 25,40 L 25,60", start: [25, 40], end: [25, 60], direction: "top-bottom" },
      { path: "M 15,55 L 12,65", start: [15, 55], end: [12, 65], direction: "top-right-to-bottom-left" },
      { path: "M 25,60 L 38,70", start: [25, 60], end: [38, 70], direction: "top-left-to-bottom-right" },
      { path: "M 10,80 L 15,95", start: [10, 80], end: [15, 95], direction: "top-left-to-bottom-right" },
      { path: "M 55,12 L 55,35", start: [55, 12], end: [55, 35], direction: "top-bottom" },
      { path: "M 55,12 L 95,35", start: [55, 12], end: [95, 35], direction: "top-left-to-bottom-right" },
      { path: "M 50,42 L 95,42", start: [50, 42], end: [95, 42], direction: "left-right" },
      { path: "M 55,55 L 90,55", start: [55, 55], end: [90, 55], direction: "left-right" },
      { path: "M 73,42 L 73,80", start: [73, 42], end: [73, 80], direction: "top-bottom" },
      { path: "M 50,80 L 95,80", start: [50, 80], end: [95, 80], direction: "left-right" }
    ]
  },
  "外": {
    readings: { on: ["ガイ", "ゲ"], kun: ["そと", "ほか", "はず.す"] },
    strokes: [
      { path: "M 28,12 L 28,75", start: [28, 12], end: [28, 75], direction: "top-bottom" },
      { path: "M 28,12 L 50,12 L 50,55", start: [28, 12], end: [50, 55], direction: "complex" },
      { path: "M 28,55 L 50,55", start: [28, 55], end: [50, 55], direction: "left-right" },
      { path: "M 65,15 L 65,95", start: [65, 15], end: [65, 95], direction: "top-bottom" },
      { path: "M 65,50 L 95,25", start: [65, 50], end: [95, 25], direction: "complex" }
    ]
  },
  "角": {
    readings: { on: ["カク"], kun: ["かど", "つの"] },
    strokes: [
      { path: "M 40,10 L 25,25", start: [40, 10], end: [25, 25], direction: "top-right-to-bottom-left" },
      { path: "M 55,10 L 55,35", start: [55, 10], end: [55, 35], direction: "top-bottom" },
      { path: "M 20,35 L 90,35", start: [20, 35], end: [90, 35], direction: "left-right" },
      { path: "M 30,35 L 30,90", start: [30, 35], end: [30, 90], direction: "top-bottom" },
      { path: "M 80,35 L 80,90", start: [80, 35], end: [80, 90], direction: "top-bottom" },
      { path: "M 30,60 L 80,60", start: [30, 60], end: [80, 60], direction: "left-right" },
      { path: "M 30,90 L 80,90", start: [30, 90], end: [80, 90], direction: "left-right" }
    ]
  },
  "楽": {
    readings: { on: ["ガク", "ラク"], kun: ["たの.しい"] },
    strokes: [
      { path: "M 30,10 L 30,35", start: [30, 10], end: [30, 35], direction: "top-bottom" },
      { path: "M 80,10 L 80,35", start: [80, 10], end: [80, 35], direction: "top-bottom" },
      { path: "M 20,22 L 90,22", start: [20, 22], end: [90, 22], direction: "left-right" },
      { path: "M 55,10 L 55,35", start: [55, 10], end: [55, 35], direction: "top-bottom" },
      { path: "M 20,35 L 90,35", start: [20, 35], end: [90, 35], direction: "left-right" },
      { path: "M 42,15 L 38,22", start: [42, 15], end: [38, 22], direction: "top-right-to-bottom-left" },
      { path: "M 68,15 L 72,22", start: [68, 15], end: [72, 22], direction: "top-left-to-bottom-right" },
      { path: "M 25,48 L 85,48", start: [25, 48], end: [85, 48], direction: "left-right" },
      { path: "M 55,48 L 55,95", start: [55, 48], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,48 L 20,75", start: [55, 48], end: [20, 75], direction: "top-right-to-bottom-left" },
      { path: "M 55,48 L 90,75", start: [55, 48], end: [90, 75], direction: "top-left-to-bottom-right" },
      { path: "M 40,70 C 35,80 25,90 15,95", start: [40, 70], end: [15, 95], direction: "curve-left" },
      { path: "M 70,70 C 75,80 85,90 95,95", start: [70, 70], end: [95, 95], direction: "curve-right" }
    ]
  },
  "活": {
    readings: { on: ["カツ"], kun: [] },
    strokes: [
      { path: "M 10,20 L 10,30", start: [10, 20], end: [10, 30], direction: "top-bottom" },
      { path: "M 10,42 L 10,52", start: [10, 42], end: [10, 52], direction: "top-bottom" },
      { path: "M 10,62 L 10,72", start: [10, 62], end: [10, 72], direction: "top-bottom" },
      { path: "M 40,15 L 40,95 C 40,98 35,98 30,95", start: [40, 15], end: [30, 95], direction: "complex" },
      { path: "M 40,15 L 95,15", start: [40, 15], end: [95, 15], direction: "left-right" },
      { path: "M 50,35 L 85,35", start: [50, 35], end: [85, 35], direction: "left-right" },
      { path: "M 50,55 L 85,55", start: [50, 55], end: [85, 55], direction: "left-right" },
      { path: "M 68,15 L 68,55", start: [68, 15], end: [68, 55], direction: "top-bottom" },
      { path: "M 50,75 L 90,75", start: [50, 75], end: [90, 75], direction: "left-right" }
    ]
  },
  "間": {
    readings: { on: ["カン", "ケン"], kun: ["あいだ", "ま"] },
    strokes: [
      { path: "M 10,10 L 10,95", start: [10, 10], end: [10, 95], direction: "top-bottom" },
      { path: "M 10,10 L 45,10", start: [10, 10], end: [45, 10], direction: "left-right" },
      { path: "M 45,10 L 45,95", start: [45, 10], end: [45, 95], direction: "top-bottom" },
      { path: "M 65,10 L 65,95", start: [65, 10], end: [65, 95], direction: "top-bottom" },
      { path: "M 65,10 L 98,10", start: [65, 10], end: [98, 10], direction: "left-right" },
      { path: "M 98,10 L 98,95", start: [98, 10], end: [98, 95], direction: "top-bottom" },
      { path: "M 10,95 L 45,95", start: [10, 95], end: [45, 95], direction: "left-right" },
      { path: "M 65,95 L 98,95", start: [65, 95], end: [98, 95], direction: "left-right" },
      { path: "M 72,25 L 92,25", start: [72, 25], end: [92, 25], direction: "left-right" },
      { path: "M 72,45 L 92,45", start: [72, 45], end: [92, 45], direction: "left-right" },
      { path: "M 82,25 L 82,45", start: [82, 25], end: [82, 45], direction: "top-bottom" },
      { path: "M 72,65 L 92,65", start: [72, 65], end: [92, 65], direction: "left-right" }
    ]
  },
  "丸": {
    readings: { on: ["ガン"], kun: ["まる", "まる.い"] },
    strokes: [
      { path: "M 30,20 L 70,20", start: [30, 20], end: [70, 20], direction: "left-right" },
      { path: "M 30,20 C 30,50 55,75 55,95", start: [30, 20], end: [55, 95], direction: "complex" },
      { path: "M 80,30 L 80,55 C 80,65 75,70 65,72", start: [80, 30], end: [65, 72], direction: "complex" }
    ]
  },
  "岩": {
    readings: { on: ["ガン"], kun: ["いわ"] },
    strokes: [
      { path: "M 55,8 L 25,35", start: [55, 8], end: [25, 35], direction: "top-right-to-bottom-left" },
      { path: "M 55,8 L 85,35", start: [55, 8], end: [85, 35], direction: "top-left-to-bottom-right" },
      { path: "M 35,35 L 75,35", start: [35, 35], end: [75, 35], direction: "left-right" },
      { path: "M 20,50 L 90,50", start: [20, 50], end: [90, 50], direction: "left-right" },
      { path: "M 30,50 L 30,95", start: [30, 50], end: [30, 95], direction: "top-bottom" },
      { path: "M 80,50 L 80,95", start: [80, 50], end: [80, 95], direction: "top-bottom" },
      { path: "M 40,72 L 70,72", start: [40, 72], end: [70, 72], direction: "left-right" },
      { path: "M 30,95 L 80,95", start: [30, 95], end: [80, 95], direction: "left-right" }
    ]
  },
  "顔": {
    readings: { on: ["ガン"], kun: ["かお"] },
    strokes: [
      { path: "M 10,15 L 50,15", start: [10, 15], end: [50, 15], direction: "left-right" },
      { path: "M 15,15 L 15,45", start: [15, 15], end: [15, 45], direction: "top-bottom" },
      { path: "M 15,28 L 45,28", start: [15, 28], end: [45, 28], direction: "left-right" },
      { path: "M 30,15 L 30,45", start: [30, 15], end: [30, 45], direction: "top-bottom" },
      { path: "M 45,15 L 45,45", start: [45, 15], end: [45, 45], direction: "top-bottom" },
      { path: "M 15,45 L 45,45", start: [15, 45], end: [45, 45], direction: "left-right" },
      { path: "M 12,55 C 15,65 18,75 10,90", start: [12, 55], end: [10, 90], direction: "complex" },
      { path: "M 12,65 L 48,55", start: [12, 65], end: [48, 55], direction: "complex" },
      { path: "M 25,72 C 30,82 35,92 45,95", start: [25, 72], end: [45, 95], direction: "curve-right" },
      { path: "M 58,12 L 58,95", start: [58, 12], end: [58, 95], direction: "top-bottom" },
      { path: "M 58,12 L 98,12", start: [58, 12], end: [98, 12], direction: "left-right" },
      { path: "M 65,30 L 92,30", start: [65, 30], end: [92, 30], direction: "left-right" },
      { path: "M 65,30 L 65,55", start: [65, 30], end: [65, 55], direction: "top-bottom" },
      { path: "M 92,30 L 92,55", start: [92, 30], end: [92, 55], direction: "top-bottom" },
      { path: "M 75,38 L 75,48", start: [75, 38], end: [75, 48], direction: "top-bottom" },
      { path: "M 85,38 L 85,48", start: [85, 38], end: [85, 48], direction: "top-bottom" },
      { path: "M 65,55 L 92,55", start: [65, 55], end: [92, 55], direction: "left-right" },
      { path: "M 60,72 L 95,72 L 95,90 L 60,90", start: [60, 72], end: [60, 90], direction: "complex" }
    ]
  },
  "汽": {
    readings: { on: ["キ"], kun: [] },
    strokes: [
      { path: "M 10,20 L 10,30", start: [10, 20], end: [10, 30], direction: "top-bottom" },
      { path: "M 10,42 L 10,52", start: [10, 42], end: [10, 52], direction: "top-bottom" },
      { path: "M 10,62 L 10,72", start: [10, 62], end: [10, 72], direction: "top-bottom" },
      { path: "M 40,12 L 40,30", start: [40, 12], end: [40, 30], direction: "top-bottom" },
      { path: "M 40,12 L 90,12", start: [40, 12], end: [90, 12], direction: "left-right" },
      { path: "M 45,38 L 90,38", start: [45, 38], end: [90, 38], direction: "left-right" },
      { path: "M 65,50 C 65,70 60,85 55,95", start: [65, 50], end: [55, 95], direction: "complex" }
    ]
  },
  "記": {
    readings: { on: ["キ"], kun: ["しる.す"] },
    strokes: [
      { path: "M 15,15 L 40,15", start: [15, 15], end: [40, 15], direction: "left-right" },
      { path: "M 15,15 L 15,40", start: [15, 15], end: [15, 40], direction: "top-bottom" },
      { path: "M 15,40 L 40,40", start: [15, 40], end: [40, 40], direction: "left-right" },
      { path: "M 40,15 L 40,40", start: [40, 15], end: [40, 40], direction: "top-bottom" },
      { path: "M 15,55 L 40,55", start: [15, 55], end: [40, 55], direction: "left-right" },
      { path: "M 28,55 L 28,90", start: [28, 55], end: [28, 90], direction: "top-bottom" },
      { path: "M 15,90 L 40,90", start: [15, 90], end: [40, 90], direction: "left-right" },
      { path: "M 60,12 C 60,50 55,80 55,95", start: [60, 12], end: [55, 95], direction: "complex" },
      { path: "M 60,25 L 95,25", start: [60, 25], end: [95, 25], direction: "left-right" },
      { path: "M 60,50 L 95,50", start: [60, 50], end: [95, 50], direction: "left-right" }
    ]
  },
  "帰": {
    readings: { on: ["キ"], kun: ["かえ.る", "かえ.す"] },
    strokes: [
      { path: "M 15,15 L 42,15", start: [15, 15], end: [42, 15], direction: "left-right" },
      { path: "M 28,15 L 28,50", start: [28, 15], end: [28, 50], direction: "top-bottom" },
      { path: "M 15,50 L 42,50", start: [15, 50], end: [42, 50], direction: "left-right" },
      { path: "M 28,50 L 28,95", start: [28, 50], end: [28, 95], direction: "top-bottom" },
      { path: "M 15,70 L 42,70", start: [15, 70], end: [42, 70], direction: "left-right" },
      { path: "M 55,12 L 55,95 C 55,98 50,98 48,95", start: [55, 12], end: [48, 95], direction: "complex" },
      { path: "M 55,12 L 95,12", start: [55, 12], end: [95, 12], direction: "left-right" },
      { path: "M 60,35 L 90,35", start: [60, 35], end: [90, 35], direction: "left-right" },
      { path: "M 60,55 L 90,55", start: [60, 55], end: [90, 55], direction: "left-right" },
      { path: "M 75,12 L 75,55", start: [75, 12], end: [75, 55], direction: "top-bottom" }
    ]
  },
  "弓": {
    readings: { on: ["キュウ"], kun: ["ゆみ"] },
    strokes: [
      { path: "M 25,15 L 80,15 L 80,50", start: [25, 15], end: [80, 50], direction: "complex" },
      { path: "M 25,50 L 80,50", start: [25, 50], end: [80, 50], direction: "left-right" },
      { path: "M 25,15 C 25,40 25,70 35,95", start: [25, 15], end: [35, 95], direction: "complex" }
    ]
  },
  "牛": {
    readings: { on: ["ギュウ"], kun: ["うし"] },
    strokes: [
      { path: "M 35,20 L 75,15", start: [35, 20], end: [75, 15], direction: "left-right" },
      { path: "M 15,45 L 95,45", start: [15, 45], end: [95, 45], direction: "left-right" },
      { path: "M 55,10 L 55,95", start: [55, 10], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,62 L 85,55", start: [55, 62], end: [85, 55], direction: "left-right" }
    ]
  },
  "魚": {
    readings: { on: ["ギョ"], kun: ["うお", "さかな"] },
    strokes: [
      { path: "M 30,8 L 30,45", start: [30, 8], end: [30, 45], direction: "top-bottom" },
      { path: "M 80,8 L 80,45", start: [80, 8], end: [80, 45], direction: "top-bottom" },
      { path: "M 30,8 L 80,8", start: [30, 8], end: [80, 8], direction: "left-right" },
      { path: "M 30,25 L 80,25", start: [30, 25], end: [80, 25], direction: "left-right" },
      { path: "M 30,45 L 80,45", start: [30, 45], end: [80, 45], direction: "left-right" },
      { path: "M 55,8 L 55,45", start: [55, 8], end: [55, 45], direction: "top-bottom" },
      { path: "M 15,55 L 95,55", start: [15, 55], end: [95, 55], direction: "left-right" },
      { path: "M 55,55 L 55,75", start: [55, 55], end: [55, 75], direction: "top-bottom" },
      { path: "M 25,80 L 40,85", start: [25, 80], end: [40, 85], direction: "left-right" },
      { path: "M 70,80 L 85,85", start: [70, 80], end: [85, 85], direction: "left-right" },
      { path: "M 30,92 L 80,92", start: [30, 92], end: [80, 92], direction: "left-right" }
    ]
  },
  "京": {
    readings: { on: ["キョウ", "ケイ"], kun: [] },
    strokes: [
      { path: "M 55,8 L 55,25", start: [55, 8], end: [55, 25], direction: "top-bottom" },
      { path: "M 20,25 L 90,25", start: [20, 25], end: [90, 25], direction: "left-right" },
      { path: "M 30,38 L 80,38", start: [30, 38], end: [80, 38], direction: "left-right" },
      { path: "M 55,38 L 55,95", start: [55, 38], end: [55, 95], direction: "top-bottom" },
      { path: "M 35,50 L 25,70", start: [35, 50], end: [25, 70], direction: "top-right-to-bottom-left" },
      { path: "M 75,50 L 85,70", start: [75, 50], end: [85, 70], direction: "top-left-to-bottom-right" },
      { path: "M 45,72 C 38,85 25,95 15,98", start: [45, 72], end: [15, 98], direction: "curve-left" },
      { path: "M 65,72 C 72,85 85,95 95,98", start: [65, 72], end: [95, 98], direction: "curve-right" }
    ]
  },
  "強": {
    readings: { on: ["キョウ", "ゴウ"], kun: ["つよ.い", "し.いる"] },
    strokes: [
      { path: "M 15,15 L 50,15 L 50,50", start: [15, 15], end: [50, 50], direction: "complex" },
      { path: "M 15,38 L 50,38", start: [15, 38], end: [50, 38], direction: "left-right" },
      { path: "M 15,15 C 15,35 15,60 20,80", start: [15, 15], end: [20, 80], direction: "complex" },
      { path: "M 60,10 L 60,45", start: [60, 10], end: [60, 45], direction: "top-bottom" },
      { path: "M 60,10 L 95,10", start: [60, 10], end: [95, 10], direction: "left-right" },
      { path: "M 60,28 L 95,28", start: [60, 28], end: [95, 28], direction: "left-right" },
      { path: "M 60,45 L 95,45", start: [60, 45], end: [95, 45], direction: "left-right" },
      { path: "M 78,10 L 78,45", start: [78, 10], end: [78, 45], direction: "top-bottom" },
      { path: "M 15,62 L 95,62", start: [15, 62], end: [95, 62], direction: "left-right" },
      { path: "M 40,62 C 35,78 25,90 15,95", start: [40, 62], end: [15, 95], direction: "curve-left" },
      { path: "M 70,62 C 75,78 85,90 95,95", start: [70, 62], end: [95, 95], direction: "curve-right" }
    ]
  },
  "教": {
    readings: { on: ["キョウ"], kun: ["おし.える", "おそ.わる"] },
    strokes: [
      { path: "M 15,12 L 48,12", start: [15, 12], end: [48, 12], direction: "left-right" },
      { path: "M 30,12 L 30,42", start: [30, 12], end: [30, 42], direction: "top-bottom" },
      { path: "M 15,42 L 48,42", start: [15, 42], end: [48, 42], direction: "left-right" },
      { path: "M 30,42 L 30,55", start: [30, 42], end: [30, 55], direction: "top-bottom" },
      { path: "M 30,55 L 12,90", start: [30, 55], end: [12, 90], direction: "top-right-to-bottom-left" },
      { path: "M 30,55 C 35,75 42,88 50,95", start: [30, 55], end: [50, 95], direction: "curve-right" },
      { path: "M 60,12 L 60,55", start: [60, 12], end: [60, 55], direction: "top-bottom" },
      { path: "M 60,30 L 95,15", start: [60, 30], end: [95, 15], direction: "complex" },
      { path: "M 60,55 L 92,38", start: [60, 55], end: [92, 38], direction: "complex" },
      { path: "M 70,60 L 70,95", start: [70, 60], end: [70, 95], direction: "top-bottom" },
      { path: "M 78,68 C 85,80 92,90 98,95", start: [78, 68], end: [98, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "近": {
    readings: { on: ["キン", "コン"], kun: ["ちか.い"] },
    strokes: [
      { path: "M 45,15 L 90,15", start: [45, 15], end: [90, 15], direction: "left-right" },
      { path: "M 55,15 L 55,40", start: [55, 15], end: [55, 40], direction: "top-bottom" },
      { path: "M 50,40 L 90,40", start: [50, 40], end: [90, 40], direction: "left-right" },
      { path: "M 70,40 L 70,65", start: [70, 40], end: [70, 65], direction: "top-bottom" },
      { path: "M 12,30 L 12,70", start: [12, 30], end: [12, 70], direction: "top-bottom" },
      { path: "M 12,30 L 30,30", start: [12, 30], end: [30, 30], direction: "left-right" },
      { path: "M 8,85 C 30,80 60,88 95,75", start: [8, 85], end: [95, 75], direction: "curve-right" }
    ]
  },
  "兄": {
    readings: { on: ["ケイ", "キョウ"], kun: ["あに"] },
    strokes: [
      { path: "M 25,15 L 85,15", start: [25, 15], end: [85, 15], direction: "left-right" },
      { path: "M 25,15 L 25,50", start: [25, 15], end: [25, 50], direction: "top-bottom" },
      { path: "M 85,15 L 85,50", start: [85, 15], end: [85, 50], direction: "top-bottom" },
      { path: "M 25,50 L 85,50", start: [25, 50], end: [85, 50], direction: "left-right" },
      { path: "M 55,50 C 55,70 45,85 30,95", start: [55, 50], end: [30, 95], direction: "curve-left" }
    ]
  },
  "形": {
    readings: { on: ["ケイ", "ギョウ"], kun: ["かたち", "かた"] },
    strokes: [
      { path: "M 12,15 L 50,15", start: [12, 15], end: [50, 15], direction: "left-right" },
      { path: "M 30,15 L 30,50", start: [30, 15], end: [30, 50], direction: "top-bottom" },
      { path: "M 12,50 L 50,50", start: [12, 50], end: [50, 50], direction: "left-right" },
      { path: "M 12,80 L 50,80", start: [12, 80], end: [50, 80], direction: "left-right" },
      { path: "M 65,15 L 65,95", start: [65, 15], end: [65, 95], direction: "top-bottom" },
      { path: "M 80,25 L 80,50", start: [80, 25], end: [80, 50], direction: "top-bottom" },
      { path: "M 95,40 L 95,70", start: [95, 40], end: [95, 70], direction: "top-bottom" }
    ]
  },
  "計": {
    readings: { on: ["ケイ"], kun: ["はか.る", "はか.らう"] },
    strokes: [
      { path: "M 15,15 L 40,15", start: [15, 15], end: [40, 15], direction: "left-right" },
      { path: "M 15,15 L 15,42", start: [15, 15], end: [15, 42], direction: "top-bottom" },
      { path: "M 15,42 L 40,42", start: [15, 42], end: [40, 42], direction: "left-right" },
      { path: "M 40,15 L 40,42", start: [40, 15], end: [40, 42], direction: "top-bottom" },
      { path: "M 15,58 L 40,58", start: [15, 58], end: [40, 58], direction: "left-right" },
      { path: "M 28,58 L 28,95", start: [28, 58], end: [28, 95], direction: "top-bottom" },
      { path: "M 15,95 L 40,95", start: [15, 95], end: [40, 95], direction: "left-right" },
      { path: "M 55,12 L 95,12", start: [55, 12], end: [95, 12], direction: "left-right" },
      { path: "M 75,12 L 75,95", start: [75, 12], end: [75, 95], direction: "top-bottom" }
    ]
  },
  "元": {
    readings: { on: ["ゲン", "ガン"], kun: ["もと"] },
    strokes: [
      { path: "M 20,20 L 90,20", start: [20, 20], end: [90, 20], direction: "left-right" },
      { path: "M 20,50 L 90,50", start: [20, 50], end: [90, 50], direction: "left-right" },
      { path: "M 35,50 C 32,70 25,85 15,95", start: [35, 50], end: [15, 95], direction: "curve-left" },
      { path: "M 70,50 L 70,95", start: [70, 50], end: [70, 95], direction: "top-bottom" }
    ]
  },
  "言": {
    readings: { on: ["ゲン", "ゴン"], kun: ["い.う", "こと"] },
    strokes: [
      { path: "M 30,10 L 80,10", start: [30, 10], end: [80, 10], direction: "left-right" },
      { path: "M 20,28 L 90,28", start: [20, 28], end: [90, 28], direction: "left-right" },
      { path: "M 25,28 L 25,55", start: [25, 28], end: [25, 55], direction: "top-bottom" },
      { path: "M 85,28 L 85,55", start: [85, 28], end: [85, 55], direction: "top-bottom" },
      { path: "M 25,42 L 85,42", start: [25, 42], end: [85, 42], direction: "left-right" },
      { path: "M 25,55 L 85,55", start: [25, 55], end: [85, 55], direction: "left-right" },
      { path: "M 15,75 L 95,75", start: [15, 75], end: [95, 75], direction: "left-right" }
    ]
  },
  "原": {
    readings: { on: ["ゲン"], kun: ["はら"] },
    strokes: [
      { path: "M 20,10 L 20,95", start: [20, 10], end: [20, 95], direction: "top-bottom" },
      { path: "M 20,10 L 95,10", start: [20, 10], end: [95, 10], direction: "left-right" },
      { path: "M 35,28 L 85,28", start: [35, 28], end: [85, 28], direction: "left-right" },
      { path: "M 35,28 L 35,55", start: [35, 28], end: [35, 55], direction: "top-bottom" },
      { path: "M 85,28 L 85,55", start: [85, 28], end: [85, 55], direction: "top-bottom" },
      { path: "M 35,42 L 85,42", start: [35, 42], end: [85, 42], direction: "left-right" },
      { path: "M 35,55 L 85,55", start: [35, 55], end: [85, 55], direction: "left-right" },
      { path: "M 60,42 L 60,55", start: [60, 42], end: [60, 55], direction: "top-bottom" },
      { path: "M 42,68 L 78,68", start: [42, 68], end: [78, 68], direction: "left-right" },
      { path: "M 60,68 C 60,80 50,90 40,95", start: [60, 68], end: [40, 95], direction: "curve-left" }
    ]
  },
  "戸": {
    readings: { on: ["コ"], kun: ["と"] },
    strokes: [
      { path: "M 55,10 L 55,30", start: [55, 10], end: [55, 30], direction: "top-bottom" },
      { path: "M 20,30 L 90,30", start: [20, 30], end: [90, 30], direction: "left-right" },
      { path: "M 20,30 L 20,95", start: [20, 30], end: [20, 95], direction: "top-bottom" },
      { path: "M 20,60 L 80,60", start: [20, 60], end: [80, 60], direction: "left-right" }
    ]
  },
  "古": {
    readings: { on: ["コ"], kun: ["ふる.い"] },
    strokes: [
      { path: "M 20,20 L 90,20", start: [20, 20], end: [90, 20], direction: "left-right" },
      { path: "M 55,10 L 55,50", start: [55, 10], end: [55, 50], direction: "top-bottom" },
      { path: "M 20,50 L 90,50", start: [20, 50], end: [90, 50], direction: "left-right" },
      { path: "M 20,50 L 20,90", start: [20, 50], end: [20, 90], direction: "top-bottom" },
      { path: "M 20,90 L 90,90", start: [20, 90], end: [90, 90], direction: "left-right" }
    ]
  },
"午": {
    readings: { on: ["ゴ"], kun: [] },
    strokes: [
      { path: "M 25,20 L 80,20", start: [25, 20], end: [80, 20], direction: "left-right" },
      { path: "M 54,10 L 54,50", start: [54, 10], end: [54, 50], direction: "top-bottom" },
      { path: "M 15,50 L 95,50", start: [15, 50], end: [95, 50], direction: "left-right" },
      { path: "M 54,50 L 54,95", start: [54, 50], end: [54, 95], direction: "top-bottom" }
    ]
  },
  "後": {
    readings: { on: ["ゴ", "コウ"], kun: ["のち", "うし.ろ", "あと"] },
    strokes: [
      { path: "M 18,18 L 18,92", start: [18, 18], end: [18, 92], direction: "top-bottom" },
      { path: "M 18,18 L 28,28", start: [18, 18], end: [28, 28], direction: "top-left-to-bottom-right" },
      { path: "M 18,55 L 28,55", start: [18, 55], end: [28, 55], direction: "left-right" },
      { path: "M 40,12 L 40,50", start: [40, 12], end: [40, 50], direction: "top-bottom" },
      { path: "M 40,25 L 90,25", start: [40, 25], end: [90, 25], direction: "left-right" },
      { path: "M 55,12 L 55,50", start: [55, 12], end: [55, 50], direction: "top-bottom" },
      { path: "M 40,50 L 90,50", start: [40, 50], end: [90, 50], direction: "left-right" },
      { path: "M 45,62 L 90,62", start: [45, 62], end: [90, 62], direction: "left-right" },
      { path: "M 65,62 C 65,75 55,90 40,97", start: [65, 62], end: [40, 97], direction: "curve-left" }
    ]
  },
  "語": {
    readings: { on: ["ゴ"], kun: ["かた.る", "かた.らう"] },
    strokes: [
      { path: "M 10,15 L 10,45", start: [10, 15], end: [10, 45], direction: "top-bottom" },
      { path: "M 10,15 L 40,15", start: [10, 15], end: [40, 15], direction: "left-right" },
      { path: "M 25,15 L 25,45", start: [25, 15], end: [25, 45], direction: "top-bottom" },
      { path: "M 10,30 L 40,30", start: [10, 30], end: [40, 30], direction: "left-right" },
      { path: "M 10,45 L 40,45", start: [10, 45], end: [40, 45], direction: "left-right" },
      { path: "M 10,62 L 40,62", start: [10, 62], end: [40, 62], direction: "left-right" },
      { path: "M 25,62 L 25,95", start: [25, 62], end: [25, 95], direction: "top-bottom" },
      { path: "M 55,10 L 55,30", start: [55, 10], end: [55, 30], direction: "top-bottom" },
      { path: "M 50,30 L 100,30", start: [50, 30], end: [100, 30], direction: "left-right" },
      { path: "M 55,42 L 95,42", start: [55, 42], end: [95, 42], direction: "left-right" },
      { path: "M 55,42 L 55,95", start: [55, 42], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,60 L 95,60", start: [55, 60], end: [95, 60], direction: "left-right" },
      { path: "M 95,42 L 95,78", start: [95, 42], end: [95, 78], direction: "top-bottom" },
      { path: "M 55,78 L 95,78", start: [55, 78], end: [95, 78], direction: "left-right" }
    ]
  },
  "工": {
    readings: { on: ["コウ", "ク"], kun: [] },
    strokes: [
      { path: "M 18,20 L 90,20", start: [18, 20], end: [90, 20], direction: "left-right" },
      { path: "M 54,20 L 54,88", start: [54, 20], end: [54, 88], direction: "top-bottom" },
      { path: "M 18,88 L 90,88", start: [18, 88], end: [90, 88], direction: "left-right" }
    ]
  },
  "公": {
    readings: { on: ["コウ", "ク"], kun: ["おおやけ"] },
    strokes: [
      { path: "M 38,15 C 38,15 30,35 22,45", start: [38, 15], end: [22, 45], direction: "top-right-to-bottom-left" },
      { path: "M 54,12 C 58,30 68,42 82,48", start: [54, 12], end: [82, 48], direction: "top-left-to-bottom-right" },
      { path: "M 35,55 C 35,55 30,78 18,95", start: [35, 55], end: [18, 95], direction: "curve-left" },
      { path: "M 55,55 C 55,60 65,82 90,95", start: [55, 55], end: [90, 95], direction: "curve-right" }
    ]
  },
  "広": {
    readings: { on: ["コウ"], kun: ["ひろ.い", "ひろ.まる", "ひろ.める", "ひろ.がる", "ひろ.げる"] },
    strokes: [
      { path: "M 18,10 L 18,95", start: [18, 10], end: [18, 95], direction: "top-bottom" },
      { path: "M 18,10 L 50,10", start: [18, 10], end: [50, 10], direction: "left-right" },
      { path: "M 35,35 L 85,35", start: [35, 35], end: [85, 35], direction: "left-right" },
      { path: "M 55,35 C 55,55 50,70 35,85", start: [55, 35], end: [35, 85], direction: "curve-left" },
      { path: "M 18,95 C 40,88 65,82 95,90", start: [18, 95], end: [95, 90], direction: "left-right" }
    ]
  },
  "交": {
    readings: { on: ["コウ"], kun: ["まじ.わる", "ま.じる", "ま.ぜる", "か.う", "か.わす"] },
    strokes: [
      { path: "M 25,12 L 85,12", start: [25, 12], end: [85, 12], direction: "left-right" },
      { path: "M 54,12 L 54,35", start: [54, 12], end: [54, 35], direction: "top-bottom" },
      { path: "M 38,35 C 38,35 35,50 20,60", start: [38, 35], end: [20, 60], direction: "curve-left" },
      { path: "M 72,35 C 72,35 75,50 90,60", start: [72, 35], end: [90, 60], direction: "curve-right" },
      { path: "M 85,55 L 15,97", start: [85, 55], end: [15, 97], direction: "top-right-to-bottom-left" },
      { path: "M 20,55 L 92,97", start: [20, 55], end: [92, 97], direction: "top-left-to-bottom-right" }
    ]
  },
  "光": {
    readings: { on: ["コウ"], kun: ["ひかり", "ひか.る"] },
    strokes: [
      { path: "M 35,10 L 54,35", start: [35, 10], end: [54, 35], direction: "top-left-to-bottom-right" },
      { path: "M 75,10 L 54,35", start: [75, 10], end: [54, 35], direction: "top-right-to-bottom-left" },
      { path: "M 18,45 L 90,45", start: [18, 45], end: [90, 45], direction: "left-right" },
      { path: "M 38,45 L 38,72", start: [38, 45], end: [38, 72], direction: "top-bottom" },
      { path: "M 68,45 L 68,72", start: [68, 45], end: [68, 72], direction: "top-bottom" },
      { path: "M 15,75 C 30,85 45,95 54,97 C 62,95 78,85 95,75", start: [15, 75], end: [95, 75], direction: "complex" }
    ]
  },
  "考": {
    readings: { on: ["コウ"], kun: ["かんが.える"] },
    strokes: [
      { path: "M 18,18 L 85,18", start: [18, 18], end: [85, 18], direction: "left-right" },
      { path: "M 45,18 L 45,48", start: [45, 18], end: [45, 48], direction: "top-bottom" },
      { path: "M 15,48 L 90,48", start: [15, 48], end: [90, 48], direction: "left-right" },
      { path: "M 45,48 C 42,65 35,75 20,85", start: [45, 48], end: [20, 85], direction: "curve-left" },
      { path: "M 55,60 C 55,60 75,55 90,58", start: [55, 60], end: [90, 58], direction: "left-right" },
      { path: "M 70,55 C 70,65 65,80 55,95", start: [70, 55], end: [55, 95], direction: "curve-left" }
    ]
  },
  "行": {
    readings: { on: ["コウ", "ギョウ", "アン"], kun: ["い.く", "ゆ.く", "おこな.う"] },
    strokes: [
      { path: "M 22,12 L 22,55", start: [22, 12], end: [22, 55], direction: "top-bottom" },
      { path: "M 22,12 L 38,18", start: [22, 12], end: [38, 18], direction: "left-right" },
      { path: "M 12,42 L 42,42", start: [12, 42], end: [42, 42], direction: "left-right" },
      { path: "M 60,12 L 95,12", start: [60, 12], end: [95, 12], direction: "left-right" },
      { path: "M 75,12 L 75,95", start: [75, 12], end: [75, 95], direction: "top-bottom" },
      { path: "M 12,95 C 30,88 55,85 75,95", start: [12, 95], end: [75, 95], direction: "complex" }
    ]
  },
  "高": {
    readings: { on: ["コウ"], kun: ["たか.い", "たか", "たか.まる", "たか.める"] },
    strokes: [
      { path: "M 15,15 L 95,15", start: [15, 15], end: [95, 15], direction: "left-right" },
      { path: "M 54,5 L 54,15", start: [54, 5], end: [54, 15], direction: "top-bottom" },
      { path: "M 22,15 L 22,38", start: [22, 15], end: [22, 38], direction: "top-bottom" },
      { path: "M 88,15 L 88,38", start: [88, 15], end: [88, 38], direction: "top-bottom" },
      { path: "M 22,38 L 88,38", start: [22, 38], end: [88, 38], direction: "left-right" },
      { path: "M 30,50 L 30,92", start: [30, 50], end: [30, 92], direction: "top-bottom" },
      { path: "M 80,50 L 80,92", start: [80, 50], end: [80, 92], direction: "top-bottom" },
      { path: "M 30,50 L 80,50", start: [30, 50], end: [80, 50], direction: "left-right" },
      { path: "M 38,70 L 72,70", start: [38, 70], end: [72, 70], direction: "left-right" },
      { path: "M 30,92 L 80,92", start: [30, 92], end: [80, 92], direction: "left-right" }
    ]
  },
  "黄": {
    readings: { on: ["コウ", "オウ"], kun: ["き", "こ"] },
    strokes: [
      { path: "M 18,10 L 90,10", start: [18, 10], end: [90, 10], direction: "left-right" },
      { path: "M 54,10 L 54,30", start: [54, 10], end: [54, 30], direction: "top-bottom" },
      { path: "M 25,30 L 82,30", start: [25, 30], end: [82, 30], direction: "left-right" },
      { path: "M 25,30 L 25,55", start: [25, 30], end: [25, 55], direction: "top-bottom" },
      { path: "M 82,30 L 82,55", start: [82, 30], end: [82, 55], direction: "top-bottom" },
      { path: "M 35,42 L 72,42", start: [35, 42], end: [72, 42], direction: "left-right" },
      { path: "M 25,55 L 82,55", start: [25, 55], end: [82, 55], direction: "left-right" },
      { path: "M 15,68 L 95,68", start: [15, 68], end: [95, 68], direction: "left-right" },
      { path: "M 54,55 L 54,68", start: [54, 55], end: [54, 68], direction: "top-bottom" },
      { path: "M 54,68 L 18,97", start: [54, 68], end: [18, 97], direction: "top-right-to-bottom-left" },
      { path: "M 54,68 L 92,97", start: [54, 68], end: [92, 97], direction: "top-left-to-bottom-right" }
    ]
  },
  "合": {
    readings: { on: ["ゴウ", "ガッ", "カッ"], kun: ["あ.う", "あ.わせる"] },
    strokes: [
      { path: "M 54,8 L 20,38", start: [54, 8], end: [20, 38], direction: "top-right-to-bottom-left" },
      { path: "M 54,8 L 88,38", start: [54, 8], end: [88, 38], direction: "top-left-to-bottom-right" },
      { path: "M 15,45 L 95,45", start: [15, 45], end: [95, 45], direction: "left-right" },
      { path: "M 28,45 L 28,92", start: [28, 45], end: [28, 92], direction: "top-bottom" },
      { path: "M 82,45 L 82,92", start: [82, 45], end: [82, 92], direction: "top-bottom" },
      { path: "M 28,92 L 82,92", start: [28, 92], end: [82, 92], direction: "left-right" }
    ]
  },
  "谷": {
    readings: { on: ["コク"], kun: ["たに"] },
    strokes: [
      { path: "M 38,10 C 38,10 30,25 18,35", start: [38, 10], end: [18, 35], direction: "top-right-to-bottom-left" },
      { path: "M 72,10 C 72,10 78,25 90,35", start: [72, 10], end: [90, 35], direction: "top-left-to-bottom-right" },
      { path: "M 54,25 L 20,55", start: [54, 25], end: [20, 55], direction: "top-right-to-bottom-left" },
      { path: "M 54,25 L 88,55", start: [54, 25], end: [88, 55], direction: "top-left-to-bottom-right" },
      { path: "M 30,60 L 30,92", start: [30, 60], end: [30, 92], direction: "top-bottom" },
      { path: "M 78,60 L 78,92", start: [78, 60], end: [78, 92], direction: "top-bottom" },
      { path: "M 30,92 L 78,92", start: [30, 92], end: [78, 92], direction: "left-right" }
    ]
  },
  "国": {
    readings: { on: ["コク"], kun: ["くに"] },
    strokes: [
      { path: "M 15,10 L 95,10", start: [15, 10], end: [95, 10], direction: "left-right" },
      { path: "M 15,10 L 15,97", start: [15, 10], end: [15, 97], direction: "top-bottom" },
      { path: "M 95,10 L 95,97", start: [95, 10], end: [95, 97], direction: "top-bottom" },
      { path: "M 38,30 L 72,30", start: [38, 30], end: [72, 30], direction: "left-right" },
      { path: "M 54,30 L 54,55", start: [54, 30], end: [54, 55], direction: "top-bottom" },
      { path: "M 38,55 L 72,55", start: [38, 55], end: [72, 55], direction: "left-right" },
      { path: "M 54,68 L 58,75", start: [54, 68], end: [58, 75], direction: "top-left-to-bottom-right" },
      { path: "M 15,97 L 95,97", start: [15, 97], end: [95, 97], direction: "left-right" }
    ]
  },
  "黒": {
    readings: { on: ["コク"], kun: ["くろ", "くろ.い"] },
    strokes: [
      { path: "M 28,10 L 82,10", start: [28, 10], end: [82, 10], direction: "left-right" },
      { path: "M 28,10 L 28,55", start: [28, 10], end: [28, 55], direction: "top-bottom" },
      { path: "M 82,10 L 82,55", start: [82, 10], end: [82, 55], direction: "top-bottom" },
      { path: "M 38,25 L 72,25", start: [38, 25], end: [72, 25], direction: "left-right" },
      { path: "M 38,40 L 72,40", start: [38, 40], end: [72, 40], direction: "left-right" },
      { path: "M 28,55 L 82,55", start: [28, 55], end: [82, 55], direction: "left-right" },
      { path: "M 15,68 L 95,68", start: [15, 68], end: [95, 68], direction: "left-right" },
      { path: "M 54,55 L 54,68", start: [54, 55], end: [54, 68], direction: "top-bottom" },
      { path: "M 30,80 L 34,88", start: [30, 80], end: [34, 88], direction: "top-left-to-bottom-right" },
      { path: "M 78,80 L 74,88", start: [78, 80], end: [74, 88], direction: "top-right-to-bottom-left" },
      { path: "M 15,97 C 35,90 75,90 95,97", start: [15, 97], end: [95, 97], direction: "complex" }
    ]
  },
  "今": {
    readings: { on: ["コン", "キン"], kun: ["いま"] },
    strokes: [
      { path: "M 54,8 L 18,45", start: [54, 8], end: [18, 45], direction: "top-right-to-bottom-left" },
      { path: "M 54,8 L 92,45", start: [54, 8], end: [92, 45], direction: "top-left-to-bottom-right" },
      { path: "M 42,50 C 42,55 38,72 28,88", start: [42, 50], end: [28, 88], direction: "curve-left" },
      { path: "M 66,50 C 66,65 62,82 58,95", start: [66, 50], end: [58, 95], direction: "top-bottom" }
    ]
  },
  "才": {
    readings: { on: ["サイ"], kun: [] },
    strokes: [
      { path: "M 15,50 L 95,50", start: [15, 50], end: [95, 50], direction: "left-right" },
      { path: "M 54,15 L 54,50", start: [54, 15], end: [54, 50], direction: "top-bottom" },
      { path: "M 54,50 C 50,65 40,80 25,95", start: [54, 50], end: [25, 95], direction: "curve-left" }
    ]
  },
  "細": {
    readings: { on: ["サイ"], kun: ["ほそ.い", "ほそ.る", "こま.かい"] },
    strokes: [
      { path: "M 18,15 L 18,95", start: [18, 15], end: [18, 95], direction: "top-bottom" },
      { path: "M 12,25 L 42,18", start: [12, 25], end: [42, 18], direction: "complex" },
      { path: "M 12,50 L 42,42", start: [12, 50], end: [42, 42], direction: "complex" },
      { path: "M 12,78 L 42,68", start: [12, 78], end: [42, 68], direction: "complex" },
      { path: "M 55,12 L 55,35", start: [55, 12], end: [55, 35], direction: "top-bottom" },
      { path: "M 50,35 L 100,35", start: [50, 35], end: [100, 35], direction: "left-right" },
      { path: "M 55,48 L 95,48", start: [55, 48], end: [95, 48], direction: "left-right" },
      { path: "M 55,48 L 55,92", start: [55, 48], end: [55, 92], direction: "top-bottom" },
      { path: "M 55,65 L 95,65", start: [55, 65], end: [95, 65], direction: "left-right" },
      { path: "M 95,48 L 95,92", start: [95, 48], end: [95, 92], direction: "top-bottom" },
      { path: "M 55,92 L 95,92", start: [55, 92], end: [95, 92], direction: "left-right" }
    ]
  },
  "作": {
    readings: { on: ["サク", "サ"], kun: ["つく.る"] },
    strokes: [
      { path: "M 22,18 L 22,95", start: [22, 18], end: [22, 95], direction: "top-bottom" },
      { path: "M 22,18 L 35,25", start: [22, 18], end: [35, 25], direction: "left-right" },
      { path: "M 38,12 L 50,22", start: [38, 12], end: [50, 22], direction: "top-left-to-bottom-right" },
      { path: "M 40,30 L 95,30", start: [40, 30], end: [95, 30], direction: "left-right" },
      { path: "M 40,48 L 95,48", start: [40, 48], end: [95, 48], direction: "left-right" },
      { path: "M 65,48 L 65,75", start: [65, 48], end: [65, 75], direction: "top-bottom" },
      { path: "M 40,75 L 95,75", start: [40, 75], end: [95, 75], direction: "left-right" }
    ]
  },
  "算": {
    readings: { on: ["サン"], kun: [] },
    strokes: [
      { path: "M 15,8 L 48,8", start: [15, 8], end: [48, 8], direction: "left-right" },
      { path: "M 60,8 L 95,8", start: [60, 8], end: [95, 8], direction: "left-right" },
      { path: "M 30,8 L 30,40", start: [30, 8], end: [30, 40], direction: "top-bottom" },
      { path: "M 78,8 L 78,40", start: [78, 8], end: [78, 40], direction: "top-bottom" },
      { path: "M 15,40 L 95,40", start: [15, 40], end: [95, 40], direction: "left-right" },
      { path: "M 54,40 L 54,55", start: [54, 40], end: [54, 55], direction: "top-bottom" },
      { path: "M 18,55 L 90,55", start: [18, 55], end: [90, 55], direction: "left-right" },
      { path: "M 28,55 L 28,80", start: [28, 55], end: [28, 80], direction: "top-bottom" },
      { path: "M 80,55 L 80,80", start: [80, 55], end: [80, 80], direction: "top-bottom" },
      { path: "M 40,68 L 68,68", start: [40, 68], end: [68, 68], direction: "left-right" },
      { path: "M 54,68 L 54,80", start: [54, 68], end: [54, 80], direction: "top-bottom" },
      { path: "M 28,80 L 80,80", start: [28, 80], end: [80, 80], direction: "left-right" },
      { path: "M 54,80 L 54,97", start: [54, 80], end: [54, 97], direction: "top-bottom" },
      { path: "M 15,97 L 95,97", start: [15, 97], end: [95, 97], direction: "left-right" }
    ]
  },
  "止": {
    readings: { on: ["シ"], kun: ["と.まる", "と.める"] },
    strokes: [
      { path: "M 35,15 L 35,90", start: [35, 15], end: [35, 90], direction: "top-bottom" },
      { path: "M 35,45 L 75,45", start: [35, 45], end: [75, 45], direction: "left-right" },
      { path: "M 75,15 L 75,90", start: [75, 15], end: [75, 90], direction: "top-bottom" },
      { path: "M 15,90 L 95,90", start: [15, 90], end: [95, 90], direction: "left-right" }
    ]
  },
  "市": {
    readings: { on: ["シ"], kun: ["いち"] },
    strokes: [
      { path: "M 54,5 L 54,25", start: [54, 5], end: [54, 25], direction: "top-bottom" },
      { path: "M 15,25 L 95,25", start: [15, 25], end: [95, 25], direction: "left-right" },
      { path: "M 30,25 L 30,90 C 30,97 28,98 20,98", start: [30, 25], end: [20, 98], direction: "complex" },
      { path: "M 54,40 L 54,95", start: [54, 40], end: [54, 95], direction: "top-bottom" },
      { path: "M 80,25 L 80,90 C 80,97 82,98 90,98", start: [80, 25], end: [90, 98], direction: "complex" }
    ]
  },
  "矢": {
    readings: { on: ["シ"], kun: ["や"] },
    strokes: [
      { path: "M 25,18 L 85,18", start: [25, 18], end: [85, 18], direction: "left-right" },
      { path: "M 42,18 L 42,48", start: [42, 18], end: [42, 48], direction: "top-bottom" },
      { path: "M 15,48 L 95,48", start: [15, 48], end: [95, 48], direction: "left-right" },
      { path: "M 54,48 L 20,90", start: [54, 48], end: [20, 90], direction: "top-right-to-bottom-left" },
      { path: "M 54,48 C 60,65 72,82 95,95", start: [54, 48], end: [95, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "姉": {
    readings: { on: ["シ"], kun: ["あね"] },
    strokes: [
      { path: "M 18,20 C 18,20 22,30 15,40", start: [18, 20], end: [15, 40], direction: "top-bottom" },
      { path: "M 25,15 L 25,90", start: [25, 15], end: [25, 90], direction: "top-bottom" },
      { path: "M 25,50 L 10,80", start: [25, 50], end: [10, 80], direction: "top-right-to-bottom-left" },
      { path: "M 55,10 L 55,32", start: [55, 10], end: [55, 32], direction: "top-bottom" },
      { path: "M 48,32 L 95,32", start: [48, 32], end: [95, 32], direction: "left-right" },
      { path: "M 48,50 L 95,50", start: [48, 50], end: [95, 50], direction: "left-right" },
      { path: "M 68,32 L 68,50", start: [68, 32], end: [68, 50], direction: "top-bottom" },
      { path: "M 68,55 C 65,70 58,85 50,95", start: [68, 55], end: [50, 95], direction: "curve-left" }
    ]
  },
  "思": {
    readings: { on: ["シ"], kun: ["おも.う"] },
    strokes: [
      { path: "M 20,10 L 88,10", start: [20, 10], end: [88, 10], direction: "left-right" },
      { path: "M 20,10 L 20,55", start: [20, 10], end: [20, 55], direction: "top-bottom" },
      { path: "M 88,10 L 88,55", start: [88, 10], end: [88, 55], direction: "top-bottom" },
      { path: "M 35,28 L 72,28", start: [35, 28], end: [72, 28], direction: "left-right" },
      { path: "M 54,10 L 54,55", start: [54, 10], end: [54, 55], direction: "top-bottom" },
      { path: "M 20,55 L 88,55", start: [20, 55], end: [88, 55], direction: "left-right" },
      { path: "M 18,70 C 18,70 22,82 28,82 C 32,82 30,75 28,70", start: [18, 70], end: [28, 70], direction: "curve-right" },
      { path: "M 45,62 C 45,62 43,78 42,85 C 42,90 45,92 50,88", start: [45, 62], end: [50, 88], direction: "complex" },
      { path: "M 82,62 C 82,68 85,78 88,82 C 90,85 88,78 82,72", start: [82, 62], end: [82, 72], direction: "complex" }
    ]
  },
  "紙": {
    readings: { on: ["シ"], kun: ["かみ"] },
    strokes: [
      { path: "M 18,20 L 18,88", start: [18, 20], end: [18, 88], direction: "top-bottom" },
      { path: "M 10,30 L 40,22", start: [10, 30], end: [40, 22], direction: "complex" },
      { path: "M 10,55 L 40,48", start: [10, 55], end: [40, 48], direction: "complex" },
      { path: "M 10,80 L 40,72", start: [10, 80], end: [40, 72], direction: "complex" },
      { path: "M 55,10 L 55,38", start: [55, 10], end: [55, 38], direction: "top-bottom" },
      { path: "M 55,38 L 95,38", start: [55, 38], end: [95, 38], direction: "left-right" },
      { path: "M 55,55 L 95,55", start: [55, 55], end: [95, 55], direction: "left-right" },
      { path: "M 72,38 L 72,55", start: [72, 38], end: [72, 55], direction: "top-bottom" },
      { path: "M 72,55 C 68,68 60,80 50,90", start: [72, 55], end: [50, 90], direction: "curve-left" },
      { path: "M 72,55 C 78,70 88,82 98,92", start: [72, 55], end: [98, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "寺": {
    readings: { on: ["ジ"], kun: ["てら"] },
    strokes: [
      { path: "M 18,18 L 90,18", start: [18, 18], end: [90, 18], direction: "left-right" },
      { path: "M 18,40 L 90,40", start: [18, 40], end: [90, 40], direction: "left-right" },
      { path: "M 54,40 L 54,95", start: [54, 40], end: [54, 95], direction: "top-bottom" },
      { path: "M 30,55 L 80,55", start: [30, 55], end: [80, 55], direction: "left-right" },
      { path: "M 30,70 L 80,70", start: [30, 70], end: [80, 70], direction: "left-right" },
      { path: "M 30,70 C 30,80 28,90 20,97", start: [30, 70], end: [20, 97], direction: "curve-left" }
    ]
  },
  "自": {
    readings: { on: ["ジ", "シ"], kun: ["みずか.ら"] },
    strokes: [
      { path: "M 54,5 L 54,18", start: [54, 5], end: [54, 18], direction: "top-bottom" },
      { path: "M 22,18 L 85,18", start: [22, 18], end: [85, 18], direction: "left-right" },
      { path: "M 22,18 L 22,92", start: [22, 18], end: [22, 92], direction: "top-bottom" },
      { path: "M 85,18 L 85,92", start: [85, 18], end: [85, 92], direction: "top-bottom" },
      { path: "M 35,52 L 72,52", start: [35, 52], end: [72, 52], direction: "left-right" },
      { path: "M 22,92 L 85,92", start: [22, 92], end: [85, 92], direction: "left-right" }
    ]
  },
  "時": {
    readings: { on: ["ジ"], kun: ["とき"] },
    strokes: [
      { path: "M 10,15 L 10,92", start: [10, 15], end: [10, 92], direction: "top-bottom" },
      { path: "M 10,15 L 40,15", start: [10, 15], end: [40, 15], direction: "left-right" },
      { path: "M 40,15 L 40,92", start: [40, 15], end: [40, 92], direction: "top-bottom" },
      { path: "M 18,52 L 32,52", start: [18, 52], end: [32, 52], direction: "left-right" },
      { path: "M 10,92 L 40,92", start: [10, 92], end: [40, 92], direction: "left-right" },
      { path: "M 60,10 L 60,35", start: [60, 10], end: [60, 35], direction: "top-bottom" },
      { path: "M 55,35 L 95,35", start: [55, 35], end: [95, 35], direction: "left-right" },
      { path: "M 55,52 L 95,52", start: [55, 52], end: [95, 52], direction: "left-right" },
      { path: "M 75,35 L 75,52", start: [75, 35], end: [75, 52], direction: "top-bottom" },
      { path: "M 75,52 C 72,68 65,82 55,95", start: [75, 52], end: [55, 95], direction: "curve-left" }
    ]
  },
  "室": {
    readings: { on: ["シツ"], kun: ["むろ"] },
    strokes: [
      { path: "M 54,5 L 54,18", start: [54, 5], end: [54, 18], direction: "top-bottom" },
      { path: "M 18,18 L 90,18", start: [18, 18], end: [90, 18], direction: "left-right" },
      { path: "M 22,30 L 85,30", start: [22, 30], end: [85, 30], direction: "left-right" },
      { path: "M 22,30 L 22,65", start: [22, 30], end: [22, 65], direction: "top-bottom" },
      { path: "M 85,30 L 85,65", start: [85, 30], end: [85, 65], direction: "top-bottom" },
      { path: "M 35,48 L 72,48", start: [35, 48], end: [72, 48], direction: "left-right" },
      { path: "M 22,65 L 85,65", start: [22, 65], end: [85, 65], direction: "left-right" },
      { path: "M 18,80 L 90,80", start: [18, 80], end: [90, 80], direction: "left-right" },
      { path: "M 54,65 L 54,95", start: [54, 65], end: [54, 95], direction: "top-bottom" }
    ]
  },
  "社": {
    readings: { on: ["シャ"], kun: ["やしろ"] },
    strokes: [
      { path: "M 10,18 L 10,55", start: [10, 18], end: [10, 55], direction: "top-bottom" },
      { path: "M 10,18 L 20,28", start: [10, 18], end: [20, 28], direction: "top-left-to-bottom-right" },
      { path: "M 10,42 L 20,42", start: [10, 42], end: [20, 42], direction: "left-right" },
      { path: "M 20,60 L 38,60", start: [20, 60], end: [38, 60], direction: "left-right" },
      { path: "M 28,60 L 28,97", start: [28, 60], end: [28, 97], direction: "top-bottom" },
      { path: "M 55,10 L 95,10", start: [55, 10], end: [95, 10], direction: "left-right" },
      { path: "M 75,10 L 75,97", start: [75, 10], end: [75, 97], direction: "top-bottom" }
    ]
  },
  "弱": {
    readings: { on: ["ジャク"], kun: ["よわ.い", "よわ.る", "よわ.まる"] },
    strokes: [
      { path: "M 12,12 L 12,85 C 12,92 10,95 8,97", start: [12, 12], end: [8, 97], direction: "complex" },
      { path: "M 12,12 L 48,12", start: [12, 12], end: [48, 12], direction: "left-right" },
      { path: "M 30,22 C 30,22 30,45 28,55", start: [30, 22], end: [28, 55], direction: "top-bottom" },
      { path: "M 25,65 L 42,55", start: [25, 65], end: [42, 55], direction: "complex" },
      { path: "M 40,70 L 45,82", start: [40, 70], end: [45, 82], direction: "top-left-to-bottom-right" },
      { path: "M 58,12 L 58,85 C 58,92 56,95 52,97", start: [58, 12], end: [52, 97], direction: "complex" },
      { path: "M 58,12 L 95,12", start: [58, 12], end: [95, 12], direction: "left-right" },
      { path: "M 75,22 C 75,22 75,45 72,55", start: [75, 22], end: [72, 55], direction: "top-bottom" },
      { path: "M 70,65 L 88,55", start: [70, 65], end: [88, 55], direction: "complex" },
      { path: "M 85,70 L 90,82", start: [85, 70], end: [90, 82], direction: "top-left-to-bottom-right" }
    ]
  },
  "首": {
    readings: { on: ["シュ"], kun: ["くび"] },
    strokes: [
      { path: "M 30,8 L 48,8", start: [30, 8], end: [48, 8], direction: "left-right" },
      { path: "M 60,8 L 78,8", start: [60, 8], end: [78, 8], direction: "left-right" },
      { path: "M 54,8 L 54,25", start: [54, 8], end: [54, 25], direction: "top-bottom" },
      { path: "M 22,32 L 85,32", start: [22, 32], end: [85, 32], direction: "left-right" },
      { path: "M 22,32 L 22,92", start: [22, 32], end: [22, 92], direction: "top-bottom" },
      { path: "M 85,32 L 85,92", start: [85, 32], end: [85, 92], direction: "top-bottom" },
      { path: "M 35,55 L 72,55", start: [35, 55], end: [72, 55], direction: "left-right" },
      { path: "M 35,72 L 72,72", start: [35, 72], end: [72, 72], direction: "left-right" },
      { path: "M 22,92 L 85,92", start: [22, 92], end: [85, 92], direction: "left-right" }
    ]
  },
  "秋": {
    readings: { on: ["シュウ"], kun: ["あき"] },
    strokes: [
      { path: "M 15,15 L 50,15", start: [15, 15], end: [50, 15], direction: "left-right" },
      { path: "M 30,15 L 30,48", start: [30, 15], end: [30, 48], direction: "top-bottom" },
      { path: "M 15,48 L 50,48", start: [15, 48], end: [50, 48], direction: "left-right" },
      { path: "M 30,48 L 30,70", start: [30, 48], end: [30, 70], direction: "top-bottom" },
      { path: "M 30,70 L 12,95", start: [30, 70], end: [12, 95], direction: "top-right-to-bottom-left" },
      { path: "M 30,70 C 35,82 42,92 50,97", start: [30, 70], end: [50, 97], direction: "top-left-to-bottom-right" },
      { path: "M 68,15 L 68,50", start: [68, 15], end: [68, 50], direction: "top-bottom" },
      { path: "M 62,30 L 95,18", start: [62, 30], end: [95, 18], direction: "complex" },
      { path: "M 68,50 C 65,70 58,85 52,97", start: [68, 50], end: [52, 97], direction: "curve-left" }
    ]
  },
  "週": {
    readings: { on: ["シュウ"], kun: [] },
    strokes: [
      { path: "M 28,12 L 28,40", start: [28, 12], end: [28, 40], direction: "top-bottom" },
      { path: "M 28,12 L 88,12", start: [28, 12], end: [88, 12], direction: "left-right" },
      { path: "M 58,12 L 58,40", start: [58, 12], end: [58, 40], direction: "top-bottom" },
      { path: "M 88,12 L 88,40", start: [88, 12], end: [88, 40], direction: "top-bottom" },
      { path: "M 28,40 L 88,40", start: [28, 40], end: [88, 40], direction: "left-right" },
      { path: "M 35,50 L 80,50", start: [35, 50], end: [80, 50], direction: "left-right" },
      { path: "M 58,50 L 58,72", start: [58, 50], end: [58, 72], direction: "top-bottom" },
      { path: "M 35,72 L 80,72", start: [35, 72], end: [80, 72], direction: "left-right" },
      { path: "M 12,20 L 12,78", start: [12, 20], end: [12, 78], direction: "top-bottom" },
      { path: "M 12,78 C 20,85 35,90 55,92 C 75,94 90,90 100,85", start: [12, 78], end: [100, 85], direction: "complex" },
      { path: "M 12,20 L 22,28", start: [12, 20], end: [22, 28], direction: "top-left-to-bottom-right" }
    ]
  },
  "春": {
    readings: { on: ["シュン"], kun: ["はる"] },
    strokes: [
      { path: "M 20,12 L 88,12", start: [20, 12], end: [88, 12], direction: "left-right" },
      { path: "M 54,12 L 54,30", start: [54, 12], end: [54, 30], direction: "top-bottom" },
      { path: "M 20,30 L 88,30", start: [20, 30], end: [88, 30], direction: "left-right" },
      { path: "M 28,42 L 80,42", start: [28, 42], end: [80, 42], direction: "left-right" },
      { path: "M 54,42 L 22,60", start: [54, 42], end: [22, 60], direction: "top-right-to-bottom-left" },
      { path: "M 54,42 L 88,60", start: [54, 42], end: [88, 60], direction: "top-left-to-bottom-right" },
      { path: "M 15,68 L 95,68", start: [15, 68], end: [95, 68], direction: "left-right" },
      { path: "M 54,68 C 50,78 42,88 30,95", start: [54, 68], end: [30, 95], direction: "curve-left" },
      { path: "M 54,68 C 60,78 70,88 82,95", start: [54, 68], end: [82, 95], direction: "curve-right" }
    ]
  },
  "書": {
    readings: { on: ["ショ"], kun: ["か.く"] },
    strokes: [
      { path: "M 25,10 L 82,10", start: [25, 10], end: [82, 10], direction: "left-right" },
      { path: "M 54,10 L 54,30", start: [54, 10], end: [54, 30], direction: "top-bottom" },
      { path: "M 15,30 L 95,30", start: [15, 30], end: [95, 30], direction: "left-right" },
      { path: "M 35,42 L 72,42", start: [35, 42], end: [72, 42], direction: "left-right" },
      { path: "M 22,55 L 85,55", start: [22, 55], end: [85, 55], direction: "left-right" },
      { path: "M 22,55 L 22,92", start: [22, 55], end: [22, 92], direction: "top-bottom" },
      { path: "M 85,55 L 85,92", start: [85, 55], end: [85, 92], direction: "top-bottom" },
      { path: "M 35,70 L 72,70", start: [35, 70], end: [72, 70], direction: "left-right" },
      { path: "M 54,55 L 54,92", start: [54, 55], end: [54, 92], direction: "top-bottom" },
      { path: "M 22,92 L 85,92", start: [22, 92], end: [85, 92], direction: "left-right" }
    ]
  },
  "少": {
    readings: { on: ["ショウ"], kun: ["すく.ない", "すこ.し"] },
    strokes: [
      { path: "M 54,10 L 54,65", start: [54, 10], end: [54, 65], direction: "top-bottom" },
      { path: "M 30,35 C 28,50 22,65 15,78", start: [30, 35], end: [15, 78], direction: "curve-left" },
      { path: "M 60,35 C 68,50 80,65 92,78", start: [60, 35], end: [92, 78], direction: "curve-right" },
      { path: "M 54,65 C 48,78 38,88 25,95", start: [54, 65], end: [25, 95], direction: "curve-left" }
    ]
  },
  "場": {
    readings: { on: ["ジョウ"], kun: ["ば"] },
    strokes: [
      { path: "M 10,15 L 10,92", start: [10, 15], end: [10, 92], direction: "top-bottom" },
      { path: "M 10,15 L 22,22", start: [10, 15], end: [22, 22], direction: "top-left-to-bottom-right" },
      { path: "M 10,50 L 22,50", start: [10, 50], end: [22, 50], direction: "left-right" },
      { path: "M 38,10 L 95,10", start: [38, 10], end: [95, 10], direction: "left-right" },
      { path: "M 38,10 L 38,38", start: [38, 10], end: [38, 38], direction: "top-bottom" },
      { path: "M 95,10 L 95,38", start: [95, 10], end: [95, 38], direction: "top-bottom" },
      { path: "M 55,10 L 55,38", start: [55, 10], end: [55, 38], direction: "top-bottom" },
      { path: "M 75,10 L 75,38", start: [75, 10], end: [75, 38], direction: "top-bottom" },
      { path: "M 38,38 L 95,38", start: [38, 38], end: [95, 38], direction: "left-right" },
      { path: "M 42,55 L 90,55", start: [42, 55], end: [90, 55], direction: "left-right" },
      { path: "M 65,55 L 65,80", start: [65, 55], end: [65, 80], direction: "top-bottom" },
      { path: "M 42,80 L 95,80", start: [42, 80], end: [95, 80], direction: "left-right" }
    ]
  },
"色": {
    readings: { on: ["ショク", "シキ"], kun: ["いろ"] },
    strokes: [
      { path: "M 35,12 C 35,12 45,18 30,30", start: [35, 12], end: [30, 30], direction: "top-right-to-bottom-left" },
      { path: "M 50,12 L 68,12 C 68,12 68,28 60,35", start: [50, 12], end: [60, 35], direction: "complex" },
      { path: "M 18,42 L 92,42", start: [18, 42], end: [92, 42], direction: "left-right" },
      { path: "M 30,42 L 30,72 C 30,85 25,92 18,97", start: [30, 42], end: [18, 97], direction: "complex" },
      { path: "M 42,55 C 42,55 60,52 70,60 C 70,60 75,68 55,75", start: [42, 55], end: [55, 75], direction: "curve-right" },
      { path: "M 55,75 C 55,80 65,88 80,82 C 88,78 90,68 82,58", start: [55, 75], end: [82, 58], direction: "complex" }
    ]
  },
  "食": {
    readings: { on: ["ショク", "ジキ"], kun: ["た.べる", "く.う"] },
    strokes: [
      { path: "M 52,8 L 20,35", start: [52, 8], end: [20, 35], direction: "top-right-to-bottom-left" },
      { path: "M 52,8 L 85,35", start: [52, 8], end: [85, 35], direction: "top-left-to-bottom-right" },
      { path: "M 18,42 L 90,42", start: [18, 42], end: [90, 42], direction: "left-right" },
      { path: "M 30,42 L 30,92 C 30,97 28,98 25,98", start: [30, 42], end: [25, 98], direction: "complex" },
      { path: "M 35,55 L 78,55", start: [35, 55], end: [78, 55], direction: "left-right" },
      { path: "M 35,68 L 78,68", start: [35, 68], end: [78, 68], direction: "left-right" },
      { path: "M 35,80 L 78,80", start: [35, 80], end: [78, 80], direction: "left-right" },
      { path: "M 78,42 L 78,80", start: [78, 42], end: [78, 80], direction: "top-bottom" },
      { path: "M 78,80 C 78,90 72,98 60,98", start: [78, 80], end: [60, 98], direction: "curve-left" }
    ]
  },
  "心": {
    readings: { on: ["シン"], kun: ["こころ"] },
    strokes: [
      { path: "M 18,65 C 18,65 20,80 28,80 C 32,80 32,72 30,68", start: [18, 65], end: [30, 68], direction: "curve-right" },
      { path: "M 42,30 C 42,30 40,60 38,75 C 38,82 42,88 48,80", start: [42, 30], end: [48, 80], direction: "complex" },
      { path: "M 68,45 L 70,58", start: [68, 45], end: [70, 58], direction: "top-bottom" },
      { path: "M 82,22 C 82,22 88,50 90,65 C 90,72 85,78 78,72", start: [82, 22], end: [78, 72], direction: "complex" }
    ]
  },
  "新": {
    readings: { on: ["シン"], kun: ["あたら.しい", "あら.た", "にい"] },
    strokes: [
      { path: "M 8,18 L 42,18", start: [8, 18], end: [42, 18], direction: "left-right" },
      { path: "M 25,18 L 25,40", start: [25, 18], end: [25, 40], direction: "top-bottom" },
      { path: "M 8,40 L 42,40", start: [8, 40], end: [42, 40], direction: "left-right" },
      { path: "M 15,52 L 38,52", start: [15, 52], end: [38, 52], direction: "left-right" },
      { path: "M 25,52 L 25,70", start: [25, 52], end: [25, 70], direction: "top-bottom" },
      { path: "M 25,70 L 8,92", start: [25, 70], end: [8, 92], direction: "top-right-to-bottom-left" },
      { path: "M 25,70 C 30,80 38,90 45,95", start: [25, 70], end: [45, 95], direction: "top-left-to-bottom-right" },
      { path: "M 58,12 L 95,12", start: [58, 12], end: [95, 12], direction: "left-right" },
      { path: "M 58,12 L 58,38", start: [58, 12], end: [58, 38], direction: "top-bottom" },
      { path: "M 58,38 L 68,28", start: [58, 38], end: [68, 28], direction: "complex" },
      { path: "M 72,18 L 72,55", start: [72, 18], end: [72, 55], direction: "top-bottom" },
      { path: "M 72,55 L 55,88", start: [72, 55], end: [55, 88], direction: "top-right-to-bottom-left" },
      { path: "M 72,55 C 78,70 88,85 98,92", start: [72, 55], end: [98, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "親": {
    readings: { on: ["シン"], kun: ["おや", "した.しい", "した.しむ"] },
    strokes: [
      { path: "M 8,18 L 38,18", start: [8, 18], end: [38, 18], direction: "left-right" },
      { path: "M 22,18 L 22,35", start: [22, 18], end: [22, 35], direction: "top-bottom" },
      { path: "M 8,35 L 38,35", start: [8, 35], end: [38, 35], direction: "left-right" },
      { path: "M 12,48 L 35,48", start: [12, 48], end: [35, 48], direction: "left-right" },
      { path: "M 22,48 L 22,65", start: [22, 48], end: [22, 65], direction: "top-bottom" },
      { path: "M 22,65 L 8,88", start: [22, 65], end: [8, 88], direction: "top-right-to-bottom-left" },
      { path: "M 22,65 C 28,78 35,88 42,95", start: [22, 65], end: [42, 95], direction: "top-left-to-bottom-right" },
      { path: "M 55,12 L 55,42", start: [55, 12], end: [55, 42], direction: "top-bottom" },
      { path: "M 52,22 L 95,22", start: [52, 22], end: [95, 22], direction: "left-right" },
      { path: "M 52,22 L 52,88", start: [52, 22], end: [52, 88], direction: "top-bottom" },
      { path: "M 95,22 L 95,88", start: [95, 22], end: [95, 88], direction: "top-bottom" },
      { path: "M 58,42 L 88,42", start: [58, 42], end: [88, 42], direction: "left-right" },
      { path: "M 58,58 L 88,58", start: [58, 58], end: [88, 58], direction: "left-right" },
      { path: "M 58,72 L 88,72", start: [58, 72], end: [88, 72], direction: "left-right" },
      { path: "M 72,42 L 72,72", start: [72, 42], end: [72, 72], direction: "top-bottom" },
      { path: "M 52,88 L 95,88", start: [52, 88], end: [95, 88], direction: "left-right" }
    ]
  },
  "図": {
    readings: { on: ["ズ", "ト"], kun: ["はか.る"] },
    strokes: [
      { path: "M 12,12 L 97,12", start: [12, 12], end: [97, 12], direction: "left-right" },
      { path: "M 12,12 L 12,97", start: [12, 12], end: [12, 97], direction: "top-bottom" },
      { path: "M 97,12 L 97,97", start: [97, 12], end: [97, 97], direction: "top-bottom" },
      { path: "M 35,32 L 40,48", start: [35, 32], end: [40, 48], direction: "top-left-to-bottom-right" },
      { path: "M 65,32 L 55,48", start: [65, 32], end: [55, 48], direction: "top-right-to-bottom-left" },
      { path: "M 25,62 L 82,62", start: [25, 62], end: [82, 62], direction: "left-right" },
      { path: "M 12,97 L 97,97", start: [12, 97], end: [97, 97], direction: "left-right" }
    ]
  },
  "数": {
    readings: { on: ["スウ", "ス"], kun: ["かず", "かぞ.える"] },
    strokes: [
      { path: "M 15,12 L 48,12", start: [15, 12], end: [48, 12], direction: "left-right" },
      { path: "M 30,12 L 30,32", start: [30, 12], end: [30, 32], direction: "top-bottom" },
      { path: "M 10,32 L 50,32", start: [10, 32], end: [50, 32], direction: "left-right" },
      { path: "M 22,42 L 10,55", start: [22, 42], end: [10, 55], direction: "top-right-to-bottom-left" },
      { path: "M 30,42 L 42,55", start: [30, 42], end: [42, 55], direction: "top-left-to-bottom-right" },
      { path: "M 12,62 L 48,62", start: [12, 62], end: [48, 62], direction: "left-right" },
      { path: "M 30,62 L 30,78", start: [30, 62], end: [30, 78], direction: "top-bottom" },
      { path: "M 30,78 L 12,95", start: [30, 78], end: [12, 95], direction: "top-right-to-bottom-left" },
      { path: "M 30,78 C 35,88 42,95 50,98", start: [30, 78], end: [50, 98], direction: "top-left-to-bottom-right" },
      { path: "M 68,12 L 68,50", start: [68, 12], end: [68, 50], direction: "top-bottom" },
      { path: "M 58,30 L 95,15", start: [58, 30], end: [95, 15], direction: "complex" },
      { path: "M 60,55 L 95,42", start: [60, 55], end: [95, 42], direction: "complex" },
      { path: "M 68,55 C 65,72 58,88 52,95", start: [68, 55], end: [52, 95], direction: "top-right-to-bottom-left" }
    ]
  },
  "西": {
    readings: { on: ["セイ", "サイ"], kun: ["にし"] },
    strokes: [
      { path: "M 15,15 L 95,15", start: [15, 15], end: [95, 15], direction: "left-right" },
      { path: "M 22,15 L 22,92", start: [22, 15], end: [22, 92], direction: "top-bottom" },
      { path: "M 88,15 L 88,92", start: [88, 15], end: [88, 92], direction: "top-bottom" },
      { path: "M 38,30 C 38,30 38,65 35,80", start: [38, 30], end: [35, 80], direction: "top-bottom" },
      { path: "M 72,30 C 72,30 72,65 75,80", start: [72, 30], end: [75, 80], direction: "top-bottom" },
      { path: "M 22,92 L 88,92", start: [22, 92], end: [88, 92], direction: "left-right" }
    ]
  },
  "声": {
    readings: { on: ["セイ", "ショウ"], kun: ["こえ"] },
    strokes: [
      { path: "M 15,12 L 55,12", start: [15, 12], end: [55, 12], direction: "left-right" },
      { path: "M 35,12 L 35,30", start: [35, 12], end: [35, 30], direction: "top-bottom" },
      { path: "M 15,30 L 95,30", start: [15, 30], end: [95, 30], direction: "left-right" },
      { path: "M 20,45 L 88,45", start: [20, 45], end: [88, 45], direction: "left-right" },
      { path: "M 25,45 L 25,85", start: [25, 45], end: [25, 85], direction: "top-bottom" },
      { path: "M 55,45 L 55,85", start: [55, 45], end: [55, 85], direction: "top-bottom" },
      { path: "M 25,85 L 92,85", start: [25, 85], end: [92, 85], direction: "left-right" }
    ]
  },
  "星": {
    readings: { on: ["セイ", "ショウ"], kun: ["ほし"] },
    strokes: [
      { path: "M 20,10 L 88,10", start: [20, 10], end: [88, 10], direction: "left-right" },
      { path: "M 28,10 L 28,38", start: [28, 10], end: [28, 38], direction: "top-bottom" },
      { path: "M 80,10 L 80,38", start: [80, 10], end: [80, 38], direction: "top-bottom" },
      { path: "M 28,38 L 80,38", start: [28, 38], end: [80, 38], direction: "left-right" },
      { path: "M 15,52 L 95,52", start: [15, 52], end: [95, 52], direction: "left-right" },
      { path: "M 25,52 L 25,72", start: [25, 52], end: [25, 72], direction: "top-bottom" },
      { path: "M 80,52 L 80,72", start: [80, 52], end: [80, 72], direction: "top-bottom" },
      { path: "M 25,72 L 80,72", start: [25, 72], end: [80, 72], direction: "left-right" },
      { path: "M 15,92 L 95,92", start: [15, 92], end: [95, 92], direction: "left-right" }
    ]
  },
  "晴": {
    readings: { on: ["セイ"], kun: ["は.れる", "は.れ"] },
    strokes: [
      { path: "M 10,18 L 38,18", start: [10, 18], end: [38, 18], direction: "left-right" },
      { path: "M 10,18 L 10,55", start: [10, 18], end: [10, 55], direction: "top-bottom" },
      { path: "M 38,18 L 38,55", start: [38, 18], end: [38, 55], direction: "top-bottom" },
      { path: "M 10,55 L 38,55", start: [10, 55], end: [38, 55], direction: "left-right" },
      { path: "M 50,10 L 50,30", start: [50, 10], end: [50, 30], direction: "top-bottom" },
      { path: "M 50,10 L 98,10", start: [50, 10], end: [98, 10], direction: "left-right" },
      { path: "M 75,10 L 75,30", start: [75, 10], end: [75, 30], direction: "top-bottom" },
      { path: "M 50,30 L 98,30", start: [50, 30], end: [98, 30], direction: "left-right" },
      { path: "M 50,45 L 98,45", start: [50, 45], end: [98, 45], direction: "left-right" },
      { path: "M 75,45 L 75,68", start: [75, 45], end: [75, 68], direction: "top-bottom" },
      { path: "M 50,68 L 98,68", start: [50, 68], end: [98, 68], direction: "left-right" },
      { path: "M 50,88 L 98,88", start: [50, 88], end: [98, 88], direction: "left-right" }
    ]
  },
  "切": {
    readings: { on: ["セツ", "サイ"], kun: ["き.る", "き.れる"] },
    strokes: [
      { path: "M 15,22 L 48,22", start: [15, 22], end: [48, 22], direction: "left-right" },
      { path: "M 30,22 C 30,50 25,75 15,92", start: [30, 22], end: [15, 92], direction: "complex" },
      { path: "M 65,15 L 65,85 C 65,92 60,97 55,97", start: [65, 15], end: [55, 97], direction: "complex" },
      { path: "M 92,15 L 92,95", start: [92, 15], end: [92, 95], direction: "top-bottom" }
    ]
  },
  "雪": {
    readings: { on: ["セツ"], kun: ["ゆき"] },
    strokes: [
      { path: "M 15,10 L 95,10", start: [15, 10], end: [95, 10], direction: "left-right" },
      { path: "M 22,10 L 22,48", start: [22, 10], end: [22, 48], direction: "top-bottom" },
      { path: "M 55,10 L 55,48 C 55,52 50,52 45,48", start: [55, 10], end: [45, 48], direction: "complex" },
      { path: "M 88,10 L 88,48", start: [88, 10], end: [88, 48], direction: "top-bottom" },
      { path: "M 22,48 L 88,48", start: [22, 48], end: [88, 48], direction: "left-right" },
      { path: "M 35,22 L 38,32", start: [35, 22], end: [38, 32], direction: "top-bottom" },
      { path: "M 68,22 L 72,32", start: [68, 22], end: [72, 32], direction: "top-bottom" },
      { path: "M 78,22 L 75,32", start: [78, 22], end: [75, 32], direction: "top-bottom" },
      { path: "M 25,62 L 85,62", start: [25, 62], end: [85, 62], direction: "left-right" },
      { path: "M 25,78 L 85,78", start: [25, 78], end: [85, 78], direction: "left-right" },
      { path: "M 55,62 L 55,95", start: [55, 62], end: [55, 95], direction: "top-bottom" }
    ]
  },
  "船": {
    readings: { on: ["セン"], kun: ["ふね", "ふな"] },
    strokes: [
      { path: "M 12,25 L 12,85", start: [12, 25], end: [12, 85], direction: "top-bottom" },
      { path: "M 12,25 L 42,25", start: [12, 25], end: [42, 25], direction: "left-right" },
      { path: "M 25,25 L 25,55", start: [25, 25], end: [25, 55], direction: "top-bottom" },
      { path: "M 42,25 L 42,55", start: [42, 25], end: [42, 55], direction: "top-bottom" },
      { path: "M 12,55 L 42,55", start: [12, 55], end: [42, 55], direction: "left-right" },
      { path: "M 12,85 L 48,85", start: [12, 85], end: [48, 85], direction: "left-right" },
      { path: "M 58,15 L 58,45", start: [58, 15], end: [58, 45], direction: "top-bottom" },
      { path: "M 55,30 L 95,30", start: [55, 30], end: [95, 30], direction: "left-right" },
      { path: "M 80,15 C 82,15 82,45 80,50", start: [80, 15], end: [80, 50], direction: "top-bottom" },
      { path: "M 55,60 L 95,60", start: [55, 60], end: [95, 60], direction: "left-right" },
      { path: "M 75,60 L 75,95", start: [75, 60], end: [75, 95], direction: "top-bottom" }
    ]
  },
  "線": {
    readings: { on: ["セン"], kun: ["すじ"] },
    strokes: [
      { path: "M 12,18 L 18,28", start: [12, 18], end: [18, 28], direction: "top-left-to-bottom-right" },
      { path: "M 22,15 L 16,25", start: [22, 15], end: [16, 25], direction: "top-right-to-bottom-left" },
      { path: "M 8,35 L 32,35", start: [8, 35], end: [32, 35], direction: "left-right" },
      { path: "M 5,48 L 15,42", start: [5, 48], end: [15, 42], direction: "complex" },
      { path: "M 18,42 L 28,48", start: [18, 42], end: [28, 48], direction: "top-left-to-bottom-right" },
      { path: "M 18,52 L 18,92", start: [18, 52], end: [18, 92], direction: "top-bottom" },
      { path: "M 42,12 L 95,12", start: [42, 12], end: [95, 12], direction: "left-right" },
      { path: "M 42,12 L 42,35", start: [42, 12], end: [42, 35], direction: "top-bottom" },
      { path: "M 95,12 L 95,35", start: [95, 12], end: [95, 35], direction: "top-bottom" },
      { path: "M 42,35 L 95,35", start: [42, 35], end: [95, 35], direction: "left-right" },
      { path: "M 50,48 L 88,48", start: [50, 48], end: [88, 48], direction: "left-right" },
      { path: "M 50,48 L 50,72", start: [50, 48], end: [50, 72], direction: "top-bottom" },
      { path: "M 88,48 L 88,72", start: [88, 48], end: [88, 72], direction: "top-bottom" },
      { path: "M 50,72 L 88,72", start: [50, 72], end: [88, 72], direction: "left-right" },
      { path: "M 68,72 L 68,95", start: [68, 72], end: [68, 95], direction: "top-bottom" }
    ]
  },
  "前": {
    readings: { on: ["ゼン"], kun: ["まえ"] },
    strokes: [
      { path: "M 22,10 L 28,22", start: [22, 10], end: [28, 22], direction: "top-left-to-bottom-right" },
      { path: "M 35,10 L 30,22", start: [35, 10], end: [30, 22], direction: "top-right-to-bottom-left" },
      { path: "M 10,32 L 98,32", start: [10, 32], end: [98, 32], direction: "left-right" },
      { path: "M 22,42 L 22,72", start: [22, 42], end: [22, 72], direction: "top-bottom" },
      { path: "M 22,42 L 48,42", start: [22, 42], end: [48, 42], direction: "left-right" },
      { path: "M 48,42 L 48,92", start: [48, 42], end: [48, 92], direction: "top-bottom" },
      { path: "M 60,42 L 60,82 C 60,92 55,95 50,95", start: [60, 42], end: [50, 95], direction: "complex" },
      { path: "M 60,42 L 90,42", start: [60, 42], end: [90, 42], direction: "left-right" },
      { path: "M 90,42 L 90,92", start: [90, 42], end: [90, 92], direction: "top-bottom" }
    ]
  },
  "組": {
    readings: { on: ["ソ"], kun: ["く.む", "くみ"] },
    strokes: [
      { path: "M 12,18 L 18,28", start: [12, 18], end: [18, 28], direction: "top-left-to-bottom-right" },
      { path: "M 22,15 L 16,25", start: [22, 15], end: [16, 25], direction: "top-right-to-bottom-left" },
      { path: "M 8,35 L 32,35", start: [8, 35], end: [32, 35], direction: "left-right" },
      { path: "M 5,48 L 15,42", start: [5, 48], end: [15, 42], direction: "complex" },
      { path: "M 18,42 L 28,48", start: [18, 42], end: [28, 48], direction: "top-left-to-bottom-right" },
      { path: "M 18,52 L 18,92", start: [18, 52], end: [18, 92], direction: "top-bottom" },
      { path: "M 50,15 L 50,92", start: [50, 15], end: [50, 92], direction: "top-bottom" },
      { path: "M 50,15 L 92,15", start: [50, 15], end: [92, 15], direction: "left-right" },
      { path: "M 50,42 L 92,42", start: [50, 42], end: [92, 42], direction: "left-right" },
      { path: "M 50,68 L 92,68", start: [50, 68], end: [92, 68], direction: "left-right" },
      { path: "M 50,92 L 92,92", start: [50, 92], end: [92, 92], direction: "left-right" }
    ]
  },
  "走": {
    readings: { on: ["ソウ"], kun: ["はし.る"] },
    strokes: [
      { path: "M 15,15 L 95,15", start: [15, 15], end: [95, 15], direction: "left-right" },
      { path: "M 55,15 L 55,48", start: [55, 15], end: [55, 48], direction: "top-bottom" },
      { path: "M 25,48 L 85,48", start: [25, 48], end: [85, 48], direction: "left-right" },
      { path: "M 55,48 L 55,72", start: [55, 48], end: [55, 72], direction: "top-bottom" },
      { path: "M 15,72 L 95,72", start: [15, 72], end: [95, 72], direction: "left-right" },
      { path: "M 55,72 L 20,98", start: [55, 72], end: [20, 98], direction: "top-right-to-bottom-left" },
      { path: "M 55,72 C 65,82 80,90 95,95", start: [55, 72], end: [95, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "多": {
    readings: { on: ["タ"], kun: ["おお.い"] },
    strokes: [
      { path: "M 35,8 L 20,38", start: [35, 8], end: [20, 38], direction: "top-right-to-bottom-left" },
      { path: "M 35,15 C 45,22 65,28 80,25", start: [35, 15], end: [80, 25], direction: "curve-right" },
      { path: "M 55,30 L 58,45", start: [55, 30], end: [58, 45], direction: "top-bottom" },
      { path: "M 40,52 L 22,82", start: [40, 52], end: [22, 82], direction: "top-right-to-bottom-left" },
      { path: "M 40,58 C 50,65 70,72 85,68", start: [40, 58], end: [85, 68], direction: "curve-right" },
      { path: "M 60,72 L 62,90", start: [60, 72], end: [62, 90], direction: "top-bottom" }
    ]
  },
  "太": {
    readings: { on: ["タイ", "タ"], kun: ["ふと.い", "ふと.る"] },
    strokes: [
      { path: "M 15,30 L 95,30", start: [15, 30], end: [95, 30], direction: "left-right" },
      { path: "M 55,10 L 55,95", start: [55, 10], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,55 L 12,95", start: [55, 55], end: [12, 95], direction: "top-right-to-bottom-left" },
      { path: "M 55,55 C 65,70 80,85 95,92", start: [55, 55], end: [95, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "体": {
    readings: { on: ["タイ", "テイ"], kun: ["からだ"] },
    strokes: [
      { path: "M 22,15 L 22,95", start: [22, 15], end: [22, 95], direction: "top-bottom" },
      { path: "M 22,22 L 10,42", start: [22, 22], end: [10, 42], direction: "top-right-to-bottom-left" },
      { path: "M 38,10 L 95,10", start: [38, 10], end: [95, 10], direction: "left-right" },
      { path: "M 65,10 L 65,48", start: [65, 10], end: [65, 48], direction: "top-bottom" },
      { path: "M 42,35 L 90,35", start: [42, 35], end: [90, 35], direction: "left-right" },
      { path: "M 65,48 L 38,90", start: [65, 48], end: [38, 90], direction: "top-right-to-bottom-left" },
      { path: "M 65,48 C 72,65 82,80 95,88", start: [65, 48], end: [95, 88], direction: "top-left-to-bottom-right" }
    ]
  },
  "台": {
    readings: { on: ["ダイ", "タイ"], kun: [] },
    strokes: [
      { path: "M 30,15 C 35,25 45,32 55,25", start: [30, 15], end: [55, 25], direction: "curve-right" },
      { path: "M 55,10 L 55,42", start: [55, 10], end: [55, 42], direction: "top-bottom" },
      { path: "M 20,52 L 88,52", start: [20, 52], end: [88, 52], direction: "left-right" },
      { path: "M 35,52 L 35,90 C 35,95 33,98 28,98", start: [35, 52], end: [28, 98], direction: "complex" },
      { path: "M 75,52 L 75,95", start: [75, 52], end: [75, 95], direction: "top-bottom" }
    ]
  },
  "地": {
    readings: { on: ["チ", "ジ"], kun: [] },
    strokes: [
      { path: "M 15,20 L 40,20", start: [15, 20], end: [40, 20], direction: "left-right" },
      { path: "M 28,10 L 28,95", start: [28, 10], end: [28, 95], direction: "top-bottom" },
      { path: "M 15,55 L 40,55", start: [15, 55], end: [40, 55], direction: "left-right" },
      { path: "M 55,18 L 55,65 C 55,72 52,78 48,82", start: [55, 18], end: [48, 82], direction: "complex" },
      { path: "M 55,42 L 92,30", start: [55, 42], end: [92, 30], direction: "complex" },
      { path: "M 72,42 C 78,58 85,75 92,92", start: [72, 42], end: [92, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "池": {
    readings: { on: ["チ"], kun: ["いけ"] },
    strokes: [
      { path: "M 12,22 L 12,32", start: [12, 22], end: [12, 32], direction: "top-bottom" },
      { path: "M 12,42 L 12,52", start: [12, 42], end: [12, 52], direction: "top-bottom" },
      { path: "M 12,62 L 12,72", start: [12, 62], end: [12, 72], direction: "top-bottom" },
      { path: "M 45,18 L 45,65 C 45,72 42,78 38,82", start: [45, 18], end: [38, 82], direction: "complex" },
      { path: "M 45,42 L 92,30", start: [45, 42], end: [92, 30], direction: "complex" },
      { path: "M 68,42 C 75,58 82,75 92,92", start: [68, 42], end: [92, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "知": {
    readings: { on: ["チ"], kun: ["し.る"] },
    strokes: [
      { path: "M 10,20 L 10,55", start: [10, 20], end: [10, 55], direction: "top-bottom" },
      { path: "M 10,20 L 38,20", start: [10, 20], end: [38, 20], direction: "left-right" },
      { path: "M 25,20 L 25,55", start: [25, 20], end: [25, 55], direction: "top-bottom" },
      { path: "M 10,55 L 45,55", start: [10, 55], end: [45, 55], direction: "left-right" },
      { path: "M 25,55 C 25,72 22,85 15,95", start: [25, 55], end: [15, 95], direction: "curve-left" },
      { path: "M 55,12 L 95,12", start: [55, 12], end: [95, 12], direction: "left-right" },
      { path: "M 75,12 L 75,90 C 75,95 72,98 68,98", start: [75, 12], end: [68, 98], direction: "complex" },
      { path: "M 55,45 L 95,45", start: [55, 45], end: [95, 45], direction: "left-right" }
    ]
  },
  "茶": {
    readings: { on: ["チャ", "サ"], kun: [] },
    strokes: [
      { path: "M 15,12 L 48,12", start: [15, 12], end: [48, 12], direction: "left-right" },
      { path: "M 60,12 L 95,12", start: [60, 12], end: [95, 12], direction: "left-right" },
      { path: "M 10,28 L 98,28", start: [10, 28], end: [98, 28], direction: "left-right" },
      { path: "M 55,28 L 25,48", start: [55, 28], end: [25, 48], direction: "top-right-to-bottom-left" },
      { path: "M 55,28 L 85,48", start: [55, 28], end: [85, 48], direction: "top-left-to-bottom-right" },
      { path: "M 35,52 L 75,52", start: [35, 52], end: [75, 52], direction: "left-right" },
      { path: "M 55,52 L 55,95", start: [55, 52], end: [55, 95], direction: "top-bottom" },
      { path: "M 55,72 C 45,82 30,90 15,95", start: [55, 72], end: [15, 95], direction: "curve-left" },
      { path: "M 55,72 C 65,82 80,90 95,95", start: [55, 72], end: [95, 95], direction: "curve-right" }
    ]
  },
  "昼": {
    readings: { on: ["チュウ"], kun: ["ひる"] },
    strokes: [
      { path: "M 28,10 L 80,10", start: [28, 10], end: [80, 10], direction: "left-right" },
      { path: "M 28,10 L 28,42", start: [28, 10], end: [28, 42], direction: "top-bottom" },
      { path: "M 80,10 L 80,42", start: [80, 10], end: [80, 42], direction: "top-bottom" },
      { path: "M 35,25 L 72,25", start: [35, 25], end: [72, 25], direction: "left-right" },
      { path: "M 28,42 L 80,42", start: [28, 42], end: [80, 42], direction: "left-right" },
      { path: "M 55,42 L 55,62", start: [55, 42], end: [55, 62], direction: "top-bottom" },
      { path: "M 22,62 L 88,62", start: [22, 62], end: [88, 62], direction: "left-right" },
      { path: "M 35,78 L 75,78", start: [35, 78], end: [75, 78], direction: "left-right" },
      { path: "M 15,95 L 95,95", start: [15, 95], end: [95, 95], direction: "left-right" }
    ]
  },
  "長": {
    readings: { on: ["チョウ"], kun: ["なが.い"] },
    strokes: [
      { path: "M 30,12 L 30,95", start: [30, 12], end: [30, 95], direction: "top-bottom" },
      { path: "M 30,12 L 90,12", start: [30, 12], end: [90, 12], direction: "left-right" },
      { path: "M 35,30 L 85,30", start: [35, 30], end: [85, 30], direction: "left-right" },
      { path: "M 35,48 L 85,48", start: [35, 48], end: [85, 48], direction: "left-right" },
      { path: "M 35,65 L 85,65", start: [35, 65], end: [85, 65], direction: "left-right" },
      { path: "M 85,12 L 85,65", start: [85, 12], end: [85, 65], direction: "top-bottom" },
      { path: "M 30,82 L 15,95", start: [30, 82], end: [15, 95], direction: "top-right-to-bottom-left" },
      { path: "M 30,82 C 45,92 65,95 90,88", start: [30, 82], end: [90, 88], direction: "curve-right" }
    ]
  },
  "鳥": {
    readings: { on: ["チョウ"], kun: ["とり"] },
    strokes: [
      { path: "M 22,12 L 55,12", start: [22, 12], end: [55, 12], direction: "left-right" },
      { path: "M 55,12 L 55,35", start: [55, 12], end: [55, 35], direction: "top-bottom" },
      { path: "M 40,22 L 40,28", start: [40, 22], end: [40, 28], direction: "top-bottom" },
      { path: "M 15,35 L 90,35", start: [15, 35], end: [90, 35], direction: "left-right" },
      { path: "M 22,35 L 22,78", start: [22, 35], end: [22, 78], direction: "top-bottom" },
      { path: "M 88,35 L 88,78", start: [88, 35], end: [88, 78], direction: "top-bottom" },
      { path: "M 28,50 L 82,50", start: [28, 50], end: [82, 50], direction: "left-right" },
      { path: "M 28,62 L 82,62", start: [28, 62], end: [82, 62], direction: "left-right" },
      { path: "M 55,50 L 55,62", start: [55, 50], end: [55, 62], direction: "top-bottom" },
      { path: "M 22,78 L 88,78", start: [22, 78], end: [88, 78], direction: "left-right" },
      { path: "M 15,95 L 95,95", start: [15, 95], end: [95, 95], direction: "left-right" }
    ]
  },
  "朝": {
    readings: { on: ["チョウ"], kun: ["あさ"] },
    strokes: [
      { path: "M 10,15 L 48,15", start: [10, 15], end: [48, 15], direction: "left-right" },
      { path: "M 10,15 L 10,52", start: [10, 15], end: [10, 52], direction: "top-bottom" },
      { path: "M 48,15 L 48,52", start: [48, 15], end: [48, 52], direction: "top-bottom" },
      { path: "M 15,32 L 42,32", start: [15, 32], end: [42, 32], direction: "left-right" },
      { path: "M 10,52 L 48,52", start: [10, 52], end: [48, 52], direction: "left-right" },
      { path: "M 28,52 L 28,72", start: [28, 52], end: [28, 72], direction: "top-bottom" },
      { path: "M 15,72 L 48,72", start: [15, 72], end: [48, 72], direction: "left-right" },
      { path: "M 28,72 L 28,95", start: [28, 72], end: [28, 95], direction: "top-bottom" },
      { path: "M 60,15 L 60,92 C 60,97 58,98 55,98", start: [60, 15], end: [55, 98], direction: "complex" },
      { path: "M 60,15 L 95,15", start: [60, 15], end: [95, 15], direction: "left-right" },
      { path: "M 65,42 L 92,42", start: [65, 42], end: [92, 42], direction: "left-right" },
      { path: "M 65,72 L 92,72", start: [65, 72], end: [92, 72], direction: "left-right" }
    ]
  },
  "直": {
    readings: { on: ["チョク", "ジキ"], kun: ["なお.す", "なお.る", "ただ.ちに"] },
    strokes: [
      { path: "M 15,12 L 95,12", start: [15, 12], end: [95, 12], direction: "left-right" },
      { path: "M 55,12 L 55,30", start: [55, 12], end: [55, 30], direction: "top-bottom" },
      { path: "M 22,30 L 88,30", start: [22, 30], end: [88, 30], direction: "left-right" },
      { path: "M 22,30 L 22,78", start: [22, 30], end: [22, 78], direction: "top-bottom" },
      { path: "M 88,30 L 88,78", start: [88, 30], end: [88, 78], direction: "top-bottom" },
      { path: "M 28,52 L 82,52", start: [28, 52], end: [82, 52], direction: "left-right" },
      { path: "M 22,78 L 88,78", start: [22, 78], end: [88, 78], direction: "left-right" },
      { path: "M 15,95 L 95,95", start: [15, 95], end: [95, 95], direction: "left-right" }
    ]
  },
  "通": {
    readings: { on: ["ツウ", "ツ"], kun: ["とお.る", "かよ.う"] },
    strokes: [
      { path: "M 38,12 L 38,38", start: [38, 12], end: [38, 38], direction: "top-bottom" },
      { path: "M 55,12 C 55,12 58,25 60,32", start: [55, 12], end: [60, 32], direction: "curve-right" },
      { path: "M 42,38 L 90,38", start: [42, 38], end: [90, 38], direction: "left-right" },
      { path: "M 50,38 L 50,70", start: [50, 38], end: [50, 70], direction: "top-bottom" },
      { path: "M 82,38 L 82,70", start: [82, 38], end: [82, 70], direction: "top-bottom" },
      { path: "M 55,52 L 78,52", start: [55, 52], end: [78, 52], direction: "left-right" },
      { path: "M 50,70 L 82,70", start: [50, 70], end: [82, 70], direction: "left-right" },
      { path: "M 12,30 L 28,22", start: [12, 30], end: [28, 22], direction: "complex" },
      { path: "M 12,30 L 12,72 L 28,62", start: [12, 30], end: [28, 62], direction: "complex" },
      { path: "M 8,88 C 30,82 60,85 95,78", start: [8, 88], end: [95, 78], direction: "curve-right" }
    ]
  },
  "弟": {
    readings: { on: ["テイ", "ダイ", "デ"], kun: ["おとうと"] },
    strokes: [
      { path: "M 30,10 L 80,10", start: [30, 10], end: [80, 10], direction: "left-right" },
      { path: "M 55,10 L 55,35", start: [55, 10], end: [55, 35], direction: "top-bottom" },
      { path: "M 25,35 L 88,35", start: [25, 35], end: [88, 35], direction: "left-right" },
      { path: "M 55,35 L 55,95", start: [55, 35], end: [55, 95], direction: "top-bottom" },
      { path: "M 35,50 C 35,50 30,68 22,78", start: [35, 50], end: [22, 78], direction: "curve-left" },
      { path: "M 55,62 L 88,55", start: [55, 62], end: [88, 55], direction: "complex" },
      { path: "M 55,82 C 62,88 72,92 85,88", start: [55, 82], end: [85, 88], direction: "curve-right" }
    ]
  },
  "店": {
    readings: { on: ["テン"], kun: ["みせ"] },
    strokes: [
      { path: "M 25,10 L 25,15", start: [25, 10], end: [25, 15], direction: "top-bottom" },
      { path: "M 15,22 L 95,22", start: [15, 22], end: [95, 22], direction: "left-right" },
      { path: "M 22,22 L 22,95", start: [22, 22], end: [22, 95], direction: "top-bottom" },
      { path: "M 22,22 C 22,22 50,30 80,22", start: [22, 22], end: [80, 22], direction: "curve-right" },
      { path: "M 38,42 L 85,42", start: [38, 42], end: [85, 42], direction: "left-right" },
      { path: "M 55,42 L 55,68", start: [55, 42], end: [55, 68], direction: "top-bottom" },
      { path: "M 38,68 L 85,68", start: [38, 68], end: [85, 68], direction: "left-right" },
      { path: "M 38,42 L 38,68", start: [38, 42], end: [38, 68], direction: "top-bottom" }
    ]
  },
  "点": {
    readings: { on: ["テン"], kun: ["つ.ける", "つ.く"] },
    strokes: [
      { path: "M 25,10 L 55,10", start: [25, 10], end: [55, 10], direction: "left-right" },
      { path: "M 55,10 L 55,38", start: [55, 10], end: [55, 38], direction: "top-bottom" },
      { path: "M 25,22 L 25,38", start: [25, 22], end: [25, 38], direction: "top-bottom" },
      { path: "M 20,38 L 90,38", start: [20, 38], end: [90, 38], direction: "left-right" },
      { path: "M 25,52 L 85,52", start: [25, 52], end: [85, 52], direction: "left-right" },
      { path: "M 55,38 L 55,68", start: [55, 38], end: [55, 68], direction: "top-bottom" },
      { path: "M 25,68 L 85,68", start: [25, 68], end: [85, 68], direction: "left-right" },
      { path: "M 30,80 L 35,92", start: [30, 80], end: [35, 92], direction: "top-left-to-bottom-right" },
      { path: "M 72,80 L 78,92", start: [72, 80], end: [78, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "電": {
    readings: { on: ["デン"], kun: [] },
    strokes: [
      { path: "M 15,10 L 95,10", start: [15, 10], end: [95, 10], direction: "left-right" },
      { path: "M 22,10 L 22,42", start: [22, 10], end: [22, 42], direction: "top-bottom" },
      { path: "M 55,10 L 55,42 C 55,48 50,48 48,42", start: [55, 10], end: [48, 42], direction: "complex" },
      { path: "M 88,10 L 88,42", start: [88, 10], end: [88, 42], direction: "top-bottom" },
      { path: "M 22,42 L 88,42", start: [22, 42], end: [88, 42], direction: "left-right" },
      { path: "M 35,18 L 38,28", start: [35, 18], end: [38, 28], direction: "top-bottom" },
      { path: "M 68,18 L 72,28", start: [68, 18], end: [72, 28], direction: "top-bottom" },
      { path: "M 78,18 L 75,28", start: [78, 18], end: [75, 28], direction: "top-bottom" },
      { path: "M 22,55 L 88,55", start: [22, 55], end: [88, 55], direction: "left-right" },
      { path: "M 22,55 L 22,82", start: [22, 55], end: [22, 82], direction: "top-bottom" },
      { path: "M 88,55 L 88,82", start: [88, 55], end: [88, 82], direction: "top-bottom" },
      { path: "M 22,82 L 88,82", start: [22, 82], end: [88, 82], direction: "left-right" },
      { path: "M 55,82 C 55,88 50,95 42,98 C 55,95 70,92 85,98", start: [55, 82], end: [85, 98], direction: "complex" }
    ]
  },
  "刀": {
    readings: { on: ["トウ"], kun: ["かたな"] },
    strokes: [
      { path: "M 55,15 L 55,80 C 55,90 50,95 42,95", start: [55, 15], end: [42, 95], direction: "complex" },
      { path: "M 88,10 L 88,95", start: [88, 10], end: [88, 95], direction: "top-bottom" }
    ]
  },
  "冬": {
    readings: { on: ["トウ"], kun: ["ふゆ"] },
    strokes: [
      { path: "M 55,8 L 20,42", start: [55, 8], end: [20, 42], direction: "top-right-to-bottom-left" },
      { path: "M 55,8 L 90,42", start: [55, 8], end: [90, 42], direction: "top-left-to-bottom-right" },
      { path: "M 55,42 L 15,78", start: [55, 42], end: [15, 78], direction: "top-right-to-bottom-left" },
      { path: "M 38,78 L 42,90", start: [38, 78], end: [42, 90], direction: "top-left-to-bottom-right" },
      { path: "M 68,72 L 72,85", start: [68, 72], end: [72, 85], direction: "top-left-to-bottom-right" }
    ]
  },
  "当": {
    readings: { on: ["トウ"], kun: ["あ.たる", "あ.てる"] },
    strokes: [
      { path: "M 30,10 L 35,22", start: [30, 10], end: [35, 22], direction: "top-left-to-bottom-right" },
      { path: "M 55,8 L 55,22", start: [55, 8], end: [55, 22], direction: "top-bottom" },
      { path: "M 78,10 L 72,22", start: [78, 10], end: [72, 22], direction: "top-right-to-bottom-left" },
      { path: "M 25,38 L 85,38", start: [25, 38], end: [85, 38], direction: "left-right" },
      { path: "M 25,58 L 85,58", start: [25, 58], end: [85, 58], direction: "left-right" },
      { path: "M 55,38 L 55,95", start: [55, 38], end: [55, 95], direction: "top-bottom" }
    ]
  },
  "東": {
    readings: { on: ["トウ"], kun: ["ひがし"] },
    strokes: [
      { path: "M 15,18 L 95,18", start: [15, 18], end: [95, 18], direction: "left-right" },
      { path: "M 55,8 L 55,95", start: [55, 8], end: [55, 95], direction: "top-bottom" },
      { path: "M 22,18 L 22,62", start: [22, 18], end: [22, 62], direction: "top-bottom" },
      { path: "M 88,18 L 88,62", start: [88, 18], end: [88, 62], direction: "top-bottom" },
      { path: "M 28,40 L 82,40", start: [28, 40], end: [82, 40], direction: "left-right" },
      { path: "M 22,62 L 88,62", start: [22, 62], end: [88, 62], direction: "left-right" },
      { path: "M 55,62 L 18,95", start: [55, 62], end: [18, 95], direction: "top-right-to-bottom-left" },
      { path: "M 55,62 C 65,75 80,88 95,92", start: [55, 62], end: [95, 92], direction: "top-left-to-bottom-right" }
    ]
  },
"答": {
    readings: { on: ["トウ"], kun: ["こた.える", "こた.え"] },
    strokes: [
      // bamboo radical top-left
      { path: "M 28,7 L 38,22", start: [28, 7], end: [38, 22], direction: "top-bottom" },
      { path: "M 38,12 L 28,26", start: [38, 12], end: [28, 26], direction: "top-right-to-bottom-left" },
      // bamboo radical top-right
      { path: "M 62,7 L 72,22", start: [62, 7], end: [72, 22], direction: "top-bottom" },
      { path: "M 72,12 L 62,26", start: [72, 12], end: [62, 26], direction: "top-right-to-bottom-left" },
      // mouth box (口) top
      { path: "M 30,33 L 78,33", start: [30, 33], end: [78, 33], direction: "left-right" },
      // mouth box left
      { path: "M 30,33 L 30,52", start: [30, 33], end: [30, 52], direction: "top-bottom" },
      // mouth box right + bottom turn
      { path: "M 78,33 L 78,52 L 30,52", start: [78, 33], end: [30, 52], direction: "complex" },
      // 合 top stroke (人 part)
      { path: "M 54,55 L 30,72", start: [54, 55], end: [30, 72], direction: "top-right-to-bottom-left" },
      { path: "M 54,55 L 78,72", start: [54, 55], end: [78, 72], direction: "top-left-to-bottom-right" },
      // 合 horizontal
      { path: "M 25,76 L 83,76", start: [25, 76], end: [83, 76], direction: "left-right" },
      // 口 bottom box top
      { path: "M 36,82 L 72,82", start: [36, 82], end: [72, 82], direction: "left-right" },
      // 口 bottom box left+bottom
      { path: "M 36,82 L 36,100 L 72,100", start: [36, 82], end: [72, 100], direction: "complex" },
      // 口 bottom box right
      { path: "M 72,82 L 72,100", start: [72, 82], end: [72, 100], direction: "top-bottom" }
    ]
  },
  "頭": {
    readings: { on: ["トウ", "ズ", "ト"], kun: ["あたま", "かしら"] },
    strokes: [
      // 豆 left part - top horizontal
      { path: "M 8,14 L 42,14", start: [8, 14], end: [42, 14], direction: "left-right" },
      // short vertical from top horizontal
      { path: "M 25,14 L 25,28", start: [25, 14], end: [25, 28], direction: "top-bottom" },
      // second horizontal
      { path: "M 10,28 L 42,28", start: [10, 28], end: [42, 28], direction: "left-right" },
      // 口 top
      { path: "M 12,36 L 38,36", start: [12, 36], end: [38, 36], direction: "left-right" },
      // 口 left+bottom
      { path: "M 12,36 L 12,52 L 38,52", start: [12, 36], end: [38, 52], direction: "complex" },
      // 口 right
      { path: "M 38,36 L 38,52", start: [38, 36], end: [38, 52], direction: "top-bottom" },
      // bottom-left leg
      { path: "M 15,52 L 6,68", start: [15, 52], end: [6, 68], direction: "top-right-to-bottom-left" },
      // bottom middle
      { path: "M 25,52 L 25,68", start: [25, 52], end: [25, 68], direction: "top-bottom" },
      // bottom-right leg
      { path: "M 35,52 L 46,68", start: [35, 52], end: [46, 68], direction: "top-left-to-bottom-right" },
      // 頁 right side - top horizontal
      { path: "M 55,14 L 100,14", start: [55, 14], end: [100, 14], direction: "left-right" },
      // center vertical through 頁
      { path: "M 77,14 L 77,52", start: [77, 14], end: [77, 52], direction: "top-bottom" },
      // 目 top
      { path: "M 58,28 L 96,28", start: [58, 28], end: [96, 28], direction: "left-right" },
      // 目 left
      { path: "M 58,28 L 58,62", start: [58, 28], end: [58, 62], direction: "top-bottom" },
      // 目 mid1
      { path: "M 58,40 L 96,40", start: [58, 40], end: [96, 40], direction: "left-right" },
      // 目 mid2
      { path: "M 58,52 L 96,52", start: [58, 52], end: [96, 52], direction: "left-right" },
      // 目 right+bottom
      { path: "M 96,28 L 96,62 L 58,62", start: [96, 28], end: [58, 62], direction: "complex" },
      // left leg of 八
      { path: "M 70,66 L 55,82", start: [70, 66], end: [55, 82], direction: "top-right-to-bottom-left" },
      // right leg of 八
      { path: "M 82,66 L 100,82", start: [82, 66], end: [100, 82], direction: "top-left-to-bottom-right" }
    ]
  },
  "同": {
    readings: { on: ["ドウ"], kun: ["おな.じ"] },
    strokes: [
      // top horizontal
      { path: "M 14,13 L 95,13", start: [14, 13], end: [95, 13], direction: "left-right" },
      // left vertical (enclosure)
      { path: "M 14,13 L 14,97", start: [14, 13], end: [14, 97], direction: "top-bottom" },
      // bottom horizontal
      { path: "M 14,97 L 95,97", start: [14, 97], end: [95, 97], direction: "left-right" },
      // right vertical (enclosure)
      { path: "M 95,13 L 95,97", start: [95, 13], end: [95, 97], direction: "top-bottom" },
      // inner top short stroke
      { path: "M 43,30 L 43,42", start: [43, 30], end: [43, 42], direction: "top-bottom" },
      // 口 top
      { path: "M 33,48 L 75,48", start: [33, 48], end: [75, 48], direction: "left-right" },
      // 口 left+bottom
      { path: "M 33,48 L 33,76 L 75,76", start: [33, 48], end: [75, 76], direction: "complex" },
      // 口 right
      { path: "M 75,48 L 75,76", start: [75, 48], end: [75, 76], direction: "top-bottom" }
    ]
  },
  "道": {
    readings: { on: ["ドウ", "トウ"], kun: ["みち"] },
    strokes: [
      // しんにょう dot
      { path: "M 18,18 L 22,24", start: [18, 18], end: [22, 24], direction: "top-bottom" },
      // しんにょう first curve
      { path: "M 10,42 C 15,42 28,50 20,60", start: [10, 42], end: [20, 60], direction: "complex" },
      // 首 top - first dot left
      { path: "M 50,10 L 46,18", start: [50, 10], end: [46, 18], direction: "top-right-to-bottom-left" },
      // 首 top - second dot right
      { path: "M 60,10 L 64,18", start: [60, 10], end: [64, 18], direction: "top-left-to-bottom-right" },
      // 首 horizontal 1
      { path: "M 38,24 L 90,24", start: [38, 24], end: [90, 24], direction: "left-right" },
      // 首 horizontal 2
      { path: "M 38,36 L 90,36", start: [38, 36], end: [90, 36], direction: "left-right" },
      // 首 horizontal 3
      { path: "M 38,48 L 90,48", start: [38, 48], end: [90, 48], direction: "left-right" },
      // 目 left
      { path: "M 38,48 L 38,82", start: [38, 48], end: [38, 82], direction: "top-bottom" },
      // 目 horizontal mid1
      { path: "M 38,60 L 88,60", start: [38, 60], end: [88, 60], direction: "left-right" },
      // 目 horizontal mid2
      { path: "M 38,72 L 88,72", start: [38, 72], end: [88, 72], direction: "left-right" },
      // 目 right+bottom
      { path: "M 88,48 L 88,82 L 38,82", start: [88, 48], end: [38, 82], direction: "complex" },
      // しんにょう bottom sweep
      { path: "M 8,80 C 30,80 60,90 100,80", start: [8, 80], end: [100, 80], direction: "complex" }
    ]
  },
  "読": {
    readings: { on: ["ドク", "トク", "トウ"], kun: ["よ.む"] },
    strokes: [
      // 言 top dot
      { path: "M 14,10 L 22,10", start: [14, 10], end: [22, 10], direction: "left-right" },
      // 言 horizontal 1
      { path: "M 5,22 L 40,22", start: [5, 22], end: [40, 22], direction: "left-right" },
      // 言 horizontal 2
      { path: "M 5,34 L 40,34", start: [5, 34], end: [40, 34], direction: "left-right" },
      // 言 horizontal 3
      { path: "M 5,46 L 40,46", start: [5, 46], end: [40, 46], direction: "left-right" },
      // 口1 top
      { path: "M 8,56 L 36,56", start: [8, 56], end: [36, 56], direction: "left-right" },
      // 口1 left+bottom
      { path: "M 8,56 L 8,72 L 36,72", start: [8, 56], end: [36, 72], direction: "complex" },
      // 口1 right
      { path: "M 36,56 L 36,72", start: [36, 56], end: [36, 72], direction: "top-bottom" },
      // 売 right side - top 士
      { path: "M 50,14 L 100,14", start: [50, 14], end: [100, 14], direction: "left-right" },
      // 士 vertical
      { path: "M 75,14 L 75,30", start: [75, 14], end: [75, 30], direction: "top-bottom" },
      // 四 top
      { path: "M 50,36 L 100,36", start: [50, 36], end: [100, 36], direction: "left-right" },
      // 四 left
      { path: "M 50,36 L 50,64", start: [50, 36], end: [50, 64], direction: "top-bottom" },
      // 四 inner left vertical
      { path: "M 64,38 L 62,58", start: [64, 38], end: [62, 58], direction: "top-bottom" },
      // 四 inner right vertical curve
      { path: "M 82,38 C 82,50 84,58 78,62", start: [82, 38], end: [78, 62], direction: "complex" },
      // 四 right+bottom
      { path: "M 100,36 L 100,64 L 50,64", start: [100, 36], end: [50, 64], direction: "complex" },
      // 八 left
      { path: "M 68,68 L 50,90", start: [68, 68], end: [50, 90], direction: "top-right-to-bottom-left" },
      // 八 right
      { path: "M 78,68 L 100,90", start: [78, 68], end: [100, 90], direction: "top-left-to-bottom-right" }
    ]
  },
  "内": {
    readings: { on: ["ナイ", "ダイ"], kun: ["うち"] },
    strokes: [
      // left short stroke
      { path: "M 20,12 L 12,30", start: [20, 12], end: [12, 30], direction: "top-right-to-bottom-left" },
      // enclosure top + right
      { path: "M 24,12 L 95,12 L 95,95", start: [24, 12], end: [95, 95], direction: "complex" },
      // inner left stroke (人 left)
      { path: "M 52,28 L 30,80", start: [52, 28], end: [30, 80], direction: "top-right-to-bottom-left" },
      // inner right stroke (人 right)
      { path: "M 55,28 L 78,80", start: [55, 28], end: [78, 80], direction: "top-left-to-bottom-right" }
    ]
  },
  "南": {
    readings: { on: ["ナン", "ナ"], kun: ["みなみ"] },
    strokes: [
      // top horizontal
      { path: "M 10,12 L 98,12", start: [10, 12], end: [98, 12], direction: "left-right" },
      // center vertical from top
      { path: "M 54,12 L 54,98", start: [54, 12], end: [54, 98], direction: "top-bottom" },
      // enclosure top
      { path: "M 18,28 L 90,28", start: [18, 28], end: [90, 28], direction: "left-right" },
      // enclosure left
      { path: "M 18,28 L 18,94", start: [18, 28], end: [18, 94], direction: "top-bottom" },
      // enclosure right
      { path: "M 90,28 L 90,94", start: [90, 28], end: [90, 94], direction: "top-bottom" },
      // inner top horizontal
      { path: "M 30,44 L 78,44", start: [30, 44], end: [78, 44], direction: "left-right" },
      // inner 干 left vertical curve
      { path: "M 38,44 C 38,56 32,68 26,78", start: [38, 44], end: [26, 78], direction: "complex" },
      // inner 干 right vertical curve
      { path: "M 70,44 C 70,56 76,68 82,78", start: [70, 44], end: [82, 78], direction: "complex" },
      // inner bottom horizontal
      { path: "M 30,68 L 78,68", start: [30, 68], end: [78, 68], direction: "left-right" }
    ]
  },
  "肉": {
    readings: { on: ["ニク"], kun: [] },
    strokes: [
      // outer enclosure top + left
      { path: "M 82,8 L 18,8 L 18,100", start: [82, 8], end: [18, 100], direction: "complex" },
      // outer right + bottom
      { path: "M 82,8 L 82,100 L 18,100", start: [82, 8], end: [18, 100], direction: "complex" },
      // inner 人 left stroke top
      { path: "M 50,24 L 32,52", start: [50, 24], end: [32, 52], direction: "top-right-to-bottom-left" },
      // inner 人 right stroke top
      { path: "M 50,24 L 68,52", start: [50, 24], end: [68, 52], direction: "top-left-to-bottom-right" },
      // inner 人 left stroke bottom
      { path: "M 50,56 L 32,84", start: [50, 56], end: [32, 84], direction: "top-right-to-bottom-left" },
      // inner 人 right stroke bottom
      { path: "M 50,56 L 68,84", start: [50, 56], end: [68, 84], direction: "top-left-to-bottom-right" }
    ]
  },
  "馬": {
    readings: { on: ["バ"], kun: ["うま", "ま"] },
    strokes: [
      // top horizontal
      { path: "M 18,10 L 90,10", start: [18, 10], end: [90, 10], direction: "left-right" },
      // left vertical
      { path: "M 18,10 L 18,70", start: [18, 10], end: [18, 70], direction: "top-bottom" },
      // horizontal 2
      { path: "M 18,26 L 80,26", start: [18, 26], end: [80, 26], direction: "left-right" },
      // horizontal 3
      { path: "M 18,42 L 80,42", start: [18, 42], end: [80, 42], direction: "left-right" },
      // horizontal 4
      { path: "M 18,58 L 80,58", start: [18, 58], end: [80, 58], direction: "left-right" },
      // right vertical + bottom turn
      { path: "M 80,10 L 80,70 L 18,70", start: [80, 10], end: [18, 70], direction: "complex" },
      // bottom horizontal
      { path: "M 10,82 L 98,82", start: [10, 82], end: [98, 82], direction: "left-right" },
      // bottom four dots - dot 1
      { path: "M 18,88 L 22,98", start: [18, 88], end: [22, 98], direction: "top-bottom" },
      // dot 2
      { path: "M 38,88 L 42,98", start: [38, 88], end: [42, 98], direction: "top-bottom" },
      // dot 3
      { path: "M 58,88 L 62,98", start: [58, 88], end: [62, 98], direction: "top-bottom" },
      // dot 4
      { path: "M 78,88 L 82,98", start: [78, 88], end: [82, 98], direction: "top-bottom" }
    ]
  },
  "売": {
    readings: { on: ["バイ"], kun: ["う.る", "う.れる"] },
    strokes: [
      // 士 top horizontal
      { path: "M 20,10 L 88,10", start: [20, 10], end: [88, 10], direction: "left-right" },
      // 士 vertical
      { path: "M 54,10 L 54,28", start: [54, 10], end: [54, 28], direction: "top-bottom" },
      // 士 bottom horizontal
      { path: "M 28,28 L 80,28", start: [28, 28], end: [80, 28], direction: "left-right" },
      // 冖 top
      { path: "M 14,42 L 94,42", start: [14, 42], end: [94, 42], direction: "left-right" },
      // 冖 left
      { path: "M 14,42 L 14,56", start: [14, 42], end: [14, 56], direction: "top-bottom" },
      // 冖 right
      { path: "M 94,42 L 94,56", start: [94, 42], end: [94, 56], direction: "top-bottom" },
      // inner horizontal
      { path: "M 24,58 L 84,58", start: [24, 58], end: [84, 58], direction: "left-right" },
      // 儿 left
      { path: "M 40,62 L 24,90", start: [40, 62], end: [24, 90], direction: "top-right-to-bottom-left" },
      // 儿 right
      { path: "M 68,62 C 68,76 78,86 90,90", start: [68, 62], end: [90, 90], direction: "complex" }
    ]
  },
  "買": {
    readings: { on: ["バイ"], kun: ["か.う"] },
    strokes: [
      // 目 top horizontal
      { path: "M 28,8 L 80,8", start: [28, 8], end: [80, 8], direction: "left-right" },
      // 目 left
      { path: "M 28,8 L 28,50", start: [28, 8], end: [28, 50], direction: "top-bottom" },
      // 目 horizontal mid1
      { path: "M 28,22 L 80,22", start: [28, 22], end: [80, 22], direction: "left-right" },
      // 目 horizontal mid2
      { path: "M 28,36 L 80,36", start: [28, 36], end: [80, 36], direction: "left-right" },
      // 目 right+bottom
      { path: "M 80,8 L 80,50 L 28,50", start: [80, 8], end: [28, 50], direction: "complex" },
      // 貝 enclosure top
      { path: "M 18,56 L 90,56", start: [18, 56], end: [90, 56], direction: "left-right" },
      // 貝 left
      { path: "M 18,56 L 18,86", start: [18, 56], end: [18, 86], direction: "top-bottom" },
      // 貝 horizontal mid
      { path: "M 18,70 L 90,70", start: [18, 70], end: [90, 70], direction: "left-right" },
      // 貝 right+bottom
      { path: "M 90,56 L 90,86 L 18,86", start: [90, 56], end: [18, 86], direction: "complex" },
      // 八 left
      { path: "M 42,88 L 22,102", start: [42, 88], end: [22, 102], direction: "top-right-to-bottom-left" },
      // 八 right
      { path: "M 66,88 L 86,102", start: [66, 88], end: [86, 102], direction: "top-left-to-bottom-right" }
    ]
  },
  "麦": {
    readings: { on: ["バク"], kun: ["むぎ"] },
    strokes: [
      // top horizontal
      { path: "M 10,14 L 98,14", start: [10, 14], end: [98, 14], direction: "left-right" },
      // second horizontal
      { path: "M 20,30 L 88,30", start: [20, 30], end: [88, 30], direction: "left-right" },
      // vertical
      { path: "M 54,14 L 54,68", start: [54, 14], end: [54, 68], direction: "top-bottom" },
      // left short stroke
      { path: "M 34,42 L 26,55", start: [34, 42], end: [26, 55], direction: "top-right-to-bottom-left" },
      // right short stroke
      { path: "M 74,42 L 82,55", start: [74, 42], end: [82, 55], direction: "top-left-to-bottom-right" },
      // bottom horizontal
      { path: "M 16,68 L 92,68", start: [16, 68], end: [92, 68], direction: "left-right" },
      // 夂 left stroke
      { path: "M 54,68 L 18,100", start: [54, 68], end: [18, 100], direction: "top-right-to-bottom-left" },
      // 夂 right stroke
      { path: "M 54,68 L 94,100", start: [54, 68], end: [94, 100], direction: "top-left-to-bottom-right" }
    ]
  },
  "半": {
    readings: { on: ["ハン"], kun: ["なか.ば"] },
    strokes: [
      // left dot
      { path: "M 28,16 L 22,30", start: [28, 16], end: [22, 30], direction: "top-right-to-bottom-left" },
      // right dot
      { path: "M 78,16 L 84,30", start: [78, 16], end: [84, 30], direction: "top-left-to-bottom-right" },
      // top horizontal
      { path: "M 14,40 L 94,40", start: [14, 40], end: [94, 40], direction: "left-right" },
      // bottom horizontal
      { path: "M 14,62 L 94,62", start: [14, 62], end: [94, 62], direction: "left-right" },
      // center vertical
      { path: "M 54,18 L 54,98", start: [54, 18], end: [54, 98], direction: "top-bottom" }
    ]
  },
  "番": {
    readings: { on: ["バン"], kun: ["つが.い"] },
    strokes: [
      // 釆 left-falling stroke
      { path: "M 54,6 L 18,40", start: [54, 6], end: [18, 40], direction: "top-right-to-bottom-left" },
      // 釆 right-falling stroke
      { path: "M 54,6 L 90,40", start: [54, 6], end: [90, 40], direction: "top-left-to-bottom-right" },
      // 釆 horizontal 1
      { path: "M 20,18 L 88,18", start: [20, 18], end: [88, 18], direction: "left-right" },
      // vertical through
      { path: "M 54,6 L 54,48", start: [54, 6], end: [54, 48], direction: "top-bottom" },
      // 釆 horizontal 2
      { path: "M 26,32 L 82,32", start: [26, 32], end: [82, 32], direction: "left-right" },
      // 田 top
      { path: "M 18,52 L 90,52", start: [18, 52], end: [90, 52], direction: "left-right" },
      // 田 left
      { path: "M 18,52 L 18,96", start: [18, 52], end: [18, 96], direction: "top-bottom" },
      // 田 middle horizontal
      { path: "M 18,74 L 90,74", start: [18, 74], end: [90, 74], direction: "left-right" },
      // 田 middle vertical
      { path: "M 54,52 L 54,96", start: [54, 52], end: [54, 96], direction: "top-bottom" },
      // 田 right+bottom
      { path: "M 90,52 L 90,96 L 18,96", start: [90, 52], end: [18, 96], direction: "complex" }
    ]
  },
  "父": {
    readings: { on: ["フ"], kun: ["ちち"] },
    strokes: [
      // top left dot
      { path: "M 30,14 L 42,26", start: [30, 14], end: [42, 26], direction: "top-left-to-bottom-right" },
      // top right dot
      { path: "M 78,14 L 66,26", start: [78, 14], end: [66, 26], direction: "top-right-to-bottom-left" },
      // left falling stroke (ノ)
      { path: "M 54,30 L 14,95", start: [54, 30], end: [14, 95], direction: "top-right-to-bottom-left" },
      // right falling stroke
      { path: "M 54,30 L 94,95", start: [54, 30], end: [94, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "風": {
    readings: { on: ["フウ", "フ"], kun: ["かぜ", "かざ"] },
    strokes: [
      // enclosure top
      { path: "M 10,12 L 90,12", start: [10, 12], end: [90, 12], direction: "left-right" },
      // enclosure left
      { path: "M 10,12 L 10,88 C 10,95 18,100 28,95", start: [10, 12], end: [28, 95], direction: "complex" },
      // inner first horizontal
      { path: "M 26,30 L 78,30", start: [26, 30], end: [78, 30], direction: "left-right" },
      // inner left of 虫
      { path: "M 36,30 L 36,60", start: [36, 30], end: [36, 60], direction: "top-bottom" },
      // inner horizontal middle
      { path: "M 36,48 L 72,48", start: [36, 48], end: [72, 48], direction: "left-right" },
      // inner right+bottom
      { path: "M 72,30 L 72,60 L 36,60", start: [72, 30], end: [36, 60], direction: "complex" },
      // 虫 dot
      { path: "M 52,62 L 56,72", start: [52, 62], end: [56, 72], direction: "top-bottom" },
      // enclosure right slanting
      { path: "M 90,12 L 80,88 C 78,96 84,100 94,96", start: [90, 12], end: [94, 96], direction: "complex" },
      // ノ inside bottom
      { path: "M 58,72 L 34,90", start: [58, 72], end: [34, 90], direction: "top-right-to-bottom-left" }
    ]
  },
  "分": {
    readings: { on: ["ブン", "フン", "ブ"], kun: ["わ.ける", "わ.かれる", "わ.かる", "わ.かつ"] },
    strokes: [
      // top left dot (八 left)
      { path: "M 48,10 L 18,38", start: [48, 10], end: [18, 38], direction: "top-right-to-bottom-left" },
      // top right dot (八 right)
      { path: "M 56,10 L 90,38", start: [56, 10], end: [90, 38], direction: "top-left-to-bottom-right" },
      // 刀 left ノ
      { path: "M 66,42 L 22,96", start: [66, 42], end: [22, 96], direction: "top-right-to-bottom-left" },
      // 刀 top + right
      { path: "M 36,50 L 82,50 L 82,96", start: [36, 50], end: [82, 96], direction: "complex" }
    ]
  },
  "聞": {
    readings: { on: ["ブン", "モン"], kun: ["き.く", "き.こえる"] },
    strokes: [
      // 門 left side - top
      { path: "M 10,8 L 10,98", start: [10, 8], end: [10, 98], direction: "top-bottom" },
      // 門 left side - top horizontal
      { path: "M 10,8 L 34,8", start: [10, 8], end: [34, 8], direction: "left-right" },
      // 門 left inner strokes
      { path: "M 20,20 L 20,62", start: [20, 20], end: [20, 62], direction: "top-bottom" },
      { path: "M 20,20 L 34,20 L 34,62", start: [20, 20], end: [34, 62], direction: "complex" },
      // 門 right side - top
      { path: "M 46,8 L 98,8", start: [46, 8], end: [98, 8], direction: "left-right" },
      // 門 right side - vertical
      { path: "M 98,8 L 98,98", start: [98, 8], end: [98, 98], direction: "top-bottom" },
      // 門 right inner strokes
      { path: "M 56,20 L 56,62", start: [56, 20], end: [56, 62], direction: "top-bottom" },
      { path: "M 56,20 L 88,20 L 88,62", start: [56, 20], end: [88, 62], direction: "complex" },
      // 耳 inside - top horizontal
      { path: "M 40,38 L 68,38", start: [40, 38], end: [68, 38], direction: "left-right" },
      // 耳 left vertical
      { path: "M 40,38 L 40,90", start: [40, 38], end: [40, 90], direction: "top-bottom" },
      // 耳 mid horizontal 1
      { path: "M 40,52 L 68,52", start: [40, 52], end: [68, 52], direction: "left-right" },
      // 耳 mid horizontal 2
      { path: "M 40,66 L 68,66", start: [40, 66], end: [68, 66], direction: "left-right" },
      // 耳 right vertical
      { path: "M 68,38 L 68,78", start: [68, 38], end: [68, 78], direction: "top-bottom" },
      // 耳 bottom horizontal
      { path: "M 34,80 L 78,80", start: [34, 80], end: [78, 80], direction: "left-right" }
    ]
  },
  "米": {
    readings: { on: ["ベイ", "マイ"], kun: ["こめ"] },
    strokes: [
      // left dot
      { path: "M 30,20 L 20,36", start: [30, 20], end: [20, 36], direction: "top-right-to-bottom-left" },
      // right dot
      { path: "M 78,20 L 88,36", start: [78, 20], end: [88, 36], direction: "top-left-to-bottom-right" },
      // horizontal
      { path: "M 8,54 L 100,54", start: [8, 54], end: [100, 54], direction: "left-right" },
      // center vertical
      { path: "M 54,10 L 54,100", start: [54, 10], end: [54, 100], direction: "top-bottom" },
      // bottom-left falling stroke
      { path: "M 54,54 L 12,95", start: [54, 54], end: [12, 95], direction: "top-right-to-bottom-left" },
      // bottom-right falling stroke
      { path: "M 54,54 L 96,95", start: [54, 54], end: [96, 95], direction: "top-left-to-bottom-right" }
    ]
  },
  "歩": {
    readings: { on: ["ホ", "ブ", "フ"], kun: ["ある.く", "あゆ.む"] },
    strokes: [
      // 止 top - top horizontal
      { path: "M 20,10 L 88,10", start: [20, 10], end: [88, 10], direction: "left-right" },
      // 止 left vertical
      { path: "M 28,10 L 28,48", start: [28, 10], end: [28, 48], direction: "top-bottom" },
      // 止 middle horizontal
      { path: "M 28,30 L 72,30", start: [28, 30], end: [72, 30], direction: "left-right" },
      // 止 right short vertical
      { path: "M 72,10 L 72,30", start: [72, 10], end: [72, 30], direction: "top-bottom" },
      // 止 bottom horizontal
      { path: "M 12,48 L 96,48", start: [12, 48], end: [96, 48], direction: "left-right" },
      // 少 left short slash
      { path: "M 36,56 L 20,72", start: [36, 56], end: [20, 72], direction: "top-right-to-bottom-left" },
      // 少 right short dot
      { path: "M 72,56 L 86,68", start: [72, 56], end: [86, 68], direction: "top-left-to-bottom-right" },
      // center vertical
      { path: "M 54,52 L 54,98", start: [54, 52], end: [54, 98], direction: "top-bottom" }
    ]
  },
  "母": {
    readings: { on: ["ボ"], kun: ["はは"] },
    strokes: [
      // enclosure left curve
      { path: "M 54,6 C 20,6 10,30 10,54 C 10,78 20,100 54,100", start: [54, 6], end: [54, 100], direction: "complex" },
      // enclosure right curve
      { path: "M 54,6 C 88,6 98,30 98,54 C 98,78 88,100 54,100", start: [54, 6], end: [54, 100], direction: "complex" },
      // horizontal through middle
      { path: "M 16,40 L 92,40", start: [16, 40], end: [92, 40], direction: "left-right" },
      // vertical center
      { path: "M 54,6 L 54,100", start: [54, 6], end: [54, 100], direction: "top-bottom" },
      // dot left
      { path: "M 34,58 L 30,70", start: [34, 58], end: [30, 70], direction: "top-right-to-bottom-left" },
      // horizontal lower
      { path: "M 16,72 L 92,72", start: [16, 72], end: [92, 72], direction: "left-right" },
      // dot right
      { path: "M 72,58 L 78,70", start: [72, 58], end: [78, 70], direction: "top-left-to-bottom-right" }
    ]
  },
  "方": {
    readings: { on: ["ホウ"], kun: ["かた"] },
    strokes: [
      // top dot
      { path: "M 42,10 L 54,10", start: [42, 10], end: [54, 10], direction: "left-right" },
      // horizontal
      { path: "M 10,30 L 98,30", start: [10, 30], end: [98, 30], direction: "left-right" },
      // left falling stroke
      { path: "M 54,30 L 10,98", start: [54, 30], end: [10, 98], direction: "top-right-to-bottom-left" },
      // top of hook + right + hook down
      { path: "M 40,44 L 82,44 L 82,94", start: [40, 44], end: [82, 94], direction: "complex" }
    ]
  },
  "北": {
    readings: { on: ["ホク"], kun: ["きた"] },
    strokes: [
      // left part - vertical
      { path: "M 28,10 L 28,96", start: [28, 10], end: [28, 96], direction: "top-bottom" },
      // left part - horizontal right
      { path: "M 28,48 L 50,48", start: [28, 48], end: [50, 48], direction: "left-right" },
      // left part - falling stroke
      { path: "M 28,48 L 8,82", start: [28, 48], end: [8, 82], direction: "top-right-to-bottom-left" },
      // right part - vertical
      { path: "M 60,16 L 60,68", start: [60, 16], end: [60, 68], direction: "top-bottom" },
      // right part - falling stroke right
      { path: "M 60,42 L 98,96", start: [60, 42], end: [98, 96], direction: "top-left-to-bottom-right" }
    ]
  },
  "毎": {
    readings: { on: ["マイ"], kun: ["ごと"] },
    strokes: [
      // top ノ stroke
      { path: "M 60,6 L 28,28", start: [60, 6], end: [28, 28], direction: "top-right-to-bottom-left" },
      // horizontal 1
      { path: "M 10,28 L 98,28", start: [10, 28], end: [98, 28], direction: "left-right" },
      // center vertical
      { path: "M 54,28 L 54,52", start: [54, 28], end: [54, 52], direction: "top-bottom" },
      // 母-like enclosure top (left curve)
      { path: "M 54,40 C 28,40 18,54 18,68 C 18,82 28,96 54,96", start: [54, 40], end: [54, 96], direction: "complex" },
      // 母-like enclosure right curve
      { path: "M 54,40 C 80,40 90,54 90,68 C 90,82 80,96 54,96", start: [54, 40], end: [54, 96], direction: "complex" },
      // inner horizontal
      { path: "M 24,62 L 84,62", start: [24, 62], end: [84, 62], direction: "left-right" },
      // dot left
      { path: "M 40,72 L 36,82", start: [40, 72], end: [36, 82], direction: "top-right-to-bottom-left" },
      // inner horizontal lower
      { path: "M 24,82 L 84,82", start: [24, 82], end: [84, 82], direction: "left-right" },
      // dot right
      { path: "M 68,72 L 74,82", start: [68, 72], end: [74, 82], direction: "top-left-to-bottom-right" }
    ]
  },
  "妹": {
    readings: { on: ["マイ"], kun: ["いもうと"] },
    strokes: [
      // 女 left part - first stroke ノ
      { path: "M 28,16 L 8,68", start: [28, 16], end: [8, 68], direction: "top-right-to-bottom-left" },
      // 女 left part - 乀 stroke
      { path: "M 6,38 L 42,60", start: [6, 38], end: [42, 60], direction: "top-left-to-bottom-right" },
      // 女 left part - horizontal
      { path: "M 4,74 L 42,74", start: [4, 74], end: [42, 74], direction: "left-right" },
      // 未 right part - top horizontal
      { path: "M 48,18 L 98,18", start: [48, 18], end: [98, 18], direction: "left-right" },
      // 未 second horizontal
      { path: "M 50,38 L 100,38", start: [50, 38], end: [100, 38], direction: "left-right" },
      // 未 vertical
      { path: "M 72,8 L 72,98", start: [72, 8], end: [72, 98], direction: "top-bottom" },
      // 未 left falling
      { path: "M 72,42 L 48,90", start: [72, 42], end: [48, 90], direction: "top-right-to-bottom-left" },
      // 未 right falling
      { path: "M 72,42 L 100,90", start: [72, 42], end: [100, 90], direction: "top-left-to-bottom-right" }
    ]
  },
  "万": {
    readings: { on: ["マン", "バン"], kun: [] },
    strokes: [
      // top horizontal
      { path: "M 10,16 L 98,16", start: [10, 16], end: [98, 16], direction: "left-right" },
      // left falling stroke ノ
      { path: "M 64,16 L 10,96", start: [64, 16], end: [10, 96], direction: "top-right-to-bottom-left" },
      // right side turning stroke
      { path: "M 38,40 L 84,40 L 84,92", start: [38, 40], end: [84, 92], direction: "complex" }
    ]
  },
  "明": {
    readings: { on: ["メイ", "ミョウ"], kun: ["あ.かり", "あか.るい", "あ.ける"] },
    strokes: [
      // 日 left part - top
      { path: "M 6,22 L 44,22", start: [6, 22], end: [44, 22], direction: "left-right" },
      // 日 left
      { path: "M 6,22 L 6,80", start: [6, 22], end: [6, 80], direction: "top-bottom" },
      // 日 middle horizontal
      { path: "M 6,50 L 44,50", start: [6, 50], end: [44, 50], direction: "left-right" },
      // 日 right + bottom
      { path: "M 44,22 L 44,80 L 6,80", start: [44, 22], end: [6, 80], direction: "complex" },
      // 月 right part - top + left
      { path: "M 82,10 L 58,10 L 58,98", start: [82, 10], end: [58, 98], direction: "complex" },
      // 月 right
      { path: "M 82,10 L 82,82", start: [82, 10], end: [82, 82], direction: "top-bottom" },
      // 月 horizontal 1
      { path: "M 58,40 L 82,40", start: [58, 40], end: [82, 40], direction: "left-right" },
      // 月 horizontal 2
      { path: "M 58,62 L 82,62", start: [58, 62], end: [82, 62], direction: "left-right" }
    ]
  },
  "鳴": {
    readings: { on: ["メイ"], kun: ["な.く", "な.る", "な.らす"] },
    strokes: [
      // 口 left part - top
      { path: "M 4,22 L 34,22", start: [4, 22], end: [34, 22], direction: "left-right" },
      // 口 left
      { path: "M 4,22 L 4,48", start: [4, 22], end: [4, 48], direction: "top-bottom" },
      // 口 right + bottom
      { path: "M 34,22 L 34,48 L 4,48", start: [34, 22], end: [4, 48], direction: "complex" },
      // 鳥 right part - top ノ
      { path: "M 66,6 L 56,20", start: [66, 6], end: [56, 20], direction: "top-right-to-bottom-left" },
      // 鳥 top horizontal
      { path: "M 44,24 L 100,24", start: [44, 24], end: [100, 24], direction: "left-right" },
      // 鳥 enclosure left
      { path: "M 50,24 L 50,62", start: [50, 24], end: [50, 62], direction: "top-bottom" },
      // 鳥 horizontal 2
      { path: "M 50,38 L 92,38", start: [50, 38], end: [92, 38], direction: "left-right" },
      // 鳥 horizontal 3
      { path: "M 50,50 L 92,50", start: [50, 50], end: [92, 50], direction: "left-right" },
      // 鳥 right + bottom
      { path: "M 92,24 L 92,62 L 50,62", start: [92, 24], end: [50, 62], direction: "complex" },
      // 灬 dot 1
      { path: "M 42,68 L 38,80", start: [42, 68], end: [38, 80], direction: "top-right-to-bottom-left" },
      // 鳥 dot inside
      { path: "M 72,28 L 74,34", start: [72, 28], end: [74, 34], direction: "top-bottom" },
      // bottom horizontal
      { path: "M 36,76 L 98,76", start: [36, 76], end: [98, 76], direction: "left-right" },
      // 灬 dot 2
      { path: "M 52,80 L 48,92", start: [52, 80], end: [48, 92], direction: "top-right-to-bottom-left" },
      // 灬 dot 3
      { path: "M 66,80 L 70,92", start: [66, 80], end: [70, 92], direction: "top-left-to-bottom-right" },
      // 灬 dot 4
      { path: "M 82,80 L 92,92", start: [82, 80], end: [92, 92], direction: "top-left-to-bottom-right" }
    ]
  },
  "毛": {
    readings: { on: ["モウ"], kun: ["け"] },
    strokes: [
      // top horizontal
      { path: "M 18,18 L 80,18", start: [18, 18], end: [80, 18], direction: "left-right" },
      // second horizontal
      { path: "M 18,40 L 80,40", start: [18, 40], end: [80, 40], direction: "left-right" },
      // third horizontal
      { path: "M 18,62 L 90,62", start: [18, 62], end: [90, 62], direction: "left-right" },
      // vertical + bottom curve
      { path: "M 54,18 L 54,78 C 54,92 64,98 90,92", start: [54, 18], end: [90, 92], direction: "complex" }
    ]
  },
  "門": {
    readings: { on: ["モン"], kun: ["かど"] },
    strokes: [
      // left side - vertical
      { path: "M 10,8 L 10,98", start: [10, 8], end: [10, 98], direction: "top-bottom" },
      // left side - top horizontal
      { path: "M 10,8 L 36,8", start: [10, 8], end: [36, 8], direction: "left-right" },
      // left inner vertical
      { path: "M 22,22 L 22,72", start: [22, 22], end: [22, 72], direction: "top-bottom" },
      // left inner - horizontal + right vertical
      { path: "M 22,22 L 36,22 L 36,72", start: [22, 22], end: [36, 72], direction: "complex" },
      // right side - top horizontal
      { path: "M 48,8 L 98,8", start: [48, 8], end: [98, 8], direction: "left-right" },
      // right side - vertical
      { path: "M 98,8 L 98,98", start: [98, 8], end: [98, 98], direction: "top-bottom" },
      // right inner vertical
      { path: "M 60,22 L 60,72", start: [60, 22], end: [60, 72], direction: "top-bottom" },
      // right inner - horizontal + right vertical
      { path: "M 60,22 L 88,22 L 88,72", start: [60, 22], end: [88, 72], direction: "complex" }
    ]
  },
  "夜": {
    readings: { on: ["ヤ"], kun: ["よ", "よる"] },
    strokes: [
      // top dot
      { path: "M 42,8 L 48,18", start: [42, 8], end: [48, 18], direction: "top-bottom" },
      // main horizontal
      { path: "M 8,24 L 96,24", start: [8, 24], end: [96, 24], direction: "left-right" },
      // main vertical
      { path: "M 48,24 L 48,96", start: [48, 24], end: [48, 96], direction: "top-bottom" },
      // inner top left ノ
      { path: "M 48,38 L 22,60", start: [48, 38], end: [22, 60], direction: "top-right-to-bottom-left" },
      // inner horizontal
      { path: "M 50,46 L 82,46", start: [50, 46], end: [82, 46], direction: "left-right" },
      // right side: 乀 with extension
      { path: "M 62,46 L 54,64", start: [62, 46], end: [54, 64], direction: "top-right-to-bottom-left" },
      // inner ノ right
      { path: "M 62,46 L 76,72", start: [62, 46], end: [76, 72], direction: "top-left-to-bottom-right" },
      // bottom left long stroke
      { path: "M 48,62 L 8,96", start: [48, 62], end: [8, 96], direction: "top-right-to-bottom-left" },
      // bottom right falling
      { path: "M 68,68 L 98,96", start: [68, 68], end: [98, 96], direction: "top-left-to-bottom-right" }
    ]
  },
  "野": {
    readings: { on: ["ヤ"], kun: ["の"] },
    strokes: [
      // 里 left part - top horizontal
      { path: "M 6,14 L 48,14", start: [6, 14], end: [48, 14], direction: "left-right" },
      // 里 left vertical
      { path: "M 6,14 L 6,56", start: [6, 14], end: [6, 56], direction: "top-bottom" },
      // 里 horizontal 2
      { path: "M 6,30 L 48,30", start: [6, 30], end: [48, 30], direction: "left-right" },
      // 里 horizontal 3
      { path: "M 6,46 L 48,46", start: [6, 46], end: [48, 46], direction: "left-right" },
      // 里 center vertical
      { path: "M 27,14 L 27,80", start: [27, 14], end: [27, 80], direction: "top-bottom" },
      // 里 right + bottom
      { path: "M 48,14 L 48,56 L 6,56", start: [48, 14], end: [6, 56], direction: "complex" },
      // 里 bottom horizontal 1
      { path: "M 6,68 L 48,68", start: [6, 68], end: [48, 68], direction: "left-right" },
      // 里 bottom horizontal 2
      { path: "M 6,80 L 48,80", start: [6, 80], end: [48, 80], direction: "left-right" },
      // 予 right part - top horizontal
      { path: "M 56,20 L 100,20", start: [56, 20], end: [100, 20], direction: "left-right" },
      // 予 ノ
      { path: "M 88,20 L 58,52", start: [88, 20], end: [58, 52], direction: "top-right-to-bottom-left" },
      // 予 horizontal + hook
      { path: "M 56,48 L 92,48 L 92,96", start: [56, 48], end: [92, 96], direction: "complex" }
    ]
  },
  "友": {
    readings: { on: ["ユウ"], kun: ["とも"] },
    strokes: [
      // top left ノ
      { path: "M 44,10 L 20,38", start: [44, 10], end: [20, 38], direction: "top-right-to-bottom-left" },
      // horizontal
      { path: "M 16,30 L 94,30", start: [16, 30], end: [94, 30], direction: "left-right" },
      // left falling 乀
      { path: "M 48,30 L 10,96", start: [48, 30], end: [10, 96], direction: "top-right-to-bottom-left" },
      // right falling stroke
      { path: "M 48,30 C 58,52 78,78 96,92", start: [48, 30], end: [96, 92], direction: "complex" }
    ]
  },
  "用": {
    readings: { on: ["ヨウ"], kun: ["もち.いる"] },
    strokes: [
      // center vertical (extends up and down through whole character)
      { path: "M 54,6 L 54,100", start: [54, 6], end: [54, 100], direction: "top-bottom" },
      // enclosure top
      { path: "M 14,22 L 92,22", start: [14, 22], end: [92, 22], direction: "left-right" },
      // enclosure left
      { path: "M 14,22 L 14,90", start: [14, 22], end: [14, 90], direction: "top-bottom" },
      // horizontal middle
      { path: "M 14,54 L 92,54", start: [14, 54], end: [92, 54], direction: "left-right" },
      // right + bottom
      { path: "M 92,22 L 92,90 L 14,90", start: [92, 22], end: [14, 90], direction: "complex" }
    ]
  },
  "曜": {
    readings: { on: ["ヨウ"], kun: [] },
    strokes: [
      // 日 left part - top
      { path: "M 4,18 L 32,18", start: [4, 18], end: [32, 18], direction: "left-right" },
      // 日 left
      { path: "M 4,18 L 4,60", start: [4, 18], end: [4, 60], direction: "top-bottom" },
      // 日 middle horizontal
      { path: "M 4,38 L 32,38", start: [4, 38], end: [32, 38], direction: "left-right" },
      // 日 right + bottom
      { path: "M 32,18 L 32,60 L 4,60", start: [32, 18], end: [4, 60], direction: "complex" },
      // right side 隹 - ヨ top horizontal
      { path: "M 48,8 L 78,8", start: [48, 8], end: [78, 8], direction: "left-right" },
      // ヨ left short
      { path: "M 50,8 L 50,32", start: [50, 8], end: [50, 32], direction: "top-bottom" },
      // ヨ middle horizontal
      { path: "M 50,20 L 78,20", start: [50, 20], end: [78, 20], direction: "left-right" },
      // ヨ right + bottom
      { path: "M 78,8 L 78,32 L 50,32", start: [78, 8], end: [50, 32], direction: "complex" },
      // 隹 center vertical
      { path: "M 68,32 L 68,52", start: [68, 32], end: [68, 52], direction: "top-bottom" },
      // 隹 left ノ
      { path: "M 68,38 L 44,52", start: [68, 38], end: [44, 52], direction: "top-right-to-bottom-left" },
      // 隹 right dot
      { path: "M 68,38 L 98,52", start: [68, 38], end: [98, 52], direction: "top-left-to-bottom-right" },
      // bottom 隹 legs - left ノ
      { path: "M 56,56 L 38,76", start: [56, 56], end: [38, 76], direction: "top-right-to-bottom-left" },
      // bottom center vertical
      { path: "M 68,56 L 68,100", start: [68, 56], end: [68, 100], direction: "top-bottom" },
      // bottom right falling
      { path: "M 56,68 L 38,90", start: [56, 68], end: [38, 90], direction: "top-right-to-bottom-left" },
      // right short leg
      { path: "M 80,56 L 100,76", start: [80, 56], end: [100, 76], direction: "top-left-to-bottom-right" },
      // horizontal near bottom
      { path: "M 40,82 L 98,82", start: [40, 82], end: [98, 82], direction: "left-right" },
      // right bottom leg
      { path: "M 80,68 L 100,90", start: [80, 68], end: [100, 90], direction: "top-left-to-bottom-right" },
      // bottom spread horizontal
      { path: "M 40,98 L 98,98", start: [40, 98], end: [98, 98], direction: "left-right" }
    ]
  },
  "来": {
    readings: { on: ["ライ"], kun: ["く.る", "きた.る", "きた.す"] },
    strokes: [
      // top horizontal (short)
      { path: "M 28,12 L 80,12", start: [28, 12], end: [80, 12], direction: "left-right" },
      // left dot going down-left
      { path: "M 38,26 L 14,48", start: [38, 26], end: [14, 48], direction: "top-right-to-bottom-left" },
      // right dot going down-right
      { path: "M 70,26 L 94,48", start: [70, 26], end: [94, 48], direction: "top-left-to-bottom-right" },
      // second horizontal (wide)
      { path: "M 8,52 L 100,52", start: [8, 52], end: [100, 52], direction: "left-right" },
      // center vertical
      { path: "M 54,12 L 54,100", start: [54, 12], end: [54, 100], direction: "top-bottom" },
      // bottom-left falling stroke (木)
      { path: "M 54,56 L 12,96", start: [54, 56], end: [12, 96], direction: "top-right-to-bottom-left" },
      // bottom-right falling stroke (木)
      { path: "M 54,56 L 96,96", start: [54, 56], end: [96, 96], direction: "top-left-to-bottom-right" }
    ]
  },
  "里": {
    readings: { on: ["リ"], kun: ["さと"] },
    strokes: [
      // 田 top horizontal
      { path: "M 14,10 L 94,10", start: [14, 10], end: [94, 10], direction: "left-right" },
      // 田 left
      { path: "M 14,10 L 14,56", start: [14, 10], end: [14, 56], direction: "top-bottom" },
      // 田 horizontal mid
      { path: "M 14,33 L 94,33", start: [14, 33], end: [94, 33], direction: "left-right" },
      // 田 center vertical
      { path: "M 54,10 L 54,86", start: [54, 10], end: [54, 86], direction: "top-bottom" },
      // 田 right + bottom
      { path: "M 94,10 L 94,56 L 14,56", start: [94, 10], end: [14, 56], direction: "complex" },
      // 土 horizontal 1
      { path: "M 14,70 L 94,70", start: [14, 70], end: [94, 70], direction: "left-right" },
      // 土 bottom horizontal
      { path: "M 8,86 L 100,86", start: [8, 86], end: [100, 86], direction: "left-right" }
    ]
  },
  "理": {
    readings: { on: ["リ"], kun: ["ことわり"] },
    strokes: [
      // 王 left part - top horizontal
      { path: "M 6,18 L 42,18", start: [6, 18], end: [42, 18], direction: "left-right" },
      // 王 left vertical
      { path: "M 6,18 L 6,52", start: [6, 18], end: [6, 52], direction: "top-bottom" },
      // 王 horizontal mid
      { path: "M 6,35 L 42,35", start: [6, 35], end: [42, 35], direction: "left-right" },
      // 王 center vertical
      { path: "M 24,18 L 24,80", start: [24, 18], end: [24, 80], direction: "top-bottom" },
      // 王 right + bottom
      { path: "M 42,18 L 42,52 L 6,52", start: [42, 18], end: [6, 52], direction: "complex" },
      // 王 bottom horizontal 1
      { path: "M 6,66 L 42,66", start: [6, 66], end: [42, 66], direction: "left-right" },
      // 王 bottom horizontal 2
      { path: "M 6,80 L 42,80", start: [6, 80], end: [42, 80], direction: "left-right" },
      // 里 right part - top horizontal
      { path: "M 52,14 L 100,14", start: [52, 14], end: [100, 14], direction: "left-right" },
      // center vertical right
      { path: "M 76,14 L 76,50", start: [76, 14], end: [76, 50], direction: "top-bottom" },
      // horizontal 2
      { path: "M 52,34 L 100,34", start: [52, 34], end: [100, 34], direction: "left-right" },
      // horizontal 3
      { path: "M 52,50 L 100,50", start: [52, 50], end: [100, 50], direction: "left-right" },
      // 土 bottom - vertical
      { path: "M 76,56 L 76,96", start: [76, 56], end: [76, 96], direction: "top-bottom" },
      // 土 short horizontal
      { path: "M 56,72 L 96,72", start: [56, 72], end: [96, 72], direction: "left-right" },
      // 土 bottom horizontal
      { path: "M 50,92 L 102,92", start: [50, 92], end: [102, 92], direction: "left-right" }
    ]
  },
  "話": {
    readings: { on: ["ワ"], kun: ["はな.す", "はなし"] },
    strokes: [
      // 言 top dot
      { path: "M 14,10 L 22,10", start: [14, 10], end: [22, 10], direction: "left-right" },
      // 言 horizontal 1
      { path: "M 5,24 L 40,24", start: [5, 24], end: [40, 24], direction: "left-right" },
      // 言 horizontal 2
      { path: "M 5,36 L 40,36", start: [5, 36], end: [40, 36], direction: "left-right" },
      // 言 horizontal 3
      { path: "M 5,48 L 40,48", start: [5, 48], end: [40, 48], direction: "left-right" },
      // 口 top
      { path: "M 8,58 L 36,58", start: [8, 58], end: [36, 58], direction: "left-right" },
      // 口 left + bottom
      { path: "M 8,58 L 8,78 L 36,78", start: [8, 58], end: [36, 78], direction: "complex" },
      // 口 right
      { path: "M 36,58 L 36,78", start: [36, 58], end: [36, 78], direction: "top-bottom" },
      // 舌 right part - top 千 horizontal
      { path: "M 48,14 L 100,14", start: [48, 14], end: [100, 14], direction: "left-right" },
      // 千 left falling
      { path: "M 68,14 L 52,34", start: [68, 14], end: [52, 34], direction: "top-right-to-bottom-left" },
      // 千 vertical
      { path: "M 76,6 L 76,42", start: [76, 6], end: [76, 42], direction: "top-bottom" },
      // 口 bottom - top
      { path: "M 50,46 L 98,46", start: [50, 46], end: [98, 46], direction: "left-right" },
      // 口 left
      { path: "M 50,46 L 50,84", start: [50, 46], end: [50, 84], direction: "top-bottom" },
      // 口 right + bottom
      { path: "M 98,46 L 98,84 L 50,84", start: [98, 46], end: [50, 84], direction: "complex" }
    ]
  }
};
