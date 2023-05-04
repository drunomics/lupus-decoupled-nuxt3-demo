// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxtjs-drupal-ce'
    ],
    drupalCe: {
        baseURL: process.env.DRUPAL_BASE_URL || 'https://live-lupus-decoupled.pantheonsite.io/ce-api'
    },
    nitro: {
        preset: 'lagon',
        compressPublicAssets: true
    }
})
