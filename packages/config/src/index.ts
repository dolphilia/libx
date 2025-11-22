import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
// scripts/plugins にある既存プラグインを参照
const require = createRequire(import.meta.url);
const { remarkLinkTransformer } = require('../../../scripts/plugins/remark-link-transformer.js');

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
