/**
 * Central site configuration.
 *
 * Everything that may change — contact routes, social profiles, the form
 * endpoint — lives here. Empty strings mean "not yet decided": the site hides
 * that element in production and shows a clearly marked placeholder in
 * development, so nothing invented ever reaches visitors.
 */

export interface ContactRoute {
  label: string;
  description: string;
  email: string;
}

export interface SocialProfile {
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  locale: string;
  lang: string;
  tagline: string;
  positioning: string;
  description: string;
  ogImage: string;
  contact: {
    formEndpoint: string;
    routes: ContactRoute[];
    address: string[];
    phone: string;
  };
  social: SocialProfile[];
  legal: { entityName: string; registration: string };
}

export const site: SiteConfig = {
  name: 'Tarvanta',
  url: 'https://tarvanta.in',
  locale: 'en_GB',
  lang: 'en-GB',
  tagline: 'Ideas into enduring ventures.',
  positioning: 'An insights-led global venture platform.',
  description:
    'Tarvanta is an insights-led global venture platform connecting research, problem-solving and venture development.',

  ogImage: '/og-default.png',

  contact: {
    formEndpoint: '',
    routes: [
      {
        label: 'General correspondence',
        description: 'For business enquiries, research conversations, partnerships and other considered correspondence.',
        email: 'tarvanta.hq@outlook.com',
      },
    ],
    address: [],
    phone: '',
  },

  social: [],

  legal: {
    entityName: '',
    registration: '',
  },
};

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Our approach', href: '/approach/' },
  { label: 'Ventures', href: '/ventures/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const insightTopics = [
  'Strategic perspectives',
  'Business and industry',
  'Entrepreneurship',
  'Global opportunities',
  'Innovation and emerging markets',
] as const;

export type InsightTopic = (typeof insightTopics)[number];
