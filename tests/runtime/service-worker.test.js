import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

import { discoverApps } from '../../packages/project-config/src/app-registry.js';
import path from 'node:path';

const sourcePath = new URL('../../scripts/service-worker/sidebar-sw.js', import.meta.url);
const projectWorkerPaths = [
  new URL('../../templates/docs-site/public/sw.js', import.meta.url),
  ...discoverApps(path.resolve(import.meta.dirname, '../..')).apps.map((app) =>
    path.join(app.directory, 'public/sw.js')
  ),
];

test('all application service workers match the canonical source', async () => {
  const canonical = await fs.readFile(sourcePath, 'utf8');
  for (const relativePath of projectWorkerPaths) {
    assert.equal(await fs.readFile(relativePath, 'utf8'), canonical);
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
      headers: { 'Content-Type': 'application/json' },
    });

  const prefix = 'libx-navigation:https%3A%2F%2Fexample.test:%2Fdocs%2Fsample%2F:';
  const otherPrefix = 'libx-navigation:https%3A%2F%2Fexample.test:%2Fdocs%2Fother%2F:';
  const context = vm.createContext({
    URL,
    Response,
    Promise,
    JSON,
    fetch: (...args) => fetchImplementation(...args),
    caches: {
      async keys() {
        return [
          'sidebar-cache-v2',
          'sidebar-cache-v3',
          'assets-v1',
          prefix + 'old',
          otherPrefix + 'old',
        ];
      },
      async delete(name) {
        deletedCaches.push(name);
        return true;
      },
      async open(name) {
        assert.equal(name, prefix + 'v1');
        return {
          async match(request) {
            return storedResponses.get(request.url)?.clone();
          },
          async put(request, response) {
            storedResponses.set(request.url, response.clone());
          },
        };
      },
      async match(_request) {
        throw new Error('global caches.match must not be used');
      },
    },
    self: {
      location: { origin: 'https://example.test' },
      registration: { scope: 'https://example.test/docs/sample/' },
      clients: {
        claim: async () => {
          clientsClaimed = true;
        },
      },
      skipWaiting: async () => undefined,
      addEventListener(type, listener) {
        listeners.set(type, listener);
      },
    },
  });

  vm.runInContext(source, context);

  let activation;
  listeners.get('activate')({
    waitUntil(value) {
      activation = value;
    },
  });
  await activation;
  assert.deepEqual(deletedCaches, [prefix + 'old']);
  assert.equal(clientsClaimed, true);

  function isIntercepted(url, method = 'GET') {
    let intercepted = false;
    listeners.get('fetch')({
      request: { method, url },
      respondWith() {
        intercepted = true;
      },
    });
    return intercepted;
  }

  assert.equal(isIntercepted('https://example.test/assets/app.js'), false);
  assert.equal(isIntercepted('https://example.test/docs/other/sidebar/sidebar-en-v1.json'), false);
  assert.equal(
    isIntercepted('https://example.test/docs/sample-extra/sidebar/sidebar-en-v1.json'),
    false
  );
  assert.equal(
    isIntercepted('https://example.test/docs/sample/sidebar/sidebar-en-v1.json', 'POST'),
    false
  );
  assert.equal(isIntercepted('https://other.test/docs/sample/sidebar/sidebar-en-v1.json'), false);

  async function dispatchFetch(url) {
    let responsePromise;
    listeners.get('fetch')({
      request: { method: 'GET', url },
      respondWith(value) {
        responsePromise = value;
      },
    });
    assert.ok(responsePromise, 'expected the sidebar request to be intercepted');
    return responsePromise;
  }

  const cachedUrl = 'https://example.test/docs/sample/sidebar/sidebar-en-v1.json?revision=1';
  assert.equal((await dispatchFetch(cachedUrl)).status, 200);
  assert.equal(storedResponses.has(cachedUrl), true);

  const groupUrl = 'https://example.test/docs/sample/navigation/v1/ja.json?revision=current';
  assert.equal((await dispatchFetch(groupUrl)).status, 200);
  fetchImplementation = async () => {
    throw new Error('offline');
  };
  assert.equal((await dispatchFetch(cachedUrl)).status, 200);
  assert.equal((await dispatchFetch(groupUrl)).status, 200);
  assert.equal((await dispatchFetch(groupUrl.replace('current', 'new'))).status, 503);
  assert.equal(
    (await dispatchFetch('https://example.test/docs/sample/sidebar/sidebar-ja-v1.json')).status,
    503
  );
});

test('キャッシュが利用できなくてもネットワークの正常応答を返す', async () => {
  const source = await fs.readFile(sourcePath, 'utf8');
  for (const mode of ['open', 'put']) {
    const listeners = new Map();
    vm.runInNewContext(source, {
      URL,
      Response,
      fetch: async () => new Response('online', { status: 200 }),
      caches: {
        open: async () => {
          if (mode === 'open') throw new Error('storage unavailable');
          return {
            put: async () => {
              throw new Error('quota');
            },
          };
        },
      },
      self: {
        registration: { scope: 'http://127.0.0.1:8080/docs/awesome/' },
        addEventListener: (name, callback) => listeners.set(name, callback),
      },
    });
    let response;
    listeners.get('fetch')({
      request: { method: 'GET', url: 'http://127.0.0.1:8080/docs/awesome/navigation/v1/en.json' },
      respondWith: (value) => {
        response = value;
      },
    });
    assert.equal(await (await response).text(), 'online');
  }
});
