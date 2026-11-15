<template>
    <div class="grid container main-grid">
        <back-button class="back-button" fallback="/posts"></back-button>
        <h3 class="post-title" v-html="title"></h3>
        <div class="paper-bg"></div>
        <div class="post-images" v-html="parts.figures"></div>
        <div class="post-content text-body" v-html="parts.text"></div>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'
    import { splitContent } from '@/utils/wp'

    export default {
        props: [
            'title',
            'content',
        ],
        components: {
            BackButton
        },
        computed: {
            parts() {
                return splitContent(this.content)
            }
        }
    }
</script>

<style lang="scss">
    .post-content{
        padding: $unit calc(2*$unit) calc(2*$unit) calc(2*$unit);
        grid-row: 2 !important;
        grid-column: 2;
        min-width: 0;
        animation-duration: 0.5s;
        animation-name: fadeIn, slideFromBottom;
        animation-timing-function: ease;

        h1, h2, h3, h4 {
            font-family: serif;
            text-transform: none;
            line-height: 1.25;
            margin: 1.4em 0 0.6em 0;
        }

        h1 { font-size: 24px; }
        h2 { font-size: 21px; }
        h3 { font-size: 18px; }
        h4 { font-size: 16px; }

        iframe, video {
            max-width: 100%;
        }
    }

    .post-images{
        grid-column: 3;
        grid-row: 2;
        min-width: 0;
        animation-duration: 0.5s;
        animation-name: fadeIn, slideFromBottom;
        animation-timing-function: ease;

        > img, > a {
            display: block;
            padding-bottom: $unit;
        }

        img {
            width:100%;
            height:auto;
        }

        .wp-caption {
            width:100% !important;
            height:auto !important;
        }

        .wp-caption-text {
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: $main-font-size;
            font-family: Roboto;
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
