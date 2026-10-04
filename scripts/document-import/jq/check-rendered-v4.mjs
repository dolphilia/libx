// Rendered technical body and source/editorial footer are checked separately.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse, parseFragment } from 'parse5';
import matter from 'gray-matter';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
const requireAstro = createRequire(import.meta.resolve('astro/package.json'));
const { createMarkdownProcessor } = await import(
  pathToFileURL(requireAstro.resolve('@astrojs/markdown-remark')).href
);
const app = path.resolve('apps/jq');
const manifest = JSON.parse(fs.readFileSync(path.join(app, 'meta/document-context-v4.json')));
const processor = await createMarkdownProcessor({
  syntaxHighlight: false,
  smartypants: false,
  gfm: false,
});
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, key) => n.attrs?.find((a) => a.name === key)?.value;
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const prose = (n) =>
  ['pre', 'script', 'style', 'button'].includes(n.tagName) ||
  (attr(n, 'class') ?? '').split(/\s+/).includes('navigation-container')
    ? ''
    : (n.value ?? (n.childNodes ?? []).map(prose).join(''));
const fold = (s) => s.replace(/\s+/g, ' ').trim();
let footerPages = 0,
  links = 0,
  codeBlocks = 0,
  fields = 0;
for (const row of manifest.records) {
  const slug = row.path.split('src/content/docs/')[1].replace(/\.md$/, '');
  const source = matter(fs.readFileSync(path.join(app, row.path), 'utf8'));
  const expected = walk(parseFragment((await processor.render(source.content)).code));
  const nodes = walk(parse(fs.readFileSync(path.join(app, 'dist', slug, 'index.html'), 'utf8')));
  const article = nodes.find((n) => n.tagName === 'article');
  assert(article, row.path);
  const actual = walk(article);
  assert.equal(
    fold(prose(article)),
    fold(
      expected
        .filter((n) => n.nodeName === '#document-fragment')
        .map(prose)
        .join('')
    ),
    row.path + ' prose'
  );
  // Shiki omits terminal line breaks; every interior code byte is compared.
  const codes = (ns) =>
    ns
      .filter((n) => n.tagName === 'pre')
      .map((n) => text(walk(n).find((c) => c.tagName === 'code') ?? n).replace(/\n+$/, ''));
  assert.deepEqual(codes(actual), codes(expected), row.path + ' code');
  codeBlocks += codes(actual).length;
  for (const field of expected.filter((n) => attr(n, 'data-source-key'))) {
    const key = attr(field, 'data-source-key');
    const targets = actual.filter((n) => attr(n, 'data-source-key') === key);
    assert.equal(targets.length, 1, key);
    assert.equal(fold(text(targets[0])), fold(text(field)), key);
    fields++;
  }
  const footer = nodes.find(
    (n) => n.tagName === 'footer' && attr(n, 'class') === 'document-context-footer'
  );
  if (source.data.documentContext) {
    assert(footer && nodes.indexOf(footer) > nodes.indexOf(article), row.path);
    assert.equal(actual.filter((n) => attr(n, 'data-context-kind')).length, 0);
    const notes = walk(footer).filter((n) => attr(n, 'data-context-kind'));
    assert.equal(notes.length, source.data.documentContext.length);
    for (let i = 0; i < notes.length; i++) {
      assert.equal(attr(notes[i], 'data-context-kind'), source.data.documentContext[i].kind);
      assert(
        fold(text(notes[i])).includes(
          fold(text(parseFragment(source.data.documentContext[i].html)))
        )
      );
    }
    footerPages++;
  }
  for (const a of [...actual, ...(footer ? walk(footer) : [])].filter((n) => n.tagName === 'a')) {
    const href = attr(a, 'href');
    if (!href) continue;
    const url = new URL(href, 'https://libx.dev/docs/jq/' + slug + '/');
    if (url.origin !== 'https://libx.dev' || !url.pathname.startsWith('/docs/jq/')) continue;
    links++;
    const relative = decodeURIComponent(url.pathname.slice('/docs/jq/'.length));
    let file = path.join(app, 'dist', relative);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory())
      file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) file = path.join(file, 'index.html');
    assert(fs.existsSync(file), row.path + ' ' + href);
    if (url.hash) {
      const ids = walk(parse(fs.readFileSync(file, 'utf8')));
      assert(
        ids.some((n) =>
          [attr(n, 'id'), attr(n, 'name')].includes(decodeURIComponent(url.hash.slice(1)))
        ),
        row.path + ' ' + href
      );
    }
  }
}
assert.equal(footerPages, 34);
console.log(
  JSON.stringify(
    {
      status: 'passed',
      pages: manifest.records.length,
      footerPages,
      technicalCodeBlocks: codeBlocks,
      japaneseSourceFields: fields,
      internalLinks: links,
      semanticReviewPerformed: false,
    },
    null,
    2
  )
);
