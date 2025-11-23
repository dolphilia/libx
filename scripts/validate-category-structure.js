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

logger.useUnifiedConsole();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const CONFIG_FILE_JSONC = 'project.config.jsonc';
const CONFIG_FILE_JSON = 'project.config.json';

function resolveConfigPath(projectDir) {
  const jsoncPath = path.join(projectDir, 'src', 'config', CONFIG_FILE_JSONC);
  const jsonPath = path.join(projectDir, 'src', 'config', CONFIG_FILE_JSON);
  if (fs.existsSync(jsoncPath)) {
    return jsoncPath;
  }
  return jsonPath;
}

function getProjectConfigPaths() {
  const appsDir = path.join(rootDir, 'apps');
  if (!fs.existsSync(appsDir)) {
    logger.error('apps ディレクトリが見つかりませんでした。');
    process.exit(1);
  }

  const entries = fs.readdirSync(appsDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => ({
      projectName: entry.name,
      configPath: resolveConfigPath(path.join(appsDir, entry.name))
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

function diffCategories(baseKeys, targetKeys) {
  const missing = [];
  const extra = [];

  for (const key of baseKeys) {
    if (!targetKeys.includes(key)) {
      missing.push(key);
    }
  }

  for (const key of targetKeys) {
    if (!baseKeys.includes(key)) {
      extra.push(key);
    }
  }

  return { missing, extra };
}

function inspectProject({ projectName, configPath }) {
  logger.step(`プロジェクト "${projectName}" のカテゴリ構造を検証します`);

  const config = loadConfig(configPath);
  const supportedLangs = config?.language?.supported ?? [];
  const translations = config?.translations ?? {};

  if (supportedLangs.length === 0) {
    logger.warn('supportedLangs が設定されていません。スキップします。');
    return { projectName, hasIssue: true };
  }

  let baseLang = null;
  let baseKeys = [];
  const issues = [];

  for (const lang of supportedLangs) {
    const translation = translations[lang];
    if (!translation) {
      issues.push({
        lang,
        type: 'missingTranslation'
      });
      continue;
    }

    const categories = translation.categories || {};
    const keys = Object.keys(categories).sort();

    if (!baseLang) {
      baseLang = lang;
      baseKeys = keys;
      continue;
    }

    const { missing, extra } = diffCategories(baseKeys, keys);

    if (missing.length > 0 || extra.length > 0) {
      issues.push({
        lang,
        type: 'categoryMismatch',
        missing,
        extra
      });
    }
  }

  if (!baseLang) {
    logger.warn('カテゴリ情報を持つ言語が存在しません。スキップします。');
    return { projectName, hasIssue: true };
  }

  if (issues.length === 0) {
    logger.success(`カテゴリキーは全言語で一致しています（基準言語: ${baseLang}）`);
    return { projectName, hasIssue: false };
  }

  logger.error('カテゴリ構造に不整合が見つかりました。');
  for (const issue of issues) {
    if (issue.type === 'missingTranslation') {
      logger.warn(`supportedLangs に含まれる "${issue.lang}" の翻訳情報がありません。`);
      continue;
    }

    logger.warn(`言語 "${issue.lang}" のカテゴリキーが一致していません。`);

    if (issue.missing.length > 0) {
      logger.detail(`不足しているキー: ${issue.missing.join(', ')}`, { indent: 4, bullet: '-' });
    }

    if (issue.extra.length > 0) {
      logger.detail(`余分なキー: ${issue.extra.join(', ')}`, { indent: 4, bullet: '-' });
    }
  }

  logger.info(`基準言語 "${baseLang}" のキー: ${baseKeys.join(', ')}`);
  return { projectName, hasIssue: true };
}

function run() {
  logger.heading('カテゴリ構造検証');

  const projectConfigs = getProjectConfigPaths();
  if (projectConfigs.length === 0) {
    logger.warn('検証対象の project.config.jsonc が見つかりませんでした。');
    process.exit(0);
  }

  const results = projectConfigs.map(inspectProject);
  const failures = results.filter(result => result.hasIssue);

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
