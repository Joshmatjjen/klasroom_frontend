const webpack = require('webpack')

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "img-src 'self' data: *; default-src 'self' data: 'unsafe-inline' 'unsafe-eval' https://*; connect-src 'self' http://* https://* ws://* wss://*",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://webrtc.github.io/adapter/adapter-latest.js' },
      // { src:"js/webrtc_adaptor.js" }
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    // '~/assets/css/global.css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/vue2-filters',
    '~plugins/webrtc-adaptor',
    { src: '~plugins/validate', mode: 'client' },
    { src: '~plugins/datepicker', mode: 'client' },
    { src: '~plugins/vue-select', mode: 'client' },
    // { src: '~plugins/vue-video-player', mode: 'client' },
    { src: '~plugins/paystack', mode: 'client' },
    { src: '~/plugins/vue-good-table', ssr: false },
    // { src: '~plugins/webrtc-adaptor', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/device',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-sweetalert2',
    // nux socket io
    'nuxt-socket-io',
    'nuxt-clipboard2',
  ],
  // nux socket io
  io: {
    sockets: [
      // Required
      {
        // At least one entry is required
        name: 'home',
        url:
          'ws://e7a46558e455.ngrok.io/ws/public-chats/?token=BUSY8QLS3gyCUBhf0DrrtjXTZmqEp8Zisjq0_YiPaJs&webinar_id=25216',
        default: true,
        vuex: {
          /* see section below */
        },
        namespaces: {
          /* see section below */
        },
      },
      // { name: 'work', url: 'http://somedomain1:3000' },
      // { name: 'car', url: 'http://somedomain2:3000' },
      // { name: 'tv', url: 'http://somedomain3:3000' },
      // { name: 'test', url: 'http://localhost:4000' }
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true
  },
  // proxy: {
  //   '/v1': { target: process.env.BASE_URL || 'https://api.staging.klasroom.com/', pathRewrite: {'^/v1/': ''} }
  // },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
        moment: 'moment',
        adapter: 'webrtc-adapter',
        // $: 'jquery',
        // jQuery: 'jquery'
      }),
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://api.staging.klasroom.com/v1/',
    secret: process.env.SECRET,
  },
}

module.exports = {
  // If you provide a version, it will be stored inside cache.
  // Later when you deploy a new version, old cache will be
  // automatically purged.
  // version: pkg.version,

  // ....

  modules: ['nuxt-ssr-cache'],
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',
    ],

    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return
      // falsy value to bypass the cache
    },

    store: {
      type: 'redis',
      host: 'localhost',
      ttl: 10 * 60,
      configure: [
        // these values are configured
        // on redis upon initialization
        ['maxmemory', '200mb'],
        ['maxmemory-policy', 'allkeys-lru'],
      ],
    },
  },
}
