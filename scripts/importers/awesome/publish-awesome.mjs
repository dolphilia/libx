#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readJsoncFile } from '../../jsonc-utils.js';
import { prepareImportForCheck, prepareImportOutput } from '../safe-import-output.js';
import { notesDir, readJson, rootDir, writeJsonAtomic } from './common.mjs';

const version = 'v2026-08-20';
const projectRoot = path.join(rootDir, 'apps', 'awesome');
const normalizedRoot = path.join(rootDir, '.tmp/document-import/awesome/03-normalized');
const contentRoot = path.join(projectRoot, 'src/awesome-content');
const englishContentRoot = path.join(contentRoot, version, 'en');
const japaneseContentRoot = path.join(contentRoot, version, 'ja');
const routesPath = path.join(projectRoot, 'src/generated/awesome-routes.json');
const localizedRoutesPath = path.join(projectRoot, 'src/generated/awesome-localized-routes.json');
const previewStatusPath = path.join(projectRoot, 'src/generated/awesome-preview-status.json');
const sidebarRoot = path.join(projectRoot, 'public/sidebar');
const searchRoot = path.join(projectRoot, 'public/search', version);
const partitionsPath = path.join(notesDir, 'CONTENT_PARTITIONS.json');
const migrationsPath = path.join(notesDir, 'URL_MIGRATIONS.json');
const check = process.argv.includes('--check');

