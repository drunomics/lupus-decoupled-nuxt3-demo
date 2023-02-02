<template>
  <div v-html="content">
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true
  },
})
</script>
