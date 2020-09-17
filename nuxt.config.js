import dotenv from "dotenv"; dotenv.config();

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
        hid: 'title',
        name: 'title',
        content: 'Joseph Hornby / Creative Technology',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Joe Hornby\'s portfolio of Creative Technology, Design, Acoustics and Spatial Audio.',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel:"apple-touch-icon",
        sizes:"180x180",
        href:"/apple-touch-icon.png"
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes:"32x32", 
        href:"/favicon-32x32.png"
      },
      {
        rel:"icon",
        type:"image/png", 
        sizes:"16x16", 
        href:"/favicon-16x16.png"
      },
      {
        rel:"manifest",
        href:"/site.webmanifest"
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
    'nuxt-gsap'
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
      '@/assets/scss/_variables.scss',
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
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PROJECT_TYPE_ID: process.env.CTF_PROJECT_TYPE_ID,
    CTF_PAGE_TYPE_ID: process.env.CTF_PAGE_TYPE_ID
  }
}
