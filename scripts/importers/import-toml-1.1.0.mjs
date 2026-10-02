#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import {
  assertSafeImportTarget,
  describePath,
  hashFile,
  prepareImportForCheck,
  prepareImportOutput,
} from './safe-import-output.js';
import {
  TOML_PAGE_MAP,
  TOML_VERSION_ID,
  TOML_SPECIFICATION_HEADINGS,
} from './toml-1.1.0-page-map.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const SOURCE_HASHES = {
  'specification.md': 'cd36fd06f90cebec13aba35e7389b8ce099779270d5e913d6ec25c511761beb1',
  'toml.abnf': '2038f64825dd9a2bbb22807bcb46900c6d6c30eb728d577e948db8eda87555c5',
  'SITE-LICENSE.txt': '169ec8dbd3ad5d42b29d9d006ccb668414fe5b87b874e18feece8aa3e6d2b6fe',
  'SPEC-LICENSE.txt': 'a9e276d27f1f71f0ca7601eac41bd1b94418d782119190a03f1d966de76065ce',
};
export const ORIGINAL_GRAMMAR_LINK = 'https://github.com/toml-lang/toml/blob/1.1.0/toml.abnf';
export const INTERNAL_GRAMMAR_LINK = `/docs/toml/${TOML_VERSION_ID}/en/02-reference/02-abnf/`;
const parser = unified().use(remarkParse).use(remarkGfm);

function withoutPositions(value) {
  if (Array.isArray(value)) return value.map(withoutPositions);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== 'position')
        .map(([key, entry]) => [key, withoutPositions(entry)])
    );
  }
  return value;
}
export const markdownAST = (text) => withoutPositions(parser.parse(text));
export function nodesOf(tree, type) {
  const result = [];
  function visit(node) {
    if (node.type === type) result.push(node);
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  return result;
}

export function readLockedSources(sourceRoot) {
  if (fs.lstatSync(sourceRoot).isSymbolicLink()) throw new Error('入力rootのsymlinkは禁止です');
  return Object.fromEntries(
    Object.entries(SOURCE_HASHES).map(([name, expected]) => {
      const file = path.join(sourceRoot, name);
      const stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.isSymbolicLink())
        throw new Error(`入力は通常ファイルのみ: ${name}`);
      if (hashFile(file) !== expected) throw new Error(`固定入力SHA-256不一致: ${name}`);
      return [name, fs.readFileSync(file, 'utf8')];
    })
  );
}

function frontmatter(page) {
  return `---\ntitle: ${JSON.stringify(page.title)}\ndescription: ${JSON.stringify(page.description)}\n${page.licenseSource ? `licenseSource: ${JSON.stringify(page.licenseSource)}\n` : ''}---\n\n`;
}

function addStableSpecificationAnchors(source) {
  const tree = parser.parse(source);
  const headings = nodesOf(tree, 'heading');
  const headingText = (node) => node.value ?? (node.children ?? []).map(headingText).join('');
  assert.deepEqual(
    headings.map(headingText),
    TOML_SPECIFICATION_HEADINGS.map(([title]) => title)
  );
  const identifiers = new Set(TOML_SPECIFICATION_HEADINGS.map(([, id]) => id));
  const replacements = headings.map((node, index) => ({
    start: node.position.start.offset,
    end: node.position.start.offset,
    value: `<a id="source-${TOML_SPECIFICATION_HEADINGS[index][1]}"></a>\n\n`,
  }));
  for (const node of nodesOf(tree, 'link').filter((node) => node.url.startsWith('#'))) {
    assert.ok(identifiers.has(node.url.slice(1)), `不明な原文アンカー: ${node.url}`);
    const raw = source.slice(node.position.start.offset, node.position.end.offset);
    const offset = raw.lastIndexOf(`(${node.url})`);
    assert.notEqual(offset, -1, `未処理のフラグメント表記: ${raw}`);
    const start = node.position.start.offset + offset + 1;
    replacements.push({
      start,
      end: start + node.url.length,
      value: `#source-${node.url.slice(1)}`,
    });
  }
  let result = source;
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
    result = result.slice(0, replacement.start) + replacement.value + result.slice(replacement.end);
  }
  return result;
}

