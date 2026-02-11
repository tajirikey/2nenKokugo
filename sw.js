/* ========================================
   Service Worker - Stale-While-Revalidate
   ========================================
   戦略:
   - キャッシュがあれば即座に返す（高速表示）
   - バックグラウンドで最新版をネットワーク取得し、キャッシュを更新
   - 次回アクセス時に最新版が反映される
   - オフラインではキャッシュ版が動作
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
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

// インストール時: アプリシェルをプリキャッシュ
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

// Stale-While-Revalidate: キャッシュ即返し + バックグラウンド更新
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // ナビゲーション以外のクロスオリジンリクエストはスルー
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);

      // バックグラウンドで最新版を取得してキャッシュ更新
      const fetchPromise = fetch(request).then((response) => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(() => null);

      // キャッシュがあれば即返す、なければネットワーク待ち
      return cached || fetchPromise;
    })
  );
});
