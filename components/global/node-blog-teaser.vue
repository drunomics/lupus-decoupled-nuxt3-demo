<template>
  <nuxt-link class="node" :to="path.pathAlias">
    <h2 v-if="title" class="mb-2 text-3xl font-semibold">{{ title }}</h2>
    <div v-if="featuredImage && featuredImage.mediaImage" class="prose max-w-none" v-html="featuredImage.mediaImage.content" />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  featuredImage?: object;
  path?: object;
}>()
</script>
