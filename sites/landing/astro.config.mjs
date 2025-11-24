// @ts-check
import { defineLandingConfig, loadLandingSiteConfig } from '@docs/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteConfig = await loadLandingSiteConfig(__dirname);

// https://astro.build/config
export default defineLandingConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  i18n: siteConfig.i18n,
  rootDir: __dirname,
});
