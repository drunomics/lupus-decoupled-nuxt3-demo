<template>
  <div>
    <NavigationMain />
    <SiteLoginLink />
    <SiteMessages />
    <div id="main">
      <slot />
    </div>
  </div>
</template>

<style>
#main {
  margin-bottom: 200px;
}
</style>