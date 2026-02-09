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
