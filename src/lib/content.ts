import { getCollection } from 'astro:content';

const visible = (data: { draft: boolean }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => visible(data));
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getWriteups() {
  const all = await getCollection('writeups', ({ data }) => visible(data));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) => d.toISOString().slice(0, 10);
