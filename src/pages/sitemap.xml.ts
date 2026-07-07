import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@/config/site';

export const prerender = true;

/** Gera o sitemap.xml a partir das rotas estáticas + coleções de conteúdo.
 *  Implementação própria (sem integração externa) para evitar falhas de build. */
export const GET: APIRoute = async () => {
  const base = SITE.domain.replace(/\/+$/, '');

  const safe = async (name: string, fn: (e: any) => string): Promise<string[]> => {
    try {
      const items = (await getCollection(name as any)) ?? [];
      return items.map(fn).filter(Boolean);
    } catch {
      return [];
    }
  };

  const estaticas = [
    '/',
    '/sobre',
    '/servicos',
    '/solucoes',
    '/perguntas',
    '/calculadora-de-economia',
    '/faq',
    '/contato',
    '/trabalhe-conosco',
    '/central-do-gestor',
    '/atendimento',
  ];

  const ufs = ['rj', 'mg', 'es'].map((uf) => `/atendimento/${uf}`);
  const categorias = ['custos', 'gestao', 'internet', 'portabilidade', 'telefonia'].map(
    (c) => `/central-do-gestor/${c}`,
  );

  const servicos = await safe('servicos', (e) => `/servicos/${e.slug}`);
  const segmentos = await safe('segmentos', (e) => `/solucoes/${e.data.slug}`);
  const cidades = await safe('cidades', (e) => `/atendimento/${e.data.uf}/${e.data.customSlug}`);
  const artigos = await safe('artigos', (e) => `/central-do-gestor/${e.data.category}/${e.slug}`);
  const perguntas = await safe('perguntas', (e) => `/perguntas/${e.data.customSlug}`);

  const todas = [...estaticas, ...ufs, ...categorias, ...servicos, ...segmentos, ...cidades, ...artigos, ...perguntas];
  const unicas = Array.from(new Set(todas));

  const corpo = unicas
    .map((p) => `  <url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${corpo}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
