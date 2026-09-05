#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import {
  discoverApps,
  findRepositoryRoot,
} from '../../packages/project-config/src/app-registry.js';
import { collectGroupPages } from '../../packages/project-config/src/group-pages.js';
import { loadAwesomeOwnership, ownerForSource } from '../importers/awesome/app-ownership.mjs';
import { readJsoncFile, formatProjectConfigJsonc } from '../jsonc-utils.js';

const hash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const read = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const write = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
};

/** Prepare an isolated repository-shaped stage. Publication is a separate operation. */
export function stageAwesomeGroup(stageRoot, root = findRepositoryRoot()) {
  stageRoot = path.resolve(stageRoot);
  if (fs.existsSync(stageRoot)) throw new Error(`ステージが既に存在します: ${stageRoot}`);
  const original = path.join(root, 'apps/awesome');
  if (fs.existsSync(path.join(original, 'group.config.jsonc')))
    throw new Error('Awesomeは既にグループ化されています');
  const ownership = loadAwesomeOwnership(root);
  const children = ['overview', 'web', 'languages', 'systems', 'science', 'creative', 'community'];
  for (const child of Object.values(ownership.sourceOwners))
    if (!children.includes(child)) throw new Error(`未対応の所有子: ${child}`);
  const localized = read(path.join(original, 'src/generated/awesome-localized-routes.json'));
  const english = read(path.join(original, 'src/generated/awesome-routes.json'));
  const originalConfig = readJsoncFile(path.join(original, 'src/config/project.config.jsonc'));
  const originalApp = discoverApps(root).apps.find((app) => app.id === 'awesome');
  if (!originalApp) throw new Error('移行元のAwesomeアプリがありません');
  const records = [];
  const groupDirectory = path.join(stageRoot, 'apps/awesome');
  try {
    write(path.join(stageRoot, 'pnpm-workspace.yaml'), 'packages:\n  - apps/*/*\n');
    write(path.join(stageRoot, 'config/awesome-source-owners.json'), ownership);
    write(path.join(groupDirectory, 'group.config.jsonc'), {
      schemaVersion: 1,
      name: { ja: 'Awesomeリスト', en: 'Awesome Lists' },
      entry: 'overview',
      order: children,
      versioning: { mode: 'shared' },
    });
    for (const child of children) {
      const destination = path.join(groupDirectory, child);
      const own = (entry) => ownerForSource(entry.sourceId, ownership) === child;
      const entries = localized.entries.filter(own);
      for (const relative of ['astro.config.mjs', 'src/layouts', 'src/styles', 'src/lib']) {
        const target = path.join(destination, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.cpSync(path.join(original, relative), target, { recursive: true });
      }
      const pages = 'src/pages';
      if (child === 'overview')
        fs.cpSync(path.join(original, pages), path.join(destination, pages), { recursive: true });
      else {
        const route = `${pages}/[version]/[lang]/[...slug].astro`;
        write(path.join(destination, route), fs.readFileSync(path.join(original, route), 'utf8'));
      }
      const pkg = read(path.join(original, 'package.json'));
      pkg.name = `apps-awesome-${child}`;
      pkg.scripts.prebuild = 'node prepare.mjs';
      pkg.scripts['check:content'] = 'node prepare.mjs --check-content';
      write(path.join(destination, 'package.json'), pkg);
      write(
        path.join(destination, 'prepare.mjs'),
        `import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
const root = findRepositoryRoot(path.dirname(fileURLToPath(import.meta.url)));
const operations = process.argv.includes('--check-content')
  ? [['importers/awesome/validate-awesome-single-app.mjs', '--snapshot=v2026-08-23'], ['importers/awesome/validate-awesome-translation.mjs', '--snapshot=v2026-08-23', '--require-complete']]
  : [['sync-service-workers.js', '--project=awesome/${child}']];
for (const [script, ...args] of operations) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
`
      );
      const tsconfig = read(path.join(original, 'tsconfig.json'));
      tsconfig.extends = '@docs/config/astro.json';
      delete tsconfig.compilerOptions.paths;
      write(path.join(destination, 'tsconfig.json'), tsconfig);
      const config = structuredClone(originalConfig);
      config.paths.projectSlug = child;
      const references = new Set(entries.map((entry) => entry.licenseSource));
      config.licensing.sources = config.licensing.sources.filter(
        (source) => references.has(source.id) || ownership.sourceOwners[source.id] === child
      );
      for (const id of references)
        if (!config.licensing.sources.some((source) => source.id === id))
          throw new Error(`出典がありません: ${child}: ${id}`);
      if (!config.licensing.sources.some((source) => source.id === config.licensing.defaultSource))
        config.licensing.defaultSource = config.licensing.sources[0]?.id;
      write(
        path.join(destination, 'src/config/project.config.jsonc'),
        formatProjectConfigJsonc(JSON.stringify(config, null, 2)) + '\n'
      );
      write(path.join(destination, 'src/generated/awesome-routes.json'), {
        ...english,
        entries: english.entries.filter(own),
      });
      write(path.join(destination, 'src/generated/awesome-localized-routes.json'), {
        ...localized,
        entries,
      });
      write(
        path.join(destination, 'src/generated/awesome-preview-status.json'),
        read(path.join(original, 'src/generated/awesome-preview-status.json'))
      );
      const urls = new Set(
        entries.map(
          (entry) => `${originalApp.publicBase}/${entry.version}/${entry.lang}/${entry.slug}`
        )
      );
      for (const version of config.versioning.versions.map((entry) => entry.id)) {
        for (const lang of ['en', 'ja']) {
          const searchPath = `public/search/${version}/${lang}.json`;
          const search = read(path.join(original, searchPath));
          search.entries = search.entries.filter((entry) => urls.has(entry.url.replace(/\/$/, '')));
          const expectedCount = entries.filter(
            (entry) => entry.version === version && entry.lang === lang
          ).length;
          if (search.entries.length !== expectedCount)
            throw new Error(`検索件数が一致しません: ${child}/${version}/${lang}`);
          write(path.join(destination, searchPath), search);
          const sidebarPath = `public/sidebar/sidebar-${lang}-${version}.json`;
          const sidebar = read(path.join(original, sidebarPath))
            .map((section) => ({
              ...section,
              items: section.items.filter((entry) => urls.has(entry.href.replace(/\/$/, ''))),
            }))
            .filter((section) => section.items.length);
          if (sidebar.reduce((total, section) => total + section.items.length, 0) !== expectedCount)
            throw new Error(`サイドバー件数が一致しません: ${child}/${version}/${lang}`);
          write(path.join(destination, sidebarPath), sidebar);
        }
      }
      if (child === 'overview')
        for (const asset of ['favicon.svg', 'sw.js'])
          write(
            path.join(destination, 'public', asset),
            fs.readFileSync(path.join(original, 'public', asset), 'utf8')
          );
      for (const entry of entries) {
        const relative = entry.moduleKey.slice(1);
        if (!relative.startsWith('src/awesome-content/') || relative.split('/').includes('..'))
          throw new Error(`不正な本文経路: ${relative}`);
        const source = path.join(original, relative);
        const target = path.join(destination, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(source, target);
        const sha256 = hash(source);
        if (hash(target) !== sha256) throw new Error(`本文が変化しました: ${relative}`);
        records.push({
          sourceId: entry.sourceId,
          version: entry.version,
          lang: entry.lang,
          child,
          relative,
          sha256,
        });
      }
    }
    const registry = discoverApps(stageRoot);
    const catalog = collectGroupPages(registry.groups[0], registry.apps);
    const originalFiles = fs
      .readdirSync(path.join(original, 'src/awesome-content'), {
        recursive: true,
        withFileTypes: true,
      })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'));
    if (records.length !== originalFiles.length || catalog.pages.length !== records.length)
      throw new Error('本文数が一致しません');
    const report = {
      schemaVersion: 1,
      status: 'staged-not-published',
      documents: records.length,
      children: children.map((child) => ({
        child,
        pages: records.filter((entry) => entry.child === child).length,
      })),
      records,
    };
    write(path.join(stageRoot, 'migration-stage.json'), report);
    return report;
  } catch (error) {
    fs.rmSync(stageRoot, { recursive: true, force: true });
    throw error;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const stage = process.argv.find((arg) => arg.startsWith('--stage='))?.slice(8);
  if (!stage) throw new Error('--stage=<新しいステージディレクトリ>を指定してください');
  const report = stageAwesomeGroup(stage);
  console.log(
    JSON.stringify({
      status: report.status,
      documents: report.documents,
      children: report.children,
    })
  );
}
