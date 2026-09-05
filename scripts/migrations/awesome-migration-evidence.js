#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import matter from 'gray-matter';
import {
  discoverApps,
  findRepositoryRoot,
} from '../../packages/project-config/src/app-registry.js';
import { collectAppPages } from '../../packages/project-config/src/group-pages.js';
import { stripJsonComments } from '../../packages/project-config/src/jsonc-runtime.js';

const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const normalize = (url) => url.replace(/\/$/, '');
const stable = (value) =>
  JSON.stringify(value, (_key, item) =>
    item && !Array.isArray(item) && typeof item === 'object'
      ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b, 'en')))
      : item
  );
function files(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .flatMap((entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`目録の入力にsymlinkは使えません: ${target}`);
      return entry.isDirectory() ? files(target) : [target];
    });
}
function htmlEvidence(html) {
  const document = parse(html);
  const allAnchors = [],
    contentAnchors = [];
  let canonical = null,
    articles = 0;
  const visit = (node, inArticle = false) => {
    const attr = Object.fromEntries((node.attrs ?? []).map((item) => [item.name, item.value]));
    if (node.tagName === 'link' && attr.rel === 'canonical') canonical = attr.href;
    if (node.tagName === 'article' && attr.class?.split(/\s+/).includes('sl-markdown-content')) {
      inArticle = true;
      articles++;
    }
    for (const anchor of [attr.id, node.tagName === 'a' ? attr.name : null].filter(Boolean)) {
      allAnchors.push(anchor);
      if (inArticle) contentAnchors.push(anchor);
    }
    for (const child of node.childNodes ?? []) visit(child, inArticle);
  };
  visit(document);
  if (articles !== 1 || !canonical)
    throw new Error('本文articleまたはcanonicalが一意に取得できません');
  return { canonical, contentAnchors: contentAnchors.sort(), allAnchors: allAnchors.sort() };
}

export function captureMigrationEvidence({
  root,
  groupId = 'awesome',
  outputRoot = path.join(root, 'dist'),
}) {
  const registry = discoverApps(root);
  const apps = registry.apps.filter((app) => app.groupId === groupId || app.id === groupId);
  if (!apps.length) throw new Error(`移行対象がありません: ${groupId}`);
  const base = apps[0].publicBase;
  if (apps.some((app) => app.publicBase !== base)) throw new Error('公開baseが一致しません');
  const site = path.join(outputRoot, base.slice(1));
  const documents = [];
  const seen = new Set();
  for (const app of apps) {
    const config = JSON.parse(
      stripJsonComments(
        fs.readFileSync(path.join(app.directory, 'src/config/project.config.jsonc'), 'utf8')
      )
    );
    const sourceRecords = config.license?.sources ?? config.licensing?.sources ?? [];
    for (const page of collectAppPages(app).pages) {
      const url = normalize(page.url);
      if (seen.has(url)) throw new Error(`重複URL: ${url}`);
      seen.add(url);
      const source = fs.readFileSync(path.join(app.directory, page.sourcePath));
      const sourceRecord = sourceRecords.find((entry) => entry.id === page.licenseSource);
      if (page.licenseSource && !sourceRecord)
        throw new Error(`出典レジストリがありません: ${page.licenseSource}`);
      const htmlPath = path.join(outputRoot, url.slice(1), 'index.html');
      const rendered = htmlEvidence(fs.readFileSync(htmlPath, 'utf8'));
      documents.push({
        url,
        documentId: page.documentId,
        sourceId: page.documentId.startsWith('awesome:') ? page.documentId.slice(8) : null,
        version: page.version,
        lang: page.lang,
        categoryId: page.categoryId,
        appId: app.id,
        sourcePath: path.relative(root, path.join(app.directory, page.sourcePath)),
        sourceSha256: hash(source),
        bodySha256: hash(matter(source.toString('utf8')).content),
        licenseSource: page.licenseSource,
        sourceRecordSha256: sourceRecord ? hash(stable(sourceRecord)) : null,
        ...rendered,
      });
    }
  }
  documents.sort((a, b) => a.url.localeCompare(b.url, 'en'));
  const searches = [];
  const legacySearches = [];
  for (const file of files(path.join(site, 'search')).filter((file) => file.endsWith('.json'))) {
    const index = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (index.schemaVersion !== 1 || !Array.isArray(index.entries))
      throw new Error(`不正な検索目録: ${file}`);
    const entries = index.entries
      .map((entry) => ({ url: normalize(entry.url), sha256: hash(stable(entry)) }))
      .sort((a, b) => a.url.localeCompare(b.url, 'en'));
    if (new Set(entries.map((entry) => entry.url)).size !== entries.length)
      throw new Error(`検索URL重複: ${file}`);
    const expected = documents
      .filter((page) => page.version === index.version && page.lang === index.lang)
      .map((page) => page.url)
      .sort();
    if (expected.length === 0) {
      legacySearches.push({
        path: path.relative(site, file),
        version: index.version,
        lang: index.lang,
        entries,
      });
      continue;
    }
    if (stable(entries.map((entry) => entry.url).sort()) !== stable(expected))
      throw new Error(`本文と検索の集合が一致しません: ${file}`);
    searches.push({ version: index.version, lang: index.lang, entries });
  }
  const combinations = new Set(documents.map((page) => `${page.version}/${page.lang}`));
  if (
    stable([...combinations].sort()) !==
    stable(searches.map((index) => `${index.version}/${index.lang}`).sort())
  )
    throw new Error('検索目録の版・言語が不足しています');
  const publicUrls = files(site)
    .filter((file) => file.endsWith('.html'))
    .map((file) =>
      `${base}/${path.relative(site, file).split(path.sep).join('/')}`.replace(/index\.html$/, '')
    )
    .sort();
  return {
    schemaVersion: 1,
    groupId,
    publicBase: base,
    documents,
    searches: searches.sort((a, b) =>
      `${a.version}/${a.lang}`.localeCompare(`${b.version}/${b.lang}`, 'en')
    ),
    legacySearches,
    publicUrls,
  };
}

