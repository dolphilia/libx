import { z } from 'astro/zod';

/** 全ドキュメントサイトが共有するFrontmatter契約。 */
export const docsSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    categoryOrder: z.number().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    prev: z.object({ text: z.string(), link: z.string() }).optional(),
    next: z.object({ text: z.string(), link: z.string() }).optional(),
    licenseSource: z.string().optional(),
    customAttribution: z.string().optional(),
    hideAttribution: z.boolean().optional().default(false),
    toc: z
      .object({
        minLevel: z.number().int().min(2).max(6).optional(),
        maxLevel: z.number().int().min(2).max(6).optional(),
        maxItems: z.number().int().positive().optional(),
      })
      .refine((value) => (value.minLevel ?? 2) <= (value.maxLevel ?? 3), {
        message: 'toc.minLevel must be less than or equal to toc.maxLevel',
      })
      .optional(),
  })
  .strict();

export type DocsFrontmatter = z.infer<typeof docsSchema>;
