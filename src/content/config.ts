import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string(), // 2-3 lines for card display
    cardImage: z.string().optional(),
    youtubeId: z.string().optional(), // If post features a song
    publishedDate: z.coerce.date(),
    originalDate: z.coerce.date().optional(), // For archived posts
    archiveNote: z.string().optional(), // "I wrote this before AI existed..."
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    series: z.string().optional(), // "Dilli Ka Thug", "Telephonic Tales"
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    cardImage: z.string().optional(),
    publishedDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    toolUrl: z.string().optional(), // External link if tool is hosted elsewhere
  }),
});

export const collections = { notes, tools };
