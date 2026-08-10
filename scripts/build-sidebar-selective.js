#!/usr/bin/env node

/**
 * 選択的サイドバー生成スクリプト
 *
 * このスクリプトは、指定されたプロジェクトのサイドバーのみを生成します。
 * 既存のサイドバーファイルを保持し、指定されたプロジェクトの分のみを更新します。
 *
 * 使用方法:
 * node scripts/build-sidebar-selective.js --projects=sample-docs,test-verification
 * node scripts/build-sidebar-selective.js --projects=sample-docs
 * node scripts/build-sidebar-selective.js --templates=docs-site
 *
 * オプション:
 * --projects: サイドバー生成対象プロジェクトをカンマ区切りで指定
 * --templates: サイドバー生成対象テンプレートをカンマ区切りで指定
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
  resolveSupportedLangs as resolveRepoSupportedLangs,
} from './global-defaults.js';

logger.useUnifiedConsole();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 基本設定
const config = {
  appsDir: path.join(rootDir, 'apps'),
  templatesDir: path.join(rootDir, 'templates'),
};

/**
 * コマンドライン引数からプロジェクト一覧を解析
 */
function parseTargetsFromArgs(args) {
  const projectsArg = args.find((arg) => arg.startsWith('--projects='));
  const templatesArg = args.find((arg) => arg.startsWith('--templates='));
  if ((!projectsArg && !templatesArg) || (projectsArg && templatesArg)) {
    console.error('エラー: --projects または --templates のどちらか一方を指定してください。');
    console.error('使用方法: node build-sidebar-selective.js --projects=project1,project2');
    console.error('          node build-sidebar-selective.js --templates=docs-site');
    process.exit(1);
  }

  const argument = projectsArg ?? templatesArg;
  const targetsValue = argument.split('=')[1];
  if (!targetsValue) {
    console.error('エラー: 対象名が指定されていません。');
    process.exit(1);
  }

  return {
    names: targetsValue
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean),
    baseDir: projectsArg ? config.appsDir : config.templatesDir,
    label: projectsArg ? 'プロジェクト' : 'テンプレート',
  };
}

/**
 * appsディレクトリから利用可能なプロジェクト一覧を取得
 */
async function getAvailableProjects(baseDir) {
  const projects = [];

  try {
    const entries = await fs.readdir(baseDir, { withFileTypes: true });
    const appDirs = entries.filter((entry) => entry.isDirectory());

    for (const dir of appDirs) {
      const appName = dir.name;
      const projectPath = path.join(baseDir, appName);
      const contentPath = path.join(projectPath, 'src', 'content', 'docs');

      try {
        await fs.access(contentPath);
        projects.push(appName);
      } catch (error) {
        // ドキュメントディレクトリがない場合はスキップ
        continue;
      }
    }
  } catch (error) {
    console.error('プロジェクト検出中にエラーが発生しました:', error);
  }

  return projects;
}

/**
 * 指定されたプロジェクトの存在を検証
 */
async function validateProjects(requestedProjects, availableProjects, label) {
  const invalidProjects = requestedProjects.filter((p) => !availableProjects.includes(p));

  if (invalidProjects.length > 0) {
    console.error(`エラー: 以下の${label}が見つからないか、ドキュメントサイトではありません:`);
    invalidProjects.forEach((p) => console.error(`  - ${p}`));
    console.error(`\n利用可能なドキュメント${label}:`);
    availableProjects.forEach((p) => console.error(`  - ${p}`));
    process.exit(1);
  }
}

/**
 * 指定されたプロジェクトのプロジェクト情報を取得
 */
