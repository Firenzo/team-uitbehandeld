import { exec } from 'child_process'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'team-uitbehandeld',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/both-sides.js'},
    {src: '~plugins/client-only.js', mode: 'client'},
    {src: '~plugins/server-only.js', mode: 'server'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    strapiAPI: 'http://dev.teamuitbehandeld.nl'
  },

  fontawesome: {
    component: 'FaIcon',
    icons: {
      solid: ['faEnvelope','faMapMarkerAlt','faPhone', 'faBars', 'faTimes', 'faArrowRight', 'faChevronRight', 'faChevronUp', 'faEuroSign', 'faFileAlt'],
      brands: ['faTwitter', 'faFacebook', 'faFacebookF', 'faInstagram', 'faLinkedinIn']
    }
  },

  loading: {
    color: '#9cbe2f',
    height: '7px'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  markdownit: {
    html: true,
    linkify: false,
    typographer: true,
    runtime: true // supports '$md()'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  hooks: {
    generate: {
      done (builder) {
        if (process.platform === 'win32' && process.env.USERNAME === "FJORDEN") {
          exec("start cmd /k copy-nuxt-project.bat")
          console.log('copied files to Strapi')
        }

        if(process.platform === 'linux'){
          exec("./copy-nuxt-project.sh")
          console.log('copied files to Strapi')
        }
      }
    }
  }
}
