import { defineEventHandler, readFormData } from 'h3'
import { getDrupalBaseUrl } from '~/node_modules/nuxtjs-drupal-ce/dist/runtime/composables/useDrupalCe/server'

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'POST') {
    const { ceApiEndpoint } = useRuntimeConfig().public.drupalCe
    const formData = await readFormData(event)

    if (formData) {
      const targetUrl = formData.get('target_url')
      const response = await $fetch(getDrupalBaseUrl() + ceApiEndpoint + targetUrl, {
        method: 'POST',
        body: formData,
      })

      event.context.nitro.response = response
    }
  }
})
