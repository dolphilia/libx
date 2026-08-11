#!/usr/bin/env node

/**
 * 新しいバージョンを追加するスクリプト（改良版）
 * 使用例: node scripts/create-version.js sample-docs v3
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { randomUUID } from 'node:crypto';
import {
  loadProjectConfig,
  resolveProjectConfigFile,
  serializeProjectConfig,
} from './document-utils.js';
import { commitPreparedPathsAtomically } from './atomic-paths.js';
import { getContentSegmentError } from '../packages/project-config/src/content-id.js';
import * as logger from './logger.js';

logger.useUnifiedConsole();

function showUsage(exitCode = 0) {
  logger.heading('バージョン追加スクリプトの使い方');
  logger.info('node scripts/create-version.js <project-name> <version> [options]');
  logger.blank();
  logger.info('必須引数');
  logger.detail('project-name: プロジェクト名');
  logger.detail('version: 追加するバージョンID（例: v3, v2-1）');
  logger.blank();
  logger.info('主なオプション');
  logger.detail('--interactive: 対話形式で追加内容を決定します');
  logger.detail('--no-copy: 既存バージョンのコンテンツをコピーしません');
  logger.detail('--dry-run: 変更予定を表示し、ファイルを書き換えません');
  logger.detail('--help: このヘルプを表示します');
  logger.blank();
  logger.info('主な処理内容');
  logger.detail('project.config.jsonc の versions 配列を更新します');
  logger.detail('既存バージョンからコンテンツをコピーする設定が可能です');
  logger.detail('各言語分のディレクトリを自動生成します');
  logger.blank();
  logger.info('使用例');
  logger.detail('node scripts/create-version.js sample-docs v3');
  logger.detail('node scripts/create-version.js sample-docs v2-1 --no-copy');
  process.exit(exitCode);
}

// コマンドライン引数の解析
function parseArguments() {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    showUsage(0);
  }

  if (args.length < 2) {
    logger.error('プロジェクト名とバージョンを指定してください。');
    showUsage(1);
  }

  const [projectName, version, ...rest] = args;
  const isInteractive = rest.includes('--interactive');
  const noCopy = rest.includes('--no-copy');
  const dryRun = rest.includes('--dry-run');

  return { projectName, version, isInteractive, noCopy, dryRun };
}

// バージョン形式をバリデーション
function validateVersion(version) {
  const errors = [];
  const segmentError = getContentSegmentError(version, 'バージョンID');
  if (segmentError) errors.push(segmentError);
  if (!/^v\d+(?:-\d+)*$/.test(version)) {
    errors.push('バージョンIDはv1, v2-0, v3-5-1のような形式である必要があります');
  }

  return errors;
}

function prepareVersionContent({
  projectName,
  newVersion,
  previousVersion,
  supportedLangs,
  copyFromPrevious,
}) {
  const docsPath = path.join(process.cwd(), 'apps', projectName, 'src', 'content', 'docs');
  const targetPath = path.join(docsPath, newVersion);
  if (fs.existsSync(targetPath)) {
    throw new Error(`コンテンツディレクトリが既に存在します: ${targetPath}`);
  }

  const preparedPath = fs.mkdtempSync(path.join(docsPath, `.${newVersion}-prepared-`));
  try {
    for (const lang of supportedLangs) {
      const preparedLanguagePath = path.join(preparedPath, lang);
      const previousLanguagePath = previousVersion
        ? path.join(docsPath, previousVersion, lang)
        : null;

      if (copyFromPrevious && previousLanguagePath && fs.existsSync(previousLanguagePath)) {
        fs.cpSync(previousLanguagePath, preparedLanguagePath, { recursive: true });
        console.log(`  ✅ ${lang}: ${previousVersion} → ${newVersion}`);
      } else {
        fs.mkdirSync(preparedLanguagePath, { recursive: true });
        const reason = copyFromPrevious
          ? `${previousVersion} が存在しないため空で作成`
          : '空で作成';
        console.log(`  ℹ️  ${lang}: ${reason}`);
      }
    }
    return { preparedPath, targetPath };
  } catch (error) {
    fs.rmSync(preparedPath, { recursive: true, force: true });
    throw error;
  }
}

// インタラクティブモードの実装
async function runInteractiveMode(projectName, version, config) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

  try {
    console.log(`\n🚀 バージョン作成ツール (インタラクティブモード)`);
    console.log(`プロジェクト: ${projectName} | 新バージョン: ${version}\n`);

    // 現在のバージョン情報を表示
    console.log('📋 現在のバージョン:');
    config.versioning.versions.forEach((v, index) => {
      const status = v.isLatest ? ' (最新)' : '';
      console.log(`  ${index + 1}. ${v.id} - ${v.name}${status}`);
    });

    // バージョン名の入力
    const defaultName = `Version ${version.replace('v', '')}`;
    const versionName =
      (await ask(`\nバージョンの表示名を入力してください (${defaultName}): `)) || defaultName;

    // 前バージョンからのコピー確認
    const latestVersion = config.versioning.versions.find((v) => v.isLatest);
    let copyFromPrevious = false;

    if (latestVersion) {
      console.log(`\n📋 前バージョンからのコピー:`);
      console.log(`前バージョン: ${latestVersion.id} (${latestVersion.name})`);

      const copyChoice = await ask('前バージョンからドキュメントをコピーしますか？ (Y/n): ');
      copyFromPrevious = copyChoice.toLowerCase() !== 'n' && copyChoice.toLowerCase() !== 'no';
    }

    // 確認
    console.log(`\n📄 作成内容の確認:`);
    console.log(`バージョンID: ${version}`);
    console.log(`バージョン名: ${versionName}`);
    console.log(`前バージョンコピー: ${copyFromPrevious ? 'はい' : 'いいえ'}`);
    console.log(`対象言語: ${config.language.supported.join(', ')}`);

    const confirm = await ask('\n作成しますか？ (Y/n): ');

    if (confirm.toLowerCase() === 'n' || confirm.toLowerCase() === 'no') {
      console.log('キャンセルされました');
      process.exit(0);
    }

    return { versionName, copyFromPrevious };
  } finally {
    rl.close();
  }
}

// メイン処理
async function main() {
  try {
    const args = parseArguments();

    console.log(`\n🚀 バージョン作成ツール`);
    console.log(`プロジェクト: ${args.projectName}`);
    console.log(`新バージョン: ${args.version}`);

    // バリデーション
    const validationErrors = validateVersion(args.version);
    if (validationErrors.length > 0) {
      console.error('❌ バリデーションエラー:');
      validationErrors.forEach((error) => console.error(`  - ${error}`));
      process.exit(1);
    }

    // プロジェクト設定を読み込み
    console.log('\n📖 プロジェクト設定を読み込んでいます...');
    const config = loadProjectConfig(args.projectName);

    // 既存バージョンとの重複チェック
    const existingVersions = config.versioning.versions.map((v) => v.id);
    if (existingVersions.includes(args.version)) {
      console.error(`❌ バージョン "${args.version}" は既に存在します`);
      console.log('既存のバージョン:', existingVersions.join(', '));
      process.exit(1);
    }

    let versionName, copyFromPrevious;

    if (args.isInteractive) {
      // インタラクティブモード
      const result = await runInteractiveMode(args.projectName, args.version, config);
      ({ versionName, copyFromPrevious } = result);
    } else {
      // 非インタラクティブモード
      versionName = `Version ${args.version.replace('v', '')}`;
      copyFromPrevious = !args.noCopy;
    }

    const previousVersion = config.versioning.versions
      .filter((version) => version.id !== args.version)
      .sort((left, right) => new Date(right.date) - new Date(left.date))[0];

    console.log('\n📄 変更予定:');
    console.log(`  project.config.jsonc: ${args.version} を最新バージョンとして追加`);
    console.log(`  コンテンツ: src/content/docs/${args.version}/`);
    console.log(`  対象言語: ${config.language.supported.join(', ')}`);
    console.log(
      `  コピー元: ${copyFromPrevious && previousVersion ? previousVersion.id : 'なし（空で作成）'}`
    );

    if (args.dryRun) {
      console.log('\n🔍 dry-runが完了しました。ファイルは変更されていません。');
      return;
    }

    // 既存のバージョンをすべて非最新に設定
    console.log('\n📝 バージョン設定とコンテンツを準備しています...');
    config.versioning.versions.forEach((version) => {
      version.isLatest = false;
    });

    // 新しいバージョンを追加
    const newVersionEntry = {
      id: args.version,
      name: versionName,
      date: new Date().toISOString(),
      isLatest: true,
    };

    config.versioning.versions.push(newVersionEntry);

    const configPath = resolveProjectConfigFile(args.projectName);
    const preparedConfigPath = path.join(
      path.dirname(configPath),
      `.${path.basename(configPath)}-prepared-${process.pid}-${randomUUID()}`
    );
    let preparedVersion;

    try {
      preparedVersion = prepareVersionContent({
        projectName: args.projectName,
        newVersion: args.version,
        previousVersion: previousVersion?.id,
        supportedLangs: config.language.supported,
        copyFromPrevious,
      });
      fs.writeFileSync(preparedConfigPath, serializeProjectConfig(config));

      commitPreparedPathsAtomically([
        preparedVersion,
        { preparedPath: preparedConfigPath, targetPath: configPath },
      ]);
    } catch (error) {
      if (preparedVersion?.preparedPath) {
        fs.rmSync(preparedVersion.preparedPath, { recursive: true, force: true });
      }
      fs.rmSync(preparedConfigPath, { force: true });
      throw error;
    }

    console.log('✅ project.config.jsonc とコンテンツを一括で更新しました');

    console.log('\n✅ バージョンが作成されました!');
    console.log(`📋 バージョン詳細:`);
    console.log(`  ID: ${args.version}`);
    console.log(`  名前: ${versionName}`);
    console.log(`  最新: はい`);
    console.log(`  対象言語: ${config.language.supported.join(', ')}`);

    // 次のステップの案内
    console.log('\n📋 次のステップ:');
    console.log('1. 新しいバージョンのドキュメントを作成/編集');
    console.log('2. 開発サーバーで確認: pnpm dev');
    console.log('3. 必要に応じてcreate-document.jsでドキュメントを追加');
    console.log(`4. URL例: /ja/${args.version}/ または /en/${args.version}/`);
  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

// スクリプトが直接実行された場合のみ実行
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
