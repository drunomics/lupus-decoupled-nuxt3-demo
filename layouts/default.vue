<template>
  <div>
    <NavigationMain />
    <SiteMessages />
    <div id="main">
      <slot />
    </div>
    <footer>
      <NavigationAccount />
    </footer>
  </div>
</template>

<style>
#main {
  margin-bottom: 200px;
}

body {
  background-color: white;
}
</style>