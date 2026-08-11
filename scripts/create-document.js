#!/usr/bin/env node

/**
 * 新しいドキュメントを作成するスクリプト（インタラクティブ対応）
 * 管理者体験を重視した出力スタイルに合わせています。
 */

import readline from 'readline';
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import * as logger from './logger.js';
import {
  loadProjectConfig,
  analyzeProjectStructure,
  getNextCategoryNumber,
  normalizeFileName,
  getCategoryDisplayName,
  generateDocumentTemplate,
  validateDocumentPath,
  displayProjectStructure,
  planCategoryTranslations,
  resolveDocumentFilePath,
  resolveProjectConfigFile,
  serializeProjectConfig,
} from './document-utils.js';
import { commitPreparedPathsAtomically } from './atomic-paths.js';

logger.useUnifiedConsole();

function showUsage(exitCode = 0) {
  logger.heading('ドキュメント作成ツールの使い方');
  logger.info(
    'node scripts/create-document.js <project-name> <lang> <version> [category] [title] [options]'
  );
  logger.blank();
  logger.info('主な引数');
  logger.detail('project-name: プロジェクト名（例: sample-docs）');
  logger.detail('lang: 言語コード（例: en, ja）');
  logger.detail('version: バージョン（例: v1, v2）');
  logger.detail('category: 既存カテゴリのスラッグ、または新規カテゴリ名');
  logger.detail('title: 作成するドキュメントのタイトル（非対話モードのみ必須）');
  logger.blank();
  logger.info('オプション');
  logger.detail('--interactive: 対話モードで実行します。');
  logger.detail('--dry-run: 変更予定を表示し、ファイルを書き換えません。');
  logger.detail('--format=md|mdx: 文書形式を指定します（既定: md）。');
  logger.detail('--help: このヘルプを表示します。');
  logger.blank();
  logger.info('使用例');
  logger.detail('node scripts/create-document.js sample-docs en v2 guide "Getting Started"');
  logger.detail('node scripts/create-document.js sample-docs ja v2 --interactive');
  process.exit(exitCode);
}

function parseArguments() {
  const rawArgs = process.argv.slice(2);

  if (rawArgs.includes('--help')) {
    showUsage(0);
  }

  if (rawArgs.length < 3) {
    logger.error('プロジェクト名・言語・バージョンを指定してください。');
    showUsage(1);
  }

  const [projectName, lang, version, ...rest] = rawArgs;
  const optionFlags = rest.filter((arg) => arg.startsWith('--'));
  const values = rest.filter((arg) => !arg.startsWith('--'));
  const dryRun = optionFlags.includes('--dry-run');
  const format = optionFlags.find((arg) => arg.startsWith('--format='))?.slice(9) ?? 'md';
  if (!['md', 'mdx'].includes(format)) {
    logger.error(`文書形式はmdまたはmdxを指定してください: ${format}`);
    showUsage(1);
  }

  if (optionFlags.includes('--interactive')) {
    return { projectName, lang, version, isInteractive: true, dryRun, format };
  }

  const [category, title] = values;
  return { projectName, lang, version, category, title, isInteractive: false, dryRun, format };
}

