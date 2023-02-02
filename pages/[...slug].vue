<template>
  <div>
    <MainNavigation />
    <Messages />
    <Breadcrumbs />
    <component :is="useDrupalCeRenderCustomElements(page.content)" />
  </div>
</template>

<script lang="ts" setup>
const page = await useDrupalCeFetchPage(useRoute().path, { query: useRoute().query })
</script>
