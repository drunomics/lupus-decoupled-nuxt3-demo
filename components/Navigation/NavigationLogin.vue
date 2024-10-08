<template>
  <ClientOnly>
    <ul style="list-style: none;">
      <li v-if="loginStatus">
        <nuxt-link to="/user/logout">Logout</nuxt-link>
      </li>
      <li v-else>
        <nuxt-link to="/user/login?destination=/">Login</nuxt-link>
      </li>
    </ul>
  </ClientOnly>
</template>

<script setup>
const { useCeApi } = useDrupalCe()

const loginStatus = ref(false)

const { data: loginData } = await useAsyncData(
  'loginStatus',
  () => useCeApi('/user/login_status', {
    query: {
      _format: 'json'
    }
  }),
  { server: false }
)

watchEffect(() => {
  if (loginData.value) {
    loginStatus.value = loginData.value.logged_in
  }
})
</script>