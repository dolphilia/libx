import fsPromises from 'fs/promises';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * JSONファイルを保存
 */
export async function saveJson(filePath, data) {
  try {
    await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`  JSONファイルを保存しました: ${filePath}`);
  } catch (error) {
    console.error(`  JSONファイルの保存中にエラーが発生しました:`, error);
    // エラーを再スローして呼び出し元で処理できるようにする
    throw error;
  }
}

/**
 * ディレクトリを再帰的にコピーする関数
 */
export function copyDirRecursive(src, dest) {
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // ディレクトリ内のファイルとサブディレクトリを取得
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // サブディレクトリの場合は再帰的にコピー
      copyDirRecursive(srcPath, destPath);
    } else {
      // ファイルの場合はコピー
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Markdown/MDX ファイルを解析してフロントマターとコンテンツを取得する関数
 */
export async function parseMarkdownFile(filePath) {
  try {
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    console.error(`Markdownファイルの解析中にエラーが発生しました: ${filePath}`, error);
    // エラーを再スローして呼び出し元で処理できるようにする
    throw error;
  }
}
