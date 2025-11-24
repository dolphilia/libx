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
export default defineDocsConfig({
  site: projectConfig.paths.siteUrl ?? fallbackSite,
  base: projectConfig.paths.baseUrl,
  rootDir: __dirname,
});
