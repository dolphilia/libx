// Byte/DOM checks complement the saved separate-pass meaning review.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { parse, parseFragment } from 'parse5';

const app = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(app, '../..');
const notes = path.join(root, 'docs/notes/document-import/rapidjson/v1-1-0');
const hashBytes = (s) => crypto.createHash('sha256').update(s).digest('hex');
const hash = (p) => hashBytes(fs.readFileSync(p));
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const has = (n, c) => (attr(n, 'class') ?? '').split(/\s+/).includes(c);
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const shape = (n) => ({
  name: n.nodeName,
  ...(n.value !== undefined ? { value: n.value } : {}),
  ...(n.data !== undefined ? { data: n.data } : {}),
  ...(n.attrs
    ? {
        attrs: n.attrs.map((a) => ({
          ...a,
          value:
            n.nodeName === 'area' && a.name === 'coords'
              ? a.value
                  .trim()
                  .split(/[,\s]+/)
                  .map(Number)
                  .join(',')
              : a.value,
        })),
      }
    : {}),
  children: (n.childNodes ?? [])
    .filter(
      (c) =>
        !(
          ['div', 'main', '#document-fragment'].includes(n.nodeName) &&
          c.nodeName === '#text' &&
          /^\s*$/.test(c.value)
        )
    )
    .map(shape),
});
const files = (d, prefix = '') =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) => {
      assert(!e.isSymbolicLink());
      const p = path.join(prefix, e.name);
      return e.isDirectory() ? files(path.join(d, e.name), p) : [p];
    })
    .sort();
const map = json(path.join(notes, 'CONTENT_MAP.json'));
const references = json(path.join(notes, 'REFERENCE_MAP.json'));
const review = json(path.join(notes, 'REVIEW_MANIFEST.json'));
const delta = json(path.join(notes, 'FOOTER_DELTA.json'));
const source = json(path.join(notes, 'SOURCE_MANIFEST.json'));
const codeDelta = json(path.join(notes, 'CODE_WHITESPACE_DELTA.json'));
assert.equal(codeDelta.status, 'passed-source-bound-whitespace-repair');
assert.equal(map.pages.length, 13);
assert.equal(references.pages.length, 205);
assert.equal(review.completedPages, 13);
assert.equal(review.unreviewedPages, 0);
assert.deepEqual([...review.scope].sort(), map.pages.map((p) => p.id).sort());
assert.equal(hash(path.join(root, source.archive.path)), source.archive.sha256);
for (const language of ['en', 'ja'])
  assert.deepEqual(
    files(path.join(app, 'src/content/docs/v1-1-0', language)),
    (language === 'en' ? [...map.pages, ...references.pages] : map.pages).map((p) => p.id).sort()
  );
