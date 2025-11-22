/**
 * プロジェクト設定JSONローダーユーティリティ
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import {
  type ProjectConfigJSON,
  type ProjectConfig,
  type LegacyProjectConfig,
  validateProjectConfigJSON,
  convertProjectConfigJSONToRuntime
} from './config-schema';
import { resolveDefaultLang } from './global-defaults';
import { stripJsonComments } from './jsonc';

/**
 * プロジェクトルートの解決
 */
export function resolveProjectDir(projectDir?: string): string {
  return projectDir ? path.resolve(projectDir) : process.cwd();
}

/**
 * JSON/JSONCファイルからプロジェクト設定を読み込む
 */
export async function loadProjectConfigFromJSON(configPath: string): Promise<ProjectConfig> {
  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const parsed = JSON.parse(stripJsonComments(configContent));

    if (!validateProjectConfigJSON(parsed)) {
      throw new Error(`Invalid project configuration format in ${configPath}`);
    }

    const runtimeConfig = convertProjectConfigJSONToRuntime(parsed);
    const defaultLang = await resolveDefaultLang(parsed.basic.defaultLang);

    return {
      ...runtimeConfig,
      basic: {
        ...runtimeConfig.basic,
        defaultLang
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

  return await loadProjectConfigFromJSON(configPath);
}

/**
 * 言語別の表示名を取得
 */
export function getDisplayName(config: ProjectConfig | LegacyProjectConfig, lang: LocaleKey): string {
  return config.translations[lang]?.displayName || config.translations.en.displayName;
}

/**
 * 言語別の表示説明を取得
 */
export function getDisplayDescription(config: ProjectConfig | LegacyProjectConfig, lang: LocaleKey): string {
  return config.translations[lang]?.displayDescription || config.translations.en.displayDescription;
}

/**
 * カテゴリ翻訳を取得
 */
export function getCategoryTranslations(config: ProjectConfig | LegacyProjectConfig): Record<LocaleKey, Record<string, string>> {
  const result: Record<LocaleKey, Record<string, string>> = {} as Record<LocaleKey, Record<string, string>>;
  for (const lang of config.basic.supportedLangs) {
    result[lang] = config.translations[lang]?.categories || config.translations.en.categories || {};
  }
  return result;
}

/**
 * 後方互換性のためのレガシー設定を生成
 */
export function createLegacyConfig(config: ProjectConfig): LegacyProjectConfig {
  // 全サポート言語の表示名を動的に生成
  const displayName: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;
  const displayDescription: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  for (const lang of config.basic.supportedLangs) {
    displayName[lang] = config.translations[lang]?.displayName || config.translations.en.displayName;
    displayDescription[lang] = config.translations[lang]?.displayDescription || config.translations.en.displayDescription;
  }

  return {
    ...config,
    // フラット構造でのアクセス
    baseUrl: config.basic.baseUrl,
    supportedLangs: config.basic.supportedLangs,
    defaultLang: config.basic.defaultLang,
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
  const tsConfig = await import(tsConfigPath);
  const config = tsConfig.default || tsConfig;

  // JSON形式に変換
  const jsonConfig: ProjectConfigJSON = {
    basic: {
      baseUrl: config.basic?.baseUrl || config.baseUrl,
      supportedLangs: config.basic?.supportedLangs || config.supportedLangs,
      defaultLang: config.basic?.defaultLang || config.defaultLang
    },
    translations: config.translations,
    versioning: {
      versions: config.versioning?.versions?.map((v: any) => ({
        ...v,
        date: v.date instanceof Date ? v.date.toISOString() : v.date
      })) || config.versions?.map((v: any) => ({
        ...v,
        date: v.date instanceof Date ? v.date.toISOString() : v.date
      })) || []
    }
  };

  // JSONファイルに書き出し
  await fs.writeFile(jsonConfigPath, JSON.stringify(jsonConfig, null, 2), 'utf-8');
}
