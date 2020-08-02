const config = require('./.contentful.json')

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Joseph Hornby | Creative Technology',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/uiv5xjo.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap&text=%E2%86%92%E2%86%97'
      }
  ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    './plugins/vue-img.js'
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    // proxyHeaders: false
  },
  styleResources: {
    scss: [
      '@/assets/scss/_remedy.scss',
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_typography.scss',
      '@/assets/scss/_styles.scss',
    ]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  /*
  ** Contentful env variables
  */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PROJECT_TYPE_ID: config.CTF_PROJECT_TYPE_ID,
    CTF_PAGE_TYPE_ID: config.CTF_PAGE_TYPE_ID
  }
}
