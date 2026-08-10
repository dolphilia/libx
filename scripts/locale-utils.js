import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const languageNamesPath = path.join(
  repositoryRoot,
  'packages',
  'i18n',
  'src',
  'language-names.json'
);

export const languageNames = Object.freeze(JSON.parse(fs.readFileSync(languageNamesPath, 'utf8')));
export const supportedLocaleIds = Object.freeze(Object.keys(languageNames));
export const LOCALE_PATH_SEGMENT_PATTERN = '[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*';
export const VERSION_PATH_SEGMENT_PATTERN = 'v[0-9]+(?:\\.[0-9]+)*';

export function isValidLanguageTag(locale) {
  if (typeof locale !== 'string' || locale.length === 0 || locale.includes('_')) return false;
  try {
    return Intl.getCanonicalLocales(locale).length === 1;
  } catch {
    return false;
  }
}

export function isSupportedLocale(locale) {
  return isValidLanguageTag(locale) && Object.hasOwn(languageNames, locale);
}

export function validateSupportedLocale(locale) {
  if (!isValidLanguageTag(locale)) {
    return [`言語コード "${locale}" はBCP 47形式ではありません`];
  }
  if (!isSupportedLocale(locale)) {
    return [
      `言語コード "${locale}" はlibxの言語レジストリに登録されていません`,
      `サポート済み言語: ${supportedLocaleIds.join(', ')}`,
    ];
  }
  return [];
}
