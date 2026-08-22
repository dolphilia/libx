// @ts-check
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import routeManifest from './src/generated/awesome-routes.json' with { type: 'json' };
import { remarkAwesomeInternalLinks } from '../../scripts/plugins/remark-awesome-internal-links.js';
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

config.markdown?.remarkPlugins?.push([
  remarkAwesomeInternalLinks,
  { baseUrl: projectConfig.paths.baseUrl, routes: routeManifest.entries },
]);

export default config;
