import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  evaluateDeploymentAssets,
  inspectDeploymentAssets,
} from '../../scripts/check-deployment-assets.js';

test('deployment assets are counted recursively and grouped by extension', async (t) => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'libx-deployment-assets-'));
  t.after(() => fs.rm(directory, { recursive: true, force: true }));

  await fs.mkdir(path.join(directory, 'docs'), { recursive: true });
  await fs.writeFile(path.join(directory, 'index.html'), '1234');
  await fs.writeFile(path.join(directory, 'docs', 'page.html'), '12');
  await fs.writeFile(path.join(directory, 'docs', 'app.js'), '123');

  const summary = await inspectDeploymentAssets(directory);
  assert.equal(summary.fileCount, 3);
  assert.equal(summary.totalBytes, 9);
  assert.deepEqual(summary.extensions, { '.html': 2, '.js': 1 });
  assert.deepEqual(summary.largestFile, { path: 'index.html', bytes: 4 });
  assert.deepEqual(summary.forbiddenArtifacts, []);
});

test('deployment budget warns and fails before the provider hard limit', () => {
  const warning = evaluateDeploymentAssets(
    { fileCount: 60, largestFile: null },
    { fileLimit: 100, warnRatio: 0.6, failRatio: 0.9 }
  );
  assert.equal(warning.warnings.length, 1);
  assert.equal(warning.errors.length, 0);

  const failure = evaluateDeploymentAssets(
    { fileCount: 90, largestFile: { path: 'large.bin', bytes: 26 } },
    { fileLimit: 100, warnRatio: 0.6, failRatio: 0.9, maxFileSize: 25 }
  );
  assert.equal(failure.errors.length, 2);
});

test('obsolete compressed and duplicated sidebar artifacts fail the budget check', () => {
  const result = evaluateDeploymentAssets({
    fileCount: 2,
    largestFile: null,
    forbiddenArtifacts: [
      'docs/example/sidebar/sidebar-en-v1.json.gz',
      'docs/example/pages/public/sidebar/sidebar-en-v1.json',
    ],
  });

  assert.equal(result.errors.length, 1);
});
