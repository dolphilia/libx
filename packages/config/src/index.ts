import fs from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';
import { createRequire } from 'module';
// scripts/plugins にある既存プラグインを参照
const require = createRequire(import.meta.url);
const { remarkLinkTransformer } = require('../../../scripts/plugins/remark-link-transformer.js');

function stripJsonComments(text: string): string {
  let result = '';
  let inString = false;
  let inLineComment = false;
  let inBlockComment = false;
  let prevChar = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = i + 1 < text.length ? text[i + 1] : '';

    if (inLineComment) {
      if (char === '\n' || char === '\r') {
        inLineComment = false;
        result += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === '*' && nextChar === '/') {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (!inString && char === '/' && nextChar === '/') {
      inLineComment = true;
      i++;
      continue;
    }

    if (!inString && char === '/' && nextChar === '*') {
      inBlockComment = true;
      i++;
      continue;
    }

    result += char;

    if (char === '"' && prevChar !== '\\') {
      inString = !inString;
    }

    prevChar = char === '\\' && prevChar === '\\' ? '' : char;
  }

  return result;
}

export interface DocsConfigOptions {
  site?: string;
  base?: string;
  rootDir?: string;
}

export function defineDocsConfig(options: DocsConfigOptions = {}) {
  const {
    site = 'https://libx.dev',
    base = '/',
    rootDir = process.cwd(),
  } = options;

  return defineConfig({
    site,
    base,
    integrations: [
      mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'github-dark',
          langs: [],
          wrap: true
        },
        remarkPlugins: [
          [remarkLinkTransformer, { baseUrl: base }]
        ],
        rehypePlugins: []
      })
    ],
    vite: {
      resolve: {
        alias: {
          '@docs/ui': path.resolve(rootDir, '../../packages/ui/src'),
          '@docs/versioning': path.resolve(rootDir, '../../packages/versioning/src'),
          '@docs/theme': path.resolve(rootDir, '../../packages/theme/src'),
          '@docs/i18n': path.resolve(rootDir, '../../packages/i18n/src'),
        },
      },
      build: {
        assetsInlineLimit: 0,
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name].[hash].[ext]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js',
          }
        }
      },
    },
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ja'],
      routing: {
        prefixDefaultLocale: true
      }
    }
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
  rootDir?: string;
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
  'vi'
];

function resolveLandingI18n(i18n?: LandingI18nConfig): LandingSiteConfig['i18n'] {
  return {
    defaultLocale: i18n?.defaultLocale ?? DEFAULT_LANDING_DEFAULT_LOCALE,
    locales: i18n?.locales ?? DEFAULT_LANDING_LOCALES,
    routing: {
      prefixDefaultLocale: i18n?.routing?.prefixDefaultLocale ?? true
    }
  };
}

export function defineLandingConfig(options: LandingConfigOptions = {}) {
  const {
    site = DEFAULT_LANDING_SITE,
    base = DEFAULT_LANDING_BASE,
    rootDir = process.cwd(),
    i18n
  } = options;
  const resolvedI18n = resolveLandingI18n(i18n);

  return defineConfig({
    site,
    base,
    integrations: [],
    vite: {
      resolve: {
        alias: {
          '@docs/ui': path.resolve(rootDir, '../../packages/ui/src'),
          '@docs/theme': path.resolve(rootDir, '../../packages/theme/src'),
          '@docs/i18n': path.resolve(rootDir, '../../packages/i18n/src'),
          '@docs/landing': path.resolve(rootDir, '../../packages/landing/src')
        }
      },
      build: {
        assetsInlineLimit: 0,
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name].[hash].[ext]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js'
          }
        }
      }
    },
    i18n: resolvedI18n
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
          prefixDefaultLocale: i18n.routing?.prefixDefaultLocale ?? true
        }
      }
    };
  } catch (error) {
    throw new Error(`Failed to load landing site config from ${configPath}: ${error}`);
  }
}
