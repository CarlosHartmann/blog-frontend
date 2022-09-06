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

<style scoped lang="scss">
    .post-content{
        padding: $unit calc(2*$unit) calc(2*$unit) calc(2*$unit);
        grid-row: 2 !important;
        grid-column: 2;
    }

    .post-images{
        grid-column: 3;
        grid-row: 2;

        :deep img {
            width:100%;
            height:auto;
            padding-bottom: $unit;
        }
    }

    .back-button {
        grid-row:1;
        grid-column:1;
    }

    .paper-bg{
        grid-row:2 !important;
    }

    .post-title {
        grid-column: 2;
        grid-row: 1;
    }

    .single-post .grid {
        grid-template-rows: auto 1fr;
    }
</style>