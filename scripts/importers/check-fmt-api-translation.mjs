#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { parse, parseFragment, serializeOuter } from 'parse5';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'),
  privateRoot = root,
  notes = 'docs/notes/document-import/fmt/v12-2-0',
  ev = 'docs/notes/project-expansion/runs/evidence/2026-10-03-241',
  base = privateRoot + '/apps/fmt/dist',
  rel = '/v12-2-0/',
  w = (n) => [n, ...(n.childNodes ?? []).flatMap(w)],
  a = (n, k) => n.attrs?.find((x) => x.name === k)?.value;
const t = (n) =>
    a(n, 'class') === 'docs-code-toolbar' || n.tagName === 'script'
      ? ''
      : (n.value ?? (n.childNodes ?? []).map(t).join('')),
  norm = (s) => s.replace(/\s+/g, ' ').trim(),
  hash = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const file = (lang) => base + rel + lang + '/01-docs/03-api/index.html',
  tree = (lang) => parse(fs.readFileSync(file(lang), 'utf8')),
  full = { en: tree('en'), ja: tree('ja') },
  getArticle = (tree) =>
    w(tree).find((n) => n.tagName === 'article' && a(n, 'class')?.includes('sl-markdown-content')),
  articles = { en: getArticle(full.en), ja: getArticle(full.ja) };
for (const article of Object.values(articles)) {
  assert.ok(article);
  const generated = article.childNodes.filter((n) =>
    ['navigation-container', 'document-provenance'].includes(a(n, 'class'))
  );
  assert.equal(generated.length, 2);
  article.childNodes = article.childNodes.filter((n) => !generated.includes(n));
}
const draft = JSON.parse(
    fs.readFileSync(root + '/' + notes + '/translation-drafts/ja/03-api-segments.json')
  ),
  anc = (n) => (n.parentNode ? [n.parentNode, ...anc(n.parentNode)] : []),
  select = (tree) =>
    w(tree).filter(
      (n) =>
        /^(p|li|h[2-6])$/.test(n.tagName) &&
        !anc(n).some((a) => ['pre', 'nav', 'aside'].includes(a.tagName)) &&
        !(
          n.tagName === 'li' &&
          w(n)
            .slice(1)
            .some((a) => ['p', 'li'].includes(a.tagName))
        )
    );
const segments = select(articles.ja),
  extraEmpty = [];
let next = 0;
for (let i = 0; i < segments.length; i++) {
  const n = segments[i],
    d = draft.segments[next];
  if (
    d &&
    norm(t(n)) === norm(d.translated) &&
    n.tagName === d.tag &&
    (a(n, 'id') ?? null) === d.id
  ) {
    next++;
    continue;
  }
  assert.equal(n.tagName, 'p', 'Unexpected built node' + i);
  assert.equal(t(n), '');
  assert.equal(n.attrs.length, 0);
  assert.equal(n.childNodes.length, 0);
  assert.equal(n.parentNode.tagName, 'article');
  extraEmpty.push({ builtSegment: i, beforeDraftSegment: next });
}
assert.equal(next, 286);
assert.equal(extraEmpty.length, 0);
assert.equal(segments.length, 286);

const en = w(articles.en),
  ja = w(articles.ja),
  pre = (ns) => ns.filter((n) => n.tagName === 'pre').map(t),
  code = (ns) =>
    ns
      .filter((n) => n.tagName === 'code')
      .map(t)
      .sort(),
  ids = (ns) => ns.filter((n) => a(n, 'id')).map((n) => a(n, 'id'));
assert.equal(pre(ja).length, 134);
assert.deepEqual(pre(ja), pre(en));
assert.deepEqual(code(ja), code(en));
assert.deepEqual(ids(ja), ids(en));
assert.equal(ids(ja).length, 105);
assert.equal(new Set(ids(ja)).size, 105);
const declarations = (ns) =>
  ns.filter((n) => n.tagName === 'code' && a(n, 'class') === 'language-cpp decl');
assert.equal(declarations(ja).length, 84);
assert.deepEqual(declarations(ja).map(t), declarations(en).map(t));
for (const n of declarations(ja))
  assert.ok(
    w(n).every((x) => !x.tagName || ['code', 'div'].includes(x.tagName)),
    'Unknown declaration HTML'
  );
