/* ========================================
   IndexedDB ストレージ
   書いた文字の画像データを永続保存
   ======================================== */

const KanjiStorage = (() => {
  let db = null;

  async function open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('kanjiApp', 1);
      req.onupgradeneeded = (e) => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains('writings')) {
          const store = d.createObjectStore('writings', { keyPath: 'id', autoIncrement: true });
          store.createIndex('kanji', 'kanji', { unique: false });
        }
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
