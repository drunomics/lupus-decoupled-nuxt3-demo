<template>
  <form
    :formId="formId"
    :method="method"
    v-bind="attributes"
    :action="useRoute().fullPath"
    class="drupal-form"
  >
    <slot>
      <component :is="useDrupalCe().renderCustomElements(content)" />
    </slot>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  content?: CustomElementContent
  formId: string
  attributes: object
  method: string
}>()

defineSlots<{
  default(): any
}>()
</script>

<style lang="postcss">
form {
  @apply py-6;
}

label {
  @apply block mb-1.5;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  @apply max-w-full p-2 mb-2 border border-border rounded-md bg-background text-foreground;
}

input[type="submit"] {
  @apply bg-primary hover:bg-primary/90 text-background px-4 py-2 mt-1 rounded-md;
}
</style>
