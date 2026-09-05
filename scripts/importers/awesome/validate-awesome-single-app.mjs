#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readJsoncFile } from '../../jsonc-utils.js';
import { notesDir, readJson, rootDir, snapshotVersion } from './common.mjs';

import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';

const resolver = createAwesomeResolver(rootDir);
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false });
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const configIdsByApp = new Map(
  resolver.apps.map((app) => {
    const config = readJsoncFile(path.join(app.directory, 'src/config/project.config.jsonc'));
    return [app.id, new Set(config.licensing.sources.map((source) => source.id))];
  })
);
const missingReviewPath = path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json');
const missingReview = fs.existsSync(missingReviewPath)
  ? readJson(missingReviewPath)
  : { schemaVersion: 1, snapshot: snapshotVersion, results: [] };
const snapshotRoutes = routes.entries.filter((entry) => entry.version === snapshotVersion);
const includedIds = new Set(
  lock.sources.filter((source) => source.status === 'included').map((source) => source.sourceId)
);
const routeIds = new Set(snapshotRoutes.map((entry) => entry.sourceId));
const expectedRouteIds = new Set([
  ...includedIds,
  ...missingReview.results
    .filter((entry) => entry.decision === 'metadata-only')
    .map((entry) => {
      const source = lock.sources.find(
        (candidate) => candidate.repository.toLowerCase() === entry.repository
      );
      const discovered = readJson(path.join(notesDir, 'DISCOVERY_STATE.json')).visited.find(
        (candidate) => candidate.repository.toLowerCase() === entry.repository
      );
      const repository = source?.repository ?? discovered?.repository ?? entry.repository;
      return (
        source?.sourceId ??
        `metadata-${repository.replace('/', '-').replace(/[^A-Za-z0-9._-]/g, '-')}`
      );
    }),
]);

if (includedIds.size === 0) throw new Error('includedソースがありません');
if (routeIds.size !== expectedRouteIds.size)
  throw new Error('ルート目録の件数またはsourceIdが重複しています');
for (const sourceId of expectedRouteIds) {
  if (!routeIds.has(sourceId)) throw new Error(`ルート目録にありません: ${sourceId}`);
}

const slugs = new Set();
const markdownFiles = resolver.apps.flatMap((app) => {
  const contentRoot = path.join(app.directory, 'src/awesome-content');
  if (!fs.existsSync(contentRoot)) throw new Error(`本文ルートがありません: ${app.id}`);
  return fs
    .readdirSync(contentRoot, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => {
      const file = path.join(entry.parentPath ?? entry.path, entry.name);
      return { app, contentRoot, file, relativePath: path.relative(contentRoot, file) };
    });
});
const englishFiles = markdownFiles.filter((entry) =>
  entry.relativePath.startsWith(`${snapshotVersion}${path.sep}en${path.sep}`)
);
const translatedFiles = markdownFiles.filter((entry) =>
  entry.relativePath.startsWith(`${snapshotVersion}${path.sep}ja${path.sep}`)
);
if (englishFiles.length !== snapshotRoutes.length) {
  throw new Error(
    `英語本文ファイル数が一致しません: ${englishFiles.length} != ${snapshotRoutes.length}`
  );
}
for (const entry of snapshotRoutes) {
  const versionedSlug = `${entry.version}:${entry.slug}`;
  if (slugs.has(versionedSlug))
    throw new Error(`同一版内で重複slugです: ${entry.version}/${entry.slug}`);
  slugs.add(versionedSlug);
  const contentPath = resolver.contentPath(entry);
  if (!fs.existsSync(contentPath)) throw new Error(`本文がありません: ${entry.moduleKey}`);
  const frontmatter = matter(fs.readFileSync(contentPath, 'utf8')).data;
  if (frontmatter.title !== entry.title)
    throw new Error(`titleが目録と一致しません: ${entry.sourceId}`);
  if (!configIdsByApp.get(entry.appId).has(frontmatter.licenseSource)) {
    throw new Error(`licenseSourceが出典レジストリにありません: ${entry.sourceId}`);
  }
}
for (const entry of translatedFiles) {
  const { file: translatedPath, relativePath, contentRoot } = entry;
  const englishPath = path.join(
    contentRoot,
    relativePath.replace(`${path.sep}ja${path.sep}`, `${path.sep}en${path.sep}`)
  );
  if (!fs.existsSync(englishPath)) throw new Error(`翻訳の英語本文がありません: ${relativePath}`);
  const translation = matter(fs.readFileSync(translatedPath, 'utf8')).data;
  const english = matter(fs.readFileSync(englishPath, 'utf8')).data;
  if (translation.licenseSource !== english.licenseSource) {
    throw new Error(`翻訳のlicenseSourceが英語本文と一致しません: ${relativePath}`);
  }
}

if (process.argv.includes('--assets')) {
  const files = resolver.apps.flatMap((app) => {
    if (!fs.existsSync(app.outputDirectory)) throw new Error(`ビルド出力がありません: ${app.id}`);
    return fs
      .readdirSync(app.outputDirectory, { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name));
  });
  let largest = { path: '', bytes: 0 };
  for (const file of files) {
    const bytes = fs.statSync(file).size;
    if (bytes > largest.bytes) largest = { path: path.relative(rootDir, file), bytes };
  }
  const warningLimit = 20 * 1024 * 1024;
  if (largest.bytes >= warningLimit) {
    throw new Error(`最大assetが20 MiB以上です: ${largest.path} (${largest.bytes} bytes)`);
  }
  for (const entry of snapshotRoutes) {
    const htmlPath = path.join(
      resolver.appForSource(entry.sourceId).outputDirectory,
      entry.version,
      entry.lang,
      entry.slug,
      'index.html'
    );
    if (!fs.existsSync(htmlPath)) throw new Error(`生成ページがありません: ${entry.slug}`);
  }
  for (const entry of translatedFiles) {
    const { relativePath } = entry;
    const segments = relativePath.split(path.sep);
    const [version, lang, ...slugParts] = segments;
    const slug = path.join(...slugParts).replace(/\.md$/, '');
    const htmlPath = path.join(entry.app.outputDirectory, version, lang, slug, 'index.html');
    if (!fs.existsSync(htmlPath)) throw new Error(`翻訳の生成ページがありません: ${relativePath}`);
  }
  console.log(
    `Awesome asset validation: OK (${snapshotRoutes.length} English pages, ${translatedFiles.length} translated pages, largest=${largest.path} ${largest.bytes} bytes)`
  );
} else {
  console.log(
    `Awesome ${resolver.group ? 'group' : 'single-app'} validation: OK (${englishFiles.length} English pages, ${translatedFiles.length} translated pages)`
  );
}
