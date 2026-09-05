#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { formatProjectConfigJsonc, readJsoncFile } from '../../jsonc-utils.js';
import {
  getAwesomeApps,
  loadAwesomeOwnership,
  ownerForSource,
  readAwesomeRouteManifest,
} from './app-ownership.mjs';
import { prepareImportBatch } from '../batch-import-output.js';
import { notesRootDir, readJson, rootDir, snapshotVersion } from './common.mjs';

const project =
  process.argv.find((argument) => argument.startsWith('--project='))?.slice('--project='.length) ??
  'awesome';
const layout = getAwesomeApps(rootDir);
const ownership = loadAwesomeOwnership(rootDir);
const targets =
  project === 'awesome' ? layout.apps : layout.apps.filter((app) => app.id === project);
if (!targets.length) throw new Error(`Awesome生成対象がありません: ${project}`);
// Rebuilding an older edition must not remove newer published editions or their sources.
const configurations = new Map(
  layout.apps.map((app) => [
    app.id,
    readJsoncFile(path.join(app.directory, 'src/config/project.config.jsonc')),
  ])
);
const versions = [
  ...new Set([
    'v2026-08-20',
    snapshotVersion,
    ...[...configurations.values()].flatMap((config) =>
      config.versioning.versions
        .map((version) => version.id)
        .filter((id) => /^v\d{4}-\d{2}-\d{2}(?:-\d+)?$/.test(id))
    ),
  ]),
].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
const latestVersion = versions.at(-1);
const locks = versions.map((version) =>
  readJson(path.join(notesRootDir, 'snapshots', version, 'SOURCES.lock.json'))
);
const dryRun = process.argv.includes('--dry-run');
const check = process.argv.includes('--check');
if (dryRun && check) throw new Error('--dry-runと--checkは同時指定できません');
const licenseUrls = {
  'CC0-1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC-BY-3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC-BY-4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC-BY-SA-3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC-BY-SA-4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  MIT: 'https://opensource.org/licenses/MIT',
  'Apache-2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
  'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  ISC: 'https://opensource.org/licenses/ISC',
  Unlicense: 'https://unlicense.org/',
};
const sourceRecords = new Map(
  locks
    .flatMap((lock) => lock.sources)
    .filter((source) => source.status === 'included')
    .map((source) => [source.sourceId, source])
);
const sources = [...sourceRecords.values()]
  .map((source) => {
    if (!source.licenseSpdx || !licenseUrls[source.licenseSpdx]) {
      throw new Error(
        `included source has unsupported license registry mapping: ${source.sourceId}`
      );
    }
    const [owner] = source.repository.split('/');
    return {
      id: source.sourceId,
      name: source.repository,
      author: owner,
      license: source.licenseSpdx,
      licenseUrl: licenseUrls[source.licenseSpdx],
      sourceUrl: `https://github.com/${source.repository}/blob/${source.commitSha}/${source.documentPath}`,
    };
  })
  .sort((left, right) => left.id.localeCompare(right.id));
const partitions = readJson(
  path.join(notesRootDir, 'snapshots', latestVersion, 'CONTENT_PARTITIONS.json')
);
const groupRoutes = layout.group ? readAwesomeRouteManifest({ root: rootDir }) : null;
const prepared = targets.map((app) => {
  const configPath = path.join(app.directory, 'src/config/project.config.jsonc');
  const config = configurations.get(app.id);
  let selectedSources = sources;
  if (layout.group) {
    const references = new Set(
      groupRoutes.entries
        .filter((entry) => entry.appId === app.id)
        .map((entry) => entry.licenseSource)
    );
    selectedSources = sources.filter(
      (source) =>
        `awesome/${ownerForSource(source.id, ownership)}` === app.id || references.has(source.id)
    );
    const available = new Set(selectedSources.map((source) => source.id));
    for (const id of references)
      if (!available.has(id))
        throw new Error(`出典ロックから生成できない参照があります: ${app.id}: ${id}`);
  }

  config.translations.en.categories = Object.fromEntries(
    partitions.categories.map((category) => [category.id, category.name])
  );
  const existingJapaneseCategories = config.translations.ja.categories ?? {};
  config.translations.ja.categories = Object.fromEntries(
    partitions.categories.map((category) => [
      category.id,
      existingJapaneseCategories[category.id] ??
        (category.name === 'Overview' ? '概要' : category.name),
    ])
  );
  const existingVersions = new Map(
    config.versioning.versions.map((version) => [version.id, version])
  );
  config.versioning.versions = versions.map((id) => ({
    ...(existingVersions.get(id) ?? {
      id,
      name: `Snapshot ${id.slice(1)}`,
      date: `${id.slice(1, 11)}T00:00:00.000Z`,
    }),
    isLatest: id === latestVersion,
  }));
  config.licensing.defaultSource =
    selectedSources.find((source) => source.id === 'sindresorhus-awesome-readme')?.id ??
    selectedSources.find((source) => source.id === config.licensing.defaultSource)?.id ??
    selectedSources[0]?.id;
  config.licensing.sources = selectedSources;
  const serialized = `${formatProjectConfigJsonc(JSON.stringify(config, null, 2))}\n`;
  return {
    configPath,
    config,
    serialized,
    sourceIds: selectedSources.map((source) => source.id),
    appId: app.id,
  };
});
if (check) {
  for (const entry of prepared) {
    if (!isDeepStrictEqual(readJsoncFile(entry.configPath), entry.config))
      throw new Error(`Awesome出典レジストリが生成結果と一致しません: ${entry.appId}`);
  }
  console.log(`Awesome source registry check: OK (${prepared.length} app(s))`);
} else if (dryRun) {
  console.log(
    JSON.stringify(
      prepared.map(({ serialized: _serialized, config: _config, ...entry }) => entry),
      null,
      2
    )
  );
} else {
  prepareImportBatch({
    stagingRoot: path.join(rootDir, '.tmp/document-import/awesome/registry-staging'),
    outputs: prepared.map((entry) => ({
      targetPath: entry.configPath,
      kind: 'file',
      generate: (file) => fs.writeFileSync(file, entry.serialized),
      validate: (file) => {
        if (!isDeepStrictEqual(readJsoncFile(file), entry.config))
          throw new Error(`生成した出典レジストリが不正です: ${entry.appId}`);
      },
    })),
  });
  for (const entry of prepared) {
    console.log(
      `Generated Awesome source registry for ${entry.appId} (${entry.sourceIds.length} sources)`
    );
  }
}
