#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { notesDir, readJson, rootDir, snapshotVersion } from './common.mjs';

const apply = process.argv.includes('--apply');
const contentRoot = path.join(
  rootDir,
  'apps/awesome/src/awesome-content',
  snapshotVersion
);
const englishRoot = path.join(contentRoot, 'en');
const japaneseRoot = path.join(contentRoot, 'ja');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const included = new Set(
  lock.sources.filter((source) => source.status === 'included').map((source) => source.sourceId)
);
const routes = readJson(
  path.join(rootDir, 'apps/awesome/src/generated/awesome-routes.json')
).entries.filter((entry) => entry.version === snapshotVersion && !included.has(entry.sourceId));
const errors = [];
const generated = [];

for (const route of routes) {
  const englishPath = path.join(englishRoot, `${route.slug}.md`);
  const japanesePath = path.join(japaneseRoot, `${route.slug}.md`);
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
  const output = `${frontmatter}\n${body}`;
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
