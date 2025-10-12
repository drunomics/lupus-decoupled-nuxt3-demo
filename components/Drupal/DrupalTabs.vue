<template>
  <div v-if="tabs.primary && tabs.primary.length > 0" class="drupal-tabs my-4">
    <UiTabs :default-value="activeTab" class="w-full">
      <UiTabsList>
        <UiTabsTrigger
          v-for="tab in tabs.primary"
          :key="tab.url"
          :value="tab.url"
          as-child
        >
          <nuxt-link :to="tab.url">
            {{ tab.label }}
          </nuxt-link>
        </UiTabsTrigger>
      </UiTabsList>
    </UiTabs>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: {
    primary?: Array<{
      label: string
      url: string
      active?: boolean
    }>
  }
}>()

// Find the active tab URL
const activeTab = computed(() => {
  const active = props.tabs.primary?.find(tab => tab.active)
  return active?.url || props.tabs.primary?.[0]?.url || ''
})
</script>
