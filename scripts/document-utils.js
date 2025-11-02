#!/usr/bin/env node

/**
 * ドキュメント管理用の共通ユーティリティ関数
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as logger from './logger.js';
import { createBackup } from './safety-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const PLACEHOLDER_PREFIX = '[要翻訳] ';

/**
 * プロジェクトの設定を読み込む
 */
export function loadProjectConfig(projectName) {
  const projectPath = path.join(rootDir, 'apps', projectName);
  
  if (!fs.existsSync(projectPath)) {
    throw new Error(`プロジェクト "${projectName}" が見つかりません`);
  }

  const configPath = path.join(projectPath, 'src', 'config', 'project.config.json');
  
  if (!fs.existsSync(configPath)) {
    throw new Error(`設定ファイル "${configPath}" が見つかりません`);
  }

  try {
    const configContent = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configContent);
  } catch (error) {
    throw new Error(`設定ファイルの読み込みに失敗しました: ${error.message}`);
  }
}

/**
 * プロジェクト設定を保存する
 */
export function saveProjectConfig(projectName, config, options = {}) {
  const projectPath = path.join(rootDir, 'apps', projectName);
  const configPath = path.join(projectPath, 'src', 'config', 'project.config.json');
  const {
    dryRun = false,
    backupScenario = `project-config-${projectName}`
  } = options;
  
  try {
    const configContent = JSON.stringify(config, null, 2);

    if (dryRun) {
      logger.dryRun(`project.config.json への書き込みをdry-runのためスキップしました: ${configPath}`);
      return true;
    }

    if (fs.existsSync(configPath)) {
      createBackup(configPath, {
        rootDir,
        scenario: backupScenario,
        logger
      });
    }

    fs.writeFileSync(configPath, configContent);
    return true;
  } catch (error) {
    throw new Error(`設定ファイルの保存に失敗しました: ${error.message}`);
  }
}

/**
 * 既存のカテゴリとドキュメント構造を分析
 */
export function analyzeProjectStructure(projectName, lang, version) {
  const projectPath = path.join(rootDir, 'apps', projectName);
  const docsPath = path.join(projectPath, 'src', 'content', 'docs', version, lang);
  
  const categories = {};
  
  if (!fs.existsSync(docsPath)) {
    return categories;
  }

  try {
    const categoryDirs = fs.readdirSync(docsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const categoryDir of categoryDirs) {
      const categoryPath = path.join(docsPath, categoryDir);
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.mdx'))
        .sort();
      
      // 番号付きプレフィックスを除去してカテゴリ名を取得
      const categoryName = categoryDir.replace(/^\d+-/, '');
      
      categories[categoryName] = {
        fullDir: categoryDir,
        files: files,
        nextNumber: getNextFileNumber(files)
      };
    }
  } catch (error) {
    logger.warn(`プロジェクト構造の解析中にエラーが発生しました: ${error.message}`);
  }

  return categories;
}

/**
 * 次のファイル番号を計算
 */
