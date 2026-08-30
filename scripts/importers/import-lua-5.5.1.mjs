#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import {
  assertSafeImportTarget,
  comparePathDescriptions,
  describePath,
  hashFile,
  prepareImportForCheck,
  prepareImportOutput,
} from './safe-import-output.js';
import { LUA_PAGE_MAP, LUA_VERSION, LUA_VERSION_ID } from './lua-5.5.1-page-map.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const defaultSourceRoot = path.join(rootDir, '.tmp/document-import/lua/02-extracted/lua-5.5.1');
const defaultBugsSource = path.join(
  rootDir,
  '.tmp/document-import/lua/01-source/official-bugs.html'
);
const allowedOutputRoot = path.join(rootDir, 'apps/lua/src/content/docs');
const defaultOutputRoot = path.join(allowedOutputRoot, LUA_VERSION_ID, 'en');
const reportPath = path.join(rootDir, '.tmp/document-import/lua/05-reports/import-manifest.json');
const sourceHashes = {
  'doc/manual.html': '90768c77d97223a7052c44f65fea3590d515e8a111753bd0a54fa96fd0e9245d',
  'doc/readme.html': 'f6cb9082089df5bc843e7cf6cf55fac1a100b4d8a46c5272b6cac8f69856cdd6',
  'doc/lua.1': '070de30bbac451a0d93ba1d2754d4bc192268b643051fbf33b018d3dedcc58fd',
  'doc/luac.1': 'ac60e6992db478539dff611beed7ad01f52622c897657a9152165470039b0494',
  'official-bugs.html': '8992aa7b0783d81a848d436d071fcc04ab487af5724c92495d48ebbaf94bdaee',
};

function optionValue(args, name, fallback) {
  const equals = args.find((argument) => argument.startsWith(`${name}=`));
  if (equals) return equals.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] && !args[index + 1].startsWith('--')
    ? args[index + 1]
    : fallback;
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name.toLowerCase() === name)?.value;
}

function textContent(node) {
  if (node.nodeName === '#text') return node.value ?? '';
  return (node.childNodes ?? []).map(textContent).join('');
}

function walk(node, visitor) {
  visitor(node);
  for (const child of node.childNodes ?? []) walk(child, visitor);
}

function findElement(node, tagName) {
  if (node.tagName?.toLowerCase() === tagName) return node;
  for (const child of node.childNodes ?? []) {
    const result = findElement(child, tagName);
    if (result) return result;
  }
  return null;
}

function anchorsIn(node) {
  const anchors = [];
  walk(node, (descendant) => {
    const id = attr(descendant, 'id');
    const name = attr(descendant, 'name');
    if (id) anchors.push(id);
    if (name) anchors.push(name);
  });
  return anchors;
}

function matchesBoundary(node, boundary) {
  if (!boundary) return false;
  if (boundary.anchor && anchorsIn(node).includes(boundary.anchor)) return true;
  if (boundary.heading && /^h[1-6]$/i.test(node.tagName ?? '')) {
    return textContent(node).replace(/\s+/g, ' ').trim() === boundary.heading;
  }
  return false;
}

function isNavigationOrFooter(node) {
  const classes = (attr(node, 'class') ?? '').split(/\s+/);
  return classes.includes('menubar') || classes.includes('footer');
}

function sliceBody(document, start, end) {
  const body = findElement(document, 'body');
  if (!body) throw new Error('HTMLにbody要素がありません');
  const nodes = body.childNodes ?? [];
  const startIndex = nodes.findIndex((node) => matchesBoundary(node, start));
  if (startIndex < 0) throw new Error(`開始境界が見つかりません: ${JSON.stringify(start)}`);
  const relativeEnd = end
    ? nodes.slice(startIndex + 1).findIndex((node) => matchesBoundary(node, end))
    : -1;
  if (end && relativeEnd < 0) throw new Error(`終了境界が見つかりません: ${JSON.stringify(end)}`);
  const endIndex = end ? startIndex + 1 + relativeEnd : nodes.length;
  return nodes.slice(startIndex, endIndex).filter((node) => !isNavigationOrFooter(node));
}

