#!/usr/bin/env node
import { createAwesomeContentAccess, readAwesomeRouteManifest } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { notesDir, readJson, rootDir, snapshotVersion } from './common.mjs';
import { applyIntroductionDecision } from './awesome-introduction-utils.mjs';

const apply = process.argv.includes('--apply');
const content = createAwesomeContentAccess(snapshotVersion, rootDir);
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const included = new Set(
  lock.sources.filter((source) => source.status === 'included').map((source) => source.sourceId)
);
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false }).entries.filter(
  (entry) => entry.version === snapshotVersion && !included.has(entry.sourceId)
);
const errors = [];
const generated = [];
const normalizationPath = path.join(notesDir, 'INTRODUCTION_NORMALIZATION.json');
const decisions = new Map(
  (fs.existsSync(normalizationPath) ? readJson(normalizationPath).entries : []).map((entry) => [
    entry.sourceId,
    entry,
  ])
);

for (const route of routes) {
  const englishPath = content.pathFor('en', `${route.slug}.md`);
  const japanesePath = content.pathFor('ja', `${route.slug}.md`);
  const parsed = matter(fs.readFileSync(englishPath, 'utf8'));
  const heading = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const sourceUrl = parsed.content.match(/^- \[[^\]]+\]\((https?:\/\/[^)]+)\)$/m)?.[1];
  if (!heading || !sourceUrl) {
    errors.push(`案内ページの形式が不正です: ${route.slug}`);
    continue;
  }
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(parsed.data.title)}`,
    `description: ${JSON.stringify(`${route.repository}の収録案内`)}`,
    `licenseSource: ${JSON.stringify(parsed.data.licenseSource)}`,
    '---',
    '',
  ].join('\n');
  const body = [
    `# ${heading}`,
    '',
    `このAwesomeリストは、固定済みのsindresorhus/awesomeスナップショットの${route.category}セクションから参照されています。`,
    '',
    'このスナップショットで再利用可能なライセンスを確認できなかった、固定READMEを取得できなかった、または現在のlibxでは対応していないライセンス条件があるため、上流リストの本文はlibxへ複製していません。',
    '',
    `- [元のリポジトリを開く](${sourceUrl})`,
    '',
  ].join('\n');
  const decision = decisions.get(route.sourceId);
  // Emit the recorded introduction when one exists; still verify the retained link hash.
  const rawOutput = decision
    ? `${frontmatter}\n# ${decision.normalized.ja.title}\n\n${decision.normalized.ja.summary}\n\n- [元のリポジトリを開く](${sourceUrl})\n`
    : `${frontmatter}\n${body}`;
  const output = decision
    ? applyIntroductionDecision(rawOutput, decision.normalized.ja, decision.evidence.ja)
    : rawOutput;
  if (apply) {
    fs.mkdirSync(path.dirname(japanesePath), { recursive: true });
    fs.writeFileSync(japanesePath, output);
  } else if (!fs.existsSync(japanesePath) || fs.readFileSync(japanesePath, 'utf8') !== output) {
    errors.push(`案内ページの日本語が生成結果と一致しません: ${route.slug}`);
  }
  generated.push(route.sourceId);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}
console.log(
  `Awesome metadata translation: OK (${generated.length} pages${apply ? ', applied' : ''})`
);
