/* ========================================
   Service Worker - Network-First
   ========================================
   戦略:
   - ネットワーク優先: 常に最新版を取得して表示・キャッシュ更新
     （cache: 'no-cache' でブラウザHTTPキャッシュをバイパスし、
       サーバーに条件付きリクエスト。未変更なら304で高速）
   - オフライン/取得失敗時のみキャッシュ版で動作
   - 1回のリロードで最新デプロイが反映される
   - キャッシュ名にバージョン番号不要（コード変更時の手動更新不要）
   - ユーザーデータ（IndexedDB/localStorage）には一切触れない
   ======================================== */

const CACHE_NAME = 'kanji-practice';

const SHELL_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/kanji-data.js',
  './js/stroke-validator.js',
  './js/canvas.js',
  './js/storage.js',
  './js/app.js',
  './js/quiz.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

// インストール時: アプリシェルをプリキャッシュ（オフライン用の初期セット）
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

// アクティベート時: 旧バージョン名のキャッシュがあれば削除、即座にクライアント制御
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ネットワーク優先 + キャッシュフォールバック
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // クロスオリジンや GET 以外はスルー
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        // no-cache: ブラウザHTTPキャッシュを信用せず、サーバーへ条件付き確認
        const response = await fetch(request, { cache: 'no-cache' });
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      } catch (e) {
        // オフライン等: キャッシュ版で動作
        const cached = await cache.match(request);
        if (cached) return cached;
        throw e;
      }
    })
  );
});
