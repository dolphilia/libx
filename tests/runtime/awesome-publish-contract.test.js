import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import matter from 'gray-matter';
import {
  createAwesomeContentAccess,
  getAwesomeApps,
  readAwesomeRouteManifest,
} from '../../scripts/importers/awesome/app-ownership.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const version = 'v2026-08-20';
const access = createAwesomeContentAccess(version, root);
const { apps, group } = getAwesomeApps(root);
const layoutLabel = group ? 'group' : 'single-app';
const readArtifact = (app, relative) =>
  JSON.parse(fs.readFileSync(path.join(app.directory, relative), 'utf8'));
const searchIndexes = () =>
  apps.map((app) => readArtifact(app, `public/search/${version}/ja.json`));

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
  assert.ok(access.files('en').length > 0, '英語定本が必要です');
  assert.ok(access.files('ja').length > 0, '部分翻訳を含む検査対象が必要です');

  const restoreOutput = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/restore-awesome-historical-canonical.mjs',
      '--snapshot=v2026-08-20',
    ],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(restoreOutput, /Restored Awesome historical normalized input \(365 pages\)/);

  const output = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/publish-awesome.mjs', '--snapshot=v2026-08-20', '--check'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.ok(output.includes(`Awesome ${layoutLabel} publish check: OK`));

  const japaneseSearch = searchIndexes();
  for (const index of japaneseSearch) {
    assert.equal(index.lang, 'ja');
    assert.equal(index.version, version);
    assert.ok(index.entries.every((entry) => entry.url.includes('/ja/')));
  }
  assert.equal(japaneseSearch.flatMap((index) => index.entries).length, access.files('ja').length);

  const localizedRoutes = readAwesomeRouteManifest({ root });
  const navigationTitles = new Map(
    localizedRoutes.entries
      .filter((entry) => entry.lang === 'ja')
      .map((entry) => [entry.repository, entry.navigationTitle])
  );
  assert.equal(navigationTitles.get('agucova/awesome-esp'), 'ESP');
  assert.equal(navigationTitles.get('balintkissdev/awesome-dos'), 'DOS');

  const japaneseSidebar = apps.flatMap((app) =>
    readArtifact(app, `public/sidebar/sidebar-ja-${version}.json`)
  );
  assert.equal(
    japaneseSidebar.find((category) => category.title === 'プラットフォーム').items[0].title,
    'ESP'
  );
});

test('Awesome検証は版ごとの成果物だけを対象にし、履歴版に新しいレビュー成果物を要求しない', () => {
  const historicalOutput = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/validate-awesome-single-app.mjs', '--snapshot=v2026-08-20'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(
    historicalOutput,
    new RegExp(
      `Awesome ${layoutLabel} validation: OK \\(365 English pages, 365 translated pages\\)`
    )
  );

  const currentOutput = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/validate-awesome-single-app.mjs', '--snapshot=v2026-08-23'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(
    currentOutput,
    new RegExp(
      `Awesome ${layoutLabel} validation: OK \\(672 English pages, 672 translated pages\\)`
    )
  );
});

test('全件翻訳ゲートは未翻訳ページを明示して停止する', () => {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-translation-'));
  const fixtureFile = 'overview/sindresorhus-awesome.md';
  const fixtureEnglishFile = path.join(fixtureRoot, 'en', fixtureFile);

  try {
    fs.mkdirSync(path.dirname(fixtureEnglishFile), { recursive: true });
    fs.copyFileSync(access.pathFor('en', fixtureFile), fixtureEnglishFile);
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
  const stale = access
    .files('ja')
    .map((file) => access.pathFor('ja', file))
    .filter((file) =>
      /未検査|作業中|翻訳初稿|未翻訳/.test(matter(fs.readFileSync(file, 'utf8')).data.description)
    );

  assert.deepEqual(stale, []);
});

test('Awesome概要は簡潔な見出しと概要から始まり、スポンサー前置きを含まない', () => {
  const english = matter(
    fs.readFileSync(access.pathFor('en', 'overview/sindresorhus-awesome.md'), 'utf8')
  ).content.trimStart();
  const japanese = matter(
    fs.readFileSync(access.pathFor('ja', 'overview/sindresorhus-awesome.md'), 'utf8')
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
  const statuses = apps.map((app) =>
    readArtifact(app, 'src/generated/awesome-preview-status.json')
  );
  const status = statuses[0];
  for (const childStatus of statuses) assert.deepEqual(childStatus, status);
  const routes = JSON.stringify(readAwesomeRouteManifest({ root }));
  const search = JSON.stringify(searchIndexes());
  const historicalStatus = status.snapshots.find((entry) => entry.snapshotId === 'v2026-08-20');

  assert.equal(historicalStatus.contentReviewStatus, 'automated-evidence-reviewed');
  assert.equal(historicalStatus.reviewedItems, 419);
  assert.equal(historicalStatus.humanReviewedItems, 0);
  assert.equal(historicalStatus.totalReviewItems, 419);
  for (const artifact of [routes, search]) {
    assert.doesNotMatch(
      artifact,
      /人手レビュー前|人手レビュー済み|自動証拠レビュー済み/,
      'レビュー状態は公開用の概要文へ混入させない'
    );
  }

  for (const app of apps) {
    const pageRoute = fs.readFileSync(
      path.join(app.directory, 'src/pages/[version]/[lang]/[...slug].astro'),
      'utf8'
    );
    assert.match(pageRoute, /localizedRouteManifest/);
    assert.match(pageRoute, /description=\{publicDescription\}/);
  }
});
