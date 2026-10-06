import { remarkSourceHeadingIds } from '../../scripts/plugins/remark-uthash-source-heading-ids.js';
// @ts-check
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectConfig = await loadProjectConfig(__dirname);
const fallbackSite = 'https://libx.dev';

// https://astro.build/config
const docsConfig = defineDocsConfig({
  site: projectConfig.paths.siteUrl ?? fallbackSite,
  base: projectConfig.paths.baseUrl,
  rootDir: __dirname,
  rootDir: __dirname,
});

export default { ...docsConfig, markdown: { ...docsConfig.markdown, smartypants: false, remarkPlugins: [...docsConfig.markdown.remarkPlugins, remarkSourceHeadingIds] } };
