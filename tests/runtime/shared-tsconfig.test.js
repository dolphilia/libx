import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import test from 'node:test';
import ts from 'typescript';
import { discoverApps } from '../../packages/project-config/src/app-registry.js';

const root = path.resolve(import.meta.dirname, '../..');

test('共有tsconfigは全appとテンプレートで局所・共有モジュールを正しく解決する', () => {
  const directories = [
    ...discoverApps(root).apps.map((app) => app.directory),
    path.join(root, 'templates/docs-site'),
  ];
  for (const directory of directories) {
    const file = path.join(directory, 'tsconfig.json');
    const parsed = ts.getParsedCommandLineOfConfigFile(
      file,
      {},
      {
        ...ts.sys,
        onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
          assert.fail(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
        },
      }
    );
    assert.ok(parsed);
    assert.deepEqual(parsed.errors, []);
    for (const [specifier, expected] of [
      ['@/lib/navigation', path.join(directory, 'src/lib/navigation.ts')],
      ['@docs/i18n/locales', path.join(root, 'packages/i18n/src/locales/index.ts')],
      ['@docs/project-config', path.join(root, 'packages/project-config/src/index.ts')],
      ['@docs/content-utils', path.join(root, 'packages/content-utils/src/index.ts')],
      [
        '@docs/ui/components/icons/Icons',
        path.join(root, 'packages/ui/src/components/icons/Icons.ts'),
      ],
    ]) {
      const resolved = ts.resolveModuleName(
        specifier,
        path.join(directory, 'src/example.ts'),
        parsed.options,
        ts.sys
      ).resolvedModule;
      assert.ok(resolved, `${directory}: ${specifier}`);
      assert.equal(fs.realpathSync(resolved.resolvedFileName), fs.realpathSync(expected));
    }
  }
});
