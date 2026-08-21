import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const componentIndexPath = path.join(rootDir, 'packages/ui/src/components/index.ts');
const layoutPaths = [
  'templates/docs-site/src/layouts/MainLayout.astro',
  'apps/glfw/src/layouts/MainLayout.astro',
  'apps/lua/src/layouts/MainLayout.astro',
  'apps/sample-docs/src/layouts/MainLayout.astro',
  'apps/test-verification/src/layouts/MainLayout.astro',
  'sites/landing/src/layouts/MainLayout.astro',
];

test('廃止した共有フッターと全配信レイアウトに貢献エリアを残さない', () => {
  const componentIndex = fs.readFileSync(componentIndexPath, 'utf8');

  assert.doesNotMatch(componentIndex, /Footer/);
  assert.equal(fs.existsSync(path.join(rootDir, 'packages/ui/src/components/Footer.astro')), false);

  for (const relativePath of layoutPaths) {
    const layout = fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
    assert.doesNotMatch(layout, /showContribute|contributeUrl/, relativePath);
  }
});

test('ロケールに廃止した貢献エリア用翻訳を残さない', () => {
  const localeDir = path.join(rootDir, 'packages/i18n/src/locales');

  for (const file of fs.readdirSync(localeDir).filter((name) => name.endsWith('.json'))) {
    const locale = JSON.parse(fs.readFileSync(path.join(localeDir, file), 'utf8'));
    assert.equal(locale.contribute, undefined, file);
    assert.equal(locale.footer?.contributeText, undefined, file);
    assert.equal(locale.footer?.contributeLink, undefined, file);
  }
});
