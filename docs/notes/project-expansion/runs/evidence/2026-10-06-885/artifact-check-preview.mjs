import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { parse } from '/private/tmp/libx-gnu-make-formal-881/node_modules/parse5/dist/index.js';

const app = '/private/tmp/libx-gnu-make-formal-881/apps/gnu-make';
const root = path.resolve(app, '../..');
const notes = path.join(root, 'docs/notes/document-import/gnu-make/v4-4-1');
const routes = JSON.parse(fs.readFileSync(path.join(notes, 'regeneration/ROUTES.json')));
const hash = (file) => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
const attr = (node, key) => node.attrs?.find((item) => item.name === key)?.value;
const cls = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
const raw = (node) => node.value ?? (node.childNodes ?? []).map(raw).join('');
function text(node) {
  if (node.tagName === 'button' && cls(node, 'docs-code-copy')) {
    const label = attr(node, 'data-copy-label');
    assert(['Copy code', 'コードをコピー'].includes(label));
    assert.equal(attr(node, 'aria-label'), label);
    assert.equal(attr(node, 'type'), 'button');
    assert.equal(raw(node), label);
    return '';
  }
  return node.value ?? (node.childNodes ?? []).map(text).join('');
}
const bodyText = (node) =>
  (node.value ??
    (node.tagName === 'button' ? text(node) : (node.childNodes ?? []).map(bodyText).join(''))) +
  (/^(p|div|li|dd|dt|pre|h[1-6]|section|blockquote)$/.test(node.tagName ?? '') ? ' ' : '');
const norm = (value) => value.replace(/\s+/g, ' ').trim();
const body = (nodes) => nodes.find((node) => cls(node, 'gnu-original-content'));
const codes = (node) =>
  walk(node)
    .filter((item) => item.tagName === 'pre')
    .map(text);
const fileList = (directory) =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? fileList(path.join(directory, entry.name))
        : [path.join(directory, entry.name)]
    );
