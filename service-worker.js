const CACHE_NAME = 'freedom-protocol-v19';

const STATIC_ASSETS = [
    './',
    './index.html',
    './i18n.js',
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

// Data files — always fetch fresh, fall back to cache when offline
const NETWORK_FIRST = ['playerData.js', 'clanStats.js'];

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    const isDataFile = NETWORK_FIRST.some(f => url.pathname.endsWith(f));

    if (isDataFile) {
        event.respondWith(
            fetch(event.request).then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            }).catch(() => caches.match(event.request))
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(cached => cached || fetch(event.request))
        );
    }
});
