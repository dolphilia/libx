/**
 * プロジェクト全体の設定（JSON移行版）
 */
import type { LocaleKey } from '@docs/i18n/locales';
import {
  loadProjectConfig,
  getDisplayName as getDisplayNameSync,
  getDisplayDescription as getDisplayDescriptionSync,
  getCategoryTranslations as getCategoryTranslationsSync,
  createLegacyConfig,
  resolveProjectDir
} from './config-loader';
import type { ProjectConfig, LegacyProjectConfig } from './config-schema';

type ProjectKey = string;

const projectConfigCache = new Map<ProjectKey, ProjectConfig>();
const legacyConfigCache = new Map<ProjectKey, LegacyProjectConfig>();
const syncConfigCache = new Map<ProjectKey, LegacyProjectConfig>();

function getProjectKey(projectDir?: string): ProjectKey {
  return resolveProjectDir(projectDir);
}

/**
 * プロジェクト設定を非同期で読み込む
 */
export async function getProjectConfig(projectDir?: string): Promise<ProjectConfig> {
  const key = getProjectKey(projectDir);

  if (!projectConfigCache.has(key)) {
    const config = await loadProjectConfig(projectDir);
    projectConfigCache.set(key, config);
  }

  return projectConfigCache.get(key)!;
}

/**
 * 後方互換性のあるプロジェクト設定を非同期で読み込む
 */
export async function getLegacyProjectConfig(projectDir?: string): Promise<LegacyProjectConfig> {
  const key = getProjectKey(projectDir);

  if (!legacyConfigCache.has(key)) {
    const config = await getProjectConfig(projectDir);
    legacyConfigCache.set(key, createLegacyConfig(config));
  }

  return legacyConfigCache.get(key)!;
}

/**
 * 言語別の表示名を取得する関数
 */
export async function getDisplayNameAsync(lang: LocaleKey, projectDir?: string): Promise<string> {
  const config = await getProjectConfig(projectDir);
  return getDisplayNameSync(config, lang);
}

/**
 * 言語別の表示説明を取得する関数
 */
export async function getDisplayDescriptionAsync(lang: LocaleKey, projectDir?: string): Promise<string> {
  const config = await getProjectConfig(projectDir);
  return getDisplayDescriptionSync(config, lang);
}

/**
 * カテゴリ翻訳を取得する関数
 */
export async function getCategoryTranslationsAsync(projectDir?: string): Promise<Record<LocaleKey, Record<string, string>>> {
  const config = await getProjectConfig(projectDir);
  return getCategoryTranslationsSync(config);
}

/**
 * 同期版の設定取得（後方互換性のため）
 * 注意: この関数は事前に非同期版を呼んでキャッシュを準備した後に使用してください
 */
function getSyncConfig(projectDir?: string): LegacyProjectConfig {
  const key = getProjectKey(projectDir);

  if (!syncConfigCache.has(key)) {
    throw new Error('Configuration not loaded. Call initializeConfig() first.');
  }

  return syncConfigCache.get(key)!;
}

// 後方互換性のための同期関数
export const getDisplayName = (lang: LocaleKey, projectDir?: string): string => {
  const config = getSyncConfig(projectDir);
  return getDisplayNameSync(config, lang);
};

export const getDisplayDescription = (lang: LocaleKey, projectDir?: string): string => {
  const config = getSyncConfig(projectDir);
  return getDisplayDescriptionSync(config, lang);
};

export const getCategoryTranslations = (projectDir?: string): Record<LocaleKey, Record<string, string>> => {
  const config = getSyncConfig(projectDir);
  return getCategoryTranslationsSync(config);
};

export const getLegacyConfig = (projectDir?: string): LegacyProjectConfig => {
  return getSyncConfig(projectDir);
};

// デフォルトエクスポート用のプロキシオブジェクト（プロジェクトディレクトリ未指定時のみ）
const configProxy = new Proxy({} as LegacyProjectConfig, {
  get(_target, prop) {
    const config = getSyncConfig();
    return (config as any)[prop];
  }
});

/**
 * 設定の初期化を行う関数（サーバーサイドで使用）
 */
export async function initializeConfig(projectDir?: string): Promise<void> {
  const key = getProjectKey(projectDir);
  const legacyConfig = await getLegacyProjectConfig(projectDir);
  syncConfigCache.set(key, legacyConfig);
}

export default configProxy;
export type { ProjectConfig, LegacyProjectConfig };