const projectConfig = readJsoncFile(path.join(projectRoot, 'src/config/project.config.jsonc'));
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const discoveryState = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const exclusions = readJson(path.join(notesDir, 'EXCLUSIONS.json'));
const finalReviewQueue = readJson(path.join(notesDir, 'FINAL_REVIEW_QUEUE.json'));
const contentMap = readJson(path.join(notesDir, 'CONTENT_MAP.json'));
const shardPlan = readJson(path.join(notesDir, 'SITE_SHARDS.json'));
const missingReview = readJson(path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json'));
const included = lock.sources.filter((source) => source.status === 'included');
const sourceByRepository = new Map(
  lock.sources.map((source) => [source.repository.toLowerCase(), source])
);
const discoveredByLowerRepository = new Map(
  discoveryState.visited.map((source) => [source.repository.toLowerCase(), source])
);
const metadataSources = missingReview.results
  .filter((entry) => entry.decision === 'metadata-only')
  .map((entry) => {
    const source = sourceByRepository.get(entry.repository);
    const discovered = discoveredByLowerRepository.get(entry.repository);
    const repository = source?.repository ?? discovered?.repository ?? entry.repository;
    return {
      sourceId:
        source?.sourceId ??
        `metadata-${repository.replace('/', '-').replace(/[^A-Za-z0-9._-]/g, '-')}`,
      repository,
      status: 'metadata-only',
    };
  });
const pageSources = [...included, ...metadataSources];
const missingReviewByRepository = new Map(
  missingReview.results.map((entry) => [entry.repository, entry])
);
const mapBySource = new Map(contentMap.entries.map((entry) => [entry.sourceId, entry]));
const discoveredByRepository = new Map(
  discoveryState.visited.map((source) => [source.repository, source])
);
const approvedReviewItems = finalReviewQueue.items.filter(
  (item) => item.status === 'approved'
).length;
const allHumanReviewed =
  finalReviewQueue.items.length > 0 && approvedReviewItems === finalReviewQueue.items.length;

function categoryId(value) {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function pageId(source) {
  if (source.sourceId === 'sindresorhus-awesome-readme') return 'sindresorhus-awesome';
  const value = source.repository.replace('/', '-');
  if (!/^[A-Za-z0-9._-]+$/.test(value)) throw new Error(`安全でないページIDです: ${value}`);
  return value;
}

function sourceCategory(sourceId) {
  if (sourceId === 'sindresorhus-awesome-readme') return 'Overview';
  const pageSource = pageSources.find((source) => source.sourceId === sourceId);
  const missingCategory = pageSource
    ? missingReviewByRepository.get(pageSource.repository.toLowerCase())?.category
    : null;
  if (missingCategory) return missingCategory;
  const category = mapBySource.get(sourceId)?.categories?.[0];
  if (!category) throw new Error(`カテゴリがありません: ${sourceId}`);
  return category;
}

function navigationTitle(source) {
  if (source.sourceId === 'sindresorhus-awesome-readme') return 'Awesome';
  const label = discoveredByRepository.get(source.repository)?.occurrences?.[0]?.label?.trim();
  if (!label) throw new Error(`ナビゲーション表示名がありません: ${source.repository}`);
  return label;
}

function categoryOrder() {
  const rootSource = fs.readFileSync(
    path.join(normalizedRoot, 'sindresorhus-awesome-readme.md'),
    'utf8'
  );
  const available = new Set(pageSources.map((source) => sourceCategory(source.sourceId)));
  const headings = [...rootSource.matchAll(/^##\s+(.+)$/gm)]
    .map((match) => match[1].trim())
    .filter((heading) => available.has(heading));
  const result = ['Overview', ...headings];
  for (const category of available) {
    if (!result.includes(category)) result.push(category);
  }
  return result;
}

function buildModel() {
  if (!fs.existsSync(normalizedRoot)) {
    throw new Error(`正規化済み入力がありません: ${normalizedRoot}`);
  }
  const categories = categoryOrder();
  const categoryIndex = new Map(categories.map((category, index) => [category, index]));
  const entries = pageSources
    .map((source) => {
      const category = sourceCategory(source.sourceId);
      const categorySlug = categoryId(category);
      const id = pageId(source);
      const inputPath = path.join(normalizedRoot, `${source.sourceId}.md`);
      if (!fs.existsSync(inputPath))
        throw new Error(`正規化済み本文がありません: ${source.sourceId}`);
      const markdown = fs.readFileSync(inputPath, 'utf8');
      const parsed = matter(markdown);
      const expectedLicenseSource =
        source.status === 'metadata-only' ? 'sindresorhus-awesome-readme' : source.sourceId;
      if (parsed.data.licenseSource !== expectedLicenseSource) {
        throw new Error(`licenseSourceが一致しません: ${source.sourceId}`);
      }
      return {
        sourceId: source.sourceId,
        repository: source.repository,
        version,
        lang: 'en',
        category,
        categoryId: categorySlug,
        pageId: id,
        slug: `${categorySlug}/${id}`,
        moduleKey: `/src/awesome-content/${version}/en/${categorySlug}/${id}.md`,
        title: String(parsed.data.title),
        navigationTitle: navigationTitle(source),
        description: String(parsed.data.description ?? ''),
        licenseSource: String(parsed.data.licenseSource),
        markdown,
      };
    })
    .sort((left, right) => {
      const categoryDifference =
        categoryIndex.get(left.category) - categoryIndex.get(right.category);
      return categoryDifference || left.repository.localeCompare(right.repository);
    });
  const slugs = new Set();
  for (const entry of entries) {
    if (slugs.has(entry.slug)) throw new Error(`URLが重複しています: ${entry.slug}`);
    slugs.add(entry.slug);
  }
  return { categories, entries };
}

const model = buildModel();

function generateContent(target) {
  for (const entry of model.entries) {
    const targetPath = path.join(target, entry.categoryId, `${entry.pageId}.md`);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, entry.markdown);
  }
}

function validateContent(target) {
  const files = fs
    .readdirSync(target, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'));
  if (files.length !== model.entries.length) {
    throw new Error(`統合ページ数が一致しません: ${files.length} != ${model.entries.length}`);
  }
}

const routes = {
  schemaVersion: 1,
  snapshotVersion: version,
  categories: model.categories.map((name, order) => ({ name, id: categoryId(name), order })),
  entries: model.entries.map(({ markdown, ...entry }, order) => ({ ...entry, order })),
};

function sidebarFor(lang) {
  const localizedEntries = entriesFor(lang);
  const categoryNames = projectConfig.translations[lang]?.categories ?? {};
  return routes.categories
    .map((category) => ({
      title: categoryNames[category.id] ?? category.name,
      items: localizedEntries
        .filter((entry) => entry.lang === lang && entry.categoryId === category.id)
        .map((entry) => ({
          title: entry.navigationTitle,
          href: `/docs/awesome/${version}/${lang}/${entry.slug}`,
        })),
    }))
    .filter((category) => category.items.length > 0);
}

function searchIndexFor(lang) {
  const localizedEntries = entriesFor(lang);
  return {
    schemaVersion: 1,
    version,
    lang,
    entries: localizedEntries
      .filter((entry) => entry.lang === lang)
      .map((entry) => ({
        title: entry.title,
        description: entry.description,
        url: `/docs/awesome/${version}/${lang}/${entry.slug}/`,
        headings: [],
        anchors: [],
        identifiers: [],
        symbols: [],
        text: `${entry.title} ${entry.description} ${entry.repository} ${entry.category}`,
      })),
  };
}

function entriesFor(lang) {
  if (lang === 'en') return routes.entries;
  if (lang !== 'ja' || !fs.existsSync(japaneseContentRoot)) return [];
  return routes.entries.flatMap((entry) => {
    const pathname = path.join(japaneseContentRoot, `${entry.slug}.md`);
    if (!fs.existsSync(pathname)) return [];
    const parsed = matter(fs.readFileSync(pathname, 'utf8'));
    const description = String(parsed.data.description ?? '');
    return [
      {
        ...entry,
        lang,
        moduleKey: entry.moduleKey.replace('/en/', `/${lang}/`),
        title: String(parsed.data.title),
        description: allHumanReviewed
          ? description.replaceAll('人手レビュー前', '人手レビュー済み')
          : description,
        licenseSource: String(parsed.data.licenseSource),
      },
    ];
  });
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function assertJson(pathname, expected) {
  if (!fs.existsSync(pathname) || fs.readFileSync(pathname, 'utf8') !== stableJson(expected)) {
    throw new Error(`生成済みJSONが一致しません: ${pathname}`);
  }
}

function oldUrlFor(sourceId) {
  for (const shard of shardPlan.shards) {
    const index = shard.sourceIds.indexOf(sourceId);
    if (index < 0) continue;
    const source = included.find((item) => item.sourceId === sourceId);
    const oldPage = `${String(index + 1).padStart(2, '0')}-${source.repository.replace('/', '-')}`;
    return `/docs/${shard.project}/${version}/en/01-overview/${oldPage}`;
  }
  return null;
}

const partitions = {
  schemaVersion: 1,
  snapshotVersion: version,
  project: 'awesome',
  categories: routes.categories.map((category) => ({
    ...category,
    sourceIds: routes.entries
      .filter((entry) => entry.categoryId === category.id)
      .map((entry) => entry.sourceId),
  })),
};
const migrations = {
  schemaVersion: 1,
  snapshotVersion: version,
  entries: routes.entries.flatMap((entry) => {
    const from = oldUrlFor(entry.sourceId);
    return from
      ? [
          {
            sourceId: entry.sourceId,
            from,
            to: `/docs/awesome/${version}/en/${entry.slug}`,
          },
        ]
      : [];
  }),
};
const pendingReviewItems = finalReviewQueue.items.filter(
  (item) => item.status !== 'approved'
).length;
const previewStatus = {
  schemaVersion: 1,
  snapshotId: lock.snapshot.version,
  knownSources: lock.sources.length,
  englishCanonicalPages: model.entries.length,
  japaneseMachineValidatedPages: entriesFor('ja').length,
  excludedFragments: exclusions.exclusions.length,
  metadataOnlySources: lock.sources.filter((source) => source.status === 'metadata-only').length,
  humanReviewedItems: approvedReviewItems,
  totalReviewItems: finalReviewQueue.items.length,
  contentReviewStatus: pendingReviewItems === 0 ? 'human-reviewed' : 'human-review-pending',
};
const localizedRoutes = {
  schemaVersion: 1,
  snapshotVersion: version,
  entries: [...entriesFor('en'), ...entriesFor('ja')],
};

if (check) {
  const result = prepareImportForCheck({
    targetPath: englishContentRoot,
    generate: generateContent,
    validate: validateContent,
  });
  if (!result.matches) throw new Error('単一awesomeアプリの本文が正規化済み入力と一致しません');
  assertJson(routesPath, routes);
  assertJson(localizedRoutesPath, localizedRoutes);
  assertJson(previewStatusPath, previewStatus);
  assertJson(path.join(sidebarRoot, `sidebar-en-${version}.json`), sidebarFor('en'));
  assertJson(path.join(searchRoot, 'en.json'), searchIndexFor('en'));
  if (entriesFor('ja').length) {
    assertJson(path.join(sidebarRoot, `sidebar-ja-${version}.json`), sidebarFor('ja'));
    assertJson(path.join(searchRoot, 'ja.json'), searchIndexFor('ja'));
  }
  assertJson(partitionsPath, partitions);
  assertJson(migrationsPath, migrations);
  console.log(`Awesome single-app publish check: OK (${model.entries.length} pages)`);
} else {
  prepareImportOutput({
    targetPath: englishContentRoot,
    generate: generateContent,
    validate: validateContent,
  });
  fs.mkdirSync(path.dirname(routesPath), { recursive: true });
  fs.mkdirSync(sidebarRoot, { recursive: true });
  fs.mkdirSync(searchRoot, { recursive: true });
  fs.writeFileSync(routesPath, stableJson(routes));
  fs.writeFileSync(localizedRoutesPath, stableJson(localizedRoutes));
  fs.writeFileSync(previewStatusPath, stableJson(previewStatus));
  fs.writeFileSync(
    path.join(sidebarRoot, `sidebar-en-${version}.json`),
    stableJson(sidebarFor('en'))
  );
  fs.writeFileSync(path.join(searchRoot, 'en.json'), stableJson(searchIndexFor('en')));
  if (entriesFor('ja').length) {
    fs.writeFileSync(
      path.join(sidebarRoot, `sidebar-ja-${version}.json`),
      stableJson(sidebarFor('ja'))
    );
    fs.writeFileSync(path.join(searchRoot, 'ja.json'), stableJson(searchIndexFor('ja')));
  }
  writeJsonAtomic(partitionsPath, partitions);
  writeJsonAtomic(migrationsPath, migrations);
  console.log(`Published ${model.entries.length} canonical pages to the single awesome app`);
}
