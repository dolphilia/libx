#!/usr/bin/env node
// Read-only verification of frozen inputs, reviewed articles and built HTML.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const arg = process.argv.indexOf('--root');
const root =
  arg < 0
    ? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
    : path.resolve(process.argv[arg + 1]);
const ciBuild = '/private/tmp/libx-cjson-ci-artifact-316/dist/docs/cjson';
const notes = path.join(root, 'docs/notes/document-import/cjson/v1-7-19');
const app = path.join(root, 'apps/cjson');
const require = createRequire(path.join(app, 'package.json'));
const { fromHtml } = await import(require.resolve('hast-util-from-html'));
const read = (p) => fs.readFileSync(p, 'utf8');
const sha = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const parse = (s) => fromHtml(s, { fragment: true });
const body = (s) => s.replace(/^---\n[\s\S]*?\n---\n/, '');
const text = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(text).join(''));
function all(n, p) {
  return [...(p(n) ? [n] : []), ...(n.children ?? []).flatMap((x) => all(x, p))];
}
const tag = (t) => (n) => n.type === 'element' && n.tagName === t;
const codes = (n) => all(n, tag('pre')).map(text);
const ids = (n) => all(n, (x) => x.properties?.id).map((x) => x.properties.id);
const links = (n) =>
  all(n, tag('a'))
    .map((x) => x.properties?.href)
    .filter(Boolean);
const count = (n, t) => all(n, tag(t)).length;
function prose(n) {
  if (n.type === 'text') return n.value;
  if (
    ['pre', 'script', 'style'].includes(n.tagName) ||
    (n.tagName === 'button' && n.properties?.className?.includes('docs-code-copy'))
  )
    return '';
  return (n.children ?? []).map(prose).join('');
}
const fold = (s) => s.replace(/\s+/g, ' ').trim();
const review = JSON.parse(read(path.join(notes, 'REVIEW_MANIFEST.json')));
assert.equal(review.completedPages, 3);
assert.equal(review.unreviewedPages, 0);
const manifest = JSON.parse(read(path.join(notes, 'SOURCE_MANIFEST.json')));
for (const input of manifest.inputs) {
  const p = path.join(notes, 'source', input.path);
  assert.equal(sha(p), input.sha256, input.path);
  const b = fs.readFileSync(p);
  assert.equal(
    crypto
      .createHash('sha1')
      .update(Buffer.from(`blob ${b.length}\0`))
      .update(b)
      .digest('hex'),
    input.gitBlob,
    input.path
  );
}
const rendered = process.argv.includes('--rendered');
const python = process.env.LIBX_CJSON_PYTHON ?? 'python3';
const regeneration = [
  ...['import-cjson-1.7.19.py', 'assemble-cjson-translation.py'].map((script) =>
    JSON.parse(
      execFileSync(
        python,
        [path.join(root, 'scripts/importers', script), '--root', root, '--check'],
        { encoding: 'utf8' }
      )
    )
  ),
];
const expectedPages = [
  '01-guide/01-usage.md',
  '02-license/01-license.md',
  '02-license/02-contributors.md',
];
assert.deepEqual([...review.scope].sort(), expectedPages);
assert.deepEqual(review.pages.map((p) => p.id).sort(), expectedPages);
const sourceTargets = new Map();
for (const lang of ['en', 'ja'])
  for (const page of expectedPages) {
    const route = '/docs/cjson/v1-7-19/' + lang + '/' + page.replace(/\.md$/, '') + '/';
    sourceTargets.set(
      route,
      parse(body(read(path.join(app, 'src/content/docs/v1-7-19', lang, page))))
    );
  }
