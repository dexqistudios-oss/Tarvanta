/**
 * JSON-LD helpers. Only facts that are true by construction are emitted:
 * the organisation's name, URL and description, and page-level data.
 */
import { site } from '@/config/site';

const abs = (path: string) => new URL(path, site.url).href;

export function organizationSchema() {
  const sameAs = site.social.map((s) => s.url);
  const email = site.contact.routes.find((r) => r.email)?.email;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: site.name,
    url: site.url,
    description: site.description,
    logo: abs('/favicon.svg'),
    ...(sameAs.length ? { sameAs } : {}),
    ...(email ? { email } : {}),
    ...(site.legal.entityName ? { legalName: site.legal.entityName } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: site.name,
    url: site.url,
    inLanguage: site.lang,
    publisher: { '@id': abs('/#organization') },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    mainEntityOfPage: abs(a.path),
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author:
      a.author === site.name
        ? { '@id': abs('/#organization') }
        : { '@type': 'Person', name: a.author },
    publisher: { '@id': abs('/#organization') },
    image: abs(a.image ?? site.ogImage),
    inLanguage: site.lang,
  };
}
