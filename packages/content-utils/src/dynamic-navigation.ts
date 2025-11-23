/**
 * ファイルベースで動的に最新バージョンと最初のページを特定するユーティリティ
 */

import { getCollection } from 'astro:content';
import type { LocaleKey } from '@docs/i18n/locales';
import { getLegacyProjectConfig } from '@docs/project-config';
import type { ContentOptions } from './content-utils';

export interface NavigationOptions extends ContentOptions {
  /**
   * ルーティングのパターン
   * `version-first`: /v1/ja/guide
   * `locale-first`: /ja/v1/guide
   */
  pathPattern?: 'version-first' | 'locale-first';
}

const VERSION_PATTERN = /^v\d+$/i;

function parseSlugParts(slug: string, supportedLangs: LocaleKey[]): {
  version?: string;
  lang?: LocaleKey;
  rest: string[];
} {
  const parts = slug.split('/');
  if (parts.length < 2) {
    return { rest: parts };
  }

  const [first, second] = parts;
  const matchesVersionFirst = VERSION_PATTERN.test(first);
  const matchesVersionSecond = VERSION_PATTERN.test(second);

  if (matchesVersionFirst) {
    const langCandidate = second as LocaleKey;
    return {
      version: first,
      lang: langCandidate,
      rest: parts.slice(2)
    };
  }

  if (matchesVersionSecond) {
    const langCandidate = first as LocaleKey;
    return {
      version: second,
      lang: langCandidate,
      rest: parts.slice(2)
    };
  }

  // フォールバック: supportedLangs を頼りに位置を推測
  if (supportedLangs.includes(first as LocaleKey)) {
    return {
      version: VERSION_PATTERN.test(second) ? second : undefined,
      lang: first as LocaleKey,
      rest: parts.slice(2)
    };
  }

  if (supportedLangs.includes(second as LocaleKey) && VERSION_PATTERN.test(first)) {
    return {
      version: first,
      lang: second as LocaleKey,
      rest: parts.slice(2)
    };
  }

  return { rest: parts };
}

/**
 * 利用可能なバージョンを取得し、最新のものを特定
 */
export async function getLatestVersion(lang: LocaleKey, options?: NavigationOptions): Promise<string> {
  const docs = await getCollection('docs');
  const config = await getLegacyProjectConfig(options?.projectDir);
  const supportedLangs = config.language.supported;

  const langDocs = docs.filter(entry => {
    const { lang: entryLang } = parseSlugParts(entry.slug, supportedLangs);
    return entryLang === lang;
  });

  const versions = Array.from(
    new Set(
      langDocs
        .map(entry => parseSlugParts(entry.slug, supportedLangs).version)
        .filter((version): version is string => Boolean(version) && VERSION_PATTERN.test(version))
    )
  );

  versions.sort((a, b) => {
    const numA = parseInt(a.replace('v', ''), 10);
    const numB = parseInt(b.replace('v', ''), 10);
    return numB - numA; // 降順
  });

  return versions[0] || config.versioning.versions[0]?.id || 'v1';
}

/**
 * 指定した言語・バージョンの最初のページを特定
 */
export async function getFirstPage(
  lang: LocaleKey,
  version: string,
  options?: NavigationOptions
): Promise<string | null> {
  const docs = await getCollection('docs');
  const config = await getLegacyProjectConfig(options?.projectDir);
  const supportedLangs = config.language.supported;

  const versionDocs = docs.filter(entry => {
    const { lang: entryLang, version: entryVersion } = parseSlugParts(entry.slug, supportedLangs);
    return entryLang === lang && entryVersion === version;
  });

  if (versionDocs.length === 0) {
    return null;
  }

  versionDocs.sort((a, b) => {
    const restA = parseSlugParts(a.slug, supportedLangs).rest.join('/');
    const restB = parseSlugParts(b.slug, supportedLangs).rest.join('/');
    return restA.localeCompare(restB);
  });

  const firstDoc = versionDocs[0];
  const { rest } = parseSlugParts(firstDoc.slug, supportedLangs);
  return rest.length ? `/${rest.join('/')}` : null;
}

/**
 * 動的に決定されたリダイレクト先URLを生成
 */
export async function generateRedirectUrl(
  lang: LocaleKey,
  baseUrl: string,
  options?: NavigationOptions
): Promise<string> {
  const pathPattern = options?.pathPattern ?? 'version-first';
  const latestVersion = await getLatestVersion(lang, options);
  const firstPage = await getFirstPage(lang, latestVersion, options);

  if (!firstPage) {
    // フォールバック: デフォルトのパス
    return pathPattern === 'locale-first'
      ? `${baseUrl}/${lang}/${latestVersion}/guide/getting-started`
      : `${baseUrl}/${latestVersion}/${lang}/guide/getting-started`;
  }

  return pathPattern === 'locale-first'
    ? `${baseUrl}/${lang}/${latestVersion}${firstPage}`
    : `${baseUrl}/${latestVersion}/${lang}${firstPage}`;
}
