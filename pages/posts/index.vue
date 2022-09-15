<template>
    <section class="grid container main-grid">
        <div class="posts">
            <div class="post" v-for="(post, index) in posts" :key="post.id">
                <div class="grid">
                    <post-card :title="post.title.rendered" :excerpt="post.excerpt.rendered" :id="post.id" :nr="index" :date="formatDate(post.date).date" :time="formatDate(post.date).time" :image="post._embedded['wp:featuredmedia']['0'].source_url" :slug="post.slug"></post-card>
                </div>
            </div>
        </div>
        <div class="paper-bg">
        </div>
        <div class="image grid-item-c3">
        </div>
    </section>
</template>

<script>
    import PostCard from '@/components/PostCard'

    export default {
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
        components: {
            PostCard
        },
        methods: {
            formatDate: function(input){
                const re = /[0-9-:]+/gm;
                const myArray = input.match(re);
                return {
                    'date' : myArray[0],
                    'time' : myArray[1]
                }
            }
        }
    }
</script>

<style lang="scss">
    .posts {
        grid-column: 1 / 4;
        grid-row: 1;
        z-index: 10;
    }

    .posts > * {
        display: block;
        margin-bottom:40px;
    }

    .posts > *:last-child {
        margin-bottom: 400px;
    }

    @media only screen and (max-width: $tablet-max-res){
        .posts {
            grid-column: 1/3;
        }
    }

    @media only screen and (max-width: $mobile-res) {
        .posts {
            grid-column:1 !important;
        }

        .image {
            display: none;
        }
    }
</style>