function getNextFileNumber(files) {
  let maxNumber = 0;
  
  for (const file of files) {
    const match = file.match(/^(\d+)-/);
    if (match) {
      const number = parseInt(match[1], 10);
      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  }
  
  return String(maxNumber + 1).padStart(2, '0');
}

/**
 * 次のカテゴリ番号を計算
 */
export function getNextCategoryNumber(categories) {
  let maxNumber = 0;
  
  for (const category of Object.values(categories)) {
    const match = category.fullDir.match(/^(\d+)-/);
    if (match) {
      const number = parseInt(match[1], 10);
      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  }
  
  return String(maxNumber + 1).padStart(2, '0');
}

/**
 * ファイル名を正規化（URLフレンドリーに変換）
 */
export function normalizeFileName(title) {
  // 日本語や特殊文字を含むタイトルの場合は、シンプルな英数字に変換
  let normalized = title
    .toLowerCase()
    .replace(/[\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]/g, '-') // 日本語文字とスペースをハイフンに
    .replace(/[^a-z0-9-]/g, '') // 英数字とハイフンのみ残す
    .replace(/-+/g, '-') // 連続ハイフンを単一に
    .replace(/^-|-$/g, ''); // 先頭末尾のハイフンを除去
  
  // 空になった場合はデフォルト値を使用
  if (!normalized) {
    normalized = 'new-document';
  }
  
  return normalized;
}

/**
 * カテゴリの表示名を取得
 */
export function getCategoryDisplayName(config, lang, category) {
  try {
    return config.translations[lang]?.categories[category] || category;
  } catch (error) {
    return category;
  }
}

/**
 * ドキュメントファイルのテンプレートを生成
 */
export function generateDocumentTemplate(title, description, category) {
  const template = `---
title: "${title}"
description: "${description || `${title}について説明します`}"
---

# ${title}

ここにコンテンツを記述してください...

## 概要

このドキュメントでは以下について説明します：

- 項目1
- 項目2  
- 項目3

## 詳細

詳細な内容をここに記載します。

## 次のステップ

- [関連ドキュメント](../path/to/related-doc)
- [API リファレンス](../reference/api)
`;

  return template;
}

/**
 * パスの妥当性をチェック
 */
export function validateDocumentPath(projectName, lang, version, category, fileName) {
  const errors = [];
  
  // プロジェクト名チェック
  const projectPath = path.join(rootDir, 'apps', projectName);
  if (!fs.existsSync(projectPath)) {
    errors.push(`プロジェクト "${projectName}" が存在しません`);
  }

  // 言語チェック
  if (!/^[a-z]{2}$/.test(lang)) {
    errors.push('言語コードは2文字の小文字である必要があります (例: en, ja)');
  }

  // バージョンチェック
  if (!/^v\d+(\.\d+)*$/.test(version)) {
    errors.push('バージョンはv1, v2.0のような形式である必要があります');
  }

  // ファイル名チェック
  if (!/^[a-z0-9-]+$/.test(fileName)) {
    errors.push('ファイル名は小文字の英数字とハイフンのみ使用可能です');
  }

  return errors;
}

/**
 * ドキュメントファイルを作成
 */
export function createDocumentFile(projectName, lang, version, categoryDir, fileName, content) {
  const projectPath = path.join(rootDir, 'apps', projectName);
  const docPath = path.join(projectPath, 'src', 'content', 'docs', version, lang, categoryDir, `${fileName}.mdx`);
  
  // ディレクトリを作成
  fs.mkdirSync(path.dirname(docPath), { recursive: true });
  
  // ファイルを作成
  fs.writeFileSync(docPath, content);
  
  return docPath;
}

/**
 * project.config.json のカテゴリ翻訳を同期
 */
export function syncCategoryTranslations(projectName, {
  lang,
  categorySlug,
  displayName,
  dryRun = false
} = {}) {
  if (!categorySlug) {
    throw new Error('categorySlug が指定されていません。');
  }

  const config = loadProjectConfig(projectName);
  const supportedLangs = config?.basic?.supportedLangs ?? [];
  const defaultLang = config?.basic?.defaultLang ?? lang;

  if (!config.translations) {
    config.translations = {};
  }

  const updates = [];
  const normalizedDisplayName = (displayName ?? '').trim();
  const fallbackLabel = normalizedDisplayName || categorySlug;

  for (const supportedLang of supportedLangs) {
    if (!config.translations[supportedLang]) {
      config.translations[supportedLang] = {
        displayName: '',
        displayDescription: '',
        categories: {}
      };
    }

    if (!config.translations[supportedLang].categories) {
      config.translations[supportedLang].categories = {};
    }

    const currentValue = config.translations[supportedLang].categories[categorySlug];
    const isPlaceholderValue = typeof currentValue === 'string' && currentValue.startsWith(PLACEHOLDER_PREFIX);
    let nextValue;

    if (supportedLang === lang) {
      const preferredLabel = normalizedDisplayName || currentValue || categorySlug;
      if (!currentValue || currentValue.trim() === '' || currentValue === categorySlug || currentValue === PLACEHOLDER_PREFIX + categorySlug || isPlaceholderValue) {
        nextValue = preferredLabel;
      }
    } else if (!currentValue || currentValue.trim() === '' || currentValue === categorySlug || currentValue === PLACEHOLDER_PREFIX + categorySlug || isPlaceholderValue) {
      const defaultValue =
        config.translations[defaultLang]?.categories?.[categorySlug] ??
        config.translations[lang]?.categories?.[categorySlug] ??
        normalizedDisplayName;
      let resolvedValue;

      if (defaultValue) {
        resolvedValue = supportedLang === defaultLang
          ? defaultValue
          : `${PLACEHOLDER_PREFIX}${defaultValue}`;
      } else if (supportedLang === defaultLang) {
        resolvedValue = fallbackLabel;
      } else {
        resolvedValue = `${PLACEHOLDER_PREFIX}${fallbackLabel}`;
      }

      nextValue = resolvedValue;
    }

    if (typeof nextValue === 'string' && nextValue !== currentValue) {
      config.translations[supportedLang].categories[categorySlug] = nextValue;
      updates.push({
        lang: supportedLang,
        previous: currentValue,
        value: nextValue,
        placeholder: typeof nextValue === 'string' && nextValue.startsWith(PLACEHOLDER_PREFIX)
      });
    }
  }

  if (updates.length === 0) {
    return {
      updated: false,
      updates,
      categorySlug
    };
  }

  saveProjectConfig(projectName, config, {
    dryRun,
    backupScenario: `category-sync-${projectName}`
  });

  return {
    updated: true,
    updates,
    categorySlug
  };
}

/**
 * インタラクティブな入力のためのヘルパー
 */
export function displayProjectStructure(categories, lang, config) {
  console.log('\n📁 現在のプロジェクト構造:');
  console.log('==========================================');
  
  if (Object.keys(categories).length === 0) {
    console.log('  まだドキュメントが作成されていません');
    return;
  }
  
  for (const [categoryName, categoryInfo] of Object.entries(categories)) {
    const displayName = getCategoryDisplayName(config, lang, categoryName);
    console.log(`\n  ${categoryInfo.fullDir}/ (${displayName})`);
    
    if (categoryInfo.files.length > 0) {
      categoryInfo.files.forEach(file => {
        console.log(`    📄 ${file}`);
      });
    } else {
      console.log('    (空のカテゴリ)');
    }
  }
  console.log('\n==========================================');
}
