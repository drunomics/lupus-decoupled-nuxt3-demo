<template>
  <header class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg lg:border-b">
    <div class="flex h-14 items-center justify-between gap-2 px-4 md:px-8 border-b lg:border-none">
      <NavigationHeaderMobileNav />
      <NavigationHeaderNav class="hidden flex-1 lg:flex" />
      <NavigationDarkModeToggle />
    </div>
  </header>
</template>
