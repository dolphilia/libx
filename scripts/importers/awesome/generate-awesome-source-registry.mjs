#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { formatProjectConfigJsonc, readJsoncFile } from '../../jsonc-utils.js';
import { notesDir, notesRootDir, readJson, rootDir, snapshotVersion } from './common.mjs';

const project =
  process.argv.find((argument) => argument.startsWith('--project='))?.slice('--project='.length) ??
  'awesome';
if (project !== 'awesome') throw new Error('単一アプリ統合後はproject=awesomeだけを生成できます');
const configPath = path.join(rootDir, 'apps', project, 'src/config/project.config.jsonc');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const historicalLockPath = path.join(notesRootDir, 'snapshots', 'v2026-08-20', 'SOURCES.lock.json');
const historicalLock = fs.existsSync(historicalLockPath) ? readJson(historicalLockPath) : null;
const dryRun = process.argv.includes('--dry-run');
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
  [...(historicalLock?.sources ?? []), ...lock.sources].map((source) => [source.sourceId, source])
);
const sources = [...sourceRecords.values()]
  .filter((source) => source.status === 'included')
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
const config = readJsoncFile(configPath);
const partitions = readJson(path.join(notesDir, 'CONTENT_PARTITIONS.json'));
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
config.versioning.versions = [
  {
    id: 'v2026-08-20',
    name: 'Snapshot 2026-08-20',
    date: '2026-08-20T00:00:00.000Z',
    isLatest: snapshotVersion === 'v2026-08-20',
  },
  ...(snapshotVersion === 'v2026-08-20'
    ? []
    : [
        {
          id: snapshotVersion,
          name: `Snapshot ${snapshotVersion.slice(1)}`,
          date: `${snapshotVersion.slice(1)}T00:00:00.000Z`,
          isLatest: true,
        },
      ]),
];
config.licensing.defaultSource =
  sources.find((source) => source.id === 'sindresorhus-awesome-readme')?.id ?? sources[0]?.id;
config.licensing.sources = sources;
const serialized = `${formatProjectConfigJsonc(JSON.stringify(config, null, 2))}\n`;
if (dryRun) {
  console.log(JSON.stringify({ sources: sources.map((source) => source.id), configPath }, null, 2));
} else {
  const temporary = `${configPath}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, serialized);
  fs.renameSync(temporary, configPath);
  console.log(`Generated Awesome source registry for ${project} (${sources.length} sources)`);
}