async function getProjectInfo(projectName, baseDir) {
  const projectPath = path.join(baseDir, projectName);
  const contentPath = path.join(projectPath, 'src', 'content', 'docs');

  // バージョンディレクトリを検出
  const versions = await detectVersions(contentPath);

  if (versions.length === 0) {
    console.warn(`${projectName} にバージョンディレクトリが見つかりませんでした。`);
    return null;
  }

  // バージョンごとに言語ディレクトリを検出
  const { validVersions, languagesByVersion, allDetectedLanguages } =
    await detectLanguagesByVersion(projectName, contentPath, versions);
  if (validVersions.length === 0) {
    console.warn(`${projectName} に言語ディレクトリが見つかりませんでした。`);
    return null;
  }

  const expectedLanguages = await getSupportedLanguages(projectPath);
  if (expectedLanguages && expectedLanguages.length > 0) {
    const projectLevelMissing = expectedLanguages.filter(
      (lang) => !allDetectedLanguages.includes(lang)
    );
    if (projectLevelMissing.length > 0) {
      console.warn(
        `  ${projectName} で以下の言語がいずれのバージョンでも検出できませんでした: ${projectLevelMissing.join(', ')}`
      );
    }
  }

  // 出力ディレクトリを設定
  const outputDir = path.join(projectPath, 'public', 'sidebar');

  return {
    name: projectName,
    path: projectPath,
    contentPath,
    outputDir,
    languages: allDetectedLanguages,
    versions: validVersions,
    languagesByVersion,
    expectedLanguages,
  };
}

/**
 * ドキュメントディレクトリ内のバージョンディレクトリを検出する
 */
async function detectVersions(contentPath) {
  try {
    const entries = await fs.readdir(contentPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
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
    return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  } catch (error) {
    console.error('言語ディレクトリの検出中にエラーが発生しました:', error);
    return [];
  }
}

/**
 * バージョンごとに言語ディレクトリを検出し、マッピングを返す
 */
async function detectLanguagesByVersion(projectName, contentPath, versions) {
  const languagesByVersion = {};
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
    new Set(validVersions.flatMap((version) => languagesByVersion[version]))
  ).sort();

  return { validVersions, languagesByVersion, allDetectedLanguages };
}

/**
 * プロジェクト設定から対応言語を読み取る
 */
async function getSupportedLanguages(projectPath) {
  const configDir = path.join(projectPath, 'src', 'config');
  const configPath = path.join(configDir, 'project.config.jsonc');
  try {
    const parsed = await readJsoncFileAsync(configPath);
    const langs = parsed?.language?.supported;
    return resolveRepoSupportedLangs(Array.isArray(langs) ? langs : undefined);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`  プロジェクト設定の読み込みに失敗しました (${configPath}): ${error.message}`);
    }
  }
  return null;
}

/**
 * ディレクトリ名から順序番号を抽出します
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

      // スラグを生成
      const slug = file.replace(/\.[^.]+$/, '');

      docs.push({
        slug,
        data,
      });
    } catch (error) {
      console.warn(`ファイルの処理中にエラーが発生しました: ${file}`, error);
    }
  }

  // カテゴリごとにドキュメントを整理
  const categories = {};

  docs.forEach((doc) => {
    const parts = doc.slug.split('/');
    const pathCategory = parts.length >= 3 ? parts[2] : 'uncategorized';

    const cleanCategory = pathCategory.replace(/^\d+-/, '');
    const category = doc.data.category || cleanCategory;

    const categoryDirName = parts[2] || 'uncategorized';
    const order = extractOrderFromDirectoryName(categoryDirName);

    if (!categories[category]) {
      categories[category] = {
        docs: [],
        order: order,
        title: undefined,
      };
    }

    if (order < categories[category].order) {
      categories[category].order = order;
    }

    categories[category].docs.push(doc);
  });

  // カテゴリごとにドキュメントを順序で並べ替え
  Object.keys(categories).forEach((category) => {
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
    const title = translateCategory(category, lang, categoryTranslations);

    return {
      title,
      items: docs.map((doc) => {
        const slugParts = doc.slug.split('/').slice(2);
        let fullPath;
        if (baseUrl === '/') {
          fullPath = `/${version}/${lang}/${slugParts.join('/')}`;
        } else {
          fullPath = `${baseUrl}/${version}/${lang}/${slugParts.join('/')}`;
        }
        return {
          title: doc.data.title,
          href: fullPath,
        };
      }),
    };
  });
}

/**
 * プロジェクト設定からカテゴリ翻訳を取得する
 */
