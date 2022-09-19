<template>
    <div class="container">
        <template v-for="(page, index) in pages">
            <div class="grid main-grid" v-if="page.title.rendered == 'Contact'">
                <back-button class="back-button"></back-button>
                <div class="contact-content">
                    <form 
                        name="contact"
                        method="POST"
                        netlify
                        onSubmit="submit"
                        data-netlify-honeypot="bot-field"
                        action="/thankyou/">

                        <input type="hidden" name="form-name" value="contact">

                        <p>
                            <label>Name<input type="text" name="name" required /></label>
                        </p>
                        <p>
                            <label>Email<input type="email" name="email" required /></label>
                        </p>
                        <p>
                            <label>Message<textarea name="message" required ></textarea></label>
                        </p>
                        <p>
                            <button class="button" value="Send Message" type="submit"><h3>Send</h3></button>
                        </p>

                    </form>
                </div>
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
            const pages = await $http.$get(`wp/v2/pages?_embed/`);
            return { pages }
        },
        fetchOnServer: true,
    }
</script>

<style scoped lang="scss">
    .contact-content{
        grid-column: 2;
        grid-row:1;
        animation: 0.5s ease 0s 1 fadeIn forwards;
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

    @media only screen and (max-width: $mobile-res) {
        .contact-content{
            grid-column: 1;
        }
    }
</style>