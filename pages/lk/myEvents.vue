<template>
<div class="control-toolbar">
  <div>
    <NuxtLink to="/lk/myEventCreate">Добавить</NuxtLink>
    <NuxtLink to="/lk/myEventCreate">Архив</NuxtLink>
  </div>
</div>
</template>

<script setap lang="ts">
definePageMeta({
  layout: 'lk'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})
</script>

<style scoped>

</style>