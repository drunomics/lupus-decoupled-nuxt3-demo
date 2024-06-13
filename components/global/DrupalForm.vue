<template>
  <form vue-enabled :formId="formId" :method="method" v-bind="attributes" @submit.prevent="submitForm">
    <slot><div v-html="content"></div></slot>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  formId: String,
  attributes: Object,
  method: String,
  content?: String,
}>();

const { getPage, getMessages } = useDrupalCe()

const submitForm = async (event) => {
  const body = new FormData(event.target)
  body.append('target', event.target.action)
  const { data, error } = await useFetch('/form-handler', {
    method: 'POST',
    body,
  })

  if (error.value) {
    getMessages()?.value?.push({
      type: 'error',
      message:
        'There was a problem submitting the form. Try again later or contact the site administrator.',
    })
    console.error(error)
    return
  }

  const isRedirect = data.value.redirect
  if (isRedirect) {
    await navigateTo(isRedirect.url, {
      external: isRedirect.external,
    })
  } else {
    getPage().value = data.value
  }
}
</script>
