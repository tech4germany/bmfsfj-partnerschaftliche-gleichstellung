<template>
  <div class="content-area">
    <slot></slot>
  </div>
</template>

<style scoped>
content-area >>> .nuxt-content {
  @apply flex flex-col gap-1;
}

.content-area >>> .nuxt-content h1,h2,h3 {
  @apply font-bold;
}

.content-area >>> .nuxt-content a {
  @apply text-primary-500;
}

.content-area >>> .nuxt-content ul {
  @apply list-inside list-disc;
}

.content-area >>> .nuxt-content ol {
  @apply list-inside list-decimal;
}

.content-area >>> .nuxt-content li {
  @apply list-item;
}
</style>
