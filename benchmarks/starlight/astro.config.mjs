import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  base: '/starlight',
  integrations: [starlight({ title: 'Starlight comparison' })],
});
