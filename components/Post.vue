<template>
    <div class="grid container main-grid">
        <back-button class="back-button"></back-button>
        <h3 class="post-title" v-html="title"></h3>
        <div class="paper-bg"></div>
        <div class="post-images no-text" v-html="content"></div>
        <p class="post-content no-images text-body drop-cap" v-html="content"></p>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'

    export default {
        props: [
            'nr',
            'id',
            'title',
            'content',
            'slug',
        ],
        components: {
            BackButton
        },
    }
</script>

<style lang="scss">
    .post-content{
        padding: $unit calc(2*$unit) calc(2*$unit) calc(2*$unit);
        grid-row: 2 !important;
        grid-column: 2;
        animation-duration: 0.5s;
        animation-name: fadeIn, slideFromBottom;
        animation-timing-function: ease;
    }

    .post-images{
        grid-column: 3;
        grid-row: 2;
        animation-duration: 0.5s;
        animation-name: fadeIn, slideFromBottom;
        animation-timing-function: ease;

        > div {
            padding-top: $unit;
        }

        div {
            width:100% !important;
            height:auto !important;
        }

        img {
            width:100%;
            height:auto;
        }

        > div:first-of-type {
            padding-top: 0px;
        }
    }

    .back-button {
        grid-row:1;
        grid-column:1;
    }

    .single-post .paper-bg{
        grid-row:2 !important;
    }

    .post-title {
        grid-column: 2;
        grid-row: 1;
    }

    .single-post .grid {
        grid-template-rows: auto 1fr;
    }

    @media only screen and (max-width: $tablet-max-res){
        .paper-bg, .post-title, .post-images, .post-content {
            grid-column: 2 !important;
        }

        .post-content {
            grid-row:2;
        }

        .post-images {
            grid-row:3;
        }
    }

    @media only screen and (max-width: $mobile-res) {
        .paper-bg, .post-title, .post-images, .post-content {
            grid-column: 1 !important;
        }
    }
</style>