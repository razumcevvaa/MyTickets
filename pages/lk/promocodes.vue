<template>
  <div class="control-toolbar">
    <div>
      <h1>Промокоды</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'lk',
  middleware: 'auth'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})
</script>

<style scoped></style>