import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import { validateProjectConfigJSON } from '../../packages/project-config/src/config-schema.ts';
import { stripJsonComments } from '../../packages/project-config/src/jsonc-runtime.js';
import { validateHtml } from '../../scripts/importers/awesome/editorial-html-validation.mjs';
import { attributionLinksBySource } from '../../scripts/importers/awesome/editorial-attribution-links.mjs';

test('帰属リンクは固定原文の該当行とコミットに一致するものだけを受け入れる', () => {
  const source = { commitSha: 'fixed', documentPath: 'README.md', documentSha256: 'sha' };
  const record = {
    sourceId: 'list',
    ...source,
    rawHash: 'sha',
    reason: 'License節から移す',
    links: [
      {
        url: 'https://example.com/AUTHORS',
        label: { en: 'Authors', ja: '著者' },
        evidenceLines: [2, 2],
      },
    ],
  };
  const sources = new Map([['list', source]]),
    raw = '本文\n[AUTHORS](https://example.com/AUTHORS)\n';
  assert.deepEqual(attributionLinksBySource([record], sources, () => raw).get('list'), [
    { url: record.links[0].url, label: record.links[0].label },
  ]);
  const historical = { ...record.links[0], url: 'http://example.com/AUTHORS' };
  assert.deepEqual(
    attributionLinksBySource(
      [{ ...record, links: [historical] }], sources,
      () => '本文\n[AUTHORS](http://example.com/AUTHORS)\n'
    ).get('list'),
    [{ url: historical.url, label: historical.label }]
  );
  assert.throws(() => attributionLinksBySource(
    [{ ...record, links: [{ ...historical, url: 'javascript:alert(1)' }] }], sources,
    () => '本文\n[AUTHORS](javascript:alert(1))\n'
  ));
  assert.throws(() =>
    attributionLinksBySource([{ ...record, commitSha: 'changed' }], sources, () => raw)
  );
  assert.throws(() =>
    attributionLinksBySource([record], sources, () => raw.replace('AUTHORS)', 'OTHER)'))
  );
  assert.throws(() =>
    attributionLinksBySource(
      [{ ...record, links: [{ ...record.links[0], evidenceLines: [1, 1] }] }],
      sources,
      () => raw
    )
  );
});

test('帰属リンク設定は既存設定との互換性を保持し、不完全な訳語や安全でないURLを拒否する', () => {
  const config = JSON.parse(
    stripJsonComments(
      fs.readFileSync(
        new URL('../../templates/docs-site/src/config/project.config.jsonc', import.meta.url),
        'utf8'
      )
    )
  );
  assert.equal(validateProjectConfigJSON(config), true);
  const source = config.licensing.sources[0];
  const link = { url: 'https://example.org/AUTHORS', label: { en: 'Authors', ja: '著者一覧' } };
  source.attributionLinks = [link];
  assert.equal(validateProjectConfigJSON(config), true);
  source.attributionLinks = [{ ...link, url: 'http://example.org/AUTHORS' }];
  assert.equal(validateProjectConfigJSON(config), true);
  for (const invalid of [
    { ...link, url: 'javascript:alert(1)' },
    { ...link, label: { en: 'Authors', ja: '' } },
    { ...link, label: { ja: '著者一覧' } },
    null,
  ]) {
    source.attributionLinks = [invalid];
    assert.equal(validateProjectConfigJSON(config), false);
  }
});

test('参照形式の帰属リンクを定義へ解決し、URLだけの定義やコードを証拠として認めない', () => {
  const url = 'https://example.com/maintainer';
  const source = { commitSha: 'fixed', documentPath: 'README.md', documentSha256: 'sha' };
  const record = {
    sourceId: 'list', ...source, rawHash: 'sha', reason: 'メンテナー帰属を出典へ移す',
    links: [{ url, label: { en: 'Maintainer', ja: 'メンテナー' }, evidenceLines: [3, 3] }],
  };
  const sources = new Map([['list', source]]);
  const raw = `[author]: ${url}\n\n[@author][author]\n`;
  assert.deepEqual(attributionLinksBySource([record], sources, () => raw).get('list'), [
    { url, label: record.links[0].label },
  ]);
  for (const text of [
    `[author]: ${url}\n\nNot a link\n`,
    `[author]: https://example.com/other\n\n[@author][author]\n`,
    `Title\n\n\`[author](${url})\`\n`,
    `Title\n\n~~~md\n[author](${url})\n~~~\n`,
  ]) assert.throws(() => attributionLinksBySource([record], sources, () => text));
  assert.throws(() => attributionLinksBySource([
    { ...record, links: [{ ...record.links[0], evidenceLines: [1, 1] }] },
  ], sources, () => raw));
});

