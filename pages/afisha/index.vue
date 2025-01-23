<template>
  <h1 class="header-page">Мероприятия в <span>Сочи</span></h1>
  <div class="box-event">
    <CardEvent  v-for="event in data.events" :event="event" :key="event.id"/>
  </div>
  <EventModal/>
</template>

<script setup>
// import {useEvents} from '~/stores/events'
// const eventsStore = useEvents()
const {data} = await useFetch('/api/event')

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