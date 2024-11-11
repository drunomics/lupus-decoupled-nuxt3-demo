<template>
  <div class="container flex flex-wrap items-center justify-center gap-2 mt-3">
    <div v-for="menuItem in accountMenu" :key="menuItem.key">
      <UiButton variant="secondary" size="xs" as="a" :href="menuItem.relative">
        {{ menuItem.title }}
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const accountMenu = await useDrupalCe().fetchMenu('account')
</script>
