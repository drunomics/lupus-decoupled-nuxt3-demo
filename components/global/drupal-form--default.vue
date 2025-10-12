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
  formId: string
  attributes: object
  method: string,
  content?: CustomElementContent
}>()

defineSlots<{
  default(): any
}>()
</script>

<style>
.drupal-form {
  max-width: 28rem;
}

.drupal-form label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-foreground);
}

.drupal-form input[type="text"],
.drupal-form input[type="password"],
.drupal-form input[type="email"],
.drupal-form textarea {
  color: var(--color-foreground);
  background-color: var(--color-background);
  border-color: var(--color-input);
}

.drupal-form input::placeholder,
.drupal-form textarea::placeholder {
  color: var(--color-muted-foreground);
}

.drupal-form .form-item {
  margin-bottom: 1.5rem;
}

.drupal-form .form-actions {
  margin-top: 1.5rem;
}

.drupal-form button[type="submit"],
.drupal-form input[type="submit"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  height: 2.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
}

.drupal-form button[type="submit"]:hover,
.drupal-form input[type="submit"]:hover {
  background-color: color-mix(in oklch, var(--color-primary), black 10%);
}

.drupal-form .description {
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
  margin-top: 0.25rem;
}
</style>
