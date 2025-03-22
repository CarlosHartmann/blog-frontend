import pkg from './package'

export default {
    target: 'static',
    generate: {
      fallback: true,
      routes: async () => {
        const res = await axios.get('https://admin.smog.sh/wp-json/wp/v2/posts?per_page=100')
        return res.data.map(post => `/posts/${post.slug}`)
    },
    ssr: true,
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
    loading: {color: '#666666'},

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
        '@nuxtjs/style-resources',
        '@nuxt/http',
    ],

    env: {
        baseURL: "http://admin.smog.sh/wp-json/",
    },

    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },

    build: {
        extractCSS: true,
        extend(config, ctx) {
        }
    },

    router: {
        scrollBehavior: function (to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },

    http: {
        baseURL: "http://admin.smog.sh/wp-json/",
    },
}
