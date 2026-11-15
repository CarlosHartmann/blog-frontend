// Helpers shared by nuxt.config.js (build time) and the pages (run time).

export const API_BASE = 'https://admin.smog.sh/wp-json/'
export const SITE_URL = 'https://www.smog.sh'
export const SITE_NAME = 'Carlos Ha'

// Only ask WordPress for what the frontend actually renders.
export const POST_QUERY = '_embed=wp:featuredmedia'
export const POST_LIST_QUERY =
    '_embed=wp:featuredmedia&_fields=id,slug,date,title,excerpt,featured_media,_links,_embedded'

const ENTITIES = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…',
    ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
    laquo: '«', raquo: '»'
}

export function decodeEntities (text = '') {
    return text
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
        .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
        .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name] || m)
}

export function plainText (html = '') {
    return decodeEntities(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
}

// Reduce a WP REST post to the fields the site uses, so the static payloads
// stay small and a post without a featured image cannot crash a page.
export function slimPost (post) {
    const media = ((post._embedded || {})['wp:featuredmedia'] || [])[0]
    const hasImage = media && media.source_url
    return {
        id: post.id,
        slug: post.slug,
        date: post.date,
        title: post.title ? post.title.rendered : '',
        excerpt: post.excerpt ? post.excerpt.rendered : '',
        content: post.content ? post.content.rendered : '',
        image: hasImage
            ? {
                src: media.source_url,
                alt: media.alt_text || '',
                width: (media.media_details || {}).width || null,
                height: (media.media_details || {}).height || null
            }
            : null
    }
}

const CAPTION_RE = /<div[^>]*class="[^"]*wp-caption[^"]*"[^>]*>[\s\S]*?<\/div>/g
const IMAGE_RE = /(?:<a[^>]*>\s*)?<img[^>]*>(?:\s*<\/a>)?/g
const EMPTY_P_RE = /<p[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/g

// The side column is far wider than the 300px thumbnails the WP editor
// inserts by default, so let the browser choose from the srcset instead.
function upgradeImage (html) {
    return html
        .replace(/\ssizes="[^"]*"/g, '')
        .replace(/\sstyle="[^"]*"/g, '')
        .replace(/<img/g, '<img sizes="(max-width: 820px) 100vw, 45vw"')
}

// Split WP content into running text and the figures shown beside it.
// (Previously the whole content was rendered twice and one half hidden via
// font-size: 0, which leaked headings into the image column.)
export function splitContent (html = '') {
    const figures = []
    let text = html.replace(CAPTION_RE, (m) => { figures.push(upgradeImage(m)); return '' })
    text = text.replace(IMAGE_RE, (m) => { figures.push(upgradeImage(m)); return '' })
    if (figures.length) {
        // Drop the paragraphs that only existed to hold an image.
        text = text.replace(/<p[^>]*>\s*<\/p>/g, '')
    }
    // A leading run of empty paragraphs just pushes the text down.
    let lead = text.match(/^\s*/)[0].length
    for (let m; (m = EMPTY_P_RE.exec(text)) && m.index === lead;) {
        lead = EMPTY_P_RE.lastIndex + text.slice(EMPTY_P_RE.lastIndex).match(/^\s*/)[0].length
    }
    EMPTY_P_RE.lastIndex = 0
    return { text: text.slice(lead), figures: figures.join('\n') }
}
