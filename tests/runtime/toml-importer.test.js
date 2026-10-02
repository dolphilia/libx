import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  importCanonical,
  readLockedSources,
  validateCanonicalDirectory,
} from '../../scripts/importers/import-toml-1.1.0.mjs';
import { describePath } from '../../scripts/importers/safe-import-output.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const sourceRoot = path.join(root, 'docs/notes/document-import/toml/v1-1-0/source');

test('TOML全文・70コード・ABNF・両MITを保全し、二度の生成が一致し訳文を変更しない', () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-toml-import-'));
  try {
    const allowedRoot = path.join(fixture, 'docs');
    const outputRoot = path.join(allowedRoot, 'v1-1-0/en');
    const translation = path.join(allowedRoot, 'v1-1-0/ja/translation.md');
    fs.mkdirSync(path.dirname(translation), { recursive: true });
    fs.writeFileSync(translation, '既存訳文を保持する\n');
    const options = { sourceRoot, outputRoot, allowedRoot };
    importCanonical(options);
    const first = describePath(outputRoot);
    importCanonical(options);
    assert.deepEqual(describePath(outputRoot), first);
    assert.equal(importCanonical({ ...options, check: true }).matches, true);
    validateCanonicalDirectory(outputRoot, readLockedSources(sourceRoot));
    assert.equal(fs.readFileSync(translation, 'utf8'), '既存訳文を保持する\n');
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});

test('固定入力不一致と出力先の逸脱を拒否し、既存定本を壊さない', () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-toml-failure-'));
  try {
    const input = path.join(fixture, 'source');
    fs.cpSync(sourceRoot, input, { recursive: true });
    const allowedRoot = path.join(fixture, 'docs');
    const outputRoot = path.join(allowedRoot, 'v1-1-0/en');
    importCanonical({ sourceRoot: input, outputRoot, allowedRoot });
    const before = describePath(outputRoot);
    fs.appendFileSync(path.join(input, 'toml.abnf'), '; unverified alteration\n');
    assert.throws(
      () => importCanonical({ sourceRoot: input, outputRoot, allowedRoot }),
      /固定入力SHA-256不一致/
    );
    assert.deepEqual(describePath(outputRoot), before);
    assert.throws(
      () => importCanonical({ sourceRoot, outputRoot: path.join(fixture, 'en'), allowedRoot }),
      /許可ルート配下/
    );
    assert.throws(
      () =>
        importCanonical({
          sourceRoot,
          outputRoot: path.join(allowedRoot, 'v1-1-0/ja'),
          allowedRoot,
        }),
      /定本言語ディレクトリ en/
    );
    assert.deepEqual(describePath(outputRoot), before);
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});

test('原文のsymlinkを拒否する', () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-toml-symlink-'));
  try {
    fs.cpSync(sourceRoot, path.join(fixture, 'source'), { recursive: true });
    const file = path.join(fixture, 'source/toml.abnf');
    fs.rmSync(file);
    fs.symlinkSync(path.join(sourceRoot, 'toml.abnf'), file);
    assert.throws(() => readLockedSources(path.join(fixture, 'source')), /通常ファイルのみ/);
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});
