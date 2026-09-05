#!/usr/bin/env node
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, rootDir, snapshotVersion } from './common.mjs';

const log = JSON.parse(fs.readFileSync(path.join(notesDir, 'TRANSLATION_REVIEW_LOG.json'), 'utf8'));
const resolver = createAwesomeResolver(rootDir);
const routes = new Map(
  readAwesomeRouteManifest({ root: rootDir, localized: false })
    .entries.filter((entry) => entry.version === snapshotVersion)
    .map((entry) => [entry.sourceId, entry])
);
const errors = [];
for (const entry of log.pages) {
  if (!entry.draftPath || !fs.existsSync(path.join(rootDir, entry.draftPath))) {
    errors.push(`試訳ファイルがありません: ${entry.sourceId}`);
    continue;
  }
  const route = routes.get(entry.sourceId);
  const source = route ? resolver.contentPath(route) : null;
  if (!source) {
    errors.push(`英語定本がありません: ${entry.sourceId}`);
    continue;
  }
  const sourceText = fs.readFileSync(source, 'utf8');
  const draft = fs.readFileSync(path.join(rootDir, entry.draftPath), 'utf8');
  for (const match of draft.matchAll(/https?:\/\/[^\s)>]+/g)) {
    const url = match[0].replace(/[.,;:]$/, '');
    if (!sourceText.includes(url))
      errors.push(`試訳に原文にないURLがあります: ${entry.sourceId}: ${url}`);
  }
  if (
    entry.status !== 'draft-unreviewed' ||
    entry.japaneseReview !== 'pending' ||
    entry.technicalReview !== 'pending'
  )
    errors.push(`試訳レビュー状態が計画と一致しません: ${entry.sourceId}`);
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}
console.log(`Awesome translation pilot validation: OK (${log.pages.length} drafts)`);
