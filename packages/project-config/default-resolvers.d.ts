import type { LocaleKey } from '@docs/i18n/locales';

export const FALLBACK_DEFAULT_LANG: LocaleKey;
export const FALLBACK_BASE_URL_PREFIX: string;
export const FALLBACK_SITE_URL: string;
export const FALLBACK_SUPPORTED_LANGS: LocaleKey[];
export interface RepositoryDefaults {
  language?: {
    default?: LocaleKey;
    supported?: LocaleKey[];
    displayNames?: Partial<Record<LocaleKey, string>>;
  };
  baseUrlPrefix?: string;
  siteUrl?: string;
}
export interface BaseUrlOptions {
  baseUrl?: string;
  baseUrlPrefix?: string;
  projectSlug?: string;
  projectName?: string;
}
export function normalizeBasePath(value?: string): string;
export function normalizeSlug(value?: string): string;
export function normalizeSiteUrl(value?: string): string | undefined;
export function resolveDefaultLangValue(
  defaults: RepositoryDefaults,
  preferred?: LocaleKey
): LocaleKey;
export function resolveSupportedLangsValue(
  defaults: RepositoryDefaults,
  preferred?: LocaleKey[]
): LocaleKey[];
export function resolveDisplayNamesValue(
  defaults: RepositoryDefaults,
  preferred?: Partial<Record<LocaleKey, string>>
): Record<LocaleKey, string>;
export function resolveBaseUrlPrefixValue(defaults: RepositoryDefaults, preferred?: string): string;
export function resolveBaseUrlValue(defaults: RepositoryDefaults, options?: BaseUrlOptions): string;
export function resolveSiteUrlValue(defaults: RepositoryDefaults, preferred?: string): string;
