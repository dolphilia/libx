#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';
import { createHash } from 'node:crypto';

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

export function collectAnchors(filePath) {
  const anchors = new Set();
  const occurrences = new Map();
  const lines = removeFencedCode(fs.readFileSync(filePath, 'utf8'));

  for (const [index, line] of lines.entries()) {
    // This marker is rendered as the next heading's ID by remarkSourceHeadingIds.
    const sourceId = line.match(/^\s*<!--libx-source-heading:([A-Za-z0-9_.:-]+)-->\s*$/)?.[1];
    const nextBlock = sourceId ? lines.slice(index + 1).find((next) => next.trim()) : null;
    if (sourceId && /^\s{0,3}#{1,6}\s+/.test(nextBlock ?? '')) anchors.add(sourceId);
    const heading = line.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/)?.[1]
      ?? (line.trim() && /^ {0,3}(?:=+|-+)[ \t]*$/.test(lines[index + 1] ?? '')
        ? line.trim() : null);
    if (!heading) continue;

    const baseSlug = githubSlug(heading);
    const count = occurrences.get(baseSlug) ?? 0;
    occurrences.set(baseSlug, count + 1);
    anchors.add(count === 0 ? baseSlug : `${baseSlug}-${count}`);
  }
  // Raw HTML anchors are valid in Markdown. Literal code and HTML comments are not targets.
  const html = lines.join('\n').replace(/(`+)([\s\S]*?)\1/g, '');
  const visit = (node) => {
    if (node.tagName === 'pre' || node.tagName === 'code') return;
    for (const attr of node.attrs ?? []) {
      if (attr.name === 'id' || (node.tagName === 'a' && attr.name === 'name')) {
        anchors.add(attr.value);
      }
    }
    for (const child of node.childNodes ?? []) visit(child);
  };
  visit(parseFragment(html));
  return anchors;
}

function parseTarget(rawTarget) {
  const withoutAngles =
    rawTarget.startsWith('<') && rawTarget.endsWith('>') ? rawTarget.slice(1, -1) : rawTarget;
  const [pathAndQuery, fragment = ''] = withoutAngles.split('#', 2);
  const relativePath = pathAndQuery.split('?', 1)[0];
  return {
    relativePath: decodeURIComponent(relativePath),
    fragment: decodeURIComponent(fragment),
  };
}

export function checkFile(filePath) {
  const failures = [];
  let fragmentContext = filePath;
  const contextPath = path.join(path.dirname(filePath), 'link-context.json');
  if (fs.existsSync(contextPath)) {
    const context = JSON.parse(fs.readFileSync(contextPath, 'utf8'));
    const segments = (context.segments ?? []).map((name) => path.resolve(path.dirname(filePath), name));
    const snapshot = (context.snapshots ?? []).find((item) =>
      path.resolve(path.dirname(filePath), item.file) === path.resolve(filePath)
    );
    if (snapshot) {
      const target = path.resolve(path.dirname(filePath), context.target);
      const hash = (file) => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
      if (!fs.existsSync(target) || hash(filePath) !== snapshot.sha256 || hash(target) !== context.targetSHA256) {
        return [{ line: 1, target: context.target, reason: '保存草稿または完成参照文書のハッシュが文脈記録と一致しません' }];
      }
      // Snapshot TOCs include sections not yet drafted. Validate every link,
      // using the pinned complete document only for same-document fragments.
      fragmentContext = target;
    }

    if (segments.includes(path.resolve(filePath))) {
      fragmentContext = path.resolve(path.dirname(filePath), context.target);
      const assembled = segments.map((segment) => fs.readFileSync(segment, 'utf8')).join('');
      if (assembled !== fs.readFileSync(fragmentContext, 'utf8')) {
        return [
          { line: 1, target: context.target, reason: '分割草稿の結合が参照先の全文と一致しません' },
        ];
      }
    }
  }
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
        : fragmentContext;

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

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const markdownFiles = [
    path.join(repositoryRoot, 'README.md'),
    ...collectMarkdownFiles(path.join(repositoryRoot, 'docs')),
  ].filter((filePath) => {
    // Fixed upstream fmt Markdown requires its API generator to create anchors.
    // Validate the assembled canonical/translated links with check-fmt-content.mjs.
    const relative = path.relative(repositoryRoot, filePath).split(path.sep).join('/');
    // This fixed upstream README is acquisition evidence, not a published page.
    // Its CONTRIBUTING.md belongs to the upstream repository, outside the manual
    // scope. Published Ninja references are checked by check-ninja-rendered.mjs.
    return (
      !relative.startsWith('docs/notes/document-import/fmt/v12-2-0/source/') &&
      relative !== 'docs/notes/document-import/ninja/v1-13-2/source/README.md' &&
      // Preserve upstream's broken #Vcpkg in the frozen evidence; the canonical
      // repair and all published fragments are checked by check-cjson-content.mjs.
      relative !== 'docs/notes/document-import/cjson/v1-7-19/source/README.md' &&
      // Frozen spdlog README/Wiki links use upstream repository and Wiki paths.
      // check:content locks their bytes; check:rendered checks the published
      // canonical/translated targets and fragments against actual HTML.
      !relative.startsWith('docs/notes/document-import/spdlog/v1-17-0/sources/')
    );
  });
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
}
