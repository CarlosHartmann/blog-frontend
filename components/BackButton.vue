<template>
    <div class="button-holder" @click="goToPrev()">
        <p class="button">ᐊ Back</p>
    </div>
</template>

<script>
    export default {
        props: {
            // Where to go when there is no history to go back to, e.g. when
            // the page was opened from a shared link.
            fallback: {
                type: String,
                default: '/'
            }
        },
        methods: {
            goToPrev: function () {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push(this.fallback);
            }
        },
    }
</script>

<style scoped lang="scss">
    .button-holder {
        cursor: pointer;
    }

    @media only screen and (max-width: $mobile-res) {
        .button-holder {
            display: none;
        }
    }
</style>
