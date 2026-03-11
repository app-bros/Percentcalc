// sw.js - MIT License
const CACHE_NAME = 'percent-calc-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Install the service worker and cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Serve files from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
