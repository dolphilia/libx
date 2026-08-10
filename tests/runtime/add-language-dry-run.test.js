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

test('add-languageのdry-runは変更予定を表示し、プロジェクトとlandingを変更しない', () => {
  const projectSource = path.join(repositoryRoot, 'apps', 'test-verification', 'src');
  const landingConfig = path.join(
    repositoryRoot,
    'sites',
    'landing',
    'src',
    'config',
    'projects.config.jsonc'
  );
  const beforeProject = hashDirectory(projectSource);
  const beforeLanding = fs.readFileSync(landingConfig, 'utf8');

  const result = spawnSync(
    process.execPath,
    [
      'scripts/add-language.js',
      'test-verification',
      'ar',
      '--template-lang=en',
      '--auto-template',
      '--dry-run',
    ],
    { cwd: repositoryRoot, encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /dry-run/);
  assert.match(result.stdout, /landingのUI言語設定は変更しません/);
  assert.equal(hashDirectory(projectSource), beforeProject);
  assert.equal(fs.readFileSync(landingConfig, 'utf8'), beforeLanding);
  assert.equal(
    fs.existsSync(
      path.join(repositoryRoot, 'apps', 'test-verification', 'src', 'content', 'docs', 'v1', 'ar')
    ),
    false
  );
});
