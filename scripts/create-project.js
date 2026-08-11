#!/usr/bin/env node

/**
 * 新しいドキュメントプロジェクトを自動作成するスクリプト
 *
 * 使用例:
 * node scripts/create-project.js my-project "My Documentation" "私のドキュメント"
 * node scripts/create-project.js api-docs "API Documentation" "API文書" --icon=code --tags=api,reference
 *
 * このスクリプトは以下の処理を自動化します:
 * 1. ドキュメントサイトテンプレート（templates/docs-site）のコピー
 * 2. 各種設定ファイルの自動更新
 * 3. 依存関係のインストール
 * 4. 動作確認テスト
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import * as logger from './logger.js';
import { confirmAction, createBackup } from './safety-utils.js';
import {
  readJsoncFile,
  formatProjectConfigJsonc,
  formatLandingConfigJsonc,
} from './jsonc-utils.js';

logger.useUnifiedConsole();

function showUsage(exitCode = 1) {
  logger.heading('プロジェクト作成スクリプトの使い方');
  logger.info(
    'node scripts/create-project.js <project-name> <display-name-en> <display-name-ja> [options]'
  );
  logger.blank();
  logger.info('必須引数');
  logger.detail('project-name: プロジェクトディレクトリ名（英数字・ハイフンのみ）');
  logger.detail('display-name-en: 英語表示名');
  logger.detail('display-name-ja: 日本語表示名');
  logger.blank();
  logger.info('主なオプション');
  logger.detail('--description-en=<text>: 英語説明文（既定: display-name-en を元に自動生成）');
  logger.detail('--description-ja=<text>: 日本語説明文（既定: display-name-ja を元に自動生成）');
  logger.detail('--icon=<name>: アイコン名（既定: file-text）');
  logger.detail('--tags=<tag1,tag2>: カンマ区切りタグ（既定: documentation）');
  logger.detail('--template=<name>: コピー元テンプレート（既定: docs-site）');
  logger.detail('--skip-test: 動作確認テストをスキップします');
  logger.detail('--dry-run: 実際のファイル操作を行わず手順のみ確認します');
  logger.detail('--confirm: インタラクティブな確認をスキップします');
  logger.blank();
  logger.info('使用例');
  logger.detail('node scripts/create-project.js my-docs "My Documentation" "私のドキュメント"');
  logger.detail(
    'node scripts/create-project.js api-docs "API Docs" "API文書" --icon=code --tags=api,reference'
  );
  process.exit(exitCode);
}

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'templates');
const PROJECT_CONFIG_FILE = 'project.config.jsonc';
const LANDING_CONFIG_FILE = 'projects.config.jsonc';

function resolveConfigPath(baseDir, fileName) {
  return path.join(baseDir, fileName);
}

/**
 * コマンドライン引数を解析する
 */
function parseArguments() {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    showUsage(0);
  }

  if (args.length < 3) {
    logger.error('必須引数が不足しています。');
    showUsage(1);
  }

  const [projectName, displayNameEn, displayNameJa] = args.slice(0, 3);
  const options = {};

  // オプション引数を解析
  for (let i = 3; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      if (arg.includes('=')) {
        const [key, value] = arg.substring(2).split('=', 2);
        options[key] = value;
      } else {
        // フラグオプション（例: --skip-test）
        options[arg.substring(2)] = true;
      }
    }
  }

  return {
    projectName,
    displayNameEn,
    displayNameJa,
    descriptionEn: options['description-en'] || `Documentation for ${displayNameEn}`,
    descriptionJa: options['description-ja'] || `${displayNameJa}のドキュメントです`,
    icon: options.icon || 'file-text',
    tags: options.tags ? options.tags.split(',').map((tag) => tag.trim()) : ['documentation'],
    template: options.template || 'docs-site',
    skipTest: Boolean(options['skip-test']),
    dryRun: Boolean(options['dry-run']),
    autoConfirm: Boolean(options.confirm),
  };
}

/**
 * プロジェクト名の妥当性をチェックする
 */