test('著者一覧へのリンクは出典欄に必要で、本文の同じURLでは代用できない', () => {
  const source = {
    sourceUrl: 'https://source.example',
    licenseUrl: 'https://license.example',
    attributionLinks: [{ url: 'https://source.example/AUTHORS' }],
  };
  const html =
    '<article class="sl-markdown-content"><h1>Title</h1><a href="https://source.example/AUTHORS">Authors</a><aside class="document-provenance"><a href="https://source.example">Source</a><a href="https://license.example">License</a></aside></article>';
  assert.ok(validateHtml(html, { licenseSource: source }).errors.includes('出典の帰属リンク欠落'));
  const corrected = html.replace(
    '</aside>',
    '<a href="https://source.example/AUTHORS">Authors</a></aside>'
  );
  assert.deepEqual(validateHtml(corrected, { licenseSource: source }).errors, []);
});

test('相対ライセンス参照は元表記・該当行・固定コミット内の解決先を照合する', () => {
  const source = {
    repository: 'owner/list', commitSha: 'fixed',
    documentPath: 'docs/README.md', documentSha256: 'sha',
  };
  const link = {
    originalUrl: '../LICENSE',
    url: 'https://github.com/owner/list/blob/fixed/LICENSE',
    label: { en: 'License text', ja: 'ライセンス本文' },
    evidenceLines: [3, 3],
  };
  const record = {
    sourceId: 'list', ...source, rawHash: 'sha', reason: '固定LICENSEへ移設',
    links: [link],
  };
  const sources = new Map([['list', source]]);
  const raw = 'Title\n\n[CC0](../LICENSE)\n';
  assert.deepEqual(attributionLinksBySource([record], sources, () => raw).get('list'), [
    { url: link.url, label: link.label },
  ]);
  const referenced = '[license]: ../LICENSE\n\n[CC0][license]\n';
  assert.deepEqual(attributionLinksBySource([record], sources, () => referenced).get('list'), [
    { url: link.url, label: link.label },
  ]);
  const rootSource = { ...source, documentPath: 'README.md' };
  const rootRecord = { ...record, documentPath: 'README.md', links: [{ ...link, originalUrl: './LICENSE' }] };
  assert.deepEqual(attributionLinksBySource(
    [rootRecord], new Map([['list', rootSource]]), () => 'Title\n\n[CC0](./LICENSE)\n'
  ).get('list'), [{ url: link.url, label: link.label }]);
  for (const invalid of [
    { ...link, originalUrl: './LICENSE' },
    { ...link, url: 'https://github.com/owner/list/blob/main/LICENSE' },
    { ...link, url: 'https://github.com/other/list/blob/fixed/LICENSE' },
    { ...link, evidenceLines: [1, 1] },
    { ...link, originalUrl: '../../../LICENSE', url: 'https://github.com/owner/list/LICENSE' },
    { ...link, originalUrl: 'https://example.com/LICENSE', url: 'https://example.com/LICENSE' },
  ]) assert.throws(() => attributionLinksBySource(
    [{ ...record, links: [invalid] }], sources, () => raw
  ));
  assert.throws(() => attributionLinksBySource(
    [{ ...record, links: [{ ...link, originalUrl: '../../../LICENSE', url: 'https://github.com/owner/LICENSE' }] }],
    sources, () => 'Title\n\n[CC0](../../../LICENSE)\n'
  ));
  assert.throws(() => attributionLinksBySource([record], sources, () =>
    'Title\n\n`[CC0](../LICENSE)`\n'
  ));
});
