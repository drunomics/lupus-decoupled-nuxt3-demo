<template>
  <div class="canvas-page">
    <slot name="components">
      <component :is="useDrupalCe().renderCustomElements(components)" />
    </slot>
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    components(): any
  }>()
  defineProps<{
    components?: CustomElementContent;
  }>()
</script>
