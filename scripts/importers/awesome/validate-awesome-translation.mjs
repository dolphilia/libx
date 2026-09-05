#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { rootDir, snapshotVersion } from './common.mjs';
import { getAwesomeApps } from './app-ownership.mjs';

const version = snapshotVersion;
const requireComplete = process.argv.includes('--require-complete');
const contentRootOptionIndex = process.argv.indexOf('--content-root');
const contentRoots =
  contentRootOptionIndex === -1
    ? getAwesomeApps(rootDir).apps.map((app) => ({
        appId: app.id,
        directory: path.join(app.directory, 'src/awesome-content', version),
      }))
    : [
        {
          appId: 'awesome',
          directory: path.resolve(process.argv[contentRootOptionIndex + 1] ?? ''),
        },
      ];
const errors = [];

if (contentRootOptionIndex !== -1 && !process.argv[contentRootOptionIndex + 1]) {
  console.error('- awesome: --content-root にはディレクトリを指定してください');
  process.exit(1);
}

function files(root) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.relative(root, path.join(entry.parentPath, entry.name)))
    .sort();
}
function markdownTokens(content) {
  const codeTokens = [];
  const localDestinations = [];
  const tree = unified().use(remarkParse).parse(content);
  function visit(node) {
    if (node.type === 'inlineCode') codeTokens.push(node.value);
    if (
      (node.type === 'link' || node.type === 'image') &&
      typeof node.url === 'string' &&
      !/^(?:https?|ftp):\/\//i.test(node.url)
    ) {
      localDestinations.push(node.url);
    }
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  return { codeTokens, localDestinations };
}
function extract(content) {
  const parsed = matter(content);
  const isRst = /-rst$/.test(parsed.data.licenseSource ?? '');
  const markdown = isRst
    ? { codeTokens: [], localDestinations: [] }
    : markdownTokens(parsed.content);
  const rstTargets = [...parsed.content.matchAll(/`[^`]*?<((?:https?|ftp):\/\/[^>]+)>`_/g)].map(
    (match) => match[1]
  );
  return {
    licenseSource: parsed.data.licenseSource ?? null,
    headingLevels: [...parsed.content.matchAll(/^(#{1,6})\s+.+$/gm)].map(
      (match) => match[1].length
    ),
    urls: [...parsed.content.matchAll(/https?:\/\/[^\s)>]+/g)].map((match) =>
      match[0].replace(/[.,;:]$/, '')
    ),
    listStructure: [...parsed.content.matchAll(/^([ \t]*)([-*+]|\d+\.)\s+(.+)$/gm)].map(
      (match) => ({
        indent: match[1].length,
        marker: /^\d+\.$/.test(match[2]) ? 'ordered' : 'unordered',
        urls: [...match[3].matchAll(/https?:\/\/[^\s)>]+/g)].map((url) =>
          url[0].replace(/[.,;:]$/, '')
        ),
      })
    ),
    rstTargets,
    codeTokens: isRst
      ? [...parsed.content.matchAll(/``([^`\n]+)``/g)].map((match) => match[1])
      : markdown.codeTokens,
    localDestinations: markdown.localDestinations,
  };
}
let englishPageCount = 0;
let japanesePageCount = 0;
for (const { appId, directory: contentRoot } of contentRoots) {
  const englishRoot = path.join(contentRoot, 'en');
  const japaneseRoot = path.join(contentRoot, 'ja');
  const englishFiles = new Set(files(englishRoot));
  const japaneseFiles = files(japaneseRoot);
  englishPageCount += englishFiles.size;
  japanesePageCount += japaneseFiles.length;
  for (const file of japaneseFiles) {
    if (!englishFiles.has(file)) {
      errors.push(`${appId}: 日本語ページに対応する英語ページがありません: ${file}`);
      continue;
    }
    const englishMarkdown = fs.readFileSync(path.join(englishRoot, file), 'utf8');
    const japaneseMarkdown = fs.readFileSync(path.join(japaneseRoot, file), 'utf8');
    const en = extract(englishMarkdown);
    const ja = extract(japaneseMarkdown);
    if (/[⟦⟧]|MARKDOWN_/.test(japaneseMarkdown))
      errors.push(`${appId}: Markdown保護記号が日本語ページに残っています: ${file}`);
    if (/:[ぁ-んァ-ヶ一-龠]+[：:]/.test(japaneseMarkdown))
      errors.push(`${appId}: 翻訳されたショートコードが日本語ページに残っています: ${file}`);
    if (en.licenseSource !== ja.licenseSource)
      errors.push(`${appId}: licenseSource が不一致です: ${file}`);
    if (JSON.stringify(en.headingLevels) !== JSON.stringify(ja.headingLevels))
      errors.push(`${appId}: 見出し階層または順序が不一致です: ${file}`);
    if (JSON.stringify(en.listStructure) !== JSON.stringify(ja.listStructure))
      errors.push(`${appId}: リスト項目構造または順序が不一致です: ${file}`);
    if (JSON.stringify(en.urls) !== JSON.stringify(ja.urls))
      errors.push(`${appId}: URL順序または集合が不一致です: ${file}`);
    if (JSON.stringify(en.codeTokens) !== JSON.stringify(ja.codeTokens))
      errors.push(`${appId}: インラインコードが不一致です: ${file}`);
    if (JSON.stringify(en.localDestinations) !== JSON.stringify(ja.localDestinations))
      errors.push(`${appId}: 内部リンクまたはアンカーリンクが不一致です: ${file}`);
    if (JSON.stringify(en.rstTargets) !== JSON.stringify(ja.rstTargets))
      errors.push(`${appId}: RSTリンク先が不一致です: ${file}`);
  }
  if (requireComplete) {
    for (const file of [...englishFiles].sort()) {
      if (!japaneseFiles.includes(file)) errors.push(`${appId}: 日本語ページが未翻訳です: ${file}`);
    }
  }
}
if (englishPageCount === 0) errors.push('awesome: 検査対象の英語本文がありません');
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Awesome translation validation: OK (${japanesePageCount}/${englishPageCount} translated pages${
      requireComplete ? ', complete' : ''
    })`
  );
}
