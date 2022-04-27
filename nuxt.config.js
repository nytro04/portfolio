export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Francis Badasu - Front-End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'A Front-End Web Developer with  industry experience building websites and web applications - JavaScript, TypeScript, Vue/Vuex, Nuxt, React/Redux, NodeJs and Go.',
      },
      {
        name: 'title',
        content: 'Francis Badasu - Front-End Web Developer',
      },
      {
        name: 'keywords',
        content:
          'Francis Badasu,  Front End Developer, Front-End Development, Front End Development, Front-End Web Developer, Front End Web Developer, front end Web Developer,',
      },
      { name: 'robots', content: 'index,follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],

    script: [],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
