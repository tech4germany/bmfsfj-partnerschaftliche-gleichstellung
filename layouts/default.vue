<template>
  <div class="md:bg-grau-100 h-screen md:py-3">
    <div class="flex flex-col h-full bg-white md:max-h-full md:rounded-lg md:overflow-auto md:max-w-xl md:mx-auto">
      <tech-4-germany-info-banner></tech-4-germany-info-banner>
      <header class="shadow">
        <div class="w-full bg-white text-primary-500 h-16 flex flex-row justify-center gap-2 px-2">
          <bmfsfj-search class="border-2 border-primary-500"></bmfsfj-search>

          <bmfsfj-profile-icon></bmfsfj-profile-icon>
        </div>

        <nav class="flex w-full text-center text-dunkelgrau-300 text-3xl my-1">
          <NuxtLink :to="localeRoute('/modules')" class="flex-grow pb-1 border-b-2 mr-px ml-2 border-dunkelgrau-300">Module</NuxtLink>
          <NuxtLink :to="localeRoute('/tasks')" class="flex-grow pb-1 border-b-2 ml-px mr-2 border-dunkelgrau-300">To Do</NuxtLink>
        </nav>
      </header>

      <div class="p-2 max-h-full flex-grow overflow-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style scoped>
  nav >>> .nuxt-link-active {
    @apply border-primary-500 text-primary-500;
  }
</style>
