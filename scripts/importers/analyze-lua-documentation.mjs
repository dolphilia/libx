#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize } from 'parse5';

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

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function analyzeHtml(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const document = parse(source);
  const headings = [];
  const anchors = [];
  const links = [];
  const preBlocks = [];

  walk(document, (node) => {
    if (!node.tagName) return;
    const tagName = node.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tagName)) {
      headings.push({
        level: Number(tagName.slice(1)),
        text: textContent(node).replace(/\s+/g, ' ').trim(),
        anchor: findFirstAnchor(node),
      });
    }
    const id = attr(node, 'id');
    const name = attr(node, 'name');
    if (id) anchors.push({ value: id, source: 'id', tag: tagName });
    if (name) anchors.push({ value: name, source: 'name', tag: tagName });
    if (tagName === 'a' && attr(node, 'href')) {
      links.push({ href: attr(node, 'href'), text: textContent(node).replace(/\s+/g, ' ').trim() });
    }
    if (tagName === 'pre') preBlocks.push(textContent(node));
  });

  const body = findElement(document, 'body');
  const sectionCandidates = buildSectionCandidates(body?.childNodes ?? []);
  const uniqueAnchors = new Set(anchors.map((item) => item.value));
  const duplicateAnchors = [...uniqueAnchors]
    .map((value) => ({ value, count: anchors.filter((item) => item.value === value).length }))
    .filter((item) => item.count > 1);
  const fragmentLinks = links.filter((item) => item.href.startsWith('#'));
  const missingFragmentTargets = [...new Set(fragmentLinks.map((item) => item.href.slice(1)))]
    .filter((target) => !uniqueAnchors.has(target))
    .sort();

  return {
    bytes: Buffer.byteLength(source),
    sha256: sha256(filePath),
    headings,
    headingCounts: countBy(headings.map((heading) => `h${heading.level}`)),
    anchors: anchors.map((item) => item.value),
    anchorKinds: countBy(anchors.map((item) => anchorKind(item.value))),
    duplicateAnchors,
    links: links.map((item) => item.href),
    linkKinds: countBy(links.map((item) => linkKind(item.href))),
    missingFragmentTargets,
    preBlocks: preBlocks.length,
    sectionCandidates,
  };
}

function findElement(node, tagName) {
  if (node.tagName?.toLowerCase() === tagName) return node;
  for (const child of node.childNodes ?? []) {
    const result = findElement(child, tagName);
    if (result) return result;
  }
  return null;
}

function findFirstAnchor(node) {
  let result = attr(node, 'id') ?? attr(node, 'name') ?? null;
  if (result) return result;
  for (const child of node.childNodes ?? []) {
    result = findFirstAnchor(child);
    if (result) return result;
  }
  return null;
}

function buildSectionCandidates(nodes) {
  const candidates = [];
  let current = null;
  for (const node of nodes) {
    const tagName = node.tagName?.toLowerCase();
    if (tagName === 'h1' || tagName === 'h2') {
      if (current) candidates.push(current);
      current = {
        level: Number(tagName.slice(1)),
        title: textContent(node).replace(/\s+/g, ' ').trim(),
        anchor: findFirstAnchor(node),
        serializedBytes: 0,
        anchors: 0,
        links: 0,
        preBlocks: 0,
      };
    }
    if (!current) continue;
    current.serializedBytes += Buffer.byteLength(serialize(node));
    walk(node, (descendant) => {
      const descendantTag = descendant.tagName?.toLowerCase();
      if (attr(descendant, 'id') || attr(descendant, 'name')) current.anchors += 1;
      if (descendantTag === 'a' && attr(descendant, 'href')) current.links += 1;
      if (descendantTag === 'pre') current.preBlocks += 1;
    });
  }
  if (current) candidates.push(current);
  return candidates;
}

function analyzeMan(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const sections = [...source.matchAll(/^\.SH\s+(.+)$/gm)].map((match) => match[1]);
  const subsections = [...source.matchAll(/^\.SS\s+(.+)$/gm)].map((match) => match[1]);
  return {
    bytes: Buffer.byteLength(source),
    sha256: sha256(filePath),
    sections,
    subsections,
    macros: countBy([...source.matchAll(/^\.(\S+)/gm)].map((match) => match[1])),
  };
}

