// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxtjs-drupal-ce',
  ],
  drupalCe: {
    drupalBaseUrl: 'http://lupus-decoupled.ddev.site',
    exposeAPIRouteRules: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
})
