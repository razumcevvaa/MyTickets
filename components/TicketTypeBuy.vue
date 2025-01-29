<template>
  <div class="box">
    <p>купить билет</p>
    <template v-for="(ticketType, i) of num" :key="i" class="box-sheme">
      <div class="box-item">
        <div class="ticket">
          <div>
            <h2>{{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].name }}</h2>
            <p class="desc-ticket">
              {{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].description }}
            </p>
            <p>{{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].count }}</p>
          </div>
          <div class="flex">
            <h2>{{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].price }}₽</h2>
            <div class="count-tickets">
              <Button v-if="ticketCounts[i] > 0" class="buy" @click="decreaseTicket(i)">-</Button>
              <span class="ticket-count">{{ ticketCounts[i] }}</span>
              <Button @click="increaseTicket(i)" class="buy">+</Button>
            </div>
          </div>
          <span>{{ error }}</span>
        </div>
        <!-- <h2>
          {{ eventsStore.selectedEvent?.ticket_types[i - 1].count }}
        </h2> -->
      </div>
      <!-- <p class="total-price">Сумма покупки: {{ totalPrice }} руб.</p> -->
    </template>
    <!-- <div>Количество билетов {{  }}</div> -->
    <!-- <div>К оплате {{ eventsStore.selectedEvent?.ticket_types[i - 1].count*eventsStore.selectedEvent?.ticket_types[i - 1].price  }}</div> -->
    <Button>Оплатить</Button>
  </div>
  <!-- <form class="buy-ticket-form" @submit.prevent="purchaseTicket">
            <label for="ticket-quantity">Количество билетов:</label>
            <input type="number" id="ticket-quantity" v-model.number="ticketQuantity" min="1" required />
            <button type="submit">Купить билеты</button>
          </form> -->
</template>

<script setup lang="ts">
import { useEvents } from '~/stores/events'
const eventsStore = useEvents()
const num = ref(eventsStore.selectedEvent?.ticket_types?.length ? eventsStore.selectedEvent.ticket_types?.length : 1)
const error = ref('')

const ticketCounts: Record<number, number> = reactive({})

if (eventsStore.selectedEvent?.ticket_types) {
  eventsStore.selectedEvent.ticket_types.forEach((_, i) => {
    ticketCounts[i] = 0
  })
}
const increaseTicket = (i: number) => {
  const ticketType = eventsStore.selectedEvent?.ticket_types[i]
  if (ticketType && ticketCounts[i] < ticketType.count) {
    ticketCounts[i]++
  } else {
    error.value = 'Билетов больше нет'
  }
}

const decreaseTicket = (i: number) => {
  if (ticketCounts[i] > 0) {
    ticketCounts[i]--
  }
};

// const increaseTickets = () => {
//   tickets.value++
// }

// const decreaseTickets = () => {
//   if (tickets.value > 0) tickets.value--
// }

</script>

<style scoped>
.box-item {
  margin: 20px 0;
  display: flex;
  align-items: center;
}

.ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 10px 30px;
  background-color: #505050;
  border: 1px solid rgb(167, 167, 167);
  width: 100%;
}

.desc-ticket {
  font-size: 14px;
  text-transform: capitalize;
  width: 50px;
}

.count-tickets {
  display: flex;
  gap: 10px;
  align-items: center;
}

p {
  text-transform: uppercase;
}

.buy {
  color: black;
  font-size: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}

.flex {
  align-items: center;
  gap: 50px;
}
</style>