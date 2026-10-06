import { defineCollection } from 'astro:content';
import { docsSchema } from '@docs/content-utils/content-schema';

export const collections = {
  docs: defineCollection({ schema: docsSchema }),
};
