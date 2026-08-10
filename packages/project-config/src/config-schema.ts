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

export interface LicenseSource {
  id: string;
  name: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export interface LicensingConfig {
  sources: LicenseSource[];
  defaultSource: string;
  showAttribution: boolean;
  sourceLanguage: LocaleKey;
}

/**
 * JSONファイル内のプロジェクト設定構造
 */
export interface ProjectLanguageConfigJSON {
  supported: LocaleKey[];
  default: LocaleKey;
  displayNames: Record<string, string>;
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

export interface ProjectConfigJSON {
  paths: ProjectPathsConfigJSON;
  language: ProjectLanguageConfigJSON;
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfigJSON[];
  };
  licensing: LicensingConfig;
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
  licensing: LicensingConfig;
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
  if (!isPathsConfig(paths)) return ['paths must contain only string URL/path fields'];

  const language = config.language;
  if (!isLanguageConfig(language)) {
    return ['language.supported/default/displayNames has an invalid shape'];
  }

  const supported = language.supported;
  const defaultLang = language.default;

  if (
    Array.isArray(supported) &&
    typeof defaultLang === 'string' &&
    !supported.includes(defaultLang)
  ) {
    return ['language.default must be included in language.supported'];
  }

  if (Array.isArray(supported) && isRecord(language)) {
    for (const locale of supported) {
      if (!isRecord(language.displayNames) || !isNonEmptyString(language.displayNames[locale])) {
        return [`language.displayNames.${locale} is required`];
      }
    }
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
  if (Array.isArray(supported)) {
    const missingTranslation = supported.find(
      (locale) => !Object.prototype.hasOwnProperty.call(config.translations, locale)
    );
    if (missingTranslation) return [`translations.${missingTranslation} is required`];
  }

  if (!isRecord(config.versioning) || !Array.isArray(config.versioning.versions)) {
    return ['versioning.versions must be an array'];
  }
  if (!config.versioning.versions.every(isVersionConfig)) {
    return ['each versioning.versions item requires a valid id, name, and ISO date'];
  }
  const versionIds = config.versioning.versions.map((version) => version.id);
  if (new Set(versionIds).size !== versionIds.length) {
    return ['versioning.versions IDs must be unique'];
  }
  if (config.versioning.versions.filter((version) => version.isLatest === true).length !== 1) {
    return ['exactly one versioning.versions item must have isLatest=true'];
  }

  if (!isLicensingConfig(config.licensing)) {
    return [
      'licensing must contain complete sources, sourceLanguage, and a matching defaultSource',
    ];
  }
  if (Array.isArray(supported) && !supported.includes(config.licensing.sourceLanguage)) {
    return ['licensing.sourceLanguage must be included in language.supported'];
  }

  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isOptionalString(value: unknown): boolean {
  return value === undefined || typeof value === 'string';
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
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

function isLanguageConfig(value: unknown): value is ProjectLanguageConfigJSON {
  return (
    isRecord(value) &&
    isStringArray(value.supported) &&
    isNonEmptyString(value.default) &&
    isStringRecord(value.displayNames)
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
      isNonEmptyString(source.id) &&
      isNonEmptyString(source.name) &&
      isNonEmptyString(source.author) &&
      isNonEmptyString(source.license) &&
      isNonEmptyString(source.licenseUrl) &&
      isNonEmptyString(source.sourceUrl)
  );

  return (
    validSources &&
    isNonEmptyString(value.defaultSource) &&
    value.sources.some((source) => isRecord(source) && source.id === value.defaultSource) &&
    typeof value.showAttribution === 'boolean' &&
    isNonEmptyString(value.sourceLanguage)
  );
}

/**
 * ISO文字列をDateオブジェクトに変換
 */
export function convertVersionJSONToRuntime(versionJSON: VersionConfigJSON): VersionConfig {
  return {
    ...versionJSON,
    date: new Date(versionJSON.date),
  };
}

/**
 * JSONスキーマから実行時設定に変換
 */
export function convertProjectConfigJSONToRuntime(configJSON: ProjectConfigJSON): ProjectConfig {
  const pathConfig = configJSON.paths;

  return {
    ...configJSON,
    paths: {
      ...pathConfig,
      baseUrl: (pathConfig.baseUrl ?? '') as string,
      baseUrlPrefix: (pathConfig.baseUrlPrefix ?? '') as string,
      projectSlug: (pathConfig.projectSlug ?? '') as string,
      siteUrl: pathConfig.siteUrl as string | undefined,
    },
    language: {
      supported: configJSON.language.supported,
      default: configJSON.language.default,
      displayNames: configJSON.language.displayNames as Record<LocaleKey, string>,
    },
    versioning: {
      versions: configJSON.versioning.versions.map(convertVersionJSONToRuntime),
    },
  };
}
