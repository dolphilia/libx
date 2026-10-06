import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { gzipSync, gunzipSync } from 'node:zlib';
import {
  editorial,
  hash,
  json,
  jsonExists,
  save,
} from '../../scripts/importers/awesome/editorial-utils.mjs';
import { normalizeEditorialCodeTokens } from '../../scripts/importers/awesome/editorial-overlays.mjs';

function fixture(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-editorial-json-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  return path.join(directory, 'record.json');
}

test('通常JSONとgzip JSONを論理パス・物理パスから読み、更新時の保存形式を保持する', (t) => {
  const file = fixture(t);
  const first = { sourceId: 'fixture', text: '日本語と絵文字 🐈', review: { passed: true } };
  assert.equal(jsonExists(file), false);
  assert.throws(() => json(file), { code: 'ENOENT' });
  save(file, first);
  assert.deepEqual(json(file), first);
  assert.equal(jsonExists(file), true);
  assert.throws(() => save(`${file}.gz`, first), /非圧縮JSONが残っています/);
  fs.writeFileSync(`${file}.gz`, gzipSync(fs.readFileSync(file)));
  fs.unlinkSync(file);
  assert.equal(jsonExists(file), true);
  assert.equal(jsonExists(`${file}.gz`), true);
  assert.deepEqual(json(file), first);
  assert.deepEqual(json(`${file}.gz`), first);
  const updated = { ...first, review: { passed: false } };
  save(file, updated);
  assert.equal(fs.existsSync(file), false);
  assert.deepEqual(json(file), updated);
  assert.equal(
    gunzipSync(fs.readFileSync(`${file}.gz`)).toString('utf8'),
    `${JSON.stringify(updated, null, 2)}\n`
  );
  const compressed = fs.readFileSync(`${file}.gz`);
  save(`${file}.gz`, updated);
  assert.deepEqual(fs.readFileSync(`${file}.gz`), compressed);
  assert.deepEqual(fs.readdirSync(path.dirname(file)), ['record.json.gz']);
});

test('明示したgzipパスへの新規保存をサポートする', (t) => {
  const file = fixture(t);
  save(`${file}.gz`, { value: 1 });
  assert.deepEqual(json(file), { value: 1 });
  assert.equal(fs.existsSync(file), false);
});

test('壊れたgzip・不正JSON・保存形式の重複を隠さず、保存失敗で既存データを保持する', (t) => {
  const file = fixture(t);
  fs.writeFileSync(`${file}.gz`, 'broken gzip');
  assert.throws(() => json(file));
  fs.writeFileSync(`${file}.gz`, gzipSync('not JSON'));
  assert.throws(() => json(file), SyntaxError);
  save(file, { value: 1 });
  const before = fs.readFileSync(`${file}.gz`);
  const cyclic = {};
  cyclic.self = cyclic;
  assert.throws(() => save(file, cyclic), TypeError);
  assert.deepEqual(fs.readFileSync(`${file}.gz`), before);
  fs.writeFileSync(file, '{"stale":true}');
  assert.throws(() => json(file), /保存形式が重複/);
  assert.throws(() => json(`${file}.gz`), /保存形式が重複/);
  assert.throws(() => jsonExists(file), /保存形式が重複/);
  assert.throws(() => save(file, { value: 2 }), /保存形式が重複/);
  assert.throws(() => save(`${file}.gz`, { value: 2 }), /保存形式が重複/);
  assert.deepEqual(fs.readFileSync(`${file}.gz`), before);
  assert.equal(fs.readFileSync(file, 'utf8'), '{"stale":true}');
  assert.equal(fs.readdirSync(path.dirname(file)).length, 2);
});

test('原子的置換の失敗時には一時ファイルを残さない', (t) => {
  const file = fixture(t);
  fs.mkdirSync(`${file}.gz`);
  assert.throws(() => save(file, { value: 1 }));
  assert.deepEqual(fs.readdirSync(path.dirname(file)), ['record.json.gz']);
});

test('圧縮した判断記録の表示トークンとハッシュ検査を省略しない', (t) => {
  const directory = fs.mkdtempSync(path.join(editorial, 'v-gzip-fixture-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const version = path.basename(directory);
  const file = path.join(directory, 'fixture.json.gz');
  const content = 'fixture content';
  save(file, {
    hashes: { en: hash(content) },
    displayTokens: [
      {
        id: 'warning',
        kind: 'display-only',
        en: 'Warning',
        reason: 'fixture',
        evidence: 'fixture',
        positions: { en: [0] },
      },
    ],
  });
  assert.deepEqual(
    normalizeEditorialCodeTokens(['Warning', 'Warning'], content, 'fixture', version, 'en'),
    ['warning', 'Warning']
  );
  assert.throws(
    () => normalizeEditorialCodeTokens(['Warning'], `${content}!`, 'fixture', version, 'en'),
    /判断記録が古い/
  );
});
