<template>
  <div class="node">
    <h2 v-if="title" class="mb-2 text-3xl font-semibold">{{ title }}</h2>
    <div v-if="image" class="prose max-w-none" v-html="image.content" />
    <div v-if="body" class="prose dark:prose-invert max-w-none" v-html="body" />
    <div v-if="sections">
      <component :is="useDrupalCe().renderCustomElements(sections)" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  type?: string;
  created?: number | string;
  body?: string[];
  image?: object;
  sections?: object;
}>()
</script>
