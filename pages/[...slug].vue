<template>
  <div>
    <NuxtLayout :name="layout">
      <main>
        <SiteBreadcrumbs />
        <DrupalTabs v-if="page?.local_tasks" :tabs="page.local_tasks" />
        <component :is="renderCustomElements(page.content)" v-if="page?.content"  />
      </main>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute, useHead, computed } from '#imports'
import { useDrupalCe } from '#imports'

const route = useRoute()
const { fetchPage, renderCustomElements } = useDrupalCe()

const { data: page } = await useAsyncData('page', () => 
  fetchPage(route.path, { query: route.query })
)

definePageMeta({
  layout: false,
})

const layout = computed(() => {
  return page.value?.page_layout || 'default'
})

useHead(() => ({
  title: page.value?.title,
  meta: page.value?.metatags?.meta || [],
  link: page.value?.metatags?.link || [],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(page.value?.metatags?.jsonld || []),
    },
  ],
}))
</script>
