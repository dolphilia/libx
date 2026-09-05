import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { prepareImportBatch } from '../../scripts/importers/batch-import-output.js';
import { describePath } from '../../scripts/importers/safe-import-output.js';

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-batch-import-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const published = path.join(root, 'apps');
  const stagingRoot = path.join(root, 'stage');
  const outputs = ['overview', 'web'].flatMap((child) => {
    const directory = path.join(published, child, 'en');
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, 'old.md'), 'old');
    const file = path.join(published, child, 'routes.json');
    fs.writeFileSync(file, '{"old":true}');
    return [
      {
        targetPath: directory,
        kind: 'directory',
        generate: (target) => fs.writeFileSync(path.join(target, 'new.md'), child),
      },
      {
        targetPath: file,
        kind: 'file',
        generate: (target) => fs.writeFileSync(target, '{"new":true}'),
      },
    ];
  });
  return { root, published, stagingRoot, outputs };
}

for (const phase of ['generate', 'validate', 'commit']) {
  test(`複数子の${phase}途中失敗では先の子の本文・索引も元に戻す`, (t) => {
    const f = fixture(t);
    const before = describePath(f.published);
    const fail = () => {
      throw new Error(`failed ${phase}`);
    };
    if (phase === 'generate') f.outputs[3].generate = fail;
    if (phase === 'validate') f.outputs[3].validate = fail;
    assert.throws(
      () =>
        prepareImportBatch({
          ...f,
          commitOptions: {
            beforeCommit: (_record, index) => {
              if (phase === 'commit' && index === 3) fail();
            },
          },
        }),
      new RegExp(`failed ${phase}`)
    );
    assert.deepEqual(describePath(f.published), before);
    assert.deepEqual(fs.readdirSync(f.stagingRoot), []);
  });
}

test('一括生成のcheckは未作成対象を作らず、成功時は旧本文を残さず全子を置換する', (t) => {
  const f = fixture(t);
  const newTarget = path.join(f.published, 'new-child', 'routes.json');
  f.outputs.push({
    targetPath: newTarget,
    kind: 'file',
    generate: (target) => fs.writeFileSync(target, '{}'),
  });
  const before = describePath(f.published);
  assert.ok(prepareImportBatch({ ...f, check: true }).every((result) => !result.matches));
  assert.deepEqual(describePath(f.published), before);
  assert.equal(fs.existsSync(path.dirname(newTarget)), false);
  prepareImportBatch(f);
  assert.ok(prepareImportBatch({ ...f, check: true }).every((result) => result.matches));
  for (const child of ['overview', 'web']) {
    assert.equal(fs.existsSync(path.join(f.published, child, 'en/old.md')), false);
    assert.equal(fs.readFileSync(path.join(f.published, child, 'en/new.md'), 'utf8'), child);
  }
  assert.deepEqual(fs.readdirSync(f.stagingRoot), []);
});

test('親子または同一パスへの重複出力は生成前に拒否する', (t) => {
  const f = fixture(t);
  const before = describePath(f.published);
  for (const targetPath of [f.outputs[0].targetPath, path.join(f.outputs[0].targetPath, 'child')]) {
    assert.throws(
      () => prepareImportBatch({ ...f, outputs: [...f.outputs, { ...f.outputs[0], targetPath }] }),
      /出力先が重複/
    );
  }
  assert.deepEqual(describePath(f.published), before);
});
