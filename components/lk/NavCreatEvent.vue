<template>
<div class="nav-create">
  <button @click="model='LkBasicCE'">Основное</button>
  <button @click="model='LkDateCE'">Дата</button>
  <button @click="model='LkTicketsCE'">Билеты</button>
  <button @click="model='LkInfoCE'">Инфо</button>
</div>
</template>

<script setup lang="ts">
const model = defineModel()
model.value = 'LkBasicCE'
</script>

<style scoped>
.nav-create {
  display: flex;
  gap: 30px;
  padding: 10px 50px;
}
button{
  background-color: gray;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>