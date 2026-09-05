const SCOPE = new URL(self.registration.scope);
const CACHE_PREFIX = `libx-navigation:${encodeURIComponent(SCOPE.origin)}:${encodeURIComponent(SCOPE.pathname)}:`;
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const SIDEBAR_PATH_PATTERN = /^sidebar\/sidebar-[^/]+\.json$/;
const GROUP_PATH_PATTERN = /^navigation\/[^/]+\/[^/]+\.json$/;

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter((cacheName) => cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME)
              .map((cacheName) => caches.delete(cacheName))
          )
        ),
      self.clients.claim(),
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  const isCacheableSidebarRequest =
    request.method === 'GET' &&
    requestUrl.origin === SCOPE.origin &&
    requestUrl.pathname.startsWith(SCOPE.pathname) &&
    (SIDEBAR_PATH_PATTERN.test(requestUrl.pathname.slice(SCOPE.pathname.length)) ||
      GROUP_PATH_PATTERN.test(requestUrl.pathname.slice(SCOPE.pathname.length)));

  if (isCacheableSidebarRequest) {
    event.respondWith(fetchSidebar(request));
  }
});

async function fetchSidebar(request) {
  const cache = await caches.open(CACHE_NAME).catch(() => null);
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Storage limits must not hide a successful network response.
      await cache?.put(request, networkResponse.clone()).catch(() => undefined);
      return networkResponse;
    }

    return (await cache?.match(request)) ?? networkResponse;
  } catch {
    const cachedResponse = await cache?.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response(JSON.stringify({ error: 'Sidebar data is unavailable while offline.' }), {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
}
