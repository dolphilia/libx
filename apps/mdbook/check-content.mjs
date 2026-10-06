// Replay and byte bindings complement the saved separate-pass semantic review.
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
const notes = path.join(root, 'docs/notes/document-import/mdbook/v0-5-4');
const hash = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const has = (n, c) => (attr(n, 'class') ?? '').split(/\s+/).includes(c);
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const shape = (n) => ({
  name: n.nodeName,
  ...(n.value !== undefined ? { value: n.value } : {}),
  ...(n.data !== undefined ? { data: n.data } : {}),
  ...(n.attrs ? { attrs: n.attrs } : {}),
  children: (n.childNodes ?? [])
    .filter(
      (c) =>
        !(
          ['#document-fragment', 'div', 'nav', 'main'].includes(n.nodeName) &&
          c.nodeName === '#text' &&
          /^\s*$/.test(c.value)
        )
    )
    .map(shape),
});
const files = (directory, prefix = '') =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      assert(!entry.isSymbolicLink(), 'Document input symlink');
      const name = path.join(prefix, entry.name);
      return entry.isDirectory() ? files(path.join(directory, entry.name), name) : [name];
    })
    .sort();
const map = json(path.join(notes, 'CONTENT_MAP.json'));
const review = json(path.join(notes, 'REVIEW_MANIFEST.json'));
assert.equal(map.pages.length, 31);
assert.equal(review.completedPages, 31);
assert.equal(review.unreviewedPages, 0);
assert.deepEqual(review.scope.sort(), map.pages.map((p) => p.id).sort());
for (const language of ['en', 'ja'])
  assert.deepEqual(
    files(path.join(app, 'src/content/docs/v0-5-4', language)),
    map.pages.map((p) => p.id).sort()
  );
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-mdbook-replay-'));
const sources = new Map();
const rendered = new Map();
let references = 0;
try {
  const result = spawnSync(
    'python3',
    [
      path.join(root, 'scripts/importers/import-mdbook-0.5.4.py'),
      '--notes',
      notes,
      '--output',
      temporary,
    ],
    { encoding: 'utf8' }
  );
  assert.equal(result.status, 0, result.stderr);
  for (const page of map.pages) {
    const record = review.pages.find((p) => p.id === page.id);
    assert.equal(record.status, 'passed');
    assert.equal(record.separateReviewPass, true);
    for (const key of ['source', 'canonical', 'translation']) {
      assert.equal(hash(path.join(root, page[key].path)), page[key].sha256);
      assert.equal(page[key].sha256, record[key].sha256);
      assert(record[key].coverage[0][0] === 1);
    }
    if (record.metadataDelta) {
      assert.equal(hash(path.join(root, record.metadataDelta.path)), record.metadataDelta.sha256);
      const delta = json(path.join(root, record.metadataDelta.path));
      for (const language of ['en', 'ja']) {
        const row = delta.rows.find((r) => r.id === page.id && r.language === language);
        const body = matter(
          fs.readFileSync(
            path.join(root, page[language === 'en' ? 'canonical' : 'translation'].path),
            'utf8'
          )
        ).content;
        const exact = fs
          .readFileSync(
            path.join(root, page[language === 'en' ? 'canonical' : 'translation'].path),
            'utf8'
          )
          .split('---\n')[2];
        assert(body.length > 0);
        assert.equal(crypto.createHash('sha256').update(exact).digest('hex'), row.bodySha256);
        assert.equal(row.bodyUnchanged, true);
      }
    }
    for (const language of ['en', 'ja']) {
      const document = path.join(app, 'src/content/docs/v0-5-4', language, page.id);
      const preferred = path.join(
        app,
        'public/source/v0-5-4/edited',
        language,
        path.basename(page.id)
      );
      assert.equal(hash(document), hash(preferred));
      assert.equal(
        hash(document),
        hash(path.join(temporary, language, page.id)),
        'Fixed-input regeneration mismatch'
      );
      const input = matter(fs.readFileSync(document, 'utf8'));
      assert.equal(input.data.documentId, 'mdbook:' + page.sourcePath);
      assert.equal(input.data.licenseSource, 'mdbook-guide');
      const fragment = parseFragment(input.content);
      assert.equal(walk(fragment).filter((n) => has(n, 'mdbook-guide')).length, 1);
      assert(
        !walk(fragment).some((n) => ['aside', 'script', 'iframe', 'textarea'].includes(n.nodeName))
      );
      const route = '/docs/mdbook/v0-5-4/' + language + '/' + page.id.slice(0, -3);
      sources.set(route, { input, fragment, page });
      for (const context of input.data.documentContext)
        for (const a of walk(parseFragment(context.html)).filter((n) => n.nodeName === 'a')) {
          const href = attr(a, 'href');
          if (href.startsWith('/docs/mdbook/source/'))
            assert(
              fs.existsSync(path.join(app, 'public', href.slice('/docs/mdbook/'.length))),
              href
            );
        }
      if (process.argv.includes('--rendered')) {
        const tree = parse(
          fs.readFileSync(
            path.join(app, 'dist', route.slice('/docs/mdbook/'.length), 'index.html'),
            'utf8'
          )
        );
        for (const selector of [
          (n) => has(n, 'mdbook-guide'),
          (n) =>
            n.nodeName === 'nav' &&
            attr(n, 'aria-label') === (language === 'en' ? 'Original book contents' : '原文の目次'),
        ]) {
          const expected = walk(fragment).filter(selector);
          const actual = walk(tree).filter(selector);
          assert.equal(actual.length, expected.length, route);
          for (let i = 0; i < expected.length; i++)
            assert.deepEqual(shape(actual[i]), shape(expected[i]), route);
        }
        for (const context of input.data.documentContext)
          for (const a of walk(parseFragment(context.html)).filter((n) => n.nodeName === 'a'))
            assert(
              walk(tree).some((n) => n.nodeName === 'a' && attr(n, 'href') === attr(a, 'href')),
              'Footer link missing'
            );
        rendered.set(route, tree);
      }
    }
  }
  for (const [route, { input, fragment }] of sources) {
    for (const href of [
      input.data.prev?.link,
      input.data.next?.link,
      ...walk(fragment)
        .filter((n) => n.nodeName === 'a')
        .map((n) => attr(n, 'href')),
    ].filter(Boolean)) {
      const url = new URL(
        href.startsWith('/v0-5-4/') ? '/docs/mdbook' + href : href,
        'https://local.invalid' + route + '/'
      );
      if (url.origin !== 'https://local.invalid') continue;
      const targetRoute = url.pathname.replace(/\/$/, '');
      const target = sources.get(targetRoute);
      if (target) {
        if (url.hash)
          assert(
            walk(target.fragment).some(
              (n) => attr(n, 'id') === decodeURIComponent(url.hash.slice(1))
            ),
            href
          );
        references++;
      } else
        assert(
          fs.existsSync(path.join(app, 'public', url.pathname.slice('/docs/mdbook/'.length))),
          href
        );
    }
    for (const image of walk(fragment).filter((n) => n.nodeName === 'img'))
      assert(
        fs.existsSync(path.join(app, 'public', attr(image, 'src').slice('/docs/mdbook/'.length)))
      );
  }
  console.log(
    `mdBook: 31 fixed-source/review bindings; 62 byte-identical replays/preferred sources; ${references} internal references; ${rendered.size} rendered bodies. Original demos are static; no upstream technical audit claimed.`
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
