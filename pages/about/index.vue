<template>
    <div class="container">
        <template v-for="page in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'About'">
                <back-button class="about-back-button"></back-button>
                <div class="about-content" v-html="split(page).text"></div>
                <div class="about-images" v-html="split(page).figures"></div>
            </div>
        </template>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'
    import { splitContent } from '@/utils/wp'

    export default {
        head() {
            return {
                title: 'About',
                meta: [
                    {hid: 'og:title', property: 'og:title', content: 'About · Carlos Ha'}
                ]
            }
        },
        components: {
            BackButton
        },
        methods: {
            split(page) {
                return splitContent(page.content.rendered)
            }
        },
        data() {
            return {
                pages: [],
            }
        },
        async asyncData({ params, $http }) {
            const pages = await $http.$get(`wp/v2/pages?_embed/`);
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