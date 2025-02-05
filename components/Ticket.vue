<template>
  <div v-for="ticket in data.purchasedTickets" :key="ticket.id">
    <h2>Информация о билете</h2>
    <p>ID билета: {{ ticket.id }}</p>
    <!-- <p>Дата покупки: {{ formatDate(ticket.date_purchase) }}</p> -->

    <h2>Информация о событии</h2>
    <p>Название события: {{ ticket.event.name }}</p>
    <p>Описание события: {{ ticket.event.description || '(нет описания)' }}</p>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEvent()
const route = useRoute();
const purchasedTickets = ref([])

  const { data } = await useFetch(`/api/payment/purchased_ticket/${route.params.id}`, {
    method: 'GET',
    body: { purchasedTickets }
  })

</script>

<style scoped lang="scss"></style>