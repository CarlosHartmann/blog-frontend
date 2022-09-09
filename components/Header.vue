<template>
    <header class="header">
        <ul>
            <li><nuxt-link class="button" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="button" to="/posts">Blog</nuxt-link></li>
            <li><nuxt-link class="button" to="/about">About</nuxt-link></li>
            <li><nuxt-link class="button" to="/contact">Contact</nuxt-link></li>
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

<style lang="scss">
    .header{
        position: fixed;
        width:100%;
        height:40px;
        display:flex;
        justify-content: right;
        z-index: 20;

        ul {
            list-style: none;
            padding: 0;
            display: flex;

            li {
                padding: 10px;
            }
        }
    }
</style>