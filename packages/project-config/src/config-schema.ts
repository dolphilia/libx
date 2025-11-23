/**
 * プロジェクト設定JSONスキーマとTypeScript型定義
 */
import type { LocaleKey } from '@docs/i18n/locales';

/**
 * JSONファイル内で使用されるバージョン情報の型
 * Date型はISO文字列として保存される
 */
export interface VersionConfigJSON {
  id: string;
  name: string;
  date: string; // ISO文字列 (JSON内)
  isLatest?: boolean;
  tag?: string;
  description?: string;
}

/**
 * 実行時に使用されるバージョン情報の型
 * Date型はJavaScriptのDateオブジェクト
 */
export interface VersionConfig {
  id: string;
  name: string;
  date: Date; // Dateオブジェクト (実行時)
  isLatest?: boolean;
  tag?: string;
  description?: string;
}

/**
 * プロジェクトの翻訳情報
 */
export interface ProjectTranslations {
  displayName: string;
  displayDescription: string;
  categories: Record<string, string>;
}

/**
 * JSONファイル内のプロジェクト設定構造
 */
export interface ProjectLanguageConfigJSON {
  supported?: LocaleKey[];
  default?: LocaleKey;
  displayNames?: Record<string, string>;
}

export interface ProjectLanguageConfig {
  supported: LocaleKey[];
  default: LocaleKey;
  displayNames: Record<LocaleKey, string>;
}

export interface ProjectPathsConfigJSON {
  baseUrl?: string;
  baseUrlPrefix?: string;
  projectSlug?: string;
}

export interface LegacyBasicConfigJSON extends ProjectPathsConfigJSON {
  supportedLangs?: LocaleKey[]; // legacy support
  defaultLang?: LocaleKey; // legacy support
}

export interface ProjectConfigJSON {
  paths?: ProjectPathsConfigJSON;
  basic?: LegacyBasicConfigJSON; // legacy support
  language?: ProjectLanguageConfigJSON;
  languageNames?: Record<string, string>; // legacy support
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfigJSON[];
  };
}

/**
 * 実行時に使用されるプロジェクト設定構造
 */
export interface ProjectPathsConfig {
  baseUrl: string;
  baseUrlPrefix: string;
  projectSlug: string;
}

export interface ProjectConfig {
  paths: ProjectPathsConfig;
  language: ProjectLanguageConfig;
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfig[];
  };
}

/**
 * 後方互換性のためのレガシー設定形式
 */
export interface LegacyProjectConfig extends ProjectConfig {
  // 後方互換性のため、フラット構造でもアクセス可能
  basic: ProjectPathsConfig & {
    supportedLangs: LocaleKey[];
    defaultLang: LocaleKey;
  };
  baseUrl: string;
  supportedLangs: LocaleKey[];
  defaultLang: LocaleKey;
  versions: VersionConfig[];
  displayName: Record<LocaleKey, string>;
  displayDescription: Record<LocaleKey, string>;
  categoryTranslations: Record<LocaleKey, Record<string, string>>;
}

/**
 * JSON設定ファイルのバリデーション
 */
export function validateProjectConfigJSON(config: any): config is ProjectConfigJSON {
  return (
    config &&
    typeof config === 'object' &&
    // paths/basic section
    (config.paths === undefined ||
      (typeof config.paths === 'object' &&
        (config.paths.baseUrl === undefined || typeof config.paths.baseUrl === 'string') &&
        (config.paths.baseUrlPrefix === undefined || typeof config.paths.baseUrlPrefix === 'string') &&
        (config.paths.projectSlug === undefined || typeof config.paths.projectSlug === 'string'))) &&
    (config.basic === undefined ||
      (typeof config.basic === 'object' &&
        (config.basic.baseUrl === undefined || typeof config.basic.baseUrl === 'string') &&
        (config.basic.baseUrlPrefix === undefined || typeof config.basic.baseUrlPrefix === 'string') &&
        (config.basic.projectSlug === undefined || typeof config.basic.projectSlug === 'string') &&
        (config.basic.supportedLangs === undefined || Array.isArray(config.basic.supportedLangs)) &&
        (config.basic.defaultLang === undefined || typeof config.basic.defaultLang === 'string'))) &&
    (config.language === undefined ||
      (typeof config.language === 'object' &&
        (config.language.supported === undefined || Array.isArray(config.language.supported)) &&
        (config.language.default === undefined || typeof config.language.default === 'string'))) &&
    // translations section
    config.translations &&
    typeof config.translations === 'object' &&
    // versioning section
    config.versioning &&
    Array.isArray(config.versioning.versions)
  );
}

/**
 * ISO文字列をDateオブジェクトに変換
 */
export function convertVersionJSONToRuntime(versionJSON: VersionConfigJSON): VersionConfig {
  return {
    ...versionJSON,
    date: new Date(versionJSON.date)
  };
}

/**
 * JSONスキーマから実行時設定に変換
 */
export function convertProjectConfigJSONToRuntime(configJSON: ProjectConfigJSON): ProjectConfig {
  const legacySupported = configJSON.language?.supported ?? configJSON.basic?.supportedLangs ?? [];
  const legacyDefault = configJSON.language?.default ?? configJSON.basic?.defaultLang ?? 'en';
  const legacyNames = configJSON.language?.displayNames ?? configJSON.languageNames ?? {};
  const pathConfig = configJSON.paths ?? configJSON.basic ?? {};

  return {
    ...configJSON,
    paths: {
      ...pathConfig,
      baseUrl: (pathConfig.baseUrl ?? '') as string,
      baseUrlPrefix: (pathConfig.baseUrlPrefix ?? '') as string,
      projectSlug: (pathConfig.projectSlug ?? '') as string
    },
    language: {
      supported: legacySupported as LocaleKey[],
      default: legacyDefault as LocaleKey,
      displayNames: legacyNames as Record<LocaleKey, string>
    },
    versioning: {
      versions: configJSON.versioning.versions.map(convertVersionJSONToRuntime)
    }
  };
}
