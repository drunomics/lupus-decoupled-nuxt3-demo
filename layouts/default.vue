<template>
  <div class="min-h-screen flex flex-col">
    <NavigationHeader />
    <SiteMessages />
    <div id="main" class="container max-w-3xl mx-auto px-4 md:px-8 pb-10 grow">
      <slot />
    </div>
    <NavigationFooter />
  </div>
</template>

<style lang="postcss">
#main {
  min-height: 70vh;
}
body {
  @apply bg-background;
}
</style>
