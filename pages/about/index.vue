<template>
    <div class="container">
        <template v-for="page in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'About'">
                <h3 class="about-title" v-html="page.title.rendered"></h3>
                <div class="about-content no-images" v-html="page.content.rendered"></div>
                <div class="about-images no-text" v-html="page.content.rendered"></div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'About',
                meta: [
                    {hid: 'description', name: 'description', content: 'My description'},
                    {hid: 'ogtitle', property: 'og:title', content: 'Contact page'}
                ]
            }
        },
        data() {
            return {
                pages: [],
            }
        },
        async asyncData({ params, $http }) {
            console.log("async");
            const pages = await $http.$get(`http://carlos.local/wp-json/wp/v2/pages?_embed/`);
            return { pages }
        },
        fetchOnServer: true,
    }
</script>

<style scoped lang="scss">
    .about-images{
        display: flex;
        justify-content: right;
    }
</style>