<template>
  <div class="rounded-lg bg-background-300">
    <header>
      <slot name="header"></slot>
      <hr>
    </header>
    <div class="mx-2 mt-1 mb-2">
      <slot></slot>
    </div>
  </div>
</template>
