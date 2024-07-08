<template>
  <component v-if="response?.content" :is="renderCustomElements(response.content)" />
</template>

<script setup>
const { getPage, renderCustomElements, getMessages } = useDrupalCe()

definePageMeta({
  middleware: 'form-handler',
})

const response = useState('form-response', () => null)

const event = useRequestEvent(useNuxtApp())
if (import.meta.server) {
  response.value = event?.context?.nitro?.response
}

if (response.value) {
  const isRedirect = response.value.redirect
  const messages = response.value.messages
  if (isRedirect) {
    onMounted(async () => {
      if (messages) {
        getMessages().value.push({
          type: messages.error ? 'error' : 'success',
          message: messages.error || messages.success,
        })
      }
      await navigateTo(isRedirect.url, {
        external: isRedirect.external,
      })
    })
  } else {
    getPage().value = response.value
  }
} else {
  onMounted(async () => {
    await navigateTo('/')
  })
}
</script>
