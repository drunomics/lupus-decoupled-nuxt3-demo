<template>
  <div class="node">
    <h2 v-if="title" class="mb-2 text-3xl font-semibold">Node: {{ title }}</h2>
    <div class="prose max-w-none" v-if="$slots.image || $attrs.image">
      <slot name="image">
        <component :is="useDrupalCe().renderCustomElements($attrs.image)" />
      </slot>
    </div>
    <div class="prose dark:prose-invert max-w-none" v-if="$slots.body || $attrs.body">
      <slot name="body">
        <component :is="useDrupalCe().renderCustomElements($attrs.body)" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  body();
  image();
}>()
defineProps<{
  title?: string;
  type?: string;
  created?: number | string;
  // Layout-builder support.
  sections?: object;
}>()
</script>
