import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(testDirectory, '..', '..');

function hashDirectory(directory) {
  const hash = createHash('sha256');
  const visit = (current) => {
    for (const entry of fs
      .readdirSync(current, { withFileTypes: true })
      .sort((left, right) => left.name.localeCompare(right.name))) {
      const entryPath = path.join(current, entry.name);
      hash.update(path.relative(directory, entryPath));
      if (entry.isDirectory()) visit(entryPath);
      if (entry.isFile()) hash.update(fs.readFileSync(entryPath));
    }
  };
  visit(directory);
  return hash.digest('hex');
}

test('create-versionのdry-runは設定とコンテンツを変更しない', () => {
  const projectSource = path.join(repositoryRoot, 'apps', 'test-verification', 'src');
  const targetVersion = path.join(projectSource, 'content', 'docs', 'v99');
  const before = hashDirectory(projectSource);

  const result = spawnSync(
    process.execPath,
    ['scripts/create-version.js', 'test-verification', 'v99', '--dry-run'],
    { cwd: repositoryRoot, encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /変更予定/);
  assert.match(result.stdout, /dry-run/);
  assert.equal(hashDirectory(projectSource), before);
  assert.equal(fs.existsSync(targetVersion), false);
});
