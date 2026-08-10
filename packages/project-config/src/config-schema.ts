/**
 * プロジェクト設定JSONスキーマとTypeScript型定義
 */
import type { LocaleKey } from '@docs/i18n/locale-types';

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

export interface LicenseSource {
  id: string;
  name: string;
  author: string;
  license: string;
  licenseUrl?: string;
  sourceUrl?: string;
}

export interface LicensingConfig {
  sources: LicenseSource[];
  defaultSource: string;
  showAttribution: boolean;
  sourceLanguage?: LocaleKey;
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
  siteUrl?: string;
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
  licensing?: LicensingConfig;
}

/**
 * 実行時に使用されるプロジェクト設定構造
 */
export interface ProjectPathsConfig {
  baseUrl: string;
  baseUrlPrefix: string;
  projectSlug: string;
  siteUrl?: string;
}

export interface ProjectConfig {
  paths: ProjectPathsConfig;
  language: ProjectLanguageConfig;
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfig[];
  };
  licensing?: LicensingConfig;
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
export function validateProjectConfigJSON(config: unknown): config is ProjectConfigJSON {
  return getProjectConfigValidationErrors(config).length === 0;
}

export function getProjectConfigValidationErrors(config: unknown): string[] {
  if (!isRecord(config)) return ['root must be a JSON object'];

  const paths = config.paths;
  if (paths !== undefined && !isPathsConfig(paths)) {
    return ['paths must contain only string URL/path fields'];
  }

  const basic = config.basic;
  if (basic !== undefined && !isLegacyBasicConfig(basic)) {
    return ['basic contains invalid legacy path or language fields'];
  }

  const language = config.language;
  if (language !== undefined && !isLanguageConfig(language)) {
    return ['language.supported/default/displayNames has an invalid shape'];
  }

  const supported = isRecord(language)
    ? language.supported
    : isRecord(basic)
      ? basic.supportedLangs
      : undefined;
  const defaultLang = isRecord(language)
    ? language.default
    : isRecord(basic)
      ? basic.defaultLang
      : undefined;

  if (
    Array.isArray(supported) &&
    typeof defaultLang === 'string' &&
    !supported.includes(defaultLang)
  ) {
    return ['language.default must be included in language.supported'];
  }

  if (!isTranslationsConfig(config.translations)) {
    return ['translations must define displayName, displayDescription, and categories'];
  }
  if (
    typeof defaultLang === 'string' &&
    !Object.prototype.hasOwnProperty.call(config.translations, defaultLang)
  ) {
    return [`translations.${defaultLang} is required for the default language`];
  }

  if (!isRecord(config.versioning) || !Array.isArray(config.versioning.versions)) {
    return ['versioning.versions must be an array'];
  }
  if (!config.versioning.versions.every(isVersionConfig)) {
    return ['each versioning.versions item requires a valid id, name, and ISO date'];
  }

  if (config.licensing !== undefined && !isLicensingConfig(config.licensing)) {
    return ['licensing must contain valid sources and a matching defaultSource'];
  }

  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isOptionalString(value: unknown): boolean {
  return value === undefined || typeof value === 'string';
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string' && item.length > 0);
}

function isStringRecord(value: unknown): boolean {
  return isRecord(value) && Object.values(value).every((item) => typeof item === 'string');
}

function isPathsConfig(value: unknown): boolean {
  return (
    isRecord(value) &&
    isOptionalString(value.baseUrl) &&
    isOptionalString(value.baseUrlPrefix) &&
    isOptionalString(value.projectSlug) &&
    isOptionalString(value.siteUrl)
  );
}

function isLegacyBasicConfig(value: unknown): boolean {
  return (
    isPathsConfig(value) &&
    isRecord(value) &&
    (value.supportedLangs === undefined || isStringArray(value.supportedLangs)) &&
    isOptionalString(value.defaultLang)
  );
}

function isLanguageConfig(value: unknown): boolean {
  return (
    isRecord(value) &&
    (value.supported === undefined || isStringArray(value.supported)) &&
    isOptionalString(value.default) &&
    (value.displayNames === undefined || isStringRecord(value.displayNames))
  );
}

function isTranslationsConfig(value: unknown): value is Record<string, ProjectTranslations> {
  return (
    isRecord(value) &&
    Object.keys(value).length > 0 &&
    Object.values(value).every(
      (translation) =>
        isRecord(translation) &&
        typeof translation.displayName === 'string' &&
        typeof translation.displayDescription === 'string' &&
        isStringRecord(translation.categories)
    )
  );
}

function isVersionConfig(value: unknown): value is VersionConfigJSON {
  return (
    isRecord(value) &&
    typeof value.id === 'string' &&
    value.id.length > 0 &&
    typeof value.name === 'string' &&
    value.name.length > 0 &&
    typeof value.date === 'string' &&
    !Number.isNaN(Date.parse(value.date)) &&
    (value.isLatest === undefined || typeof value.isLatest === 'boolean') &&
    isOptionalString(value.tag) &&
    isOptionalString(value.description)
  );
}

function isLicensingConfig(value: unknown): value is LicensingConfig {
  if (!isRecord(value) || !Array.isArray(value.sources)) return false;

  const validSources = value.sources.every(
    (source) =>
      isRecord(source) &&
      typeof source.id === 'string' &&
      typeof source.name === 'string' &&
      typeof source.author === 'string' &&
      typeof source.license === 'string' &&
      isOptionalString(source.licenseUrl) &&
      isOptionalString(source.sourceUrl)
  );

  return (
    validSources &&
    typeof value.defaultSource === 'string' &&
    value.sources.some(
      (source) => isRecord(source) && source.id === value.defaultSource
    ) &&
    typeof value.showAttribution === 'boolean' &&
    isOptionalString(value.sourceLanguage)
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
      projectSlug: (pathConfig.projectSlug ?? '') as string,
      siteUrl: pathConfig.siteUrl as string | undefined
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
