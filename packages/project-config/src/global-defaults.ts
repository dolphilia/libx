import type { LocaleKey } from '@docs/i18n/locales';
import repositoryDefaults from '../../../config/global-defaults.json';

interface GlobalDefaults {
  defaultLang?: LocaleKey;
}

const DEFAULT_LANG: LocaleKey = 'en';
const defaults = repositoryDefaults as GlobalDefaults;

export async function getRepositoryDefaultLang(): Promise<LocaleKey | undefined> {
  return defaults.defaultLang;
}

export async function resolveDefaultLang(preferred?: LocaleKey): Promise<LocaleKey> {
  if (preferred) {
    return preferred;
  }

  return (defaults.defaultLang ?? DEFAULT_LANG) as LocaleKey;
}
