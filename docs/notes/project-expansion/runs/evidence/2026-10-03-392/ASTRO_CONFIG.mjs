// @ts-check
import spdlog from './src/plugins/remark-spdlog.mjs';
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import path from 'path';
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

// Preserve GitHub [!NOTE] markers and original prose through an app-local path.
export default {...config, markdown: {...config.markdown, smartypants: false, remarkPlugins: [spdlog, config.markdown.remarkPlugins[0]]}};
