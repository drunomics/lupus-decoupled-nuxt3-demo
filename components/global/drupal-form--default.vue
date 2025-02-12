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

<style lang="postcss">
.drupal-form {
  @apply font-meta text-foreground;

  /* Input fields */
  input:not([type="checkbox"]):not([type="radio"]),
  select,
  textarea {
    @apply w-full px-4 py-2 rounded-md;
    @apply border-input bg-background text-foreground;
    @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
  }

  label {
    @apply block text-sm font-medium text-foreground mb-1;
  }

  .form-item {
    @apply mb-4;
  }

  /* Buttons */
  button[type="submit"],
  input[type="submit"] {
    @apply w-full px-4 py-2 text-sm font-medium;
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
    @apply rounded-md shadow-sm transition-colors;
    @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
  }

  input[type="checkbox"],
  input[type="radio"] {
    @apply h-4 w-4 border border-input bg-background;
    @apply text-primary focus:ring-ring;
  }

  .form-item--error-message {
    @apply mt-2 text-sm text-destructive;
  }

  input.error,
  select.error,
  textarea.error {
    @apply border-destructive;
    @apply focus:ring-destructive;
  }
}
</style>