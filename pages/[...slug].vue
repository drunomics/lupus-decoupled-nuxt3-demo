<template>
  <div>
    <Breadcrumbs v-if="page.breadcrumbs" />
    <DrupalTabs v-if="page.local_tasks" :tabs="page.local_tasks" />
    <component :is="renderCustomElements(page.content)" />
  </div>
</template>

<script lang="ts" setup>
const { fetchPage, renderCustomElements } = useDrupalCe()
const page = await fetchPage(useRoute().path, { query: useRoute().query })
</script>
