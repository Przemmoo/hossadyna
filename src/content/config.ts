import { defineConfig } from 'astro/config';
import { defineCollection, z } from 'astro:content';

// Kolekcja artykułów
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),
    category: z.enum([
      'terapia',
      'zdrowie-psychiczne',
      'rozwoj-osobisty',
      'relacje',
    ]),
    tags: z.array(z.string()),
  }),
});

// Kolekcja opinii
const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    rating: z.number().min(1).max(5),
    therapy: z.string(),
    source: z.string(),
    date: z.date(),
    order: z.number(),
  }),
});

// Kolekcja usług
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    duration: z.string(),
    type: z.enum(['gabinet', 'online', 'oba']),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  articles: articlesCollection,
  reviews: reviewsCollection,
  services: servicesCollection,
};
