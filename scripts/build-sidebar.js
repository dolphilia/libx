#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { discoverApps } from '../packages/project-config/src/app-registry.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
try {
  const projects = discoverApps(root).apps.filter(
    (app) =>
      !fs.existsSync(path.join(app.directory, 'src/generated/awesome-routes.json')) &&
      fs.existsSync(path.join(app.directory, 'src/content/docs'))
  );
  if (projects.length) {
    const result = spawnSync(
      process.execPath,
      [
        path.join(root, 'scripts/build-sidebar-selective.js'),
        `--projects=${projects.map((app) => app.id).join(',')}`,
      ],
      { cwd: root, stdio: 'inherit' }
    );
    if (result.error) throw result.error;
    process.exitCode = result.status ?? 1;
  } else {
    console.log('通常のサイドバー生成対象はありません。');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
