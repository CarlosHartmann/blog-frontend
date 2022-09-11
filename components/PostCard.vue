<template>
    <nuxt-link :to="'/posts/' + slug" class="grid">
        <div class="post-card-date-container">
            <p class="date-post-card" v-html="date"></p>
            <p class="time-post-card" v-html="time"></p>
        </div>
        <div class="post-card-container">
            <h3 class="id-post-card" v-html="nr"></h3>
            <h3 class="title-post-card" v-html="title"></h3>
            <p class="excerpt-post-card text-body" v-html="excerpt"></p>
        </div>
        <div class="post-card-image-container">
           <img class="post-card-image" :src="image" />
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: [
            'nr',
            'title',
            'excerpt',
            'image',
            'date',
            'time',
            'slug'
        ]
    }
</script>

<style lang="scss">
    a {
        grid-column: 1 /4;

        &:hover{
            img {
                visibility: visible;
            }

            p, div {
                text-decoration: underline;
            }
        }
    }

    .post-card-container {
        grid-column:2;
        color:black;
        padding: $unit;
        padding-right: calc(2*$unit);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        column-gap: $unit;
    }

    .post-card-image-container{
        grid-column:3;
        position: relative;
        display: flex;
        overflow: visible;
    }

    .id-post-card{
        grid-row:1;
        grid-column:1;
    }

    .title-post-card{
        grid-row:1;
        grid-column:2;
    }

    .excerpt-post-card{
        grid-row:2;
        grid-column:2;
    }

    .post-card-image{
        visibility: hidden;
        position: absolute;
        width:100%;
    }

    .post-card-date-container{
        grid-column: 1;
    }
</style>