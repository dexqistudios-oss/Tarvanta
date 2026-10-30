# Tarvanta — corporate website

Source for **tarvanta.in**, the website of Tarvanta, an insights-led global venture platform.

Built with Astro 5, TypeScript and Tailwind CSS 4. Static output, no client framework, about 1 KB of JavaScript (the mobile menu). Deployed to Cloudflare Pages from GitHub.

---

## Quick start

Requirements: Node.js 20.3 or later (22 recommended, see `.nvmrc`) and npm.

```bash
npm install        # install dependencies
npm run dev        # local development at http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # serve the production build locally
npm run check      # type-check .astro and .ts files
```

> **First build:** this project was written in an environment without access to the npm registry, so `npm install` and `npm run build` have not yet been run on it. Run both once locally and commit the generated `package-lock.json`. If anything fails, the error will point to the file; see *Troubleshooting* below.

---

## Project structure

```
public/                   Static files copied as-is
  _headers                Security and caching headers for Cloudflare Pages
  robots.txt              Points crawlers at the sitemap
  og-default.png          Default social sharing image (1200×630)
  favicon.svg / .ico      Icons, plus apple-touch-icon and manifest icons
src/
  config/site.ts          ← Edit first: name, URLs, contact routes, social, legal
  content.config.ts       Content schemas for Insights and Ventures
  content/
    insights/             One Markdown file per article
    ventures/             One Markdown file per venture
  data/
    approach.ts           The five stages (Home + Our approach)
    principles.ts         Values and principles (About)
  styles/global.css       Design tokens (@theme) and typographic patterns
  layouts/BaseLayout.astro
  components/
    art/Strata.astro      Signature line drawing (generated SVG, no images)
    layout/               Header, Footer
    sections/             Ecosystem diagram, Insight list
    seo/                  <head> metadata and JSON-LD helpers
    ui/                   Button, Split, PageHero, Placeholder, Wordmark, ExternalLink
  lib/content.ts          Collection queries, date and reading-time helpers
  pages/                  index, about, approach, ventures, insights/, contact, 404
```

### Pages

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `pages/index.astro` | Proposition, introduction, philosophy, ecosystem, approach, insights, invitation |
| `/about/` | `pages/about.astro` | Why Tarvanta exists, purpose, operating philosophy, long-term view, principles |
| `/approach/` | `pages/approach.astro` | The five-stage operating philosophy |
| `/ventures/` | `pages/ventures.astro` | The ecosystem and what each venture keeps |
| `/insights/` | `pages/insights/index.astro` | Editorial index |
| `/insights/<slug>/` | `pages/insights/[slug].astro` | Article template |
| `/contact/` | `pages/contact.astro` | Contact routes and optional form |
| `/404` | `pages/404.astro` | Not found |

---

## Editing content

### Placeholders, and why you won't see invented content

Nothing on the site is invented: no clients, partners, figures, people, ventures or articles. Where information is still to come:

- **In development** (`npm run dev`), a dashed box marked *Placeholder (development only)* shows exactly what is missing and where to add it.
- **In production**, those boxes render nothing, and the page shows an honest holding line instead (for example, "Ventures are listed here once they are ready to be introduced publicly").

Search the code for `EDIT` to find every configurable value.

### Contact details — `src/config/site.ts`

```ts
contact: {
  formEndpoint: '',          // optional, see below
  routes: [
    { label: 'Strategic partnerships', description: '…', email: 'partnerships@tarvanta.in' },
    …
  ],
  address: [],               // optional, one line per entry
  phone: '',                 // optional, international format
},
social: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/company/…' }],
legal: { entityName: '', registration: '' },
```

Empty values are hidden on the live site.

**Enquiry form.** The contact form appears only when `formEndpoint` is set. Any service that accepts a standard HTML form POST will work, for example Formspree, Basin, Web3Forms, or your own Cloudflare Pages Function at `functions/api/contact.ts`. Fields sent: `name`, `email`, `organisation`, `topic`, `message`, and `website` (a spam trap that should be empty). If you use an external service, its domain is already permitted by the `form-action` rule in `public/_headers`.

### Publishing an Insights article

1. Copy `src/content/insights/writing-for-tarvanta-insights.md` to a new file. The file name becomes the URL: `my-article.md` → `/insights/my-article/`.
2. Edit the front matter: `title`, `summary` (40–260 characters, also used as the meta description), `topic` (one of the five in `src/config/site.ts`), `published` date, optional `cover` image and `coverAlt`.
3. Set `draft: false`.
4. Commit and push. Cloudflare rebuilds the site.

The sample article stays `draft: true`: it is visible in development and never published. Cover images placed next to the Markdown file are automatically resized and served as modern formats via `astro:assets`.

### Adding a venture

