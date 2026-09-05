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

test('landing pages link Awesome directly to the localized overview', async () => {
  const japaneseHtml = await fs.readFile(path.join(repoRoot, 'dist/ja/index.html'), 'utf8');
  const englishHtml = await fs.readFile(path.join(repoRoot, 'dist/en/index.html'), 'utf8');

  assert.match(japaneseHtml, />Awesomeリスト<\/h3>/);
  assert.match(
    japaneseHtml,
    /href="\/docs\/awesome\/v2026-08-23\/ja\/overview\/sindresorhus-awesome"/
  );
  assert.match(japaneseHtml, /出典と版を固定したAwesomeリストのスナップショット/);
  assert.match(englishHtml, />Awesome Lists<\/h3>/);
  assert.match(
    englishHtml,
    /href="\/docs\/awesome\/v2026-08-23\/en\/overview\/sindresorhus-awesome"/
  );
});

test('Awesome generic entry points resolve to the latest snapshot', async () => {
  const rootHtml = await fs.readFile(path.join(repoRoot, 'dist/docs/awesome/index.html'), 'utf8');
  const notFoundHtml = await fs.readFile(path.join(repoRoot, 'dist/docs/awesome/404.html'), 'utf8');
  const latestIndexHtml = await fs.readFile(
    path.join(repoRoot, 'dist/docs/awesome/v2026-08-23/en/index.html'),
    'utf8'
  );

  assert.match(rootHtml, /\/docs\/awesome\/v2026-08-23\/en\//);
  assert.match(notFoundHtml, /href="\/docs\/awesome\/v2026-08-23\/en\/"/);
  assert.match(
    latestIndexHtml,
    /href="\/docs\/awesome\/navigation\/v2026-08-23\/en\/"[^>]*class="site-title"/
  );
  await fs.access(path.join(repoRoot, 'dist/docs/awesome/navigation/v2026-08-23/en/index.html'));
});

test('Awesome Japanese pages include localized sidebar navigation and search data', async () => {
  const html = await fs.readFile(
    path.join(
      repoRoot,
      'dist/docs/awesome/v2026-08-20/ja/databases/benallfree-awesome-pocketbase/index.html'
    ),
    'utf8'
  );
  assert.match(
    html,
    /href="\/docs\/awesome\/v2026-08-20\/ja\/databases\/d3viant0ne-awesome-rethinkdb"/
  );
  assert.match(
    html,
    /href="\/docs\/awesome\/v2026-08-20\/ja\/databases\/benallfree-awesome-pocketbase"[^>]*aria-current="page"/
  );

  const searchIndex = JSON.parse(
    await fs.readFile(path.join(repoRoot, 'dist/docs/awesome/search/v2026-08-20/ja.json'), 'utf8')
  );
  assert.equal(searchIndex.lang, 'ja');
  assert.equal(searchIndex.entries.length, 365);
  assert.ok(searchIndex.entries.some((entry) => entry.url.includes('/ja/databases/')));
});

test('Awesome overview links included lists to the matching localized pages', async () => {
  for (const lang of ['ja', 'en']) {
    const html = await fs.readFile(
      path.join(
        repoRoot,
        `dist/docs/awesome/v2026-08-20/${lang}/overview/sindresorhus-awesome/index.html`
      ),
      'utf8'
    );

    assert.match(
      html,
      new RegExp(`href="/docs/awesome/v2026-08-20/${lang}/platforms/sindresorhus-awesome-nodejs/"`)
    );
    assert.doesNotMatch(html, /href="https:\/\/github\.com\/sindresorhus\/awesome-nodejs#readme"/);
    assert.match(html, /href="https:\/\/github\.com\/0pandadev\/awesome-windows#readme"/);
  }
});

test('Awesome overview exposes its matching language and snapshot selectors', async () => {
  const japaneseHtml = await fs.readFile(
    path.join(
      repoRoot,
      'dist/docs/awesome/v2026-08-20/ja/overview/sindresorhus-awesome/index.html'
    ),
    'utf8'
  );
  const englishHtml = await fs.readFile(
    path.join(
      repoRoot,
      'dist/docs/awesome/v2026-08-20/en/overview/sindresorhus-awesome/index.html'
    ),
    'utf8'
  );

  assert.match(
    englishHtml,
    /href="\/docs\/awesome\/v2026-08-20\/ja\/overview\/sindresorhus-awesome\/"/
  );
  assert.match(
    japaneseHtml,
    /href="\/docs\/awesome\/v2026-08-20\/en\/overview\/sindresorhus-awesome\/"/
  );
  assert.match(japaneseHtml, />Snapshot 2026-08-20<\/span>/);
  assert.match(japaneseHtml, /data-version-link="true"/);
});

test('Awesome overview starts with a localized title and summary without sponsor promotion', async () => {
  const pages = [
    {
      lang: 'en',
      heading: 'Awesome Lists',
      summary:
        'A curated directory of Awesome lists spanning technology, science, business, culture, and more.',
    },
    {
      lang: 'ja',
      heading: 'Awesomeリスト',
      summary:
        '技術、科学、ビジネス、文化など、幅広い分野のAwesomeリストを集めたディレクトリです。',
    },
  ];

  for (const page of pages) {
    const html = await fs.readFile(
      path.join(
        repoRoot,
        `dist/docs/awesome/v2026-08-20/${page.lang}/overview/sindresorhus-awesome/index.html`
      ),
      'utf8'
    );
    assert.match(html, new RegExp(`<h1[^>]*>${page.heading}</h1>`));
    assert.match(html, new RegExp(`<p>${page.summary}`));
    assert.doesNotMatch(
      html,
      /github\.com\/sponsors|Special thanks to|Supercharge|Software Patreons/
    );
    if (page.lang === 'ja') {
      assert.doesNotMatch(html, /分野の厳選リストまたは関連資料です。/);
      assert.match(html, /Chrome の V8 JavaScript エンジン上に構築された/);
    }
  }
});

test('Awesome sidebar uses curated list names and localized Japanese categories', async () => {
  const japaneseHtml = await fs.readFile(
    path.join(
      repoRoot,
      'dist/docs/awesome/v2026-08-20/ja/platforms/agucova-awesome-esp/index.html'
    ),
    'utf8'
  );

  const navigationRevision = japaneseHtml.match(
    /data-url="\/docs\/awesome\/navigation\/v2026-08-20\/ja.json\?revision=([a-f0-9]{64})"/
  )?.[1];
  assert.ok(navigationRevision, 'HTML must identify the matching navigation generation');
  assert.match(
    japaneseHtml,
    /href="\/docs\/awesome\/v2026-08-20\/ja\/platforms\/agucova-awesome-esp"[^>]*aria-current="page"[^>]*>\s*ESP\s*<\/a>/
  );
  const navigation = JSON.parse(
    await fs.readFile(
      path.join(repoRoot, 'dist/docs/awesome/navigation/v2026-08-20/ja.json'),
      'utf8'
    )
  );
  assert.equal(navigation.revision, navigationRevision);
  const platforms = navigation.items.find((category) => category.categoryId === 'platforms');
  assert.equal(platforms.title, 'プラットフォーム');
  for (const [slug, title] of [
    ['agucova-awesome-esp', 'ESP'],
    ['balintkissdev-awesome-dos', 'DOS'],
  ]) {
    const href = `/docs/awesome/v2026-08-20/ja/platforms/${slug}`;
    assert.equal(platforms.items.find((item) => item.href === href)?.title, title);
    await fs.access(path.join(repoRoot, 'dist', href.slice(1), 'index.html'));
  }
  const fallback = await fs.readFile(
    path.join(repoRoot, 'dist/docs/awesome/navigation/v2026-08-20/ja/index.html'),
    'utf8'
  );
  assert.match(fallback, /プラットフォーム/);
  assert.match(
    fallback,
    /href="\/docs\/awesome\/v2026-08-20\/ja\/platforms\/balintkissdev-awesome-dos"[^>]*>DOS<\/a>/
  );
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
