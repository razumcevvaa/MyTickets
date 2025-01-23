<template>
  <div class="event-card border-r" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false" @click="eventsStore.showModalForEvent(event)">
    <button v-if="isHovered" class="btn-buy">Купить</button>
    <img :class="{ 'dimmed': isHovered }" :src="event.photo" alt="Event Photo" class="event-photo" />
    <h2 class="title-event">{{ event.title }}</h2>
    <div class="box-price">
      <p class="format-event">{{ event.format }}</p>
      <div class="event-price"> от {{ event.ticket_types?.sort((a,b)=>a.price-b.price)[0]?.price }} ₽</div>
    </div>
    <div class="border-top-box">
      <p class="event-date place-date-text">{{ formatDate(event.date_event)}}</p>
      <p class="place-date-text">{{ event.address }}</p>
      <p class="place-date-text">{{ event.place }}</p>
      <p class="place-date-text">{{ event.refinement }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useEvents, type Event} from '~/stores/events'
const eventsStore = useEvents()
defineProps<{event: Event}>()
const isHovered = ref(false)

function formatDate(dateStr:string) {
  const date = new Date(dateStr)
  const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  // @ts-ignore
  return new Intl.DateTimeFormat('ru-RU', options).format(date)
}
// фото через накст пейдж чтобы они делали размер авто
</script>

<style scoped>
.event-card {
  position: relative;
  cursor: pointer;
  max-width: 300px;
  padding: 15px;
}

.title-event {
  text-transform: uppercase;
  margin: 10px 0 0 0;
}

.format-event {
  font-size: 18px;
  padding: 7px 0;
}

p::first-letter {
  text-transform: uppercase;
}


.event-photo {
  width: 300px;
  border-radius: 20px;
}

.border-top-box {
  padding: 10px 0;
  border-top: 1px solid #bab9ff;
}

.event-price {
  font-size: 20px;
  background-color: #bab9ff;
  padding: 6px;
  color: black;
  font-family: 'TT Norms Pro Black';
}

.box-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.place-date-text {
  padding: 5px 0;
  opacity: 0.8;
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
</style>