function loadSources(sourceRoot, bugsSource) {
  const sourcePaths = {
    'manual.html': path.join(sourceRoot, 'doc/manual.html'),
    'readme.html': path.join(sourceRoot, 'doc/readme.html'),
    'lua.1': path.join(sourceRoot, 'doc/lua.1'),
    'luac.1': path.join(sourceRoot, 'doc/luac.1'),
    'official-bugs.html': bugsSource,
  };
  for (const [name, sourcePath] of Object.entries(sourcePaths)) {
    if (!fs.existsSync(sourcePath))
      throw new Error(`Lua公式入力がありません: ${name}: ${sourcePath}`);
  }
  const actualHashes = {
    'doc/manual.html': hashFile(sourcePaths['manual.html']),
    'doc/readme.html': hashFile(sourcePaths['readme.html']),
    'doc/lua.1': hashFile(sourcePaths['lua.1']),
    'doc/luac.1': hashFile(sourcePaths['luac.1']),
    'official-bugs.html': hashFile(sourcePaths['official-bugs.html']),
  };
  for (const [name, expected] of Object.entries(sourceHashes)) {
    if (actualHashes[name] !== expected) {
      throw new Error(`固定したLua 5.5.1入力とハッシュが一致しません: ${name}`);
    }
  }
  return {
    paths: sourcePaths,
    hashes: actualHashes,
    documents: {
      'manual.html': parse(fs.readFileSync(sourcePaths['manual.html'], 'utf8')),
      'readme.html': parse(fs.readFileSync(sourcePaths['readme.html'], 'utf8')),
      'official-bugs.html': parse(fs.readFileSync(sourcePaths['official-bugs.html'], 'utf8')),
    },
  };
}

function pageUrl(output) {
  return `/docs/lua/${LUA_VERSION_ID}/en/${output.replace(/\.md$/, '')}/`;
}

function buildPageSlices(sources) {
  return LUA_PAGE_MAP.map((page) => {
    if (page.kind === 'man') return { page, nodes: [], anchors: [] };
    const nodes = sliceBody(sources.documents[page.source], page.start, page.end);
    return { page, nodes, anchors: nodes.flatMap(anchorsIn) };
  });
}

function buildAnchorMap(pageSlices) {
  const result = new Map();
  for (const { page, anchors } of pageSlices) {
    for (const anchor of anchors) {
      if (result.has(anchor)) {
        throw new Error(`複数ページに同じ上流アンカーがあります: ${anchor}`);
      }
      result.set(anchor, { output: page.output, url: `${pageUrl(page.output)}#${anchor}` });
    }
  }
  return result;
}