const relocate = (h) =>
    h?.startsWith('/docs/fmt/v12-2-0/en/')
      ? h.replace('/docs/fmt/v12-2-0/en/', '/docs/fmt/v12-2-0/ja/')
      : h,
  links = (ns) => ns.filter((n) => n.tagName === 'a' && a(n, 'href')).map((n) => a(n, 'href'));
assert.deepEqual(links(ja).sort(), links(en).map(relocate).sort());
for (const href of links(ja)) {
  const url = new URL(href, 'https://libx.dev/docs/fmt/v12-2-0/ja/01-docs/03-api/');
  if (url.origin !== 'https://libx.dev') continue;
  assert.ok(url.pathname.startsWith('/docs/fmt/v12-2-0/ja/'), href);
  const dest = base + url.pathname.replace('/docs/fmt', '') + 'index.html';
  assert.ok(fs.existsSync(dest), href);
  if (url.hash)
    assert.ok(
      w(parse(fs.readFileSync(dest, 'utf8'))).some(
        (n) => a(n, 'id') === decodeURIComponent(url.hash.slice(1))
      ),
      href
    );
}
const note = JSON.parse(fs.readFileSync(root + '/' + notes + '/EDITORIAL_NOTES.json')).notes[0],
  aside = ja.filter((n) => a(n, 'class') === 'fmt-editorial-note');
assert.equal(aside.length, 1);
assert.equal(serializeOuter(aside[0]), serializeOuter(parseFragment(note.jaHTML).childNodes[0]));
const headings = ja
    .filter((n) => /^h[2-6]$/.test(n.tagName))
    .map((n) => ({ id: a(n, 'id'), text: norm(t(n)) })),
  tocs = w(full.ja).filter((n) => n.tagName === 'starlight-toc');
assert.equal(tocs.length, 2);
for (const toc of tocs) {
  const rows = w(toc)
    .filter((n) => n.tagName === 'a' && a(n, 'href')?.startsWith('#') && a(n, 'href') !== '#_top')
    .map((n) => ({ id: decodeURIComponent(a(n, 'href').slice(1)), text: norm(t(n)) }));
  assert.deepEqual(rows, headings, 'Native TOC headings');
}
const labels = (tree) =>
  w(tree)
    .filter((n) => n.tagName === 'li' && (n.childNodes ?? []).some((c) => c.tagName === 'ul'))
    .map((n) =>
      (n.childNodes ?? [])
        .filter((c) => c.nodeName === '#text')
        .map(t)
        .join('')
        .trim()
    )
    .filter(Boolean);
assert.deepEqual(labels(articles.en), ['CMake options:', 'Macros:']);
assert.deepEqual(labels(articles.ja), ['CMakeオプション：', 'マクロ：']);
const result = {
  status: 'passed',
  scope: 'Full builtJapanese API machine preservation, not semanticcontentreview',
  canonicalSHA: hash(root + '/' + draft.canonical.path),
  translationSHA: hash(root + '/' + notes + '/translations/ja/01-docs/03-api.md'),
  builtEN: hash(file('en')),
  builtJA: hash(file('ja')),
  segments: 286,
  builtSegments: 286,
  extraEmptyParagraphs: extraEmpty,
  pre: 134,
  declarations: 84,
  ids: 105,
  code: code(ja).length,
  links: links(ja).length,
  tocHeadings: headings.length,
  tocComponents: 2,
  checks: [
    'All286draft segments match in exact order without extra paragraphs',
    'All134pre in exact source order',
    'All code literals including11 repaired returns identical multiset',
    'All84 declarations and allowed tags unchanged',
    'All105 stable unique IDs and internal destinations',
    'Exact localEN-to-JA mapping; externallinks unchanged',
    'ApprovedJAeditorialnote exact HTML',
    'Desktop/mobile native TOC labels andfragments',
    'Both nested parentlist labels translated',
  ],
  fullContentReview: 'pending',
  browserUI: 'pending',
};
console.log(JSON.stringify(result));
