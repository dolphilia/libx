import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

const sourcePath = new URL('../../scripts/service-worker/sidebar-sw.js', import.meta.url);
const projectWorkerPaths = [
  '../../templates/docs-site/public/sw.js',
  '../../apps/sample-docs/public/sw.js',
  '../../apps/test-verification/public/sw.js'
];

test('all application service workers match the canonical source', async () => {
  const canonical = await fs.readFile(sourcePath, 'utf8');
  for (const relativePath of projectWorkerPaths) {
    assert.equal(await fs.readFile(new URL(relativePath, import.meta.url), 'utf8'), canonical);
  }
});

test('sidebar worker caches online responses and falls back offline', async () => {
  const source = await fs.readFile(sourcePath, 'utf8');
  const listeners = new Map();
  const storedResponses = new Map();
  const deletedCaches = [];
  let clientsClaimed = false;
  let fetchImplementation = async () =>
    new Response('{"items":[]}', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  const context = vm.createContext({
    URL,
    Response,
    Promise,
    JSON,
    fetch: (...args) => fetchImplementation(...args),
    caches: {
      async keys() {
        return ['sidebar-cache-v2', 'sidebar-cache-v3', 'assets-v1'];
      },
      async delete(name) {
        deletedCaches.push(name);
        return true;
      },
      async open() {
        return {
          async put(request, response) {
            storedResponses.set(request.url, response.clone());
          }
        };
      },
      async match(request) {
        return storedResponses.get(request.url)?.clone();
      }
    },
    self: {
      location: { origin: 'https://example.test' },
      clients: {
        claim: async () => {
          clientsClaimed = true;
        }
      },
      skipWaiting: async () => undefined,
      addEventListener(type, listener) {
        listeners.set(type, listener);
      }
    }
  });

  vm.runInContext(source, context);

  let activation;
  listeners.get('activate')({ waitUntil(value) { activation = value; } });
  await activation;
  assert.deepEqual(deletedCaches, ['sidebar-cache-v2']);
  assert.equal(clientsClaimed, true);

  function isIntercepted(url, method = 'GET') {
    let intercepted = false;
    listeners.get('fetch')({
      request: { method, url },
      respondWith() {
        intercepted = true;
      }
    });
    return intercepted;
  }

  assert.equal(isIntercepted('https://example.test/assets/app.js'), false);
  assert.equal(
    isIntercepted('https://example.test/docs/sample/sidebar/sidebar-en-v1.json', 'POST'),
    false
  );
  assert.equal(
    isIntercepted('https://other.test/docs/sample/sidebar/sidebar-en-v1.json'),
    false
  );

  async function dispatchFetch(url) {
    let responsePromise;
    listeners.get('fetch')({
      request: { method: 'GET', url },
      respondWith(value) {
        responsePromise = value;
      }
    });
    assert.ok(responsePromise, 'expected the sidebar request to be intercepted');
    return responsePromise;
  }

  const cachedUrl =
    'https://example.test/docs/sample/sidebar/sidebar-en-v1.json?revision=1';
  assert.equal((await dispatchFetch(cachedUrl)).status, 200);
  assert.equal(storedResponses.has(cachedUrl), true);

  fetchImplementation = async () => {
    throw new Error('offline');
  };
  assert.equal((await dispatchFetch(cachedUrl)).status, 200);
  assert.equal(
    (await dispatchFetch('https://example.test/docs/sample/sidebar/sidebar-ja-v1.json')).status,
    503
  );
});
