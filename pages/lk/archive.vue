<template>
  <div>
    <h1 class="text-center text-4xl uppercase">Прошедшие мероприятия</h1>
       <div class="all-event">
         <NuxtLink @mouseenter="hoveredEvent = event" @mouseleave="hoveredEvent = null" v-for="event in pastEvents"
           :event="event" :key="event.id" :to="`/lk/my_event_edit?id=${event.id}`" class="event"><img :src="'/' + event.photo"
           :class="{ 'dimmed': hoveredEvent == event }" alt="Event Photo" class="event border-r">
           <button v-if="hoveredEvent == event" class="btn-buy">Редактировать</button>
         </NuxtLink>
         <p v-if="pastEvents.length === 0">Нет прошедших мероприятий.</p>
       </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
const {data} = await useFetch('/api/event/past', {
  method:'POST',
  body:{user_id:userStore.user?.id}
})
const hoveredEvent = ref(null as any)

const pastEvents = computed(() => {
  if (!data.value || !data.value.events) return []
  return data.value.events.filter((event: any) => {
    const endDate = new Date(event.date_end)
    const currentDate = new Date()
    return endDate < currentDate
  })
})

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
  position: relative;
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