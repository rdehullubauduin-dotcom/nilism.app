self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Geen cache, alles gaat direct naar de server zodat de beveiliging intact blijft
  event.respondWith(fetch(event.request));
});
