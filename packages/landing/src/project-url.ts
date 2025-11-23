import fs from 'node:fs/promises';
import path from 'node:path';
import type { LocaleKey } from '@docs/i18n/locales';
import { stripJsonComments, resolveSupportedLangs } from '@docs/project-config';
import type { Project } from './projects-schema';

/**
 * プロジェクトの最適なURLを生成
 * 1. プロジェクトの言語サポート状況を確認
 * 2. サポートしている場合は指定言語のURL
 * 3. サポートしていない場合はデフォルト言語（英語）にフォールバック
 */
export async function generateProjectUrl(project: Project, lang: LocaleKey): Promise<string> {
  const supportedLangs = await getProjectSupportedLanguages(project);
  const targetLang = supportedLangs.includes(lang) ? lang : 'en';

  if (project.fallbackUrl && project.fallbackUrl[targetLang]) {
    return project.fallbackUrl[targetLang]!;
  }

  if (project.fallbackUrl && project.fallbackUrl['en'] && targetLang !== 'en') {
    return project.fallbackUrl['en']!;
  }

  if (project.contentPath) {
    try {
      const dynamicUrl = await generateDynamicUrl(project.contentPath, targetLang, project.path);
      if (dynamicUrl) {
        return dynamicUrl;
      }
    } catch {
      // 動的生成に失敗した場合は引き続きフォールバック処理
    }
  }

  return `${project.path}/en`;
}

async function getProjectSupportedLanguages(project: Project): Promise<LocaleKey[]> {
  if (!project.contentPath) {
    if (project.fallbackUrl) {
      return Object.keys(project.fallbackUrl) as LocaleKey[];
    }
    return ['en'];
  }

  try {
    const baseConfigDir = path.resolve(
      process.cwd(),
      '..',
      '..',
      'apps',
      project.contentPath,
      'src',
      'config'
    );
    const jsoncPath = path.join(baseConfigDir, 'project.config.jsonc');
    const jsonPath = path.join(baseConfigDir, 'project.config.json');
    const projectConfigPath = await fileExists(jsoncPath) ? jsoncPath : jsonPath;
    const configContent = await fs.readFile(projectConfigPath, 'utf-8');
    const config = JSON.parse(stripJsonComments(configContent));

    const preferredSupported = config.language?.supported ?? config.basic?.supportedLangs;
    return await resolveSupportedLangs(preferredSupported as LocaleKey[] | undefined);
  } catch {
    try {
      const contentDir = path.resolve(
        process.cwd(),
        '..',
        '..',
        'apps',
        project.contentPath,
        'src',
        'content',
        'docs'
      );
      const supportedLangs: LocaleKey[] = [];

      const versions = await fs.readdir(contentDir, { withFileTypes: true });
      for (const version of versions) {
        if (!version.isDirectory()) continue;
        const versionPath = path.join(contentDir, version.name);
        const langs = await fs.readdir(versionPath, { withFileTypes: true });
        for (const langDir of langs) {
          if (langDir.isDirectory() && !supportedLangs.includes(langDir.name as LocaleKey)) {
            supportedLangs.push(langDir.name as LocaleKey);
          }
        }
      }

      if (supportedLangs.length > 0) {
        return supportedLangs;
      }
    } catch {
      // コンテンツディレクトリもアクセスできない場合はフォールバック
    }
  }

  if (project.fallbackUrl) {
    return Object.keys(project.fallbackUrl) as LocaleKey[];
  }

  return ['en'];
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generateDynamicUrl(contentPath: string, lang: LocaleKey, basePath: string): Promise<string | null> {
  const isProd = typeof window !== 'undefined' || process.env.NODE_ENV === 'production';

  if (isProd) {
    return null;
  }

  try {
    const firstPageUrl = await findFirstAvailablePage(contentPath, lang);
    if (firstPageUrl) {
      return `${basePath}/${firstPageUrl}`;
    }
  } catch {
    // 実際のコンテンツ検索に失敗した場合は汎用パターンへ
  }

  return `${basePath}/v2/${lang}/01-guide/01-getting-started`;
}

async function findFirstAvailablePage(contentPath: string, lang: LocaleKey): Promise<string | null> {
  try {
    const contentDir = path.resolve(
      process.cwd(),
      '..',
      '..',
      'apps',
      contentPath,
      'src',
      'content',
      'docs'
    );

    const versions = await fs.readdir(contentDir, { withFileTypes: true });
    const sortedVersions = versions
      .filter(v => v.isDirectory())
      .sort((a, b) => {
        if (a.name === 'v2' && b.name === 'v1') return -1;
        if (a.name === 'v1' && b.name === 'v2') return 1;
        return a.name.localeCompare(b.name);
      });

    for (const version of sortedVersions) {
      const langDir = path.join(contentDir, version.name, lang);
      try {
        await fs.access(langDir);
        const categories = await fs.readdir(langDir, { withFileTypes: true });
        const sortedCategories = categories
          .filter(c => c.isDirectory())
          .sort((a, b) => a.name.localeCompare(b.name));

        for (const category of sortedCategories) {
          const categoryPath = path.join(langDir, category.name);
          const files = await fs.readdir(categoryPath);
          const mdxFiles = files.filter(f => f.endsWith('.mdx')).sort();

          if (mdxFiles.length > 0) {
            const fileName = mdxFiles[0].replace('.mdx', '');
            return `${version.name}/${lang}/${category.name}/${fileName}`;
          }
        }
      } catch {
        continue;
      }
    }
  } catch {
    // ディレクトリアクセスエラー
  }

  return null;
}
