// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxtjs-drupal-ce',
        '@nuxtjs/tailwindcss',
        'unplugin-icons/nuxt'
    ],
    drupalCe: {
        baseURL: process.env.DRUPAL_BASE_URL || 'https://8080-drunomics-lupusdecouple-xxxxxxxxxxx.ws-euxx.gitpod.io/ce-api'
    }
})
