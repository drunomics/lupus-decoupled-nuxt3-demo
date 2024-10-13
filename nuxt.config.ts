// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxtjs-drupal-ce', "@nuxt/eslint"],

  drupalCe: {
    drupalBaseUrl: 'https://8080-drunomics-lupusdecouple-faehnoxmwuu.ws-eu116.gitpod.io',
    exposeAPIRouteRules: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  compatibilityDate: '2024-09-10',
})