/* ========================================
   IndexedDB ストレージ
   書いた文字の画像データを永続保存（アカウント別）

   スキーマ変更時:
   1. DB_VERSION を +1 する
   2. migrate() 内に新バージョンのマイグレーションを追加
   既存データは保持されたまま構造だけ更新される
   ======================================== */

const KanjiStorage = (() => {
  const DB_NAME = 'kanjiApp';
  const DB_VERSION = 1;
  let db = null;

  // user フィールドが未設定の既存データ用デフォルト
  const DEFAULT_USER = 'かわ';

  function userOf(record) {
    return record.user || DEFAULT_USER;
  }

  function migrate(d, oldVersion) {
    if (oldVersion < 1) {
      const store = d.createObjectStore('writings', { keyPath: 'id', autoIncrement: true });
      store.createIndex('kanji', 'kanji', { unique: false });
    }
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

  async function save(kanji, imageDataURL, user) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      tx.objectStore('writings').add({ kanji, imageDataURL, user, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  async function getByKanji(kanji, user) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readonly');
      const req = tx.objectStore('writings').index('kanji').getAll(kanji);
      req.onsuccess = () => {
        const filtered = req.result.filter(r => userOf(r) === user);
        resolve(filtered.sort((a, b) => b.timestamp - a.timestamp));
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllLatest(user) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readonly');
      const req = tx.objectStore('writings').getAll();
      req.onsuccess = () => {
        const map = {};
        for (const item of req.result) {
          if (userOf(item) !== user) continue;
          if (!map[item.kanji] || item.timestamp > map[item.kanji].timestamp) {
            map[item.kanji] = item;
          }
        }
        resolve(map);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteByKanji(kanji, user) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      const index = tx.objectStore('writings').index('kanji');
      const req = index.openCursor(kanji);
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          if (userOf(cursor.value) === user) cursor.delete();
          cursor.continue();
        }
      };
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteAll(user) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('writings', 'readwrite');
      const store = tx.objectStore('writings');
      const req = store.openCursor();
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          if (userOf(cursor.value) === user) cursor.delete();
          cursor.continue();
        }
      };
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  }

  function isReady() { return db !== null; }

  return { open, save, getByKanji, getAllLatest, deleteByKanji, deleteAll, isReady };
})();
