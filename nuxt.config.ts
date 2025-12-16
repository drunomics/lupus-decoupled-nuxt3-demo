// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxtjs-drupal-ce', "@nuxt/eslint"],

  drupalCe: {
    drupalBaseUrl: process.env.NUXT_PUBLIC_DRUPAL_CE_DRUPAL_BASE_URL || 'https://lupus-decoupled.ddev.site',
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