function validateProjectName(projectName) {
  const errors = [];

  // 文字種チェック（英数字とハイフンのみ）
  if (!/^[a-zA-Z0-9-]+$/.test(projectName)) {
    errors.push('プロジェクト名は英数字とハイフン(-)のみ使用できます');
  }

  // 長さチェック
  if (projectName.length < 2) {
    errors.push('プロジェクト名は2文字以上である必要があります');
  }

  if (projectName.length > 50) {
    errors.push('プロジェクト名は50文字以下である必要があります');
  }

  // 先頭・末尾ハイフンチェック
  if (projectName.startsWith('-') || projectName.endsWith('-')) {
    errors.push('プロジェクト名の先頭や末尾にハイフンは使用できません');
  }

  // 予約語チェック
  const reservedNames = ['node_modules', 'dist', 'build', 'test', 'src', 'public'];
  if (reservedNames.includes(projectName)) {
    errors.push(`"${projectName}" は予約語のため使用できません`);
  }

  return errors;
}

/**
 * プロジェクトの重複をチェックする
 */
function checkProjectDuplication(projectName) {
  const appsDir = path.join(rootDir, 'apps');
  const projectDir = path.join(appsDir, projectName);

  if (fs.existsSync(projectDir)) {
    return [`プロジェクト "${projectName}" は既に存在します: ${projectDir}`];
  }

  return [];
}

/**
 * テンプレートプロジェクトの存在確認
 */
export function validateTemplate(templateName) {
  const templateDir = path.join(templatesDir, templateName);

  if (!fs.existsSync(templateDir)) {
    return [`テンプレートプロジェクト "${templateName}" が見つかりません: ${templateDir}`];
  }

  // 必須ファイルの存在確認
  const requiredFiles = ['package.json', 'astro.config.mjs', `src/config/${PROJECT_CONFIG_FILE}`];

  const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(templateDir, file)));

  if (missingFiles.length > 0) {
    return [`テンプレートプロジェクトに必須ファイルが不足しています: ${missingFiles.join(', ')}`];
  }

  return [];
}

/**
 * プログレス表示用のヘルパー関数
 */
function showProgress(step, total, message) {
  console.log(`[${step}/${total}] ${message}`);
}

/**
 * 除外ファイル・ディレクトリのパターン
 */
const EXCLUDE_PATTERNS = [
  'node_modules',
  'dist',
  '.astro',
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.DS_Store',
  'Thumbs.db',
  '*.log',
  '.cache',
  '.temp',
  '.tmp',
];

/**
 * ファイル/ディレクトリが除外対象かどうかを判定する
 */
function shouldExclude(name, _isFile = false) {
  return EXCLUDE_PATTERNS.some((pattern) => {
    if (pattern.includes('*')) {
      // ワイルドカード処理
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(name);
    }
    return name === pattern;
  });
}

/**
 * テンプレートプロジェクトを新しいディレクトリにコピーする
 */
export function copyTemplateDirectory(templateDir, targetDir) {
  function copyDirRecursiveWithExclusion(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });
    let copiedCount = 0;
    let skippedCount = 0;

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (shouldExclude(entry.name, entry.isFile())) {
        skippedCount++;
        continue;
      }

      if (entry.isDirectory()) {
        const subResult = copyDirRecursiveWithExclusion(srcPath, destPath);
        copiedCount += subResult.copied;
        skippedCount += subResult.skipped;
      } else {
        fs.copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    }

    return { copied: copiedCount, skipped: skippedCount };
  }

  return copyDirRecursiveWithExclusion(templateDir, targetDir);
}

function copyTemplateProject(templateName, projectName, { dryRun = false } = {}) {
  const templateDir = path.join(templatesDir, templateName);
  const targetDir = path.join(rootDir, 'apps', projectName);

  console.log(`  コピー元: ${templateDir}`);
  console.log(`  コピー先: ${targetDir}`);

  if (dryRun) {
    console.log('  [dry-run] テンプレートコピーは実施されません。');
    return targetDir;
  }

  const result = copyTemplateDirectory(templateDir, targetDir);
  console.log(`  ✅ コピー完了: ${result.copied}個のファイル/ディレクトリ`);
  if (result.skipped > 0) {
    console.log(`  ⏩ スキップ: ${result.skipped}個のファイル/ディレクトリ`);
  }

  return targetDir;
}

