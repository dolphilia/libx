// Replays and exact DOM checks complement the saved separate meaning review.
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
const notes = path.join(root, 'docs/notes/document-import/wren/v0-4-0');
const hashBytes = (b) => crypto.createHash('sha256').update(b).digest('hex');
const hash = (p) => hashBytes(fs.readFileSync(p));
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const has = (n, c) => (attr(n, 'class') ?? '').split(/\s+/).includes(c);
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const shape = (n, pre = false) => ({
  name: n.nodeName,
  ...(n.value !== undefined ? { value: !pre && /^\n{2,}$/.test(n.value) ? '\n' : n.value } : {}),
  ...(n.data !== undefined ? { data: n.data } : {}),
  ...(n.attrs ? { attrs: n.attrs } : {}),
  children: (n.childNodes ?? []).map((c) =>
    shape(c, pre || n.nodeName === 'pre' || n.nodeName === 'code')
  ),
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
const refs = json(path.join(notes, 'REFERENCE_MAP.json'));
const review = json(path.join(notes, 'REVIEW_MANIFEST.json'));
const delta = json(path.join(notes, 'FOOTER_DELTA.json'));
const source = json(path.join(notes, 'SOURCE_MANIFEST.json'));
assert.equal(map.pages.length, 24);
assert.equal(refs.pages.length, 18);
assert.equal(review.completedPages, 24);
assert.equal(review.unreviewedPages, 0);
assert.equal(delta.status, 'passed-body-unchanged');
assert.deepEqual([...review.scope].sort(), map.pages.map((p) => p.id).sort());
for (const f of source.files) {
  const b = fs.readFileSync(path.join(root, f.path));
  assert.equal(hashBytes(b), f.sha256);
  assert.equal(b.length, f.bytes);
  assert.equal(
    crypto
      .createHash('sha1')
      .update(Buffer.concat([Buffer.from('blob ' + b.length + '\0'), b]))
      .digest('hex'),
    f.gitBlob
  );
}
for (const lang of ['en', 'ja'])
  assert.deepEqual(
    files(path.join(app, 'src/content/docs/v0-4-0', lang)),
    (lang === 'en' ? [...map.pages, ...refs.pages] : map.pages).map((p) => p.id).sort()
  );
for (const p of map.pages) {
  const r = review.pages.find((x) => x.id === p.id);
  assert.equal(r.status, 'passed');
  assert.equal(r.separateReviewPass, true);
  assert.equal(hash(path.join(root, r.comparison.path)), r.comparison.sha256);
  assert.equal(
    hash(path.join(root, r.postReviewChanges.evidence)),
    r.postReviewChanges.evidenceSHA256
  );
  const linksDelta = json(path.join(root, r.postReviewChanges.evidence));
  const before = linksDelta.rows.find((x) => x.id === r.id).before;
  assert.equal(hash(path.join(root, before.path)), before.sha256);
  assert.equal(before.sha256, r.priorFullMeaningReviewTranslation.sha256);
  const priorBody = fs
    .readFileSync(path.join(root, before.path), 'utf8')
    .split('---\n')
    .slice(2)
    .join('---\n');
  const currentBody = fs
    .readFileSync(path.join(root, r.translation.path), 'utf8')
    .split('---\n')
    .slice(2)
    .join('---\n');
  assert.equal(
    currentBody.replaceAll(
      'href=\"/docs/wren/v0-4-0/ja/01-guide/',
      'href=\"/docs/wren/v0-4-0/en/01-guide/'
    ),
    priorBody
  );
  assert.equal(hash(path.join(root, r.metadataDelta.path)), r.metadataDelta.sha256);
  for (const role of ['source', 'canonical', 'translation']) {
    assert.equal(hash(path.join(root, p[role].path)), p[role].sha256);
    assert.equal(r[role].sha256, p[role].sha256);
    const raw = fs.readFileSync(path.join(root, r[role].path), 'utf8');
    assert.deepEqual(r[role].coverage, [[1, raw.replace(/\n$/, '').split('\n').length]]);
  }
}
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-wren-replay-'));
const documents = new Map();
let links = 0,
  bodies = 0,
  code = 0,
  navigation = 0;
try {
  const result = spawnSync(
    process.env.WREN_PYTHON ?? process.env.LIBX_CJSON_PYTHON ?? 'python3',
    [path.join(root, 'scripts/importers/import-wren-0.4.0.py'), '--output', temporary],
    { encoding: 'utf8' }
  );
  assert.equal(result.status, 0, result.stderr);
  for (const lang of ['en', 'ja']) {
    for (const p of lang === 'en' ? [...map.pages, ...refs.pages] : map.pages) {
      const role = lang === 'en' ? 'canonical' : 'translation';
      const document = path.join(app, 'src/content/docs/v0-4-0', lang, p.id);
      assert.equal(hash(path.join(root, p[role].path)), p[role].sha256);
      assert.equal(hash(document), p[role].sha256);
      assert.equal(hash(document), hash(path.join(temporary, lang, p.id)));
      assert.equal(hash(document), hash(path.join(app, 'public/source/v0-4-0/edited', lang, p.id)));
      const raw = fs.readFileSync(document, 'utf8');
      const d = delta.rows.find((r) => r.lang === lang && r.id === p.id);
      assert.equal(d.bodyUnchanged, true);
      assert.equal(hashBytes(raw.split('---\n').slice(2).join('---\n')), d.bodySHA256);
      const input = matter(raw);
      assert.equal(input.data.licenseSource, 'wren-fixed');
      const fragment = parseFragment(input.content);
      const body = walk(fragment).filter((n) => has(n, 'wren-document'));
      assert.equal(body.length, 1);
      assert(!walk(fragment).some((n) => ['script', 'iframe', 'textarea'].includes(n.nodeName)));
      const footer = input.data.documentContext.flatMap((c) => walk(parseFragment(c.html)));
      assert(
        footer.some(
          (n) => n.nodeName === 'a' && attr(n, 'href') === '/docs/wren/source/v0-4-0/source.zip'
        )
      );
      const route = '/docs/wren/v0-4-0/' + lang + '/' + p.id.slice(0, -3);
      if (process.argv.includes('--rendered')) {
        const tree = parse(
          fs.readFileSync(
            path.join(
              process.argv.find((x) => x.startsWith('--dist='))?.slice(7) ?? path.join(app, 'dist'),
              route.slice('/docs/wren/'.length),
              'index.html'
            ),
            'utf8'
          )
        );
        const actual = walk(tree).filter((n) => has(n, 'wren-document'));
        assert.equal(actual.length, 1);
        assert.deepEqual(shape(actual[0]), shape(body[0]), route);
        for (const a of footer.filter((n) => n.nodeName === 'a'))
          assert(
            walk(tree).some((n) => n.nodeName === 'a' && attr(n, 'href') === attr(a, 'href')),
            'Footer link missing: ' + route
          );
        const section = p.id.split('/')[0];
        const ordered = (lang === 'en' ? [...map.pages, ...refs.pages] : map.pages)
          .filter((row) => row.id.split('/')[0] === section)
          .sort((a, b) => a.id.localeCompare(b.id));
        const index = ordered.findIndex((row) => row.id === p.id);
        const nav = walk(tree).filter(
          (n) => n.nodeName === 'a' && ['prev', 'next'].includes(attr(n, 'rel'))
        );
        for (const [rel, offset] of [
          ['prev', -1],
          ['next', 1],
        ]) {
          const target = ordered[index + offset];
          const anchors = nav.filter((n) => attr(n, 'rel') === rel);
          assert.equal(anchors.length, target ? 1 : 0, route + ' ' + rel);
          if (target) {
            const targetPath = '/docs/wren/v0-4-0/' + lang + '/' + target.id.slice(0, -3) + '/';
            assert.equal(
              attr(anchors[0], 'href').replace(/\/$/, ''),
              targetPath.replace(/\/$/, ''),
              route + ' ' + rel
            );
            assert.notEqual(targetPath.replace(/\/$/, ''), route);
            const title = matter(
              fs.readFileSync(path.join(app, 'src/content/docs/v0-4-0', lang, target.id), 'utf8')
            ).data.title;
            assert.equal(
              text(walk(anchors[0]).find((n) => has(n, 'link-title'))),
              title,
              route + ' ' + rel + ' title'
            );
          }
        }
        navigation++;
        bodies++;
      }
      documents.set(route, { input, fragment, footer, body: body[0] });
    }
  }
  for (const [route, { input, fragment, footer, body }] of documents) {
    for (const href of [
      input.data.prev?.link,
      input.data.next?.link,
      ...footer.filter((n) => n.nodeName === 'a').map((n) => attr(n, 'href')),
      ...walk(fragment)
        .filter((n) => n.nodeName === 'a')
        .map((n) => attr(n, 'href')),
    ].filter(Boolean)) {
      const url = new URL(href, 'https://local.invalid' + route + '/');
      if (url.origin !== 'https://local.invalid') continue;
      const target = documents.get(url.pathname.replace(/\/$/, ''));
      let decodedFragment = url.hash.slice(1);
      try {
        decodedFragment = decodeURIComponent(decodedFragment);
      } catch (error) {
        assert.equal(error.name, 'URIError');
        assert(/%(?![0-9a-f]{2})/i.test(decodedFragment));
      }
      if (target) {
        if (url.hash)
          assert(
            walk(target.fragment).some((n) =>
              [attr(n, 'id'), attr(n, 'name')].includes(decodedFragment)
            ),
            route + ' → ' + href
          );
      } else {
        assert(url.pathname.startsWith('/docs/wren/'));
        assert(
          fs.existsSync(path.join(app, 'public', url.pathname.slice('/docs/wren/'.length))),
          route + ' → ' + href
        );
      }
      links++;
    }
    if (route.includes('/ja/')) {
      const programs = (n) =>
        walk(n)
          .filter((n) => n.nodeName === 'pre')
          .map(text);
      const en = documents.get(route.replace('/ja/', '/en/')).body;
      assert.deepEqual(programs(body), programs(en), route + ' code preservation');
      code += programs(body).length;
    }
  }
  assert.equal(code, 253);
  console.log(
    `WREN:24 separate full review bindings;42 EN+24 JA replays/preferred sources;fixed45 SHA/Git blobs;${links} internal links;${bodies} rendered bodies;${navigation} exact pagination boundaries/titles;code253 exact. English references17/API and licence1 excluded from translation/full meaning review.`
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
