<template>
  <div>
    <div class="control-toolbar">
      <NuxtLink class="btn-c" to="/lk/my_event_create">Добавить</NuxtLink>
      <NuxtLink class="btn-c" to="/lk/archive">Архив</NuxtLink>
    </div>
    <!-- <div class="sorting-control">
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
    </div> -->
    <h1 class="text-center text-4xl uppercase">Все мероприятия</h1>
    <div class="all-event">
      <NuxtLink @mouseenter="hoveredEvent = event" @mouseleave="hoveredEvent = null" v-for="event in data?.events"
        :event="event" :key="event.id" :to="`/lk/my_event_edit?id=${event.id}`" class="event"><img :src="'/' + event.photo"
        :class="{ 'dimmed': hoveredEvent == event }" alt="Event Photo" class="event border-r">
        <button v-if="hoveredEvent == event" class="btn-buy">Редактировать</button>
        <div class="flex-i">
          <p>{{ event.title }}</p>
          <p>{{ formatDate(event.date_event) }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/lk/my_event_create" class="event e-create border-r"><span class="text-7xl">+</span></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
const {data} = await useFetch('/api/event/by_user',{
  method:'POST',
  body: {user_id:userStore.user?.id}
})
const hoveredEvent = ref(null as any)

definePageMeta({
  layout: 'lk',
  middleware: 'auth'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})

function formatDate(dateStr:string) {
  const date = new Date(dateStr)
  const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  // @ts-ignore
  return new Intl.DateTimeFormat('ru-RU', options).format(date)
}
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

/* .sorting-control {
  padding: 3px 50px;
  margin-bottom: 20px;
} */

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

.flex-i {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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