async function runInteractiveMode(projectName, lang, version, format, preloadedConfig) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

  try {
    logger.heading('対話モード: ドキュメント作成');
    logger.info(`プロジェクト: ${projectName}`);
    logger.detail(`言語: ${lang}`, { bullet: '' });
    logger.detail(`バージョン: ${version}`, { bullet: '' });

    const config = preloadedConfig ?? loadProjectConfig(projectName);
    const categories = analyzeProjectStructure(projectName, lang, version);

    displayProjectStructure(categories, lang, config);

    let categoryDir;
    let categorySlug;
    let categoryDisplayName;
    let isNewCategory = false;
    let fileName;

    if (Object.keys(categories).length > 0) {
      logger.step('カテゴリをどのように設定しますか？');
      logger.list(['既存のカテゴリから選ぶ', '新しいカテゴリを作成する']);
      const categoryChoice = await ask('選択番号を入力してください (1-2): ');

      if (categoryChoice === '1') {
        const categoryList = Object.keys(categories);
        logger.info('既存のカテゴリ一覧');
        categoryList.forEach((cat, index) => {
          const displayName = getCategoryDisplayName(config, lang, cat);
          logger.detail(`${index + 1}. ${cat}（表示名: ${displayName}）`, { bullet: '' });
        });

        const categoryIndex = await ask('カテゴリ番号を入力してください: ');
        const selectedIndex = parseInt(categoryIndex, 10) - 1;

        if (selectedIndex >= 0 && selectedIndex < categoryList.length) {
          categorySlug = categoryList[selectedIndex];
          categoryDir = categories[categorySlug].fullDir;
          categoryDisplayName = getCategoryDisplayName(config, lang, categorySlug);
        } else {
          logger.error('1 から指定された番号の範囲で入力してください。');
          process.exit(1);
        }
      } else if (categoryChoice === '2') {
        const categoryInput = await ask('新しいカテゴリ名を入力してください: ');
        const categoryNumber = getNextCategoryNumber(categories);
        categorySlug = normalizeFileName(categoryInput);
        categoryDir = `${categoryNumber}-${categorySlug}`;
        categoryDisplayName = categoryInput.trim() || categorySlug;
        isNewCategory = true;
      } else {
        logger.error('1 または 2 を入力してください。');
        process.exit(1);
      }
    } else {
      logger.step('最初のカテゴリを作成します');
      const categoryInput = await ask('カテゴリ名を入力してください: ');
      categorySlug = normalizeFileName(categoryInput);
      categoryDir = `01-${categorySlug}`;
      categoryDisplayName = categoryInput.trim() || categorySlug;
      isNewCategory = true;
    }

    const title = await ask('ドキュメントのタイトルを入力してください: ');
    const description = await ask('ドキュメントの説明（任意）: ');

    if (categories[categorySlug]) {
      const nextNumber = categories[categorySlug].nextNumber;
      fileName = `${nextNumber}-${normalizeFileName(title)}`;
    } else {
      fileName = `01-${normalizeFileName(title)}`;
    }

    logger.info('作成予定のファイルパス');
    logger.detail(`${categoryDir}/${fileName}.${format}`, { bullet: '' });

    const confirm = await ask('この内容で作成しますか？ (y/N): ');
    const normalized = confirm.trim().toLowerCase();

    if (normalized !== 'y' && normalized !== 'yes') {
      logger.warn('作成をキャンセルしました。処理を終了します。');
      process.exit(0);
    }

    return {
      categorySlug,
      categoryDir,
      categoryDisplayName,
      isNewCategory,
      fileName,
      title,
      description,
    };
  } finally {
    rl.close();
  }
}

