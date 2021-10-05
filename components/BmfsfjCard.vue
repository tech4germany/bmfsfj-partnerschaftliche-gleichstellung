<template>
  <div class="border-2 border-blue-500 rounded-lg">
    <header class="bg-blue-500 text-white pl-4 p-2">
      <slot name="header"></slot>
    </header>
    <div class="m-2">
      <slot></slot>
    </div>
  </div>
</template>
