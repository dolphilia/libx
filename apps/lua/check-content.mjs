import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
const root = findRepositoryRoot(path.dirname(fileURLToPath(import.meta.url)));
const operations = [
  ['importers/import-lua-5.5.1.mjs', '--check', '--allow-missing-source'],
  ['importers/normalize-lua-translation-format.mjs', '--check'],
  [
    'validate-translated-content.mjs',
    '--project=lua',
    '--version=v5-5-1',
    '--target=ja',
    '--identifier-prefixes=lua_,luaL_,LUA_',
  ],
];
for (const [script, ...args] of operations) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
