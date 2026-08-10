/**
 * プロジェクト設定JSONローダーユーティリティ
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { getLocaleDirection } from '@docs/i18n/locales';
import type { LocaleKey } from '@docs/i18n/locales';
import {
  type ProjectConfigJSON,
  type ProjectConfig,
  type LegacyProjectConfig,
  type VersionConfigJSON,
  validateProjectConfigJSON,
  getProjectConfigValidationErrors,
  convertProjectConfigJSONToRuntime
} from './config-schema';
import {
  resolveDefaultLang,
  resolveSupportedLangs,
  resolveLanguageDisplayNames,
  resolveBaseUrl,
  resolveBaseUrlPrefix,
  resolveProjectSlug,
  resolveSiteUrl
} from './global-defaults';
import { stripJsonComments } from './jsonc';

/**
 * プロジェクトルートの解決
 */
export function resolveProjectDir(projectDir?: string): string {
  return projectDir ? path.resolve(projectDir) : process.cwd();
}

/**
 * 言語コードから文字方向を解決
 */
export function resolveLocaleDirection(lang?: LocaleKey | string): 'ltr' | 'rtl' {
  return getLocaleDirection(lang);
}

/**
 * JSON/JSONCファイルからプロジェクト設定を読み込む
 */
interface LoadProjectConfigOptions {
  projectDir?: string;
}

export async function loadProjectConfigFromJSON(configPath: string, options: LoadProjectConfigOptions = {}): Promise<ProjectConfig> {
  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const parsed = JSON.parse(stripJsonComments(configContent));

    if (!validateProjectConfigJSON(parsed)) {
      const details = getProjectConfigValidationErrors(parsed).join('; ');
      throw new Error(`Invalid project configuration format in ${configPath}: ${details}`);
    }

    const runtimeConfig = convertProjectConfigJSONToRuntime(parsed);
    const preferredDefaultLang = (parsed.language?.default ?? parsed.basic?.defaultLang) as LocaleKey | undefined;
    const defaultLang = await resolveDefaultLang(preferredDefaultLang);
    const supportedLangs = await resolveSupportedLangs(
      (parsed.language?.supported ?? parsed.basic?.supportedLangs) as LocaleKey[] | undefined
    );
    const displayNames = await resolveLanguageDisplayNames(
      (parsed.language?.displayNames ?? parsed.languageNames) as Record<LocaleKey, string> | undefined
    );
    const configDir = path.dirname(configPath);
    const inferredProjectDir = options.projectDir ?? path.resolve(configDir, '..', '..');
    const pathSettings = parsed.paths ?? parsed.basic ?? {};
    const baseUrlPrefix = await resolveBaseUrlPrefix(pathSettings.baseUrlPrefix);
    const projectSlug = await resolveProjectSlug(pathSettings.projectSlug, inferredProjectDir);
    const baseUrl = await resolveBaseUrl({
      baseUrl: pathSettings.baseUrl,
      baseUrlPrefix,
      projectSlug,
      projectDir: inferredProjectDir
    });
    const siteUrl = await resolveSiteUrl(pathSettings.siteUrl ?? runtimeConfig.paths.siteUrl);

    return {
      ...runtimeConfig,
      paths: {
        ...runtimeConfig.paths,
        baseUrlPrefix,
        projectSlug,
        baseUrl,
        siteUrl
      },
      language: {
        ...runtimeConfig.language,
        supported: supportedLangs,
        default: defaultLang,
        displayNames
      }
    };
  } catch (error) {
    throw new Error(`Failed to load project configuration from ${configPath}: ${error}`);
  }
}

/**
 * プロジェクトディレクトリから設定を自動読み込み
 */
export async function loadProjectConfig(projectDir?: string): Promise<ProjectConfig> {
  const resolvedDir = resolveProjectDir(projectDir);
  const configDir = path.join(resolvedDir, 'src', 'config');
  const jsoncPath = path.join(configDir, 'project.config.jsonc');
  const jsonPath = path.join(configDir, 'project.config.json');
  let configPath = jsonPath;

  try {
    await fs.access(jsoncPath);
    configPath = jsoncPath;
  } catch {
    // fallback to .json
  }

  return await loadProjectConfigFromJSON(configPath, { projectDir: resolvedDir });
}

/**
 * 言語別の表示名を取得
 */
export function getDisplayName(config: ProjectConfig | LegacyProjectConfig, lang: LocaleKey): string {
  return getFallbackTranslation(config, lang).displayName;
}

