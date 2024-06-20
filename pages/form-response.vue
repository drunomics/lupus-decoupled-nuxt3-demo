<template>
  <component v-if="response?.content" :is="renderCustomElements(response.content)" />
</template>

<script setup>
const { getPage, renderCustomElements } = useDrupalCe()

const response = useState('form-response', () => null)

const event = useRequestEvent(useNuxtApp())
if (import.meta.server) {
  response.value = event?.context?.nitro?.response
}

if (response.value) {
  const isRedirect = response.value.redirect
  if (isRedirect) {
    await navigateTo(isRedirect.url, {
      external: isRedirect.external,
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
