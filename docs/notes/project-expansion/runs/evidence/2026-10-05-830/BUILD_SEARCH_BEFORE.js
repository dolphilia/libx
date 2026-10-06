#!/usr/bin/env node

import fs from 'node:fs';
import { resolveApp } from '../packages/project-config/src/app-registry.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { parseFragment } from 'parse5';
import { createRequire } from 'node:module';
import { commitPreparedDirectory } from './selective-output.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAX_INDEX_BYTES = 2 * 1024 * 1024;
// Use the parser and slugger already pinned by Astro's Markdown renderer.
const require = createRequire(import.meta.url);
const astroRequire = createRequire(require.resolve('astro/package.json'));
const markdownRequire = createRequire(astroRequire.resolve('@astrojs/markdown-remark'));
const [{ unified }, { default: remarkParse }, { default: GithubSlugger }] = await Promise.all([
  import(markdownRequire.resolve('unified')),
  import(markdownRequire.resolve('remark-parse')),
  import(markdownRequire.resolve('github-slugger')),
]);
const markdown = unified().use(remarkParse);
const walkMarkdown = (node) => [node, ...(node.children ?? []).flatMap(walkMarkdown)];
const htmlText = (node) => node.value ?? (node.childNodes ?? []).map(htmlText).join('');
const headingText = (node) =>
  node.type === 'html'
    ? htmlText(parseFragment(node.value))
    : (node.value ?? (node.children ?? []).map(headingText).join(''));

