<template>
    <div class="container">
        <template v-for="(page, index) in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'Contact'">
                <h3 class="contact-title" v-html="page.title.rendered"></h3>
                <div class="contact-content" v-html="page.content.rendered"></div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Contact page',
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
    .contact-content{
        grid-column: 3;
    }
</style>