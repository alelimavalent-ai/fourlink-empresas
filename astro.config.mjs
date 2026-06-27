import { defineConfig } from 'astro/config';

// https://astro.build/config
// Observação: o sitemap é gerado por src/pages/sitemap.xml.ts (endpoint nativo),
// sem depender de integração externa — evita falhas de build.
export default defineConfig({
  site: 'https://fourlinkempresas.com',
  trailingSlash: 'never',
  prefetch: true,
});
