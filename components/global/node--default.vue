<template>
  <div class="node">
    <h2 v-if="title" class="mb-2 text-3xl font-semibold">Node: {{ title }}</h2>
    <div v-if="$slots.image || image" class="prose max-w-none">
      <slot name="image">
        <component :is="useDrupalCe().renderCustomElements(image)" />
      </slot>
    </div>
    <div v-if="$slots.body || body" class="prose dark:prose-invert max-w-none">
      <slot name="body">
        <component :is="useDrupalCe().renderCustomElements(body)" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  body(): any
  image(): any
}>()

defineProps<{
  title?: string;
  type?: string;
  created?: number | string;
  // Layout-builder support.
  sections?: CustomElementContent;
  image?: CustomElementContent;
  body?: CustomElementContent;
}>()
</script>
