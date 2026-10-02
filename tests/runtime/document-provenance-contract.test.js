import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { readJsoncFile } from '../../scripts/jsonc-utils.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const componentPath = path.join(rootDir, 'packages/ui/src/components/DocumentProvenance.astro');
const layoutPath = path.join(rootDir, 'templates/docs-site/src/layouts/DocLayout.astro');

test('文書情報を単一の意味的パネルとして文書最下部へ配置する', () => {
  const component = fs.readFileSync(componentPath, 'utf8');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  assert.match(component, /<aside class="document-provenance" aria-labelledby=/);
  assert.match(component, /getLicenseTemplate/);
  assert.match(component, /sourceStatus\.canonical/);
  assert.match(component, /sourceStatus\.translation/);
  assert.ok(layout.indexOf('<slot />') < layout.indexOf('<DocumentProvenance'));
  assert.doesNotMatch(layout, /SourceStatus|LicenseAttribution/);
});

test('旧表示APIとページ単位の帰属非表示設定を残さない', () => {
  const componentIndex = fs.readFileSync(
    path.join(rootDir, 'packages/ui/src/components/index.ts'),
    'utf8'
  );
  const schema = fs.readFileSync(
    path.join(rootDir, 'packages/content-utils/src/content-schema.ts'),
    'utf8'
  );

  assert.match(componentIndex, /DocumentProvenance/);
  assert.doesNotMatch(componentIndex, /SourceStatus|LicenseAttribution/);
  assert.doesNotMatch(schema, /customAttribution|hideAttribution/);
});

test('GLFWとLuaは既定ソースをFrontmatterへ重複記述しない', () => {
  for (const app of ['glfw', 'lua']) {
    const { licensing } = readJsoncFile(
      path.join(rootDir, 'apps', app, 'src/config/project.config.jsonc')
    );
    const contentRoot = path.join(rootDir, 'apps', app, 'src/content/docs');
    const pending = [contentRoot];

    while (pending.length > 0) {
      const directory = pending.pop();
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) pending.push(target);
        if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
          const { licenseSource } = matter(fs.readFileSync(target, 'utf8')).data;
          if (licenseSource !== undefined) {
            assert.notEqual(licenseSource, licensing.defaultSource, target);
            assert.ok(
              licensing.sources.some((source) => source.id === licenseSource),
              target
            );
          }
        }
      }
    }
  }
});

test('Luaの既知問題は英日とも固定取得版の別出典を明示する', () => {
  for (const language of ['en', 'ja']) {
    const target = path.join(
      rootDir,
      'apps/lua/src/content/docs/v5-5-1',
      language,
      '07-migration-and-known-issues/03-known-issues.md'
    );
    assert.equal(matter(fs.readFileSync(target, 'utf8')).data.licenseSource, 'lua-bugs-2026-08-11');
  }
});
