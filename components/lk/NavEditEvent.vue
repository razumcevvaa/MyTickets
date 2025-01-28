<template>
  <div class="nav-create">
    <Button @click="model = 'LkBasicCE'">Основное</Button>
    <Button @click="model = 'LkDateCE'">Дата</Button>
    <NuxtLink :to="`/lk/my_event_tickets_edit?id=${eventStore.newEvent.id}`">lll</NuxtLink>
    <Button @click="model = 'LkInfoCE'">Инфо</Button>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()
model.value = 'LkBasicCE'

const eventStore = useEvents()
// const {data} = await useFetch('/api/event/by_user',{
//   method:'POST',
//   body: {user_id:userStore.user?.id}
// })

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
</style>