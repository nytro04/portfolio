export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'francisbadasu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js' },
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/ScrollTrigger.min.js',
      // },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/particles.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    [
      'nuxt-gsap-module',
      {
        gsap: {
          extraPlugins: {
            scrollTo: true,
            scrollTrigger: true,
          },
        },
      },
    ],
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
