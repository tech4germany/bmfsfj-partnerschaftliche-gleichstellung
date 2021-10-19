<template>
  <div class="flex flex-col h-screen">
    <tech-4-germany-info-banner></tech-4-germany-info-banner>
    <header class="shadow">
      <div class="w-full bg-white text-primary-500 h-16 flex flex-row justify-center gap-2 px-2">
        <bmfsfj-search class="border-2 border-primary-500"></bmfsfj-search>

        <bmfsfj-profile-icon></bmfsfj-profile-icon>
      </div>

      <nav class="flex w-full text-center text-primary-500 font-bold">
        <NuxtLink :to="localeRoute('/modules')" class="flex-grow m-2">Module</NuxtLink>
        <NuxtLink :to="localeRoute('/tasks')" class="flex-grow m-2">ToDos</NuxtLink>
      </nav>
    </header>

    <div class="p-2 max-h-full flex-grow overflow-auto">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
  nav >>> .nuxt-link-active {
    @apply border-b-2 border-primary-500;
  }
</style>
