import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync, gunzipSync } from 'node:zlib';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { parseFragment } from 'parse5';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
export const editorial = path.join(root, 'docs/notes/document-import/awesome/editorial');
export const versions = ['v2026-08-20', 'v2026-08-23'];
export const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
// 呼出側は論理パス .json を維持し、移行済みの .json.gz も同じ入口で扱う。
export function jsonStoragePath(file) {
  const plain = file.endsWith('.json.gz') ? file.slice(0, -3) : file;
  if (!plain.endsWith('.json')) return file;
  const compressed = `${plain}.gz`;
  if (fs.existsSync(plain) && fs.existsSync(compressed))
    throw new Error(`JSONの保存形式が重複しています: ${plain}`);
  return file.endsWith('.json.gz') || fs.existsSync(compressed) ? compressed : plain;
}
export const jsonExists = (file) => fs.existsSync(jsonStoragePath(file));
export function json(file) {
  const target = jsonStoragePath(file);
  const bytes = fs.readFileSync(target);
  return JSON.parse((target.endsWith('.json.gz') ? gunzipSync(bytes) : bytes).toString('utf8'));
}
export function save(file, value) {
  const target = jsonStoragePath(file);
  if (target.endsWith('.json.gz') && fs.existsSync(target.slice(0, -3)))
    throw new Error(`非圧縮JSONが残っています。移行してから保存してください: ${target}`);
  const serialized = `${JSON.stringify(value, null, 2)}\n`;
  const bytes = target.endsWith('.json.gz') ? gzipSync(serialized, { level: 9 }) : serialized;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const staging = `${target}.${process.pid}.tmp`;
  let staged = false;
  try {
    const descriptor = fs.openSync(staging, 'wx');
    staged = true;
    try {
      fs.writeFileSync(descriptor, bytes);
    } finally {
      fs.closeSync(descriptor);
    }
    fs.renameSync(staging, target);
  } finally {
    if (staged) fs.rmSync(staging, { force: true });
  }
}
export function storeBlob(value) {
  const sha256 = hash(value);
  const file = path.join(editorial, 'baseline/blobs', `${sha256}.gz`);
  if (fs.existsSync(file)) {
    if (hash(gunzipSync(fs.readFileSync(file))) !== sha256)
      throw new Error(`保存入力が破損: ${file}`);
  } else {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, gzipSync(value, { level: 9 }));
  }
  return sha256;
}
export function blob(sha256) {
  if (!/^[a-f0-9]{64}$/.test(sha256)) throw new Error('不正な入力ハッシュ');
  const value = gunzipSync(fs.readFileSync(path.join(editorial, 'baseline/blobs', `${sha256}.gz`)));
  if (hash(value) !== sha256) throw new Error(`保存入力ハッシュ不一致: ${sha256}`);
  return value.toString('utf8');
}
const parser = unified().use(remarkParse).use(remarkGfm);
function text(node) {
  return node.value ?? (node.children ?? []).map(text).join('');
}
export function analyze(markdown) {
  const parsed = matter(markdown);
  const tree = parser.parse(parsed.content);
  const definitions = new Map();
  function walk(node, fn) {
    fn(node);
    for (const child of node.children ?? []) walk(child, fn);
  }
  walk(tree, (node) => {
    if (node.type === 'definition') definitions.set(node.identifier, node.url);
  });
  const units = [];
  const links = [];
  const headings = [];
  const code = [];
  const htmlIds = [];
  let images = 0;
  let section = [];
  function tokens(node) {
    const urls = [];
    walk(node, (part) => {
      if (['link', 'image', 'definition'].includes(part.type)) urls.push(part.url);
      if (['linkReference', 'imageReference'].includes(part.type))
        urls.push(definitions.get(part.identifier) ?? `unresolved:${part.identifier}`);
      if (part.type === 'html') {
        const fragment = parseFragment(part.value);
        const htmlWalk = (element) => {
          for (const attr of element.attrs ?? []) {
            if (['href', 'src', 'poster'].includes(attr.name)) urls.push(attr.value);
          }
          for (const child of element.childNodes ?? []) htmlWalk(child);
        };
        htmlWalk(fragment);
      }
    });
    return urls;
  }
  const keptTypes = new Set([
    'heading',
    'paragraph',
    'listItem',
    'tableRow',
    'code',
    'html',
    'definition',
    'thematicBreak',
  ]);
  function collect(node, insideItem = false, insideTable = false) {
    if (node.type === 'heading') {
      section = section.slice(0, node.depth - 1);
      section[node.depth - 1] = text(node);
      headings.push({ depth: node.depth, text: text(node), line: node.position.start.line });
    }
    if (keptTypes.has(node.type) && !(node.type === 'paragraph' && (insideItem || insideTable))) {
      const fragment = parsed.content.slice(node.position.start.offset, node.position.end.offset);
      const urls = tokens(node);
      const decorations = [];
      walk(node, (part) => {
        if (part.type === 'text')
          decorations.push(...(part.value.match(/\p{Extended_Pictographic}/gu) ?? []));
      });
      units.push({
        id: `u${String(units.length + 1).padStart(6, '0')}`,
        type: node.type,
        start: node.position.start.offset,
        end: node.position.end.offset,
        lines: [node.position.start.line, node.position.end.line],
        section: section.filter(Boolean),
        sha256: hash(fragment),
        primaryLink: urls[0] ?? null,
        links: urls,
        decorations,
      });
    }
    if (node.type === 'code' || node.type === 'inlineCode')
      code.push({ type: node.type, value: node.value });
    if (node.type === 'image' || node.type === 'imageReference') images++;
    if (node.type === 'html') {
      const fragment = parseFragment(node.value);
      const ids = (element) => {
        if (['img', 'video', 'iframe'].includes(element.tagName)) images++;
        for (const attr of element.attrs ?? [])
          if (attr.name === 'id' || attr.name === 'name') htmlIds.push(attr.value);
        for (const child of element.childNodes ?? []) ids(child);
      };
      ids(fragment);
    }
    for (const child of node.children ?? [])
      collect(
        child,
        insideItem || node.type === 'listItem',
        insideTable || node.type === 'tableRow'
      );
  }
  collect(tree);
  links.push(...tokens(tree));
  const lines = parsed.content.split('\n');
  const metrics = {
    bytes: Buffer.byteLength(markdown),
    lines: markdown.split('\n').length,
    units: units.length,
    listItems: units.filter((u) => u.type === 'listItem').length,
    tableRows: units.filter((u) => u.type === 'tableRow').length,
    htmlBlocks: units.filter((u) => u.type === 'html').length,
    images,
    h1: headings.filter((h) => h.depth === 1).length,
    deepHeadings: headings.filter((h) => h.depth > 3).length,
    rst:
      /-rst$/.test(parsed.data.licenseSource ?? '') ||
      /`[^`\n]*<https?:\/\/[^>]+>`_/.test(parsed.content),
    manualTocCandidates: lines.filter((line) => /^\s*[-*+]\s+\[[^\]]+\]\(#[^)]+\)/.test(line))
      .length,
    operationalCandidates: headings.filter((h) =>
      /sponsor|donat|contribut|license|acknowledg|目次|ライセンス|寄付|謝辞/i.test(h.text)
    ),
    templateIntroduction:
      /A curated collection of resources and projects focused on|を扱う資料や関連プロジェクトをまとめたAwesomeリストです。/.test(
        parsed.content
      ),
    jaEnglishLines: lines.filter(
      (line) => /[a-zA-Z]{4}/.test(line) && !/[ぁ-んァ-ヶ一-龠]/.test(line)
    ).length,
    templateReplacementCandidates: (
      parsed.content.match(/関連資料です|関連プロジェクトです|関連ツールです/g) ?? []
    ).length,
  };
  return {
    frontmatter: parsed.data,
    bodySha256: hash(parsed.content),
    bodyLength: parsed.content.length,
    headings,
    htmlIds,
    links,
    code,
    units,
    metrics,
  };
}
