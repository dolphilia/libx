#!/usr/bin/env node
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {
  notesDir,
  optionValue,
  readJson,
  rootDir,
  sha256,
  snapshotVersion,
  writeJsonAtomic,
} from './common.mjs';

const version = snapshotVersion;
const resolver = createAwesomeResolver(rootDir);
const routes = new Map(
  readAwesomeRouteManifest({ root: rootDir, localized: false })
    .entries.filter((entry) => entry.version === version)
    .map((entry) => [entry.sourceId, entry])
);
const reportPath = path.resolve(
  optionValue(process.argv.slice(2), '--report', path.join(notesDir, 'EXTERNAL_LINK_REPORT.json'))
);
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const discovery = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const included = lock.sources.filter((source) => source.status === 'included');
const linkPattern = /!?\[[^\]]*\]\((https?:\/\/[^\s)]+)[^)]*\)/g;

function linksFor(source) {
  const matches = [];
  const route = routes.get(source.sourceId);
  if (!route) throw new Error(`公開本文がありません: ${source.sourceId}`);
  const content = fs.readFileSync(resolver.contentPath(route), 'utf8');
  for (const match of content.matchAll(linkPattern))
    matches.push(match[1].replace(/[.,;:]+$/u, ''));
  return { count: matches.length, hash: sha256([...new Set(matches)].sort().join('\n')) };
}

const pages = included
  .map((source) => {
    const links = linksFor(source);
    return {
      sourceId: source.sourceId,
      sourceUrl: `https://github.com/${source.repository}/blob/${source.commitSha}/${source.documentPath}`,
      retrievedAt: source.retrievedAt,
      documentSha256: source.documentSha256,
      externalLinkCount: links.count,
      externalLinkSetSha256: links.hash,
    };
  })
  .sort((left, right) => left.sourceId.localeCompare(right.sourceId));
const sourceFailures = (discovery.failures ?? []).map((failure) => ({
  repository: failure.repository,
  stage: failure.stage,
  error: failure.error,
}));
const report = {
  schemaVersion: 1,
  snapshotVersion: version,
  generatedAt: new Date().toISOString(),
  policy: {
    outgoingLinks: '固定済み本文に記録された取得時点URLを追跡し、ライブ到達性は検査しない。',
    redirects:
      '固定コミットのRaw取得はリダイレクトを追従せず、取得処理で検出したものだけを記録する。',
  },
  pages,
  summary: {
    pages: pages.length,
    externalLinks: pages.reduce((sum, page) => sum + page.externalLinkCount, 0),
    sourceFetchFailures: sourceFailures.length,
    redirects: 0,
  },
  sourceFetchFailures: sourceFailures,
  redirects: [],
};

if (process.argv.includes('--stdout')) {
  console.log(JSON.stringify(report, null, 2));
} else if (process.argv.includes('--check')) {
  const existing = readJson(reportPath);
  const expected = { ...report };
  const actual = { ...existing };
  delete expected.generatedAt;
  delete actual.generatedAt;
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error('EXTERNAL_LINK_REPORT.jsonが現在の英語定本と一致しません');
    process.exit(1);
  }
  console.log(
    `Awesome external-link report check: OK (${pages.length} pages, ${report.summary.externalLinks} links)`
  );
} else {
  writeJsonAtomic(reportPath, report);
  console.log(
    `Generated Awesome external-link report (${pages.length} pages, ${report.summary.externalLinks} links)`
  );
}
