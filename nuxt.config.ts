// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxtjs-drupal-ce',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],

  drupalCe: {
    drupalBaseUrl: 'http://lupus-decoupled.ddev.site',
    exposeAPIRouteRules: true,
  },

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/Ui',
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    compressPublicAssets: true,
  },

  compatibilityDate: '2024-09-10',
})
