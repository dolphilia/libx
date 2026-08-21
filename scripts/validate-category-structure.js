#!/usr/bin/env node

/**
 * プロジェクト設定内のカテゴリ翻訳構造を検証するスクリプト
 * 各言語でカテゴリキーが一致しているかを確認し、不整合があれば詳細を報告します。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as logger from './logger.js';
import { readJsoncFile } from './jsonc-utils.js';
import { resolveSupportedLangs as resolveRepoSupportedLangs } from './global-defaults.js';
import { getCategoryId } from '../packages/content-utils/src/category-navigation.js';

logger.useUnifiedConsole();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const CONFIG_FILE_JSONC = 'project.config.jsonc';

function resolveConfigPath(projectDir) {
  return path.join(projectDir, 'src', 'config', CONFIG_FILE_JSONC);
}

function getProjectConfigPaths() {
  const appsDir = path.join(rootDir, 'apps');
  if (!fs.existsSync(appsDir)) {
    logger.error('apps ディレクトリが見つかりませんでした。');
    process.exit(1);
  }

  const entries = fs.readdirSync(appsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      projectName: entry.name,
      configPath: resolveConfigPath(path.join(appsDir, entry.name)),
    }))
    .filter(({ configPath }) => fs.existsSync(configPath));
}

function loadConfig(configPath) {
  try {
    return readJsoncFile(configPath);
  } catch (error) {
    throw new Error(`設定ファイルの読み込みに失敗しました: ${configPath}\n${error.message}`);
  }
}

function collectContentCategoryIds(projectName) {
  const projectDir = path.join(rootDir, 'apps', projectName);
  const awesomeContentDir = path.join(projectDir, 'src', 'awesome-content');
  const docsDir = fs.existsSync(awesomeContentDir)
    ? awesomeContentDir
    : path.join(projectDir, 'src', 'content', 'docs');
  const categoryIds = new Set();
  if (!fs.existsSync(docsDir)) return categoryIds;

  for (const version of fs.readdirSync(docsDir, { withFileTypes: true })) {
    if (!version.isDirectory()) continue;
    const versionDir = path.join(docsDir, version.name);
    for (const lang of fs.readdirSync(versionDir, { withFileTypes: true })) {
      if (!lang.isDirectory()) continue;
      const langDir = path.join(versionDir, lang.name);
      for (const category of fs.readdirSync(langDir, { withFileTypes: true })) {
        if (category.isDirectory()) categoryIds.add(getCategoryId(category.name));
      }
    }
  }

  return categoryIds;
}

function inspectProject({ projectName, configPath }) {
  logger.step(`プロジェクト "${projectName}" のカテゴリ構造を検証します`);

  const config = loadConfig(configPath);
  const preferredSupported = Array.isArray(config?.language?.supported)
    ? config.language.supported
    : undefined;
  const supportedLangs = resolveRepoSupportedLangs(preferredSupported);
  const translations = config?.translations ?? {};

  if (supportedLangs.length === 0) {
    logger.warn('supportedLangs が設定されていません。スキップします。');
    return { projectName, hasIssue: true };
  }

  const defaultLang = config?.language?.default;
  const contentCategoryIds = [...collectContentCategoryIds(projectName)].sort();
  const defaultKeys = Object.keys(translations?.[defaultLang]?.categories ?? {}).sort();
  const invalidKeys = [
    ...new Set(
      Object.values(translations).flatMap((translation) =>
        Object.keys(translation.categories ?? {})
      )
    ),
  ].filter((key) => /^\d+-/.test(key));
  const missingDefault = contentCategoryIds.filter((key) => !defaultKeys.includes(key));

  if (invalidKeys.length > 0) {
    logger.error(`番号接頭辞を含むカテゴリIDがあります: ${invalidKeys.join(', ')}`);
  }
  if (missingDefault.length > 0) {
    logger.error(
      `既定言語 "${defaultLang}" に表示名がないカテゴリがあります: ${missingDefault.join(', ')}`
    );
  }

  for (const lang of supportedLangs) {
    if (lang === defaultLang) continue;
    const keys = Object.keys(translations?.[lang]?.categories ?? {});
    const missing = contentCategoryIds.filter((key) => !keys.includes(key));
    if (missing.length > 0) {
      logger.warn(`言語 "${lang}" は既定言語へフォールバックします: ${missing.join(', ')}`);
    }
  }

  const configuredKeys = new Set(
    Object.values(translations).flatMap((translation) => Object.keys(translation.categories ?? {}))
  );
  const unused = [...configuredKeys].filter((key) => !contentCategoryIds.includes(key)).sort();
  if (unused.length > 0) {
    logger.warn(`現在の文書構造で未使用のカテゴリIDがあります: ${unused.join(', ')}`);
  }

  const hasIssue = invalidKeys.length > 0 || missingDefault.length > 0;
  if (!hasIssue) {
    logger.success(`カテゴリIDと既定言語 "${defaultLang}" の表示名が文書構造と一致しています。`);
  }
  return { projectName, hasIssue };
}

function run() {
  logger.heading('カテゴリ構造検証');

  const projectConfigs = getProjectConfigPaths();
  if (projectConfigs.length === 0) {
    logger.warn('検証対象の project.config.jsonc が見つかりませんでした。');
    process.exit(0);
  }

  const results = projectConfigs.map(inspectProject);
  const failures = results.filter((result) => result.hasIssue);

  if (failures.length === 0) {
    logger.blank();
    logger.success('すべてのプロジェクトでカテゴリ構造の整合性が確認されました。');
    process.exit(0);
  }

  logger.blank();
  logger.error(`カテゴリ構造の不整合が ${failures.length} 件検出されました。`);
  failures.forEach(({ projectName }) => {
    logger.detail(projectName, { indent: 2, bullet: '-' });
  });
  process.exit(1);
}

run();
