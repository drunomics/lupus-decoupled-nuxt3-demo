<template>
  <div class="node">
    <h2>{{ title }}</h2>
    <div v-if="body" v-html="body" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  body: String
})
</script>
