#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templateRoot = path.join(rootDir, 'templates/docs-site/src/layouts');
const apps = ['lua', 'glfw', 'sample-docs', 'test-verification'];
const files = ['MainLayout.astro', 'DocLayout.astro'];

export function findLayoutDifferences() {
  return apps.flatMap((app) =>
    files.flatMap((file) => {
      const canonical = fs.readFileSync(path.join(templateRoot, file));
      const targetPath = path.join(rootDir, 'apps', app, 'src/layouts', file);
      return fs.existsSync(targetPath) && canonical.equals(fs.readFileSync(targetPath))
        ? []
        : [path.relative(rootDir, targetPath)];
    })
  );
}

export function syncLayouts() {
  for (const app of apps) {
    for (const file of files) {
      fs.copyFileSync(
        path.join(templateRoot, file),
        path.join(rootDir, 'apps', app, 'src/layouts', file)
      );
    }
  }
}

export function runCli(args = process.argv.slice(2)) {
  if (args.includes('--check')) {
    const differences = findLayoutDifferences();
    if (differences.length) {
      throw new Error(`正規テンプレートと異なるレイアウトがあります:\n${differences.join('\n')}`);
    }
    console.log(`レイアウト同期検査: ${apps.length * files.length}ファイル一致`);
    return;
  }
  syncLayouts();
  console.log(`レイアウト同期: ${apps.length * files.length}ファイル`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
