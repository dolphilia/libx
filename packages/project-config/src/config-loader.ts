/**
 * プロジェクト設定JSONローダーユーティリティ
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { getLocaleDirection } from '@docs/i18n/locales';
import type { LocaleKey } from '@docs/i18n/locales';
import {
  type ProjectConfig,
  validateProjectConfigJSON,
  getProjectConfigValidationErrors,
  convertProjectConfigJSONToRuntime,
} from './config-schema';
import {
  resolveDefaultLang,
  resolveSupportedLangs,
  resolveLanguageDisplayNames,
  resolveBaseUrl,
  resolveBaseUrlPrefix,
  resolveProjectSlug,
  resolveSiteUrl,
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

export async function loadProjectConfigFromJSON(
  configPath: string,
  options: LoadProjectConfigOptions = {}
): Promise<ProjectConfig> {
  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const parsed = JSON.parse(stripJsonComments(configContent));

    if (!validateProjectConfigJSON(parsed)) {
      const details = getProjectConfigValidationErrors(parsed).join('; ');
      throw new Error(`Invalid project configuration format in ${configPath}: ${details}`);
    }

    const runtimeConfig = convertProjectConfigJSONToRuntime(parsed);
    const defaultLang = await resolveDefaultLang(parsed.language.default);
    const supportedLangs = await resolveSupportedLangs(parsed.language.supported);
    const displayNames = await resolveLanguageDisplayNames(
      parsed.language.displayNames as Record<LocaleKey, string>
    );
    const configDir = path.dirname(configPath);
    const inferredProjectDir = options.projectDir ?? path.resolve(configDir, '..', '..');
    const pathSettings = parsed.paths;
    const baseUrlPrefix = await resolveBaseUrlPrefix(pathSettings.baseUrlPrefix);
    const projectSlug = await resolveProjectSlug(pathSettings.projectSlug, inferredProjectDir);
    const baseUrl = await resolveBaseUrl({
      baseUrl: pathSettings.baseUrl,
      baseUrlPrefix,
      projectSlug,
      projectDir: inferredProjectDir,
    });
    const siteUrl = await resolveSiteUrl(pathSettings.siteUrl ?? runtimeConfig.paths.siteUrl);

    return {
      ...runtimeConfig,
      paths: {
        ...runtimeConfig.paths,
        baseUrlPrefix,
        projectSlug,
        baseUrl,
        siteUrl,
      },
      language: {
        ...runtimeConfig.language,
        supported: supportedLangs,
        default: defaultLang,
        displayNames,
      },
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
  const configPath = path.join(configDir, 'project.config.jsonc');

  return await loadProjectConfigFromJSON(configPath, { projectDir: resolvedDir });
}

/**
 * 言語別の表示名を取得
 */
export function getDisplayName(config: ProjectConfig, lang: LocaleKey): string {
  return getFallbackTranslation(config, lang).displayName;
}

/**
 * 言語別の表示説明を取得
 */
export function getDisplayDescription(config: ProjectConfig, lang: LocaleKey): string {
  return getFallbackTranslation(config, lang).displayDescription;
}

/**
 * カテゴリ翻訳を取得
 */
export function getCategoryTranslations(
  config: ProjectConfig
): Record<LocaleKey, Record<string, string>> {
  const result: Record<LocaleKey, Record<string, string>> = {} as Record<
    LocaleKey,
    Record<string, string>
  >;
  for (const lang of config.language.supported) {
    result[lang] = getFallbackTranslation(config, lang).categories;
  }
  return result;
}

function getFallbackTranslation(config: ProjectConfig, lang: LocaleKey) {
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
