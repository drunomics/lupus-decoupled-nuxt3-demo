<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="menuItem in mainMenu" :key="menuItem.key" class="relative">
        <NuxtLink
          v-slot="slot"
          :to="menuItem.relative"
          :external="menuItem.external"
          :target="menuItem.external ? '_blank' : null"
        >
          <Icon
            v-if="menuItem.external"
            name="lucide:arrow-up-right"
            class="absolute right-2 top-2 text-muted-foreground"
            size="13"
          />
          <UiNavigationMenuLink
            :active="slot?.isActive"
            as="span"
            class="bg-transparent pr-6 font-semibold"
            :class="navigationMenuTriggerStyle()"
          >
            {{ menuItem.title }}
          </UiNavigationMenuLink>
        </NuxtLink>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority"

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)
const { fetchMenu } = useDrupalCe()
const mainMenu = await fetchMenu('main')
</script>
