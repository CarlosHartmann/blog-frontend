<template>
    <section class="single-post container">
        <template class="post container" v-for="(post, index) in posts">
            <template v-if="$route.params.title == post.title.rendered">
                <post :title="post.title.rendered" :content="post.content.rendered" :id="post.id" :nr="index"></post>
            </template>
        </template>
    </section>
</template>

<script>
    import Post from '@/components/Post'

    export default {
        head() {
            return {
                title: 'Post page',
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
            const posts = await $http.$get(`http://carlos.local/wp-json/wp/v2/posts?_embed`);
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
        }
    }
</script>