import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import { loadProjectConfig } from '@docs/project-config';
import type { ProjectConfig, VersionConfig } from '@docs/project-config';

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
      if (!entry.isDirectory()) {
        continue;
      }

      const projectPath = path.join(appsDir, entry.name);
      if (await findProjectContentRoot(projectPath)) {
        projects.push(entry.name);
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

  const docsConfig = await loadProjectConfig(projectPath);
  const baseUrl = docsConfig.paths.baseUrl;
  const latestVersion = getLatestVersion(docsConfig.versioning.versions);
  const contentRoot = await findProjectContentRoot(projectPath);
  const contentFiles = await scanProjectContent(projectPath, contentRoot);
  const preferredSection = contentRoot?.endsWith(`${path.sep}awesome-content`)
    ? 'overview'
    : undefined;

  const fallbackUrls: Record<string, string> = {};
  const actualSupportedLangs: LocaleKey[] = [];

  for (const lang of docsConfig.language.supported) {
    const firstFile = findFirstContentFile(contentFiles, lang, latestVersion, preferredSection);
    if (firstFile) {
      fallbackUrls[lang] = `${baseUrl}/${latestVersion}/${lang}/${firstFile}`;
      actualSupportedLangs.push(lang);
    }
  }

  const englishFile = findFirstContentFile(contentFiles, 'en', latestVersion, preferredSection);
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
    supportedLangs:
      actualSupportedLangs.length > 0 ? actualSupportedLangs : docsConfig.language.supported,
    fallbackUrls,
  };
}

function extractDisplayNames(config: ProjectConfig): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation.displayName) {
        result[lang as LocaleKey] = translation.displayName;
      }
    }
  }

  if (Object.keys(result).length === 0) {
    result.en = 'Unknown Project';
    result.ja = '不明なプロジェクト';
  }

  return result;
}

function extractDisplayDescriptions(config: ProjectConfig): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;

  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation.displayDescription) {
        result[lang as LocaleKey] = translation.displayDescription;
      }
    }
  }

  if (Object.keys(result).length === 0) {
    result.en = 'No description available';
    result.ja = '説明がありません';
  }

  return result;
}

function getLatestVersion(versions: VersionConfig[]): string {
  if (!versions || versions.length === 0) {
    return 'v1';
  }

  const latestVersion = versions.find((v) => v.isLatest);
  if (latestVersion) {
    return latestVersion.id;
  }

  const v2 = versions.find((v) => v.id === 'v2');
  if (v2) return 'v2';

  const v1 = versions.find((v) => v.id === 'v1');
  if (v1) return 'v1';

  return versions[0]?.id || 'v1';
}

async function scanProjectContent(
  projectPath: string,
  resolvedContentRoot?: string | null
): Promise<ContentFile[]> {
  const files: ContentFile[] = [];
  const contentDir = resolvedContentRoot ?? (await findProjectContentRoot(projectPath));

  if (!contentDir) {
    return files;
  }

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
          url: `${section}/${fileSlug}`,
        });
      }
    }
  } catch (error) {
    console.warn(`コンテンツスキャンに失敗: ${projectPath}`, error);
  }

  return files;
}

async function findProjectContentRoot(projectPath: string): Promise<string | null> {
  const candidates = [
    path.join(projectPath, 'src', 'content', 'docs'),
    path.join(projectPath, 'src', 'awesome-content'),
  ];

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // 次の対応コンテンツルートを確認する
    }
  }

  return null;
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

function findFirstContentFile(
  files: ContentFile[],
  lang: string,
  version: string,
  preferredSection?: string
): string | null {
  const filtered = files
    .filter((f) => f.lang === lang && f.version === version)
    .sort((a, b) => {
      if (preferredSection) {
        const aPreferred = a.section === preferredSection;
        const bPreferred = b.section === preferredSection;
        if (aPreferred !== bPreferred) return aPreferred ? -1 : 1;
      }

      const sectionPriority: Record<string, number> = {
        guide: 0,
        api: 1,
        examples: 2,
        reference: 3,
        faq: 4,
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
