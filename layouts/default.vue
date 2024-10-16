<template>
  <div>
    <NavigationMain />
    <SiteMessages />
    <div id="main">
      <slot />
    </div>
    <NavigationLogin />
  </div>
</template>

<style>
#main {
  margin-bottom: 200px;
}
</style>