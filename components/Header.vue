<template>
    <header class="header">
        <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/posts">Blog</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                pages: [],
            }
        },
        async asyncData({ params, $http }) {
            const pages = await $http.$get(`http://carlos.local/wp-json/wp/v2/pages?_embed`);
            console.log(pages);
            return { pages }
        },
        fetchOnServer: true,
    }
</script>

<style scoped lang="scss">
    .header{
        @extend .grid;
        position: fixed;
        width:100%;
        height:auto;
        z-index: 20;
        padding: 0 $unit 0 $unit;
        
        ul {
            @extend h3;
            grid-column: 2;
            list-style: none;
            padding:0px;
            display: flex;
            border-style: solid;
            border-color: white;
            border-width: 1px;
            justify-content: space-between;
            align-items: center;
            color: black !important;
            background-color: $bg-color;
            width: 280px;
            margin-top: $unit;

            li {
                padding: calc($unit / 2);
                margin-right: $unit;
            }

            li:hover{
                background-color: white;
                a {
                    color: black;
                    text-decoration: underline;
                }
            }

            li:last-child{
                margin-right: 0px;
            }
        }
    }
</style>