<template>
  <div v-for="event in events" :key="event.id" class="event-card border-r" @mouseenter="event.isHovered = true"
    @mouseleave="event.isHovered = false" @click="showModalForEvent(event)">
    <button v-if="event.isHovered" class="btn-buy">Купить</button>
    <img :class="{ 'dimmed': event.isHovered }" :src="event.photo" alt="Event Photo" class="event-photo" />
    <h2 class="title-event">{{ event.title }}</h2>
    <div class="box-price">
      <p class="format-event">{{ event.format }}</p>
      <div class="event-price"> от {{ event.price }} ₽</div>
    </div>
    <div class="border-top-box">
      <!-- <p class="event-date place-date-text">{{ formattedDate }}</p> -->
      <!-- ! добавить время через запятую -->
      <p class="event-date place-date-text">{{ event.date }}</p>
      <p class="place-date-text">{{ event.location }}</p>
    </div>
  </div>

  <teleport to="body">
    <div v-if="selectedEvent && showModal" class="modal-mask" @click.self="showModal = false">
      <div class="modal-content">
        <div class="modal-close" @click="showModal = false"><span></span></div>
        <h1>{{ selectedEvent.title }}</h1>
        <div class="event-info">
          <!-- <p class="event-date place-date-text">{{ formatDate(selectedEvent.date) }}</p> -->
          <span class="event-info__name-block">
            <p class="place-date-text-modal">{{ selectedEvent.location }}</p>
            <span class="age">{{ selectedEvent.age }}+</span>
          </span>
        </div>
        <div class="center_area">
          <img :src="selectedEvent.photo" alt="Event Photo" class="event-photo" />
          <div class="area-descrip-and-btn">
            <p class="description-text">
              {{ selectedEvent.description }}
            </p>
            <a href="/" class="buy-tickets">Купить от {{ selectedEvent.price }}₽</a>
          </div>
          <!-- <form class="buy-ticket-form" @submit.prevent="purchaseTicket">
            <label for="ticket-quantity">Количество билетов:</label>
            <input type="number" id="ticket-quantity" v-model.number="ticketQuantity" min="1" required />
            <button type="submit">Купить билеты</button>
          </form> -->
        </div>
        <div class="bottom_area">
          <h2>{{ selectedEvent.location }}</h2>
          <!-- <div class="adress"></div>
          <div class="for-map"></div> -->
        </div>
      </div>
    </div>
  </teleport>

</template>
<script setup lang="ts">
import { watch } from 'vue';
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const selectedEvent = ref(null as null | Event)

interface Event {
  id: number;
  photo: string;
  title: string;
  format: string;
  price: string;
  date: Date;
  location: string;
  isHovered?: boolean;
  age?: number,
  description?: string,
}

watch(()=>showModal.value, ()=>{
  if (showModal.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// const event = ref({
//   id: 1,
//   photo: 'top-event.jpg',
//   title: 'Code80',
//   format: 'вечеринка',
//   price: '400',
//   date: '16 декабря 17:00',
//   location: 'nebar',
// }
// )

const events = ref<Event[]>([
  {
    id: 1,
    photo: 'top-event.jpg',
    title: 'Code80',
    format: 'вечеринка',
    price: '400',
    date: new Date('2023-12-16T17:00:00'),
    location: 'nebar',
    age: 16,
    description: 'Официальная страница https://t.me/traphouserussia',
  },
  {
    id: 2,
    photo: 'top-event.jpg',
    title: 'Hackathon',
    format: 'конференция',
    price: '800',
    date: new Date('2023-12-16T17:00:00'),
    location: 'IT Park',
    age: 16,
  },
  {
    id: 2,
    photo: 'top-event.jpg',
    title: 'Hackathon',
    format: 'конференция',
    price: '800',
    date: new Date('2023-12-16T17:00:00'),
    location: 'IT Park',
    age: 16,
  },
  {
    id: 3,
    photo: 'top-event.jpg',
    title: 'Hackathon',
    format: 'конференция',
    price: '800',
    date: new Date('2023-12-16T17:00:00'),
    location: 'IT Park',
    age: 16,
  },
  {
    id: 4,
    photo: 'top-event.jpg',
    title: 'Hackathon',
    format: 'конференция',
    price: '800',
    date: new Date('2023-12-16T17:00:00'),
    location: 'IT Park',
    age: 16,
  },
])

function showModalForEvent(event: Event) {
  selectedEvent.value = event
  showModal.value = true
}

// function formatDate(date: Date) {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
//   return new Intl.DateTimeFormat('ru-RU', options).format(date)
// }


// function formatDate(date) {
//   const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//   return new Intl.DateTimeFormat('ru-RU', options).format(date)
// }
// const formattedDate = formatDate(events.date)

// import axios from 'axios';

// export default {
//   name: 'EventCard',
//   setup() {
//     const event = ref({}); // Хранит информацию о событии
//     const apiURL = 'https://example.com/api/events/1'; // Замените на ваш URL API

// const formattedDate = computed(() => {
//   if (event.value.date) {
//     return new Date(event.value.date).toLocaleDateString('ru-RU', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   }
//   return ''
// })

//     const fetchEventData = async () => {
//       try {
//         const response = await axios.get(apiURL);
//         event.value = response.data; // Присваиваем данные события
//       } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//       }
//     };

//     onMounted(() => {
//       fetchEventData(); // Получаем данные при монтировании компонента
//     });

//     return {
//       event,
//       formattedDate,
//     };
//   },
// };
// фото через накст пейдж чтобы они делали размер авто
</script>
<style scoped>
.event-card {
  position: relative;
  cursor: pointer;
  max-width: 300px;
  padding: 15px;
  /* -webkit-box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.58);
-moz-box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.58);
box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.58); */

  /* -webkit-box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.39);
-moz-box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.39);
box-shadow: 0px 0px 21px -1px rgba(186, 185, 255, 0.39); */
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
  background-color: black;
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


/* button {
  display: none;
  position: absolute;
  top: 150px;
  left: 60px;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #bab9ff;
} */

.dimmed {
  filter: brightness(50%);
}

.modal-mask {
  padding: 100px;
  position: absolute;
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
  width: 600px;
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
  text-transform: uppercase
}

.area-descrip-and-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}
.modal-close{
  position: absolute;
    right: 35px;
    top: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    overflow: hidden;
}

.modal-close::after,.modal-close::before{
  position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 25px;
    height: 3px;
    background: #bab9ff;
}
.modal-close:before {transform: rotate(45deg);}
.modal-close:after {transform: rotate(-45deg);}
</style>