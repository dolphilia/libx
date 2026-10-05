import { defineDocsConfig } from '@docs/config';
const config = defineDocsConfig({
  site: 'https://libx.dev',
  base: '/docs/libuv',
  rootDir: import.meta.dirname,
});
export default { ...config, markdown: { ...config.markdown, smartypants: false } };
