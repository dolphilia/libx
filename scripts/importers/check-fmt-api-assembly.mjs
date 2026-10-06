#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { parseFragment, serializeOuter } from 'parse5';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'),
  notes = 'docs/notes/document-import/fmt/v12-2-0',
  ev = 'docs/notes/project-expansion/runs/evidence/2026-10-03-239',
  walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)],
  txt = (n) => n.value ?? (n.childNodes ?? []).map(txt).join(''),
  attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value,
  norm = (s) => s.replace(/\s+/g, ' ').trim();
const locked = JSON.parse(
  fs.readFileSync(root + '/' + notes + '/generated/API_ASSEMBLY_INPUTS.json')
);
for (const r of locked.inputs) {
  assert.ok(r.path.startsWith(notes + '/') && !r.path.includes('..'));
  assert.ok(!fs.lstatSync(root + '/' + r.path).isSymbolicLink());
  assert.equal(
    crypto
      .createHash('sha256')
      .update(fs.readFileSync(root + '/' + r.path))
      .digest('hex'),
    r.sha256,
    'Assembly input SHA mismatch ' + r.path
  );
}
const draft = JSON.parse(
  fs.readFileSync(root + '/' + notes + '/translation-drafts/ja/03-api-segments.json')
);
assert.equal(draft.segments.length, 286);
assert.equal(
  crypto
    .createHash('sha256')
    .update(fs.readFileSync(root + '/' + draft.canonical.path))
    .digest('hex'),
  draft.canonical.sha256
);
const tree = parseFragment(
    fs.readFileSync(root + '/' + notes + '/generated/API_ASSEMBLY_SOURCE.html', 'utf8')
  ),
  anc = (n) => (n.parentNode ? [n.parentNode, ...anc(n.parentNode)] : []);
const select = (tree) =>
  walk(tree).filter(
    (n) =>
      /^(p|li|h[2-6])$/.test(n.tagName) &&
      !anc(n).some((a) => ['pre', 'nav', 'aside'].includes(a.tagName)) &&
      !(
        n.tagName === 'li' &&
        walk(n)
          .slice(1)
          .some((a) => ['p', 'li'].includes(a.tagName))
      )
  );
const segments = select(tree);
console.log(JSON.stringify({ selected: segments.length }));
assert.equal(segments.length, 286);
const beforePre = walk(tree)
    .filter((n) => n.tagName === 'pre')
    .map(serializeOuter),
  beforeIds = walk(tree)
    .filter((n) => attr(n, 'id'))
    .map((n) => attr(n, 'id')),
  beforeLinks = walk(tree)
    .filter((n) => n.tagName === 'a')
    .map((n) => attr(n, 'href'));
const inlineLabels = {
  'Type Erasure': '型消去',
  'Chrono Format Specifications': 'Chronoの書式指定',
  run: '実行',
  'format string syntax': '書式文字列の構文',
  Example: '例',
  'library feature': 'ライブラリー機能',
  'printf format string syntax': 'printfの書式文字列構文',
  'C++20 formatting library': 'C++20の書式設定ライブラリー',
};
function set(n, translation, i) {
  const codes = walk(n)
      .filter((x) => x.tagName === 'code')
      .map(txt)
      .sort(),
    links = walk(n)
      .filter((x) => x.tagName === 'a')
      .map((x) => attr(x, 'href'))
      .sort();
  let result = translation;
  const children = (n.childNodes ?? [])
      .filter((c) => c.tagName)
      .sort((a, b) => txt(b).length - txt(a).length),
    protectedHTML = [];
  children.forEach((c, j) => {
    const original = txt(c),
      label = norm(original),
      translated = !walk(c).some((x) => x.tagName === 'code')
        ? (inlineLabels[label] ?? original)
        : original;
    const needle = result.includes(translated) ? translated : norm(translated);
    assert.ok(result.includes(needle), 'Missing inline ' + i + ':' + JSON.stringify(original));
    const marker = String.fromCharCode(0xe000 + j);
    result = result.replace(needle, marker);
    let html = serializeOuter(c);
    if (translated !== original) {
      const fragment = parseFragment(html),
        a = fragment.childNodes[0];
      a.childNodes = [{ nodeName: '#text', value: translated, parentNode: a }];
      html = serializeOuter(a);
    }
    protectedHTML.push({ marker, html });
  });
  result = result.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  for (const p of protectedHTML) result = result.replace(p.marker, p.html);
  const f = parseFragment(result);
  n.childNodes = f.childNodes;
  for (const c of n.childNodes) c.parentNode = n;
  assert.equal(norm(txt(n)), norm(translation), 'Translation text mismatch' + i);
  assert.deepEqual(
    walk(n)
      .filter((x) => x.tagName === 'code')
      .map(txt)
      .sort(),
    codes
  );
  assert.deepEqual(
    walk(n)
      .filter((x) => x.tagName === 'a')
      .map((x) => attr(x, 'href'))
      .sort(),
    links
  );
}
segments.forEach((n, i) => {
  const d = draft.segments[i];
  assert.equal(norm(txt(n)), norm(d.text), 'Source segment' + i);
  assert.equal(n.tagName, d.tag);
  assert.equal(attr(n, 'id') ?? null, d.id);
  set(n, d.translated, i);
});
const h1 = walk(tree).filter((n) => n.tagName === 'h1');
assert.equal(h1.length, 1);
set(h1[0], 'APIリファレンス', 'title');
const note = JSON.parse(fs.readFileSync(root + '/' + notes + '/EDITORIAL_NOTES.json')).notes[0],
  asides = walk(tree).filter((n) => attr(n, 'class') === 'fmt-editorial-note');
