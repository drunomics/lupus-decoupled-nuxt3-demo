<template>
  <div class="min-h-screen flex flex-col">
    <NavigationHeader />
    <SiteMessages />
    <div id="main" class="container max-w-3xl pb-10 grow">
      <slot />
    </div>
    <NavigationFooter />
  </div>
</template>

<style>
#main {
  min-height: 70vh;
}
body {
  background-color: white;
}
</style>
