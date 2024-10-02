<template>
  <ul style="list-style: none;">
    <li v-if="loginStatus">
      <nuxt-link to="/user/logout">Logout</nuxt-link>
    </li>
    <li v-else>
      <nuxt-link to="/user/login?destination=/">Login</nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const loginStatus = ref(false)

onMounted(async () => {
try {
  const response = await fetch('/api/drupal-ce/user/login_status?_format=json')
  if (response.ok) {
    const data = await response.json()
    loginStatus.value = data.logged_in
  } else {
    console.error('Failed to fetch login status')
  }
} catch (error) {
  console.error('Error fetching login status:', error)
}
})
</script>