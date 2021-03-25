export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'igtm-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs:[
      '~/components',
      {
        path: '/components/modal/',
        prefix: 'Modal'
      }
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'

  ],
   
  proxy: {
    '/formsapi': {
      target: 'https://docs.google.com',
      pathRewrite: {
        '^/formsapi': '/'
      }
    }
  },
  //alternative place for config
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  mode: "universal",
}
