import pkg from './package'

export default {
    target: 'static',
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#ff0000'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxt/http',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        baseURL: 'http://carlos.local/wp-json/wp/v2/',
    },

    env: {
        baseURL: 'http://carlos.local/wp-json/wp/v2/',
    },

    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extractCSS: true,
        extend(config, ctx) {
        }
    }
}
