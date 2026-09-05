#!/usr/bin/env node
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { findRepositoryRoot, resolveApp } from './app-registry.js';

// A workspace bin keeps generated applications independent of directory depth.
const root = findRepositoryRoot();
const argument = process.argv.slice(2);
try {
  if (argument.length !== 1 || !/^--(?:projects|template)=[a-z0-9/-]+$/.test(argument[0])) {
    throw new Error('libx-docs-prepare --projects=<app-id> または --template=<name>');
  }
  const template = argument[0].startsWith('--template=');
  const id = argument[0].split('=')[1];
  if (template && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))
    throw new Error('テンプレート名が不正です。');
  if (!template) resolveApp(id, root);
  const operations = [
    ['build-sidebar-selective.js', `--${template ? 'templates' : 'projects'}=${id}`],
    ['build-search-index.js', `--${template ? 'template' : 'project'}=${id}`],
    ['sync-service-workers.js', `--${template ? 'template' : 'project'}=${id}`],
  ];
  for (const [script, option] of operations) {
    const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), option], {
      cwd: root,
      stdio: 'inherit',
    });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(`${script} が失敗しました (${result.status})`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
