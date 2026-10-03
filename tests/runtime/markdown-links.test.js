import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { collectAnchors, checkFile } from '../../scripts/check-markdown-links.js';

test('HTML id and named anchors are checked with exact case and duplicate headings remain valid', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-markdown-anchor-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'page.md');
  fs.writeFileSync(
    file,
    [
      '# Heading',
      '# Heading',
      '<span class="anchor" id="source-PUGIXML_API"></span>',
      "<a name='legacy'></a>",
      '<!-- <span id="comment"></span> -->',
      '`<span id="inline-code"></span>`',
      '```html',
      '<span id="fenced-code"></span>',
      '```',
      '<pre><code>&lt;span id="escaped-code"&gt;</code></pre>',
      '[explicit](#source-PUGIXML_API) [named](#legacy) [duplicate](#heading-1)',
      '[wrong case](#source-pugixml_api) [missing](#absent)',
    ].join('\n')
  );
  const anchors = collectAnchors(file);
  assert.ok(anchors.has('source-PUGIXML_API'));
  assert.ok(anchors.has('legacy'));
  for (const invalid of ['comment', 'inline-code', 'fenced-code', 'escaped-code'])
    assert.ok(!anchors.has(invalid));
  assert.deepEqual(
    checkFile(file).map((x) => x.target),
    ['#source-pugixml_api', '#absent']
  );
});

test('source heading markers need an adjacent heading and cannot come from literal code', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-source-heading-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'page.md');
  fs.writeFileSync(
    file,
    [
      '<!--libx-source-heading:Macro_reference-->',
      '',
      '# 日本語見出し',
      '<!--libx-source-heading:orphan-->',
      '',
      'not a heading',
      '```md',
      '<!--libx-source-heading:literal-->',
      '# Code',
      '```',
      '[valid](#Macro_reference) [wrong](#macro_reference) [orphan](#orphan) [code](#literal)',
    ].join('\n')
  );
  assert.deepEqual(
    checkFile(file).map((x) => x.target),
    ['#macro_reference', '#orphan', '#literal']
  );
});

test('split drafts check fragments against a byte-identical assembled document', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-link-context-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const first = '[other section](#target) [missing](#absent)\n';
  const last = '<!--libx-source-heading:target-->\n# 別の節\n';
  fs.writeFileSync(path.join(dir, 'first.md'), first);
  fs.writeFileSync(path.join(dir, 'last.md'), last);
  fs.writeFileSync(path.join(dir, 'whole.md'), first + last);
  fs.writeFileSync(
    path.join(dir, 'link-context.json'),
    JSON.stringify({
      target: 'whole.md',
      segments: ['first.md', 'last.md'],
    })
  );
  assert.deepEqual(
    checkFile(path.join(dir, 'first.md')).map((x) => x.target),
    ['#absent']
  );
  fs.appendFileSync(path.join(dir, 'last.md'), 'changed');
  assert.match(checkFile(path.join(dir, 'first.md'))[0].reason, /結合.*一致しません/);
});

test('Setext headings and ATX duplicates share anchors while fenced literals do not', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-setext-anchor-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'page.md');
  fs.writeFileSync(
    file,
    [
      'Introduction',
      '============',
      '',
      '# Introduction',
      '',
      'API details',
      '-----------',
      '',
      '```md',
      'Literal',
      '=======',
      '```',
      '',
      '[intro](#introduction) [duplicate](#introduction-1) [api](#api-details) [literal](#literal)',
    ].join('\n')
  );
  assert.deepEqual(
    checkFile(file).map((x) => x.target),
    ['#literal']
  );
});

test('pinned progress snapshots check final fragments without hiding missing links or stale bytes', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-snapshot-context-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const draft = path.join(dir, 'draft.md'),
    final = path.join(dir, 'final.md');
  fs.writeFileSync(draft, '[later](#later) [missing](#absent)\n');
  fs.writeFileSync(final, '# Later\n');
  const hash = (file) => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  fs.writeFileSync(
    path.join(dir, 'link-context.json'),
    JSON.stringify({
      target: 'final.md',
      targetSHA256: hash(final),
      snapshots: [{ file: 'draft.md', sha256: hash(draft) }],
    })
  );
  assert.deepEqual(
    checkFile(draft).map((x) => x.target),
    ['#absent']
  );
  fs.appendFileSync(final, 'changed');
  assert.match(checkFile(draft)[0].reason, /ハッシュ/);
  fs.writeFileSync(final, '# Later\n');
  fs.appendFileSync(draft, 'changed');
  assert.match(checkFile(draft)[0].reason, /ハッシュ/);
});
