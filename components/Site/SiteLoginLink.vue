<template>
  <ul class="account-menu">
    <li v-for="menuItem in accountMenu" :key="menuItem.key">
      <nuxt-link
        v-if="!menuItem.external"
        class="item"
        :to="'/' + menuItem.alias"
      >
        {{ menuItem.title }}
      </nuxt-link>
      <a
        v-else
        class="item"
        :href="menuItem.absolute"
        v-text="menuItem.title"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
const { fetchMenu } = useDrupalCe()
const accountMenu = await fetchMenu('account')
</script>

<style lang="css" scoped>
.account-menu {
  display: inline-flex;
  list-style: none;
}

.item {
  margin: 0 1rem;
  text-decoration: none;
  color: #222;
}

.router-link-active {
  border-bottom: 2px solid aquamarine;
}
</style>
