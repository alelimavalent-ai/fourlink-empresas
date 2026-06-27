import { SITE, NAP, FOUNDER } from '@/config/site';

const ORG_REF = { '@id': `${SITE.domain}/#organization` };

export function abs(path: string): string {
  return new URL(path, SITE.domain).href;
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: ORG_REF,
    areaServed: NAP.areasServed.map((n) => ({ '@type': 'State', name: n })),
    url: abs(opts.path),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  author?: string;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: { '@type': 'Person', name: opts.author ?? FOUNDER.name },
    publisher: ORG_REF,
    mainEntityOfPage: abs(opts.path),
    image: abs(opts.image ?? '/og/fourlink-og.jpg'),
    inLanguage: SITE.locale,
  };
}

export function citySchema(opts: { cidade: string; uf: string; description: string; path: string }) {
  return {
    '@type': 'Service',
    name: `Telefonia corporativa e internet empresarial em ${opts.cidade}`,
    description: opts.description,
    provider: ORG_REF,
    areaServed: { '@type': 'City', name: opts.cidade },
    url: abs(opts.path),
  };
}
