import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  assertSafeImportTarget,
  describePath,
  prepareImportForCheck,
  prepareImportOutput,
} from '../../scripts/importers/safe-import-output.js';

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-safe-import-'));
  const allowedRoot = path.join(root, 'apps/demo/src/content/docs');
  const targetPath = path.join(allowedRoot, 'v1/en');
  fs.mkdirSync(targetPath, { recursive: true });
  fs.writeFileSync(path.join(targetPath, 'page.md'), 'original\n');
  return { root, allowedRoot, targetPath };
}

test('インポータ生成途中の失敗では既存定本を変更しない', (t) => {
  const { root, targetPath } = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const before = describePath(targetPath);

  assert.throws(
    () =>
      prepareImportOutput({
        targetPath,
        generate(preparedPath) {
          fs.writeFileSync(path.join(preparedPath, 'page.md'), 'partial\n');
          throw new Error('simulated conversion failure');
        },
        validate() {},
      }),
    /simulated conversion failure/
  );

  assert.deepEqual(describePath(targetPath), before);
  assert.equal(fs.readFileSync(path.join(targetPath, 'page.md'), 'utf8'), 'original\n');
});

test('check用生成は差分を報告して既存定本を書き換えない', (t) => {
  const { root, targetPath } = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));

  const result = prepareImportForCheck({
    targetPath,
    generate(preparedPath) {
      fs.writeFileSync(path.join(preparedPath, 'page.md'), 'changed\n');
    },
    validate() {},
  });

  assert.equal(result.matches, false);
  assert.equal(fs.readFileSync(path.join(targetPath, 'page.md'), 'utf8'), 'original\n');
});

test('インポータ出力は許可ルート内の定本言語だけを受け付ける', (t) => {
  const { root, allowedRoot, targetPath } = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));

  assert.equal(assertSafeImportTarget(targetPath, allowedRoot, 'en'), targetPath);
  assert.throws(
    () => assertSafeImportTarget(path.join(allowedRoot, 'v1/ja'), allowedRoot, 'en'),
    /定本言語ディレクトリ en/
  );
  assert.throws(
    () => assertSafeImportTarget(path.join(root, 'outside/en'), allowedRoot, 'en'),
    /許可ルート配下/
  );
});
