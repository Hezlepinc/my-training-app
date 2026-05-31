/* Keto app service worker — offline cache.
 * Precaches the shell + core pages; runtime-caches everything else (recipe cards)
 * as they're visited. Network-first would defeat offline, so we use cache-first
 * with a network fallback that backfills the cache.
 */
const CACHE = 'keto-v1';

const CORE = [
  'app.html',
  'index.html',
  'shopping-list-by-store.html',
  'shopping-list.html',
  'fast-tracker.html',
  'workout.html',
  'meal-plan-list.html',
  'recipes-data.js',
  'manifest.json',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png',
  'favicon-32.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c) { return c.addAll(CORE); })
      .then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys()
      .then(function(keys) {
        return Promise.all(keys.filter(function(k){ return k !== CACHE; })
          .map(function(k){ return caches.delete(k); }));
      })
      .then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(resp) {
        // backfill cache for same-origin GETs (recipe cards, etc.)
        if (resp && resp.status === 200 && resp.type === 'basic') {
          var copy = resp.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return resp;
      }).catch(function() {
        // offline & uncached: fall back to the app shell for navigations
        if (e.request.mode === 'navigate') return caches.match('app.html');
      });
    })
  );
});
