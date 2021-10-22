const locales = [
  {
    code: 'de',
    file: 'de',
    name: 'Deutsch',
  },
  {
    code: 'en',
    file: 'en',
    name: 'English',
  },
  {
    code: 'ru',
    file: 'ru',
    name: 'Русский',
  },
  {
    code: 'tr',
    file: 'tr',
    name: 'Türkçe',
  },
]

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bmfsfj-partnerschaftliche-gleichstellung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue-select/dist/vue-select.css',
    '~/assets/css/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    '~/plugins/fontawesome',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    [
      '@nuxtjs/i18n',
      {
        locales,
        defaultLocale: 'de',
        langDir: 'lang/',
        vueI18n: {
          fallbackLocale: ['en', 'de'],
        },
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'BMFSFJ PG',
      theme_color: '#3b82f6',
    },
    manifest: {
      lang: 'de',
      name: 'BMFSFJ PG',
    },
    workbox: {
      offlinePage: '/',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description', 'category'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  crawler: true,

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')

      const todos = await $content('todos', { deep: true })
        .only(['id', 'path', 'dir'])
        .fetch()

      const routes = todos.map(({ id }) => `/todos/${id}`)

      const localePrefixes = locales.map(({ code }) =>
        code === 'de' ? '' : `/${code}`
      )

      return localePrefixes
        .map((prefix) => routes.map((route) => `${prefix}${route}`))
        .flat()
    },
  },

  router: {
    base: '/bmfsfj-partnerschaftliche-gleichstellung/',
  },
}
