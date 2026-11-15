<template>
    <section class="single-post container">
        <post :title="post.title" :content="post.content"></post>
    </section>
</template>

<script>
    import Post from '@/components/Post'
    import { POST_QUERY, SITE_URL, slimPost, plainText } from '@/utils/wp'

    export default {
        scrollToTop: true,
        components: {
            Post
        },
        // During `nuxt generate` the post arrives as the route payload (see
        // nuxt.config.js). The API is only called when a visitor lands on a
        // post that has not been built yet (SPA fallback) or in dev mode.
        async asyncData({ params, payload, $http, error }) {
            if (payload) {
                return { post: payload }
            }
            const found = await $http.$get(`wp/v2/posts?slug=${encodeURIComponent(params.slug)}&${POST_QUERY}`)
            if (!found.length) {
                return error({ statusCode: 404, message: 'Page not found' })
            }
            return { post: slimPost(found[0]) }
        },
        head() {
            const post = this.post
            if (!post) {
                return {}
            }
            const title = plainText(post.title)
            const description = plainText(post.excerpt).replace(/\s*\[…\]$/, '…').slice(0, 300)
            const url = `${SITE_URL}/${post.slug}`
            const meta = [
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:title', property: 'og:title', content: title },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:url', property: 'og:url', content: url },
                { hid: 'article:published_time', property: 'article:published_time', content: post.date },
                { hid: 'twitter:card', name: 'twitter:card', content: post.image ? 'summary_large_image' : 'summary' }
            ]
            if (post.image) {
                meta.push({ hid: 'og:image', property: 'og:image', content: post.image.src })
                if (post.image.width && post.image.height) {
                    meta.push({ hid: 'og:image:width', property: 'og:image:width', content: String(post.image.width) })
                    meta.push({ hid: 'og:image:height', property: 'og:image:height', content: String(post.image.height) })
                }
            }
            return {
                title,
                meta,
                link: [{ hid: 'canonical', rel: 'canonical', href: url }]
            }
        }
    }
</script>
