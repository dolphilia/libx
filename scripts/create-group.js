#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { findRepositoryRoot, discoverApps } from '../packages/project-config/src/app-registry.js';
import {
  copyTemplateDirectory,
  updateAstroConfig,
  updatePackageJson,
  updateProjectConfig,
  updateTsConfig,
} from './create-project.js';

/** Publish a complete group and its entry app together; never leave an empty marker. */
export function createGroup({ id, nameEn, nameJa, dryRun = false }, root = findRepositoryRoot()) {
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) ||
    ['node-modules', 'dist', 'public', 'src'].includes(id)
  ) {
    throw new Error(`グループIDが不正です: ${id}`);
  }
  if (!nameEn?.trim() || !nameJa?.trim()) throw new Error('英語と日本語の表示名が必要です。');
  const destination = path.join(root, 'apps', id);
  if (fs.existsSync(destination)) throw new Error(`配置先が既に存在します: ${destination}`);
  if (discoverApps(root).apps.some((app) => app.packageName === `apps-${id}-overview`)) {
    throw new Error('入口アプリのpackage名が既存アプリと重複します。');
  }
  if (dryRun) return { directory: destination, entryId: `${id}/overview`, dryRun: true };
  const stage = path.join(root, 'apps', `.group-${randomUUID()}`);
  try {
    const entry = path.join(stage, 'overview');
    copyTemplateDirectory(path.join(root, 'templates/docs-site'), entry);
    updatePackageJson(entry, `${id}/overview`);
    updateAstroConfig(entry);
    updateTsConfig(entry);
    updateProjectConfig(entry, {
      projectName: `${id}/overview`,
      displayNameEn: nameEn,
      displayNameJa: nameJa,
      descriptionEn: `Documentation for ${nameEn}`,
      descriptionJa: `${nameJa}のドキュメント`,
    });
    fs.writeFileSync(
      path.join(stage, 'group.config.jsonc'),
      JSON.stringify(
        {
          schemaVersion: 1,
          name: { en: nameEn, ja: nameJa },
          entry: 'overview',
          order: ['overview'],
          versioning: { mode: 'independent' },
        },
        null,
        2
      ) + '\n'
    );
    fs.writeFileSync(
      path.join(stage, 'README.md'),
      `# ${nameJa}\n\n所属は直下の子アプリから自動検出します。表示順と入口はgroup.config.jsoncで設定します。\n`
    );
    fs.renameSync(stage, destination);
    try {
      discoverApps(root);
    } catch (error) {
      fs.renameSync(destination, stage);
      throw error;
    }
    return { directory: destination, entryId: `${id}/overview`, dryRun: false };
  } finally {
    fs.rmSync(stage, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.includes('--help')) {
      console.log('pnpm create:group <id> <英語名> <日本語名> [--dry-run] [--skip-install]');
    } else {
      const positional = args.filter((arg) => !arg.startsWith('--'));
      if (
        positional.length !== 3 ||
        args.some((arg) => arg.startsWith('--') && !['--dry-run', '--skip-install'].includes(arg))
      ) {
        throw new Error('pnpm create:group <id> <英語名> <日本語名> [--dry-run] [--skip-install]');
      }
      const root = findRepositoryRoot();
      const result = createGroup(
        {
          id: positional[0],
          nameEn: positional[1],
          nameJa: positional[2],
          dryRun: args.includes('--dry-run'),
        },
        root
      );
      console.log(JSON.stringify(result, null, 2));
      if (!result.dryRun && !args.includes('--skip-install')) {
        execFileSync('pnpm', ['install'], { cwd: root, stdio: 'inherit' });
      }
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
