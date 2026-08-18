// 本地內建資料——沒有設定 Sheet CSV 網址時，App 會用這份資料跑。
// 之後在 config.js 填入 Google Sheet 發布連結後，App 會改讀 Sheet，這份資料只當離線備援。
const R2_BASE = "https://pub-6a9b34c4dddd40fdaaaddd5635e28628.r2.dev";

const LOCAL_WORKOUT_ROWS = [
  { day: 1, dayName: "胸", order: 0, slot: "warmup", name: "肩膀彈力帶熱身", target: "心肺/熱身", sets: "1", reps: "1-3分鐘", rest: 0, video: `${R2_BASE}/Grace/Day%201/0%20%E7%86%B1%E8%BA%AB%20%E8%82%A9%E8%86%80%E5%BD%88%E5%8A%9B%E5%B8%B6%E7%86%B1%E8%BA%AB.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 1, slot: "main", name: "跪姿伏地挺身", target: "胸大肌整體", sets: 3, reps: "12-15", rest: 45, video: `${R2_BASE}/Grace/Day%201/1%20%E4%B8%BB%E7%B7%B4%20%E8%B7%AA%E5%A7%BF%E4%BC%8F%E5%9C%B0%E6%8C%BA%E8%BA%AB.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 2, slot: "main", name: "6kg壺鈴地板臥推", target: "中胸", sets: 3, reps: "10-12", rest: 45, video: `${R2_BASE}/Grace/Day%201/2%20%E4%B8%BB%E7%B7%B4%20%E5%A3%BA%E9%88%B4%E5%9C%B0%E6%9D%BF%E8%87%A5%E6%8E%A8.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 3, slot: "main", name: "彈力帶站姿胸推", target: "中胸/穩定度", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%201/3%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E7%AB%99%E5%A7%BF%E8%83%B8%E6%8E%A8.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 4, slot: "main", name: "1.5kg啞鈴地板飛鳥", target: "上胸內側", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%201/4%20%E4%B8%BB%E7%B7%B4%20%E5%95%9E%E9%88%B4%E5%9C%B0%E6%9D%BF%E9%A3%9B%E9%B3%A5.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 5, slot: "main", name: "瑜伽磚夾胸靜態擠壓", target: "胸大肌內側收縮", sets: 3, reps: "15次(每次撐2秒)", rest: 30, video: `${R2_BASE}/Grace/Day%201/5%20%E4%B8%BB%E7%B7%B4%20%E7%91%9C%E4%BC%BD%E7%A3%9A%E5%A4%BE%E8%83%B8%E9%9D%9C%E6%85%8B%E6%93%A0%E5%A3%93.mp4`, notes: "" },
  { day: 1, dayName: "胸", order: 6, slot: "core", name: "棒式", target: "核心", sets: 3, reps: "30-45秒", rest: 30, video: `${R2_BASE}/Grace/Day%201/6%20%E6%94%B6%E5%B0%BE%20%E6%A3%92%E5%BC%8F.mp4`, notes: "" },

  { day: 2, dayName: "背", order: 0, slot: "warmup", name: "動態伸展熱身", target: "心肺/熱身", sets: "1", reps: "約10分鐘", rest: 0, video: `${R2_BASE}/Grace/Day%202/0%20%E7%86%B1%E8%BA%AB%20%E5%8B%95%E6%85%8B%E4%BC%B8%E5%B1%95.mp4`, notes: "" },
  { day: 2, dayName: "背", order: 1, slot: "main", name: "彈力帶單臂划船", target: "背部收縮", sets: 3, reps: "12-15(每邊)", rest: 45, video: `${R2_BASE}/Grace/Day%202/1%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E5%96%AE%E8%87%82%E5%88%92%E8%88%B9.mp4`, notes: "" },
  { day: 2, dayName: "背", order: 2, slot: "main", name: "彈力帶直臂下拉", target: "背闊肌", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%202/2%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E7%9B%B4%E8%87%82%E4%B8%8B%E6%8B%89.mp4`, notes: "" },
  { day: 2, dayName: "背", order: 3, slot: "main", name: "6kg壺鈴俯身划船", target: "背厚", sets: 3, reps: "10-12", rest: 45, video: `${R2_BASE}/Grace/Day%202/3%20%E4%B8%BB%E7%B7%B4%20%E5%A3%BA%E9%88%B4%E4%BF%AF%E8%BA%AB%E5%88%92%E8%88%B9.mp4`, notes: "雙手持壺鈴，腰背保持平直" },
  { day: 2, dayName: "背", order: 4, slot: "main", name: "超人式", target: "下背豎脊肌", sets: 3, reps: "12-15", rest: 30, video: `${R2_BASE}/Grace/Day%202/4%20%E4%B8%BB%E7%B7%B4%20%E8%B6%85%E4%BA%BA%E5%BC%8F.mp4`, notes: "" },
  { day: 2, dayName: "背", order: 5, slot: "core", name: "貓牛式伸展", target: "脊椎活動度", sets: "1", reps: "5-8次", rest: 0, video: `${R2_BASE}/Grace/Day%202/5%20%E6%94%B6%E5%B0%BE%20%E8%B2%93%E7%89%9B%E5%BC%8F.mp4`, notes: "" },

  { day: 3, dayName: "手臂", order: 0, slot: "warmup", name: "手腕暖身", target: "心肺/熱身", sets: "1", reps: "1分鐘", rest: 0, video: `${R2_BASE}/Grace/Day%203/0%20%E7%86%B1%E8%BA%AB%20%E6%89%8B%E8%85%95%E6%9A%96%E8%BA%AB.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 1, slot: "main", name: "彈力帶二頭彎舉", target: "二頭肌", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%203/1%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E4%BA%8C%E9%A0%AD%E5%BD%8E%E8%88%89.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 2, slot: "main", name: "1.5kg啞鈴二頭彎舉", target: "二頭肌", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%203/2%20%E4%B8%BB%E7%B7%B4%20%E5%95%9E%E9%88%B4%E4%BA%8C%E9%A0%AD%E5%BD%8E%E8%88%89.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 3, slot: "main", name: "彈力帶三頭下壓", target: "三頭肌", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%203/3%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E4%B8%89%E9%A0%AD%E4%B8%8B%E5%A3%93.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 4, slot: "main", name: "彈力帶過頭三頭伸展", target: "三頭肌長頭", sets: 3, reps: "12-15", rest: 30, video: `${R2_BASE}/Grace/Day%203/4%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E9%81%8E%E9%A0%AD%E4%B8%89%E9%A0%AD%E4%BC%B8%E5%B1%95.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 5, slot: "main", name: "彈力帶錘式彎舉", target: "肱肌/前臂", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%203/5%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E9%8C%98%E5%BC%8F%E5%BD%8E%E8%88%89.mp4`, notes: "" },
  { day: 3, dayName: "手臂", order: 6, slot: "core", name: "手臂/前臂伸展", target: "伸展放鬆", sets: "1", reps: "各30秒", rest: 0, video: `${R2_BASE}/Grace/Day%203/6%20%E6%94%B6%E5%B0%BE%20%E6%89%8B%E8%87%82%E5%89%8D%E8%87%82%E4%BC%B8%E5%B1%95.mp4`, notes: "" },

  { day: 4, dayName: "臀", order: 0, slot: "warmup", name: "髖關節活動力熱身", target: "心肺/熱身", sets: "1", reps: "約10分鐘", rest: 0, video: `${R2_BASE}/Grace/Day%204/0%20%E7%86%B1%E8%BA%AB%20%E9%AB%96%E9%97%9C%E7%AF%80%E6%B4%BB%E5%8B%95%E5%8A%9B.mp4`, notes: "" },
  { day: 4, dayName: "臀", order: 1, slot: "main", name: "6kg壺鈴高腳杯深蹲", target: "臀大肌整體", sets: 3, reps: "12-15", rest: 45, video: `${R2_BASE}/Grace/Day%204/1%20%E4%B8%BB%E7%B7%B4%20%E5%A3%BA%E9%88%B4%E9%AB%98%E8%85%B3%E6%9D%AF%E6%B7%B1%E8%B9%B2.mp4`, notes: "" },
  { day: 4, dayName: "臀", order: 2, slot: "main", name: "瑜伽磚臀橋夾磚", target: "臀大肌/內收肌", sets: 3, reps: "15-20(頂峰撐2秒)", rest: 30, video: `${R2_BASE}/Grace/Day%204/2%20%E4%B8%BB%E7%B7%B4%20%E7%91%9C%E4%BC%BD%E7%A3%9A%E8%87%80%E6%A9%8B%E5%A4%BE%E7%A3%9A.mp4`, notes: "" },
  { day: 4, dayName: "臀", order: 3, slot: "main", name: "彈力帶側走", target: "臀中肌", sets: 3, reps: "每邊15步", rest: 30, video: `${R2_BASE}/Grace/Day%204/3%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E5%81%B4%E8%B5%B0.mp4`, notes: "" },
  { day: 4, dayName: "臀", order: 4, slot: "main", name: "6kg壺鈴硬舉", target: "臀大肌/腿後肌", sets: 3, reps: "12-15", rest: 45, video: `${R2_BASE}/Grace/Day%204/4%20%E4%B8%BB%E7%B7%B4%20%E5%A3%BA%E9%88%B4%E7%A1%AC%E8%88%89.mp4`, notes: "新手優先：寧可屁股往後坐更多、腰背保持平直，感覺不到臀部/腿後側拉伸就先不加重量" },
  { day: 4, dayName: "臀", order: 5, slot: "main", name: "彈力帶臀推", target: "臀大肌收縮", sets: 3, reps: "15-20", rest: 30, video: `${R2_BASE}/Grace/Day%204/5%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E8%87%80%E6%8E%A8.mp4`, notes: "" },
  { day: 4, dayName: "臀", order: 6, slot: "core", name: "鴿式伸展", target: "臀部伸展", sets: "1", reps: "每邊30-45秒", rest: 0, video: `${R2_BASE}/Grace/Day%204/6%20%E6%94%B6%E5%B0%BE%20%E9%B4%BF%E5%BC%8F%E4%BC%B8%E5%B1%95.mp4`, notes: "" },

  { day: 5, dayName: "核心", order: 0, slot: "warmup", name: "全身關節暖身", target: "心肺/熱身", sets: "1", reps: "約5分鐘", rest: 0, video: `${R2_BASE}/Grace/Day%205/0%20%E7%86%B1%E8%BA%AB%20%E5%85%A8%E8%BA%AB%E9%97%9C%E7%AF%80%E6%9A%96%E8%BA%AB.mp4`, notes: "" },
  { day: 5, dayName: "核心", order: 1, slot: "main", name: "棒式", target: "核心", sets: 3, reps: "30-45秒", rest: 30, video: `${R2_BASE}/Grace/Day%205/1%20%E4%B8%BB%E7%B7%B4%20%E6%A3%92%E5%BC%8F.mp4`, notes: "" },
  { day: 5, dayName: "核心", order: 2, slot: "main", name: "瑜伽磚死蟲式夾磚", target: "核心穩定", sets: 3, reps: "12-15(每邊)", rest: 30, video: `${R2_BASE}/Grace/Day%205/2%20%E4%B8%BB%E7%B7%B4%20%E7%91%9C%E4%BC%BD%E7%A3%9A%E6%AD%BB%E8%9F%B2%E5%BC%8F%E5%A4%BE%E7%A3%9A.mp4`, notes: "" },
  { day: 5, dayName: "核心", order: 3, slot: "main", name: "彈力帶抗旋轉", target: "腹斜肌/抗旋轉穩定", sets: 3, reps: "12-15(每邊)", rest: 30, video: `${R2_BASE}/Grace/Day%205/3%20%E4%B8%BB%E7%B7%B4%20%E5%BD%88%E5%8A%9B%E5%B8%B6%E6%8A%97%E6%97%8B%E8%BD%89.mp4`, notes: "" },
  { day: 5, dayName: "核心", order: 4, slot: "main", name: "側棒式", target: "腹斜肌", sets: 3, reps: "每邊20-30秒", rest: 30, video: `${R2_BASE}/Grace/Day%205/4%20%E4%B8%BB%E7%B7%B4%20%E5%81%B4%E6%A3%92%E5%BC%8F.mp4`, notes: "" },
  { day: 5, dayName: "核心", order: 5, slot: "main", name: "徒手俄羅斯轉體", target: "腹斜肌", sets: 3, reps: "12-15(每邊)", rest: 30, video: `${R2_BASE}/Grace/Day%205/5%20%E4%B8%BB%E7%B7%B4%20%E4%BF%84%E7%BE%85%E6%96%AF%E8%BD%89%E9%AB%94.mp4`, notes: "新手先徒手或抱瑜伽磚，核心穩定度上來後(約4週後)再考慮加壺鈴重量" },
  { day: 5, dayName: "核心", order: 6, slot: "core", name: "貓牛式呼吸放鬆", target: "放鬆", sets: "1", reps: "5-8次", rest: 0, video: `${R2_BASE}/Grace/Day%205/6%20%E6%94%B6%E5%B0%BE%20%E8%B2%93%E7%89%9B%E5%BC%8F%E5%91%BC%E5%90%B8%E6%94%BE%E9%AC%86.mp4`, notes: "" },
];
