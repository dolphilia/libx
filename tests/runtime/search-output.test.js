import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { buildSearchIndexes } from '../../scripts/build-search-index.js';

test('search generation removes deleted locale indexes and preserves prior output on budget failure', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-search-output-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const lang of ['en', 'ja']) {
    const directory = path.join(root, 'src/content/docs/v1', lang, 'guide');
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, 'start.md'), '---\ntitle: Start\n---\nBody');
  }
  buildSearchIndexes(root, '/docs/example');
  assert.ok(fs.existsSync(path.join(root, 'public/search/v1/ja.json')));
  fs.rmSync(path.join(root, 'src/content/docs/v1/ja'), { recursive: true });
  buildSearchIndexes(root, '/docs/example');
  assert.equal(fs.existsSync(path.join(root, 'public/search/v1/ja.json')), false);
  const before = fs.readFileSync(path.join(root, 'public/search/v1/en.json'));
  fs.appendFileSync(
    path.join(root, 'src/content/docs/v1/en/guide/start.md'),
    'x'.repeat(2 * 1024 * 1024)
  );
  assert.throws(() => buildSearchIndexes(root, '/docs/example'), /exceeds 2 MiB/);
  assert.deepEqual(fs.readFileSync(path.join(root, 'public/search/v1/en.json')), before);
});
