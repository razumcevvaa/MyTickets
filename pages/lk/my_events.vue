<template>
  <div>
    <div class="control-toolbar">
      <NuxtLink class="btn-c" to="/lk/my_event_create">Добавить</NuxtLink>
      <NuxtLink class="btn-c" to="/lk/my_event_create">Архив</NuxtLink>
    </div>
    <div class="sorting-control">
      <label class="text-lg" for="city">Город:</label>
      <select class="text-lg" id="city" required>
        <option value="">Все</option>
        <option value="Санкт-Петербург">Сочи</option>
        <option value="Москва">Москва</option>
        <option value="Новосибирск">Санкт-Петербург</option>
      </select>
      <label class="text-lg" for="date">Дата проведения:</label>
      <select class="text-lg" id="date" required>
        <option value="">Все</option>
      </select>
    </div>
    <h1 class="text-center text-4xl uppercase">Все мероприятия</h1>
    <div class="all-event">
      <NuxtLink  @mouseenter="hoveredEvent = event"
      @mouseleave="hoveredEvent = null" v-for="event in eventsStore.events" :event="event" :key="event.id" to="/" class="event"><img
          :src="'/' + event.photo" :class="{ 'dimmed': hoveredEvent == event }"  alt="Event Photo" class="event border-r">
          <button v-if="hoveredEvent == event" class="btn-buy">Редактировать</button>
        </NuxtLink>
      <NuxtLink to="/lk/my_event_create" class="event e-create border-r"><span class="text-7xl">+</span></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useEvents, type Event} from '~/stores/events'
const eventsStore = useEvents()
const hoveredEvent = ref(null as null|Event)

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

.all-event {
  display: flex;
  max-width: 1800px;
  margin: 0 auto;
  gap: 30px 70px;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.event {
  width: 300px;
  height: 300px;
}

.e-create {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3a3a3a;
}
.sorting-control {
  padding: 3px 50px;
  margin-bottom: 20px;
}
.btn-c {
  padding: 5px 20px;
  background-color: #bab9ff;
  font-size: 18px;
  border-radius: 20px;
  color: black;
}
.text-lg {
  padding: 3px;
}
select,
input {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
.event {
  position: relative;
}
.btn-buy {
  color: black;
  padding: 10px 30px;
  border-radius: 20px;
  position: absolute;
  top: 150px;
  left: 160px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'TT Norms Pro Black';
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-color: #bab9ff;
  z-index: 100;
  border: none;
}
span {
  background-color: #bab9ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  justify-content: center;
  display: flex;
}
span:hover {
opacity: 0.5;
}
</style>