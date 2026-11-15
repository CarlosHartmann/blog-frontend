import axios from 'axios'
import { API_BASE, POST_QUERY, SITE_NAME, slimPost } from './utils/wp'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// The WP host (shared hosting) answers 503/508 when hit too hard, so be
// patient and polite: one request at a time, a few retries with back-off.
async function getWithRetry (url, tries = 4) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await axios.get(url, { timeout: 30000 })
    } catch (err) {
      if (attempt >= tries) throw err
      await sleep(1500 * attempt)
    }
  }
}

async function fetchAllPosts () {
  const posts = []
  for (let page = 1; ; page++) {
    const res = await getWithRetry(`${API_BASE}wp/v2/posts?${POST_QUERY}&per_page=50&page=${page}`)
    posts.push(...res.data)
    if (page >= Number(res.headers['x-wp-totalpages'] || 1)) break
  }
  return posts
}

// Home-page banner candidates: every image in the "banner" media folder
// (FileBird folder 1). The FileBird key is a secret and comes from the
// FILEBIRD_TOKEN build variable; without it the site falls back to one image.
const FALLBACK_BANNERS = [
  { src: 'https://admin.smog.sh/wp-content/uploads/2023/03/vlcsnap-00238.jpg', alt: '' }
]

async function fetchBanners () {
  const token = process.env.FILEBIRD_TOKEN
  if (!token) return FALLBACK_BANNERS
  try {
    const folder = await axios.get(`${API_BASE}filebird/public/v1/attachment-id/?folder_id=1`, {
      timeout: 30000,
      headers: { Authorization: `Bearer ${token}` }
    })
    const ids = folder.data.data.attachment_ids
    if (!ids.length) return FALLBACK_BANNERS
    const media = await getWithRetry(`${API_BASE}wp/v2/media?include=${ids.join(',')}&per_page=100&_fields=id,source_url,alt_text`)
    const banners = media.data.map(m => ({ src: m.source_url, alt: m.alt_text || '' }))
    return banners.length ? banners : FALLBACK_BANNERS
  } catch (err) {
    console.warn(`Banner folder could not be read (${err.message}); using the fallback banner.`)
    return FALLBACK_BANNERS
  }
}

export default {
  target: 'static',

  generate: {
    // Unknown URLs get the SPA shell (see static/_redirects), so a post that
    // was published after the last build still loads instead of erroring.
    fallback: '200.html',
    // Posts are fetched once here and handed to each page as its payload;
    // the post pages themselves make no API calls during the build.
    crawler: false,
    concurrency: 4,
    routes: async () => {
      const [posts, banners] = [await fetchAllPosts(), await fetchBanners()]
      return [
        { route: '/', payload: { banners } },
        ...posts.map(post => ({ route: `/${post.slug}`, payload: slimPost(post) }))
      ]
    }
  },

  ssr: true,

  head: {
    htmlAttrs: { lang: 'de' },
    title: SITE_NAME,
    // Serialized into the client bundle, so it cannot reference imports.
    titleTemplate: title => (title && title !== 'Carlos Ha' ? `${title} · Carlos Ha` : 'Carlos Ha'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog von Carlos Hartmann: Film, Sprache, Literatur und Computer.' },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#666666' },

  css: [
    '@/assets/scss/main.scss'
  ],

  plugins: [],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/http',
  ],

  env: {
    baseURL: API_BASE,
  },

  styleResources: {
    scss: [
      'assets/scss/main.scss'
    ]
  },

  build: {
    extractCSS: true,
    extend(config, ctx) {}
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  http: {
    baseURL: API_BASE,
  }
}
