import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parseFragment } from 'parse5';
const start = Number(process.argv[2] ?? 110),
  end = Number(process.argv[3] ?? 128);
assert(
  [
    [110, 128],
    [129, 142],
    [143, 163],
  ].some((r) => r[0] === start && r[1] === end)
);
const raw = fs.readFileSync('src/content/docs/v1-3-2/en/01-api/06-gzip.md', 'utf8'),
  draft = fs.readFileSync(`meta/translation-drafts/06-gzip-${start}-${end}.md`, 'utf8'),
  source =
    start === 143
      ? '---\n---\n<div data-zlib-block="143"' + raw.split('<div data-zlib-block="143"', 2)[1]
      : start === 110
        ? raw.split('<a id="gzprintf"', 1)[0] + '</div>\n'
        : '---\n---\n<a id="gzprintf"' +
          raw.split('<a id="gzprintf"', 2)[1].split('<div data-zlib-block="143"')[0];
const doc = (s) => parseFragment(s.split('---', 3)[2]),
  at = (n, k) => n.attrs?.find((a) => a.name === k)?.value,
  walk = (n, p) => [...(p(n) ? [n] : []), ...(n.childNodes ?? []).flatMap((c) => walk(c, p))],
  txt = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(txt).join(''));
const en = doc(source),
  ja = doc(draft),
  blocks = (d) => walk(d, (n) => at(n, 'data-zlib-block') !== undefined),
  ids = (d) => walk(d, (n) => at(n, 'id')).map((n) => at(n, 'id')),
  codes = (d) => walk(d, (n) => n.nodeName === 'code' && n.parentNode?.nodeName === 'pre').map(txt),
  strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '');
assert.deepEqual(
  blocks(ja).map((n) => +at(n, 'data-zlib-block')),
  Array.from({ length: end - start + 1 }, (_, i) => start + i)
);
assert.deepEqual(ids(en), ids(ja));
assert.deepEqual(codes(en).map(strip), codes(ja).map(strip));
const urls = (d) =>
  walk(d, (n) => n.nodeName === 'a')
    .map((n) => at(n, 'href'))
    .sort();
const additions = start === 110 ? ['../01-overview/'] : [];
assert.deepEqual([...urls(en), ...additions].sort(), urls(ja));
assert(!fs.existsSync('src/content/docs/v1-3-2/ja/01-api/06-gzip.md'));
console.log(
  JSON.stringify({
    status: 'passed-fragment-machine-only',
    blocks: blocks(ja).length,
    range: [start, end],
    codeFragments: codes(ja).length,
    nonCommentCodeExact: true,
    allIdsExact: true,
    allSourceLinksRetained: true,
    editorialAdditions: additions,
    fragmentOutsideRoutes: true,
    remainingBlocks: end === 163 ? [] : [end + 1, 163],
    wholePageReview: 'pending',
    native: 'pending',
    fragmentContentReview: 'separate',
  })
);
