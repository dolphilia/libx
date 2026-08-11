import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const roots = [
  'apps/lua',
  'apps/glfw',
  'apps/sample-docs',
  'apps/test-verification',
  'templates/docs-site',
];

test('all document layouts forward frontmatter descriptions', async () => {
  for (const root of roots) {
    const docLayout = await readFile(`${root}/src/layouts/DocLayout.astro`, 'utf8');
    const route = await readFile(`${root}/src/pages/[version]/[lang]/[...slug].astro`, 'utf8');

    assert.match(docLayout, /description=\{description\}/, root);
    assert.match(route, /description=\{entry\.data\.description\}/, root);
  }
});

test('all main layouts emit the static page metadata contract', async () => {
  for (const root of roots) {
    const layout = await readFile(`${root}/src/layouts/MainLayout.astro`, 'utf8');

    assert.match(layout, /<meta name="description" content=\{pageDescription\}/, root);
    assert.match(layout, /<link rel="canonical" href=\{canonicalUrl\}/, root);
    assert.match(layout, /hreflang=\{item\.lang\}/, root);
    assert.match(layout, /hreflang="x-default"/, root);
    assert.match(layout, /<meta property="og:title" content=\{pageTitle\}/, root);
    assert.match(layout, /<meta property="og:url" content=\{canonicalUrl\}/, root);
    assert.match(layout, /pageType === 'not-found'/, root);
    assert.doesNotMatch(layout, /Documentation site built with Astro/, root);
    assert.doesNotMatch(layout, /\{title\} \| Docs/, root);
  }
});

test('index and 404 routes declare distinct metadata contracts', async () => {
  for (const root of roots) {
    const indexRoute = await readFile(`${root}/src/pages/[version]/[lang]/index.astro`, 'utf8');
    const notFoundRoute = await readFile(`${root}/src/pages/404.astro`, 'utf8');

    assert.match(indexRoute, /pageType="index"/, root);
    assert.match(notFoundRoute, /pageType="not-found"/, root);
    assert.match(notFoundRoute, /translate\('error\.notFound', lang\)/, root);
  }
});
