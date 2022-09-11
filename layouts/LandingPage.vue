<template>
    <div class="landing-page container">
        <Header />
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

