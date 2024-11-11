<template>
  <footer class="py-6 text-muted-foreground md:px-8 border-t">
    <div class="container flex flex-wrap items-center justify-center gap-2">
      <div v-for="(menuItem, i) in footerMenu" :key="i">
        <UiButton variant="link" size="xs">
          {{ menuItem.title }}
        </UiButton>
      </div>
    </div>
    <NavigationFooterAccount />
  </footer>
</template>

<script setup lang="ts">
const footerMenu = ref([{ title: 'Link1' }, { title: 'Link2' }, { title: 'Link3' }])
</script>
