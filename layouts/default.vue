<template>
  <div>
    <header class="">
      <div class="w-full bg-blue-500 text-white h-16 rounded-t-xl flex flex-col justify-center">
        <h1 class="ml-2"> Hello Team :)</h1>
      </div>

      <nav class="flex w-full text-center text-blue-500 font-bold">
        <NuxtLink to="/" class="flex-grow m-2">Aufgaben</NuxtLink>
        <NuxtLink to="/home" class="flex-grow m-2">Übersicht</NuxtLink>
        <NuxtLink to="/test" class="flex-grow m-2">Wir</NuxtLink>
      </nav>
    </header>

    <Nuxt />
  </div>
</template>

<style>
  .nuxt-link-exact-active {
    @apply border-b-2 border-blue-500;
  }
</style>
