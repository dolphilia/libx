/**
 * サイドバー自動生成ユーティリティ
 */
import type { LocaleKey } from '@docs/i18n/locales';
import { resolveProjectDir, getCategoryTranslationsAsync } from '@docs/project-config';
import { buildDocumentPath, type ContentOptions } from './content-utils';

export type SidebarItem = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

export interface SidebarOptions extends ContentOptions {
  cacheTtlMs?: number;
}

type SidebarCacheEntry = {
  data: SidebarItem[];
  timestamp: number;
};

// sidebarConfigsの手動設定は廃止しました
// 現在はファイルシステムからサイドバーを自動生成しています

// サイドバーキャッシュ
const sidebarCache = new Map<string, Map<string, SidebarCacheEntry>>();

// キャッシュの有効期限（5分）
const DEFAULT_CACHE_TTL = 5 * 60 * 1000;

// キャッシュキーの生成
function generateCacheKey(lang: LocaleKey, version: string): string {
  return `${lang}-${version}`;
}

function getProjectCache(projectDir: string): Map<string, SidebarCacheEntry> {
  if (!sidebarCache.has(projectDir)) {
    sidebarCache.set(projectDir, new Map());
  }
  return sidebarCache.get(projectDir)!;
}

// キャッシュの有効性チェック
function isCacheValid(entry: SidebarCacheEntry, ttl: number): boolean {
  return Date.now() - entry.timestamp < ttl;
}

/**
 * カテゴリ名を翻訳します
 */
async function translateCategory(
  category: string,
  lang: LocaleKey,
  options?: SidebarOptions
): Promise<string> {
  const translations = await getCategoryTranslationsAsync(options?.projectDir);

  if (translations?.[lang]?.[category]) {
    return translations[lang][category];
  }

  // フォールバック: 英語の翻訳があればそれを使用
  if (translations?.en?.[category]) {
    return translations.en[category];
  }

  // 最終フォールバック: カテゴリ名の先頭を大文字にして返す
  return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * フォールバック用の最小限のサイドバー項目を生成します
 */
async function getFallbackSidebar(
  lang: LocaleKey,
  version: string,
  baseUrl: string,
  options?: SidebarOptions
): Promise<SidebarItem[]> {
  return [
    {
      title: await translateCategory('guide', lang, options),
      items: [
        {
          title: await translateCategory('getting_started', lang, options),
          href: `${baseUrl}${buildDocumentPath(version, lang, ['guide', '01-getting-started'], options)}`
        }
      ]
    }
  ];
}

/**
 * ファイル名から順序番号を抽出します
 * @param filename ファイル名（例: "01-getting-started.mdx"）
 * @returns 順序番号（例: 1）、見つからない場合は999
 */
function extractOrderFromFilename(filename: string): number {
  const match = filename.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * ディレクトリ名から順序番号を抽出します
 * @param dirname ディレクトリ名（例: "01-guide"）
 * @returns 順序番号（例: 1）、見つからない場合は999
 */
function extractOrderFromDirectoryName(dirname: string): number {
  const match = dirname.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * ディレクトリ構造とファイル名から自動生成されるサイドバー項目を取得します
 * この関数はgetCollectionを使用するため、非同期関数です
 */
export async function getAutoSidebar(
  lang: LocaleKey,
  version: string,
  baseUrl: string,
  options?: SidebarOptions
): Promise<SidebarItem[]> {
  // Astroのコンテンツコレクションを使用するため、動的インポートを使用
  const { getCollection } = await import('astro:content');

  const docs = await getCollection('docs', entry => {
    return entry.slug.startsWith(`${version}/${lang}/`);
  });

  // カテゴリごとにドキュメントを整理
  const categories: Record<string, {
    docs: any[];
    order: number;
    title?: string;
  }> = {};

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
        order,
        title: undefined
      };
    }

    // カテゴリの順序を更新
    if (order < categories[category].order) {
      categories[category].order = order;
    }

    categories[category].docs.push(doc);
  });

  // カテゴリごとにドキュメントをファイル名の番号順で並べ替え
  Object.keys(categories).forEach(category => {
    categories[category].docs.sort((a, b) => {
      // ファイル名から順序を抽出
      const filenameA = a.slug.split('/').pop() || '';
      const filenameB = b.slug.split('/').pop() || '';

      const orderA = extractOrderFromFilename(filenameA);
      const orderB = extractOrderFromFilename(filenameB);

      return orderA - orderB;
    });
  });

  // カテゴリを順序で並べ替え
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    return a[1].order - b[1].order;
  });

  // サイドバー項目の生成
  return Promise.all(sortedCategories.map(async ([category, { docs }]) => {
    // カテゴリ名を翻訳
    const title = await translateCategory(category, lang, options);

    return {
      title,
      items: docs.map(doc => {
        // 実際のファイルパスからURLを構築
        const filePathParts = doc.id.split('/');
        const fileName = filePathParts[filePathParts.length - 1].replace(/\.mdx?$/, ''); // .mdx拡張子を削除
        const pathWithoutFile = filePathParts.slice(2, -1); // 言語、バージョンを除き、ファイル名も除く

        const finalPath = [...pathWithoutFile, fileName].join('/');

        return {
          title: doc.data.title,
          href: `${baseUrl}${buildDocumentPath(version, lang, finalPath, options)}`
        };
      })
    };
  }));
}

/**
 * 非同期でサイドバー項目を取得します
 * 自動生成機能に切り替えました
 */
export async function getSidebarAsync(
  lang: LocaleKey,
  version: string,
  baseUrl: string,
  options?: SidebarOptions
): Promise<SidebarItem[]> {
  const projectDir = resolveProjectDir(options?.projectDir);
  const cacheTtl = options?.cacheTtlMs ?? DEFAULT_CACHE_TTL;
  const cacheKey = generateCacheKey(lang, version);
  const projectCache = getProjectCache(projectDir);

  // キャッシュをチェック
  const cachedData = projectCache.get(cacheKey);
  if (cachedData && isCacheValid(cachedData, cacheTtl)) {
    return cachedData.data;
  }

  try {
    // 自動生成サイドバーを使用
    const data = await getAutoSidebar(lang, version, baseUrl, options);

    // キャッシュに保存
    projectCache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });

    return data;
  } catch (error) {
    // フォールバック: 最小限のサイドバーを返す
    const fallbackSidebar = await getFallbackSidebar(lang, version, baseUrl, options);

    // フォールバックサイドバーもキャッシュに保存
    projectCache.set(cacheKey, {
      data: fallbackSidebar,
      timestamp: Date.now()
    });

    return fallbackSidebar;
  }
}
