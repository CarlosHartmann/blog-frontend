import rss from '@astrojs/rss';
import { getPosts } from '../../lib/wp.js';

// The English feed lists the posts that have an English version.
export async function GET(context) {
  const posts = (await getPosts()).filter((post) => post.en);
  return rss({
    title: 'Carlos Ha',
    description: 'Blog by Carlos Hartmann: film, language, literature and computers.',
    site: new URL('/en/', context.site),
    customData: '<language>en-us</language>',
    items: posts.map((post) => ({
      title: post.en.titleText,
      link: `/en/${post.slug}/`,
      pubDate: new Date(`${post.dateGmt}Z`),
      description: post.en.excerpt,
    })),
  });
}
