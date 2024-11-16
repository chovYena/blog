import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    thumbnail: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
}; 