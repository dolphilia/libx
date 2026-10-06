import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
const app = path.dirname(fileURLToPath(import.meta.url)),
  root = path.resolve(app, '../..'),
  notes = path.join(root, 'docs/notes/document-import/commonmark/v0-31-2');
const hash = (file) => createHash('sha256').update(fs.readFileSync(file)).digest('hex'),
  read = (file) => JSON.parse(fs.readFileSync(file)),
  walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)],
  attr = (node, key) => node.attrs?.find((x) => x.name === key)?.value,
  cls = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name),
  raw = (node) => node.value ?? (node.childNodes ?? []).map(raw).join(''),
  body = (nodes) => nodes.find((n) => cls(n, 'commonmark-original-content')),
  codes = (node) =>
    walk(node)
      .filter((n) => n.tagName === 'code' && n.parentNode?.tagName === 'pre')
      .map(raw),
  norm = (s) => s.replace(/\s+/g, ' ').trim(),
  paragraphs = (node) =>
    walk(node)
      .filter((n) => n.tagName === 'p')
      .map((n) => norm(raw(n))),
  ids = (node) =>
    walk(node)
      .map((n) => attr(n, 'id'))
      .filter(Boolean),
  hrefs = (node) =>
    walk(node)
      .filter((n) => n.tagName === 'a')
      .map((n) => attr(n, 'href'))
      .filter(Boolean)
      .map((s) => s.replace('/v0-31-2/ja/', '/v0-31-2/en/'))
      .sort();
const leafItems = (node) =>
  walk(node)
    .filter((n) => n.tagName === 'li' && !walk(n).some((x) => x.tagName === 'p'))
    .map((n) => norm(raw(n)));
const rendered = process.argv.includes('--rendered'),
  distArg = process.argv.find((a) => a.startsWith('--dist=')),
  dist = distArg ? path.resolve(distArg.slice(7)) : path.join(app, 'dist');
assert(!distArg || rendered, '--dist requires --rendered');
const source = read(path.join(notes, 'SOURCE_MANIFEST.json')),
  cm = read(path.join(notes, 'CONTENT_MAP.json')),
  review = read(path.join(notes, 'REVIEW_MANIFEST.json')),
  headings = read(path.join(app, 'src/data/document-headings.json')),
  tests = new Map(read(path.join(notes, 'source/original/tests.json')).map((t) => [t.example, t]));
