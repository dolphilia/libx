export const FALLBACK_DEFAULT_LANG = 'en';
export const FALLBACK_BASE_URL_PREFIX = '/docs';
export const FALLBACK_SITE_URL = 'https://libx.dev';
export const FALLBACK_SUPPORTED_LANGS = ['en'];

export function normalizeBasePath(value) {
  if (typeof value !== 'string' || !value.trim()) return '/';
  let normalized = value.trim();
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  normalized = normalized.replace(/\/{2,}/g, '/');
  if (normalized.length > 1 && normalized.endsWith('/')) normalized = normalized.slice(0, -1);
  return normalized || '/';
}

export function normalizeSlug(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  return value.trim().replace(/^\//, '').replace(/\/$/, '').replace(/\s+/g, '-');
}

export function normalizeSiteUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return undefined;
  return value.trim().replace(/\/+$/, '') || undefined;
}

export function resolveDefaultLangValue(defaults, preferred) {
  return preferred || defaults.language?.default || FALLBACK_DEFAULT_LANG;
}

export function resolveSupportedLangsValue(defaults, preferred) {
  if (Array.isArray(preferred)) return [...preferred];
  if (Array.isArray(defaults.language?.supported)) return [...defaults.language.supported];
  return [...FALLBACK_SUPPORTED_LANGS];
}

export function resolveDisplayNamesValue(defaults, preferred) {
  return { ...(preferred ?? defaults.language?.displayNames ?? {}) };
}

export function resolveBaseUrlPrefixValue(defaults, preferred) {
  return normalizeBasePath(preferred || defaults.baseUrlPrefix || FALLBACK_BASE_URL_PREFIX);
}

export function resolveBaseUrlValue(defaults, options = {}) {
  if (options.baseUrl?.trim()) return normalizeBasePath(options.baseUrl);
  const prefix = resolveBaseUrlPrefixValue(defaults, options.baseUrlPrefix);
  const slug = normalizeSlug(options.projectSlug || options.projectName);
  return slug ? normalizeBasePath(`${prefix}/${slug}`) : prefix;
}

export function resolveSiteUrlValue(defaults, preferred) {
  return normalizeSiteUrl(preferred) ?? normalizeSiteUrl(defaults.siteUrl) ?? FALLBACK_SITE_URL;
}
