import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const englishRoot = path.join(
  root,
  'apps/awesome/src/awesome-content/v2026-08-20/en'
);
const japaneseRoot = path.join(
  root,
  'apps/awesome/src/awesome-content/v2026-08-20/ja'
);

function markdownFileCount(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md')).length;
}

test('Awesome英語定本の公開再現性検査は部分翻訳を保持して通過する', () => {
  assert.ok(markdownFileCount(englishRoot) > 0, '英語定本が必要です');
  assert.ok(markdownFileCount(japaneseRoot) > 0, '部分翻訳を含む検査対象が必要です');

  const output = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/publish-awesome.mjs', '--check'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(output, /Awesome single-app publish check: OK/);
});

test('全件翻訳ゲートは未翻訳ページを明示して停止する', () => {
  assert.throws(
    () =>
      execFileSync(
        process.execPath,
        ['scripts/importers/awesome/validate-awesome-translation.mjs', '--require-complete'],
        { cwd: root, encoding: 'utf8', stdio: 'pipe' }
      ),
    (error) => {
      assert.match(error.stderr, /日本語ページが未翻訳です/);
      assert.match(error.stderr, /overview\/sindresorhus-awesome\.md/);
      return true;
    }
  );
});
