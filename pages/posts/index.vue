<template>
    <section class="grid container main-grid">
        <div class="posts">
            <div class="post" v-for="(post, index) in posts" :key="post.id">
                <div class="grid">
                    <post-card :title="post.title" :excerpt="post.excerpt" :id="post.id" :nr="index" :date="formatDate(post.date).date" :time="formatDate(post.date).time" :image="post.image ? post.image.src : null" :slug="post.slug"></post-card>
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
    import { POST_LIST_QUERY, slimPost } from '@/utils/wp'

    export default {
        async asyncData({ $http }) {
            const posts = await $http.$get(`wp/v2/posts?${POST_LIST_QUERY}&per_page=100`);
            return { posts: posts.map(slimPost) }
        },
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
        },
        head: {
            title: 'Blog',
        },
    }
</script>

<style lang="scss">
    .posts {
        grid-column: 1 / 4;
        grid-row: 1;
        z-index: 10;
        animation: 0.5s ease 0s 1 slideFromBottom;
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