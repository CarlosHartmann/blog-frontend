<template>
    <section class="single-post container">
        <template class="post container" v-for="(post, index) in posts">
            <template v-if="$route.params.slug == post.slug">
                <post :title="post.title.rendered" :content="post.content.rendered" :id="post.id" :nr="index" :slug="post.slug"></post>
            </template>
        </template>
    </section>
</template>

<script>
    import Post from '@/components/Post'

    export default {
        scrollToTop: true,
        head() {
            return {
                title: 'Post',
                meta: [
                    {hid: 'description', name: 'description', content: 'My description'},
                    {hid: 'ogtitle', property: 'og:title', content: 'Contact page'}
                ]
            }
        },
        data() {
            return {
                posts: [],
            }
        },
        async asyncData({ params, $http }) {
            const posts = await $http.$get(`wp/v2/posts?_embed&per_page=100`);
            return { posts }
        },
        fetchOnServer: true,
        computed: {
            posts() {
                return this.$store.state.posts
            }
        },
        components: {
            Post
        },
    }
</script>