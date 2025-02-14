<template>
  <form
    :formId="formId"
    :method="method"
    v-bind="attributes"
    :action="useRoute().fullPath"
    class="drupal-form"
  >
    <slot>
      <component :is="useDrupalCe().renderCustomElements($attrs.content)" />
    </slot>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  formId: string
  attributes: object
  method: string
}>()
defineSlots<{
  default();
}>()
</script>

<style>
.drupal-form {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}

.drupal-form label {
  display: block;
  margin-bottom: 0.325rem;
}

.drupal-form input {
  padding: 0.5rem;
}

.drupal-form .form-item {
  margin-bottom: 0.75rem;
}
</style>
