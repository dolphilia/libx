// @ts-check
import { defineDocsConfig } from '@docs/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineDocsConfig({
  site: 'https://libx.dev',
  base: '/docs/project-template',
  rootDir: __dirname,
});
