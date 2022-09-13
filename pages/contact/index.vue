<template>
    <div class="container">
        <template v-for="(page, index) in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'Contact'">
                <back-button class="back-button"></back-button>
                <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact">

                    <p>
                        <label>Name<input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email<input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message<textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button class="button" type="submit">Send</button>
                    </p>

                    </form>
            </div>
        </template>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton'

    export default {
        head() {
            return {
                title: 'Contact page',
                meta: [
                    {hid: 'description', name: 'description', content: 'My description'},
                    {hid: 'ogtitle', property: 'og:title', content: 'Contact page'}
                ]
            }
        },
        components: {
            BackButton
        },
        data() {
            return {
                pages: [],
            }
        },
        async asyncData({ params, $http }) {
            console.log("async");
            const pages = await $http.$get(`http://carlos.local/wp-json/wp/v2/pages?_embed/`);
            return { pages }
        },
        fetchOnServer: true,
    }
</script>

<style scoped lang="scss">
    .contact-content{
        grid-column: 3;
        grid-row:1;
    }

    .back-button{
        grid-row:1;
        grid-column:1;
    }

    form {
        width: calc(100% - $unit);
        label {
            width:100%;
            @extend h3
        }

        input, textarea {
            width:100%;
            border-color: white;
            background-color: $bg-color;
            border-style: solid;
            border-width: 1px;
            margin: $unit 0 calc(2*$unit) 0;
            padding: $unit;
            color: white;
        }

        textarea {
            resize: vertical;
            height: 400px;
        }
    }

    .button{
        border-style: solid;
        border-color: white;
        border-width:1px;
        background-color: white;
        color: black;

        &:hover{
            background-color: $bg-color;
            text-decoration: underline;
            color: white;
        }
    }
</style>