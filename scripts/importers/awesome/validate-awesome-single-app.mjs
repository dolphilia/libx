#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readJsoncFile } from '../../jsonc-utils.js';
import { notesDir, readJson, rootDir } from './common.mjs';

const projectRoot = path.join(rootDir, 'apps/awesome');
const routes = readJson(path.join(projectRoot, 'src/generated/awesome-routes.json'));
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const config = readJsoncFile(path.join(projectRoot, 'src/config/project.config.jsonc'));
const includedIds = new Set(
  lock.sources.filter((source) => source.status === 'included').map((source) => source.sourceId)
);
const routeIds = new Set(routes.entries.map((entry) => entry.sourceId));
const configIds = new Set(config.licensing.sources.map((source) => source.id));

if (includedIds.size === 0) throw new Error('includedソースがありません');
if (routeIds.size !== includedIds.size)
  throw new Error('ルート目録の件数またはsourceIdが重複しています');
if (configIds.size !== includedIds.size)
  throw new Error('出典レジストリの件数またはIDが重複しています');
for (const sourceId of includedIds) {
  if (!routeIds.has(sourceId)) throw new Error(`ルート目録にありません: ${sourceId}`);
  if (!configIds.has(sourceId)) throw new Error(`出典レジストリにありません: ${sourceId}`);
}

const slugs = new Set();
const contentRoot = path.join(projectRoot, 'src/awesome-content');
const markdownFiles = fs
  .readdirSync(contentRoot, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.md'));
const englishFiles = markdownFiles.filter((entry) =>
  path
    .relative(contentRoot, path.join(entry.parentPath ?? entry.path, entry.name))
    .includes(`${path.sep}en${path.sep}`)
);
const translatedFiles = markdownFiles.filter((entry) =>
  path
    .relative(contentRoot, path.join(entry.parentPath ?? entry.path, entry.name))
    .includes(`${path.sep}ja${path.sep}`)
);
if (englishFiles.length !== routes.entries.length) {
  throw new Error(
    `英語本文ファイル数が一致しません: ${englishFiles.length} != ${routes.entries.length}`
  );
}
for (const entry of routes.entries) {
  if (slugs.has(entry.slug)) throw new Error(`重複slugです: ${entry.slug}`);
  slugs.add(entry.slug);
  const contentPath = path.join(projectRoot, entry.moduleKey.replace(/^\/src\//, 'src/'));
  if (!fs.existsSync(contentPath)) throw new Error(`本文がありません: ${entry.moduleKey}`);
  const frontmatter = matter(fs.readFileSync(contentPath, 'utf8')).data;
  if (frontmatter.title !== entry.title)
    throw new Error(`titleが目録と一致しません: ${entry.sourceId}`);
  if (frontmatter.licenseSource !== entry.sourceId) {
    throw new Error(`licenseSourceが目録と一致しません: ${entry.sourceId}`);
  }
}
for (const entry of translatedFiles) {
  const translatedPath = path.join(entry.parentPath ?? entry.path, entry.name);
  const relativePath = path.relative(contentRoot, translatedPath);
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
  const distRoot = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distRoot)) throw new Error('apps/awesome/distがありません');
  const files = fs
    .readdirSync(distRoot, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name));
  let largest = { path: '', bytes: 0 };
  for (const file of files) {
    const bytes = fs.statSync(file).size;
    if (bytes > largest.bytes) largest = { path: path.relative(distRoot, file), bytes };
  }
  const warningLimit = 20 * 1024 * 1024;
  if (largest.bytes >= warningLimit) {
    throw new Error(`最大assetが20 MiB以上です: ${largest.path} (${largest.bytes} bytes)`);
  }
  for (const entry of routes.entries) {
    const htmlPath = path.join(distRoot, entry.version, entry.lang, entry.slug, 'index.html');
    if (!fs.existsSync(htmlPath)) throw new Error(`生成ページがありません: ${entry.slug}`);
  }
  for (const entry of translatedFiles) {
    const relativePath = path.relative(
      contentRoot,
      path.join(entry.parentPath ?? entry.path, entry.name)
    );
    const segments = relativePath.split(path.sep);
    const [version, lang, ...slugParts] = segments;
    const slug = path.join(...slugParts).replace(/\.md$/, '');
    const htmlPath = path.join(distRoot, version, lang, slug, 'index.html');
    if (!fs.existsSync(htmlPath)) throw new Error(`翻訳の生成ページがありません: ${relativePath}`);
  }
  console.log(
    `Awesome asset validation: OK (${routes.entries.length} English pages, ${translatedFiles.length} translated pages, largest=${largest.path} ${largest.bytes} bytes)`
  );
} else {
  console.log(
    `Awesome single-app validation: OK (${englishFiles.length} English pages, ${translatedFiles.length} translated pages)`
  );
}
