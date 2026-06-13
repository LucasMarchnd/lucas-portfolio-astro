import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod/v4';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.number(),
    status: z.enum(['Done', 'In progress', 'Prototype', 'Planned']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    image: z.string(),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    repo: z.url(),
    demo: z.url().optional(),
  }),
});

export const collections = { projects };
