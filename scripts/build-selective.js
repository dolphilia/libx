#!/usr/bin/env node

/**
 * 選択的統合ビルドスクリプト
 *
 * このスクリプトは、指定されたプロジェクトのみをビルドして統合します。
 * 既存のdist/内容を保持し、指定されたプロジェクトの部分のみを更新します。
 *
 * 使用方法:
 * node scripts/build-selective.js --projects=sample-docs,test-verification
 * node scripts/build-selective.js --projects=landing
 *
 * オプション:
 * --projects: ビルド対象プロジェクトをカンマ区切りで指定
 * --local: ローカル開発環境用のビルドを行います（ベースパス削除）
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { copyDirRecursive } from './utils.js';
import { collectReservedRootNames, integrateSelectiveOutputs } from './selective-output.js';
import { rewriteBasePathInHtml } from './html-url-rewriter.js';
import * as logger from './logger.js';
import { pruneUnreferencedJavaScriptAssets } from './prune-unreferenced-javascript-assets.js';

logger.useUnifiedConsole();

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// コマンドライン引数を解析
const args = process.argv.slice(2);
const isLocalBuild = args.includes('--local');

/**
 * コマンドライン引数からプロジェクト一覧を解析
 */
function parseProjectsFromArgs(args) {
  const projectsArg = args.find((arg) => arg.startsWith('--projects='));
  if (!projectsArg) {
    console.error('エラー: --projects パラメータが指定されていません。');
    console.error('使用方法: node build-selective.js --projects=project1,project2');
    process.exit(1);
  }

  const projectsStr = projectsArg.split('=')[1];
  if (!projectsStr) {
    console.error('エラー: --projects パラメータに値が指定されていません。');
    process.exit(1);
  }

  return projectsStr
    .split(',')
    .map((p) => p.trim())
    .filter((p) => p);
}

/**
 * ビルド対象を列挙（apps/* は docs、sites/* は portals）
 */
function collectBuildTargets() {
  const appsDir = path.join(rootDir, 'apps');
  const sitesDir = path.join(rootDir, 'sites');
  const targets = new Map();

  try {
    const entries = fs
      .readdirSync(appsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory());

    for (const dir of entries) {
      const appName = dir.name;
      const appPath = path.join(appsDir, appName);
      targets.set(appName, {
        name: appName,
        type: 'docs',
        packageName: `apps-${appName}`,
        srcDir: path.join(appPath, 'dist'),
        outputPath: path.join('docs', appName),
        pathPrefix: `/docs/${appName}`,
        sidebarSrcDir: path.join(appPath, 'public', 'sidebar'),
      });
    }
  } catch (error) {
    console.error('プロジェクト検出中にエラーが発生しました:', error);
  }

  if (fs.existsSync(sitesDir)) {
    try {
      const siteEntries = fs
        .readdirSync(sitesDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory());

      for (const dir of siteEntries) {
        const siteName = dir.name;
        const sitePath = path.join(sitesDir, siteName);
        const isLanding = siteName === 'landing';

        targets.set(siteName, {
          name: siteName,
          type: 'site',
          packageName: `sites-${siteName}`,
          srcDir: path.join(sitePath, 'dist'),
          outputPath: isLanding ? '.' : siteName,
          isLanding,
          pathPrefix: isLanding ? '' : `/${siteName}`,
        });
      }
    } catch (error) {
      console.error('サイト検出中にエラーが発生しました:', error);
    }
  }

  return targets;
}

/**
 * 指定されたプロジェクトの存在を検証
 */
async function validateProjects(requestedProjects, availableProjects) {
  const invalidProjects = requestedProjects.filter((p) => !availableProjects.includes(p));

  if (invalidProjects.length > 0) {
    console.error('エラー: 以下のプロジェクトが見つかりません:');
    invalidProjects.forEach((p) => console.error(`  - ${p}`));
    console.error('\n利用可能なプロジェクト:');
    availableProjects.forEach((p) => console.error(`  - ${p}`));
    process.exit(1);
  }
}

/**
 * HTMLファイル内のベースパスを修正する関数（既存のコードから流用）
 */
