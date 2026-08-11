#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAX_INDEX_BYTES = 2 * 1024 * 1024;

function stripMarkdown(value) {
  return value
    .replace(/<a\s+id=["'][^"']+["']\s*><\/a>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~>#|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function slugifyHeading(value) {
  return stripMarkdown(value)
    .toLocaleLowerCase('en')
    .replace(/[^\p{Letter}\p{Number}\s_-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractSearchEntry(source, relativePath, baseUrl, version, lang) {
  const { data, content } = matter(source);
  const route = relativePath
    .replace(/\.(?:md|mdx)$/i, '')
    .split(path.sep)
    .join('/');
  const headings = [...content.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((match) => {
    const explicitId = match[2].match(/<a\s+id=["']([^"']+)["']/i)?.[1];
    const text = stripMarkdown(match[2]);
    return { text, slug: explicitId ?? slugifyHeading(match[2]) };
  });
  const anchors = [...content.matchAll(/<a\s+id=["']([^"']+)["']/gi)].map((match) => match[1]);
  const identifiers = [
    ...content.matchAll(
      /\b(?:luaL?_[A-Za-z0-9_]+|LUA_[A-Z0-9_]+|glfw[A-Za-z0-9_]+|GLFW_[A-Z0-9_]+)\b/g
    ),
  ].map((match) => match[0]);
  const uniqueIdentifiers = [...new Set(identifiers)];
  return {
    title: String(data.title ?? headings[0]?.text ?? route),
    description: String(data.description ?? ''),
    url: `${baseUrl.replace(/\/$/, '')}/${version}/${lang}/${route}/`,
    headings,
    anchors: [...new Set(anchors)],
    identifiers: uniqueIdentifiers,
    symbols: uniqueIdentifiers.map((name) => ({
      name,
      anchor: anchors.find((anchor) => anchor === name || anchor.endsWith(`-${name}`)) ?? name,
    })),
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

  fs.mkdirSync(outputRoot, { recursive: true });
  const outputs = [];
  for (const [key, entries] of [...groups].sort()) {
    const [version, lang] = key.split('/');
    const outputPath = path.join(outputRoot, version, `${lang}.json`);
    const json = `${JSON.stringify({ schemaVersion: 1, version, lang, entries })}\n`;
    if (Buffer.byteLength(json) > MAX_INDEX_BYTES) {
      throw new Error(`Search index exceeds 2 MiB: ${key}`);
    }
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, json);
    outputs.push({ key, pages: entries.length, bytes: Buffer.byteLength(json) });
  }
  return outputs;
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
    ? path.join(rootDir, 'apps', project)
    : path.join(rootDir, 'templates', template);
  const config = fs.readFileSync(path.join(projectRoot, 'src/config/project.config.jsonc'), 'utf8');
  const explicitBaseUrl = config.match(/"baseUrl"\s*:\s*"([^"]+)"/)?.[1];
  const baseUrlPrefix = config.match(/"baseUrlPrefix"\s*:\s*"([^"]+)"/)?.[1] ?? '/docs';
  const projectSlug = config.match(/"projectSlug"\s*:\s*"([^"]+)"/)?.[1];
  const baseUrl =
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
