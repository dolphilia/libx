import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import fs from 'node:fs/promises';

interface GlobalDefaults {
  defaultLang?: LocaleKey;
  baseUrlPrefix?: string;
  siteUrl?: string;
  language?: {
    supported?: LocaleKey[];
    default?: LocaleKey;
    displayNames?: Partial<Record<LocaleKey, string>>;
  };
}

const DEFAULT_LANG: LocaleKey = 'en';
const DEFAULT_BASE_URL_PREFIX = '/docs';
const DEFAULT_SITE_URL = 'https://libx.dev';
const DEFAULT_SUPPORTED_LANGS: LocaleKey[] = ['en'];
let defaults: GlobalDefaults | null = null;
const CONFIG_URL = new URL('../../../config/global-defaults.jsonc', import.meta.url);

async function loadDefaults(): Promise<GlobalDefaults> {
  if (defaults) {
    return defaults;
  }

  try {
    const content = await fs.readFile(CONFIG_URL, 'utf-8');
    defaults = JSON.parse(stripJsonComments(content)) as GlobalDefaults;
  } catch {
    defaults = {};
  }

  return defaults;
}

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

function normalizeSiteUrl(value?: string): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  const sanitized = trimmed.replace(/\/+$/, '');
  return sanitized || undefined;
}

export async function getRepositoryDefaultLang(): Promise<LocaleKey | undefined> {
  const defs = await loadDefaults();
  return defs.defaultLang ?? defs.language?.default;
}

export async function getRepositorySupportedLangs(): Promise<LocaleKey[] | undefined> {
  const defs = await loadDefaults();
  if (defs.language && Array.isArray(defs.language.supported)) {
    return [...defs.language.supported] as LocaleKey[];
  }
  return undefined;
}

export async function getRepositoryLanguageDisplayNames(): Promise<Record<LocaleKey, string> | undefined> {
  const defs = await loadDefaults();
  if (defs.language?.displayNames) {
    return { ...(defs.language.displayNames as Record<LocaleKey, string>) };
  }
  return undefined;
}

export async function resolveDefaultLang(preferred?: LocaleKey): Promise<LocaleKey> {
  if (preferred) {
    return preferred;
  }

  const defs = await loadDefaults();
  if (defs.defaultLang) {
    return defs.defaultLang as LocaleKey;
  }

  if (defs.language?.default) {
    return defs.language.default as LocaleKey;
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

  const defs = await loadDefaults();
  return normalizeBasePath(defs.baseUrlPrefix ?? DEFAULT_BASE_URL_PREFIX);
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

export async function getRepositorySiteUrl(): Promise<string | undefined> {
  return normalizeSiteUrl(defaults.siteUrl);
}

export async function resolveSiteUrl(provided?: string): Promise<string> {
  const normalizedProvided = normalizeSiteUrl(provided);
  if (normalizedProvided) {
    return normalizedProvided;
  }

  const repo = await getRepositorySiteUrl();
  if (repo) {
    return repo;
  }

  return DEFAULT_SITE_URL;
}
