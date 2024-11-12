<template>
  <h1 class="header-afisha">Мероприятия в <span>Сочи</span></h1>
  <div class="box-event">
  <CardEvent/>
  </div>
</template>

<script setup>

</script>
<style scoped>
.header-afisha {
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
}
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