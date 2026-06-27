import { defineCollection, z } from 'astro:content';

/** Serviços — corpo em Markdown com SEO próprio. */
const servicos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    short: z.string(),
    icon: z.string().default('chip'),
    order: z.number().default(0),
    // Resposta direta (formato que IAs citam) + perguntas frequentes
    answer: z.string(),
    plans: z.enum(['chips', 'fibra']).optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    benefits: z.array(z.string()).default([]),
  }),
});

/** Cidades — cada arquivo EXIGE conteúdo exclusivo (nunca duplicar). */
const cidades = defineCollection({
  type: 'content',
  schema: z.object({
    cidade: z.string(),
    uf: z.enum(['rj', 'mg', 'es']),
    ufNome: z.string(),
    customSlug: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    // Conteúdo local exclusivo e obrigatório:
    intro: z.string(),
    economicProfile: z.string(),
    bairros: z.array(z.string()).min(3),
    localAngle: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    populacao: z.string().optional(),
  }),
});

/** Central do Gestor — artigos com SEO completo e resposta-primeiro (GEO). */
const artigos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    category: z.enum(['custos', 'gestao', 'internet', 'portabilidade', 'telefonia']),
    answer: z.string(), // resposta direta no topo — citável por IAs
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Alessandro Valentim'),
    readingMinutes: z.number().default(5),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

/** Perguntas frequentes globais. */
const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    q: z.string(),
    a: z.string(),
    order: z.number().default(0),
  }),
});

/** Segmentos — uma página por tipo de empresa. Conteúdo SEMPRE exclusivo e tailored. */
const segmentos = defineCollection({
  type: 'content',
  schema: z.object({
    segmento: z.string(),
    customSlug: z.string(),
    icon: z.string().default('chip'),
    seoTitle: z.string().optional(),
    description: z.string(),
    // Conteúdo específico e obrigatório por segmento:
    intro: z.string(),
    dores: z.array(z.string()).min(3),
    comoAjudamos: z.string(),
    servicosRelacionados: z.array(z.string()).default([]),
    readingMinutes: z.number().default(4),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { servicos, cidades, artigos, faqs, segmentos };
