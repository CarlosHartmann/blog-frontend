<template>
    <section class="container">
        <img class="container banner-img" :src="img.source_url">
    </section>
</template>

<script>
    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    export default {
        data() {
            return {
                img: '',
                id: '',
                imgs: []
            }
        },
        layout: 'LandingPage',
        async asyncData({ params, $http }) {
            $http.setToken('IndbneOnZkoVSKGPbQKS6tFYJiuIyCfDlqlqVukM', 'Bearer')
            const imgs = await $http.$get(`filebird/public/v1/attachment-id/?folder_id=1`);
            const n = getRandomInt(imgs.data.attachment_ids.length - 1);
            const id = await imgs.data.attachment_ids[n];
            const img = await $http.$get(`wp/v2/media/${id}`);
            return { img, imgs, id }
        },
        fetchOnServer: true,
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