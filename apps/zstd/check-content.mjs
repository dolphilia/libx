// Fixed-source replay and review binding checks. This does not replace the AI content review.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { parse as parseHtml } from 'parse5';
import { generateZstdCanonical } from '../../scripts/importers/import-zstd-1.5.7.mjs';

const app = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(app, '../..');
const notes = path.join(root, 'docs/notes/document-import/zstd/v1-5-7');
const hash = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const parser = unified().use(remarkParse).use(remarkGfm);
const walk = (n, type) => [
  ...(n.type === type ? [n] : []),
  ...(n.children ?? []).flatMap((c) => walk(c, type)),
];
const htmlFind = (n, predicate) => [
  ...(predicate(n) ? [n] : []),
  ...(n.childNodes ?? []).flatMap((c) => htmlFind(c, predicate)),
];
const attribute = (n, key) => n.attrs?.find((a) => a.name === key)?.value;
const htmlText = (n) =>
  n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(htmlText).join('');
const files = (directory, prefix = '') =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      assert(!entry.isSymbolicLink(), 'Symlink in document corpus');
      const name = path.join(prefix, entry.name);
      return entry.isDirectory() ? files(path.join(directory, entry.name), name) : [name];
    })
    .sort();
const anchors = (text) => [...text.matchAll(/<a id="([^"]+)"/g)].map((m) => m[1]);
const numericCells = (tree) =>
  walk(tree, 'table').map((t) =>
    t.children.map((r) =>
      r.children
        .map((c) =>
          walk(c, 'text')
            .map((x) => x.value)
            .join('')
            .trim()
        )
        .filter((v) => /^(?:[0-9]+(?:[- ]+[0-9]+)?|[01x]+|N\/A)$/.test(v))
    )
  );
const sourceFile = path.join(app, 'public/source/v1-5-7/zstd_compression_format.md');
const source = fs.readFileSync(sourceFile, 'utf8');
const generated = generateZstdCanonical(sourceFile);
const expected = generated.map((p) => p.id).sort();
assert.equal(generated.length, 9);
assert.equal(
  fs.readFileSync(path.join(app, 'public/source/v1-5-7/NOTICE.txt'), 'utf8'),
  source.trimEnd().split('\n').slice(5, 15).join('\n') + '\n'
);
const reviews = json(path.join(notes, 'REVIEW_MANIFEST.json'));
assert.equal(reviews.completedPages, 9);
assert.equal(reviews.unreviewedPages, 0);
assert.deepEqual([...reviews.scope].sort(), expected);
assert.deepEqual(reviews.pages.map((p) => p.id).sort(), expected);
const corpus = new Map();
const rendered = process.argv.includes('--rendered');
let links = 0,
  renderedPages = 0;
for (const lang of ['en', 'ja'])
  assert.deepEqual(files(path.join(app, 'src/content/docs/v1-5-7', lang)), expected);