async function getProjectCategoryTranslations(project) {
  try {
    const configPath = path.join(project.path, 'src', 'config', 'project.config.jsonc');
    const projectConfig = await readJsoncFileAsync(configPath);
    return Object.fromEntries(
      Object.entries(projectConfig.translations ?? {}).map(([lang, translation]) => [
        lang,
        translation.categories ?? {},
      ])
    );
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(
        `  プロジェクト ${project.name} の翻訳設定の読み込み中にエラー: ${error.message}`
      );
    }
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

  if (translations && translations['en'] && translations['en'][category]) {
    return translations['en'][category];
  }

  return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * プロジェクト固有のベースURLを取得する
 */
async function getProjectBaseUrl(project) {
  const configDir = path.join(project.path, 'src', 'config');
  const configPath = path.join(configDir, 'project.config.jsonc');

  let configuredBaseUrl = '';
  let configuredPrefix = '';
  let configuredSlug = '';
  try {
    const parsed = await readJsoncFileAsync(configPath);
    const pathConfig = parsed?.paths ?? {};
    configuredBaseUrl = pathConfig.baseUrl || '';
    configuredPrefix = pathConfig.baseUrlPrefix || '';
    configuredSlug = pathConfig.projectSlug || '';
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`  プロジェクト ${project.name} の設定読み込み中にエラー: ${error.message}`);
    }
  }

  return resolveRepoBaseUrl({
    baseUrl: configuredBaseUrl,
    baseUrlPrefix: configuredPrefix,
    projectSlug: configuredSlug,
    projectName: project.name,
  });
}

/**
 * メイン処理
 */
async function main() {
  try {
    console.log('選択的サイドバー生成を開始します...');

    // コマンドライン引数から対象プロジェクトを取得
    const args = process.argv.slice(2);
    const request = parseTargetsFromArgs(args);
    console.log(`指定された${request.label}:`, request.names.join(', '));

    // 利用可能なプロジェクトを取得して検証
    const availableProjects = await getAvailableProjects(request.baseDir);
    await validateProjects(request.names, availableProjects, request.label);

    // 各プロジェクトの処理
    for (const projectName of request.names) {
      console.log(`${request.label} ${projectName} の処理を開始します...`);

      const project = await getProjectInfo(projectName, request.baseDir);
      if (!project) {
        console.warn(`${request.label} ${projectName} をスキップします`);
        continue;
      }

      // 全組合せを一時ディレクトリへ生成し、成功後にだけ置換する。
      const preparedOutputDir = `${project.outputDir}.prepared-${process.pid}`;
      const previousOutputDir = `${project.outputDir}.previous-${process.pid}`;
      await fs.rm(preparedOutputDir, { recursive: true, force: true });
      await fs.rm(previousOutputDir, { recursive: true, force: true });
      await fs.mkdir(preparedOutputDir, { recursive: true });

      // 言語とバージョンの組み合わせごとにサイドバーを生成
      for (const version of project.versions) {
        const languagesForVersion = project.languagesByVersion[version] || [];
        if (languagesForVersion.length === 0) {
          console.warn(
            `  ${version} で対応言語が検出できなかったため、サイドバー生成をスキップします。`
          );
          continue;
        }

        const expectedLanguages = project.expectedLanguages ?? project.languages;
        const missingLanguages = expectedLanguages.filter(
          (lang) => !languagesForVersion.includes(lang)
        );
        if (missingLanguages.length > 0) {
          console.log(
            `  ${version} では以下の言語ディレクトリが見つからなかったため出力対象から除外します: ${missingLanguages.join(', ')}`
          );
        }

        for (const lang of languagesForVersion) {
          console.log(`  ${lang}/${version} のサイドバーを生成中...`);

          const sidebar = await generateSidebarForVersion(project, lang, version);
          const outputPath = path.join(preparedOutputDir, `sidebar-${lang}-${version}.json`);
          await saveCompressedJson(outputPath, sidebar);
        }
      }

      try {
        await fs.rename(project.outputDir, previousOutputDir).catch((error) => {
          if (error.code !== 'ENOENT') throw error;
        });
        await fs.rename(preparedOutputDir, project.outputDir);
        await fs.rm(previousOutputDir, { recursive: true, force: true });
      } catch (error) {
        await fs.rm(preparedOutputDir, { recursive: true, force: true });
        try {
          await fs.access(previousOutputDir);
          await fs.rm(project.outputDir, { recursive: true, force: true });
          await fs.rename(previousOutputDir, project.outputDir);
        } catch {
          // 置換前に失敗した場合は既存出力がそのまま残る。
        }
        throw error;
      }
    }

    console.log('選択的サイドバー生成が完了しました');
    console.log(`処理した${request.label}: ${request.names.join(', ')}`);
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

// スクリプトの実行
main();
