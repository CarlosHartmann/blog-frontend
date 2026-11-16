// Everything the site knows comes from the WordPress REST API at build time.
// Each list is fetched once per build and shared by all pages.
import { plainText, prepareContent } from './content.js';

export const API = 'https://admin.smog.sh/wp-json/';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// The WordPress host is shared hosting and answers 503/508 under load, so
// requests go out one at a time and are retried with a growing pause.
async function request(path, { headers = {}, tries = 4 } = {}) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(API + path, { headers, signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return { data: await res.json(), headers: res.headers };
    } catch (err) {
      if (attempt >= tries) throw new Error(`WordPress request failed (${path}): ${err.message}`);
      await sleep(1500 * attempt);
    }
  }
}

function featuredImage(raw) {
  const media = ((raw._embedded || {})['wp:featuredmedia'] || [])[0];
  if (!media || !media.source_url) return null;
  const details = media.media_details || {};
  const sizes = details.sizes || {};
  const preview = sizes.medium_large || sizes.large || sizes.full;
  return {
    src: media.source_url,
    preview: preview ? preview.source_url : media.source_url,
    alt: media.alt_text || '',
    width: details.width || null,
    height: details.height || null,
  };
}

async function loadPosts() {
  const raw = [];
  for (let page = 1; ; page++) {
    const { data, headers } = await request(`wp/v2/posts?_embed=wp:featuredmedia&acf_format=standard&per_page=50&page=${page}`);
    raw.push(...data);
    if (page >= Number(headers.get('x-wp-totalpages') || 1)) break;
  }
  raw.sort((a, b) => (a.date < b.date ? 1 : -1));
  return raw.map((post, index) => {
    const titleText = plainText(post.title.rendered);
    // English version: the ACF fields "English title" and "English text" on
    // the post's edit screen. A post without English text has `en: null` and
    // is shown in German on the English pages.
    const acf = post.acf && !Array.isArray(post.acf) ? post.acf : {};
    const enHtml = (acf.content_en || '').trim();
    const enTitle = (acf.title_en || '').trim() || titleText;
    return {
      id: post.id,
      slug: post.slug,
      // The newest post is number 0. That is on purpose.
      nr: index,
      date: post.date,
      dateGmt: post.date_gmt,
      title: post.title.rendered,
      titleText,
      image: featuredImage(post),
      ...prepareContent(post.content.rendered, titleText),
      en: enHtml ? { title: escapeHtml(enTitle), titleText: enTitle, ...prepareContent(enHtml, enTitle) } : null,
    };
  });
}

let posts;
export function getPosts() {
  posts ??= loadPosts();
  return posts;
}

const pages = new Map();
export function getPage(slug) {
  if (!pages.has(slug)) {
    pages.set(
      slug,
      request(`wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,content`).then(({ data }) => {
        if (!data.length) return null;
        const titleText = plainText(data[0].title.rendered);
        return { slug, titleText, ...prepareContent(data[0].content.rendered, titleText) };
      }),
    );
  }
  return pages.get(slug);
}

// Home-page banners: every image in the "Banners" media folder (FileBird
// folder 1). The home page shows a different one on every visit. The FileBird key is a secret and is read from the FILEBIRD_TOKEN
// build variable; without it the site shows the one fallback image.
const FALLBACK_BANNERS = [
  { src: 'https://admin.smog.sh/wp-content/uploads/2023/03/vlcsnap-00238.jpg', alt: '', width: 704, height: 512 },
];

async function loadBanners() {
  const token = process.env.FILEBIRD_TOKEN;
  if (!token) {
    console.warn('[banner] FILEBIRD_TOKEN is not set: using the fallback banner.');
    return FALLBACK_BANNERS;
  }
  try {
    const folder = await request('filebird/public/v1/attachment-id/?folder_id=1', {
      headers: { Authorization: `Bearer ${token}` },
      tries: 2,
    });
    const ids = folder.data.data.attachment_ids;
    if (!ids.length) return FALLBACK_BANNERS;
    const media = await request(`wp/v2/media?include=${ids.join(',')}&per_page=100&_fields=id,source_url,alt_text,media_details`);
    const banners = media.data
      .filter((m) => m.media_details && m.media_details.width && m.media_details.height)
      .sort((a, b) => a.id - b.id)
      .map((m) => ({
        src: m.source_url,
        alt: m.alt_text || '',
        width: m.media_details.width,
        height: m.media_details.height,
      }));
    return banners.length ? banners : FALLBACK_BANNERS;
  } catch (err) {
    console.warn(`[banner] Folder could not be read (${err.message}): using the fallback banner.`);
    return FALLBACK_BANNERS;
  }
}

let banners;
export function getBanners() {
  banners ??= loadBanners();
  return banners;
}