export function compareMigrationEvidence(before, after) {
  if (before.schemaVersion !== 1 || after.schemaVersion !== 1)
    throw new Error('未対応の移行目録schema');
  const errors = [],
    shellAnchorChanges = [];
  const current = new Map(after.documents.map((page) => [page.url, page]));
  const fields = [
    'documentId',
    'sourceId',
    'version',
    'lang',
    'categoryId',
    'sourceSha256',
    'bodySha256',
    'licenseSource',
    'sourceRecordSha256',
    'canonical',
    'contentAnchors',
  ];
  for (const old of before.documents) {
    const page = current.get(old.url);
    if (!page) {
      errors.push(`missing: ${old.url}`);
      continue;
    }
    for (const field of fields)
      if (stable(old[field]) !== stable(page[field])) errors.push(`${field}: ${old.url}`);
    if (stable(old.allAnchors) !== stable(page.allAnchors)) shellAnchorChanges.push(old.url);
  }
  for (const page of after.documents)
    if (!before.documents.some((old) => old.url === page.url)) errors.push(`added: ${page.url}`);
  for (const url of before.publicUrls)
    if (!after.publicUrls.includes(url)) errors.push(`missing public URL: ${url}`);
  if (stable(before.searches) !== stable(after.searches)) errors.push('search entries changed');
  if (before.groupId !== after.groupId || before.publicBase !== after.publicBase)
    errors.push('group/publicBase changed');
  return {
    passed: errors.length === 0,
    errors,
    shellAnchorChanges,
    addedPublicUrls: after.publicUrls.filter((url) => !before.publicUrls.includes(url)),
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    const option = (name) =>
      args.find((argument) => argument.startsWith(`${name}=`))?.slice(name.length + 1);
    const root = findRepositoryRoot();
    const output = option('--output');
    const baseline = option('--baseline');
    if (Boolean(output) === Boolean(baseline))
      throw new Error('--output=<new-file> または --baseline=<saved-file> を一つ指定してください');
    const evidence = captureMigrationEvidence({ root });
    if (output) {
      evidence.capturedAt = new Date().toISOString();
      evidence.gitHead = execFileSync('git', ['rev-parse', 'HEAD'], {
        cwd: root,
        encoding: 'utf8',
      }).trim();
      evidence.captureToolSha256 = hash(fs.readFileSync(fileURLToPath(import.meta.url)));
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.writeFileSync(output, JSON.stringify(evidence, null, 2) + '\n', { flag: 'wx' });
      console.log(
        `移行前目録: ${evidence.documents.length}文書、${evidence.publicUrls.length}公開HTML、${evidence.searches.length}検索索引 → ${output}`
      );
    } else {
      const comparison = compareMigrationEvidence(
        JSON.parse(fs.readFileSync(baseline, 'utf8')),
        evidence
      );
      console.log(JSON.stringify(comparison, null, 2));
      if (!comparison.passed) process.exitCode = 1;
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
