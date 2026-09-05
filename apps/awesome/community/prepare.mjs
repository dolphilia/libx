import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
const root = findRepositoryRoot(path.dirname(fileURLToPath(import.meta.url)));
const operations = process.argv.includes('--check-content')
  ? [
      ['importers/awesome/validate-awesome-single-app.mjs', '--snapshot=v2026-08-23'],
      [
        'importers/awesome/validate-awesome-translation.mjs',
        '--snapshot=v2026-08-23',
        '--require-complete',
      ],
    ]
  : [['sync-service-workers.js', '--project=awesome/community']];
for (const [script, ...args] of operations) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
