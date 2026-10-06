// Limited rendered verification of source/editorial footer placement and links.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse, parseFragment } from 'parse5';
import matter from 'gray-matter';
const root = process.cwd();
const manifest = JSON.parse(
  fs.readFileSync('docs/notes/document-context-2026-10-04/PUBLICATION_BINDINGS.json')
);
const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
const attr = (node, key) => node.attrs?.find((a) => a.name === key)?.value;
const text = (node) => node.value ?? (node.childNodes ?? []).map(text).join('');
const fold = (value) => value.replace(/\s+/g, ' ').trim();
let links = 0;
for (const entry of manifest.files) {
  const app = entry.path.split('/')[1];
  const slug = entry.path.split('/src/content/docs/')[1].replace(/\.mdx?$/, '');
  const nodes = walk(parse(fs.readFileSync(`/private/tmp/footer-ci-artifacts-645/verified-deployment-84f9815bcdcc2f6ab62836de624ce6b1c33b51e3-1/dist/docs/${app}/${slug}/index.html`, 'utf8')));
  const footer = nodes.find(
    (n) => n.tagName === 'footer' && attr(n, 'class') === 'document-context-footer'
  );
  const article = nodes.find((n) => n.tagName === 'article');
  assert(footer && article && nodes.indexOf(footer) > nodes.indexOf(article), entry.path);
  assert.equal(walk(article).filter((n) => attr(n, 'data-context-kind')).length, 0);
  const data = matter(fs.readFileSync(entry.path, 'utf8')).data;
  const details = walk(footer).filter((n) => attr(n, 'data-context-kind'));
  assert.equal(details.length, data.documentContext.length);
  for (let i = 0; i < details.length; i++) {
    const note = data.documentContext[i];
    assert.equal(attr(details[i], 'data-context-kind'), note.kind);
    const rendered = walk(details[i]).find((n) =>
      attr(n, 'class')?.split(/\s+/).includes('document-context-note')
    );
    // The exact saved note must be present inside its details container.
    assert(fold(text(details[i])).includes(fold(text(parseFragment(note.html)))), entry.path);
    if (note.context)
      assert(
        nodes.some((n) => attr(n, 'id') === note.context.anchor),
        entry.path + ' #' + note.context.anchor
      );
    void rendered;
  }
  for (const a of walk(footer).filter((n) => n.tagName === 'a')) {
    const href = attr(a, 'href');
    if (!href) continue;
    links++;
    const url = new URL(href, `https://libx.dev/docs/${app}/${slug}/`);
    if (url.origin !== 'https://libx.dev' || !url.pathname.startsWith('/docs/')) continue;
    const [, , targetApp, ...rest] = url.pathname.split('/');
    const relative = decodeURIComponent(rest.join('/'));
    let target = path.join(
      '/private/tmp/footer-ci-artifacts-645/verified-deployment-84f9815bcdcc2f6ab62836de624ce6b1c33b51e3-1/dist',
      'docs',
      targetApp,
      relative.endsWith('/') ? relative + 'index.html' : relative
    );
    if (!fs.existsSync(target) || fs.statSync(target).isDirectory())
      target = path.join(target, 'index.html');
    assert(fs.existsSync(target), entry.path + ' ' + href);
    if (url.hash) {
      const ids = walk(parse(fs.readFileSync(target, 'utf8')));
      assert(
        ids.some((n) =>
          [attr(n, 'id'), attr(n, 'name')].includes(decodeURIComponent(url.hash.slice(1)))
        ),
        href
      );
    }
  }
}
console.log(
  JSON.stringify({
    status: 'passed-limited-footer-render-check',
    pages: manifest.files.length,
    footerLinks: links,
    semanticReviewPerformed: false,
  })
);

// Retain the existing cJSON rendered-body gate against the current body, after
// its old review and deterministic generation gates pass in the reconstruction.
const prose = (node) => {
  if (
    ['pre', 'script', 'style', 'button'].includes(node.tagName) ||
    (attr(node, 'class') ?? '').split(/\s+/).includes('docs-code-toolbar')
  )
    return '';
  return node.value ?? (node.childNodes ?? []).map(prose).join('');
};
const files = (directory) =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? files(path.join(directory, entry.name))
        : [path.join(directory, entry.name)]
    );
let renderedBodies = 0;
for (const file of files('apps/cjson/src/content/docs').filter((file) => file.endsWith('.md'))) {
  const { content } = matter(fs.readFileSync(file, 'utf8'));
  assert(content.trimStart().startsWith('<'), file + ' canonical HTML body');
  const expected = parseFragment(content);
  const relative = file.split('/src/content/docs/')[1].replace(/\.md$/, '');
  const nodes = walk(parse(fs.readFileSync(`/private/tmp/footer-ci-artifacts-645/verified-deployment-84f9815bcdcc2f6ab62836de624ce6b1c33b51e3-1/dist/docs/cjson/${relative}/index.html`, 'utf8')));
  const article = nodes.find((node) => node.tagName === 'article');
  assert(article, file);
  const navigation = (article.childNodes ?? []).findIndex((node) =>
    (attr(node, 'class') ?? '').split(/\s+/).includes('navigation-container')
  );
  const actual = {
    ...article,
    childNodes: navigation < 0 ? article.childNodes : article.childNodes.slice(0, navigation),
  };
  assert.equal(fold(prose(actual)), fold(prose(expected)), file + ' rendered prose');
  const codes = (tree) =>
    walk(tree)
      .filter((node) => node.tagName === 'pre')
      .map((node) => text(node).replace(/\n$/, ''));
  assert.deepEqual(codes(actual), codes(expected), file + ' rendered code');
  renderedBodies++;
}
assert.equal(renderedBodies, 6);
console.log(
  JSON.stringify({
    status: 'passed-current-cjson-rendered-bodies',
    pages: renderedBodies,
    semanticReviewPerformed: false,
  })
);
