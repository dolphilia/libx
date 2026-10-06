import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@docs/content-utils/content-schema';

// Retain locked upstream metadata without changing the shared schema.
export const collections = {
  docs: defineCollection({
    schema: docsSchema.extend({
      sourceURL: z.string().url(),
      upstreamAuthors: z.array(z.string()),
      upstreamVersionHeader: z.string().nullable(),
    }),
  }),
};
