const CACHE_NAME = 'freedom-protocol-v2';

const STATIC_ASSETS = [
    './',
    './index.html',
    './playerData.js',
    './clanStats.js',
    './icon.png',
    './Game Icons/ATK.png',
    './Game Icons/Rank1.png',
    './Game Icons/Rank2.png',
    './Game Icons/Rank3.png',
    './Game Icons/Ranking.png',
    './Game Icons/CX.png',
    './Game Icons/Relic Cores.png',
    './Game Icons/Medals.png',
    './Game Icons/Defense_Attack Points.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Skip non-GET and cross-origin requests
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            const networkFetch = fetch(event.request).then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => cached);

            return cached || networkFetch;
        })
    );
});
