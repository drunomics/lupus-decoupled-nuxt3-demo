<template>
  <div class="node">
    <h2>Title: {{ title }}</h2>
    <div v-if="image" v-html="image.content" />
    <div v-if="body" v-html="body" />
    <div v-if="sections">
      <component :is="useDrupalCe().renderCustomElements(sections)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: String;
  title?: String;
  created?: Number;
  body?: String[];
  image?: Object;
  sections?: Object;
}>();
</script>