<template>
    <div class="button-holder" @click="goToPrev()">
        <p class="button">ᐊ Back</p>
    </div>
</template>

<script>
    export default {
        methods: {
            goToPrev: function () {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
                this.$route.go(-1);
            }
        },
    }
</script>

<style scoped lang="scss">
    @media only screen and (max-width: $mobile-res) {
        .button-holder {
            display: none;
        }
    }
</style>