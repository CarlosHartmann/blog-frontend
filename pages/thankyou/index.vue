<template>
    <div class="container grid main-grid">
        <back-button class="back-button"></back-button>
        <h3 class="thank-you">Thank you!</h3>
    </div>
</template>

<style scoped lang="scss">
    .back-button {
        grid-column:1;
        grid-row:1;
    }

    .thank-you {
        grid-column: 2;
        grid-row:1;
    }
</style>

<script>
    import BackButton from '~/components/BackButton.vue'

    export default {
        components: {
            BackButton
        }
    }
</script>