Copy `src/content/ventures/example-venture.md`, fill in `name`, `description`, `sector`, `stage` and, optionally, the venture's own `website`, then set `draft: false`. The venture appears in the ecosystem diagram on the Home and Ventures pages. Its website opens in a new tab with `rel="noopener noreferrer"`.

### Approach stages and principles

Edit `src/data/approach.ts` and `src/data/principles.ts`. Changes appear everywhere those are used.

---

## Design system

All tokens live in the `@theme` block of `src/styles/global.css` and are available as Tailwind utilities.

| Token | Value | Use |
| --- | --- | --- |
| `ivory` | `#f2eee3` | Page ground |
| `paper` | `#fbf9f3` | Raised surfaces, fields |
| `charcoal` | `#23221f` | Text, dark sections |
| `graphite` | `#55524b` | Secondary text (6.7:1 on ivory) |
| `stone` | `#c9c1b0` | Rules and borders |
| `olive` | `#5b5e3a` | Links, focus (5.9:1 on ivory) |
| `bronze` | `#a07a45` | Drawings and large marks only |
| `bronze-light` | `#c8a877` | Accent on charcoal |

**Type.** Newsreader (display and article text) and Hanken Grotesk (interface and body), both self-hosted via Fontsource. No third-party font requests. Scale classes: `t-hero`, `t-display`, `t-heading`, `t-subheading`, `t-lede`, `t-label`, `t-small`.

**Layout.** A 12-column asymmetric grid: headings in columns 1–5, text in columns 7–12 (`Split.astro`). Sentence-case labels throughout.

**Motion.** One orchestrated moment: the hero strata draw in once on load. The header gains a hairline on scroll (CSS scroll-driven animation, no JS). All motion is disabled under `prefers-reduced-motion`.

**Photography.** The brief calls for strong photographic art direction and no generic stock. Rather than use placeholder stock, the site currently uses the generated *Strata* drawing. When commissioned photography is available, add it with Astro's `<Image>` component (see the article cover handling in `pages/insights/[slug].astro`) so it is resized and compressed at build time.

---

## SEO and accessibility

- Unique `<title>` and meta description per page; canonical URLs; Open Graph and Twitter cards (`components/seo/SEO.astro`).
- JSON-LD: `Organization` and `WebSite` on the home page, `BreadcrumbList` on inner pages, `Article` on articles. Only true-by-construction facts are emitted.
- `sitemap-index.xml` generated by `@astrojs/sitemap` (404 excluded); `robots.txt` points to it.
- Clean URLs (`/about/`) via directory-format output.
- Skip link, landmark regions, one `h1` per page, logical heading order, visible focus styles, `aria-current` on navigation, keyboard-operable mobile menu (Escape closes and returns focus), labelled form fields, 44px minimum touch targets on actions.
- Colour contrast meets WCAG 2.2 AA for all text pairs above.
- External links open in a new tab with `rel="noopener noreferrer"` and announce that to screen readers.
- The mobile menu works without JavaScript (the links are shown in full).

To change the domain, update `SITE_URL` in `astro.config.mjs`, `url` in `src/config/site.ts`, and the sitemap line in `public/robots.txt`.

---

## Deploying to Cloudflare Pages

1. Push this folder to a new GitHub repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and choose the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22`
4. Save and deploy. Every push to the production branch redeploys; pull requests get preview URLs.
5. Under **Custom domains**, add `tarvanta.in` (and `www.tarvanta.in`, then redirect `www` to the apex in **Rules → Redirect Rules**).

`wrangler.toml` records the output directory for the Pages project. `public/_headers` sets security headers (CSP, HSTS, frame and referrer policies) and long-lived caching for fingerprinted assets.

---

## Quality checklist before launch

- [ ] `npm install && npm run build` completes without errors; commit `package-lock.json`.
- [ ] `npm run check` reports no type errors.
- [ ] Contact routes in `src/config/site.ts` filled in, or a form endpoint configured.
- [ ] `npm run preview`: visit every page at mobile (375px) and desktop widths; tab through each page with the keyboard.
- [ ] Browser console is clean on every page.
- [ ] Lighthouse (Chrome DevTools) run on Home and one article.
- [ ] `dist/sitemap-index.xml` lists all six pages.
- [ ] Social preview checked with a link-preview debugger after the first deploy.
- [ ] Privacy notice added if the contact form collects personal data.

## Troubleshooting

- **A Fontsource import fails to resolve:** check the package's file list on npm and adjust the import path in `src/layouts/BaseLayout.astro` (the default import `@fontsource-variable/newsreader` always exists).
- **Type warnings about Vite plugin types:** a known mismatch between Astro's bundled Vite and `@tailwindcss/vite`; it does not affect the build. Keep both packages up to date.
- **Content collection errors:** the message names the file and field; most often a `summary` outside 40–260 characters or a `topic` not in the list in `src/config/site.ts`.
