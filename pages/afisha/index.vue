<template>
  <h1 class="header-page">Мероприятия в <span>Сочи</span></h1>
  <div class="box-event">
  <CardEvent/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'customers'
})
</script>

<style scoped>
.box-event {
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  gap:  30px 70px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>