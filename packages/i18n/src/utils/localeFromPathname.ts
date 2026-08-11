import { defaultLocale, supportedLocales, type LocaleKey } from '../locales/index.js';

export function getLocaleFromPathname(
  pathname: string,
  fallback: LocaleKey = defaultLocale
): LocaleKey {
  const segments = pathname.split('/').filter(Boolean);
  return (
    segments.find((segment): segment is LocaleKey =>
      supportedLocales.includes(segment as LocaleKey)
    ) ?? fallback
  );
}
