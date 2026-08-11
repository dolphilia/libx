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

test('create-documentのdry-runは文書と設定を変更しない', () => {
  const projectSource = path.join(repositoryRoot, 'apps', 'sample-docs', 'src');
  const before = hashDirectory(projectSource);

  const result = spawnSync(
    process.execPath,
    [
      'scripts/create-document.js',
      'sample-docs',
      'ar',
      'v2',
      'dry-run-category',
      'Dry Run Document',
      '--dry-run',
    ],
    { cwd: repositoryRoot, encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /変更予定/);
  assert.match(result.stdout, /dry-run/);
  assert.match(result.stdout, /\/v2\/ar\//);
  assert.match(result.stdout, /\.md\b/);
  assert.equal(hashDirectory(projectSource), before);
});

test('create-documentはMDXを明示指定した場合だけmdxを作成予定にする', () => {
  const result = spawnSync(
    process.execPath,
    [
      'scripts/create-document.js',
      'sample-docs',
      'en',
      'v2',
      'guide',
      'MDX Fixture',
      '--format=mdx',
      '--dry-run',
    ],
    { cwd: repositoryRoot, encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /\.mdx\b/);
});

test('create-documentはプロジェクト未対応のロケールを明示的に拒否する', () => {
  const result = spawnSync(
    process.execPath,
    [
      'scripts/create-document.js',
      'sample-docs',
      'zh-Hans',
      'v2',
      'guide',
      'Unsupported Locale',
      '--dry-run',
    ],
    { cwd: repositoryRoot, encoding: 'utf8' }
  );

  assert.equal(result.status, 1);
  assert.match(result.stdout + result.stderr, /プロジェクトの対応言語ではありません/);
});
