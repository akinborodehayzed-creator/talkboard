// Offline support: keep a copy of the app on the iPad so it works with no internet.
// Bump CACHE when you change any file so iPads pick up the new version.
const CACHE = 'talkboard-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Try the internet first (so updates arrive straight away), and fall back to the
// saved copy when the iPad is offline or the connection is too slow.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const fromNetwork = fetch(e.request, { cache: 'no-cache' }).then(resp => {
      if (resp && resp.ok) cache.put(e.request, resp.clone());
      return resp;
    });
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), 3000));
    try {
      return await Promise.race([fromNetwork, timeout]);
    } catch (err) {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      return cached || (await cache.match('./index.html')) || fromNetwork;
    }
  })());
});
