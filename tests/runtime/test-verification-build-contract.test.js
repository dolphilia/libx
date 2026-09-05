import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

function outputSnapshot(directory) {
  if (!existsSync(directory)) return null;
  return readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .map((entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) return [entry.name, outputSnapshot(file)];
      if (!entry.isFile()) return [entry.name, 'non-file'];
      return [
        entry.name,
        statSync(file).mtimeMs,
        createHash('sha256').update(readFileSync(file)).digest('hex'),
      ];
    });
}

test('built Markdown and MDX share metadata and semantic HTML contracts', (t) => {
  // Do not overlay fresh test output with an older CI build-cache candidate.
  const output = mkdtempSync(path.join(os.tmpdir(), 'libx-test-verification-build-'));
  const appOutput = 'apps/test-verification/dist';
  const before = outputSnapshot(appOutput);
  t.after(() => rmSync(output, { recursive: true, force: true }));
  execFileSync('pnpm', ['--filter=apps-test-verification', 'build', `--outDir=${output}`], {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: 'pipe',
  });
  assert.deepEqual(outputSnapshot(appOutput), before, '契約テストは通常のdistを変更しない');

  const markdown = readFileSync(
    path.join(output, 'v2/en/03-markdown-contract/01-markdown-parity/index.html'),
    'utf8'
  );
  const mdx = readFileSync(
    path.join(output, 'v2/en/03-markdown-contract/02-mdx-parity/index.html'),
    'utf8'
  );
  const noToc = readFileSync(
    path.join(output, 'v2/en/03-markdown-contract/04-no-toc/index.html'),
    'utf8'
  );
  const notFound = readFileSync(path.join(output, '404.html'), 'utf8');
  const searchIndex = JSON.parse(
    readFileSync('apps/test-verification/public/search/v2/en.json', 'utf8')
  );

  assert.match(markdown, /<title>Markdown parity fixture \| Test Verification<\/title>/);
  assert.match(
    markdown,
    /<meta name="description" content="Exercises the portable Markdown contract">/
  );
  assert.match(
    markdown,
    /<link rel="canonical" href="https:\/\/libx\.dev\/docs\/test-verification\/v2\/en\/03-markdown-contract\/01-markdown-parity\/">/
  );
  assert.match(markdown, /hreflang="en"/);
  assert.match(markdown, /hreflang="x-default"/);
  assert.doesNotMatch(markdown, /hreflang="ja"/);
  assert.doesNotMatch(markdown, /hreflang="ko"/);

  for (const html of [markdown, mdx]) {
    assert.match(html, /class="docs-callout docs-callout--warning"/);
    assert.match(html, /class="docs-callout__title"><strong>Warning<\/strong>/);
    assert.match(html, /<dt>Canonical document<\/dt>/);
    assert.equal((html.match(/<aside class="document-provenance"/g) ?? []).length, 1);
    assert.ok(html.indexOf('class="pagination-links"') < html.indexOf('document-provenance'));
    assert.match(html, /This paragraph contains/);
    assert.match(html, /class="docs-code-frame"/);
    assert.match(html, /class="docs-table-scroll"/);
  }

  assert.doesNotMatch(noToc, /data-has-toc/);
  assert.doesNotMatch(noToc, /<starlight-toc/);
  assert.match(markdown, /data-index-url="\/docs\/test-verification\/search\/v2\/en\.json"/);
  assert.doesNotMatch(markdown, /search-client\.[A-Za-z0-9_-]+\.js/);
  assert.equal(searchIndex.lang, 'en');
  assert.ok(searchIndex.entries.some((entry) => entry.title === 'Markdown parity fixture'));
  assert.match(notFound, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(notFound, /<meta property="og:type" content="website">/);
  assert.match(notFound, /<h1 id="not-found-title"[^>]*>Page not found<\/h1>/);
  assert.doesNotMatch(notFound, /document-provenance/);

  const builtFiles = readdirSync(output, { recursive: true }).map(String);
  assert.equal(builtFiles.filter((file) => /KaTeX|katex/i.test(file)).length, 0);
});
