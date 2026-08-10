const CACHE_NAME = 'sidebar-cache-v3';
const SIDEBAR_PATH_PATTERN = /\/sidebar\/sidebar-.*\.json$/;

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith('sidebar-cache-') && cacheName !== CACHE_NAME
            )
            .map((cacheName) => caches.delete(cacheName))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  const isCacheableSidebarRequest =
    request.method === 'GET' &&
    requestUrl.origin === self.location.origin &&
    SIDEBAR_PATH_PATTERN.test(requestUrl.pathname);

  if (isCacheableSidebarRequest) {
    event.respondWith(fetchSidebar(request));
  }
});

async function fetchSidebar(request) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      return networkResponse;
    }

    return (await caches.match(request)) ?? networkResponse;
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response(
      JSON.stringify({ error: 'Sidebar data is unavailable while offline.' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }
    );
  }
}
