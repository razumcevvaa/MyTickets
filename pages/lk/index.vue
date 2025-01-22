<template>
  <div class="container-display">
    <h1>PASSTICKETS</h1>
    <p class="text-center">Добро пожаловать, {{ userStore.user?.name }}!</p>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
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
<style scoped>
h1 {
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 290px;
}
</style>