function updateBasePath(filePath, oldBasePath, newBasePath) {
  if (!fs.existsSync(filePath) || !filePath.endsWith('.html')) {
    return;
  }

  const content = rewriteBasePathInHtml(fs.readFileSync(filePath, 'utf8'), {
    oldBasePath: isLocalBuild ? '/libx' : oldBasePath,
    newBasePath: isLocalBuild ? '' : newBasePath,
    isIndex: filePath.endsWith('index.html'),
    isLocalBuild,
    localPort: process.env.PORT || 8080,
  });
  fs.writeFileSync(filePath, content, 'utf8');
}

/**
 * ディレクトリ内のHTMLファイルのベースパスを再帰的に修正する関数
 */
function updateBasePathsRecursive(dir, oldBasePath, newBasePath) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updateBasePathsRecursive(fullPath, oldBasePath, newBasePath);
    } else if (entry.name.endsWith('.html')) {
      updateBasePath(fullPath, oldBasePath, newBasePath);
    }
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('選択的統合ビルドを開始します...');

  if (isLocalBuild) {
    console.log('ローカル開発環境用のビルドを行います...');
  }

  // コマンドライン引数から対象プロジェクトを取得
  const requestedProjects = parseProjectsFromArgs(args);
  console.log('指定されたプロジェクト:', requestedProjects.join(', '));

  // 利用可能なプロジェクトを取得して検証
  const availableTargets = collectBuildTargets();
  await validateProjects(requestedProjects, Array.from(availableTargets.keys()));

  // distディレクトリが存在しない場合は作成
  if (!fs.existsSync(distDir)) {
    console.log('distディレクトリが存在しないため作成します...');
    fs.mkdirSync(distDir, { recursive: true });
  }

  // プロジェクト設定を生成
  const projectConfigs = requestedProjects.map((name) => {
    const config = availableTargets.get(name);
    if (!config) {
      throw new Error(`内部エラー: ${name} の設定が取得できませんでした`);
    }
    return config;
  });

  // 各プロジェクトを個別にビルド
  for (const config of projectConfigs) {
    console.log(`${config.name} をビルドしています...`);
    try {
      execSync(`pnpm --filter=${config.packageName} build`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`${config.name} のビルドに失敗しました:`, error);
      process.exit(1);
    }
  }

  // 現在のdistをステージへ複製し、全対象の準備成功後に一括で置換する。
  // landingはdist直下を所有するが、docs/と他サイトのルートは変更しない。
  const reservedRootNames = collectReservedRootNames(availableTargets.values());

  try {
    integrateSelectiveOutputs({
      distDirectory: distDir,
      targets: projectConfigs,
      reservedRootNames,
      prepareTarget(config, stagedDestination) {
        console.log(`${config.name} のビルド出力をステージへ統合しています...`);

        // サイドバーJSONファイルをコピー（ドキュメントプロジェクトの場合）
        if (config.type === 'docs' && config.sidebarSrcDir) {
          const sidebarSrcDir = config.sidebarSrcDir;
          const sidebarDestDir = path.join(stagedDestination, 'sidebar');

          if (fs.existsSync(sidebarSrcDir)) {
            console.log(`${config.name} のサイドバーJSONファイルをコピーしています...`);
            fs.mkdirSync(sidebarDestDir, { recursive: true });
            copyDirRecursive(sidebarSrcDir, sidebarDestDir);
          } else {
            console.warn(`サイドバーディレクトリが見つかりません: ${sidebarSrcDir}`);
          }
        }

        // ベースパスの修正は公開中のdistではなくステージ上だけで行う。
        if (config.pathPrefix) {
          console.log(`${config.name} のベースパスを修正しています...`);
          let oldBasePath = '/libx';
          let newBasePath = '/libx' + config.pathPrefix;

          if (isLocalBuild) {
            oldBasePath = '/libx';
            newBasePath = '';
          }

          updateBasePathsRecursive(stagedDestination, oldBasePath, newBasePath);
        }
      },
    });
  } catch (error) {
    console.error('選択した出力の統合に失敗しました。既存のdistは維持されます:', error);
    process.exit(1);
  }

  const pruneReport = await pruneUnreferencedJavaScriptAssets(distDir, { apply: true });
  console.log(
    `未参照JavaScriptを削除しました: ${pruneReport.unreferenced.length}件 ` +
      `(${(pruneReport.removableBytes / 1024 / 1024).toFixed(2)} MiB)`
  );

  console.log('選択的統合ビルドが完了しました。');
  console.log(`処理したプロジェクト: ${requestedProjects.join(', ')}`);
}

main().catch((error) => {
  console.error('選択的ビルド中にエラーが発生しました:', error);
  process.exit(1);
});
