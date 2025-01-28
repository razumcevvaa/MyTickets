<template>
  <div class="nav-create">
    <Button @click="model = 'LkBasicCE'">Основное</Button>
    <Button @click="model = 'LkDateCE'">Дата</Button>
    <Button @click="model = 'LkInfoCE'">Инфо</Button>
    <NuxtLink class="btn-price" :to="`/lk/my_event_tickets_edit?id=${eventStore.newEvent.id}`">Изменить цены</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()
model.value = 'LkBasicCE'
const eventStore = useEvents()
</script>

<style scoped>
.nav-create {
  display: flex;
  gap: 20px;
  padding: 10px 50px;
}

button {
  background-color: #5b5b5b;
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
}
.btn-price{
  background-color: #5b5b5b;
  padding: 5px 20px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.btn-price:hover{
  background-color: #bab9ff;
}
</style>