import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { stripJsonComments } from '../../packages/project-config/src/jsonc-runtime.js';

const repository = path.resolve(import.meta.dirname, '../..');

test('実際の設定loaderとキャッシュは別グループの同名子を混同しない', (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-config-groups-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, content) => {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  };
  const template = JSON.parse(
    stripJsonComments(
      fs.readFileSync(
        path.join(repository, 'templates/docs-site/src/config/project.config.jsonc'),
        'utf8'
      )
    )
  );
  for (const group of ['alpha', 'beta']) {
    write(
      `apps/${group}/group.config.jsonc`,
      JSON.stringify({
        schemaVersion: 1,
        name: { en: group },
        entry: 'web',
      })
    );
    const config = structuredClone(template);
    config.paths.projectSlug = 'web';
    config.translations.en.displayName = group;
    write(`apps/${group}/web/src/config/project.config.jsonc`, JSON.stringify(config));
  }
  write(
    'package.json',
    JSON.stringify({ name: 'config-loader-fixture', type: 'module', private: true })
  );
  write(
    'astro.config.mjs',
    "import {defineConfig} from 'astro/config'; export default defineConfig({output:'static'});\n"
  );
  fs.symlinkSync(path.join(repository, 'node_modules'), path.join(root, 'node_modules'), 'dir');
  write(
    'src/pages/result.json.ts',
    `
import assert from 'node:assert/strict';
import { getProjectConfig } from ${JSON.stringify(path.join(repository, 'packages/project-config/src/config.ts'))};
import { loadProjectConfigFromJSON } from ${JSON.stringify(path.join(repository, 'packages/project-config/src/config-loader.ts'))};
export async function GET() {
  const alphaDir = ${JSON.stringify(path.join(root, 'apps/alpha/web'))};
  const betaDir = ${JSON.stringify(path.join(root, 'apps/beta/web'))};
  const alpha = await getProjectConfig(alphaDir);
  const beta = await getProjectConfig(betaDir);
  assert.strictEqual(await getProjectConfig(alphaDir + '/src/..'), alpha);
  assert.strictEqual(await getProjectConfig(betaDir), beta);
  assert.notStrictEqual(alpha, beta);
  const inferred = await loadProjectConfigFromJSON(betaDir + '/src/config/project.config.jsonc');
  return new Response(JSON.stringify({
    alpha: [alpha.paths.baseUrl, alpha.paths.projectSlug, alpha.translations.en.displayName],
    beta: [beta.paths.baseUrl, beta.paths.projectSlug, beta.translations.en.displayName],
    inferred: inferred.paths.baseUrl,
  }));
}
`
  );
  execFileSync('pnpm', ['exec', 'astro', 'build'], { cwd: root, stdio: 'pipe', timeout: 60000 });
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, 'dist/result.json'), 'utf8')), {
    alpha: ['/docs/alpha', 'web', 'alpha'],
    beta: ['/docs/beta', 'web', 'beta'],
    inferred: '/docs/beta',
  });
});
