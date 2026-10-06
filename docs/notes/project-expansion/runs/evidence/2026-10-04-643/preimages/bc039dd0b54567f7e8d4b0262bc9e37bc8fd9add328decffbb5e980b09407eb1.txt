#!/usr/bin/env node

import fs from 'node:fs';
import { discoverApps } from '../packages/project-config/src/app-registry.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templateRoot = path.join(rootDir, 'templates/docs-site/src');
function layoutApps() {
  return discoverApps(rootDir).apps.filter(
    (app) =>
      fs.existsSync(path.join(app.directory, 'src/content/docs')) ||
      fs.existsSync(path.join(app.directory, 'src/lib/navigation.ts'))
  );
}
const sharedLayouts = ['layouts/MainLayout.astro', 'layouts/DocLayout.astro'];
function filesFor(app) {
  return fs.existsSync(path.join(app.directory, 'src/content/docs'))
    ? [...sharedLayouts, 'pages/[version]/[lang]/[...slug].astro', 'lib/navigation.ts']
    : sharedLayouts;
}

export function findLayoutDifferences() {
  return layoutApps().flatMap((app) =>
    filesFor(app).flatMap((file) => {
      const canonical = fs.readFileSync(path.join(templateRoot, file));
      const targetPath = path.join(app.directory, 'src', file);
      return fs.existsSync(targetPath) && canonical.equals(fs.readFileSync(targetPath))
        ? []
        : [path.relative(rootDir, targetPath)];
    })
  );
}

export function syncLayouts() {
  for (const app of layoutApps()) {
    for (const file of filesFor(app)) {
      fs.mkdirSync(path.dirname(path.join(app.directory, 'src', file)), { recursive: true });
      fs.copyFileSync(path.join(templateRoot, file), path.join(app.directory, 'src', file));
    }
  }
}

export function runCli(args = process.argv.slice(2)) {
  if (args.includes('--check')) {
    const differences = findLayoutDifferences();
    if (differences.length) {
      throw new Error(`正規テンプレートと異なるレイアウトがあります:\n${differences.join('\n')}`);
    }
    console.log(
      `レイアウト同期検査: ${layoutApps().reduce((count, app) => count + filesFor(app).length, 0)}ファイル一致`
    );
    return;
  }
  syncLayouts();
  console.log(
    `レイアウト同期: ${layoutApps().reduce((count, app) => count + filesFor(app).length, 0)}ファイル`
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
