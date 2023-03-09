<template>
  <div class="node prose">
    <h2>Title: {{ title }}</h2>
    <div v-if="image" v-html="image.content" />
    <div v-if="body" v-html="body" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String;
  type: String;
  created: Integer;
  body?: String[];
  image?: Object;
}>();
</script>
