import { defineEventHandler, readMultipartFormData, proxyRequest } from 'h3'
import { getDrupalBaseUrl } from '~/node_modules/nuxtjs-drupal-ce/dist/runtime/composables/useDrupalCe/server'

export default defineEventHandler(async (event) => {
  const { ceApiEndpoint } = useRuntimeConfig().public.drupalCe
  const formData = await readMultipartFormData(event)
  const target = formData?.find((field) => field.name === 'target')?.data?.toString() ?? ''
  const targetUrl = new URL(target).pathname
  return await proxyRequest(event, getDrupalBaseUrl() + ceApiEndpoint + targetUrl)
})