function rewriteHref(href, page, anchorMap) {
  if (/^(?:https?:|mailto:)/i.test(href)) return href;
  const normalized = href.replace(/^\.\//, '');
  const fragmentIndex = normalized.indexOf('#');
  const filePart = fragmentIndex >= 0 ? normalized.slice(0, fragmentIndex) : normalized;
  const fragment = fragmentIndex >= 0 ? normalized.slice(fragmentIndex + 1) : '';
  if ((filePart === '' || ['manual.html', 'readme.html'].includes(filePart)) && fragment) {
    const target = anchorMap.get(fragment);
    if (target) return target.url;
  }
  if (filePart === 'manual.html' && !fragment) {
    return pageUrl('01-overview/04-introduction.md');
  }
  if (filePart === 'readme.html' && !fragment) return pageUrl('01-overview/01-about.md');
  if (filePart === 'contents.html') {
    const target = fragment && anchorMap.get(fragment);
    return (
      target?.url ?? `https://www.lua.org/manual/5.5/contents.html${fragment ? `#${fragment}` : ''}`
    );
  }
  if (page.source === 'official-bugs.html') return `https://www.lua.org/${normalized}`;
  return `https://www.lua.org/manual/5.5/${normalized}`;
}

function escapeInlineCode(value) {
  const matches = value.match(/`+/g) ?? [];
  const fence = '`'.repeat(Math.max(1, ...matches.map((match) => match.length + 1)));
  const padding = value.startsWith('`') || value.endsWith('`') ? ' ' : '';
  return `${fence}${padding}${value}${padding}${fence}`;
}

function cleanInline(value) {
  return value
    .replace(/[\t\r\n ]+/g, ' ')
    .replace(/ +([,.;:!?])/g, '$1')
    .trim();
}

function renderInline(node, context) {
  if (node.nodeName === '#text') {
    return (node.value ?? '')
      .replace(/[\t\r\n ]+/g, ' ')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  const tag = node.tagName?.toLowerCase();
  const inner = () => (node.childNodes ?? []).map((child) => renderInline(child, context)).join('');
  if (!tag) return inner();
  if (tag === 'a') {
    const id = attr(node, 'id') ?? attr(node, 'name');
    const anchor = id ? `<a id="${id}"></a>` : '';
    const label = cleanInline(inner());
    const href = attr(node, 'href');
    if (!href) return `${anchor}${label}`;
    if (!label) return anchor;
    return `${anchor}[${label}](${rewriteHref(href, context.page, context.anchorMap)})`;
  }
  if (tag === 'code' || tag === 'tt') return escapeInlineCode(cleanInline(textContent(node)));
  if (tag === 'kbd') return `<kbd>${cleanInline(textContent(node))}</kbd>`;
  if (tag === 'em' || tag === 'i') return `*${cleanInline(inner())}*`;
  if (tag === 'b' || tag === 'strong') return `**${cleanInline(inner())}**`;
  if (tag === 'sup') return `<sup>${cleanInline(inner())}</sup>`;
  if (tag === 'br') return '  \n';
  if (tag === 'img') {
    const alt = attr(node, 'alt')
      ?.replace(/^\[|\]$/g, '')
      .trim();
    return alt && alt.toLowerCase() !== 'lua' ? `*${alt}*` : '';
  }
  return inner();
}

function codeLanguage(page) {
  if (page.output.startsWith('03-c-api/') || page.output.startsWith('04-auxiliary-library/')) {
    return 'c';
  }
  if (page.output.endsWith('complete-syntax.md')) return 'text';
  if (page.source === 'readme.html') return 'bash';
  return 'lua';
}

function renderPre(node, context) {
  const value = textContent(node).replace(/^\n/, '').replace(/\s+$/, '');
  const runs = value.match(/`+/g) ?? [];
  const fence = '`'.repeat(Math.max(3, ...runs.map((run) => run.length + 1)));
  return `${fence}${codeLanguage(context.page)}\n${value}\n${fence}`;
}

function indentListItem(value, marker) {
  const lines = value.trim().split('\n');
  return `${marker} ${lines[0]}${lines
    .slice(1)
    .map((line) => `\n  ${line}`)
    .join('')}`;
}

function renderMixedChildren(node, context) {
  const parts = [];
  let inline = '';
  const flushInline = () => {
    const value = cleanInline(inline);
    if (value) parts.push(value);
    inline = '';
  };

  for (const child of node.childNodes ?? []) {
    const childTag = child.tagName?.toLowerCase();
    if (['p', 'pre', 'ul', 'ol', 'dl', 'blockquote', 'div'].includes(childTag)) {
      flushInline();
      const value = renderBlock(child, context);
      if (value) parts.push(value);
    } else {
      inline += renderInline(child, context);
    }
  }
  flushInline();
  return parts.join('\n\n');
}

function renderBlock(node, context) {
  if (node.nodeName === '#text') return cleanInline(node.value ?? '');
  const tag = node.tagName?.toLowerCase();
  if (!tag || tag === 'html' || tag === 'body') {
    return (node.childNodes ?? [])
      .map((child) => renderBlock(child, context))
      .filter(Boolean)
      .join('\n\n');
  }
  if (/^h[1-6]$/.test(tag)) {
    const originalLevel = Number(tag.slice(1));
    const level = Math.min(6, originalLevel + context.headingShift);
    return `${'#'.repeat(level)} ${cleanInline(renderInline(node, context))}`;
  }
  if (tag === 'p') return cleanInline(renderInline(node, context));
  if (tag === 'pre') return renderPre(node, context);
  if (tag === 'hr') return '---';
  if (tag === 'ul' || tag === 'ol') {
    const items = (node.childNodes ?? []).filter((child) => child.tagName?.toLowerCase() === 'li');
    return items
      .map((item, index) =>
        indentListItem(renderBlock(item, context), tag === 'ol' ? `${index + 1}.` : '-')
      )
      .join('\n');
  }
  if (tag === 'li') {
    return renderMixedChildren(node, context).trim();
  }
  if (tag === 'dl') {
    const rows = [];
    let term = '';
    for (const child of node.childNodes ?? []) {
      const childTag = child.tagName?.toLowerCase();
      if (childTag === 'dt') term = cleanInline(renderInline(child, context));
      if (childTag === 'dd') {
        const description = cleanInline(renderMixedChildren(child, context));
        rows.push(`- **${term}**${description ? `: ${description}` : ''}`);
        term = '';
      }
    }
    if (term) rows.push(`- **${term}**`);
    return rows.join('\n');
  }
  if (tag === 'dt' || tag === 'dd') {
    return (node.childNodes ?? [])
      .map((child) => renderBlock(child, context))
      .filter(Boolean)
      .join('\n\n');
  }
  if (tag === 'blockquote') {
    return (node.childNodes ?? [])
      .map((child) => renderBlock(child, context))
      .filter(Boolean)
      .join('\n\n')
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');
  }
  if (['div', 'small', 'span'].includes(tag)) {
    return (node.childNodes ?? [])
      .map((child) => renderBlock(child, context))
      .filter(Boolean)
      .join('\n\n');
  }
  return cleanInline(renderInline(node, context));
}

function minimumHeadingLevel(nodes) {
  let minimum = 6;
  for (const node of nodes) {
    walk(node, (descendant) => {
      const match = descendant.tagName?.toLowerCase().match(/^h([1-6])$/);
      if (match) minimum = Math.min(minimum, Number(match[1]));
    });
  }
  return minimum;
}

function quoteYaml(value) {
  return JSON.stringify(value);
}

function renderHtmlPage(slice, anchorMap) {
  const minimum = minimumHeadingLevel(slice.nodes);
  const headingShift = slice.page.syntheticHeading ? 2 - minimum : 1 - minimum;
  const context = { page: slice.page, anchorMap, headingShift };
  const body = slice.nodes
    .map((node) => renderBlock(node, context))
    .filter(Boolean)
    .join('\n\n');
  const heading = slice.page.syntheticHeading ? `# ${slice.page.title}\n\n` : '';
  return `${heading}${body}`.trim();
}

function unquoteTroff(value) {
  return value
    .replace(/^"|"$/g, '')
    .replace(/\\-/g, '-')
    .replace(/\\&/g, '')
    .replace(/\\f[BRIP]/g, '')
    .trim();
}

function renderTroffMacro(macro, value) {
  const tokens = value.match(/"[^"]*"|\S+/g)?.map(unquoteTroff) ?? [];
  const styles = macro.split('');
  return tokens
    .map((token, index) => {
      const style = styles[index % styles.length];
      if (style === 'B') return `**${token}**`;
      if (style === 'I') return `*${token}*`;
      return token;
    })
    .join(' ');
}

export function renderMan(source, page) {
  const output = [`# ${page.title}`];
  let paragraph = [];
  let expectTerm = false;
  let definitionTerm = '';
  const flush = () => {
    const description = paragraph
      .join(' ')
      .replace(/\s+([,.;:)])/g, '$1')
      .replace(/\(\s+/g, '(');
    if (definitionTerm) {
      output.push(`- ${definitionTerm}${description ? `: ${description}` : ''}`);
    } else if (description) {
      output.push(description);
    }
    paragraph = [];
    definitionTerm = '';
  };
  for (const rawLine of source.split(/\r?\n/)) {
    if (rawLine.startsWith('.\\"') || rawLine.startsWith('.TH')) continue;
    const macroMatch = rawLine.match(/^\.(SH|SS|LP|TP|br|BR|BI|IR|RI|B|I)\s*(.*)$/);
    if (macroMatch) {
      const [, macro, value] = macroMatch;
      if (macro === 'SH' || macro === 'SS') {
        flush();
        output.push(`${macro === 'SH' ? '##' : '###'} ${unquoteTroff(value)}`);
      } else if (macro === 'LP') flush();
      else if (macro === 'TP') {
        flush();
        expectTerm = true;
      } else if (macro === 'br') flush();
      else {
        const rendered = renderTroffMacro(macro, value);
        if (expectTerm) definitionTerm = rendered;
        else paragraph.push(rendered);
        expectTerm = false;
      }
      continue;
    }
    const text = unquoteTroff(rawLine);
    if (!text) continue;
    if (expectTerm) definitionTerm = `**${text}**`;
    else paragraph.push(text);
    expectTerm = false;
  }
  flush();
  return output.join('\n\n').trim();
}

export function renderHtmlFragmentForTest(html, page = {}) {
  const document = parse(`<body>${html}</body>`);
  const body = findElement(document, 'body');
  const context = {
    page: { source: 'manual.html', output: 'fixture.md', title: 'Fixture', ...page },
    anchorMap: new Map(),
    headingShift: 0,
  };
  return (body?.childNodes ?? [])
    .map((node) => renderBlock(node, context))
    .filter(Boolean)
    .join('\n\n');
}

function frontmatter(page) {
  return [
    '---',
    `title: ${quoteYaml(page.title)}`,
    `description: ${quoteYaml(page.description)}`,
    '---',
  ].join('\n');
}

function renderPage(slice, sources, anchorMap) {
  const page = slice.page;
  const body =
    page.kind === 'man'
      ? renderMan(fs.readFileSync(sources.paths[page.source], 'utf8'), page)
      : renderHtmlPage(slice, anchorMap);
  return `${frontmatter(page)}\n\n${body}\n`;
}

function validateGenerated(outputRoot, pageSlices, anchorMap) {
  const expected = LUA_PAGE_MAP.map((page) => page.output).sort();
  const actual = describePath(outputRoot)
    .map((record) => record.path)
    .sort();
  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    throw new Error('生成されたLua定本のファイル集合がページマップと一致しません');
  }
  const anchors = new Map();
  const errors = [];
  for (const page of LUA_PAGE_MAP) {
    const filePath = path.join(outputRoot, page.output);
    const content = fs.readFileSync(filePath, 'utf8');
    for (const match of content.matchAll(/<a id="([^"]+)"><\/a>/g)) {
      if (anchors.has(match[1])) errors.push(`${page.output}: 重複アンカー ${match[1]}`);
      anchors.set(match[1], page.output);
    }
    if (/\]\((?:\.\/)?(?:manual|readme|contents)\.html(?:#|\))/m.test(content)) {
      errors.push(`${page.output}: 未変換の相対HTMLリンク`);
    }
    const proseWithoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
    for (const match of proseWithoutCode.matchAll(/<\/?[A-Za-z][^>]*>/g)) {
      if (!/^<a id="[^"]+">$|^<\/a>$|^<\/?(?:kbd|sup)>$/.test(match[0])) {
        errors.push(`${page.output}: 未処理HTML ${match[0]}`);
      }
    }
  }
  for (const [anchor, target] of anchorMap) {
    if (anchors.get(anchor) !== target.output)
      errors.push(`${target.output}: アンカー欠落 ${anchor}`);
  }
  const expectedAnchors = pageSlices.flatMap((slice) => slice.anchors).length;
  if (anchors.size !== expectedAnchors) {
    errors.push(`アンカー総数不一致: expected=${expectedAnchors}, actual=${anchors.size}`);
  }
  if (errors.length) throw new Error(`Lua定本検査に失敗しました:\n${errors.join('\n')}`);
}

function generate(outputRoot, pageSlices, sources, anchorMap) {
  for (const slice of pageSlices) {
    const outputPath = path.join(outputRoot, slice.page.output);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, renderPage(slice, sources, anchorMap));
  }
}

export function runCli(args = process.argv.slice(2)) {
  const sourceRoot = path.resolve(optionValue(args, '--source', defaultSourceRoot));
  const bugsSource = path.resolve(optionValue(args, '--bugs-source', defaultBugsSource));
  const outputRoot = assertSafeImportTarget(
    optionValue(args, '--output', defaultOutputRoot),
    allowedOutputRoot,
    'en'
  );
  const checkOnly = args.includes('--check');
  const allowMissingSource = args.includes('--allow-missing-source');
  const dryRun = args.includes('--dry-run');
  if (checkOnly && allowMissingSource && !fs.existsSync(sourceRoot) && !fs.existsSync(bugsSource)) {
    console.log(`Lua固定入力がないため再現性検査をスキップします: ${sourceRoot}, ${bugsSource}`);
    return;
  }
  const sources = loadSources(sourceRoot, bugsSource);
  const pageSlices = buildPageSlices(sources);
  const anchorMap = buildAnchorMap(pageSlices);

  if (dryRun) {
    console.log('Lua 5.5.1インポート dry-run');
    console.log(`取得元: ${sourceRoot}`);
    console.log(`bugs取得元: ${bugsSource}`);
    console.log(`定本出力先: ${outputRoot}`);
    console.log(`生成予定: ${LUA_PAGE_MAP.length}ページ、${anchorMap.size}アンカー`);
    console.log('ファイルは変更していません');
    return;
  }

  const operations = {
    targetPath: outputRoot,
    generate: (preparedPath) => generate(preparedPath, pageSlices, sources, anchorMap),
    validate: (preparedPath) => validateGenerated(preparedPath, pageSlices, anchorMap),
  };

  if (checkOnly) {
    const result = prepareImportForCheck(operations);
    if (!result.matches) {
      throw new Error('Lua英語定本は固定入力からの再生成結果と一致しません');
    }
    console.log(`Lua英語定本の再現性検査に成功しました: ${result.after.length}ページ`);
    return;
  }

  const result = prepareImportOutput({
    ...operations,
    commitOptions: { rootDir, scenario: 'import-lua-5.5.1' },
  });
  const report = {
    schemaVersion: 1,
    importer: 'import-lua-5.5.1.mjs',
    importerVersion: 3,
    upstreamVersion: LUA_VERSION,
    versionId: LUA_VERSION_ID,
    sourceRoot,
    sourceHashes: sources.hashes,
    pageCount: LUA_PAGE_MAP.length,
    anchorCount: anchorMap.size,
    changed: !comparePathDescriptions(result.before, result.after),
    outputs: result.after,
    pages: pageSlices.map(({ page, anchors }) => ({
      source: page.source,
      output: page.output,
      title: page.title,
      sourceAnchors: anchors.length,
      bytes: fs.statSync(path.join(outputRoot, page.output)).size,
      sha256: hashFile(path.join(outputRoot, page.output)),
    })),
  };
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Lua英語定本を生成しました: ${result.after.length}ページ、${anchorMap.size}アンカー`);
  console.log(`生成記録: ${reportPath}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
