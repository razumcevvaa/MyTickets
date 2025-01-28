<template>
  <teleport to="body">
    <div v-if="eventsStore.selectedEvent && eventsStore.showModal" class="modal-mask"
      @click.self="eventsStore.showModal = false">
      <div class="modal-content">
        <div class="modal-close" @click="eventsStore.showModal = false"><span></span></div>
        <h1>{{ eventsStore.selectedEvent.title }}</h1>
        <div class="event-info">
          <p class="event-date place-date-text">{{ formatDate(eventsStore.selectedEvent.date_event) }}</p>
          <span class="event-info__name-block">
            <p class="place-date-text-modal">{{ eventsStore.selectedEvent.place }}</p>
            <span class="age">{{ eventsStore.selectedEvent.age }}+</span>
          </span>
        </div>
        <div class="center_area">
          <img :src="eventsStore.selectedEvent.photo" alt="Event Photo" class="event-photo" />
          <div class="area-descrip-and-btn">
            <p class="description-text">
              {{ eventsStore.selectedEvent.description }}
            </p>
            <Button @click="showTicketTypes = true" class="buy-tickets">Купить от {{
              eventsStore.selectedEvent.ticket_types?.sort((a, b) => a.price - b.price)[0]?.price }}₽</Button>
          </div>
        </div>
        <div class="bottom_area">
          <h2>{{ eventsStore.selectedEvent.address }}</h2>
          <h2>{{ eventsStore.selectedEvent.refinement }}</h2>
          <!-- <div class="for-map"></div> -->
        </div>
      </div>
      <div v-if="showTicketTypes" class="modal-mask" @click.self="showTicketTypes = false">
        <div class="modal-content-tickets">
          <div class="modal-close" @click="showTicketTypes = false"><span></span></div>
          <TicketTypeBuy/>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useEvents } from '~/stores/events'

const showTicketTypes = ref(false)
const eventsStore = useEvents()
watch(() => eventsStore.showModal, () => {
  if (eventsStore.showModal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  // @ts-ignore
  return new Intl.DateTimeFormat('ru-RU', options).format(date)
}

</script>

<style scoped>
.modal-mask {
  padding: 100px;
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  transition: opacity .3s ease;
  overflow-y: scroll;
  overflow-x: auto;
}

.modal-content {
  min-width: 700px;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #3a3a3a;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
}
.modal-content-tickets{
  min-width: 850px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #3a3a3a;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
}

.modal-content h1 {
  text-transform: uppercase;
}

.event-info__name-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px 0 0 0;
}

.place-date-text-modal {
  color: rgb(165, 165, 165);
}

.modal-content button {
  float: right;
  margin-top: 15px;
}

.center_area {
  padding: 30px 0;
  display: flex;
  gap: 50px;
  align-items: start;
}

.buy-tickets {
  background-color: #bab9ff;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: 'TT Norms Pro Black';
  text-transform: uppercase;
  color: black;
}

.area-descrip-and-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}

.modal-close {
  position: absolute;
  right: 35px;
  top: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  overflow: hidden;
}

.modal-close::after,
.modal-close::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  width: 25px;
  height: 3px;
  background: #bab9ff;
}

.event-photo {
  width: 300px;
  border-radius: 20px;
}

.modal-close:before {
  transform: rotate(45deg);
}

.modal-close:after {
  transform: rotate(-45deg);
}

.description-text {
  text-align: justify;
}
</style>