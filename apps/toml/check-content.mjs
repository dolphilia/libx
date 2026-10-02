import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
const root = findRepositoryRoot(path.dirname(fileURLToPath(import.meta.url)));
const operations = [
  ['importers/import-toml-1.1.0.mjs', '--check'],
  ['validate-translated-content.mjs', '--project=toml', '--version=v1-1-0', '--target=ja'],
];
for (const [script, ...args] of operations) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
