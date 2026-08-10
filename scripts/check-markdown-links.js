#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');

function collectMarkdownFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectMarkdownFiles(entryPath));
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(entryPath);
  }
  return files;
}

function removeFencedCode(content) {
  const lines = content.split(/\r?\n/);
  let fenceCharacter = null;
  let fenceLength = 0;

  return lines.map((line) => {
    const match = line.match(/^\s*(`{3,}|~{3,})/);
    if (match) {
      const character = match[1][0];
      if (fenceCharacter === null) {
        fenceCharacter = character;
        fenceLength = match[1].length;
      } else if (character === fenceCharacter && match[1].length >= fenceLength) {
        fenceCharacter = null;
        fenceLength = 0;
      }
      return '';
    }
    return fenceCharacter === null ? line : '';
  });
}

function githubSlug(heading) {
  return heading
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

function collectAnchors(filePath) {
  const anchors = new Set();
  const occurrences = new Map();
  const lines = removeFencedCode(fs.readFileSync(filePath, 'utf8'));

  for (const line of lines) {
    const heading = line.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/)?.[1];
    if (!heading) continue;

    const baseSlug = githubSlug(heading);
    const count = occurrences.get(baseSlug) ?? 0;
    occurrences.set(baseSlug, count + 1);
    anchors.add(count === 0 ? baseSlug : `${baseSlug}-${count}`);
  }
  return anchors;
}

function parseTarget(rawTarget) {
  const withoutAngles =
    rawTarget.startsWith('<') && rawTarget.endsWith('>') ? rawTarget.slice(1, -1) : rawTarget;
  const [pathAndQuery, fragment = ''] = withoutAngles.split('#', 2);
  const relativePath = pathAndQuery.split('?', 1)[0];
  return {
    relativePath: decodeURIComponent(relativePath),
    fragment: decodeURIComponent(fragment).toLowerCase(),
  };
}

function checkFile(filePath) {
  const failures = [];
  const lines = removeFencedCode(fs.readFileSync(filePath, 'utf8'));
  const linkPattern = /!?\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+["'][^)]*["'])?\)/g;

  lines.forEach((line, index) => {
    for (const match of line.matchAll(linkPattern)) {
      const rawTarget = match[1];
      if (/^(?:https?:|mailto:|tel:|data:)/i.test(rawTarget) || rawTarget.startsWith('/')) continue;

      let target;
      try {
        target = parseTarget(rawTarget);
      } catch {
        failures.push({ line: index + 1, target: rawTarget, reason: 'URLとして解釈できません' });
        continue;
      }

      const targetFile = target.relativePath
        ? path.resolve(path.dirname(filePath), target.relativePath)
        : filePath;

      if (!fs.existsSync(targetFile)) {
        failures.push({ line: index + 1, target: rawTarget, reason: '参照先が存在しません' });
        continue;
      }

      if (target.fragment && targetFile.endsWith('.md')) {
        const anchors = collectAnchors(targetFile);
        if (!anchors.has(target.fragment)) {
          failures.push({ line: index + 1, target: rawTarget, reason: '見出しが存在しません' });
        }
      }
    }
  });

  return failures;
}

const markdownFiles = [
  path.join(repositoryRoot, 'README.md'),
  ...collectMarkdownFiles(path.join(repositoryRoot, 'docs')),
];
const failures = markdownFiles.flatMap((filePath) =>
  checkFile(filePath).map((failure) => ({ filePath, ...failure }))
);

if (failures.length > 0) {
  console.error('Markdownの相対リンクに問題があります:');
  for (const failure of failures) {
    console.error(
      `  ${path.relative(repositoryRoot, failure.filePath)}:${failure.line} ${failure.target} (${failure.reason})`
    );
  }
  process.exit(1);
}

console.log(`Markdown相対リンク検査: ${markdownFiles.length}ファイル、問題なし`);
