/**
 * Central site configuration.
 *
 * Everything that may change — contact routes, social profiles, the form
 * endpoint — lives here. Empty strings mean "not yet decided": the site hides
 * that element in production and shows a clearly marked placeholder in
 * development (`npm run dev`), so nothing invented ever reaches visitors.
 */

export interface ContactRoute {
  /** Short name shown as the heading for this route. */
  label: string;
  /** One line explaining who should use this route. */
  description: string;
  /** Email address for this route. Leave '' until a real address exists. */
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
  /** Canonical origin, no trailing slash. Keep in sync with astro.config.mjs. */
  url: 'https://tarvanta.in',
  locale: 'en_GB',
  lang: 'en-GB',
  tagline: 'Ideas into enduring ventures.',
  positioning: 'An insights-led global venture platform.',
  description:
    'Tarvanta is an insights-led global venture platform. Independent businesses are developed through it and operate under their own names.',

  /** Default social sharing image, relative to /public. 1200 × 630. */
  ogImage: '/og-default.png',

  contact: {
    /**
     * Optional form endpoint (e.g. a Cloudflare Pages Function, Formspree or
     * Basin URL) that accepts a POST with name, email, topic and message.
     * Leave '' to hide the form and show email routes only.
     */
    formEndpoint: '',

    routes: [
      {
        label: 'Strategic partnerships',
        description: 'For organisations considering a long-term partnership with Tarvanta.',
        email: '', // EDIT: e.g. partnerships@tarvanta.in
      },
      {
        label: 'Business enquiries',
        description: 'For specific commercial questions or proposals.',
        email: '', // EDIT: e.g. enquiries@tarvanta.in
      },
      {
        label: 'Collaboration',
        description: 'For founders, operators and specialists who want to build something together.',
        email: '', // EDIT
      },
      {
        label: 'General correspondence',
        description: 'For everything else, including press.',
        email: '', // EDIT: e.g. hello@tarvanta.in
      },
    ],

    /** Optional postal or registered address, one line per entry. */
    address: [], // EDIT

    /** Optional telephone number in international format. */
    phone: '', // EDIT
  },

  /** Add profiles only once they exist. Rendered in the footer. */
  social: [], // EDIT: e.g. { label: 'LinkedIn', url: 'https://www.linkedin.com/company/…' }

  /** Optional legal name and registration line for the footer. */
  legal: {
    entityName: '', // EDIT: registered company name, once incorporated
    registration: '', // EDIT: e.g. CIN or company number
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