/**
 * 言語別の表示説明を取得
 */
export function getDisplayDescription(config: ProjectConfig | LegacyProjectConfig, lang: LocaleKey): string {
  return getFallbackTranslation(config, lang).displayDescription;
}

/**
 * カテゴリ翻訳を取得
 */
export function getCategoryTranslations(config: ProjectConfig | LegacyProjectConfig): Record<LocaleKey, Record<string, string>> {
  const result: Record<LocaleKey, Record<string, string>> = {} as Record<LocaleKey, Record<string, string>>;
  for (const lang of config.language.supported) {
    result[lang] = getFallbackTranslation(config, lang).categories;
  }
  return result;
}

function getFallbackTranslation(
  config: ProjectConfig | LegacyProjectConfig,
  lang: LocaleKey
) {
  const translation =
    config.translations[lang] ??
    config.translations[config.language.default] ??
    config.translations.en ??
    Object.values(config.translations)[0];

  if (!translation) {
    throw new Error('Project configuration must define at least one translation.');
  }

  return translation;
}

/**
 * 後方互換性のためのレガシー設定を生成
 */
export function createLegacyConfig(config: ProjectConfig): LegacyProjectConfig {
  // 全サポート言語の表示名を動的に生成
  const displayName: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;
  const displayDescription: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  for (const lang of config.language.supported) {
    displayName[lang] = getFallbackTranslation(config, lang).displayName;
    displayDescription[lang] = getFallbackTranslation(config, lang).displayDescription;
  }

  const pathsWithLegacy = {
    ...config.paths,
    supportedLangs: config.language.supported,
    defaultLang: config.language.default
  };

  return {
    ...config,
    basic: pathsWithLegacy,
    // フラット構造でのアクセス
    baseUrl: config.paths.baseUrl,
    supportedLangs: config.language.supported,
    defaultLang: config.language.default,
    versions: config.versioning.versions,
    displayName,
    displayDescription,
    categoryTranslations: getCategoryTranslations(config)
  };
}

/**
 * JSON設定をTypeScript設定ファイルから移行する際のヘルパー
 */
export async function migrateFromTypeScriptConfig(tsConfigPath: string, jsonConfigPath: string): Promise<void> {
  // 既存のTypeScript設定ファイルから読み込み（importを使用）
  const importedConfig = await import(/* @vite-ignore */ tsConfigPath);
  const config = (importedConfig.default || importedConfig) as MigratableProjectConfig;

  const legacySupported = config.language?.supported ?? config.basic?.supportedLangs ?? config.supportedLangs;
  const legacyDefault = config.language?.default ?? config.basic?.defaultLang ?? config.defaultLang;
  const legacyDisplayNames = config.language?.displayNames ?? config.languageNames;
  const tsPaths = config.paths ?? config.basic ?? {};

  // JSON形式に変換
  const jsonConfig: ProjectConfigJSON = {
    paths: {
      baseUrl: tsPaths.baseUrl || config.baseUrl,
      baseUrlPrefix: tsPaths.baseUrlPrefix || config.baseUrlPrefix,
      projectSlug: tsPaths.projectSlug || config.projectSlug,
      siteUrl: tsPaths.siteUrl || config.siteUrl
    },
    language: {
      supported: legacySupported,
      default: legacyDefault,
      displayNames: legacyDisplayNames
    },
    translations: config.translations,
    versioning: {
      versions: (config.versioning?.versions ?? config.versions ?? []).map(serializeVersion)
    }
  };

  // JSONファイルに書き出し
  await fs.writeFile(jsonConfigPath, JSON.stringify(jsonConfig, null, 2), 'utf-8');
}

type MigratableVersion = Omit<VersionConfigJSON, 'date'> & { date: Date | string };

interface MigratableProjectConfig {
  paths?: ProjectConfigJSON['paths'];
  basic?: ProjectConfigJSON['basic'];
  language?: ProjectConfigJSON['language'];
  languageNames?: ProjectConfigJSON['languageNames'];
  baseUrl?: string;
  baseUrlPrefix?: string;
  projectSlug?: string;
  siteUrl?: string;
  supportedLangs?: LocaleKey[];
  defaultLang?: LocaleKey;
  translations: ProjectConfigJSON['translations'];
  versioning?: { versions?: MigratableVersion[] };
  versions?: MigratableVersion[];
}

function serializeVersion(version: MigratableVersion): VersionConfigJSON {
  return {
    ...version,
    date: version.date instanceof Date ? version.date.toISOString() : version.date
  };
}
