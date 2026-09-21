const CACHE_NAME = 'freedom-protocol-v21';

const STATIC_ASSETS = [
    './',
    './index.html',
    './i18n.js',
    './playerStats.js',
    './playerCores.js',
    './playerLME.js',
    './playerCXRank.js',
    './playerCXBoss.js',
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

// Data files, the dashboard shell (index.html), and translations — always
// fetch fresh, fall back to cache when offline. These are the actively
// edited files; cache-first would serve a stale index.html indefinitely,
// since only a change to THIS script triggers a service-worker reinstall.
const NETWORK_FIRST = ['playerStats.js', 'playerCores.js', 'playerLME.js', 'playerCXRank.js', 'playerCXBoss.js', 'clanStats.js', 'index.html', 'i18n.js'];

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // The bare "/" root request resolves to index.html but its pathname
    // won't literally end with "index.html", so it needs its own check.
    const isDataFile = url.pathname.endsWith('/') || NETWORK_FIRST.some(f => url.pathname.endsWith(f));

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
