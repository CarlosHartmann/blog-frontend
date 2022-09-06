<template>
    <div>
        <Header />
        <h1>Page View</h1>
        <nuxt />
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

