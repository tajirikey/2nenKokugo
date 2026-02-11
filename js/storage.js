/* ========================================
   IndexedDB ストレージ
   書いた文字の画像データを永続保存

   スキーマ変更時:
   1. DB_VERSION を +1 する
   2. migrate() 内に新バージョンのマイグレーションを追加
   既存データは保持されたまま構造だけ更新される
   ======================================== */

const KanjiStorage = (() => {
  const DB_NAME = 'kanjiApp';
  const DB_VERSION = 1;
  let db = null;

  // スキーママイグレーション（バージョンごとに差分適用）
  function migrate(d, oldVersion) {
    if (oldVersion < 1) {
      const store = d.createObjectStore('writings', { keyPath: 'id', autoIncrement: true });
      store.createIndex('kanji', 'kanji', { unique: false });
    }
    // 将来の例:
    // if (oldVersion < 2) {
    //   d.createObjectStore('settings', { keyPath: 'key' });
    // }
    // if (oldVersion < 3) {
    //   const store = e.target.transaction.objectStore('writings');
    //   store.createIndex('timestamp', 'timestamp', { unique: false });
    // }
  }

  async function open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        migrate(e.target.result, e.oldVersion);
      };
      req.onsuccess = (e) => { db = e.target.result; resolve(); };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function save(kanji, imageDataURL) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      tx.objectStore('writings').add({ kanji, imageDataURL, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  async function getByKanji(kanji) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readonly');
      const req = tx.objectStore('writings').index('kanji').getAll(kanji);
      req.onsuccess = () => resolve(req.result.sort((a, b) => b.timestamp - a.timestamp));
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllLatest() {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readonly');
      const req = tx.objectStore('writings').getAll();
      req.onsuccess = () => {
        const map = {};
        for (const item of req.result) {
          if (!map[item.kanji] || item.timestamp > map[item.kanji].timestamp) {
            map[item.kanji] = item;
          }
        }
        resolve(map);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteByKanji(kanji) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      const index = tx.objectStore('writings').index('kanji');
      const req = index.openCursor(kanji);
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) { cursor.delete(); cursor.continue(); }
      };
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteAll() {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      tx.objectStore('writings').clear();
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  function isReady() { return db !== null; }

  return { open, save, getByKanji, getAllLatest, deleteByKanji, deleteAll, isReady };
})();
