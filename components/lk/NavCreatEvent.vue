<template>
<div class="nav-create">
  <Button @click="model='LkBasicCE'">Основное</Button>
  <Button @click="model='LkDateCE'">Дата</Button>
  <Button @click="model='LkTicketsCE'">Билеты</Button>
  <Button @click="model='LkInfoCE'">Инфо</Button>
</div>
</template>

<script setup lang="ts">
const model = defineModel()
model.value = 'LkBasicCE'
</script>

<style scoped>
.nav-create {
  display: flex;
  gap: 20px;
  padding: 10px 50px;
}
button{
  background-color: #5b5b5b;
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
}
</style>