assert.equal(source.files.length, 9);
for (const f of source.files) assert.equal(hash(path.join(root, f.path)), f.sha256);
assert.equal(cm.items.length, 14);
assert.equal(review.completedPages, 14);
assert.equal(review.unreviewedPages, 0);
const require = createRequire(import.meta.url),
  astroRequire = createRequire(require.resolve('astro/package.json')),
  { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark')),
  processor = await createMarkdownProcessor({ smartypants: false, syntaxHighlight: 'shiki' });
let count = 0,
  codeCount = 0,
  linkCount = 0;
const bindings = [];
for (const [index, item] of cm.items.entries())
  for (const lang of ['en', 'ja']) {
    const slug = item.slug,
      filename = path.join(notes, 'canonical', lang, slug + '.md'),
      markdown = fs.readFileSync(filename, 'utf8'),
      r = review.pages[index],
      role = lang === 'en' ? 'canonical' : 'translation';
    assert.equal(r.id, slug + '.md');
    assert(r.separateReviewPass && r.status === 'passed');
    assert.equal(hash(filename), r[role].sha256);
    assert.equal(hash(path.join(root, r.source.path)), r.source.sha256);
    for (const target of [
      path.join(app, 'src/content/docs/v0-31-2', lang, slug + '.md'),
      path.join(app, 'public/source/v0-31-2/edited', lang, slug + '.md'),
    ])
      assert.equal(fs.readFileSync(target, 'utf8'), markdown);
    const processed = body(
      walk(parse((await processor.render(markdown.split(/\n---\n/)[1])).code))
    );
    assert(processed);
    assert.equal(
      walk(processed).filter((n) => ['script', 'iframe', 'style'].includes(n.tagName)).length,
      0
    );
    assert.deepEqual(
      codes(processed).map((s) => createHash('sha256').update(s).digest('hex')),
      item.originalCodeSHA256
    );
    const enBody = body(
      walk(
        parse(
          (
            await processor.render(
              fs
                .readFileSync(path.join(notes, 'canonical/en', slug + '.md'), 'utf8')
                .split(/\n---\n/)[1]
            )
          ).code
        )
      )
    );
    assert.deepEqual(ids(processed), ids(enBody));
    assert.deepEqual(hrefs(processed), hrefs(enBody));
    if (lang === 'ja') {
      const draft = path.join(root, r.savedReviewedJABody.path);
      assert.equal(hash(draft), r.savedReviewedJABody.sha256);
      const draftBody = body(walk(parse(fs.readFileSync(draft, 'utf8'))));
      assert.deepEqual(paragraphs(processed), paragraphs(draftBody));
      assert.deepEqual(leafItems(processed), leafItems(draftBody));
      for (const tag of ['ol', 'ul', 'li', 'h2', 'h3'])
        assert.equal(
          walk(processed).filter((n) => n.tagName === tag).length,
          walk(enBody).filter((n) => n.tagName === tag).length
        );
    }
    let actual = processed,
      htmlFile;
    if (rendered) {
      htmlFile = path.join(dist, 'v0-31-2', lang, slug, 'index.html');
      const all = walk(parse(fs.readFileSync(htmlFile, 'utf8')));
      actual = body(all);
      assert(actual);
      assert.deepEqual(paragraphs(actual), paragraphs(processed));
      assert.deepEqual(leafItems(actual), leafItems(processed));
      assert.deepEqual(codes(actual), codes(processed));
      assert.deepEqual(ids(actual), ids(processed));
      assert.deepEqual(hrefs(actual), hrefs(processed));
      const footer = all.find((n) => n.tagName === 'footer');
      assert(raw(footer).includes('Copyright (C) 2014-16 John MacFarlane'));
      for (const href of [
        'https://creativecommons.org/licenses/by-sa/4.0/',
        'https://spec.commonmark.org/0.31.2/',
        '/docs/commonmark/source/v0-31-2/source.zip',
        '/docs/commonmark/source/v0-31-2/SOURCE_README.md',
      ])
        assert(walk(footer).some((n) => attr(n, 'href') === href));
      const hs = headings['v0-31-2/' + lang + '/' + slug];
      for (const h of hs) {
        const node = walk(actual).find((n) => attr(n, 'id') === h.slug);
        assert(node);
        assert.equal(raw(node).replace(/\s+/g, ''), h.text.replace(/\s+/g, ''));
        assert(all.some((n) => n.tagName === 'a' && attr(n, 'href') === '#' + h.slug));
      }
      for (const n of [...walk(actual), ...walk(footer)])
        if (n.tagName === 'a') {
          const href = attr(n, 'href');
          if (!href) continue;
          const [base, fragment] = href.split('#');
          let target;
          if (href.startsWith('#')) target = all;
          else if (base.startsWith('/docs/commonmark/')) {
            let file = path.join(dist, base.slice('/docs/commonmark/'.length));
            if (!path.extname(file)) file = path.join(file, 'index.html');
            assert(fs.existsSync(file), href);
            if (fragment) target = walk(parse(fs.readFileSync(file, 'utf8')));
          } else continue;
          if (fragment)
            assert(
              target.some((x) => attr(x, 'id') === decodeURIComponent(fragment)),
              href
            );
          linkCount++;
        }
    }
    for (const ex of walk(actual).filter((n) => cls(n, 'commonmark-example'))) {
      const t = tests.get(Number(attr(ex, 'id').split('-')[1]));
      assert.deepEqual(codes(ex), [t.markdown, t.html]);
      count++;
    }
    codeCount += codes(actual).length;
    bindings.push({
      slug,
      language: lang,
      canonicalSHA256: hash(filename),
      ...(rendered ? { renderedSHA256: hash(htmlFile) } : {}),
    });
  }
assert.equal(count, 454);
assert.equal(codeCount, 942);
const full = walk(
  parse(fs.readFileSync(path.join(app, 'public/source/v0-31-2/spec.html'), 'utf8'))
);
assert(!full.some((n) => n.tagName === 'script'));
for (const ex of full.filter((n) => cls(n, 'example'))) {
  const t = tests.get(Number(attr(ex, 'id').split('-')[1]));
  assert.deepEqual(codes(ex), [t.markdown, t.html]);
}
assert.equal(full.filter((n) => cls(n, 'example')).length, 652);
console.log(
  JSON.stringify({
    status: 'passed',
    mode: rendered ? 'rendered' : 'canonical',
    English: 14,
    Japanese: 14,
    meaningReviewManifest: 14,
    examplePairs: count,
    codeBlocks: codeCount,
    fullStaticEnglishPairs: 652,
    bodyFooterInternalLinks: linkCount,
    bindings,
  })
);
