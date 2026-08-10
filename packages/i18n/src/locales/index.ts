/**
 * 翻訳ファイル
 */

import en from './en.json' with { type: 'json' };
import ja from './ja.json' with { type: 'json' };
import zhHans from './zh-Hans.json' with { type: 'json' };
import zhHant from './zh-Hant.json' with { type: 'json' };
import es from './es.json' with { type: 'json' };
import ptBR from './pt-BR.json' with { type: 'json' };
import ko from './ko.json' with { type: 'json' };
import de from './de.json' with { type: 'json' };
import fr from './fr.json' with { type: 'json' };
import ru from './ru.json' with { type: 'json' };
import ar from './ar.json' with { type: 'json' };
import id from './id.json' with { type: 'json' };
import tr from './tr.json' with { type: 'json' };
import hi from './hi.json' with { type: 'json' };
import vi from './vi.json' with { type: 'json' };
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
  vi,
} as const;

export type LocaleKey = keyof typeof locales;

export type SupportedLocales = Record<LocaleKey, Record<string, string>>;

export const defaultLocale: LocaleKey = 'en';
export const supportedLocales = Object.keys(locales) as LocaleKey[];

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
