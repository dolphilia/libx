#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { rootDir, snapshotVersion } from './common.mjs';
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';

const snapshot = snapshotVersion;
const overviewRepository = 'sindresorhus/awesome';
const resolver = createAwesomeResolver(rootDir);
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false }).entries.filter(
  (route) => route.version === snapshot
);
const outputOptionIndex = process.argv.indexOf('--output');
const outputPath =
  outputOptionIndex === -1 ? null : path.resolve(process.argv[outputOptionIndex + 1] ?? '');

if (outputOptionIndex !== -1 && !process.argv[outputOptionIndex + 1]) {
  console.error('awesome: --output にはJSONファイルを指定してください');
  process.exit(1);
}

function githubRepository(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (!['github.com', 'www.github.com'].includes(parsed.hostname.toLowerCase())) return null;
  const [owner, repository] = parsed.pathname.split('/').filter(Boolean);
  return owner && repository ? `${owner}/${repository}`.toLowerCase() : null;
}

function overviewLinks(lang) {
  const file = resolver.contentPath({
    sourceId: 'sindresorhus-awesome-readme',
    moduleKey: `/src/awesome-content/${snapshot}/${lang}/overview/sindresorhus-awesome.md`,
  });
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const links = [];
  let section = '';

  for (const [index, line] of lines.entries()) {
    const heading = line.match(/^##\s+(.+?)(?:\s+<a\b.*)?$/);
    if (heading) section = heading[1];
    if (section === 'Related' || section === '関連') continue;

    for (const match of line.matchAll(/\[([^\]]+)\]\((https?:\/\/github\.com\/[^)]+)\)/g)) {
      const repository = githubRepository(match[2]);
      if (!repository) continue;
      links.push({
        line: index + 1,
        section,
        label: match[1],
        sourceUrl: match[2],
        repository,
      });
    }
  }

  return links;
}

function localeFileExists(lang, route) {
  return fs.existsSync(
    resolver.contentPath({
      ...route,
      moduleKey: `/src/awesome-content/${snapshot}/${lang}/${route.slug}.md`,
    })
  );
}

const englishLinks = overviewLinks('en');
const japaneseLinks = overviewLinks('ja');
const englishOtherLists = englishLinks.filter((link) => link.repository !== overviewRepository);
const japaneseOtherLists = japaneseLinks.filter((link) => link.repository !== overviewRepository);
const routeByRepository = new Map(routes.map((route) => [route.repository.toLowerCase(), route]));

const sequenceMatches =
  englishOtherLists.length === japaneseOtherLists.length &&
  englishOtherLists.every(
    (link, index) => link.repository === japaneseOtherLists[index]?.repository
  );

const items = englishOtherLists.map((link, index) => {
  const japanese = japaneseOtherLists[index];
  const route = routeByRepository.get(link.repository);
  const hasEnglishSource = route ? localeFileExists('en', route) : false;
  const hasJapaneseSource = route ? localeFileExists('ja', route) : false;
  const hasBilingualPages = Boolean(route && hasEnglishSource && hasJapaneseSource);

  return {
    repository: link.repository,
    section: link.section,
    englishLabel: link.label,
    japaneseLabel: japanese?.label ?? null,
    sourceUrl: link.sourceUrl,
    sourceLines: {
      en: link.line,
      ja: japanese?.line ?? null,
    },
    status: hasBilingualPages
      ? 'bilingual-pages-available'
      : route && hasEnglishSource
        ? 'english-page-available-japanese-pending'
        : 'pages-not-imported',
    hasBilingualPages,
    englishPageAvailable: Boolean(route && hasEnglishSource),
    japanesePageAvailable: Boolean(route && hasJapaneseSource),
    libxPaths: route
      ? {
          en: `/docs/awesome/${snapshot}/en/${route.slug}/`,
          ja: `/docs/awesome/${snapshot}/ja/${route.slug}/`,
        }
      : null,
    sourceFilesExist: route
      ? {
          en: hasEnglishSource,
          ja: hasJapaneseSource,
        }
      : null,
  };
});

const categoryMap = new Map();
for (const item of items) {
  const category = categoryMap.get(item.section) ?? {
    section: item.section,
    otherAwesomeListCount: 0,
    bilingualPageAvailableCount: 0,
    englishOnlyPageCount: 0,
    pagesNotImportedCount: 0,
  };
  category.otherAwesomeListCount += 1;
  if (item.hasBilingualPages) category.bilingualPageAvailableCount += 1;
  else if (item.englishPageAvailable) category.englishOnlyPageCount += 1;
  else category.pagesNotImportedCount += 1;
  categoryMap.set(item.section, category);
}

const bilingualPageAvailableCount = items.filter((item) => item.hasBilingualPages).length;
const englishPageAvailableCount = items.filter((item) => item.englishPageAvailable).length;
const japanesePageAvailableCount = items.filter((item) => item.japanesePageAvailable).length;
const report = {
  schemaVersion: 2,
  generatedAt: '2026-08-23',
  snapshot,
  scope: {
    pages: {
      en: `/docs/awesome/${snapshot}/en/overview/sindresorhus-awesome/`,
      ja: `/docs/awesome/${snapshot}/ja/overview/sindresorhus-awesome/`,
    },
    definition:
      'Related節を除く概要リストに掲載されたGitHubリポジトリリンクから、概要ページ自身への再帰リンクを除いたものを「他のAwesomeリスト」とする。',
  },
  implementation:
    'MarkdownのGitHub URLはビルド時のremarkAwesomeInternalLinksで、awesome-routes.jsonに同一リポジトリがある場合だけ同じ版・言語のlibx URLへ変換される。',
  languageParity: {
    englishOtherAwesomeListCount: englishOtherLists.length,
    japaneseOtherAwesomeListCount: japaneseOtherLists.length,
    repositorySequenceMatches: sequenceMatches,
  },
  summary: {
    otherAwesomeListCount: items.length,
    bilingualPageAvailableCount,
    englishPageAvailableCount,
    japanesePageAvailableCount,
    englishOnlyPageCount: items.filter(
      (item) => item.englishPageAvailable && !item.japanesePageAvailable
    ).length,
    pagesNotImportedCount: items.filter((item) => !item.englishPageAvailable).length,
  },
  categorySummary: [...categoryMap.values()],
  items,
};

const serialized = `${JSON.stringify(report, null, 2)}\n`;
if (outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, serialized);
  console.log(
    `Awesome overview link audit: ${items.length} other lists, ${englishPageAvailableCount} English pages, ${japanesePageAvailableCount} Japanese pages`
  );
} else {
  process.stdout.write(serialized);
}
