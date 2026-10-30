import { getCollection, type CollectionEntry } from 'astro:content';

/** Drafts are visible in development only. */
const isVisible = (data: { draft: boolean }) => import.meta.env.DEV || !data.draft;

export async function getInsights(): Promise<CollectionEntry<'insights'>[]> {
  const entries = await getCollection('insights', ({ data }) => isVisible(data));
  return entries.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export async function getVentures(): Promise<CollectionEntry<'ventures'>[]> {
  const entries = await getCollection('ventures', ({ data }) => isVisible(data));
  return entries.sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name));
}

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatDate = (d: Date) => dateFormat.format(d);

/** Rough reading time from raw Markdown, at ~230 words per minute. */
export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}
