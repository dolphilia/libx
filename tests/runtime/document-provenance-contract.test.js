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

test('文書情報を単一の意味的パネルとして本文から分離したページフッターへ配置する', () => {
  const component = fs.readFileSync(componentPath, 'utf8');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  assert.match(component, /<aside class="document-provenance"[^>]*aria-labelledby=/);
  assert.match(component, /getLicenseTemplate/);
  assert.match(component, /sourceStatus\.canonical/);
  assert.match(component, /sourceStatus\.translation/);
  assert.ok(layout.indexOf('</article>') < layout.indexOf('<DocumentProvenance'));
  assert.match(layout, /<footer class="document-context-footer">/);
  assert.match(component, /data-context-kind/);
  assert.match(component, /note\.context\.anchor/);
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

test('公開公式文書のLibx注記と会話上の承認表現を本文へ戻さない', () => {
  const projects = ['cjson', 'fmt', 'glfw', 'gperf', 'lua', 'ninja', 'pugixml', 'spdlog', 'toml', 'uthash', 'xxhash', 'zlib'];
  const markers = /<aside[^>]*(?:data-editorial="(?:provenance|source-note|license)"|class="(?:libx-source-notes|fmt-editorial-note)")|^> \*\*Libx|^## (?:Editorial notes|固定した(?:上流)?原文.*編集注記|固定した上流原文に対する編集注記|固定原文についての編集注記|Source and notices|出典と通知)|訳注：|^編集注記：/mi;
  const approval = /user.approved|approved operating policy|ユーザー.{0,12}承認|承認.{0,12}運用方針/i;
  for (const project of projects) {
    const pending = [path.join(rootDir, 'apps', project, 'src/content/docs')];
    while (pending.length) {
      const directory = pending.pop();
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) pending.push(target);
        if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
        // Separate, unpublished Lua update remains owned by its existing maintenance operation.
        if (entry.name === '04-known-issues-2026-10-02.md') continue;
        const source = fs.readFileSync(target, 'utf8');
        const { content, data } = matter(source);
        assert.doesNotMatch(content, markers, target);
        assert.doesNotMatch(source, approval, target);
        for (const note of data.documentContext ?? []) {
          assert.ok(['source', 'editorial'].includes(note.kind), target);
          assert.ok(note.html.trim(), target);
        }
      }
    }
  }
});
