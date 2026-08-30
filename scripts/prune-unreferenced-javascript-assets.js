#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TEXT_EXTENSIONS = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.mjs',
  '.txt',
  '.webmanifest',
  '.xml',
]);

async function collectFiles(directory) {
  const files = [];

  async function visit(currentDirectory) {
    for (const entry of await fs.readdir(currentDirectory, { withFileTypes: true })) {
      const entryPath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) await visit(entryPath);
      else if (entry.isFile()) files.push(entryPath);
    }
  }

  await visit(directory);
  return files;
}

function isJavaScriptAsset(relativePath) {
  return (
    path.extname(relativePath).toLowerCase() === '.js' &&
    relativePath.split(path.sep).includes('assets')
  );
}

function extractJavaScriptReferences(content) {
  const references = [];
  const pattern = /["'`](?![a-z]+:|\/\/)([^"'`\s?#]+\.js)(?:[?#][^"'`\s]*)?["'`]/gi;
  for (const match of content.matchAll(pattern)) references.push(match[1]);
  return references;
}

function resolveReference(sourceRelativePath, reference) {
  const decoded = decodeURI(reference).replaceAll('\\', '/');
  const resolved = decoded.startsWith('/')
    ? decoded.slice(1)
    : path.posix.join(path.posix.dirname(sourceRelativePath.replaceAll(path.sep, '/')), decoded);
  return path.posix.normalize(resolved).replace(/^\.\//, '');
}

export async function inspectUnreferencedJavaScriptAssets(directory) {
  const root = path.resolve(directory);
  const files = await collectFiles(root);
  const relativeByAbsolute = new Map(
    files.map((file) => [file, path.relative(root, file).replaceAll(path.sep, '/')])
  );
  const candidates = new Set(
    [...relativeByAbsolute.values()].filter((relativePath) => isJavaScriptAsset(relativePath))
  );
  const dependencies = new Map();
  const reachable = new Set();

  for (const file of files) {
    const relativePath = relativeByAbsolute.get(file);
    if (!TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())) continue;

    const content = await fs.readFile(file, 'utf8');
    const references = extractJavaScriptReferences(content)
      .map((reference) => resolveReference(relativePath, reference))
      .filter((reference) => candidates.has(reference));

    if (candidates.has(relativePath)) dependencies.set(relativePath, references);
    else for (const reference of references) reachable.add(reference);
  }

  const queue = [...reachable];
  while (queue.length > 0) {
    const current = queue.pop();
    for (const dependency of dependencies.get(current) ?? []) {
      if (reachable.has(dependency)) continue;
      reachable.add(dependency);
      queue.push(dependency);
    }
  }

  const unreferenced = [...candidates].filter((candidate) => !reachable.has(candidate)).sort();
  let removableBytes = 0;
  for (const relativePath of unreferenced) {
    removableBytes += (await fs.stat(path.join(root, relativePath))).size;
  }

  return {
    root,
    candidateCount: candidates.size,
    reachableCount: reachable.size,
    unreferenced,
    removableBytes,
  };
}

export async function pruneUnreferencedJavaScriptAssets(directory, { apply = false } = {}) {
  const report = await inspectUnreferencedJavaScriptAssets(directory);
  if (apply) {
    for (const relativePath of report.unreferenced) {
      await fs.rm(path.join(report.root, relativePath));
    }
  }
  return { ...report, applied: apply };
}

function formatMiB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

async function main() {
  const target = path.resolve(process.argv[2] ?? 'dist');
  const apply = process.argv.includes('--apply');
  const report = await pruneUnreferencedJavaScriptAssets(target, { apply });
  console.log(
    `未参照JavaScript: ${report.unreferenced.length}/${report.candidateCount}件、` +
      `${formatMiB(report.removableBytes)}${apply ? 'を削除' : 'を削除可能'}`
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
