// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxtjs-drupal-ce'
    ],
    drupalCe: {
        baseURL: process.env.DRUPAL_BASE_URL || 'http://lupus-decoupled.ddev.site/ce-api',
        exposeAPIRouteRules: false,
    },
    nitro: {
        compressPublicAssets: true
    }
})