/**
 * package.jsonを更新する
 */
export function updatePackageJson(projectDir, projectName) {
  const packageJsonPath = path.join(projectDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  packageJson.name = `apps-${projectName}`;
  packageJson.private = true;
  packageJson.description = `Documentation site for ${projectName}`;
  packageJson.scripts.prebuild = `node ../../scripts/build-sidebar-selective.js --projects=${projectName} && node ../../scripts/sync-service-workers.js --project=${projectName}`;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('  ✅ package.json更新完了');
}

/**
 * astro.config.mjsを更新する
 */
export function updateAstroConfig(projectDir) {
  const astroConfigPath = path.join(projectDir, 'astro.config.mjs');

  // 新しい設定形式で書き換え
  const content = `// @ts-check
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectConfig = await loadProjectConfig(__dirname);
const fallbackSite = 'https://libx.dev';

// https://astro.build/config
export default defineDocsConfig({
  site: projectConfig.paths.siteUrl ?? fallbackSite,
  base: projectConfig.paths.baseUrl,
  rootDir: __dirname,
});
`;

  fs.writeFileSync(astroConfigPath, content);
  console.log('  ✅ astro.config.mjs更新完了');
}

/**
 * project.config.jsoncを更新する
 */
export function updateProjectConfig(projectDir, config) {
  const configDir = path.join(projectDir, 'src', 'config');
  const projectConfigPath = resolveConfigPath(configDir, PROJECT_CONFIG_FILE);
  const projectConfig = readJsoncFile(projectConfigPath);

  projectConfig.paths ??= {};
  projectConfig.paths.projectSlug = config.projectName;

  // 翻訳情報の更新
  projectConfig.translations.en.displayName = config.displayNameEn;
  projectConfig.translations.en.displayDescription = config.descriptionEn;

  projectConfig.translations.ja.displayName = config.displayNameJa;
  projectConfig.translations.ja.displayDescription = config.descriptionJa;

  let serialized = JSON.stringify(projectConfig, null, 2);
  serialized = formatProjectConfigJsonc(serialized);
  fs.writeFileSync(projectConfigPath, serialized);
  console.log(`  ✅ ${path.basename(projectConfigPath)}更新完了`);
}

/**
 * landingサイトのprojects.config.jsoncを更新する
 * 注: 自動検出機能があるため、カスタムアイコンやタグがある場合のみ更新する
 */
function updateLandingConfig(config, options = {}) {
  // デフォルト値の場合は更新しない（自動検出に任せる）
  if (
    config.icon === 'file-text' &&
    config.tags.length === 1 &&
    config.tags[0] === 'documentation'
  ) {
    return;
  }

  const { dryRun = false } = options;
  const landingConfigDir = path.join(rootDir, 'sites', 'landing', 'src', 'config');
  const landingConfigPath = resolveConfigPath(landingConfigDir, LANDING_CONFIG_FILE);
  const landingConfig = readJsoncFile(landingConfigPath);

  // プロジェクトデコレーションを追加
  landingConfig.projectDecorations[config.projectName] = {
    icon: config.icon,
    tags: config.tags,
    isNew: true,
  };

  if (dryRun) {
    logger.dryRun(
      `landing ${path.basename(landingConfigPath)} を更新します（dry-runのためファイルは変更しません）: ${landingConfigPath}`
    );
    return;
  }

  createBackup(landingConfigPath, {
    rootDir,
    scenario: 'create-project',
    logger,
  });

  let landingSerialized = JSON.stringify(landingConfig, null, 2);
  landingSerialized = formatLandingConfigJsonc(landingSerialized);
  fs.writeFileSync(landingConfigPath, landingSerialized);
  console.log(`  ✅ landing ${path.basename(landingConfigPath)}更新完了（カスタム設定あり）`);
}

/**
 * すべての設定ファイルを更新する
 */
function updateAllConfigFiles(projectDir, config, options = {}) {
  const { dryRun = false } = options;
  console.log('  設定ファイルを更新しています...');

  if (dryRun) {
    logger.dryRun(
      'package.json / astro.config.mjs / project.config.jsonc / landing 設定を更新する予定です（dry-runのため未実施）。'
    );
    return;
  }

  updatePackageJson(projectDir, config.projectName);
  updateAstroConfig(projectDir);
  updateProjectConfig(projectDir, config);
  updateLandingConfig(config, options);

  console.log('  🎉 すべての設定ファイルの更新完了！');
}

/**
 * 依存関係をインストールする
 */
function installDependencies(projectDir, { dryRun = false } = {}) {
  console.log('  依存関係をインストールしています...');

  const projectName = path.basename(projectDir);
  const packageName = `apps-${projectName}`;

  if (dryRun) {
    logger.dryRun(
      `pnpm install --filter=${packageName} をリポジトリルートで実行する予定です（dry-run）`
    );
    return true;
  }

  try {
    // 新規アプリをpnpmワークスペースとロックファイルへ確実に登録するため、
    // アプリ内ではなくリポジトリルートから対象を絞って実行する。
    execSync(`pnpm install --filter=${packageName}`, {
      cwd: rootDir,
      stdio: ['inherit', 'pipe', 'pipe'],
      timeout: 120000, // 2分タイムアウト
    });

    console.log('  ✅ 依存関係のインストール完了');
    return true;
  } catch (error) {
    console.error('  ❌ 依存関係のインストールに失敗しました');
    console.error(`  エラー: ${error.message}`);
    return false;
  }
}

/**
 * プロジェクトの動作テストを実行する
 */
async function runProjectTests(projectName, { skipTest = false, dryRun = false } = {}) {
  if (dryRun) {
    logger.dryRun('dry-runモードのためテストは実行されません。');
    return { success: true, message: 'dry-run: テスト未実行' };
  }

  if (skipTest) {
    console.log('  ⏩ テストをスキップしました');
    return { success: true, message: 'テストスキップ' };
  }

  console.log('  プロジェクトの動作テストを実行しています...');

  // ビルドテスト
  console.log('    📦 ビルドテストを実行中...');
  try {
    execSync(`pnpm --filter=apps-${projectName} build`, {
      stdio: ['inherit', 'pipe', 'pipe'],
      timeout: 120000, // 2分タイムアウト
      cwd: rootDir,
    });
    console.log('    ✅ ビルドテスト成功');

    return { success: true, message: 'すべてのテストが成功しました' };
  } catch (error) {
    console.error('    ❌ ビルドテストに失敗しました');
    console.error(`    エラー: ${error.message}`);
    return { success: false, message: `ビルドテストエラー: ${error.message}` };
  }
}

/**
 * 成功レポートを表示する
 */
function showSuccessReport(config, projectDir, testResult, options = {}) {
  const { dryRun = false } = options;
  console.log('\n🎉 新しいドキュメントプロジェクトの作成が完了しました！\n');

  console.log('📋 作成されたプロジェクト情報:');
  console.log(`  プロジェクト名: ${config.projectName}`);
  console.log(`  プロジェクトパス: ${projectDir}`);
  console.log(`  パッケージ名: apps-${config.projectName}`);
  console.log(`  英語表示名: ${config.displayNameEn}`);
  console.log(`  日本語表示名: ${config.displayNameJa}`);
  console.log(`  ベースURL: /docs/${config.projectName}`);
  console.log(`  アイコン: ${config.icon}`);
  console.log(`  タグ: ${config.tags.join(', ')}`);
  console.log('');

  console.log('🧪 テスト結果:');
  console.log(`  ${testResult.success ? '✅' : '❌'} ${testResult.message}`);
  console.log('');

  console.log('🚀 次のステップ:');
  console.log('  1. 開発サーバーを起動:');
  console.log(`     pnpm --filter=apps-${config.projectName} dev`);
  console.log(`     または: cd apps/${config.projectName} && pnpm dev`);
  console.log('');
  console.log('  2. ブラウザでアクセス:');
  console.log(`     http://localhost:4321/docs/${config.projectName}`);
  console.log('');
  console.log('  3. 統合ビルドでテスト:');
  console.log('     pnpm build');
  console.log('');
  console.log('  4. ドキュメントファイルの編集:');
  console.log(`     apps/${config.projectName}/src/content/docs/`);
  console.log('');

  if (!testResult.success) {
    console.log('⚠️  警告: テストが失敗しました。上記のエラーを確認して問題を解決してください。');
  }

  if (dryRun) {
    console.log('\nℹ️ dry-run設定のため、ファイルや設定の変更は行われていません。');
    console.log('   実際にプロジェクトを作成するには --dry-run を外して再実行してください。');
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 新しいドキュメントプロジェクト作成スクリプト\n');

  // 1. 引数解析
  showProgress(1, 7, '引数を解析しています...');
  const config = parseArguments();

  console.log(`プロジェクト名: ${config.projectName}`);
  console.log(`英語表示名: ${config.displayNameEn}`);
  console.log(`日本語表示名: ${config.displayNameJa}`);
  console.log(`テンプレート: ${config.template}`);
  console.log('');

  if (config.dryRun) {
    logger.dryRun('dry-runモードで実行します。ファイルシステムへの変更は行いません。');
  }

  // 2. バリデーション
  showProgress(2, 7, 'プロジェクト設定を検証しています...');

  const validationErrors = [
    ...validateProjectName(config.projectName),
    ...checkProjectDuplication(config.projectName),
    ...validateTemplate(config.template),
  ];

  if (validationErrors.length > 0) {
    console.error('❌ エラーが発生しました:');
    validationErrors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ バリデーション完了');
  console.log('');

  let confirmed = true;
  try {
    confirmed = await confirmAction({
      message: config.dryRun
        ? `プロジェクト "${config.projectName}" の作成手順をdry-runで確認します`
        : `プロジェクト "${config.projectName}" を作成します`,
      autoConfirm: config.autoConfirm,
      dryRun: config.dryRun,
      logger,
    });
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }

  if (!confirmed) {
    process.exit(0);
  }

  // 3. テンプレートプロジェクトのコピー
  showProgress(3, 7, 'テンプレートプロジェクトをコピーしています...');

  const targetDir = copyTemplateProject(config.template, config.projectName, {
    dryRun: config.dryRun,
  });
  console.log('✅ プロジェクトコピー完了');
  console.log('');

  // 4. 設定ファイルの更新
  showProgress(4, 7, '設定ファイルを更新しています...');

  updateAllConfigFiles(targetDir, config, { dryRun: config.dryRun });
  console.log('✅ 設定ファイル更新完了');
  console.log('');

  // 5. 依存関係のインストール
  showProgress(5, 7, '依存関係をインストールしています...');

  const installSuccess = installDependencies(targetDir, { dryRun: config.dryRun });
  if (!installSuccess) {
    console.error('❌ 依存関係のインストールに失敗しました。手動でインストールしてください。');
    console.error(`   cd apps/${config.projectName} && pnpm install`);
    process.exit(1);
  }

  console.log('✅ 依存関係インストール完了');
  console.log('');

  // 6. 動作テスト
  showProgress(6, 7, '動作テストを実行しています...');

  const testResult = await runProjectTests(config.projectName, {
    skipTest: config.skipTest,
    dryRun: config.dryRun,
  });
  console.log('✅ テスト実行完了');
  console.log('');

  // 7. 完了レポート
  showProgress(7, 7, '完了レポートを生成しています...');

  showSuccessReport(config, targetDir, testResult, { dryRun: config.dryRun });

  // 成功時は終了コード0、テスト失敗時は終了コード1
  process.exit(testResult.success ? 0 : 1);
}

// エラーハンドリング付きでメイン処理を実行
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error('\n❌ 予期しないエラーが発生しました:', error.message);
    console.error('スタックトレース:', error.stack);
    process.exit(1);
  });
}
