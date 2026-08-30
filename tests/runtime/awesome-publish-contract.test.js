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

test('Awesomeコマンドはsnapshot省略時に暗黙の最新版を選ばない', () => {
  assert.throws(
    () =>
      execFileSync(
        process.execPath,
        ['scripts/importers/awesome/validate-awesome-translation.mjs'],
        { cwd: root, encoding: 'utf8', stdio: 'pipe' }
      ),
    (error) => {
      assert.match(error.stderr, /Awesome snapshot IDを明示してください/);
      return true;
    }
  );
});

test('Awesome履歴版の公開再現性検査は日本語365ページを保持して通過する', () => {
  assert.ok(markdownFileCount(englishRoot) > 0, '英語定本が必要です');
  assert.ok(markdownFileCount(japaneseRoot) > 0, '部分翻訳を含む検査対象が必要です');

  const output = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/publish-awesome.mjs',
      '--snapshot=v2026-08-20',
      '--check',
    ],
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

test('単一アプリ検証は版ごとの成果物だけを対象にし、履歴版に新しいレビュー成果物を要求しない', () => {
  const historicalOutput = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/validate-awesome-single-app.mjs',
      '--snapshot=v2026-08-20',
    ],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(
    historicalOutput,
    /Awesome single-app validation: OK \(365 English pages, 365 translated pages\)/
  );

  const currentOutput = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/validate-awesome-single-app.mjs',
      '--snapshot=v2026-08-23',
    ],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(
    currentOutput,
    /Awesome single-app validation: OK \(672 English pages, 672 translated pages\)/
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
            '--snapshot=v2026-08-20',
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

test('翻訳ゲートは内部アンカーリンクの変更を検出する', () => {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-anchor-'));
  const fixtureFile = 'fixture/page.md';
  const frontmatter = '---\nlicenseSource: fixture-license\n---\n';

  try {
    for (const lang of ['en', 'ja']) {
      fs.mkdirSync(path.join(fixtureRoot, lang, 'fixture'), { recursive: true });
    }
    fs.writeFileSync(
      path.join(fixtureRoot, 'en', fixtureFile),
      `${frontmatter}# Title\n\n- [Section](#section)\n\n## Section\n`
    );
    fs.writeFileSync(
      path.join(fixtureRoot, 'ja', fixtureFile),
      `${frontmatter}# タイトル\n\n- [セクション](#セクション)\n\n## セクション\n`
    );

    assert.throws(
      () =>
        execFileSync(
          process.execPath,
          [
            'scripts/importers/awesome/validate-awesome-translation.mjs',
            '--snapshot=v2026-08-20',
            '--require-complete',
            '--content-root',
            fixtureRoot,
          ],
          { cwd: root, encoding: 'utf8', stdio: 'pipe' }
        ),
      (error) => {
        assert.match(error.stderr, /内部リンクまたはアンカーリンクが不一致です/);
        assert.match(error.stderr, /fixture\/page\.md/);
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

test('自動証拠レビュー済みの公開メタデータは人手レビューと区別する', () => {
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
  const historicalStatus = status.snapshots.find(
    (entry) => entry.snapshotId === 'v2026-08-20'
  );

  assert.equal(historicalStatus.contentReviewStatus, 'automated-evidence-reviewed');
  assert.equal(historicalStatus.reviewedItems, 417);
  assert.equal(historicalStatus.humanReviewedItems, 0);
  assert.equal(historicalStatus.totalReviewItems, 417);
  assert.match(routes, /自動証拠レビュー済み/);
  assert.match(search, /自動証拠レビュー済み/);

  const pageRoute = fs.readFileSync(
    path.join(root, 'apps/awesome/src/pages/[version]/[lang]/[...slug].astro'),
    'utf8'
  );
  assert.match(pageRoute, /localizedRouteManifest/);
  assert.match(pageRoute, /description=\{publicDescription\}/);
});
