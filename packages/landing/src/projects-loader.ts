import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import { locales, defaultLocale } from '@docs/i18n/locales';
import { resolveDefaultLang, stripJsonComments } from '@docs/project-config';
import type {
  ProjectsConfigJSON,
  SiteConfigJSON,
  Project,
  ProjectDecoration,
  TopPageConfig
} from './projects-schema';
import {
  convertProjectsConfigJSONToRuntime,
  validateProjectsConfig
} from './projects-schema';
import { scanAppsDirectory, detectProject } from './project-detector';

let _configCache: TopPageConfig | null = null;
let _landingDefaultsCache: LandingDefaults | null = null;

interface LandingDefaults {
  baseUrl: string;
  supportedLangs: LocaleKey[];
  defaultLang: LocaleKey;
}

const FALLBACK_SUPPORTED_LANGS: LocaleKey[] = ['en', 'ja'];
const FALLBACK_DEFAULT_LANG: LocaleKey = 'en';

async function loadProjectsConfigFromJSON(configPath?: string): Promise<ProjectsConfigJSON> {
  const filePath = configPath || (await resolveProjectsConfigPath());

  try {
    const configContent = await fs.readFile(filePath, 'utf-8');
    const configJSON = JSON.parse(stripJsonComments(configContent)) as ProjectsConfigJSON;

    if (!validateProjectsConfig(configJSON)) {
      throw new Error('Invalid projects configuration');
    }

    return configJSON;
  } catch (error) {
    throw new Error(`Failed to load projects config from ${filePath}: ${error}`);
  }
}

async function generateAutoProjects(decorations: Record<string, ProjectDecoration>): Promise<Project[]> {
  const projectIds = await scanAppsDirectory();
  const projects: Project[] = [];

  for (const id of projectIds) {
    try {
      const detected = await detectProject(id);
      const decoration = decorations[id] || {};

      projects.push({
        id: detected.id,
        name: detected.name,
        description: detected.description,
        path: detected.basePath,
        contentPath: detected.id,
        fallbackUrl: detected.fallbackUrls,
        ...decoration
      });
    } catch (error) {
      console.warn(`プロジェクト ${id} の自動検出に失敗しました:`, error instanceof Error ? error.message : error);
      const decoration = decorations[id] || {};
      const basicFallbackUrl: Record<string, string> = {};

      basicFallbackUrl['en'] = `/docs/${id}/v1/en/01-guide/01-getting-started`;

      try {
        const repoRoot = path.resolve(process.cwd(), '..', '..');
        const jaContentPath = path.join(repoRoot, 'apps', id, 'src', 'content', 'docs', 'v1', 'ja');
        await fs.access(jaContentPath);
        basicFallbackUrl['ja'] = `/docs/${id}/v1/ja/01-guide/01-getting-started`;
      } catch {
        basicFallbackUrl['ja'] = basicFallbackUrl['en'];
      }

      projects.push({
        id,
        name: {
          en: id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' '),
          ja: id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')
        },
        description: {
          en: `Documentation for ${id}`,
          ja: `${id}のドキュメント`
        },
        path: `/docs/${id}`,
        contentPath: id,
        fallbackUrl: basicFallbackUrl,
        ...decoration
      });
    }
  }

  return projects;
}

export async function getTopPageConfig(): Promise<TopPageConfig> {
  if (_configCache) {
    return _configCache;
  }

  try {
    const configJSON = await loadProjectsConfigFromJSON();
    const { siteConfig, projectDecorations } = convertProjectsConfigJSONToRuntime(configJSON);
    const normalizedSiteConfig = await buildSiteConfigWithDefaults(siteConfig);
    const projects = await generateAutoProjects(projectDecorations);
    const landingContent = buildLandingContent(normalizedSiteConfig.supportedLangs);

    _configCache = {
      projects,
      ...normalizedSiteConfig,
      siteDescription: landingContent.siteDescription,
      heroTitle: landingContent.heroTitle,
      heroDescription: landingContent.heroDescription
    };

    return _configCache;
  } catch (error) {
    console.error('Failed to load landing config:', error);
    return getFailsafeConfig();
  }
}

export function clearConfigCache(): void {
  _configCache = null;
}

