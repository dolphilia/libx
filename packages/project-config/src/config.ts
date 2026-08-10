/**
 * プロジェクト全体の設定（JSON移行版）
 */
import type { LocaleKey } from '@docs/i18n/locales';
import {
  loadProjectConfig,
  getDisplayName as getDisplayNameSync,
  getDisplayDescription as getDisplayDescriptionSync,
  getCategoryTranslations as getCategoryTranslationsSync,
  resolveProjectDir,
} from './config-loader';
import type { ProjectConfig } from './config-schema';

type ProjectKey = string;

const projectConfigCache = new Map<ProjectKey, ProjectConfig>();

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
 * 言語別の表示名を取得する関数
 */
export async function getDisplayNameAsync(lang: LocaleKey, projectDir?: string): Promise<string> {
  const config = await getProjectConfig(projectDir);
  return getDisplayNameSync(config, lang);
}

/**
 * 言語別の表示説明を取得する関数
 */
export async function getDisplayDescriptionAsync(
  lang: LocaleKey,
  projectDir?: string
): Promise<string> {
  const config = await getProjectConfig(projectDir);
  return getDisplayDescriptionSync(config, lang);
}

/**
 * カテゴリ翻訳を取得する関数
 */
export async function getCategoryTranslationsAsync(
  projectDir?: string
): Promise<Record<LocaleKey, Record<string, string>>> {
  const config = await getProjectConfig(projectDir);
  return getCategoryTranslationsSync(config);
}

export type { ProjectConfig };
