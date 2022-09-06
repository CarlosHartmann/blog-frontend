<template>
    <a @click="goToPrev()">
        <p class="button">ᐊ Back</p>
    </a>
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