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

// Kolekcja ustawień
const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Schemat dla contact.md
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    hours: z.string().optional(),
    phone_hours: z.string().optional(),
    session_duration: z.string().optional(),
    therapy_forms: z.string().optional(),
    office_address: z.string().optional(),
    availability: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),

    // Schemat dla about.md
    title: z.string().optional(),
    intro_paragraph_1: z.string().optional(),
    intro_paragraph_2: z.string().optional(),
    qualifications_title: z.string().optional(),
    qualifications: z.array(z.string()).optional(),
    approach_title: z.string().optional(),
    approach_description: z.string().optional(),
    profile_image: z.string().optional(),
    profile_image_alt: z.string().optional(),

    // Schemat dla znanylekarz.md
    widget_code: z.string().optional(),
    profile_url: z.string().optional(),
    active: z.boolean().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  reviews: reviewsCollection,
  services: servicesCollection,
  settings: settingsCollection,
};
