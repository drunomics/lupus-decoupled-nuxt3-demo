<template>
  <article class="node">
    <h2 v-if="title" class="text-3xl font-bold tracking-tight mb-6">{{ title }}</h2>
    <slot name="image">
      <component :is="useDrupalCe().renderCustomElements(image)" />
    </slot>
    <slot name="body">
      <component :is="useDrupalCe().renderCustomElements(body)" />
    </slot>
    <div v-if="sections">
      <component :is="useDrupalCe().renderCustomElements(sections)" />
    </div>
  </article>
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