export function generateCanonicalPages(sources) {
  assert.equal(sources['specification.md'].split(ORIGINAL_GRAMMAR_LINK).length, 2);
  const specification = addStableSpecificationAnchors(sources['specification.md']).replace(
    ORIGINAL_GRAMMAR_LINK,
    INTERNAL_GRAMMAR_LINK
  );
  const grammar = `# TOML 1.1.0 ABNF grammar\n\n\`\`\`abnf\n${sources['toml.abnf']}\`\`\`\n`;
  const licenses = [
    '# TOML 1.1.0 licenses\n',
    '## Published specification\n',
    '[Original license](https://github.com/toml-lang/toml.io/blob/b950d4929980ee66f2e77bfe421e725ddffbeb69/LICENSE).\n',
    `\`\`\`text\n${sources['SITE-LICENSE.txt']}\`\`\`\n`,
    '## Specification repository and ABNF\n',
    '[Original license](https://github.com/toml-lang/toml/blob/bcbbd1c1f03473ffe97b8bf26a0fc945efe2b4a1/LICENSE).\n',
    `\`\`\`text\n${sources['SPEC-LICENSE.txt']}\`\`\`\n`,
  ].join('\n');
  return TOML_PAGE_MAP.map((page, index) => ({
    ...page,
    content: frontmatter(page) + [specification, grammar, licenses][index],
  }));
}

export function validateCanonicalDirectory(directory, sources) {
  const actual = describePath(directory)
    .map((item) => item.path)
    .sort();
  assert.deepEqual(actual, TOML_PAGE_MAP.map((page) => page.id).sort());
  const body = (id) => matter(fs.readFileSync(path.join(directory, id), 'utf8')).content;
  const original = markdownAST(sources['specification.md']);
  const specification = markdownAST(
    body(TOML_PAGE_MAP[0].id).replace(INTERNAL_GRAMMAR_LINK, ORIGINAL_GRAMMAR_LINK)
  );
  const anchors = TOML_SPECIFICATION_HEADINGS.map(([, id]) => `<a id="source-${id}"></a>`);
  assert.deepEqual(
    nodesOf(specification, 'html').map((node) => node.value),
    anchors.flatMap((anchor) => [anchor.slice(0, -4), '</a>'])
  );
  const anchorParagraphs = specification.children.filter(
    (node) =>
      node.type === 'paragraph' &&
      anchors.includes((node.children ?? []).map((child) => child.value ?? '').join(''))
  );
  assert.equal(anchorParagraphs.length, anchors.length);
  specification.children = specification.children.filter(
    (node) => !anchorParagraphs.includes(node)
  );
  for (const node of nodesOf(specification, 'link')) {
    if (node.url.startsWith('#source-')) node.url = `#${node.url.slice('#source-'.length)}`;
  }
  assert.deepEqual(specification, original, '仕様全文のASTに未許可の差分があります');
  assert.equal(nodesOf(specification, 'code').length, 70);
  assert.equal(nodesOf(specification, 'heading').length, 22);
  assert.equal(nodesOf(specification, 'html').length, 0);
  const grammar = nodesOf(markdownAST(body(TOML_PAGE_MAP[1].id)), 'code');
  assert.equal(grammar.length, 1);
  assert.equal(grammar[0].lang, 'abnf');
  assert.equal(grammar[0].value + '\n', sources['toml.abnf']);
  assert.equal(
    matter(fs.readFileSync(path.join(directory, TOML_PAGE_MAP[1].id), 'utf8')).data.licenseSource,
    'toml-grammar-1.1.0'
  );
  const notices = nodesOf(markdownAST(body(TOML_PAGE_MAP[2].id)), 'code');
  assert.equal(notices.length, 2);
  assert.equal(notices[0].value + '\n', sources['SITE-LICENSE.txt']);
  assert.equal(notices[1].value + '\n', sources['SPEC-LICENSE.txt']);
}

export function importCanonical({ sourceRoot, outputRoot, allowedRoot, check = false }) {
  const targetPath = assertSafeImportTarget(outputRoot, allowedRoot, 'en');
  const sources = readLockedSources(sourceRoot);
  const pages = generateCanonicalPages(sources);
  const generate = (directory) => {
    for (const page of pages) {
      const target = path.join(directory, page.id);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, page.content);
    }
  };
  const validate = (directory) => validateCanonicalDirectory(directory, sources);
  return check
    ? prepareImportForCheck({ targetPath, generate, validate })
    : prepareImportOutput({ targetPath, generate, validate });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.some((arg) => arg !== '--check' && !/^--(source-root|output-root)=.+$/.test(arg)))
      throw new Error('未対応の引数です');
    const keys = args.map((arg) => arg.split('=')[0]);
    if (new Set(keys).size !== keys.length) throw new Error('重複引数は禁止です');
    const option = (name, fallback) =>
      args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1) ?? fallback;
    const result = importCanonical({
      sourceRoot: path.resolve(
        option(
          '--source-root',
          path.join(repository, 'docs/notes/document-import/toml/v1-1-0/source')
        )
      ),
      outputRoot: path.resolve(
        option(
          '--output-root',
          path.join(repository, 'apps/toml/src/content/docs', TOML_VERSION_ID, 'en')
        )
      ),
      allowedRoot: path.join(repository, 'apps/toml/src/content/docs'),
      check: args.includes('--check'),
    });
    console.log(JSON.stringify(result));
    if ('matches' in result && !result.matches) process.exitCode = 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
