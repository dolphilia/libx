// @ts-check
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import path from 'path';
import zlibSource from './src/plugins/remark-zlib-source.mjs';
import zlibHtml from './src/plugins/rehype-zlib-html.mjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectConfig = await loadProjectConfig(__dirname);
const fallbackSite = 'https://libx.dev';

// https://astro.build/config
const config = defineDocsConfig({
  site: projectConfig.paths.siteUrl ?? fallbackSite,
  base: projectConfig.paths.baseUrl,
  rootDir: __dirname,
});

export default { ...config, markdown: { ...config.markdown, smartypants: false, remarkPlugins: [zlibSource, ...(config.markdown?.remarkPlugins ?? [])], rehypePlugins: [zlibHtml, ...(config.markdown?.rehypePlugins ?? [])] } };
