<template>
    <div class="container">
        <template v-for="page in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'About'">
                <back-button class="about-back-button"></back-button>
                <div class="about-content no-images" v-html="page.content.rendered"></div>
                <div class="about-images no-text" v-html="page.content.rendered"></div>
            </div>
        </template>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'

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
    .about-back-button{
        grid-column:1;
    }

    .about-content{
        grid-column:2;
        opacity: 0;
        animation: 0.5s ease 0.2s 1 fadeIn forwards;
    }

    .about-images{
        animation: 0.5s ease 0s 1 fadeIn forwards;
        :deep img {
            width:100% !important;
            height: auto !important;
        }
    }

    @media only screen and (max-width: $tablet-max-res){
        .about-images{
            grid-column:2 !important;
            grid-row:1 !important;
        }

        .about-content{
            grid-column:2 !important;
            grid-row:2 !important;
        }
    }


    @media only screen and (max-width: $mobile-res){

        .about-images{
            grid-column:1 !important;
            grid-row:1 !important;
        }

        .about-content{
            grid-column:1 !important;
            grid-row:2 !important;
        }
    }
</style>