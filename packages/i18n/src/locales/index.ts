/**
 * 翻訳ファイル
 */

import en from './en.json';
import ja from './ja.json';
import zhHans from './zh-Hans.json';
import zhHant from './zh-Hant.json';
import es from './es.json';
import ptBR from './pt-BR.json';
import ko from './ko.json';
import de from './de.json';
import fr from './fr.json';
import ru from './ru.json';
import ar from './ar.json';
import id from './id.json';
import tr from './tr.json';
import hi from './hi.json';
import vi from './vi.json';

export type TextDirection = 'ltr' | 'rtl';

export const locales = {
  en,
  ja,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  es,
  'pt-BR': ptBR,
  ko,
  de,
  fr,
  ru,
  ar,
  id,
  tr,
  hi,
  vi
};

export type LocaleKey = keyof typeof locales;
export type SupportedLocales = Record<LocaleKey, Record<string, string>>;

export const defaultLocale: LocaleKey = 'en';
export const supportedLocales: LocaleKey[] = [
  'en',
  'ja',
  'zh-Hans',
  'zh-Hant',
  'es',
  'pt-BR',
  'ko',
  'de',
  'fr',
  'ru',
  'ar',
  'id',
  'tr',
  'hi',
  'vi'
];

/**
 * RTL（右から左）方向のロケールリスト
 */
export const rtlLocales: LocaleKey[] = ['ar'];

/**
 * 指定した言語コードが RTL かどうかを判定
 */
export function isRtlLocale(lang?: string | LocaleKey): boolean {
  if (!lang) {
    return false;
  }

  return rtlLocales.includes(lang as LocaleKey);
}

/**
 * 指定した言語コードの文字方向を取得
 */
export function getLocaleDirection(lang?: string | LocaleKey): TextDirection {
  return isRtlLocale(lang) ? 'rtl' : 'ltr';
}
