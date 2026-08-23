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
const missingReview = readJson(path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json'));
const discovery = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
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
    canonical =
      '# Awesome Lists\n\n' +
      'A curated directory of Awesome lists spanning technology, science, business, culture, and more. This snapshot organizes the collection by topic and links included lists to their corresponding pages on libx.\n\n' +
      original.slice(contentsOffset);
    canonical = canonical.replace(
      /^- \[Software Patreons\]\(https:\/\/github\.com\/uraimo\/awesome-software-patreons#readme\).*\n/m,
      ''
    );
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
    /(\b(?:src|href)=)(["'])([^"']+)\2/gi,
    (match, attribute, quote, url) => {
      if (/^(?:https?:|mailto:|#|\/\/)/i.test(url)) return match;
      const resolved = attribute.toLowerCase().startsWith('src=')
        ? fixedRawUrl(source, url)
        : fixedRepositoryUrl(source, url);
      return `${attribute}${quote}${resolved}${quote}`;
    }
  );
  const imageReferenceLabels = new Set(
    [...canonical.matchAll(/!\[([^\]]+)\](?!\()/g)].map((match) => match[1].toLowerCase())
  );
  canonical = canonical.replace(
    /^(\[([^\]]+)\]:\s*)(<?[^\s>]+>?)(.*)$/gm,
    (match, prefix, label, rawUrl, suffix) => {
      const url = rawUrl.replace(/^<|>$/g, '');
      if (/^(?:https?:|mailto:|#|\/\/)/i.test(url)) return match;
      const resolved = imageReferenceLabels.has(label.toLowerCase())
        ? fixedRawUrl(source, url)
        : fixedRepositoryUrl(source, url);
      return `${prefix}${resolved}${suffix}`;
    }
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
      (entry) =>
        entry.sourceId !== source.sourceId || entry.headingOrRange !== 'Check out my projects'
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
  canonical =
    canonical
      .replace(/\r\n?/g, '\n')
      .replace(/[ \t]+$/gm, '')
      .trimEnd() + '\n';
  const header = `---\ntitle: ${JSON.stringify(source.repository)}\ndescription: ${JSON.stringify(`Canonical snapshot of ${source.repository}`)}\nlicenseSource: ${JSON.stringify(source.sourceId)}\n---\n\n`;
  prepared.push({
    source,
    output: `${source.sourceId}.md`,
    content: header + canonical,
    exclusion,
  });
}

const sourceByRepository = new Map(
  lock.sources.map((source) => [source.repository.toLowerCase(), source])
);
const discoveryByRepository = new Map(
  discovery.visited.map((source) => [source.repository.toLowerCase(), source])
);
for (const review of missingReview.results.filter((entry) => entry.decision === 'metadata-only')) {
  const source = sourceByRepository.get(review.repository);
  const discovered = discoveryByRepository.get(review.repository);
  const repository = source?.repository ?? discovered?.repository ?? review.repository;
  const sourceId =
    source?.sourceId ?? `metadata-${repository.replace('/', '-').replace(/[^A-Za-z0-9._-]/g, '-')}`;
  const sourceUrl = review.commitSha
    ? review.readmePath
      ? `https://github.com/${repository}/blob/${review.commitSha}/${review.readmePath}`
      : `https://github.com/${repository}/tree/${review.commitSha}`
    : `https://github.com/${repository}`;
  const header = `---\ntitle: ${JSON.stringify(repository)}\ndescription: ${JSON.stringify(`Metadata-only entry for ${repository}`)}\nlicenseSource: "sindresorhus-awesome-readme"\n---\n\n`;
  const content = [
    `# ${review.label}`,
    '',
    `This Awesome list is referenced by the ${review.category} section of the pinned sindresorhus/awesome snapshot.`,
    '',
    'The upstream list content is not reproduced on libx because a reusable license could not be confirmed for this snapshot, the fixed README could not be retrieved, or its license requires support that is not yet available here.',
    '',
    `- [Open the original repository](${sourceUrl})`,
    '',
  ].join('\n');
  prepared.push({
    source: { sourceId, repository, status: 'metadata-only' },
    output: `${sourceId}.md`,
    content: header + content,
    exclusion: null,
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
      metadataOnly: prepared.filter((entry) => entry.source.status === 'metadata-only').length,
      exclusions: prepared.filter((entry) => entry.exclusion).length,
      output: normalizedDir,
    },
    null,
    2
  )
);
