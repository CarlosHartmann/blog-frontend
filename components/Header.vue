<template>
    <header class="header" :class="showMobileMenu ? 'open' : 'closed'">
        <div class="hamburger-background"></div>
        <ul>
            <li @click="showMobileMenu = false"><nuxt-link to="/">Home</nuxt-link></li>
            <li @click="showMobileMenu = false" ><nuxt-link to="/posts">Blog</nuxt-link></li>
            <li @click="showMobileMenu = false" ><nuxt-link to="/about">About</nuxt-link></li>
            <li @click="showMobileMenu = false" ><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
        <div class="hamburger-container" @click="showMobileMenu = !showMobileMenu">
            <div class="hamburger-line">
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                showMobileMenu: false,
                pages: [],
            }
        },
        async asyncData({ params, $http }) {
            const pages = await $http.$get(`http://carlos.local/wp-json/wp/v2/pages?_embed`);
            console.log(pages);
            return { pages }
        },
        fetchOnServer: true,
        methods: {
            showMobileMenu: function () {
                this.$emit( 'showMobileMenu' );
            }
        }
    }
</script>

<style scoped lang="scss">
    .header{
        @extend .grid;
        position: fixed;
        width:100%;
        height:auto;
        z-index: 20;
        padding: 0 $unit 0 $unit;
        
        ul {
            @extend h3;
            grid-column: 2;
            list-style: none;
            padding:0px;
            display: flex;
            border-style: solid;
            border-color: white;
            justify-content: space-between;
            align-items: center;
            color: black !important;
            background-color: $bg-color;
            width: 280px;
            margin-top: $unit;

            li {
                padding: calc($unit / 2);
                margin-right: $unit;
            }

            li:hover{
                background-color: white;
                a {
                    color: black;
                    text-decoration: underline;
                }
            }

            li:last-child{
                margin-right: 0px;
            }
        }

        .hamburger-container {
            visibility: hidden;
        }
    }


    @media only screen and (max-width: $tablet-max-res) {
        .header {
            display: flex;
            justify-content: right !important;
            padding: calc(2 * $unit);
            transition: all .5s ease-in-out;

            ul {
                border-style: none;
                opacity: 0;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                left:0;
                top:0;
                right:0;
                bottom:0;
                width:100%;
                position:fixed;
                margin: 0;
                padding: 0;
                visibility: hidden;
                
                li {
                    width:100%;
                    display: flex;
                    justify-content: center;
                    margin: 0px;
                    z-index: 100;
                }
            }

            .hamburger-container {
                display: flex;
                justify-content: center;
                align-items: center;
                border-style: solid;
                border-color: white;
                height: 50px;
                width: 50px;
                background-color: $bg-color;
                position: fixed;
                visibility: visible;

                .hamburger-line{
                    background-color: white;
                    height: 3px;
                    width: calc(60px - 3 * $unit);
                    transition: all .5s ease-in-out;
                }

                .hamburger-line::before, .hamburger-line::after{
                    @extend .hamburger-line;
                    content: '';
                    position: absolute;
                }

                .hamburger-line::before{
                    transform: translateY(-10px);
                }

                .hamburger-line::after {
                    transform: translateY(10px);
                }
            }

            .hamburger-background {
                position: fixed;
                left: 0px;
                right: 0px;
                top: 0px;
                bottom: 0px;
                background-color: $bg-color;
                opacity: 0;
                visibility: hidden;
                transition: all .3s ease-in-out;
            }
        }

        .header.open{
            background-color: $bg-color;

            .hamburger-container{
                .hamburger-line{
                    position: absolute;
                    transform: translateY(0px) rotate(45deg);
    
                    &::before, &::after{
                        transform: rotate(-90deg);
                    }
                }
            }

            ul, .hamburger-background {
                opacity: 1;
                visibility: visible;
            }
        }

    }
</style>