const rendered = process.argv.includes('--rendered');
const require = createRequire(path.join(app, 'package.json'));
const astroRequire = createRequire(require.resolve('astro/package.json'));
const { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark'));
const processor = await createMarkdownProcessor({ smartypants: false, syntaxHighlight: 'shiki' });
const source = JSON.parse(fs.readFileSync(path.join(notes, 'SOURCE_MANIFEST.json')));
for (const input of source.files)
  assert.equal(hash(path.join(notes, 'source/original', input.upstreamPath)), input.sha256);
assert.equal(source.files.length, 15);
assert.equal(routes.guideWords, 8016);
assert.equal(routes.originalCodeBlocks, 36);
assert.equal(routes.footnoteClosure, 1);
assert.equal(routes.chapterCoverageExact, true);
const license = norm(
  raw(
    walk(parse(fs.readFileSync(path.join(notes, 'regeneration/GFDL.html'), 'utf8'))).find(
      (node) => attr(node, 'id') === 'GNU-Free-Documentation-License'
    )
  )
);
const targets = new Map();
if (rendered)
  for (const file of fileList("/private/tmp/libx-gnu-make-preview-artifact-885/dist/docs/gnu-make").filter((file) => file.endsWith('.html'))) {
    const rel = path.relative("/private/tmp/libx-gnu-make-preview-artifact-885/dist/docs/gnu-make", file).split(path.sep).join('/');
    const url = '/docs/gnu-make/' + (rel.endsWith('index.html') ? rel.slice(0, -10) : rel);
    targets.set(
      url,
      new Set(
        walk(parse(fs.readFileSync(file, 'utf8')))
          .map((node) => attr(node, 'id'))
          .filter(Boolean)
      )
    );
  }
const configText = fs.readFileSync(path.join(app, 'src/config/project.config.jsonc'), 'utf8');
const config = JSON.parse(configText.replace(/^\s*\/\/.*$/gm, ''));
const links = [];
const rows = [];
for (const language of ['en', 'ja']) {
  const pages = [...routes.guides, ...(language === 'en' ? routes.references : [])];
  for (const [index, page] of pages.entries()) {
    const filename = path.join(notes, 'canonical', language, page.id);
    const markdown = fs.readFileSync(filename, 'utf8');
    for (const file of [
      path.join(app, 'src/content/docs/v4-4-1', language, page.id),
      path.join(app, 'public/source/v4-4-1/edited', language, page.id),
    ])
      assert.equal(fs.readFileSync(file, 'utf8'), markdown);
    const nodes = walk(parse((await processor.render(markdown.split(/\n---\n/)[1])).code));
    let original;
    if (page.sourceFragment) {
      const fragment = path.join(notes, page.sourceFragment);
      assert.equal(hash(fragment), page.sourceFragmentSHA256);
      original = body(walk(parse(fs.readFileSync(fragment, 'utf8'))));
      const converted = body(nodes);
      assert(converted);
      assert.deepEqual(
        codes(converted),
        codes(original).map((value) => value.replace(/\n$/, '')),
        page.id
      );
      if (language === 'en') {
        const english = fs
          .readFileSync(
            path.join(notes, 'regeneration', path.basename(page.id, '.md') + '.body.md'),
            'utf8'
          )
          .trim();
        assert(markdown.includes(english));
        assert.equal(
          norm(bodyText(converted)),
          norm(bodyText(original)),
          page.id + ' English meaning preservation'
        );
      } else {
        const batch = index < 6 ? 'batch-882' : 'batch-883';
        const draft = fs
          .readFileSync(
            path.join(notes, 'translations', batch, path.basename(page.id, '.md') + '.ja-draft.md'),
            'utf8'
          )
          .trim();
        const finalBody = draft
          .replaceAll('/docs/gnu-make/v4-4-1/en/01-guide/', '/docs/gnu-make/v4-4-1/ja/01-guide/')
          .replace('Makefile入門（英語原文）', 'Makefile入門')
          .replace('長い行の分割（英語原文）', '長い行の分割');
        assert(markdown.includes(finalBody), page.id + ' literal reviewed Japanese assembly');
      }
      for (const type of ['ul', 'ol', 'li', 'h2', 'h3', 'h4', 'h5'])
        assert.equal(
          walk(converted).filter((node) => node.tagName === type).length,
          walk(original).filter((node) => node.tagName === type).length,
          page.id + ' original structure ' + type
        );
    }
    assert.equal(
      norm(raw(nodes.find((node) => attr(node, 'id') === 'GNU-Free-Documentation-License'))),
      license
    );
    const url = '/docs/gnu-make/v4-4-1/' + language + '/' + page.id.replace(/\.md$/, '') + '/';
    if (rendered) {
      const htmlFile = path.join(
        "/private/tmp/libx-gnu-make-preview-artifact-885/dist/docs/gnu-make",
        'v4-4-1',
        language,
        page.id.replace(/\.md$/, ''),
        'index.html'
      );
      const actual = walk(parse(fs.readFileSync(htmlFile, 'utf8')));
      const actualBody = body(actual);
      if (original) {
        assert.equal(
          norm(bodyText(actualBody)),
          norm(bodyText(body(nodes))),
          page.id + ' rendered body'
        );
        assert.deepEqual(
          codes(actualBody),
          codes(original).map((value) => value.replace(/\n$/, '')),
          page.id + ' rendered original code'
        );
        for (const id of walk(original)
          .map((node) => attr(node, 'id'))
          .filter(Boolean))
          assert(
            actual.some((node) => attr(node, 'id') === id),
            page.id + ' original anchor ' + id
          );
      }
      assert.equal(
        norm(raw(actual.find((node) => attr(node, 'id') === 'GNU-Free-Documentation-License'))),
        license
      );
      const notices = actual.find((node) => cls(node, 'gnu-notices'));
      const footer = actual.find((node) => cls(node, 'document-provenance'));
      assert(notices && footer);
      for (const note of config.licensing.sources[0].provenanceNotes) {
        assert(
          norm(raw(footer)).includes(norm(note[language])),
          page.id + ' source note in existing footer'
        );
        assert(
          !norm(raw(notices)).includes(norm(note[language])),
          page.id + ' no operating note in leading notices'
        );
      }
      if (page.id.includes('09-including-makefiles'))
        for (const [id, dest] of [
          ['DOCF1', 'FOOT1'],
          ['FOOT1', 'DOCF1'],
        ]) {
          assert.equal(
            attr(
              actual.find((node) => attr(node, 'id') === id),
              'href'
            ),
            url + '#' + dest
          );
        }
      for (const node of actual.filter((node) => node.tagName === 'a')) {
        const href = attr(node, 'href');
        if (href?.startsWith('/docs/gnu-make/') || href?.startsWith('#')) links.push({ url, href });
      }
      const navigation = actual.filter(
        (node) => node.tagName === 'a' && ['prev', 'next'].includes(attr(node, 'rel'))
      );
      const peers = pages.filter(
        (candidate) => candidate.id.split('/')[0] === page.id.split('/')[0]
      );
      const position = peers.findIndex((candidate) => candidate.id === page.id);
      const expected = [];
      if (position > 0)
        expected.push({
          rel: 'prev',
          href:
            '/docs/gnu-make/v4-4-1/' + language + '/' + peers[position - 1].id.replace(/\.md$/, ''),
        });
      if (position + 1 < peers.length)
        expected.push({
          rel: 'next',
          href:
            '/docs/gnu-make/v4-4-1/' + language + '/' + peers[position + 1].id.replace(/\.md$/, ''),
        });
      assert.deepEqual(
        navigation.map((link) => ({ rel: attr(link, 'rel'), href: attr(link, 'href') })),
        expected,
        page.id + ' exact pagination'
      );
    }
    rows.push({
      language,
      id: page.id,
      canonicalSHA256: hash(filename),
      originalCodeBlocks: page.codeBlocks ?? 0,
      rendered,
    });
  }
}
for (const link of links) {
  const url = new URL(link.href, 'https://libx.dev' + link.url);
  const target = targets.get(url.pathname) ?? targets.get(url.pathname + '/');
  if (target) {
    if (url.hash) assert(target.has(decodeURIComponent(url.hash.slice(1))), JSON.stringify(link));
  } else
    assert(
      fs.existsSync(path.join(app, 'public', url.pathname.replace('/docs/gnu-make/', ''))),
      JSON.stringify(link)
    );
}
console.log(
  JSON.stringify({
    status: 'passed',
    rendered,
    originalInputs: 15,
    EnglishPages: 16,
    JapanesePages: 15,
    sourceWords: 8016,
    originalCodeBlocks: 36,
    footnotes: 1,
    renderedBodies: rendered ? 31 : 0,
    internalLinks: links.length,
    exactPaginationPages: rendered ? 31 : 0,
    rows,
    limits:
      'Mechanical original/translation assembly, code, structures, anchors, license and current render checks. Separate whole meaning reviews are saved in batches 882/883; this tool does not replace them or execute original GNU Make/examples.',
  })
);
