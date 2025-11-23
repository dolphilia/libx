import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import { stripJsonComments, resolveBaseUrl, resolveSupportedLangs } from '@docs/project-config';

export interface DetectedProject {
  id: string;
  name: Record<LocaleKey, string>;
  description: Record<LocaleKey, string>;
  basePath: string;
  supportedLangs: LocaleKey[];
  fallbackUrls: Record<LocaleKey, string>;
}

export interface ContentFile {
  lang: string;
  version: string;
  section: string;
  fileName: string;
  url: string;
}

/**
 * apps/ディレクトリ内のドキュメントプロジェクトを検出
 */
export async function scanAppsDirectory(): Promise<string[]> {
  const repoRoot = path.resolve(process.cwd(), '..', '..');
  const appsDir = path.join(repoRoot, 'apps');
  const projects: string[] = [];

  try {
    const entries = await fs.readdir(appsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name === 'project-template') {
        continue;
      }

      const contentPath = path.join(appsDir, entry.name, 'src', 'content', 'docs');
      try {
        await fs.access(contentPath);
        projects.push(entry.name);
      } catch {
        // ドキュメントディレクトリがない場合はスキップ
      }
    }
  } catch (error) {
    console.warn('apps/ディレクトリのスキャンに失敗しました:', error);
  }

  return projects;
}

/**
 * 指定されたプロジェクトの情報を自動検出
 */
export async function detectProject(projectId: string): Promise<DetectedProject> {
  const repoRoot = path.resolve(process.cwd(), '..', '..');
  const projectPath = path.join(repoRoot, 'apps', projectId);

  const docsConfig = await loadDocsConfigFromJSON(projectPath);
  const preferredSupported = docsConfig.language?.supported ?? docsConfig.basic?.supportedLangs;
  const supportedLangs = await resolveSupportedLangs(preferredSupported);
  const defaultLang = docsConfig.language?.default ?? docsConfig.basic?.defaultLang ?? 'en';
  const displayNames = docsConfig.language?.displayNames ?? docsConfig.languageNames ?? {};
  docsConfig.language = {
    supported: supportedLangs,
    default: defaultLang,
    displayNames
  };
  const baseUrl = await resolveBaseUrl({
    baseUrl: docsConfig.basic?.baseUrl,
    baseUrlPrefix: docsConfig.basic?.baseUrlPrefix,
    projectSlug: docsConfig.basic?.projectSlug,
    projectDir: projectPath
  });
  const latestVersion = getLatestVersion(docsConfig.versioning.versions);
  const contentFiles = await scanProjectContent(projectPath);

  const fallbackUrls: Record<string, string> = {};
  const actualSupportedLangs: LocaleKey[] = [];

  for (const lang of docsConfig.language.supported) {
    const firstFile = findFirstContentFile(contentFiles, lang, latestVersion);
    if (firstFile) {
      fallbackUrls[lang] = `${baseUrl}/${latestVersion}/${lang}/${firstFile}`;
      actualSupportedLangs.push(lang);
    }
  }

  const englishFile = findFirstContentFile(contentFiles, 'en', latestVersion);
  if (englishFile && !fallbackUrls['en']) {
    fallbackUrls['en'] = `${baseUrl}/${latestVersion}/en/${englishFile}`;
    if (!actualSupportedLangs.includes('en')) {
      actualSupportedLangs.push('en');
    }
  }

  if (Object.keys(fallbackUrls).length === 0) {
    fallbackUrls['en'] = `${baseUrl}/${latestVersion}/en/01-guide/01-getting-started`;
    actualSupportedLangs.push('en');
  }

  return {
    id: projectId,
    name: extractDisplayNames(docsConfig),
    description: extractDisplayDescriptions(docsConfig),
    basePath: baseUrl,
    supportedLangs: actualSupportedLangs.length > 0 ? actualSupportedLangs : docsConfig.language.supported,
    fallbackUrls
  };
}

