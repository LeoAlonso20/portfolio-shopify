import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({
    base: './src/content/case-studies',
    pattern: '**/*.json',
  }),
  schema: z.object({
    projectKey: z.enum(['nocturna', 'velor', 'rytual-cafe']),
    locale: z.enum(['en', 'es']),
    title: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    category: z.string(),
    cardSummary: z.string(),
    visualAlt: z.string(),
    hero: z.object({
      summary: z.string(),
      outcome: z.string(),
    }),
    snapshot: z.object({
      scope: z.string(),
      platform: z.string(),
      role: z.string(),
      focus: z.string(),
    }),
    context: z.array(z.string()).min(1),
    challenge: z.array(z.string()).min(1),
    approach: z.array(z.string()).min(1),
    solution: z.array(z.string()).min(1),
    uxCro: z.array(z.string()).min(1),
    engineering: z.array(z.string()).min(1),
    results: z.array(z.string()).min(1),
    beforeAfter: z
      .object({
        before: z.string(),
        after: z.string(),
      })
      .nullable(),
  }),
});

export const collections = { caseStudies };
