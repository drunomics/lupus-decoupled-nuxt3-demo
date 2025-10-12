<template>
  <article class="node">
    <h1 v-if="title" class="text-3xl font-bold tracking-tight mb-6">{{ title }}</h1>
    <div v-if="image" class="node-image mb-6">
      <slot name="image">
        <component :is="useDrupalCe().renderCustomElements(image)" />
      </slot>
    </div>
    <div v-if="body" class="node-body">
      <slot name="body">
        <component :is="useDrupalCe().renderCustomElements(body)" />
      </slot>
    </div>
    <div v-if="sections" class="node-sections mt-6">
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
