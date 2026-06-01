/* Keto app service worker — NETWORK-FIRST.
 * Always tries the network so redeploys show up immediately; falls back to
 * cache only when offline. (The old v1 was cache-first, which served stale
 * pages after redeploys — fixed here.)
 * Bump CACHE on any change to force old caches out.
 */
const CACHE = 'keto-v31';

const CORE = [
  'app.html',
  'index.html',
  'shopping-list-by-store.html',
  'shopping-list.html',
  'fast-tracker.html',
  'workout.html',
  'schedule.html',
  'meal-plan-list.html',
  'tools.html',
  'macro-calc.html',
  'food-catalog.html',
  'exercise-library.html',
  'wods.html',
  'recipes-data.js',
  'wods-data.js',
  'styles.css',
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
    fetch(e.request).then(function(resp) {
      // refresh the cache copy whenever we successfully reach the network
      if (resp && resp.status === 200 && resp.type === 'basic') {
        var copy = resp.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      }
      return resp;
    }).catch(function() {
      // offline: serve from cache; for navigations fall back to the shell
      return caches.match(e.request).then(function(cached) {
        return cached || (e.request.mode === 'navigate' ? caches.match('app.html') : undefined);
      });
    })
  );
});
