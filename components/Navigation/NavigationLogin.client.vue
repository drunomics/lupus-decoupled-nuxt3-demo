<template>
    <ul style="list-style: none;">
      <li v-if="!isLoggedIn">
        <nuxt-link to="/user/login?destination=/">Login</nuxt-link>
      </li>
      <li v-else>
        <a href="/user/logout">Logout</a>
      </li>
    </ul>
</template>

<script setup>
const { useCeApi } = useDrupalCe()

const isLoggedIn = ref(false)

const { data } = await useAsyncData(
  'loginStatus',
  () => useCeApi('/user/login_status', {
    query: {
      _format: 'json'
    }
  })
)

isLoggedIn.value = data.value?.logged_in || false
</script>