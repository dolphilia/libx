#!/usr/bin/env node

/**
 * サイドバー生成スクリプト
 * 
 * このスクリプトは、ドキュメントコンテンツからサイドバーを生成し、
 * 静的JSONファイルとして出力します。
 * 
 * 拡張機能:
 * - 複数のプロジェクトに対応（apps/ディレクトリ内の全プロジェクト）
 * - 言語とバージョンを動的に検出
 * - JSONファイルの圧縮
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { saveCompressedJson, parseMarkdownFile } from './utils.js';
import * as logger from './logger.js';
import { readJsoncFileAsync } from './jsonc-utils.js';
import {
  resolveBaseUrl as resolveRepoBaseUrl,
  resolveSupportedLangs as resolveRepoSupportedLangs
} from './global-defaults.js';

logger.useUnifiedConsole();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 基本設定
const config = {
  appsDir: path.join(rootDir, 'apps'),
  excludedProjects: ['project-template'], // テンプレートは除外
};

/**
 * メイン処理
 */
async function main() {
  try {
    console.log('サイドバーの生成を開始します...');
    
    // appsディレクトリ内のプロジェクトを検出
    const projects = await detectProjects();
    
    if (projects.length === 0) {
      console.warn('ドキュメントプロジェクトが見つかりませんでした。');
      return;
    }
    
    // 各プロジェクトに対して処理を実行
    for (const project of projects) {
      console.log(`プロジェクト ${project.name} の処理を開始します...`);
      
      // 出力ディレクトリの作成
      await fs.mkdir(project.outputDir, { recursive: true });
      
      // 言語とバージョンの組み合わせごとにサイドバーを生成
      for (const version of project.versions) {
        const languagesForVersion = project.languagesByVersion[version] || [];
        if (languagesForVersion.length === 0) {
          console.warn(`  ${version} で対応言語が検出できなかったため、サイドバー生成をスキップします。`);
          continue;
        }

        const expectedLanguages = project.expectedLanguages ?? project.languages;
        const missingLanguages = expectedLanguages.filter(lang => !languagesForVersion.includes(lang));
        if (missingLanguages.length > 0) {
          console.warn(`  ${version} では以下の言語ディレクトリが見つからなかったため出力対象から除外します: ${missingLanguages.join(', ')}`);
        }

        for (const lang of languagesForVersion) {
          console.log(`  ${lang}/${version} のサイドバーを生成中...`);
          
          try {
            // サイドバーを生成
            const sidebar = await generateSidebarForVersion(project, lang, version);
            
            // サイドバーをJSONとして保存（圧縮版も含む）
            const outputPath = path.join(project.outputDir, `sidebar-${lang}-${version}.json`);
            await saveCompressedJson(outputPath, sidebar);
          } catch (error) {
            console.error(`  ${lang}/${version} のサイドバー生成中にエラーが発生しました:`, error);
          }
        }
      }
    }
    
    console.log('サイドバーの生成が完了しました');
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

/**
 * appsディレクトリ内のプロジェクトを検出する
 */
async function detectProjects() {
  const projects = [];
  
  try {
    // appsディレクトリ内のディレクトリを取得
    const entries = await fs.readdir(config.appsDir, { withFileTypes: true });
    const projectDirs = entries.filter(entry => entry.isDirectory());
    
    for (const dir of projectDirs) {
      const projectName = dir.name;
      
      // 除外プロジェクトをスキップ
      if (config.excludedProjects.includes(projectName)) {
        console.log(`プロジェクト ${projectName} は除外対象です。スキップします。`);
        continue;
      }
      
      const projectPath = path.join(config.appsDir, projectName);
      
      // src/content/docs ディレクトリが存在するかチェック
      const contentPath = path.join(projectPath, 'src', 'content', 'docs');
      try {
        await fs.access(contentPath);
      } catch (error) {
        // ドキュメントディレクトリがない場合はスキップ
        console.log(`${projectName} にはドキュメントディレクトリがありません。スキップします。`);
        continue;
      }
      
      // バージョンディレクトリを検出
      const versions = await detectVersions(contentPath);
      
      if (versions.length === 0) {
        console.log(`${projectName} にバージョンディレクトリが見つかりませんでした。スキップします。`);
        continue;
      }
      
      // バージョンごとに言語を検出
      const { validVersions, languagesByVersion, allDetectedLanguages } = await detectLanguagesByVersion(projectName, contentPath);
      if (validVersions.length === 0) {
        console.log(`${projectName} に言語ディレクトリが見つからなかったため、スキップします。`);
        continue;
      }

      const expectedLanguages = await getSupportedLanguages(projectPath);
      if (expectedLanguages && expectedLanguages.length > 0) {
        const projectLevelMissing = expectedLanguages.filter(lang => !allDetectedLanguages.includes(lang));
        if (projectLevelMissing.length > 0) {
          console.warn(`  ${projectName} で以下の言語がいずれのバージョンでも検出できませんでした: ${projectLevelMissing.join(', ')}`);
        }
      }
      
      // 出力ディレクトリを設定
      const outputDir = path.join(projectPath, 'public', 'sidebar');
      
      // プロジェクト情報を追加
      projects.push({
        name: projectName,
        path: projectPath,
        contentPath,
        outputDir,
        languages: allDetectedLanguages,
        versions: validVersions,
        languagesByVersion,
        expectedLanguages
      });
      
      console.log(`プロジェクト ${projectName} を検出しました:`);
      console.log(`  言語: ${allDetectedLanguages.join(', ')}`);
      console.log(`  バージョン: ${validVersions.join(', ')}`);
      if (expectedLanguages && expectedLanguages.length > 0) {
        console.log(`  設定上の対応言語: ${expectedLanguages.join(', ')}`);
      }
    }
  } catch (error) {
    console.error('プロジェクト検出中にエラーが発生しました:', error);
  }
  
  return projects;
}

/**
 * ドキュメントディレクトリ内のバージョンディレクトリを検出する
 */
async function detectVersions(contentPath) {
  try {
    const entries = await fs.readdir(contentPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('バージョンディレクトリの検出中にエラーが発生しました:', error);
    return [];
  }
}

/**
 * バージョンディレクトリ内の言語ディレクトリを検出する
 */
async function detectLanguages(contentPath, version) {
  try {
    const versionPath = path.join(contentPath, version);
    const entries = await fs.readdir(versionPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('言語ディレクトリの検出中にエラーが発生しました:', error);
    return [];
  }
}

/**
 * バージョンごとに言語ディレクトリを検出し、マッピングを返す
 */
async function detectLanguagesByVersion(projectName, contentPath) {
  const languagesByVersion = {};
  const versions = await detectVersions(contentPath);
  for (const version of versions) {
    const languages = await detectLanguages(contentPath, version);
    if (languages.length === 0) {
      console.warn(`  ${projectName} のバージョン ${version} で対応言語が検出できませんでした。`);
      continue;
    }
    languagesByVersion[version] = languages.sort();
  }

  const validVersions = Object.keys(languagesByVersion);
  const allDetectedLanguages = Array.from(
    new Set(validVersions.flatMap(version => languagesByVersion[version]))
  ).sort();

  return { validVersions, languagesByVersion, allDetectedLanguages };
}

/**
 * プロジェクト設定から対応言語を読み取る
 */
async function getSupportedLanguages(projectPath) {
  const configDir = path.join(projectPath, 'src', 'config');
  const configJsoncPath = path.join(configDir, 'project.config.jsonc');
  const configJsonPath = path.join(configDir, 'project.config.json');
  const targetPath = await fileExists(configJsoncPath) ? configJsoncPath : configJsonPath;
  try {
    const parsed = await readJsoncFileAsync(targetPath);
    const langs = parsed?.language?.supported || parsed?.basic?.supportedLangs;
    return resolveRepoSupportedLangs(Array.isArray(langs) ? langs : undefined);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`  プロジェクト設定の読み込みに失敗しました (${configJsonPath}): ${error.message}`);
    }
  }
  return null;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * ディレクトリ名から順序番号を抽出します
 * @param dirname ディレクトリ名（例: "01-guide"）
 * @returns 順序番号（例: 1）、見つからない場合は999
 */
function extractOrderFromDirectoryName(dirname) {
  const match = dirname.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * 指定された言語とバージョンのサイドバーを生成する
 */
async function generateSidebarForVersion(project, lang, version) {
  // プロジェクトの翻訳設定を取得
  const categoryTranslations = await getProjectCategoryTranslations(project);
  // ドキュメントファイルを検索
  const pattern = `${version}/${lang}/**/*.{md,mdx}`;
  
  const files = await glob(pattern, { cwd: project.contentPath });
  
  // ドキュメント情報を収集
  const docs = [];
  
  for (const file of files) {
    try {
      const filePath = path.join(project.contentPath, file);
      const { frontmatter: data } = await parseMarkdownFile(filePath);
      
      // スラグを生成（ファイルパスから拡張子を除去）
      const slug = file.replace(/\.[^.]+$/, '');
      
      docs.push({
        slug,
        data
      });
    } catch (error) {
      console.warn(`ファイルの処理中にエラーが発生しました: ${file}`, error);
    }
  }
  
  // カテゴリごとにドキュメントを整理
  const categories = {};
  
  
  docs.forEach(doc => {
    // パスからカテゴリを取得
    const parts = doc.slug.split('/');
    const pathCategory = parts.length >= 3 ? parts[2] : 'uncategorized';
    
    // ディレクトリ名から純粋なカテゴリ名を抽出（数字プレフィックスを除去）
    const cleanCategory = pathCategory.replace(/^\d+-/, '');
    const category = doc.data.category || cleanCategory;
    
    // ディレクトリ名から順序を取得
    const categoryDirName = parts[2] || 'uncategorized';
    const order = extractOrderFromDirectoryName(categoryDirName);
    
    if (!categories[category]) {
      categories[category] = {
        docs: [],
        order: order,
        title: undefined // 後で設定
      };
    }
    
    // カテゴリの順序を更新（複数のドキュメントで同じカテゴリが使用されている場合、最小の順序を使用）
    if (order < categories[category].order) {
      categories[category].order = order;
    }
    
    categories[category].docs.push(doc);
  });
  
  // カテゴリごとにドキュメントを順序で並べ替え
  Object.keys(categories).forEach(category => {
    categories[category].docs.sort((a, b) => {
      const orderA = a.data.order || 999;
      const orderB = b.data.order || 999;
      return orderA - orderB;
    });
  });
  
  // カテゴリを順序で並べ替え
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    return a[1].order - b[1].order;
  });
  
  // プロジェクト固有のベースURLを取得
  const baseUrl = await getProjectBaseUrl(project);
  
  // サイドバー項目の生成
  return sortedCategories.map(([category, { docs }]) => {
    // カテゴリ名を翻訳（プロジェクト設定から取得）
    const title = translateCategory(category, lang, categoryTranslations);
    
    return {
      title,
      items: docs.map(doc => {
        const slugParts = doc.slug.split('/').slice(2);
        let fullPath;
        if (baseUrl === '/') {
          fullPath = `/${lang}/${version}/${slugParts.join('/')}`;
        } else {
          fullPath = `${baseUrl}/${lang}/${version}/${slugParts.join('/')}`;
        }
        return {
          title: doc.data.title,
          href: fullPath
        };
      })
    };
  });
}

/**
 * プロジェクト設定からカテゴリ翻訳を取得する
 */
async function getProjectCategoryTranslations(project) {
  try {
    const configPath = path.join(project.path, 'src', 'config', 'project.config.ts');
    const configContent = await fs.readFile(configPath, 'utf-8');
    
    // プロジェクト設定ファイルの翻訳設定読み込みを試行（新構造対応）
    // 新しい translations 構造と古い categoryTranslations 構造の両方をサポート
    let categoryTranslationsMatch = configContent.match(/categoryTranslations\s*:\s*\{([\s\S]*?)\n\s*\}/);
    
    // 新しい translations 構造からも抽出を試行
    if (!categoryTranslationsMatch) {
      const translationsMatch = configContent.match(/translations\s*:\s*\{([\s\S]*?)\n\s*\}/);
      if (translationsMatch) {
        // translations 構造から categories を抽出
        categoryTranslationsMatch = extractCategoriesFromTranslations(translationsMatch[1]);
      }
    }
    
    if (categoryTranslationsMatch) {
      // 最小限の翻訳設定（よく使われるものだけ）
      const translations = {
        en: {
          guide: 'Guide',
          reference: 'Reference'
        },
        ja: {
          guide: 'ガイド',
          reference: 'リファレンス'
        }
      };
      return translations;
    }
  } catch (error) {
    console.warn(`  プロジェクト ${project.name} の翻訳設定の読み込み中にエラー: ${error.message}`);
  }
  
  return null;
}

/**
 * カテゴリ名を翻訳する
 */
function translateCategory(category, lang, translations) {
  if (translations && translations[lang] && translations[lang][category]) {
    return translations[lang][category];
  }
  
  // フォールバック: 英語の翻訳があればそれを使用
  if (translations && translations['en'] && translations['en'][category]) {
    return translations['en'][category];
  }
  
  // 最終フォールバック: カテゴリ名の先頭を大文字にして返す（既存のロジック）
  return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * プロジェクト固有のベースURLを取得する
 */
async function getProjectBaseUrl(project) {
  const configDir = path.join(project.path, 'src', 'config');
  const configJsoncPath = path.join(configDir, 'project.config.jsonc');
  const configJsonPath = path.join(configDir, 'project.config.json');
  const targetPath = await fileExists(configJsoncPath) ? configJsoncPath : configJsonPath;

  let configuredBaseUrl = '';
  let configuredPrefix = '';
  let configuredSlug = '';
  try {
    const parsed = await readJsoncFileAsync(targetPath);
    configuredBaseUrl = parsed?.basic?.baseUrl || '';
    configuredPrefix = parsed?.basic?.baseUrlPrefix || '';
    configuredSlug = parsed?.basic?.projectSlug || '';
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`  プロジェクト ${project.name} の設定読み込み中にエラー: ${error.message}`);
    }
  }

  return resolveRepoBaseUrl({
    baseUrl: configuredBaseUrl,
    baseUrlPrefix: configuredPrefix,
    projectSlug: configuredSlug,
    projectName: project.name
  });
}

/**
 * 新しい translations 構造から categories 部分を抽出
 */
function extractCategoriesFromTranslations(translationsContent) {
  try {
    // 各言語のセクションを抽出
    const langSections = {};
    const langRegex = /(\w+):\s*\{([\s\S]*?)\n\s*\}/g;
    let langMatch;
    
    while ((langMatch = langRegex.exec(translationsContent)) !== null) {
      const lang = langMatch[1];
      const langContent = langMatch[2];
      
      // categories オブジェクトを抽出
      const categoriesMatch = langContent.match(/categories:\s*\{([\s\S]*?)\n\s*\}/);
      if (categoriesMatch) {
        langSections[lang] = categoriesMatch[1];
      }
    }
    
    // categoryTranslations と同じ形式に変換
    if (Object.keys(langSections).length > 0) {
      let result = '';
      for (const [lang, content] of Object.entries(langSections)) {
        result += `    ${lang}: {\n${content}\n    },\n`;
      }
      return [result]; // match オブジェクトと同じ形式で返す
    }
  } catch (error) {
    console.warn('translations 構造からの categories 抽出に失敗:', error);
  }
  
  return null;
}

// スクリプトの実行
main();
