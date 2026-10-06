#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serializeOuter } from 'parse5';
import { commitPreparedPathsAtomically } from '../atomic-paths.js';
import {
  assertSafeImportTarget,
  describePath,
  comparePathDescriptions,
  hashFile,
} from './safe-import-output.js';
import { PUGIXML_PAGE_MAP, PUGIXML_VERSION_ID } from './pugixml-1.16-page-map.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const SOURCE_HASHES = JSON.parse(
  fs.readFileSync(new URL('./pugixml-1.16-source-hashes.json', import.meta.url), 'utf8')
);
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const text = (node) =>
  node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const walk = (node, visitor) => {
  visitor(node);
  for (const child of node.childNodes ?? []) walk(child, visitor);
};
const normalized = (value) => value.replace(/\s+/g, ' ').trim();

function assertNoSymlink(target, recursive = false) {
  let current = path.parse(path.resolve(target)).root;
  for (const part of path.resolve(target).split(path.sep).filter(Boolean)) {
    current = path.join(current, part);
    let stat;
    try {
      stat = fs.lstatSync(current);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    if (stat?.isSymbolicLink()) throw new Error(`symlinkは禁止: ${current}`);
  }
  if (recursive && fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
    for (const entry of fs.readdirSync(target)) assertNoSymlink(path.join(target, entry), true);
  }
}
export function readLockedSources(sourceRoot) {
  assertNoSymlink(sourceRoot);
  return Object.fromEntries(
    Object.entries(SOURCE_HASHES).map(([name, expected]) => {
      const file = path.join(sourceRoot, name);
      assertNoSymlink(file);
      if (!fs.lstatSync(file).isFile()) throw new Error(`入力は通常ファイルのみ: ${name}`);
      if (hashFile(file) !== expected) throw new Error(`固定入力SHA-256不一致: ${name}`);
      return [name, fs.readFileSync(file)];
    })
  );
}
function findById(document, id) {
  let result;
  walk(document, (node) => {
    if (attr(node, 'id') === id) {
      assert.equal(result, undefined);
      result = node;
    }
  });
  return result;
}
export function sourceSlices(sources) {
  const manual = parse(sources['docs/manual.html'].toString());
  const quickstart = parse(sources['docs/quickstart.html'].toString());
  const content = findById(manual, 'content');
  const quickContent = findById(quickstart, 'content');
  const footnotes = findById(manual, 'footnotes');
  const quickFootnotes = findById(quickstart, 'footnotes');
  assert.ok(content && quickContent && footnotes && quickFootnotes);
  const manualSections = (content.childNodes ?? []).filter((n) =>
    attr(n, 'class')?.split(' ').includes('sect1')
  );
  assert.equal(manualSections.length, 10);
  return PUGIXML_PAGE_MAP.map((page) => {
    if (page.section === 'license') return { ...page, nodes: [] };
    if (page.section === 'quickstart')
      return { ...page, nodes: [...quickContent.childNodes, quickFootnotes] };
    const nodes = manualSections.filter((n) =>
      (n.childNodes ?? []).some((h) => h.tagName === 'h2' && attr(h, 'id') === page.section)
    );
    assert.equal(nodes.length, 1, page.section);
    return { ...page, nodes: page.section === 'install' ? [...nodes, footnotes] : nodes };
  });
}
export const pageUrl = (page) =>
  `/docs/pugixml/${PUGIXML_VERSION_ID}/en/${page.output.replace(/\.md$/, '')}/`;
export function buildAnchorMaps(slices) {
  const maps = { 'docs/manual.html': new Map(), 'docs/quickstart.html': new Map() };
  for (const page of slices.filter((p) => p.section !== 'license')) {
    for (const node of page.nodes)
      walk(node, (n) => {
        const id = attr(n, 'id');
        if (!id) return;
        const map = maps[page.source];
        assert.ok(!map.has(id), `重複sourceアンカー: ${id}`);
        map.set(id, { page: page.output, url: `${pageUrl(page)}#source-${id}` });
      });
  }
  // The upstream #email reference already describes the contact paragraph.
  const overview = slices.find((p) => p.section === 'overview');
  maps['docs/manual.html'].set('email', {
    page: overview.output,
    url: `${pageUrl(overview)}#source-email`,
  });
  return maps;
}
export function rewriteHref(href, page, maps) {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return href;
  const [file, id] = href.split('#');
  const source = file ? `docs/${file}` : page.source;
  if (maps[source]) {
    if (id) {
      const target = maps[source].get(id);
      if (!target) throw new Error(`参照先がありません: ${page.output}: ${href}`);
      return target.page === page.output ? `#source-${id}` : target.url;
    }
    const destination = PUGIXML_PAGE_MAP.find((p) => p.source === source);
    assert.ok(destination);
    return pageUrl(destination);
  }
  const relative = path.posix.normalize(`docs/${file}`);
  if (
    !Object.hasOwn(SOURCE_HASHES, relative) ||
    (!file.startsWith('images/') && !file.startsWith('samples/'))
  ) {
    throw new Error(`未対応ローカル参照: ${page.output}: ${href}`);
  }
  return `/docs/pugixml/assets/pugixml-v1-16/${file}${id ? `#${id}` : ''}`;
}
export function prepareHtml(page, maps) {
  const html = page.nodes.map(serializeOuter).join('');
  const document = parseFragment(html);
  walk(document, (node) => {
    for (const a of node.attrs ?? []) {
      if (a.name === 'id') a.value = `source-${a.value}`;
      if (a.name === 'href') a.value = rewriteHref(a.value, page, maps);
      if (a.name === 'src' && node.tagName === 'img') a.value = rewriteHref(a.value, page, maps);
    }
  });
  return document.childNodes.map(serializeOuter).join('');
}
export function convertHtml(prepared) {
  const replacements = [];
  const token = (value) => {
    const id = `LIBXPUGIXMLTOKEN${replacements.length}END`;
    replacements.push([id, value]);
    return id;
  };
  assert.ok(!prepared.includes('LIBXPUGIXMLTOKEN'));
  prepared = prepared.replace(
    /<h([1-6]) id="([^"]+)"([^>]*)>([\s\S]*?)<\/h\1>/g,
    (_, level, id, attributes, inner) =>
      `<span id="${id}"></span><h${level}${attributes}>${inner}</h${level}>`
  );
  prepared = prepared.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/g, (value) =>
    value.includes('<a ') ? `<p>${token(value)}</p>` : value
  );
  prepared = prepared.replace(/&amp;(#(?:x[0-9a-f]+|[0-9]+);)/gi, (_, entity) =>
    token(`&amp;${entity}`)
  );
  prepared = prepared.replace(
    '<p>If filing an issue is not possible due to privacy or other concerns,',
    '<span id="source-email"></span><p>If filing an issue is not possible due to privacy or other concerns,'
  );
  prepared = prepared.replace(
    /<pre class="pygments highlight"><code data-lang="([^"]+)">/g,
    (_, language) =>
      `<pre class="${language === 'c++' ? 'cpp' : language}"><code data-lang="${language}">`
  );
  let markdown = execFileSync(
    'pandoc',
    ['-f', 'html', '-t', 'gfm', '--wrap=none', '--syntax-highlighting=none'],
    {
      input: prepared,
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024,
    }
  );
  for (const [id, original] of replacements) markdown = markdown.replaceAll(id, original);
  markdown = markdown.replace(
    /<a href="([^"]+)" class="bare">([^<]+)<\/a>/g,
    (_, href, label) => `[${label}](${href})`
  );
  if (markdown.includes('LIBXPUGIXMLTOKEN')) throw new Error('未処理変換トークン');
  return markdown.trimEnd() + '\n';
}
function frontmatter(page) {
  return `---\ntitle: ${JSON.stringify(page.title)}\ndescription: ${JSON.stringify(page.description)}\nlicenseSource: ${JSON.stringify(page.licenseSource)}\n---\n\n`;
}
export function generateCanonicalPages(sources) {
  const slices = sourceSlices(sources),
    maps = buildAnchorMaps(slices);
  const pages = slices.map((page) => {
    const body =
      page.section === 'license'
        ? `## MIT License\n\n\`\`\`text\n${sources['LICENSE.md'].toString().trimEnd()}\n\`\`\`\n`
        : convertHtml(prepareHtml(page, maps));
    return { ...page, content: frontmatter(page) + body };
  });
  return { pages, maps };
}
export function preservationMetrics(nodes) {
  const result = {
    prose: '',
    codes: [],
    anchors: [],
    links: [],
    images: [],
    tables: [],
    headings: [],
  };
  for (const node of nodes)
    walk(node, (n) => {
      let ancestor = n;
      while (ancestor) {
        if (
          ancestor.tagName === 'script' ||
          attr(ancestor, 'class')?.split(' ').includes('docs-code-toolbar')
        )
          return;
        ancestor = ancestor.parentNode;
      }
      if (n.nodeName === '#text') {
        let parent = n.parentNode,
          code = false;
        while (parent) {
          if (parent.tagName === 'pre') code = true;
          parent = parent.parentNode;
        }
        if (!code) result.prose += ` ${n.value}`;
      }
      if (n.tagName === 'pre') result.codes.push(text(n));
      if (attr(n, 'id')) result.anchors.push(attr(n, 'id'));
      if (n.tagName === 'a' && attr(n, 'href')) result.links.push(attr(n, 'href'));
      if (n.tagName === 'img')
        result.images.push({ src: attr(n, 'src'), alt: attr(n, 'alt') ?? '' });
      if (n.tagName === 'table') {
        const cells = [];
        walk(n, (c) => {
          if (['td', 'th'].includes(c.tagName))
            cells.push({
              tag: c.tagName,
              text: normalized(text(c)),
              colspan: attr(c, 'colspan') ?? '1',
              rowspan: attr(c, 'rowspan') ?? '1',
            });
        });
        result.tables.push(cells);
      }
      if (/^h[1-6]$/.test(n.tagName ?? '')) result.headings.push(normalized(text(n)));
    });
  result.prose = normalized(result.prose);
  return result;
}
export function validatePreservation(page, rendered, maps) {
  if (page.section === 'license') {
    const metrics = preservationMetrics(parseFragment(rendered).childNodes);
    assert.equal(metrics.codes.length, 1);
    assert.equal(
      metrics.codes[0].trimEnd(),
      fs
        .readFileSync(
          path.join(repository, 'docs/notes/document-import/pugixml/v1-16/source/LICENSE.md'),
          'utf8'
        )
        .trimEnd()
    );
    return { page: page.output, noticePreserved: true };
  }
  const source = preservationMetrics(page.nodes),
    output = preservationMetrics(parseFragment(rendered).childNodes);
  assert.equal(output.prose, source.prose, `${page.output}: 本文`);
  assert.deepEqual(output.codes, source.codes, `${page.output}: コード`);
  assert.deepEqual(
    output.images,
    source.images.map((image) => ({ ...image, src: rewriteHref(image.src, page, maps) })),
    `${page.output}: 画像`
  );
  assert.deepEqual(output.tables, source.tables, `${page.output}: 表`);
  assert.deepEqual(output.headings, source.headings, `${page.output}: 見出し`);
  assert.deepEqual(
    output.links,
    source.links.map((href) => rewriteHref(href, page, maps)),
    `${page.output}: リンク`
  );
  const expected = source.anchors.map((a) => `source-${a}`);
  assert.deepEqual(
    output.anchors.filter((a) => expected.includes(a)),
    expected,
    `${page.output}: 元ID`
  );
  assert.equal(new Set(output.anchors).size, output.anchors.length, `${page.output}: 重複ID`);
  return {
    page: page.output,
    proseWords: source.prose.split(/\s+/).length,
    codeBlocks: source.codes.length,
    tables: source.tables.length,
    images: source.images.length,
    sourceAnchors: source.anchors.length,
    links: source.links.length,
    preservationPassed: true,
  };
}
function validateGenerated(directory, generated) {
  assert.deepEqual(
    describePath(directory)
      .map((p) => p.path)
      .sort(),
    PUGIXML_PAGE_MAP.map((p) => p.output).sort()
  );
  for (const page of generated.pages)
    assert.equal(fs.readFileSync(path.join(directory, page.output), 'utf8'), page.content);
}
export function importCanonical({
  sourceRoot,
  outputRoot,
  assetRoot,
  allowedRoot,
  check = false,
  commitOptions,
}) {
  const target = assertSafeImportTarget(outputRoot, allowedRoot, 'en');
  const app = path.resolve(allowedRoot, '../../..');
  assert.equal(path.resolve(assetRoot), path.join(app, 'public/assets/pugixml-v1-16'));
  assertNoSymlink(target, true);
  assertNoSymlink(assetRoot, true);
  for (const directory of [target, assetRoot])
    if (fs.existsSync(directory) && !fs.lstatSync(directory).isDirectory())
      throw new Error(`出力先はディレクトリのみ: ${directory}`);
  const sources = readLockedSources(sourceRoot),
    generated = generateCanonicalPages(sources);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.mkdirSync(path.dirname(assetRoot), { recursive: true });
  const prepared = fs.mkdtempSync(path.join(path.dirname(target), '.en-prepared-'));
  const preparedAssets = fs.mkdtempSync(path.join(path.dirname(assetRoot), '.pugixml-prepared-'));
  try {
    for (const page of generated.pages) {
      const dest = path.join(prepared, page.output);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, page.content);
    }
    for (const [name, data] of Object.entries(sources).filter(
      ([n]) => n.startsWith('docs/images/') || n.startsWith('docs/samples/')
    )) {
      const dest = path.join(preparedAssets, name.slice(5));
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, data);
    }
    fs.writeFileSync(path.join(preparedAssets, 'LICENSE.txt'), sources['LICENSE.md']);
    validateGenerated(prepared, generated);
    const before = describePath(target),
      after = describePath(prepared),
      beforeAssets = describePath(assetRoot),
      afterAssets = describePath(preparedAssets);
    if (check)
      return {
        matches:
          comparePathDescriptions(before, after) &&
          comparePathDescriptions(beforeAssets, afterAssets),
        before,
        after,
        beforeAssets,
        afterAssets,
      };
    commitPreparedPathsAtomically(
      [
        { targetPath: target, preparedPath: prepared },
        { targetPath: assetRoot, preparedPath: preparedAssets },
      ],
      commitOptions
    );
    return { pages: after, assets: afterAssets };
  } finally {
    for (const p of [prepared, preparedAssets])
      if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (
      args.some((a) => a !== '--check' && !/^--source-root=.+$/.test(a)) ||
      new Set(args.map((a) => a.split('=')[0])).size !== args.length
    )
      throw new Error('未対応/重複引数');
    const result = importCanonical({
      sourceRoot:
        args.find((a) => a.startsWith('--source-root='))?.slice(14) ??
        path.join(repository, 'docs/notes/document-import/pugixml/v1-16/source'),
      outputRoot: path.join(repository, 'apps/pugixml/src/content/docs', PUGIXML_VERSION_ID, 'en'),
      assetRoot: path.join(repository, 'apps/pugixml/public/assets/pugixml-v1-16'),
      allowedRoot: path.join(repository, 'apps/pugixml/src/content/docs'),
      check: args.includes('--check'),
    });
    console.log(JSON.stringify(result));
    if ('matches' in result && !result.matches) process.exitCode = 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