for (const lang of ['en', 'ja']) {
  const directory = path.join(app, 'src/content/docs/v1-7-19', lang);
  const files = fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => path.relative(directory, path.join(e.parentPath, e.name)))
    .sort();
  assert.deepEqual(files, expectedPages, `unexpected ${lang} article set`);
}
const records = [];
let checkedLinks = 0;
for (const page of review.pages) {
  assert.equal(page.status, 'passed');
  assert.equal(page.method, 'ai-content-review');
  assert.equal(page.separateReviewPass, true);
  for (const role of ['source', 'canonical', 'translation']) {
    const r = page[role];
    assert.equal(sha(path.join(root, r.path)), r.sha256, `${page.id}:${role}`);
    const lines = read(path.join(root, r.path)).replace(/\n$/, '').split('\n').length;
    assert.deepEqual(r.coverage, [[1, lines]]);
  }
  const trees = {};
  for (const [lang, role] of [
    ['en', 'canonical'],
    ['ja', 'translation'],
  ]) {
    const source = path.join(app, 'src/content/docs/v1-7-19', lang, page.id);
    assert.equal(sha(source), page[role].sha256, source);
    const sourceTree = parse(body(read(source)));
    trees[lang] = sourceTree;
    assert.equal(new Set(ids(sourceTree)).size, ids(sourceTree).length, 'duplicate source IDs');
    for (const href of links(sourceTree)) {
      if (!href.startsWith('#') && !href.startsWith('/docs/cjson/')) continue;
      const [route, fragment] = href.split('#');
      const target = route ? sourceTargets.get(route) : sourceTree;
      if (target) {
        if (fragment) assert.ok(ids(target).includes(decodeURIComponent(fragment)), href);
      } else {
        assert.ok(
          !fragment && fs.existsSync(path.join(app, 'public', route.slice('/docs/cjson/'.length))),
          href
        );
      }
      checkedLinks++;
    }
    if (!rendered) {
      records.push({
        language: lang,
        page: page.id,
        sourceSha256: sha(source),
        preCount: codes(sourceTree).length,
        sourceInternalLinks: true,
      });
      continue;
    }

    const built = path.join(ciBuild, 'v1-7-19', lang, page.id.replace(/\.md$/, ''), 'index.html');
    const full = parse(read(built));
    const article = all(full, tag('article'))[0];
    assert.ok(article, built);
    const navigation = article.children.findIndex((x) =>
      x.properties?.className?.includes('navigation-container')
    );
    const content = {
      ...article,
      children: navigation < 0 ? article.children : article.children.slice(0, navigation),
    };
    assert.deepEqual(codes(content), codes(sourceTree), `${lang}/${page.id}: code`);
    assert.equal(fold(prose(content)), fold(prose(sourceTree)), `${lang}/${page.id}: prose`);
    assert.equal(count(content, 'li'), count(sourceTree, 'li'));
    for (const id of ids(sourceTree))
      assert.ok(ids(content).includes(id), `${lang}/${page.id}#${id}`);
    for (const href of links(full)) {
      if (!href.startsWith('#') && !href.startsWith('/docs/cjson/')) continue;
      const [route, fragment] = href.split('#');
      let target = route ? path.join(ciBuild, route.slice('/docs/cjson/'.length)) : built;
      if (route && !path.extname(target)) target = path.join(target, 'index.html');
      assert.ok(fs.existsSync(target), href);
      if (fragment)
        assert.ok(
          ids(route ? parse(read(target)) : full).includes(decodeURIComponent(fragment)),
          `${lang}/${page.id}: missing fragment ${href}`
        );
      checkedLinks++;
    }
    const buttons = all(
      content,
      (x) => x.tagName === 'button' && x.properties?.className?.includes('docs-code-copy')
    ).length;
    assert.equal(buttons, codes(sourceTree).length);
    records.push({
      language: lang,
      page: page.id,
      sourceSha256: sha(source),
      builtSha256: sha(built),
      preCount: codes(sourceTree).length,
      copyButtonCount: buttons,
      prosePreserved: true,
      idsPreserved: true,
    });
  }
  assert.deepEqual(codes(trees.en), codes(trees.ja));
  assert.equal(count(trees.en, 'li'), count(trees.ja, 'li'));
  if (page.id.includes('contributors')) {
    assert.equal(count(trees.en, 'li'), 85);
    assert.deepEqual(links(trees.en), links(trees.ja));
  }
}
assert.deepEqual(
  fs.readFileSync(
    rendered ? path.join(ciBuild, 'assets/cJSON-LICENSE.txt') : path.join(app, 'public/assets/cJSON-LICENSE.txt')
  ),
  fs.readFileSync(path.join(notes, 'source/LICENSE'))
);
if (rendered)
  assert.equal(
    records.reduce((s, r) => s + r.copyButtonCount, 0),
    32
  );
console.log(
  JSON.stringify(
    {
      status: 'passed',
      checkedAt: new Date().toISOString(),
      scope: rendered
        ? 'All3reviewedENJA pairs, frozen8inputs/Gitblobs, fullbuiltprose/code/list/IDs/copy, internalroutes andallfragments, rawMITasset'
        : 'All3reviewedENJA pairs, frozen8inputs/Gitblobs, sourcecollection/regeneration/IDs/code/lists/internalfragments and originalMITasset',
      records,
      checkedInternalLinks: checkedLinks,
      nativeDisplay: 'not-checked',
      regeneration,
      rendered,
    },
    null,
    2
  )
);
