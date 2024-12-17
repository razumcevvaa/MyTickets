<template>
  <div class="control-toolbar">
    <div>
      <h1>ДЕНЯК НЕТ</h1>
      <h2>И не будет</h2>
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