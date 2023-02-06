<template>
  <div>
    <MainNavigation />
    <Messages />
    <Breadcrumbs />
    <component :is="renderCustomElements(page.content)" />
  </div>
</template>

<script lang="ts" setup>
const { fetchPage, renderCustomElements } = useDrupalCe()
const page = await fetchPage(useRoute().path, { query: useRoute().query })
</script>
