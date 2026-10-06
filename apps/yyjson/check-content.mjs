// Saved meaning review is distinct from these source/replay/rendering checks.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import matter from 'gray-matter';
import { parse } from 'parse5';
const app = path.dirname(fileURLToPath(import.meta.url)),
  root = path.resolve(app, '../..'),
  N = root + '/docs/notes/document-import/yyjson/v0-13-0',
  D = process.argv.find((v) => v.startsWith('--dist='))?.slice(7) ?? app + '/dist',
  rendered = process.argv.includes('--rendered'),
  hash = (b) => crypto.createHash('sha256').update(b).digest('hex'),
  fileHash = (p) => hash(fs.readFileSync(p)),
  json = (p) => JSON.parse(fs.readFileSync(p)),
  refCheck = (r) => assert.equal(fileHash(root + '/' + r.path), r.sha256, r.path),
  walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)],
  text = (n) => n.value ?? (n.childNodes ?? []).map(text).join(''),
  attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value,
  norm = (s) => s.replace(/\s+/g, ' ').trim(),
  routes = json(N + '/regeneration/ROUTES.json'),
  manifest = json(N + '/SOURCE_MANIFEST.json'),
  map = json(N + '/CONTENT_MAP.json'),
  refs = json(N + '/REFERENCE_MAP.json'),
  review = json(N + '/REVIEW_MANIFEST.json'),
  delta = json(N + '/FOOTER_DELTA.json');
assert.equal(map.pages.length, 16);
assert.equal(refs.pages.length, 3);
assert.equal(review.completedPages, 16);
assert.equal(review.unreviewedPages, 0);
assert.equal(manifest.files.length, 14);
assert.equal(delta.pages, 35);
assert.equal(delta.status, 'passed-body-unchanged-after-link-delta');
for (const f of manifest.files) {
  const b = fs.readFileSync(root + '/' + f.path);
  assert.equal(hash(b), f.sha256);
  assert.equal(b.length, f.bytes);
  assert.equal(
    crypto
      .createHash('sha1')
      .update(Buffer.concat([Buffer.from('blob ' + b.length + '\0'), b]))
      .digest('hex'),
    f.gitBlob
  );
}
for (const p of review.pages) {
  assert.equal(p.status, 'passed');
  assert.equal(p.separateReviewPass, true);
  for (const role of ['source', 'canonical', 'translation']) {
    refCheck(p[role]);
    assert.deepEqual(p[role].coverage, [
      [
        1,
        fs
          .readFileSync(root + '/' + p[role].path, 'utf8')
          .replace(/\n$/, '')
          .split('\n').length,
      ],
    ]);
  }
  refCheck(p.comparison);
  refCheck(p.savedTranslationBody);
  refCheck(p.linkAndMetadataDelta.links);
  refCheck(p.linkAndMetadataDelta.footer);
}
const require = createRequire(import.meta.url),
  astroRequire = createRequire(require.resolve('astro/package.json'));
const { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark'));
const processor = rendered ? await createMarkdownProcessor({ syntaxHighlight: 'shiki' }) : null;
const clean = (n) => {
    if (n.childNodes)
      n.childNodes = n.childNodes
        .filter(
          (c) =>
            !['script', 'style'].includes(c.tagName) &&
            !['navigation-container', 'docs-code-toolbar'].some((v) =>
              (attr(c, 'class') ?? '').split(' ').includes(v)
            )
        )
        .map(clean);
    return n;
  },
  semantic = (n) => ({
    text: norm(text(n)),
    headings: walk(n)
      .filter((n) => /^h[1-6]$/.test(n.tagName ?? ''))
      .map((n) => [n.tagName, norm(text(n))]),
    tables: walk(n)
      .filter((n) => n.tagName === 'table')
      .map((t) =>
        walk(t)
          .filter((c) => ['th', 'td'].includes(c.tagName))
          .map((c) => [c.tagName, norm(text(c))])
      ),
    code: walk(n)
      .filter((n) => n.tagName === 'pre')
      .map(text),
    images: walk(n)
      .filter((n) => n.tagName === 'img')
      .map((n) => [attr(n, 'src'), attr(n, 'alt')]),
  });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-yyjson-replay-')),
  records = [];
let codeJA = 0,
  links = 0,
  pagination = 0;
try {
  const replay = spawnSync(
    process.env.YYJSON_PYTHON ?? 'python3',
    [root + '/scripts/importers/import-yyjson-0.13.0.py', '--output', tmp],
    { encoding: 'utf8' }
  );
  assert.equal(replay.status, 0, replay.stderr);
  for (const lang of ['en', 'ja'])
    for (const r of lang === 'en' ? [...map.pages, ...refs.pages] : map.pages) {
      const inputPath = app + '/src/content/docs/v0-13-0/' + lang + '/' + r.id,
        canonical = N + '/canonical/' + lang + '/' + r.id,
        b = fs.readFileSync(inputPath),
        m = matter(b.toString()),
        body = m.content,
        route = '/docs/yyjson/v0-13-0/' + lang + '/' + r.id.slice(0, -3);
      assert.deepEqual(b, fs.readFileSync(canonical));
      assert.deepEqual(b, fs.readFileSync(tmp + '/' + lang + '/' + r.id));
      assert.deepEqual(
        b,
        fs.readFileSync(app + '/public/source/v0-13-0/edited/' + lang + '/' + r.id)
      );
      assert.equal(fileHash(canonical), r[lang === 'en' ? 'canonical' : 'translation'].sha256);
      assert.equal(m.data.licenseSource, 'yyjson-fixed');
      assert(
        m.data.documentContext.some((x) =>
          x.html.includes('/docs/yyjson/source/v0-13-0/source.zip')
        )
      );
      const d = delta.rows.find((x) => x.relative === lang + '/' + r.id);
      assert.equal(hash(Buffer.from(body)), d.bodySHA256Current);
      if (lang === 'ja') {
        const v = review.pages.find((x) => x.id === r.id);
        assert.equal(fileHash(inputPath), v.translation.sha256);
        assert.equal(body, fs.readFileSync(N + '/translations/ja/' + r.id, 'utf8'));
        const link = json(N + '/LINK_DELTA.json').rows.find((x) => x.id === r.id);
        refCheck(link.before);
        assert.equal(
          body.replaceAll('/docs/yyjson/v0-13-0/ja/01-guide/', '/docs/yyjson/v0-13-0/en/01-guide/'),
          fs.readFileSync(root + '/' + link.before.path, 'utf8')
        );
      }
      const sourceRoute = [...routes.guides, ...routes.references].find((x) => x.id === r.id),
        raw = fs.readFileSync(N + '/source/original/' + sourceRoute.source, 'utf8'),
        adopted = sourceRoute.startLine
          ? raw
              .split(/(?<=\n)/)
              .slice(sourceRoute.startLine - 1, sourceRoute.endLine)
              .join('')
          : raw,
        originalCode = sourceRoute.wholeCode
          ? [raw.replace(/\n$/, '')]
          : [...adopted.matchAll(/^```[^\n]*\n([\s\S]*?)^```\s*$/gm)].map((x) =>
              x[1].replace(/\n$/, '')
            );
      if (rendered) {
        const htmlPath = D + '/v0-13-0/' + lang + '/' + r.id.slice(0, -3) + '/index.html',
          all = walk(parse(fs.readFileSync(htmlPath, 'utf8'))),
          article = all.find((n) => n.tagName === 'article'),
          actual = clean(structuredClone(article)),
          expected = clean(parse((await processor.render(body)).code));
        assert.deepEqual(semantic(actual), semantic(expected), route + ' body');
        assert.deepEqual(semantic(actual).code, originalCode, route + ' original code');
        if (lang === 'ja') codeJA += originalCode.length;
        const ordered = (lang === 'en' ? [...map.pages, ...refs.pages] : map.pages)
            .filter((x) => x.id.split('/')[0] === r.id.split('/')[0])
            .sort((a, b) => a.id.localeCompare(b.id)),
          index = ordered.findIndex((x) => x.id === r.id);
        for (const [rel, offset] of [
          ['prev', -1],
          ['next', 1],
        ]) {
          const target = ordered[index + offset],
            nav = all.filter((n) => n.tagName === 'a' && attr(n, 'rel') === rel);
          assert.equal(nav.length, target ? 1 : 0, route + ' ' + rel);
          if (target)
            assert.equal(
              attr(nav[0], 'href').replace(/\/$/, ''),
              '/docs/yyjson/v0-13-0/' + lang + '/' + target.id.slice(0, -3)
            );
        }
        pagination++;
        for (const node of all) {
          const href = attr(node, 'href') ?? attr(node, 'src');
          if (!href || /^(?:https?:|mailto:|data:|javascript:)/.test(href)) continue;
          const url = new URL(href, 'https://libx.dev' + route + '/');
          if (!url.pathname.startsWith('/docs/yyjson/')) continue;
          let f = path.join(D, url.pathname.slice('/docs/yyjson/'.length));
          if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f += '/index.html';
          if (!fs.existsSync(f) && !path.extname(f)) f += '/index.html';
          assert(fs.existsSync(f), route + '→' + href);
          if (url.hash && f.endsWith('.html'))
            assert(
              walk(parse(fs.readFileSync(f, 'utf8'))).some((n) =>
                [attr(n, 'id'), attr(n, 'name')].includes(decodeURIComponent(url.hash.slice(1)))
              ),
              'missingfragment ' + href
            );
          links++;
        }
        for (const c of m.data.documentContext)
          for (const a of walk(parse(c.html)).filter((n) => n.tagName === 'a'))
            assert(
              all.some((n) => n.tagName === 'a' && attr(n, 'href') === attr(a, 'href')),
              'footerlink ' + attr(a, 'href')
            );
        records.push({
          route,
          renderedSHA256: fileHash(htmlPath),
          canonicalSHA256: hash(b),
          originalCode: originalCode.length,
        });
      }
    }
  assert.equal([...fs.readdirSync(tmp + '/ja/01-guide')].length, 16);
  if (rendered) {
    assert.equal(records.length, 35);
    assert.equal(codeJA, 100);
    assert.equal(pagination, 35);
  }
  const out = {
    status: 'passed',
    at: new Date().toISOString(),
    fixedInputs: 14,
    replayedDocuments: 35,
    reviewedGuides: 16,
    renderedBodies: rendered ? 35 : 0,
    pagination,
    originalJapaneseCode: codeJA,
    internalLinks: links,
    records,
    scope:
      'OriginalSHA/blob/16savedreviewbindings/35preferred/app/replay exact;optionalfullcurrentrender/text/table/headings/images/code/footer/navigation/internalpaths. Nooriginalexampleexecution ornewmeaningreview.',
  };
  const output = process.argv.find((x) => x.startsWith('--evidence='))?.slice(11);
  if (output) fs.writeFileSync(output, JSON.stringify(out, null, 2) + '\n');
  console.log(JSON.stringify({ ...out, records: undefined }));
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
