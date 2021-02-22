import webpack from 'webpack'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuetify-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/components.js',
    '~/plugins/events.js',
    '~/plugins/font-awesome.js',
    '~/plugins/http.js',
    '~/plugins/http-pinpayments.js',
    '~/plugins/vuetify.js',
    '~/plugins/vue-smooth-picker.js',
    '~/plugins/vue-croppa.js',
    '~/plugins/pinjs.js',
    {src: '~/plugins/vue-sample-uploader.js', ssr: false},
    '~/plugins/vue-js-modal',
    {src: '~/plugins/localStorage.js', ssr: false }
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/helvetica/helvetica.css',
    '~/assets/style/helvetica-neue/helvetica-neue.css'
  ],
  env: {
    API_URL: 'http://localhost:8000/api', // waiting for the api xd
    PROXY: 'https://cors-anywhere.herokuapp.com/',
    PAYMENT: 'https://test-api.pinpayments.com'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
          '_': 'lodash',  /* see sample implementation @ GlobalToolbar.vue */
          'moment': 'moment'
      })
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev}) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      config.node = {
        fs: "empty"
      }
    }
  }
}
