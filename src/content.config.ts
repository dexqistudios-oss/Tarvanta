import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { insightTopics } from './config/site';

/**
 * Insights — long-form editorial articles.
 * Add a Markdown file to src/content/insights/. Files with `draft: true`
 * appear in development only and are never built for production.
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(120),
      /** 1–2 sentences. Used on listing pages and as the meta description. */
      summary: z.string().min(40).max(260),
      topic: z.enum(insightTopics),
      published: z.coerce.date(),
      updated: z.coerce.date().optional(),
      /** Byline. Defaults to the organisation, which keeps founder visibility selective. */
      author: z.string().default('Tarvanta'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

/**
 * Ventures — independent businesses developed through Tarvanta.
 * Each keeps its own name, identity, website and social presence.
 * Add one Markdown file per venture to src/content/ventures/.
 */
const ventures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ventures' }),
  schema: z.object({
    name: z.string(),
    /** One sentence on what the venture does, in its own terms. */
    description: z.string().max(220),
    sector: z.string(),
    stage: z.enum(['In development', 'Launched', 'Operating']),
    /** The venture's own website. Opened in a new tab with rel="noopener noreferrer". */
    website: z.url().optional(),
    /** Display order on the Ventures page (lower first). */
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, ventures };
