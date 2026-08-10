import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import fs from 'node:fs/promises';
import { stripJsonComments } from './jsonc';
import {
  normalizeSlug,
  normalizeSiteUrl,
  resolveBaseUrlPrefixValue,
  resolveBaseUrlValue,
  resolveDefaultLangValue,
  resolveDisplayNamesValue,
  resolveSiteUrlValue,
  resolveSupportedLangsValue,
} from '../default-resolvers.js';

interface GlobalDefaults {
  baseUrlPrefix?: string;
  siteUrl?: string;
  language?: {
    supported?: LocaleKey[];
    default?: LocaleKey;
    displayNames?: Partial<Record<LocaleKey, string>>;
  };
}

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

function extractProjectSlug(projectDir?: string): string {
  if (!projectDir) {
    return '';
  }

  const normalized = path.basename(path.resolve(projectDir));
  return normalized === '.' ? '' : normalized;
}

export async function getRepositoryDefaultLang(): Promise<LocaleKey | undefined> {
  const defs = await loadDefaults();
  return defs.language?.default;
}

export async function getRepositorySupportedLangs(): Promise<LocaleKey[] | undefined> {
  const defs = await loadDefaults();
  if (defs.language && Array.isArray(defs.language.supported)) {
    return [...defs.language.supported] as LocaleKey[];
  }
  return undefined;
}

export async function getRepositoryLanguageDisplayNames(): Promise<
  Record<LocaleKey, string> | undefined
> {
  const defs = await loadDefaults();
  if (defs.language?.displayNames) {
    return { ...(defs.language.displayNames as Record<LocaleKey, string>) };
  }
  return undefined;
}

export async function resolveDefaultLang(preferred?: LocaleKey): Promise<LocaleKey> {
  return resolveDefaultLangValue(await loadDefaults(), preferred);
}

export async function resolveSupportedLangs(preferred?: LocaleKey[]): Promise<LocaleKey[]> {
  return resolveSupportedLangsValue(await loadDefaults(), preferred);
}

export async function resolveLanguageDisplayNames(
  preferred?: Record<LocaleKey, string>
): Promise<Record<LocaleKey, string>> {
  return resolveDisplayNamesValue(await loadDefaults(), preferred);
}

export async function resolveBaseUrlPrefix(provided?: string): Promise<string> {
  return resolveBaseUrlPrefixValue(await loadDefaults(), provided);
}

export async function resolveProjectSlug(
  projectSlug?: string,
  projectDir?: string
): Promise<string> {
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
  return resolveBaseUrlValue(await loadDefaults(), {
    ...options,
    projectSlug: await resolveProjectSlug(options.projectSlug, options.projectDir),
  });
}

export async function getRepositorySiteUrl(): Promise<string | undefined> {
  const defs = await loadDefaults();
  return normalizeSiteUrl(defs.siteUrl);
}

export async function resolveSiteUrl(provided?: string): Promise<string> {
  return resolveSiteUrlValue(await loadDefaults(), provided);
}
