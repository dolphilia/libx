import fs from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';
import { stripJsonComments } from '@docs/project-config/jsonc';
// JavaScript製の既存プラグインをESMとして読み込む。
// @ts-expect-error このリポジトリ内のJavaScriptモジュールには宣言ファイルがない。
import { remarkLinkTransformer } from '../../../scripts/plugins/remark-link-transformer.js';
// @ts-expect-error このリポジトリ内のJavaScriptモジュールには宣言ファイルがない。
import { rehypeTaskListA11y } from '../../../scripts/plugins/rehype-task-list-a11y.js';

export interface DocsConfigOptions {
  site?: string;
  base?: string;
}

export function defineDocsConfig(options: DocsConfigOptions = {}) {
  const { site = 'https://libx.dev', base = '/' } = options;

  return defineConfig({
    site,
    base,
    integrations: [
      mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'github-dark-high-contrast',
          langs: [],
          wrap: true,
        },
        remarkPlugins: [[remarkLinkTransformer, { baseUrl: base }]],
        rehypePlugins: [rehypeTaskListA11y],
      }),
    ],
    vite: {
      build: {
        assetsInlineLimit: 0,
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name].[hash].[ext]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js',
          },
        },
      },
    },
    // ドキュメントサイトは /{version}/{lang}/ を独自に生成するため、
    // Astro標準の /{lang}/ 自動リダイレクトは使用しない。
  });
}

interface LandingI18nRoutingConfig {
  prefixDefaultLocale?: boolean;
}

export interface LandingI18nConfig {
  defaultLocale?: string;
  locales?: string[];
  routing?: LandingI18nRoutingConfig;
}

interface LandingSiteConfigJSON {
  siteUrl?: string;
  base?: string;
  i18n?: LandingI18nConfig;
}

export interface LandingSiteConfig {
  site: string;
  base: string;
  i18n: {
    defaultLocale: string;
    locales: string[];
    routing: {
      prefixDefaultLocale: boolean;
    };
  };
}

export interface LandingConfigOptions {
  site?: string;
  base?: string;
  i18n?: LandingI18nConfig;
}

const DEFAULT_LANDING_SITE = 'https://libx.dev';
const DEFAULT_LANDING_BASE = '';
const DEFAULT_LANDING_DEFAULT_LOCALE = 'en';
const DEFAULT_LANDING_LOCALES = [
  'en',
  'ja',
  'zh-Hans',
  'zh-Hant',
  'es',
  'pt-BR',
  'ko',
  'de',
  'fr',
  'ru',
  'ar',
  'id',
  'tr',
  'hi',
  'vi',
];

function resolveLandingI18n(i18n?: LandingI18nConfig): LandingSiteConfig['i18n'] {
  return {
    defaultLocale: i18n?.defaultLocale ?? DEFAULT_LANDING_DEFAULT_LOCALE,
    locales: i18n?.locales ?? DEFAULT_LANDING_LOCALES,
    routing: {
      prefixDefaultLocale: i18n?.routing?.prefixDefaultLocale ?? true,
    },
  };
}

export function defineLandingConfig(options: LandingConfigOptions = {}) {
  const { site = DEFAULT_LANDING_SITE, base = DEFAULT_LANDING_BASE, i18n } = options;
  const resolvedI18n = resolveLandingI18n(i18n);

  return defineConfig({
    site,
    base,
    integrations: [],
    vite: {
      build: {
        assetsInlineLimit: 0,
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name].[hash].[ext]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js',
          },
        },
      },
    },
    i18n: resolvedI18n,
  });
}

export async function loadLandingSiteConfig(projectDir?: string): Promise<LandingSiteConfig> {
  const resolvedDir = projectDir ? path.resolve(projectDir) : process.cwd();
  const configPath = path.join(resolvedDir, 'src', 'config', 'site.config.jsonc');

  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const parsed = JSON.parse(stripJsonComments(configContent)) as LandingSiteConfigJSON;
    const i18n = parsed.i18n ?? {};
    return {
      site: parsed.siteUrl ?? DEFAULT_LANDING_SITE,
      base: parsed.base ?? DEFAULT_LANDING_BASE,
      i18n: {
        defaultLocale: i18n.defaultLocale ?? DEFAULT_LANDING_DEFAULT_LOCALE,
        locales: i18n.locales ?? DEFAULT_LANDING_LOCALES,
        routing: {
          prefixDefaultLocale: i18n.routing?.prefixDefaultLocale ?? true,
        },
      },
    };
  } catch (error) {
    throw new Error(`Failed to load landing site config from ${configPath}: ${error}`);
  }
}
