#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, sha256, tempDir, writeJsonAtomic } from './common.mjs';

const dryRun = process.argv.includes('--dry-run');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const included = lock.sources.filter((source) => source.status === 'included');
const normalizedDir = path.join(tempDir, '03-normalized');
const exclusionsPath = path.join(notesDir, 'EXCLUSIONS.json');
const exclusions = readJson(exclusionsPath);
const prepared = [];

function fixedRawUrl(source, relativeUrl) {
  if (/^(?:javascript:|data:|file:)/i.test(relativeUrl)) return '#';
  if (/^(?:https?:|mailto:|#)/i.test(relativeUrl)) return relativeUrl;
  const clean = relativeUrl.replace(/^<|>$/g, '');
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(source.documentPath), clean)
  );
  if (resolved.startsWith('../') || path.posix.isAbsolute(resolved)) return relativeUrl;
  return `https://raw.githubusercontent.com/${source.repository}/${source.commitSha}/${resolved}`;
}

function fixedRepositoryUrl(source, relativeUrl) {
  if (/^(?:javascript:|data:|file:)/i.test(relativeUrl)) return '#';
  if (/^(?:https?:|mailto:|#)/i.test(relativeUrl)) return relativeUrl;
  const clean = relativeUrl.replace(/^<|>$/g, '');
  const resolved = relativeUrl.startsWith('/')
    ? clean.replace(/^\/+/, '')
    : path.posix.normalize(path.posix.join(path.posix.dirname(source.documentPath), clean));
  if (resolved.startsWith('../') || path.posix.isAbsolute(resolved)) return '#';
  return `https://github.com/${source.repository}/blob/${source.commitSha}/${resolved}`;
}

for (const source of included) {
  const sourcePath =
    source.sourceId === 'sindresorhus-awesome-readme'
      ? path.join(tempDir, '01-source/responses/root-readme.md')
      : path.join(tempDir, '01-source/repositories', source.sourceId, source.documentPath);
  const original = fs.readFileSync(sourcePath, 'utf8');
  let canonical = original;
  let exclusion = null;
  if (source.sourceId === 'sindresorhus-awesome-readme') {
    const contentsOffset = original.indexOf('## Contents');
    if (contentsOffset < 0) throw new Error('起点READMEにContents見出しがありません');
    const removed = original.slice(0, contentsOffset);
    canonical = original.slice(contentsOffset);
    exclusion = {
      sourceId: source.sourceId,
      commitSha: source.commitSha,
      headingOrRange: '先頭から ## Contents の直前',
      fragmentSha256: sha256(removed),
      reason:
        '作者の製品宣伝、支援依頼、スポンサー表示、バッジ・ナビゲーションを含むリスト本文外の前置き。',
      classification: 'exclude',
      decidedBy: 'repository-administrator',
      decidedAt: new Date().toISOString(),
    };
  }
  canonical = canonical.replace(/^>\s*\\?\[!([A-Z]+)\]\s*$/gm, '> **$1:**');
  canonical = canonical.replace(/<!--[\s\S]*?-->/g, '');
  canonical = canonical.replace(
    /^#{1,6}\s+Check out my projects\s*\n[\s\S]*?(?=^#{1,6}\s|\s*$)/gim,
    ''
  );
  canonical = canonical.replace(
    /(?<!!)\[([^\]]+)\]\(([^\s)]+)(\s+(?:"[^"]*"|'[^']*'))?\)/g,
    (_match, label, url, title = '') => `[${label}](${fixedRepositoryUrl(source, url)}${title})`
  );
  canonical = canonical.replace(
    /\[(!\[[^\]]*\]\([^)]*\))\]\(([^\s)]+)(\s+(?:"[^"]*"|'[^']*'))?\)/g,
    (_match, image, url, title = '') => `[${image}](${fixedRepositoryUrl(source, url)}${title})`
  );
  if (/^#{1,6}\s+Check out my projects\s*$/im.test(original)) {
    exclusions.exclusions = exclusions.exclusions.filter(
      (entry) => entry.sourceId !== source.sourceId || entry.headingOrRange !== 'Check out my projects'
    );
    exclusions.exclusions.push({
      sourceId: source.sourceId,
      commitSha: source.commitSha,
      headingOrRange: 'Check out my projects',
      fragmentSha256: sha256('Check out my projects'),
      reason: '作者自身の製品宣伝であり、リスト本文ではない。',
      classification: 'exclude',
      decidedBy: 'repository-administrator',
      decidedAt: new Date().toISOString(),
    });
  }
  canonical = canonical.replace(
    /!\[([^\]]*)\]\(([^\s)]+)(\s+(?:"[^"]*"|'[^']*'))?\)/g,
    (_match, alt, url, title = '') => {
      return `![${alt}](${fixedRawUrl(source, url)}${title})`;
    }
  );
  const header = `---\ntitle: ${JSON.stringify(source.repository)}\ndescription: ${JSON.stringify(`Canonical snapshot of ${source.repository}`)}\nlicenseSource: ${JSON.stringify(source.sourceId)}\n---\n\n`;
  prepared.push({
    source,
    output: `${source.sourceId}.md`,
    content: header + canonical,
    exclusion,
  });
}

if (dryRun) {
  console.log(
    JSON.stringify(
      prepared.map((item) => ({
        sourceId: item.source.sourceId,
        output: item.output,
        sha256: sha256(item.content),
        exclusion: item.exclusion?.fragmentSha256 ?? null,
      })),
      null,
      2
    )
  );
  process.exit(0);
}
const stagingDir = `${normalizedDir}.${process.pid}.tmp`;
fs.rmSync(stagingDir, { recursive: true, force: true });
fs.mkdirSync(stagingDir, { recursive: true });
for (const item of prepared) fs.writeFileSync(path.join(stagingDir, item.output), item.content);
fs.rmSync(normalizedDir, { recursive: true, force: true });
fs.renameSync(stagingDir, normalizedDir);
for (const item of prepared.filter((entry) => entry.exclusion)) {
  exclusions.exclusions = exclusions.exclusions.filter(
    (entry) => entry.sourceId !== item.source.sourceId
  );
  exclusions.exclusions.push(item.exclusion);
}
writeJsonAtomic(exclusionsPath, exclusions);
console.log(
  JSON.stringify(
    {
      normalized: prepared.length,
      exclusions: prepared.filter((entry) => entry.exclusion).length,
      output: normalizedDir,
    },
    null,
    2
  )
);
