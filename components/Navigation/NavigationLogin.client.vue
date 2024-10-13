<template>
    <ul style="list-style: none;">
      <li v-if="!loginStatus">
        <nuxt-link to="/user/login?destination=/">Login</nuxt-link>
      </li>
      <li v-else>
        <nuxt-link to="/user/logout">Logout</nuxt-link>
      </li>
    </ul>
  </template>
  
  <script setup>
  const { useCeApi } = useDrupalCe()
  
  const loginStatus = ref(false)
  
  const { data } = await useAsyncData(
    'loginStatus',
    () => useCeApi('/user/login_status', {
      query: {
        _format: 'json'
      }
    }),
    { server: false }
  )
  
  loginStatus.value = data.value?.logged_in || false
  </script>