import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { commitPreparedPathsAtomically } from '../../scripts/atomic-paths.js';

test('複数パスの確定途中で失敗した場合はすべて変更前へ戻す', async (t) => {
  const root = await fsPromises.mkdtemp(path.join(os.tmpdir(), 'libx-atomic-paths-'));
  t.after(() => fsPromises.rm(root, { recursive: true, force: true }));

  const firstTarget = path.join(root, 'first.txt');
  const secondTarget = path.join(root, 'second.txt');
  const firstPrepared = path.join(root, '.first-prepared');
  const secondPrepared = path.join(root, '.second-prepared');
  fs.writeFileSync(firstTarget, 'first-before');
  fs.writeFileSync(secondTarget, 'second-before');
  fs.writeFileSync(firstPrepared, 'first-after');
  fs.writeFileSync(secondPrepared, 'second-after');

  assert.throws(
    () =>
      commitPreparedPathsAtomically(
        [
          { preparedPath: firstPrepared, targetPath: firstTarget },
          { preparedPath: secondPrepared, targetPath: secondTarget },
        ],
        {
          beforeCommit(_record, index) {
            if (index === 1) throw new Error('simulated commit failure');
          },
        }
      ),
    /simulated commit failure/
  );

  assert.equal(fs.readFileSync(firstTarget, 'utf8'), 'first-before');
  assert.equal(fs.readFileSync(secondTarget, 'utf8'), 'second-before');
  assert.deepEqual(fs.readdirSync(root).sort(), ['.second-prepared', 'first.txt', 'second.txt']);
});

test('複数パスを成功時にまとめて置換する', async (t) => {
  const root = await fsPromises.mkdtemp(path.join(os.tmpdir(), 'libx-atomic-paths-'));
  t.after(() => fsPromises.rm(root, { recursive: true, force: true }));

  const fileTarget = path.join(root, 'config.jsonc');
  const directoryTarget = path.join(root, 'v2');
  const filePrepared = path.join(root, '.config-prepared');
  const directoryPrepared = path.join(root, '.version-prepared');
  fs.writeFileSync(fileTarget, 'before');
  fs.writeFileSync(filePrepared, 'after');
  fs.mkdirSync(directoryPrepared);
  fs.writeFileSync(path.join(directoryPrepared, 'index.mdx'), 'content');

  commitPreparedPathsAtomically([
    { preparedPath: directoryPrepared, targetPath: directoryTarget },
    { preparedPath: filePrepared, targetPath: fileTarget },
  ]);

  assert.equal(fs.readFileSync(fileTarget, 'utf8'), 'after');
  assert.equal(fs.readFileSync(path.join(directoryTarget, 'index.mdx'), 'utf8'), 'content');
  assert.deepEqual(fs.readdirSync(root).sort(), ['config.jsonc', 'v2']);
});
