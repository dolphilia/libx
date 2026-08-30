import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const missingRoot = path.join(os.tmpdir(), 'libx-intentionally-missing-import-source');

function run(script, arguments_) {
  return execFileSync(process.execPath, [script, ...arguments_], {
    cwd: root,
    encoding: 'utf8',
    stdio: 'pipe',
  });
}

test('クリーン環境ではGLFW固定入力の再現性検査だけを明示的にスキップする', () => {
  const output = run('scripts/importers/import-glfw-3.5.1.mjs', [
    '--check',
    '--allow-missing-source',
    `--source=${path.join(missingRoot, 'glfw')}`,
  ]);
  assert.match(output, /GLFW固定入力がないため再現性検査をスキップします/);
});

test('クリーン環境ではLua固定入力の再現性検査だけを明示的にスキップする', () => {
  const output = run('scripts/importers/import-lua-5.5.1.mjs', [
    '--check',
    '--allow-missing-source',
    `--source=${path.join(missingRoot, 'lua')}`,
    `--bugs-source=${path.join(missingRoot, 'lua-bugs.html')}`,
  ]);
  assert.match(output, /Lua固定入力がないため再現性検査をスキップします/);
});