export async function loadStaticConfig(): Promise<{
  siteConfig: SiteConfigJSON;
  projectDecorations: Record<string, ProjectDecoration>;
}> {
  const configJSON = await loadProjectsConfigFromJSON();
  return convertProjectsConfigJSONToRuntime(configJSON);
}

type LandingContentKey = 'siteDescription' | 'heroTitle' | 'heroDescription';

interface LandingContentMap {
  siteDescription: Record<LocaleKey, string>;
  heroTitle: Record<LocaleKey, string>;
  heroDescription: Record<LocaleKey, string>;
}

const landingKeys: LandingContentKey[] = ['siteDescription', 'heroTitle', 'heroDescription'];

function buildLandingContent(supportedLangs: LocaleKey[]): LandingContentMap {
  const result: LandingContentMap = {
    siteDescription: {},
    heroTitle: {},
    heroDescription: {}
  };

  for (const lang of supportedLangs) {
    for (const key of landingKeys) {
      result[key][lang] = resolveLandingTranslation(key, lang);
    }
  }

  return result;
}

function resolveLandingTranslation(key: LandingContentKey, lang: LocaleKey): string {
  const localeData = locales[lang] as Record<string, any> | undefined;
  const landingSection = localeData?.landing as Record<LandingContentKey, string> | undefined;
  const fallbackLanding =
    (locales[defaultLocale] as Record<string, any>)?.landing as Record<LandingContentKey, string> | undefined;

  if (landingSection && typeof landingSection[key] === 'string') {
    return landingSection[key];
  }

  if (fallbackLanding && typeof fallbackLanding[key] === 'string') {
    return fallbackLanding[key];
  }

  return '';
}

function getFailsafeConfig(): TopPageConfig {
  const fallbackLangs: LocaleKey[] = ['en', 'ja'];
  const landingContent = buildLandingContent(fallbackLangs);

  return {
    projects: [],
    baseUrl: '',
    supportedLangs: fallbackLangs,
    defaultLang: 'en',
    repository: 'https://github.com/libx-dev/libx-dev',
    siteName: 'Libx',
    siteDescription: landingContent.siteDescription,
    heroTitle: landingContent.heroTitle,
    heroDescription: landingContent.heroDescription
  };
}

async function resolveProjectsConfigPath(): Promise<string> {
  const configDir = path.resolve(process.cwd(), 'src', 'config');
  const jsoncPath = path.join(configDir, 'projects.config.jsonc');
  const jsonPath = path.join(configDir, 'projects.config.json');
  try {
    await fs.access(jsoncPath);
    return jsoncPath;
  } catch {
    return jsonPath;
  }
}

async function loadLandingDefaults(): Promise<LandingDefaults> {
  if (_landingDefaultsCache) {
    return _landingDefaultsCache;
  }

  const configDir = path.resolve(process.cwd(), 'src', 'config');
  const jsoncPath = path.join(configDir, 'site.config.jsonc');
  let parsed: any = {};

  try {
    const content = await fs.readFile(jsoncPath, 'utf-8');
    parsed = JSON.parse(stripJsonComments(content));
  } catch {
    // fallback to defaults below
  }

  const i18n = parsed?.i18n ?? {};
  const baseUrl = typeof parsed?.base === 'string' ? parsed.base : '';
  const supportedLangs = Array.isArray(i18n.locales) && i18n.locales.length > 0 ? (i18n.locales as LocaleKey[]) : FALLBACK_SUPPORTED_LANGS;
  const defaultLang = (i18n.defaultLocale as LocaleKey | undefined) ?? FALLBACK_DEFAULT_LANG;

  _landingDefaultsCache = {
    baseUrl,
    supportedLangs,
    defaultLang
  };

  return _landingDefaultsCache;
}

async function buildSiteConfigWithDefaults(siteConfig: SiteConfigJSON) {
  const landingDefaults = await loadLandingDefaults();
  const defaultLang = await resolveDefaultLang(siteConfig.defaultLang ?? landingDefaults.defaultLang);

  return {
    baseUrl: siteConfig.baseUrl ?? landingDefaults.baseUrl,
    supportedLangs: (siteConfig.supportedLangs ?? landingDefaults.supportedLangs) as LocaleKey[],
    defaultLang,
    repository: siteConfig.repository ?? 'https://github.com/libx-dev/libx-dev',
    siteName: siteConfig.siteName ?? 'Libx'
  };
}
