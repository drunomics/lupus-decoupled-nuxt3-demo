<template>
  <UiBreadcrumb class="mt-5 mb-2">
    <UiBreadcrumbList>
      <template v-for="(breadcrumb, index) in page.breadcrumbs" :key="index">
        <UiBreadcrumbItem>
          <UiBreadcrumbLink as-child>
            <nuxt-link :to="breadcrumb.url">
              {{ breadcrumb.label }}
            </nuxt-link>
          </UiBreadcrumbLink>
        </UiBreadcrumbItem>
        <UiBreadcrumbSeparator v-if="index !== page.breadcrumbs.length - 1" />
      </template>
    </UiBreadcrumbList>
  </UiBreadcrumb>
</template>

<script setup lang="ts">
const { getPage } = useDrupalCe()
const page = getPage()
</script>
