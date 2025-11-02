/**
 * MDXリンク変換プラグイン
 * 
 * このプラグインは、MDXファイル内のリンクを以下のように変換します：
 * 1. 相対リンク: 同じディレクトリ内のファイルへのリンクを正しいパスに変換
 * 2. プロジェクト内絶対パス: /v1/ja/... のようなパスにベースパスを追加
 * 3. その他の絶対パス: /01-guide/... のようなパスに言語・バージョンとベースパスを追加
 */

import { visit } from 'unist-util-visit';
import path from 'path';

function composeDocumentPath(pattern, version, lang, relativePath) {
  const cleanedRelative = relativePath
    ? relativePath.split('/').map(segment => segment.trim()).filter(segment => segment.length > 0)
    : [];

  const prefixSegments =
    pattern === 'locale-first'
      ? [lang, version]
      : [version, lang];

  const segments = [...prefixSegments, ...cleanedRelative];
  if (segments.length === 0) {
    return '/';
  }

  return '/' + segments.join('/');
}

export function remarkLinkTransformer(options = {}) {
  const {
    baseUrl = '/docs/sample-docs',
    pathPattern = 'version-first'
  } = options;

  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const versionFirstPattern = /^\/v[0-9.]+\/[a-z-]+(\/|$)/;
  const localeFirstPattern = /^\/[a-z-]+\/v[0-9.]+(\/|$)/;
  
  return function transformer(tree, file) {
    // ファイルパスから現在の位置情報を取得
    const filePath = file.history[0] || '';
    const relativePath = path.relative(process.cwd(), filePath);
    
    // content/docs/[version]/[lang]/... の形式からパラメータを抽出
    const pathMatch = relativePath.match(/content\/docs\/([v0-9.]+)\/([a-z-]+)\/(.+)\.mdx?$/);
    if (!pathMatch) {
      // パスが期待される形式でない場合はスキップ
      return;
    }
    
    const [, version, lang, currentPath] = pathMatch;
    const currentDir = path.dirname(currentPath);
    
    visit(tree, 'link', (node) => {
      const url = node.url;
      
      // 外部URLやアンカーリンクはスキップ
      if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
        return;
      }
      
      // 1. 相対リンクの処理 (例: "02-creating-documents" or "./02-creating-documents")
      if (!url.startsWith('/')) {
        // ./ プレフィックスを削除
        let targetFile = url.replace(/^\.\//, '');
        
        // 同じディレクトリ内のファイルへのリンクを構築
        // currentDirが '01-guide' で targetFileが '01-getting-started' の場合
        // '/docs/libx-docs/v1/ja/01-guide/01-getting-started' になる
        let targetPath;
        if (currentDir === '.') {
          // ルートレベルの場合
          targetPath = targetFile;
        } else {
          // サブディレクトリの場合、同じディレクトリ内のファイルを指す
          targetPath = `${currentDir}/${targetFile}`;
        }
        
        // 最終的なURLを構築（パターンに応じた順序）
        const docPath = composeDocumentPath(pathPattern, version, lang, targetPath);
        node.url = `${normalizedBase}${docPath}` || docPath;
        if (!node.url.startsWith('/')) {
          node.url = `/${node.url}`;
        }
        
        console.log(`[Link Transform] 相対リンク変換: ${url} → ${node.url}`);
        return;
      }
      
      // 2. プロジェクト内絶対パスの処理 (例: "/v1/ja/..." または "/ja/v1/...")
      if (versionFirstPattern.test(url)) {
        if (normalizedBase && !url.startsWith(normalizedBase)) {
          node.url = `${normalizedBase}${url}`;
          console.log(`[Link Transform] プロジェクト内絶対パス変換: ${url} → ${node.url}`);
        } else if (!normalizedBase) {
          node.url = url;
        }
        return;
      }

      if (localeFirstPattern.test(url)) {
        const localeMatch = url.match(/^\/([a-z-]+)\/(v[0-9.]+)\/?(.*)$/i);
        if (!localeMatch) {
          return;
        }
        const [, targetLang, targetVersion, restPath = ''] = localeMatch;

        if (pathPattern === 'locale-first') {
          if (normalizedBase && !url.startsWith(normalizedBase)) {
            node.url = `${normalizedBase}${url}`;
          } else if (!normalizedBase) {
            node.url = url;
          }
          console.log(`[Link Transform] ロケール先頭パス保持: ${url} → ${node.url}`);
          return;
        }

        const cleanedRest = restPath.replace(/^\/+/, '');
        const docPath = composeDocumentPath(pathPattern, targetVersion, targetLang, cleanedRest);
        node.url = `${normalizedBase}${docPath}` || docPath;
        if (!node.url.startsWith('/')) {
          node.url = `/${node.url}`;
        }
        console.log(`[Link Transform] ロケール先頭パス変換: ${url} → ${node.url}`);
        return;
      }
      
      // 3. その他の絶対パス (例: "/01-guide/01-getting-started") 
      // これは現在の言語とバージョンを使用して変換
      if (url.startsWith('/') && !(normalizedBase && url.startsWith(normalizedBase))) {
        const relative = url.replace(/^\/+/, '');
        const docPath = composeDocumentPath(pathPattern, version, lang, relative);
        node.url = `${normalizedBase}${docPath}` || docPath;
        if (!node.url.startsWith('/')) {
          node.url = `/${node.url}`;
        }
        console.log(`[Link Transform] 言語・バージョン補完: ${url} → ${node.url}`);
        return;
      }
    });
  };
}

export default remarkLinkTransformer;
