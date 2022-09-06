<template>
    <div class="container">
        <template v-for="(page, index) in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'Contact'">
                <back-button class="back-button"></back-button>
                <div class="contact-content" v-html="page.content.rendered"></div>
            </div>
        </template>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'

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
        components: {
            BackButton
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
        grid-row:1;
    }

    .back-button{
        grid-row:1;
        grid-column:1;
    }
</style>