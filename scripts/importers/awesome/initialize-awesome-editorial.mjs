#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';
import { readJsoncFile } from '../../jsonc-utils.js';
import {
  root,
  editorial,
  versions,
  hash,
  json,
  save,
  storeBlob,
  analyze,
} from './editorial-utils.mjs';

const inventoryFile = path.join(editorial, 'INVENTORY.json');
if (fs.existsSync(inventoryFile))
  throw new Error('台帳が既存です。再初期化せず検査・再開してください。');
const resolver = createAwesomeResolver(root);
const configs = new Map(
  resolver.apps.map((app) => [
    app.id,
    readJsoncFile(path.join(app.directory, 'src/config/project.config.jsonc')),
  ])
);
const localized = readAwesomeRouteManifest({ root });
const canonical = readAwesomeRouteManifest({ root, localized: false });
const errors = [];
const entries = [];
const referencedFiles = new Set();
const gitRevision = execFileSync('git', ['rev-parse', 'HEAD'], {
  cwd: root,
  encoding: 'utf8',
}).trim();
const gitStatus = execFileSync('git', ['status', '--porcelain=v1'], {
  cwd: root,
  encoding: 'utf8',
});
const inputMetadata = [];
for (const version of versions) {
  const notes = path.join(root, 'docs/notes/document-import/awesome/snapshots', version);
  const temporary = path.join(root, '.tmp/document-import/awesome/snapshots', version);
  const lock = json(path.join(notes, 'SOURCES.lock.json'));
  const map = json(path.join(notes, 'CONTENT_MAP.json'));
  const sources = new Map(lock.sources.map((source) => [source.sourceId, source]));
  const byRepository = new Map(
    lock.sources.map((source) => [source.repository.toLowerCase(), source])
  );
  const metadataPath = path.join(notes, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json');
  const metadata = fs.existsSync(metadataPath)
    ? json(metadataPath).results.filter((r) => r.decision === 'metadata-only')
    : [];
  const metadataById = new Map(
    metadata.map((r) => [
      byRepository.get(r.repository.toLowerCase())?.sourceId ??
        `metadata-${r.repository.replace('/', '-').replace(/[^A-Za-z0-9._-]/g, '-')}`,
      r,
    ])
  );
  const mapIds = new Set(map.entries.map((e) => e.sourceId));
  const driftFile = path.join(notes, 'INTRODUCTION_IMPORT_DRIFT.json');
  const driftById = new Map(
    fs.existsSync(driftFile) ? json(driftFile).entries.map((e) => [e.sourceId, e]) : []
  );
  const expectedIds = new Set([
    ...lock.sources.filter((s) => s.status === 'included').map((s) => s.sourceId),
    ...metadataById.keys(),
  ]);
  const routeEntries = canonical.entries.filter((e) => e.version === version);
  if (routeEntries.length !== expectedIds.size)
    errors.push(`${version}: lock/metadataとrouteの件数不一致`);
  for (const route of routeEntries) {
    if (!expectedIds.has(route.sourceId))
      errors.push(`${version}/${route.sourceId}: lockまたはmetadataにない経路`);
    expectedIds.delete(route.sourceId);
    const source = sources.get(route.sourceId);
    const meta = metadataById.get(route.sourceId);
    if (!mapIds.has(route.sourceId) && !meta)
      errors.push(`${version}/${route.sourceId}: content map欠落`);
    const pair = {
      version,
      sourceId: route.sourceId,
      repository: route.repository,
      owner: route.appId,
      slug: route.slug,
      kind: meta
        ? 'metadata-only'
        : route.sourceId === 'sindresorhus-awesome-readme'
          ? 'directory'
          : 'full',
      status: 'inventoried',
      assignee: 'Codex',
      paths: {},
      baseline: {},
      metrics: {},
      importDrift: driftById.get(route.sourceId) ?? null,
      unresolved: [],
    };
    for (const lang of ['en', 'ja']) {
      const localizedRoute = localized.entries.find(
        (e) => e.sourceId === route.sourceId && e.version === version && e.lang === lang
      );
      if (!localizedRoute) {
        errors.push(`${version}/${route.sourceId}/${lang}: localized route欠落`);
        continue;
      }
      if (localizedRoute.slug !== route.slug || localizedRoute.appId !== route.appId)
        errors.push(`${version}/${route.sourceId}/${lang}: 配置不一致`);
      const file = resolver.contentPath(localizedRoute);
      referencedFiles.add(file);
      if (!fs.existsSync(file)) {
        errors.push(`本文欠落: ${file}`);
        continue;
      }
      const markdown = fs.readFileSync(file, 'utf8');
      const analysis = analyze(markdown);
      pair.paths[lang] = path.relative(root, file);
      pair.baseline[lang] = storeBlob(markdown);
      pair.metrics[lang] = analysis.metrics;
      pair.baseline[`${lang}Analysis`] = storeBlob(JSON.stringify(analysis));
      if (
        analysis.frontmatter.licenseSource !==
        (meta ? 'sindresorhus-awesome-readme' : route.sourceId)
      )
        errors.push(`${version}/${route.sourceId}/${lang}: licenseSource不一致`);
      const config = configs.get(route.appId);
      if (!config.licensing?.sources.some((s) => s.id === analysis.frontmatter.licenseSource))
        errors.push(`${version}/${route.sourceId}: 出典設定欠落`);
    }
    if (meta) pair.metadataEvidence = meta;
    if (!meta && source) {
      const file =
        source.sourceId === 'sindresorhus-awesome-readme'
          ? path.join(temporary, '01-source/responses/root-readme.md')
          : path.join(temporary, '01-source/repositories', source.sourceId, source.documentPath);
      pair.fixedInput = {
        repository: source.repository,
        commitSha: source.commitSha,
        documentPath: source.documentPath,
        expectedSha256: source.documentSha256,
        recoveryUrl: `https://raw.githubusercontent.com/${source.repository}/${source.commitSha}/${source.documentPath}`,
      };
      if (fs.existsSync(file)) {
        const value = fs.readFileSync(file);
        pair.fixedInput.sha256 = storeBlob(value);
        if (hash(value) !== source.documentSha256) {
          pair.unresolved.push('固定原文ハッシュ不一致');
          errors.push(`${version}/${route.sourceId}: 固定原文ハッシュ不一致`);
        }
      } else {
        pair.unresolved.push('固定原文キャッシュ欠落。固定コミットから復元が必要');
      }
    }
    entries.push(pair);
  }
  for (const id of expectedIds) errors.push(`${version}/${id}: route欠落`);
  for (const name of [
    'SOURCES.lock.json',
    'CONTENT_MAP.json',
    'EXCLUSIONS.json',
    'INTRODUCTION_NORMALIZATION.json',
    'INTRODUCTION_IMPORT_DRIFT.json',
    'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json',
  ]) {
    const file = path.join(notes, name);
    if (fs.existsSync(file))
      inputMetadata.push({
        path: path.relative(root, file),
        sha256: storeBlob(fs.readFileSync(file)),
      });
  }
}
for (const app of resolver.apps) {
  for (const name of [
    'src/generated/awesome-routes.json',
    'src/generated/awesome-localized-routes.json',
    'src/config/project.config.jsonc',
  ]) {
    const file = path.join(app.directory, name);
    inputMetadata.push({
      path: path.relative(root, file),
      sha256: storeBlob(fs.readFileSync(file)),
    });
  }
  const directory = path.join(app.directory, 'src/awesome-content');
  for (const file of fs.readdirSync(directory, { recursive: true, withFileTypes: true })) {
    if (!file.isFile() || !file.name.endsWith('.md')) continue;
    const absolute = path.join(file.parentPath ?? file.path, file.name);
    if (!referencedFiles.has(absolute)) errors.push(`孤立本文: ${path.relative(root, absolute)}`);
  }
}
inputMetadata.push({
  path: 'config/awesome-source-owners.json',
  sha256: storeBlob(fs.readFileSync(path.join(root, 'config/awesome-source-owners.json'))),
});
const counts = Object.fromEntries(
  versions.map((v) => [v, entries.filter((e) => e.version === v).length])
);
const pilotRepositories = [
  'sindresorhus/awesome',
  'vinta/awesome-python',
  'enaqx/awesome-react',
  'mjhea0/awesome-fastapi',
  'sindresorhus/awesome-whisper',
  'sindresorhus/awesome-nodejs',
  'awesome-selfhosted/awesome-selfhosted',
  'jagracey/Awesome-Unicode',
  'tomodachi94/awesome-computercraft',
  'josephmisiti/awesome-machine-learning',
];
const pilot = entries
  .filter(
    (e) =>
      (e.version === 'v2026-08-23' && pilotRepositories.includes(e.repository)) ||
      (e.version === 'v2026-08-20' &&
        ['sindresorhus/awesome-whisper', 'jagracey/Awesome-Unicode'].includes(e.repository))
  )
  .map((e) => `${e.version}/${e.sourceId}`);
for (const kind of ['rst', 'htmlBlocks']) {
  if (!entries.some((e) => pilot.includes(`${e.version}/${e.sourceId}`) && e.metrics.en[kind])) {
    const candidate = entries
      .filter((e) => e.version === 'v2026-08-23' && e.metrics.en[kind])
      .sort((a, b) => a.metrics.en.bytes - b.metrics.en.bytes)[0];
    if (candidate) pilot.push(`${candidate.version}/${candidate.sourceId}`);
    else errors.push(`パイロットの${kind}候補なし`);
  }
}
save(inventoryFile, {
  schemaVersion: 1,
  createdAt: new Date().toISOString(),
  gitRevision,
  gitStatusAtStart: gitStatus,
  model: {
    requested: 'GPT-6.1 Sol',
    available: 'gpt-6.1-sol（ツールのモデル一覧）',
    actual: 'Codex / GPT-6（正確な実行モデル識別子は提供されていない）',
    limitation: 'このチャット内からモデル切替はできない。ローカルLLMは使わない。',
  },
  phase: errors.length ? '0-inventory-incomplete' : '0-inventoried',
  counts,
  pairs: entries.length,
  documents: referencedFiles.size,
  inventoryErrors: errors,
  inputMetadata,
  pilot,
  entries,
});
console.log(
  JSON.stringify(
    {
      counts,
      pairs: entries.length,
      documents: referencedFiles.size,
      errors,
      fixedInputsMissing: entries.filter((e) => e.unresolved.length).length,
      pilot,
    },
    null,
    2
  )
);
if (errors.length) process.exitCode = 1;