function stripMarkdown(value) {
  return (
    value
      .replace(/<a\s+id=["'][^"']+["']\s*><\/a>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      // Preserve underscores inside API identifiers while removing emphasis delimiters.
      .replace(/(?<![\p{Letter}\p{Number}])_+|_+(?![\p{Letter}\p{Number}])/gu, ' ')
      .replace(/[`*~>#|]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

export function slugifyHeading(value) {
  const heading = markdown.parse(`# ${value}`).children.find((node) => node.type === 'heading');
  return new GithubSlugger().slug(heading ? headingText(heading) : value);
}

export function extractSearchEntry(source, relativePath, baseUrl, version, lang) {
  const { data, content } = matter(source);
  const route = relativePath
    .replace(/\.(?:md|mdx)$/i, '')
    .split(path.sep)
    .join('/');
  const ast = markdown.parse(content);
  const markdownNodes = walkMarkdown(ast);
  const slugger = new GithubSlugger();
  const headings = markdownNodes
    .filter((node) => node.type === 'heading')
    .map((node) => {
      const text = headingText(node);
      const slug = slugger.slug(text);
      const explicitId = node.children
        .filter((child) => child.type === 'html')
        .map((child) => child.value.match(/<a\s+id=["']([^"']+)["']/i)?.[1])
        .find(Boolean);
      return { text, slug: explicitId ?? slug };
    });
  const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
  // Remove only Markdown code ranges; keep text inside real inline HTML links.
  let anchorContent = content;
  const codeRanges = markdownNodes
    .filter((node) => node.type === 'code' || node.type === 'inlineCode')
    .map((node) => [node.position.start.offset, node.position.end.offset])
    .sort((a, b) => b[0] - a[0]);
  for (const [start, end] of codeRanges)
    anchorContent = anchorContent.slice(0, start) + anchorContent.slice(end);
  const nodes = walk(parseFragment(anchorContent));
  const attr = (node, name) => node.attrs?.find((value) => value.name === name)?.value;
  const nodeText = (node) => node.value ?? (node.childNodes ?? []).map(nodeText).join('');
  const anchors = nodes
    .flatMap((node) => [attr(node, 'id'), node.tagName === 'a' ? attr(node, 'name') : undefined])
    .filter(Boolean);
  const identifiers = [
    ...content.matchAll(
      /\b(?:luaL?_[A-Za-z0-9_]+|LUA_[A-Z0-9_]+|glfw[A-Za-z0-9_]+|GLFW_[A-Z0-9_]+|xml_[A-Za-z0-9_]+|xpath_[A-Za-z0-9_]+|PUGIXML_[A-Z0-9_]+)\b/g
    ),
  ].map((match) => match[0]);
  const uniqueIdentifiers = [...new Set(identifiers)];
  const url = `${baseUrl.replace(/\/$/, '')}/${version}/${lang}/${route}/`;
  const symbols = uniqueIdentifiers.flatMap((name) => {
    let anchor = anchors.find((value) => value === name || value.endsWith(`-${name}`));
    if (!anchor) {
      for (const node of nodes) {
        if (node.tagName !== 'a' || nodeText(node).trim() !== name) continue;
        const href = attr(node, 'href');
        if (!href) continue;
        const target = new URL(href, `https://index.invalid${url}`);
        const candidate = decodeURIComponent(target.hash.slice(1));
        if (
          target.origin === 'https://index.invalid' &&
          target.pathname.replace(/\/$/, '') === url.replace(/\/$/, '') &&
          anchors.includes(candidate)
        ) {
          anchor = candidate;
          break;
        }
      }
    }
    // Mentions still match body text; only real local targets get exact-symbol ranking.
    return anchor ? [{ name, anchor }] : [];
  });
  return {
    title: String(data.title ?? headings[0]?.text ?? route),
    description: String(data.description ?? ''),
    url,
    headings,
    anchors: [...new Set(anchors)],
    identifiers: symbols.map((symbol) => symbol.name),
    symbols,
    text: stripMarkdown(content),
  };
}

function markdownFiles(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? markdownFiles(entryPath)
        : entry.isFile() && /\.mdx?$/.test(entry.name)
          ? [entryPath]
          : [];
    })
    .sort();
}

export function buildSearchIndexes(projectRoot, baseUrl) {
  const contentRoot = path.join(projectRoot, 'src/content/docs');
  const outputRoot = path.join(projectRoot, 'public/search');
  const groups = new Map();
  for (const filePath of markdownFiles(contentRoot)) {
    const [version, lang, ...rest] = path.relative(contentRoot, filePath).split(path.sep);
    if (!version || !lang || rest.length === 0) continue;
    const key = `${version}/${lang}`;
    const entries = groups.get(key) ?? [];
    entries.push(
      extractSearchEntry(
        fs.readFileSync(filePath, 'utf8'),
        rest.join(path.sep),
        baseUrl,
        version,
        lang
      )
    );
    groups.set(key, entries);
  }

  const prepared = [...groups].sort().map(([key, entries]) => {
    const [version, lang] = key.split('/');
    const json = `${JSON.stringify({ schemaVersion: 1, version, lang, entries })}\n`;
    if (Buffer.byteLength(json) > MAX_INDEX_BYTES) {
      throw new Error(`Search index exceeds 2 MiB: ${key}`);
    }
    return { key, version, lang, json, pages: entries.length, bytes: Buffer.byteLength(json) };
  });
  fs.mkdirSync(path.dirname(outputRoot), { recursive: true });
  const staging = fs.mkdtempSync(`${outputRoot}.prepared-`);
  try {
    for (const entry of prepared) {
      const outputPath = path.join(staging, entry.version, `${entry.lang}.json`);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, entry.json);
    }
    commitPreparedDirectory(outputRoot, staging);
  } finally {
    fs.rmSync(staging, { recursive: true, force: true });
  }
  return prepared.map(({ key, pages, bytes }) => ({ key, pages, bytes }));
}

function option(args, name) {
  const pair = args.find((arg) => arg.startsWith(`${name}=`));
  return pair?.slice(name.length + 1);
}

export function runCli(args = process.argv.slice(2)) {
  const project = option(args, '--project');
  const template = option(args, '--template');
  if ((project ? 1 : 0) + (template ? 1 : 0) !== 1) {
    throw new Error('Specify exactly one of --project or --template');
  }
  const projectRoot = project
    ? resolveApp(project, rootDir).directory
    : path.join(rootDir, 'templates', template);
  const config = fs.readFileSync(path.join(projectRoot, 'src/config/project.config.jsonc'), 'utf8');
  const explicitBaseUrl = config.match(/"baseUrl"\s*:\s*"([^"]+)"/)?.[1];
  const baseUrlPrefix = config.match(/"baseUrlPrefix"\s*:\s*"([^"]+)"/)?.[1] ?? '/docs';
  const projectSlug = config.match(/"projectSlug"\s*:\s*"([^"]+)"/)?.[1];
  const baseUrl =
    (project ? resolveApp(project, rootDir).publicBase : undefined) ??
    explicitBaseUrl ??
    (projectSlug ? `${baseUrlPrefix.replace(/\/$/, '')}/${projectSlug}` : undefined);
  if (!baseUrl) throw new Error(`Cannot resolve baseUrl: ${projectRoot}`);
  const started = performance.now();
  const outputs = buildSearchIndexes(projectRoot, baseUrl);
  const durationMs = Math.round(performance.now() - started);
  if (durationMs > 5000) throw new Error(`Search indexing exceeded 5 seconds: ${durationMs}ms`);
  for (const output of outputs) {
    console.log(`検索索引 ${output.key}: ${output.pages}ページ、${output.bytes} bytes`);
  }
  console.log(`検索索引生成: ${outputs.length}件、${durationMs}ms`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
