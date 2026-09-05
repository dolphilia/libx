// @ts-check
import { defineDocsConfig } from '@docs/config';
import { loadProjectConfig } from '@docs/project-config';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repositoryRoot = findRepositoryRoot(__dirname);
const { remarkAwesomeInternalLinks } = await import(
  pathToFileURL(path.join(repositoryRoot, 'scripts/plugins/remark-awesome-internal-links.js')).href
);
const { readAwesomeRouteManifest } = await import(
  pathToFileURL(path.join(repositoryRoot, 'scripts/importers/awesome/app-ownership.mjs')).href
);
const localizedRouteManifest = readAwesomeRouteManifest({ root: repositoryRoot });
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
  { baseUrl: projectConfig.paths.baseUrl, routes: localizedRouteManifest.entries },
]);

export default config;