async function main() {
  try {
    const args = parseArguments();

    const validationErrors = validateDocumentPath(
      args.projectName,
      args.lang,
      args.version,
      args.category || 'sample-category',
      'sample-doc'
    );

    if (validationErrors.length > 0) {
      logger.error('入力内容を確認してください。');
      validationErrors.forEach((message) => logger.detail(message));
      process.exit(1);
    }

    const projectConfig = loadProjectConfig(args.projectName);
    if (!projectConfig.language.supported.includes(args.lang)) {
      throw new Error(
        `言語 "${args.lang}" はプロジェクトの対応言語ではありません: ${projectConfig.language.supported.join(', ')}`
      );
    }
    if (
      !projectConfig.versioning.versions.some((versionEntry) => versionEntry.id === args.version)
    ) {
      throw new Error(`バージョン "${args.version}" はプロジェクト設定に存在しません`);
    }

    logger.heading('ドキュメント作成ツール');
    logger.info(`プロジェクト: ${args.projectName}`);
    logger.detail(`言語: ${args.lang}`, { bullet: '' });
    logger.detail(`バージョン: ${args.version}`, { bullet: '' });

    let categorySlug;
    let categoryDir;
    let categoryDisplayName;
    let isNewCategory = false;
    let fileName;
    let title;
    let description = '';

    if (args.isInteractive) {
      const result = await runInteractiveMode(
        args.projectName,
        args.lang,
        args.version,
        args.format,
        projectConfig
      );
      ({
        categorySlug,
        categoryDir,
        categoryDisplayName,
        isNewCategory,
        fileName,
        title,
        description,
      } = result);
    } else {
      if (!args.category || !args.title) {
        logger.error('非対話モードでは category と title を指定してください。');
        process.exit(1);
      }

      const categories = analyzeProjectStructure(args.projectName, args.lang, args.version);
      title = args.title;
      const rawCategoryInput = args.category;
      const normalizedCategory = normalizeFileName(rawCategoryInput);
      const existingCategory = categories[rawCategoryInput] || categories[normalizedCategory];

      if (existingCategory) {
        categorySlug = categories[rawCategoryInput] ? rawCategoryInput : normalizedCategory;
        categoryDir = existingCategory.fullDir;
        const nextNumber = existingCategory.nextNumber;
        fileName = `${nextNumber}-${normalizeFileName(title)}`;
        categoryDisplayName = getCategoryDisplayName(projectConfig, args.lang, categorySlug);
      } else {
        const categoryNumber = getNextCategoryNumber(categories);
        categorySlug = normalizedCategory;
        categoryDir = `${categoryNumber}-${categorySlug}`;
        fileName = `01-${normalizeFileName(title)}`;
        categoryDisplayName = rawCategoryInput;
        isNewCategory = true;
      }
    }

    const resolvedCategorySlug = categorySlug || categoryDir.replace(/^[0-9]+-/, '');
    const resolvedCategoryDisplayName = (categoryDisplayName ?? '').trim() || resolvedCategorySlug;

    const content = generateDocumentTemplate(title, description, resolvedCategorySlug);
    const docPath = resolveDocumentFilePath(
      args.projectName,
      args.lang,
      args.version,
      categoryDir,
      fileName,
      args.format
    );
    if (fs.existsSync(docPath)) throw new Error(`作成先ファイルが既に存在します: ${docPath}`);

    const url = `/${args.version}/${args.lang}/${categoryDir}/${fileName}`;
    const nextConfig = JSON.parse(JSON.stringify(projectConfig));
    const syncResult = planCategoryTranslations(nextConfig, {
      lang: args.lang,
      categorySlug: resolvedCategorySlug,
      displayName: resolvedCategoryDisplayName,
    });

    logger.step('変更予定');
    logger.detail(`作成ファイル: ${docPath}`, { bullet: '' });
    logger.detail(`想定URL: ${url}`, { bullet: '' });
    logger.detail(`設定更新: ${syncResult.updated ? 'カテゴリ翻訳を同期' : '変更なし'}`, {
      bullet: '',
    });
    if (isNewCategory) {
      logger.info(`新しいカテゴリ "${resolvedCategorySlug}" を作成します。`);
    }

    if (args.dryRun) {
      logger.success('dry-runが完了しました。ファイルは変更されていません。');
      return;
    }

    const projectRoot = path.join(process.cwd(), 'apps', args.projectName);
    const preparedDocPath = path.join(
      projectRoot,
      `.document-prepared-${process.pid}-${randomUUID()}`
    );
    const configPath = resolveProjectConfigFile(args.projectName);
    const preparedConfigPath = path.join(
      path.dirname(configPath),
      `.${path.basename(configPath)}-prepared-${process.pid}-${randomUUID()}`
    );

    try {
      fs.writeFileSync(preparedDocPath, content);
      const changes = [{ preparedPath: preparedDocPath, targetPath: docPath }];
      if (syncResult.updated) {
        fs.writeFileSync(preparedConfigPath, serializeProjectConfig(nextConfig));
        changes.push({ preparedPath: preparedConfigPath, targetPath: configPath });
      }
      commitPreparedPathsAtomically(changes);
    } catch (error) {
      fs.rmSync(preparedDocPath, { force: true });
      fs.rmSync(preparedConfigPath, { force: true });
      throw error;
    }

    logger.success('ドキュメントファイルと設定を一括で更新しました。');

    if (syncResult.updated) {
      logger.success('カテゴリ翻訳を更新しました。');
      syncResult.updates.forEach(({ lang: updateLang, value, placeholder }) => {
        const note = placeholder ? '（翻訳の追記が必要です）' : '';
        logger.detail(`${updateLang}: ${value}${note}`, { bullet: '' });
      });
    } else {
      logger.info('カテゴリ翻訳に変更はありませんでした。');
    }

    logger.step('次の進め方');
    logger.list([
      '作成されたファイルを編集し、本文を追加してください。',
      '開発サーバーで確認: pnpm dev',
      '必要であれば他言語版のファイルも追加してください。',
    ]);
  } catch (error) {
    logger.error('処理中にエラーが発生しました。', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
