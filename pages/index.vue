<template>
    <section class="container">
        <img class="container banner-img" :src="banner.src" :alt="banner.alt">
    </section>
</template>

<script>
    // The same image all day, the next one tomorrow.
    const dayNumber = () => Math.floor(Date.now() / 86400000)

    const FALLBACK = [
        { src: 'https://admin.smog.sh/wp-content/uploads/2023/03/vlcsnap-00238.jpg', alt: '' }
    ]

    export default {
        layout: 'LandingPage',
        data() {
            return {
                day: 0
            }
        },
        // The banner list is collected at build time (see nuxt.config.js) so
        // that the media-folder key never reaches the browser.
        asyncData({ payload }) {
            return { banners: payload && payload.banners && payload.banners.length ? payload.banners : FALLBACK }
        },
        computed: {
            banner() {
                return this.banners[this.day % this.banners.length]
            }
        },
        mounted() {
            this.day = dayNumber()
        },
        head: {
            title: 'Carlos Ha',
            link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.smog.sh/' }]
        },
    }
</script>

<style lang="scss">
    .banner-img {
        object-fit: cover;
        animation: 0.5s ease 0s 1 fadeIn forwards;
    }

    @media only screen and (min-width: $tablet-max-res){

        .landing-page {
            .header {
                width:100%;
                height:100%;
                justify-content: center;
                align-items: center;
                display:flex;
            }
        }
    }
</style>