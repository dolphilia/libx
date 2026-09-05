import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { once } from 'node:events';
import test from 'node:test';
import { createPreviewServer, validatePreviewOutput } from '../../scripts/preview-integrated.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-preview-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const directory = path.join(root, 'dist');
  const write = (relative, content) => {
    const file = path.join(root, relative);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, typeof content === 'string' ? content : JSON.stringify(content));
  };
  write('pnpm-workspace.yaml', 'packages: [apps/*/*]');
  write('dist/index.html', '<h1>Landing</h1>');
  write('dist/404.html', '<h1>Global not found</h1>');
  write('dist/docs/example/404.html', '<h1>Group not found</h1>');
  write('dist/docs/example/v1/ja/guide/page/index.html', '<h1>日本語本文</h1>');
  write('dist/docs/example/assets/web/app.js', 'console.log("client")');
  write('dist/docs/example/navigation/v1/ja.json', { schemaVersion: 1, items: [] });
  return { root, directory, write };
}

test('統合プレビューは公開パス・本文・資産・JSON・404を保持し、root外を配信しない', async (t) => {
  const f = fixture(t);
  const server = createPreviewServer(f.directory);
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(
    () =>
      new Promise((resolve) => {
        server.closeAllConnections();
        server.close(resolve);
      })
  );
  const port = server.address().port;
  const request = (url, method = 'GET') =>
    new Promise((resolve, reject) => {
      const req = http.request({ host: '127.0.0.1', port, path: url, method }, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () =>
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: Buffer.concat(chunks).toString(),
          })
        );
      });
      req.on('error', reject);
      req.end();
    });
  const url = '/docs/example/v1/ja/guide/page/';
  const page = await request(url);
  assert.equal(page.status, 200);
  assert.equal(page.body, '<h1>日本語本文</h1>');
  assert.equal(page.headers['cache-control'], 'no-store');
  assert.equal((await request(url, 'HEAD')).body, '');
  const redirect = await request(url.slice(0, -1) + '?q=1');
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.location, url + '?q=1');
  assert.match(
    (await request('/docs/example/assets/web/app.js')).headers['content-type'],
    /javascript/
  );
  assert.equal((await request('/docs/example/navigation/v1/ja.json?revision=1')).status, 200);
  const missing = await request('/docs/example/unknown/');
  assert.equal(missing.status, 404);
  assert.equal(missing.body, '<h1>Group not found</h1>');
  assert.equal((await request('/unknown/')).body, '<h1>Global not found</h1>');
  assert.equal((await request(url, 'POST')).status, 405);
  f.write('private.txt', 'private');
  fs.symlinkSync(path.join(f.root, 'private.txt'), path.join(f.directory, 'alias.txt'));
  for (const target of [
    '/../private.txt',
    '/%2e%2e/private.txt',
    '/%ZZ',
    '/alias.txt',
    '//example.test/',
  ])
    assert.equal((await request(target)).status, 400, target);
});

test('グループプレビューは他の子の未生成本文と未知のgroupを開始前に検出する', (t) => {
  const f = fixture(t);
  f.write('apps/example/group.config.jsonc', {
    schemaVersion: 1,
    name: { en: 'Example' },
    entry: 'web',
  });
  f.write('apps/example/web/package.json', { name: 'apps-example-web' });
  f.write('apps/example/web/astro.config.mjs', 'export default {};');
  f.write('apps/example/web/src/config/project.config.jsonc', {
    versioning: { versions: [{ id: 'v1' }] },
  });
  f.write('apps/example/web/src/content/docs/v1/ja/guide/page.md', '---\ntitle: Test\n---\nBody');
  f.write('dist/docs/example/index.html', 'entry');
  f.write('dist/docs/example/navigation/v1/ja/index.html', 'navigation');
  f.write('dist/docs/example/search/v1/ja.json', {});
  assert.equal(validatePreviewOutput(f.root, f.directory, 'example'), '/docs/example/');
  fs.unlinkSync(path.join(f.directory, 'docs/example/v1/ja/guide/page/index.html'));
  assert.throws(() => validatePreviewOutput(f.root, f.directory, 'example'), /出力が不足/);
  assert.throws(() => validatePreviewOutput(f.root, f.directory, 'unknown'), /未知のグループ/);
});
