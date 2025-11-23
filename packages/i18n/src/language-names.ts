/**
 * デフォルトの言語表示名マップ
 * プロジェクト設定内の language.displayNames で上書き可能
 */
import type { LocaleKey } from './locales';
import rawLanguageNames from './language-names.json';

export type LanguageNameMap = Record<LocaleKey, string>;

export const defaultLanguageNames: LanguageNameMap = rawLanguageNames;
