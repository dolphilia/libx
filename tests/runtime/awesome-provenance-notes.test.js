import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import { provenanceNotesBySource } from '../../scripts/importers/awesome/editorial-provenance-notes.mjs';
import { hash } from '../../scripts/importers/awesome/editorial-utils.mjs';
import { validateProjectConfigJSON } from '../../packages/project-config/src/config-schema.ts';
import { stripJsonComments } from '../../packages/project-config/src/jsonc-runtime.js';
import { validateHtml } from '../../scripts/importers/awesome/editorial-html-validation.mjs';

const raw = 'Title\nRecorded declaration\n';
const license = 'Copyright 2018 Author\n';
const source = {
  commitSha: 'fixed', documentPath: 'README.md', documentSha256: hash(raw),
  licensePath: 'LICENSE', licenseSha256: hash(license),
};
const note = {
  text: { en: 'Recorded declaration', ja: '原文の声明' },
  evidence: { documentPath: 'README.md', sha256: hash(raw), lines: [2, 2], excerptHash: hash('Recorded declaration') },
};
const record = { sourceId: 'list', commitSha: 'fixed', reason: '出典へ集約', notes: [note] };
const sources = new Map([['list', source]]);
const read = (value) => value === hash(raw) ? raw : license;

test('原文と別ファイルのライセンス通知は固定コミット・ハッシュ・該当行を必要とする', () => {
  const licenseNote = {
    text: { en: 'Copyright 2018 Author', ja: 'Copyright 2018 Author' },
    evidence: { documentPath: 'LICENSE', sha256: hash(license), lines: [1, 1], excerptHash: hash('Copyright 2018 Author') },
  };
  assert.deepEqual(provenanceNotesBySource([{ ...record, notes: [note, licenseNote] }], sources, read).get('list'), [note.text, licenseNote.text]);
  for (const invalid of [
    { ...record, commitSha: 'changed' },
    { ...record, notes: [] },
    { ...record, notes: [{ ...note, text: { en: 'x', ja: '' } }] },
    ...[{ lines: [1, 1] }, { lines: [2, 20] }, { lines: [0, 1] }, { documentPath: 'OTHER' }, { sha256: 'changed' }, { excerptHash: 'changed' }]
      .map((change) => ({ ...record, notes: [{ ...note, evidence: { ...note.evidence, ...change } }] })),
  ]) assert.throws(() => provenanceNotesBySource([invalid], sources, read));
  assert.throws(() => provenanceNotesBySource([record, record], sources, read));
  assert.throws(() => provenanceNotesBySource([record], sources, () => raw.replace('Recorded', 'Changed')));
  assert.throws(() => provenanceNotesBySource({}, sources, read));
});

test('任意の出典通知は両言語が揃い、既存の通知なし設定も受け入れる', () => {
  const config = JSON.parse(stripJsonComments(fs.readFileSync(new URL('../../templates/docs-site/src/config/project.config.jsonc', import.meta.url), 'utf8')));
  assert.equal(validateProjectConfigJSON(config), true);
  const s = config.licensing.sources[0];
  s.provenanceNotes = [note.text];
  assert.equal(validateProjectConfigJSON(config), true);
  for (const invalid of [null, {}, [{ en: 'EN' }], [{ en: '', ja: 'JA' }], [null]]) {
    s.provenanceNotes = invalid;
    assert.equal(validateProjectConfigJSON(config), false);
  }
});

test('出典通知はページの言語で出典欄へ表示される必要がある', () => {
  const s = { sourceUrl: 'https://source.example', licenseUrl: 'https://license.example', provenanceNotes: [note.text] };
  const page = (lang, body, footer) => `<html lang="${lang}"><article class="sl-markdown-content"><h1>Title</h1><p>${body}</p><aside class="document-provenance"><a href="https://source.example">Source</a><a href="https://license.example">License</a><p>${footer}</p></aside></article></html>`;
  assert.deepEqual(validateHtml(page('en', '', note.text.en), { licenseSource: s }).errors, []);
  assert.deepEqual(validateHtml(page('ja', '', note.text.ja), { licenseSource: s }).errors, []);
  assert.ok(validateHtml(page('ja', note.text.ja, note.text.en), { licenseSource: s }).errors.includes('出典の原文通知欠落'));
  assert.ok(validateHtml(page('en', note.text.en, ''), { licenseSource: s }).errors.includes('出典の原文通知欠落'));
});
