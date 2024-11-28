<template>
  <div class="container-display">
    <h1>Личный кабинетттт</h1>
  </div>
  <NuxtLink to="/lk/lkLogin">Войти в личный кабинет</NuxtLink>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'lk'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})
// definePageMeta({
//   middleware: 'auth'
// })
</script>
<style scoped>
.container-display {
  position: absolute;
  left: 300px;
}
</style>