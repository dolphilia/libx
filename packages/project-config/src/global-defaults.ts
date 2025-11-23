import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import repositoryDefaults from '../../../config/global-defaults.json';

interface GlobalDefaults {
  defaultLang?: LocaleKey;
  baseUrlPrefix?: string;
  language?: {
    supported?: LocaleKey[];
    default?: LocaleKey;
    displayNames?: Partial<Record<LocaleKey, string>>;
  };
}

const DEFAULT_LANG: LocaleKey = 'en';
const DEFAULT_BASE_URL_PREFIX = '/docs';
const DEFAULT_SUPPORTED_LANGS: LocaleKey[] = ['en'];
const defaults = repositoryDefaults as GlobalDefaults;

function normalizeBasePath(value?: string): string {
  if (!value) {
    return '/';
  }

  let normalized = value.trim();
  if (!normalized) {
    return '/';
  }

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  normalized = normalized.replace(/\/{2,}/g, '/');

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || '/';
}

function extractProjectSlug(projectDir?: string): string {
  if (!projectDir) {
    return '';
  }

  const normalized = path.basename(path.resolve(projectDir));
  return normalized === '.' ? '' : normalized;
}

function normalizeSlug(value?: string): string {
  if (!value) {
    return '';
  }

  let normalized = value.trim();
  if (!normalized) {
    return '';
  }

  normalized = normalized.replace(/^\//, '').replace(/\/$/, '');
  normalized = normalized.replace(/\s+/g, '-');
  return normalized;
}

export async function getRepositoryDefaultLang(): Promise<LocaleKey | undefined> {
  return defaults.defaultLang ?? defaults.language?.default;
}

export async function getRepositorySupportedLangs(): Promise<LocaleKey[] | undefined> {
  if (defaults.language && Array.isArray(defaults.language.supported)) {
    return [...defaults.language.supported] as LocaleKey[];
  }
  return undefined;
}

export async function getRepositoryLanguageDisplayNames(): Promise<Record<LocaleKey, string> | undefined> {
  if (defaults.language?.displayNames) {
    return { ...(defaults.language.displayNames as Record<LocaleKey, string>) };
  }
  return undefined;
}

export async function resolveDefaultLang(preferred?: LocaleKey): Promise<LocaleKey> {
  if (preferred) {
    return preferred;
  }

  if (defaults.defaultLang) {
    return defaults.defaultLang as LocaleKey;
  }

  if (defaults.language?.default) {
    return defaults.language.default as LocaleKey;
  }

  return DEFAULT_LANG;
}

export async function resolveSupportedLangs(preferred?: LocaleKey[]): Promise<LocaleKey[]> {
  if (preferred !== undefined) {
    return preferred;
  }

  const repoDefault = await getRepositorySupportedLangs();
  if (repoDefault !== undefined) {
    return repoDefault;
  }

  return [...DEFAULT_SUPPORTED_LANGS];
}

export async function resolveLanguageDisplayNames(preferred?: Record<LocaleKey, string>): Promise<Record<LocaleKey, string>> {
  if (preferred) {
    return preferred;
  }

  const repoDefaults = await getRepositoryLanguageDisplayNames();
  if (repoDefaults) {
    return repoDefaults;
  }

  return {} as Record<LocaleKey, string>;
}

export async function resolveBaseUrlPrefix(provided?: string): Promise<string> {
  if (provided && provided.trim().length > 0) {
    return normalizeBasePath(provided);
  }

  return normalizeBasePath(defaults.baseUrlPrefix ?? DEFAULT_BASE_URL_PREFIX);
}

export async function resolveProjectSlug(projectSlug?: string, projectDir?: string): Promise<string> {
  const normalized = normalizeSlug(projectSlug);
  if (normalized) {
    return normalized;
  }

  return normalizeSlug(extractProjectSlug(projectDir));
}

interface ResolveBaseUrlOptions {
  baseUrl?: string;
  baseUrlPrefix?: string;
  projectSlug?: string;
  projectDir?: string;
}

export async function resolveBaseUrl(options: ResolveBaseUrlOptions = {}): Promise<string> {
  if (options.baseUrl && options.baseUrl.trim().length > 0) {
    return normalizeBasePath(options.baseUrl);
  }

  const prefix = await resolveBaseUrlPrefix(options.baseUrlPrefix);
  const slug = await resolveProjectSlug(options.projectSlug, options.projectDir);

  if (!slug) {
    return prefix || '/';
  }

  const combined = `${prefix}/${slug}`.replace(/\/{2,}/g, '/');
  return combined.length > 1 && combined.endsWith('/') ? combined.slice(0, -1) : combined || '/';
}
