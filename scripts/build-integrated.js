#!/usr/bin/env node

/**
 * 統合ビルドスクリプト
 * 
 * このスクリプトは、各アプリケーションのビルド出力を1つのディレクトリに統合します。
 * 1. ルートディレクトリに`dist`フォルダを作成
 * 2. 各アプリケーションをビルド
 * 3. 各アプリケーションのビルド出力をルートの`dist`フォルダにコピー
 * 4. サイドバーJSONファイルを正しい場所にコピー
 * 5. ローカル開発環境用のビルドでは、GitHub Pagesのベースパスを削除
 * 
 * オプション:
 * --local: ローカル開発環境用のビルドを行います。GitHub Pagesのベースパスを削除します。
 * --dry-run: 削除やビルドを行わず、予定されている操作のみを表示します。
 * --confirm: インタラクティブな確認をスキップします。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { copyDirRecursive } from './utils.js';
import * as logger from './logger.js';
import { confirmAction, createBackup } from './safety-utils.js';

logger.useUnifiedConsole();

// コマンドライン引数を解析
const args = process.argv.slice(2);
const isLocalBuild = args.includes('--local');
const isDryRun = args.includes('--dry-run');
const autoConfirm = args.includes('--confirm');

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

/**
 * ビルド対象リストを動的に生成
 * apps/* はドキュメントサイト、sites/* はポータルサイトとして扱う
 */
async function generateBuildTargets() {
  const targets = [];
  const appsDir = path.join(rootDir, 'apps');
  const sitesDir = path.join(rootDir, 'sites');

  try {
    const appEntries = fs.readdirSync(appsDir, { withFileTypes: true }).filter(entry => entry.isDirectory());

    for (const dir of appEntries) {
      const appName = dir.name;

      if (appName === 'project-template') {
        console.log(`⏩ ${appName}はテンプレートプロジェクトのためスキップします`);
        continue;
      }

      const appPath = path.join(appsDir, appName);
      targets.push({
        name: appName,
        packageName: `apps-${appName}`,
        type: 'docs',
        srcDir: path.join(appPath, 'dist'),
        destDir: path.join(distDir, 'docs', appName),
        pathPrefix: `/docs/${appName}`,
        sidebarSrcDir: path.join(appPath, 'public', 'sidebar')
      });
    }
  } catch (error) {
    console.error('apps/ディレクトリのスキャン中にエラーが発生しました:', error);
  }

  if (fs.existsSync(sitesDir)) {
    try {
      const siteEntries = fs.readdirSync(sitesDir, { withFileTypes: true }).filter(entry => entry.isDirectory());

      for (const dir of siteEntries) {
        const siteName = dir.name;
        const sitePath = path.join(sitesDir, siteName);
        const isLanding = siteName === 'landing';

        targets.push({
          name: siteName,
          packageName: `sites-${siteName}`,
          type: 'site',
          srcDir: path.join(sitePath, 'dist'),
          destDir: isLanding ? distDir : path.join(distDir, siteName),
          pathPrefix: isLanding ? '' : `/${siteName}`
        });
      }
    } catch (error) {
      console.error('sites/ディレクトリのスキャン中にエラーが発生しました:', error);
    }
  }

  return targets;
}

// ビルド対象リスト
let buildTargets = [];

/**
 * HTMLファイル内のベースパスを修正する関数
 */
