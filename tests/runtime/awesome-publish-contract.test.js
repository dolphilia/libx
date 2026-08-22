import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import matter from 'gray-matter';

const root = path.resolve(import.meta.dirname, '../..');
const englishRoot = path.join(root, 'apps/awesome/src/awesome-content/v2026-08-20/en');
const japaneseRoot = path.join(root, 'apps/awesome/src/awesome-content/v2026-08-20/ja');

function markdownFileCount(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md')).length;
}

test('Awesome英語定本の公開再現性検査は部分翻訳を保持して通過する', () => {
  assert.ok(markdownFileCount(englishRoot) > 0, '英語定本が必要です');
  assert.ok(markdownFileCount(japaneseRoot) > 0, '部分翻訳を含む検査対象が必要です');

  const output = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/publish-awesome.mjs', '--check'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(output, /Awesome single-app publish check: OK/);

  const japaneseSearch = JSON.parse(
    fs.readFileSync(path.join(root, 'apps/awesome/public/search/v2026-08-20/ja.json'), 'utf8')
  );
  assert.equal(japaneseSearch.lang, 'ja');
  assert.equal(japaneseSearch.entries.length, markdownFileCount(japaneseRoot));
  assert.ok(japaneseSearch.entries.some((entry) => entry.url.includes('/ja/')));

  const localizedRoutes = JSON.parse(
    fs.readFileSync(
      path.join(root, 'apps/awesome/src/generated/awesome-localized-routes.json'),
      'utf8'
    )
  );
  const navigationTitles = new Map(
    localizedRoutes.entries
      .filter((entry) => entry.lang === 'ja')
      .map((entry) => [entry.repository, entry.navigationTitle])
  );
  assert.equal(navigationTitles.get('agucova/awesome-esp'), 'ESP');
  assert.equal(navigationTitles.get('balintkissdev/awesome-dos'), 'DOS');

  const japaneseSidebar = JSON.parse(
    fs.readFileSync(
      path.join(root, 'apps/awesome/public/sidebar/sidebar-ja-v2026-08-20.json'),
      'utf8'
    )
  );
  assert.equal(
    japaneseSidebar.find((category) => category.title === 'プラットフォーム').items[0].title,
    'ESP'
  );
});

test('全件翻訳ゲートは未翻訳ページを明示して停止する', () => {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-translation-'));
  const fixtureFile = 'overview/sindresorhus-awesome.md';
  const fixtureEnglishFile = path.join(fixtureRoot, 'en', fixtureFile);

  try {
    fs.mkdirSync(path.dirname(fixtureEnglishFile), { recursive: true });
    fs.copyFileSync(path.join(englishRoot, fixtureFile), fixtureEnglishFile);
    fs.mkdirSync(path.join(fixtureRoot, 'ja'), { recursive: true });

    assert.throws(
      () =>
        execFileSync(
          process.execPath,
          [
            'scripts/importers/awesome/validate-awesome-translation.mjs',
            '--require-complete',
            '--content-root',
            fixtureRoot,
          ],
          { cwd: root, encoding: 'utf8', stdio: 'pipe' }
        ),
      (error) => {
        assert.match(error.stderr, /日本語ページが未翻訳です/);
        assert.match(error.stderr, /overview\/sindresorhus-awesome\.md/);
        return true;
      }
    );
  } finally {
    fs.rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('機械検査済み日本語ページの説明に古い進捗表示を残さない', () => {
  const stale = fs
    .readdirSync(japaneseRoot, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.join(entry.parentPath, entry.name))
    .filter((file) =>
      /未検査|作業中|翻訳初稿|未翻訳/.test(matter(fs.readFileSync(file, 'utf8')).data.description)
    );

  assert.deepEqual(stale, []);
});

test('Awesome概要は簡潔な見出しと概要から始まり、スポンサー前置きを含まない', () => {
  const english = matter(
    fs.readFileSync(path.join(englishRoot, 'overview/sindresorhus-awesome.md'), 'utf8')
  ).content.trimStart();
  const japanese = matter(
    fs.readFileSync(path.join(japaneseRoot, 'overview/sindresorhus-awesome.md'), 'utf8')
  ).content.trimStart();

  assert.match(english, /^# Awesome Lists\n\nA curated directory of Awesome lists/);
  assert.match(japanese, /^# Awesomeリスト\n\n技術、科学、ビジネス、文化など/);
  for (const content of [english, japanese]) {
    assert.doesNotMatch(
      content,
      /github\.com\/sponsors|Special thanks to|Supercharge|Software Patreons/
    );
  }
  assert.doesNotMatch(japanese, /分野の厳選リストまたは関連資料です。/);
  assert.match(
    japanese,
    /Node\.js.*Chrome の V8 JavaScript エンジン上に構築された、非同期ノンブロッキング/
  );
  assert.match(japanese, /DOS.*1980 年代から 1990 年代初頭にかけて普及した/);
});

test('人手レビュー完了後の公開メタデータにレビュー前表記を残さない', () => {
  const status = JSON.parse(
    fs.readFileSync(
      path.join(root, 'apps/awesome/src/generated/awesome-preview-status.json'),
      'utf8'
    )
  );
  const routes = fs.readFileSync(
    path.join(root, 'apps/awesome/src/generated/awesome-localized-routes.json'),
    'utf8'
  );
  const search = fs.readFileSync(
    path.join(root, 'apps/awesome/public/search/v2026-08-20/ja.json'),
    'utf8'
  );

  assert.equal(status.contentReviewStatus, 'human-reviewed');
  assert.equal(status.humanReviewedItems, status.totalReviewItems);
  assert.doesNotMatch(routes, /人手レビュー前/);
  assert.doesNotMatch(search, /人手レビュー前/);
  assert.match(routes, /人手レビュー済み/);

  const pageRoute = fs.readFileSync(
    path.join(root, 'apps/awesome/src/pages/[version]/[lang]/[...slug].astro'),
    'utf8'
  );
  assert.match(pageRoute, /localizedRouteManifest/);
  assert.match(pageRoute, /description=\{publicDescription\}/);
});
