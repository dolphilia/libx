import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const testDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testDir, '..', '..');
const projects = [
  { id: 'docs-site', directory: path.join(repoRoot, 'templates', 'docs-site') },
  { id: 'sample-docs', directory: path.join(repoRoot, 'apps', 'sample-docs') },
  { id: 'test-verification', directory: path.join(repoRoot, 'apps', 'test-verification') },
];

test('document app root redirects point to generated pages', async () => {
  for (const project of projects) {
    const distDir = path.join(project.directory, 'dist');
    const rootHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
    const redirect = rootHtml.match(/content="\d+;url=([^"]+)"/)?.[1];
    assert.ok(redirect, `${project.id} must render a redirect URL`);

    const basePath = `/docs/${project.id}`;
    assert.ok(
      redirect.startsWith(`${basePath}/`),
      `${project.id} redirect must stay in its base path`
    );
    const relativeTarget = redirect.slice(basePath.length).replace(/^\/+|\/+$/g, '');
    const targetFile = path.join(distDir, relativeTarget, 'index.html');
    await fs.access(targetFile);
  }
});

test('built HTML has no unresolved parent segments or duplicate documentation base path', async () => {
  for (const project of projects) {
    const distDir = path.join(project.directory, 'dist');
    const files = await collectHtmlFiles(distDir);
    for (const file of files) {
      const html = await fs.readFile(file, 'utf8');
      assert.doesNotMatch(html, /(?:href|src)="[^"]*\/\.\.\//, file);
      assert.doesNotMatch(html, new RegExp(`/docs/${project.id}/docs/${project.id}/`), file);
    }
  }
});

test('sidebar JSON links point to generated pages', async () => {
  for (const project of projects) {
    const appDir = project.directory;
    const distDir = path.join(appDir, 'dist');
    const sidebarDir = path.join(appDir, 'public', 'sidebar');
    const files = (await fs.readdir(sidebarDir)).filter((file) => file.endsWith('.json'));

    for (const file of files) {
      const groups = JSON.parse(await fs.readFile(path.join(sidebarDir, file), 'utf8'));
      for (const group of groups) {
        for (const item of group.items ?? []) {
          const basePath = `/docs/${project.id}`;
          assert.ok(item.href.startsWith(`${basePath}/`), `${file}: ${item.href}`);
          const relativeTarget = item.href.slice(basePath.length).replace(/^\/+|\/+$/g, '');
          await fs.access(path.join(distDir, relativeTarget, 'index.html'));
        }
      }
    }
  }
});

test('missing locale-version combinations are not requested or offered', async () => {
  const html = await fs.readFile(
    path.join(repoRoot, 'apps/sample-docs/dist/v2/ar/01-guide/01-getting-started/index.html'),
    'utf8'
  );

  assert.doesNotMatch(html, /sidebar-ar-v1\.json/);
  assert.doesNotMatch(html, /data-version-link="true"[^>]+href="[^"]*\/v1\//);
  assert.match(html, /sidebar-\$\{lang\}-\$\{version\}\.json/);
  await fs.access(path.join(repoRoot, 'apps/sample-docs/public/sidebar/sidebar-ar-v2.json'));
});

test('zero, partial, and complete translations expose only valid language page links', async () => {
  const zeroTranslation = await fs.readFile(
    path.join(repoRoot, 'apps/sample-docs/dist/v1/en/01-guide/01-getting-started/index.html'),
    'utf8'
  );
  assert.doesNotMatch(zeroTranslation, /href="[^"]*\/v1\/ar\/01-guide\/01-getting-started\/?"/);
  assert.match(zeroTranslation, /<aside class="sidebar"/);
  assert.match(zeroTranslation, /class="pagination-links"/);
  await assert.rejects(fs.access(path.join(repoRoot, 'apps/sample-docs/dist/v1/ar/index.html')));

  const partialTranslation = await fs.readFile(
    path.join(repoRoot, 'apps/sample-docs/dist/v2/en/02-components/01-overview/index.html'),
    'utf8'
  );
  assert.doesNotMatch(partialTranslation, /href="[^"]*\/v2\/ar\/02-components\/01-overview\/?"/);
  assert.doesNotMatch(partialTranslation, /href="[^"]*\/v1\/en\/02-components\/01-overview/);
  assert.doesNotMatch(partialTranslation, /class="pagination-links"[\s\S]*href="[^"]*\/ar\//);

  const completeTranslation = await fs.readFile(
    path.join(repoRoot, 'apps/glfw/dist/v3-5-1/en/01-overview/01-introduction/index.html'),
    'utf8'
  );
  assert.match(completeTranslation, /href="[^"]*\/v3-5-1\/ja\/01-overview\/01-introduction\/"/);
});

test('integrated output provides an accessible multilingual 404 page', async () => {
  const html = await fs.readFile(path.join(repoRoot, 'dist/404.html'), 'utf8');
  assert.match(html, /Page not found/);
  assert.match(html, /ページが見つかりません/);
  assert.match(html, /aria-label="Documentation languages \/ 文書の言語"/);
  assert.match(html, /href="\/ja\/"/);
  assert.doesNotMatch(html, /http-equiv="refresh"/i);
  assert.doesNotMatch(html, /rel="canonical"[^>]+href="https:\/\/libx\.dev\/"/i);
});

async function collectHtmlFiles(directory) {
  const result = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await collectHtmlFiles(entryPath)));
    if (entry.isFile() && entry.name.endsWith('.html')) result.push(entryPath);
  }
  return result;
}
