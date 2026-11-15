import rss from '@astrojs/rss';
import { getPosts } from '../lib/wp.js';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Carlos Ha',
    description: 'Blog von Carlos Hartmann: Film, Sprache, Literatur und Computer.',
    site: context.site,
    customData: '<language>de-ch</language>',
    items: posts.map((post) => ({
      title: post.titleText,
      link: `/${post.slug}/`,
      pubDate: new Date(`${post.dateGmt}Z`),
      description: post.excerpt,
    })),
  });
}
