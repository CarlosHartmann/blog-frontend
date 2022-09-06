<template>
    <div class="container">
        <Header />
        <main class="container">
            <nuxt />
        </main>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>

<style>
    #__nuxt{
        height:100%;
        width:100%;
    }

    #__layout{
        height:100%;
        width:100%;
    }
</style>