assert.equal(asides.length, 1);
assert.equal(serializeOuter(asides[0]), serializeOuter(parseFragment(note.enHTML).childNodes[0]));
const old = asides[0],
  parent = old.parentNode,
  next = parseFragment(note.jaHTML).childNodes[0];
next.parentNode = parent;
parent.childNodes[parent.childNodes.indexOf(old)] = next;
const localPrefix = '/docs/fmt/v12-2-0/en/';
for (const n of walk(tree).filter((n) => n.tagName === 'a')) {
  const href = n.attrs.find((a) => a.name === 'href');
  if (href?.value.startsWith(localPrefix))
    href.value = href.value.replace(localPrefix, '/docs/fmt/v12-2-0/ja/');
}
assert.deepEqual(
  walk(tree)
    .filter((n) => n.tagName === 'pre')
    .map(serializeOuter),
  beforePre
);
assert.deepEqual(
  walk(tree)
    .filter((n) => attr(n, 'id'))
    .map((n) => attr(n, 'id')),
  beforeIds
);
assert.deepEqual(
  walk(tree)
    .filter((n) => n.tagName === 'a')
    .map((n) => attr(n, 'href'))
    .sort(),
  beforeLinks
    .map((h) => (h?.startsWith(localPrefix) ? h.replace(localPrefix, '/docs/fmt/v12-2-0/ja/') : h))
    .sort()
);
const parents = walk(tree).filter(
  (n) => n.tagName === 'li' && (n.childNodes ?? []).some((c) => c.tagName === 'ul')
);
let labelCount = 0;
for (const n of parents)
  for (const child of n.childNodes ?? [])
    if (child.nodeName === '#text') {
      const label = child.value.trim();
      if (label === 'CMake options:' || label === 'Macros:') {
        child.value = child.value.replace(
          label,
          label === 'CMake options:' ? 'CMakeオプション：' : 'マクロ：'
        );
        labelCount++;
      }
    }
assert.equal(labelCount, 2);
const whitespace = (pre) =>
  pre.replace(
    />([^<]*)</g,
    (_, text) =>
      '>' + text.replaceAll(' ', '&#32;').replaceAll('\n', '&#10;').replaceAll('\t', '&#9;') + '<'
  );
const output =
  '---\ntitle: "APIリファレンス"\nlicenseSource: "fmt-12-2-0"\n---\n\n' +
  tree.childNodes
    .map(serializeOuter)
    .join('')
    .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/g, whitespace) +
  '\n';
const targets = [
  notes + '/translations/ja/01-docs/03-api.md',
  'apps/fmt/src/content/docs/v12-2-0/ja/01-docs/03-api.md',
];
for (const target of targets)
  assert.equal(
    fs.readFileSync(root + '/' + target, 'utf8'),
    output,
    'SavedJapanese API differs from deterministic assembly: ' + target
  );
console.log(
  JSON.stringify({
    status: 'passed',
    mode: 'readonly-regeneration-comparison',
    targets,
    segments: 286,
    nestedLabels: 2,
    pre: 134,
    codeWhitespace: 'numeric entities; decoded text unchanged',
    sha256: crypto.createHash('sha256').update(output).digest('hex'),
    llmInvoked: false,
  })
);
