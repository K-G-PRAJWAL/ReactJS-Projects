const CACHE = "dev";
const URL = ["index.html", "offline.html"];
const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      console.log("Cached!");
      return cache.addAll(URL);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

self.addEventListener("activate", (event) => {
  const newCache = [];
  newCache.push(CACHE);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!newCache.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
