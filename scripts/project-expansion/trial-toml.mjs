// 候補TOML専用の変換試験。採用・翻訳・Astro検証を代替しない。
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { parseFragment } from 'parse5';
import { hashFile } from './ledger.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const directory = 'docs/notes/project-expansion/research/2026-10-01';
const read = (name) => fs.readFileSync(path.join(root, directory, name), 'utf8');
const write = (name, text) => fs.writeFileSync(path.join(root, directory, name), text);
const parser = unified().use(remarkParse).use(remarkGfm);
const stripPositions = (value) => {
  if (Array.isArray(value)) return value.map(stripPositions);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'position').map(([key, entry]) => [key, stripPositions(entry)]));
  return value;
};
const ast = (text) => stripPositions(parser.parse(text));
const walk = (node, visit) => { visit(node); for (const child of node.children ?? node.childNodes ?? []) walk(child, visit); };
const nodes = (tree, type) => { const found = []; walk(tree, (node) => { if (node.type === type || node.tagName === type) found.push(node); }); return found; };
const textContent = (node) => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textContent).join('');
const normalizedNewlines = (text) => text.replace(/\r\n/g, '\n').replace(/\n$/, '');
const spec = read('toml-published-spec.txt');
const grammar = read('toml/toml.abnf');
const originalLink = 'https://github.com/toml-lang/toml/blob/1.1.0/toml.abnf';
const internalLink = '/docs/toml/v1-1-0/en/02-reference/02-abnf/';
assert.equal(spec.split(originalLink).length, 2);
const converted = spec.replace(originalLink, internalLink);
const wrapped = `# TOML 1.1.0 ABNF\n\n\`\`\`text\n${grammar.replace(/\n$/, '')}\n\`\`\`\n`;
write('toml-trial/01-specification.md', `---\ntitle: "TOML v1.1.0"\n---\n\n${converted}`);
write('toml-trial/02-abnf.md', wrapped);
assert.deepEqual(ast(converted.replace(internalLink, originalLink)), ast(spec));
assert.equal(nodes(ast(spec), 'code').length, 70);
assert.equal(wrapped.slice(wrapped.indexOf('```text\n') + 8, wrapped.lastIndexOf('\n```')), grammar.replace(/\n$/, ''));
assert.equal(normalizedNewlines(nodes(ast(wrapped), 'code')[0].value), normalizedNewlines(grammar));

const normalizeSource = (tree) => {
  walk(tree, (node) => {
    if (node.type === 'text') node.value = node.value.replace(/\s+/g, ' ');
    if (node.url) node.url = node.url.replace('#user-content-', '#').replace(originalLink, './toml.abnf');
  });
  return tree;
};
const repositoryBody = ast(read('toml/toml.md'));
assert.equal(repositoryBody.children.shift().children[0].type, 'image');
repositoryBody.children[0] = ast(spec).children[0]; // 公開版の版本文見出しへ対応。
assert.deepEqual(normalizeSource(repositoryBody), normalizeSource(ast(spec)));

for (const [name, body] of [['01-specification', converted], ['02-abnf', wrapped]]) {
  const html = execFileSync('pandoc', ['--from=gfm', '--to=html5', '--wrap=none', '--syntax-highlighting=none'], { input: body, encoding: 'utf8' });
  write(`toml-trial/${name}.html`, html);
  const tree = parseFragment(html);
  const pre = nodes(tree, 'pre');
  const code = nodes(ast(body), 'code');
  assert.equal(pre.length, code.length);
  pre.forEach((node, index) => assert.equal(normalizedNewlines(textContent(node)), normalizedNewlines(code[index].value)));
  const identifiers = new Set();
  walk(tree, (node) => { const id = node.attrs?.find((attr) => attr.name === 'id'); if (id) { assert.ok(!identifiers.has(id.value)); identifiers.add(id.value); } });
  for (const node of nodes(tree, 'a')) {
    const href = node.attrs.find((attr) => attr.name === 'href')?.value;
    assert.ok(href);
    if (href.startsWith('#')) assert.ok(identifiers.has(href.slice(1)), `不明なアンカー: ${href}`);
  }
}
const artifacts = ['toml-published-spec.txt', 'toml/toml.md', 'toml/toml.abnf', 'toml-trial/01-specification.md', 'toml-trial/02-abnf.md', 'toml-trial/01-specification.html', 'toml-trial/02-abnf.html'].map((name) => ({ path: `${directory}/${name}`, sha256: hashFile(path.join(root, directory, name)) }));
write('toml-trial/SOURCE_EQUIVALENCE.json', `${JSON.stringify({
  method: 'mechanical-check', command: 'node scripts/project-expansion/trial-toml.mjs', artifacts,
  results: { ast: 'passed', sourceBody: 'passed', codeBlocks: 70, grammar: 'passed', htmlCode: 'passed', fragmentLinks: 'passed' },
  mappings: ['仕様repoロゴは公開Text versionにない', 'TOML→TOML v1.1.0版本文見出し', '#user-content-*→#*', '相対ABNF→同タグGitHub URL→想定内部URL', '本文テキストの折返し空白', 'HTMLのCRLF→LFと最終改行'],
  limits: ['機械検査のみ。翻訳・AI全文内容レビュー・Astro表示検証は未実施。'],
}, null, 2)}\n`);
console.log('TOML候補変換試験: 全本文AST・70コード・ABNF・HTMLコード・アンカー合格');
