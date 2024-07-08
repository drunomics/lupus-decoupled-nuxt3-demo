import { readFormData } from 'h3'
import { getDrupalBaseUrl } from '~/node_modules/nuxtjs-drupal-ce/dist/runtime/composables/useDrupalCe/server'

export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) {
    const { ceApiEndpoint } = useRuntimeConfig().public.drupalCe
    const event = useRequestEvent()

    if (event && event.node.req.method === 'POST') {
      const formData = await readFormData(event)

      if (formData) {
        const targetUrl = formData.get('target_url')
        const response = await $fetch(getDrupalBaseUrl() + ceApiEndpoint + targetUrl, {
          method: 'POST',
          body: formData,
        })

        event.context.nitro.response = response
        return
      } else {
        throw createError({
          statusCode: 400,
          statusMessage: 'Bad Request',
          message: 'The request contains invalid form data or no form data at all.',
        })
      }
    }
  }
})
