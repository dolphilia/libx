import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import { locales, defaultLocale } from '@docs/i18n/locales';
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

async function loadProjectsConfigFromJSON(configPath?: string): Promise<ProjectsConfigJSON> {
  const defaultPath = path.resolve(process.cwd(), 'src', 'config', 'projects.config.json');
  const filePath = configPath || defaultPath;

  try {
    const configContent = await fs.readFile(filePath, 'utf-8');
    const configJSON = JSON.parse(configContent) as ProjectsConfigJSON;

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
    const projects = await generateAutoProjects(projectDecorations);
    const landingContent = buildLandingContent(siteConfig.supportedLangs);

    _configCache = {
      projects,
      ...siteConfig,
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
