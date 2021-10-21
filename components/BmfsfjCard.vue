<template>
  <div class="border-2 border-primary-500 rounded-lg">
    <header class="border-b-2 border-primary-500">
      <slot name="header"></slot>
    </header>
    <div class="mx-2 mt-1 mb-2">
      <slot></slot>
    </div>
  </div>
</template>