function updateBasePath(filePath, oldBasePath, newBasePath) {
  if (!fs.existsSync(filePath) || !filePath.endsWith('.html')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // ローカルビルドの場合は、ベースパスを削除
  if (isLocalBuild) {
    oldBasePath = '/libx';
    newBasePath = '';
  }
  
  // アセットパスの修正
  content = content.replace(
    new RegExp(`${oldBasePath}/assets/`, 'g'),
    `${newBasePath}/assets/`
  );
  
  // リダイレクト先URLの修正
  // index.htmlのリダイレクト先を修正
  if (filePath.endsWith('index.html')) {
    // リダイレクト時間を修正（数字ではなく言語コードになっている場合がある）
    content = content.replace(
      new RegExp(`content="([a-z]+);url=`, 'g'),
      `content="2;url=`
    );
    
    // リダイレクト先URLを修正
    content = content.replace(
      new RegExp(`content="[0-9]+;url=${oldBasePath}/([v0-9]+)/([a-z]+)/"`, 'g'),
      `content="2;url=${newBasePath}/$1/$2/"`
    );
    
    // リンクのhref属性を修正
    content = content.replace(
      new RegExp(`href="${oldBasePath}/([v0-9]+)/([a-z]+)/"`, 'g'),
      `href="${newBasePath}/$1/$2/"`
    );
    
    // リダイレクトメッセージを修正
    content = content.replace(
      new RegExp(`Redirecting from <code>${oldBasePath}</code> to <code>${oldBasePath}/([v0-9]+)/([a-z]+)/</code>`, 'g'),
      `Redirecting from <code>${newBasePath}</code> to <code>${newBasePath}/$1/$2/</code>`
    );
    
    // 直接HTMLを書き換える（ローカルビルドの場合）
    if (isLocalBuild) {
      // ローカル開発環境用のポート番号（デフォルト: 8080）
      const localPort = process.env.PORT || 8080;
      content = `<!doctype html><title>Redirecting to: /en/</title><meta http-equiv="refresh" content="2;url=/en/"><meta name="robots" content="noindex"><link rel="canonical" href="http://localhost:${localPort}/en/"><body><a href="/en/">Redirecting from <code>/</code> to <code>/en/</code></a></body>`;
    }
    
    // canonical URLを修正
    if (!isLocalBuild) {
      content = content.replace(
        new RegExp(`href="https://libx.dev${oldBasePath}/([v0-9]+)/([a-z]+)/"`, 'g'),
        `href="https://libx.dev${newBasePath}/$1/$2/"`
      );
    } else {
      // ローカル開発環境用のポート番号（デフォルト: 8080）
      const localPort = process.env.PORT || 8080;
      content = content.replace(
        new RegExp(`href="https://libx.dev${oldBasePath}/([v0-9]+)/([a-z]+)/"`, 'g'),
        `href="http://localhost:${localPort}/$1/$2/"`
      );
    }
  }
  
  // その他のパスも必要に応じて修正
  
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
      // サブディレクトリの場合は再帰的に処理
      updateBasePathsRecursive(fullPath, oldBasePath, newBasePath);
    } else if (entry.name.endsWith('.html')) {
      // HTMLファイルの場合はベースパスを修正
      updateBasePath(fullPath, oldBasePath, newBasePath);
    }
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('統合ビルドを開始します...');
  
  if (isLocalBuild) {
    console.log('ローカル開発環境用のビルドを行います...');
  }

  if (isDryRun) {
    logger.dryRun('dry-runモードで実行します。ファイルシステムへの変更は行われません。');
  }

  // アプリケーションリストを動的生成
  buildTargets = await generateBuildTargets();
  console.log('検出されたビルド対象:', buildTargets.map(target => `${target.type}:${target.name}`).join(', '));

  let distBackupPath = null;

  let confirmed = true;
  try {
    confirmed = await confirmAction({
      message: isDryRun
        ? '統合ビルド手順をdry-runで確認します'
        : '既存のdistをバックアップして統合ビルドを実行します',
      autoConfirm,
      dryRun: isDryRun,
      logger
    });
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }

  if (!confirmed) {
    process.exit(0);
  }

  // 既存のdistディレクトリを削除
  if (fs.existsSync(distDir)) {
    if (isDryRun) {
      logger.dryRun(`既存のdistディレクトリを削除する予定です（dry-runのため未実施）: ${distDir}`);
    } else {
      console.log('既存のdistディレクトリをバックアップして削除します...');
      distBackupPath = createBackup(distDir, {
        rootDir,
        scenario: 'build-integrated',
        logger
      });
      fs.rmSync(distDir, { recursive: true, force: true });
    }
  }

  // distディレクトリを作成
  if (isDryRun) {
    logger.dryRun(`統合出力ディレクトリを作成します（dry-runのため未作成）: ${distDir}`);
  } else {
    fs.mkdirSync(distDir, { recursive: true });
  }
  

  // 各アプリケーションをビルド
  for (const target of buildTargets) {
    if (isDryRun) {
      logger.dryRun(`pnpm --filter=${target.packageName} build を実行します（dry-runのため未実行）`);
      continue;
    }

    console.log(`${target.name}をビルドしています...`);
    try {
      execSync(`pnpm --filter=${target.packageName} build`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`${target.name}のビルドに失敗しました:`, error);
      process.exit(1);
    }
  }

  // 各アプリケーションのビルド出力をdistディレクトリにコピー
  for (const target of buildTargets) {
    if (isDryRun) {
      const relativeDest = path.relative(rootDir, target.destDir);
      logger.dryRun(`${target.name}のビルド出力を ${relativeDest || 'dist'} にコピーします（dry-runのため未実施）`);
      if (target.type === 'docs') {
        logger.dryRun(`${target.name}のサイドバーJSONをコピーします（dry-runのため未実施）`);
      }
      if (target.pathPrefix) {
        logger.dryRun(`${target.name}のベースパスを ${target.pathPrefix} に再書き換えます（dry-runのため未実施）`);
      }
      continue;
    }

    console.log(`${target.name}のビルド出力をコピーしています...`);
    
    if (!fs.existsSync(target.srcDir)) {
      console.error(`${target.srcDir}が存在しません。`);
      continue;
    }

    // ディレクトリをコピー
    copyDirRecursive(target.srcDir, target.destDir);

    // サイドバーJSONファイルをコピー（ドキュメントプロジェクトの場合）
    if (target.type === 'docs' && target.sidebarSrcDir) {
      const sidebarSrcDir = target.sidebarSrcDir;
      const sidebarDestDir = path.join(target.destDir, 'sidebar');
      
      if (fs.existsSync(sidebarSrcDir)) {
        console.log(`${target.name}のサイドバーJSONファイルをコピーしています...`);
        if (!fs.existsSync(sidebarDestDir)) {
          fs.mkdirSync(sidebarDestDir, { recursive: true });
        }
        copyDirRecursive(sidebarSrcDir, sidebarDestDir);
        
        const additionalDestDir = path.join(target.destDir, 'pages', 'public', 'sidebar');
        if (!fs.existsSync(additionalDestDir)) {
          fs.mkdirSync(additionalDestDir, { recursive: true });
          console.log(`追加のサイドバーディレクトリを作成しました: ${additionalDestDir}`);
        }
        copyDirRecursive(sidebarSrcDir, additionalDestDir);
        console.log(`追加の場所にもサイドバーJSONファイルをコピーしました: ${additionalDestDir}`);
      } else {
        console.warn(`サイドバーディレクトリが見つかりません: ${sidebarSrcDir}`);
      }
    }
    

    // ベースパスの修正が必要な場合
    if (target.pathPrefix) {
      console.log(`${target.name}のベースパスを修正しています...`);
      let oldBasePath = '/libx'; 
      let newBasePath = '/libx' + target.pathPrefix; 
      
      if (isLocalBuild) {
        console.log(`ローカル開発環境用にベースパスを削除します...`);
        oldBasePath = '/libx';
        newBasePath = '';
      }
      
      updateBasePathsRecursive(target.destDir, oldBasePath, newBasePath);
    }
  }


  console.log('統合ビルドが完了しました。');

  if (!isDryRun && distBackupPath) {
    const distRelative = path.relative(rootDir, distDir) || 'dist';
    const backupRelative = path.relative(rootDir, distBackupPath);
    logger.info(`ロールバック手順: rm -rf ${distRelative} && cp -R ${backupRelative} ${distRelative}`);
  }

  if (isDryRun) {
    logger.dryRun('dry-runが完了しました。dist ディレクトリは変更されていません。');
  }
}

main().catch(error => {
  console.error('統合ビルド中にエラーが発生しました:', error);
  process.exit(1);
});
