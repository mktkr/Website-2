import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('J. McKay Tucker, Esq.'),
    category: z.string().default('Estate Planning'),
    readTime: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    closingImage: z.string().optional(),
    ogImage: z.string().optional(),
    keywords: z.string().optional(),
    relatedResources: z.array(z.object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      href: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