for (const p of generated) {
  const review = reviews.pages.find((r) => r.id === p.id);
  assert.equal(review.status, 'passed');
  assert.equal(review.method, 'ai-content-review');
  assert(review.separateReviewPass && review.reviewedAt && review.model && review.findings.length);
  for (const [role, lang] of [
    ['source', null],
    ['canonical', 'en'],
    ['translation', 'ja'],
  ]) {
    const ref = review[role];
    assert(!path.isAbsolute(ref.path) && !ref.path.split(/[\\/]/).includes('..'));
    const location = path.join(root, ref.path);
    assert.equal(hash(location), ref.sha256, 'Review evidence changed: ' + ref.path);
    const content = fs.readFileSync(location, 'utf8');
    let next = 1;
    for (const [a, b] of ref.coverage) {
      assert.equal(a, next);
      assert(b >= a);
      next = b + 1;
    }
    assert.equal(next, content.replace(/\n$/, '').split('\n').length + 1);
    if (lang)
      assert.equal(
        fs.readFileSync(path.join(app, 'src/content/docs/v1-5-7', lang, p.id), 'utf8'),
        content,
        'Deployed and reviewed content differ'
      );
  }
  const enFile = path.join(app, 'src/content/docs/v1-5-7/en', p.id);
  assert.equal(fs.readFileSync(enFile, 'utf8'), p.content, 'Canonical replay drift: ' + p.id);
  const en = matter(p.content),
    ja = matter(fs.readFileSync(path.join(app, 'src/content/docs/v1-5-7/ja', p.id), 'utf8'));
  const a = parser.parse(en.content),
    b = parser.parse(ja.content);
  assert.equal(en.data.documentId, ja.data.documentId);
  assert.equal(en.data.licenseSource, 'zstd-format-0.4.3');
  assert.equal(ja.data.licenseSource, en.data.licenseSource);
  assert.deepEqual(
    walk(a, 'code').map((n) => n.value),
    walk(b, 'code').map((n) => n.value)
  );
  assert.deepEqual(
    walk(a, 'heading').map((n) => n.depth),
    walk(b, 'heading').map((n) => n.depth)
  );
  assert.deepEqual(
    walk(a, 'table').map((t) => t.children.map((r) => r.children.length)),
    walk(b, 'table').map((t) => t.children.map((r) => r.children.length))
  );
  assert.deepEqual(numericCells(a), numericCells(b));
  assert.deepEqual(anchors(en.content), anchors(ja.content));
  for (const [lang, doc, tree] of [
    ['en', en, a],
    ['ja', ja, b],
  ]) {
    const route = `/docs/zstd/v1-5-7/${lang}/${p.id.replace(/\.md$/, '')}`;
    const ids = anchors(doc.content);
    assert.equal(new Set(ids).size, ids.length);
    // Japanese word adjacency can make underscore emphasis render as literal markers.
    if (lang === 'ja')
      for (const text of walk(tree, 'text'))
        assert(
          !/_{1,2}(?:リトルエンディアン|確率|シーケンス|すべて|ビット|逆方向)_{1,2}/.test(
            text.value
          ),
          'Literal formatting marker: ' + p.id
        );
    const context = doc.data.documentContext.map((c) => c.html).join('');
    assert(
      context.includes('f8745da6ff1ad1e7bab384bd1f9d742439278e99') &&
        context.includes('NOTICE.txt') &&
        context.includes('zstd_compression_format.md')
    );
    if (p.id.endsWith('/07-huffman.md')) assert(context.includes('E/F'));
    corpus.set(route, { tree, ids });
    if (rendered) {
      const dom = parseHtml(
        fs.readFileSync(
          path.join(app, 'dist/v1-5-7', lang, p.id.replace(/\.md$/, ''), 'index.html'),
          'utf8'
        )
      );
      const article = htmlFind(dom, (n) => n.nodeName === 'article')[0];
      assert(article);
      for (const id of ids) assert.equal(htmlFind(dom, (n) => attribute(n, 'id') === id).length, 1);
      assert.equal(
        htmlFind(article, (n) => n.nodeName === 'table').length,
        walk(tree, 'table').length
      );
      assert.deepEqual(
        htmlFind(article, (n) => n.nodeName === 'pre').map(htmlText),
        walk(tree, 'code').map((n) => n.value)
      );
      assert(htmlText(dom).includes(lang === 'ja' ? '非公式日本語訳' : 'unofficial edition'));
      renderedPages++;
    }
  }
}
for (const [route, { tree }] of corpus) {
  const definitions = new Map(walk(tree, 'definition').map((n) => [n.identifier, n.url]));
  const urls = walk(tree, 'link')
    .map((n) => n.url)
    .concat(
      walk(tree, 'linkReference')
        .map((n) => definitions.get(n.identifier))
        .filter(Boolean)
    );
  for (const href of urls) {
    if (!href.startsWith('#') && !href.startsWith('/docs/zstd/v1-5-7/')) continue;
    const url = new URL(href, 'https://libx.dev' + route);
    const target = corpus.get(url.pathname.replace(/\/$/, ''));
    assert(target, 'Missing internal chapter: ' + href);
    if (url.hash)
      assert(
        target.ids.includes(decodeURIComponent(url.hash.slice(1))),
        'Missing source anchor: ' + href
      );
    links++;
  }
}
assert.equal(corpus.size, 18);
console.log(
  JSON.stringify({
    status: 'passed',
    canonicalReplay: 9,
    fullReviewBindings: 9,
    corpusPages: 18,
    internalLinks: links,
    renderedPages,
    originalSourceAndNotice: true,
  })
);
