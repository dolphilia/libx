import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  inspectUnreferencedJavaScriptAssets,
  pruneUnreferencedJavaScriptAssets,
} from '../../scripts/prune-unreferenced-javascript-assets.js';

test('HTMLから到達できるJavaScript依存だけを配信成果物へ残す', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'libx-prune-assets-'));

  try {
    await fs.mkdir(path.join(root, 'docs/example/assets'), { recursive: true });
    await fs.writeFile(
      path.join(root, 'index.html'),
      '<script type="module" src="/docs/example/assets/entry.js"></script>'
    );
    await fs.writeFile(path.join(root, 'docs/example/assets/entry.js'), 'import "./shared.js";');
    await fs.writeFile(path.join(root, 'docs/example/assets/shared.js'), 'export const value = 1;');
    await fs.writeFile(
      path.join(root, 'docs/example/assets/orphan.js'),
      'export const orphan = 1;'
    );
    await fs.writeFile(path.join(root, 'sw.js'), 'self.addEventListener("fetch", () => {});');

    const inspection = await inspectUnreferencedJavaScriptAssets(root);
    assert.deepEqual(inspection.unreferenced, ['docs/example/assets/orphan.js']);

    const result = await pruneUnreferencedJavaScriptAssets(root, { apply: true });
    assert.equal(result.unreferenced.length, 1);
    await fs.access(path.join(root, 'docs/example/assets/entry.js'));
    await fs.access(path.join(root, 'docs/example/assets/shared.js'));
    await fs.access(path.join(root, 'sw.js'));
    await assert.rejects(fs.access(path.join(root, 'docs/example/assets/orphan.js')));
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});