function analyzeHeader(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const identifiers = [...source.matchAll(/\b(?:luaL?_[A-Za-z0-9_]+|LUA_[A-Z0-9_]+)\b/g)].map(
    (match) => match[0]
  );
  return {
    bytes: Buffer.byteLength(source),
    sha256: sha256(filePath),
    identifiers: [...new Set(identifiers)].sort(),
  };
}

function countBy(values) {
  return Object.fromEntries(
    [...new Set(values)]
      .sort()
      .map((value) => [value, values.filter((item) => item === value).length])
  );
}

function anchorKind(value) {
  if (/^\d+(?:\.\d+)*$/.test(value)) return 'section';
  if (value.startsWith('luaL_')) return 'luaL-api';
  if (value.startsWith('lua_')) return 'lua-api';
  if (value.startsWith('pdf-')) return 'lua-library';
  return 'other';
}

function linkKind(href) {
  if (href.startsWith('#')) return 'fragment';
  if (/^https?:\/\//.test(href)) return 'external-http';
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return 'other-scheme';
  return 'relative';
}

const args = process.argv.slice(2);
const sourceRoot = path.resolve(
  optionValue(args, '--source', '.tmp/document-import/lua/02-extracted/lua-5.5.1')
);
const outputPath = optionValue(args, '--output', null);
const required = [
  'doc/manual.html',
  'doc/contents.html',
  'doc/readme.html',
  'doc/lua.1',
  'doc/luac.1',
  'src/lua.h',
  'src/lauxlib.h',
  'src/lualib.h',
  'src/luaconf.h',
];
for (const relativePath of required) {
  if (!fs.existsSync(path.join(sourceRoot, relativePath))) {
    throw new Error(`必要なLua公式ファイルがありません: ${relativePath}`);
  }
}

const html = Object.fromEntries(
  ['manual.html', 'contents.html', 'readme.html'].map((name) => [
    name,
    analyzeHtml(path.join(sourceRoot, 'doc', name)),
  ])
);
const headers = Object.fromEntries(
  ['lua.h', 'lauxlib.h', 'lualib.h', 'luaconf.h'].map((name) => [
    name,
    analyzeHeader(path.join(sourceRoot, 'src', name)),
  ])
);
const documentedIdentifiers = new Set(
  html['manual.html'].anchors
    .map((anchor) => anchor.replace(/^pdf-/, ''))
    .filter((anchor) => /^(?:luaL?_|LUA_)/.test(anchor))
);
const headerIdentifiers = new Set(Object.values(headers).flatMap((header) => header.identifiers));
const report = {
  schemaVersion: 1,
  sourceRoot,
  version: '5.5.1',
  files: required.map((relativePath) => ({
    path: relativePath,
    bytes: fs.statSync(path.join(sourceRoot, relativePath)).size,
    sha256: sha256(path.join(sourceRoot, relativePath)),
  })),
  html,
  man: {
    'lua.1': analyzeMan(path.join(sourceRoot, 'doc/lua.1')),
    'luac.1': analyzeMan(path.join(sourceRoot, 'doc/luac.1')),
  },
  headers,
  identifierCoverage: {
    documented: [...documentedIdentifiers].sort(),
    inHeaders: [...headerIdentifiers].sort(),
    documentedNotInHeaders: [...documentedIdentifiers]
      .filter((identifier) => !headerIdentifiers.has(identifier))
      .sort(),
    headerNotDocumented: [...headerIdentifiers]
      .filter((identifier) => !documentedIdentifiers.has(identifier))
      .sort(),
  },
};

const json = `${JSON.stringify(report, null, 2)}\n`;
if (outputPath) {
  const resolvedOutput = path.resolve(outputPath);
  fs.mkdirSync(path.dirname(resolvedOutput), { recursive: true });
  fs.writeFileSync(resolvedOutput, json);
  console.log(`Lua文書インベントリを保存しました: ${resolvedOutput}`);
} else {
  process.stdout.write(json);
}
