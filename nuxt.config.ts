// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxtjs-drupal-ce', "@nuxt/eslint"],

  drupalCe: {
    drupalBaseUrl: 'https://lupus-decoupled.ddev.site',
    exposeAPIRouteRules: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    server: {
      allowedHosts: ['.gitpod.io']
    }
  },

  compatibilityDate: '2024-09-10',
})
