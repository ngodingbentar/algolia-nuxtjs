export default {
  env: {
    algoliaAppId: process.env.ALGOLIA_APP_ID || 'http://localhost:3000',
    algoliaPublicKey: process.env.ALGOLIA_PUBLIC_KEY || 'http://localhost:3000'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  configureWebpack: config => {
      config.output.globalObject = "this"
  },
  head: {
    title: 'Ngoding Bentar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      // { "http-equiv": 'Content-Security-Policy', content: 'upgrade-insecure-requests'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // render: {
  //   csp: true
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/axios' },
    {src: '@/plugins/instanSearch', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [{ path: '~/components' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  // axios: {},
  http: {
    proxy: true // Can be also an object with default options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:['vue-instantsearch', 'instantsearch.js/es'],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  generate: {
    fallback: true
  }
}