async function loadDocsConfigFromJSON(projectPath: string) {
  const configPath = await resolveDocsConfigPath(projectPath);

  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const config = JSON.parse(stripJsonComments(configContent));

    if (config.versioning?.versions) {
      config.versioning.versions = config.versioning.versions.map((version: any) => ({
        ...version,
        date: new Date(version.date)
      }));
    }

    return config;
  } catch (error) {
    throw new Error(`JSONプロジェクト設定ファイルの読み込みに失敗: ${configPath} - ${error}`);
  }
}

async function resolveDocsConfigPath(projectPath: string): Promise<string> {
  const configDir = path.join(projectPath, 'src', 'config');
  const jsoncPath = path.join(configDir, 'project.config.jsonc');
  const jsonPath = path.join(configDir, 'project.config.json');
  try {
    await fs.access(jsoncPath);
    return jsoncPath;
  } catch {
    return jsonPath;
  }
}

function extractDisplayNames(config: any): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation && typeof translation === 'object' && (translation as any).displayName) {
        result[lang as LocaleKey] = (translation as any).displayName;
      }
    }
  }

  if (Object.keys(result).length === 0) {
    result.en = 'Unknown Project';
    result.ja = '不明なプロジェクト';
  }

  return result;
}

function extractDisplayDescriptions(config: any): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation && typeof translation === 'object' && (translation as any).displayDescription) {
        result[lang as LocaleKey] = (translation as any).displayDescription;
      }
    }
  }

  if (Object.keys(result).length === 0) {
    result.en = 'No description available';
    result.ja = '説明がありません';
  }

  return result;
}

function getLatestVersion(versions: any[]): string {
  if (!versions || versions.length === 0) {
    return 'v1';
  }

  const latestVersion = versions.find(v => v.isLatest);
  if (latestVersion) {
    return latestVersion.id;
  }

  const v2 = versions.find(v => v.id === 'v2');
  if (v2) return 'v2';

  const v1 = versions.find(v => v.id === 'v1');
  if (v1) return 'v1';

  return versions[0]?.id || 'v1';
}

async function scanProjectContent(projectPath: string): Promise<ContentFile[]> {
  const contentDir = path.join(projectPath, 'src', 'content', 'docs');
  const files: ContentFile[] = [];

  try {
    const mdxFiles = await scanDirectory(contentDir);

    for (const filePath of mdxFiles) {
      const pathParts = filePath.split(path.sep);

      if (pathParts.length >= 4) {
        const [version, lang, section, fileName] = pathParts;
        const fileSlug = fileName.replace(/\.mdx?$/, '');

        files.push({
          lang,
          version,
          section,
          fileName: fileSlug,
          url: `${section}/${fileSlug}`
        });
      }
    }
  } catch (error) {
    console.warn(`コンテンツスキャンに失敗: ${projectPath}`, error);
  }

  return files;
}

async function scanDirectory(dirPath: string, basePath = ''): Promise<string[]> {
  const files: string[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? path.join(basePath, entry.name) : entry.name;

      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath, relativePath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.match(/\.mdx?$/)) {
        files.push(relativePath);
      }
    }
  } catch {
    // ディレクトリが存在しない場合やアクセス権限がない場合はスキップ
  }

  return files;
}

function findFirstContentFile(files: ContentFile[], lang: string, version: string): string | null {
  const filtered = files
    .filter(f => f.lang === lang && f.version === version)
    .sort((a, b) => {
      const sectionPriority: Record<string, number> = {
        guide: 0,
        api: 1,
        examples: 2,
        reference: 3,
        faq: 4
      };
      const aPriority = sectionPriority[a.section] || 99;
      const bPriority = sectionPriority[b.section] || 99;

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      const aNum = parseInt(a.fileName.match(/^(\d+)-/)?.[1] || '999');
      const bNum = parseInt(b.fileName.match(/^(\d+)-/)?.[1] || '999');
      return aNum - bNum;
    });

  if (filtered.length > 0) {
    return filtered[0].url;
  }

  return null;
}
