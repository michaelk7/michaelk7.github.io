import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getWriteups } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getWriteups();
  return rss({
    title: `${SITE.name} — write-ups`,
    description: 'Firmware research, CTF walkthroughs and security notes.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writeups/${post.id}/`,
      categories: [post.data.kind, ...post.data.tags],
    })),
  });
}
