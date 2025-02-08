<template>
  <div v-if="!data">
    <h2>Проверьте соединение с интернетом</h2>
  </div>
  <div v-else-if="!data.ok">
    <h2>Билета нет</h2>
  </div>
  <div v-else>
    <h2>Информация о билете</h2>
    <p>ID билета: {{ data.ticket.id }}</p>
    <!-- <p>Дата покупки: {{ formatDate(ticket.date_purchase) }}</p> -->

    <h2>Информация о событии</h2>
    <p>Название события: {{ data.ticket.event.title }}</p>
    <p>Описание события: {{ data.ticket.event.description || '(нет описания)' }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useFetch<{ ticket: null | any, ok: boolean }>(`/api/payment/${route.params.id}`)

</script>

<style scoped lang="scss"></style>