for (const page of map.pages) {
  const record = review.pages.find((p) => p.id === page.id);
  assert.equal(record.status, 'passed');
  assert.equal(record.separateReviewPass, true);
  if (record.presentationDelta)
    assert.equal(
      hash(path.join(root, record.presentationDelta.path)),
      record.presentationDelta.sha256
    );
  assert.equal(hash(path.join(root, record.metadataDelta.path)), record.metadataDelta.sha256);
  for (const key of ['source', 'canonical', 'translation']) {
    assert.equal(hash(path.join(root, page[key].path)), page[key].sha256);
    assert.equal(record[key].sha256, page[key].sha256);
    assert.equal(record[key].coverage[0][0], 1);
  }
}
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-rapidjson-replay-'));
const documents = new Map();
let links = 0;
let bodies = 0;
try {
  const result = spawnSync(
    'python3',
    [
      path.join(root, 'scripts/importers/import-rapidjson-1.1.0.py'),
      '--notes',
      notes,
      '--output',
      temporary,
    ],
    { encoding: 'utf8' }
  );
  assert.equal(result.status, 0, result.stderr);
  for (const language of ['en', 'ja'])
    for (const page of language === 'en' ? [...map.pages, ...references.pages] : map.pages) {
      const key = language === 'en' ? 'canonical' : 'translation';
      assert.equal(hash(path.join(root, page[key].path)), page[key].sha256);
      const document = path.join(app, 'src/content/docs/v1-1-0', language, page.id);
      assert.equal(hash(document), page[key].sha256);
      assert.equal(hash(document), hash(path.join(temporary, language, page.id)));
      assert.equal(
        hash(document),
        hash(path.join(app, 'public/source/v1-1-0/edited', language, page.id))
      );
      const raw = fs.readFileSync(document, 'utf8');
      const row = delta.rows.find((r) => r.language === language && r.id === page.id);
      assert.equal(row.bodyUnchanged, true);
      const repair = codeDelta.rows.find((r) => r.language === language && r.id === page.id);
      if (repair) {
        assert.equal(repair.codeWhitespaceOnly, true);
        assert.equal(repair.beforeBodySha256, row.bodySha256);
        assert.equal(hash(document), repair.afterSha256);
      }
      assert.equal(
        hashBytes(raw.split('---\n').slice(2).join('---\n')),
        repair ? repair.afterBodySha256 : row.bodySha256
      );
      const input = matter(raw);
      assert.equal(input.data.licenseSource, 'rapidjson-fixed');
      const fragment = parseFragment(input.content);
      const body = walk(fragment).filter((n) => has(n, 'rapidjson-document'));
      assert.equal(body.length, 1);
      assert(!walk(fragment).some((n) => ['script', 'iframe', 'textarea'].includes(n.nodeName)));
      const route = '/docs/rapidjson/v1-1-0/' + language + '/' + page.id.slice(0, -3);
      const footer = input.data.documentContext.flatMap((c) => walk(parseFragment(c.html)));
      assert(
        footer.some(
          (n) =>
            n.nodeName === 'a' && attr(n, 'href') === '/docs/rapidjson/source/v1-1-0/source.zip'
        )
      );
      if (process.argv.includes('--rendered')) {
        const tree = parse(
          fs.readFileSync(
            path.join(app, 'dist', route.slice('/docs/rapidjson/'.length), 'index.html'),
            'utf8'
          )
        );
        const actual = walk(tree).filter((n) => has(n, 'rapidjson-document'));
        assert.equal(actual.length, 1);
        assert.deepEqual(shape(actual[0]), shape(body[0]), route);
        for (const n of footer.filter((n) => n.nodeName === 'a'))
          assert(
            walk(tree).some((a) => a.nodeName === 'a' && attr(a, 'href') === attr(n, 'href')),
            'Footer link missing: ' + route
          );
        bodies++;
      }
      documents.set(route, { input, fragment, footer, body: body[0] });
    }
  for (const [route, { input, fragment, footer }] of documents) {
    for (const href of [
      input.data.prev?.link,
      input.data.next?.link,
      ...footer.filter((n) => n.nodeName === 'a').map((n) => attr(n, 'href')),
      ...walk(fragment)
        .filter((n) => ['a', 'area'].includes(n.nodeName))
        .map((n) => attr(n, 'href')),
    ].filter(Boolean)) {
      const url = new URL(
        href.startsWith('/v1-1-0/') ? '/docs/rapidjson' + href : href,
        'https://local.invalid' + route + '/'
      );
      if (url.origin !== 'https://local.invalid') continue;
      const target = documents.get(url.pathname.replace(/\/$/, ''));
      if (target) {
        if (url.hash)
          assert(
            walk(target.fragment).some(
              (n) => attr(n, 'id') === decodeURIComponent(url.hash.slice(1))
            ),
            route + ' → ' + href
          );
      } else
        assert(
          fs.existsSync(path.join(app, 'public', url.pathname.slice('/docs/rapidjson/'.length))),
          route + ' → ' + href
        );
      links++;
    }
    for (const image of walk(fragment).filter((n) => n.nodeName === 'img')) {
      const src = attr(image, 'src');
      if (src.startsWith('/docs/rapidjson/'))
        assert(fs.existsSync(path.join(app, 'public', src.slice('/docs/rapidjson/'.length))), src);
    }
    if (route.includes('/ja/')) {
      const en = documents.get(route.replace('/ja/', '/en/')).body;
      const programs = (d) =>
        walk(d)
          .filter(
            (n) =>
              n.nodeName === 'pre' || ['line', 'ttname', 'ttdeci', 'ttdef'].some((c) => has(n, c))
          )
          .map(text);
      assert.deepEqual(programs(fragment), programs(en), route + ' code preservation');
    }
  }
  console.log(
    `RapidJSON: 13 separate full review bindings; 218 EN + 13 JA replays/preferred sources; ${links} internal links; ${bodies} rendered bodies. API/source 205 remain original English; no full meaning review or upstream technical audit claimed.`
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
