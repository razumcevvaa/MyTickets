<template>
  <div class="box">
    <p>купить билет</p>
    <template v-for="i of num" :key="i" class="box-sheme">
      <div class="box-item">
        <div class="ticket">
          <div>
            <h2>{{ eventsStore.selectedEvent?.ticket_types[i - 1].name }}</h2>
            <p class="desc-ticket">
              {{ eventsStore.selectedEvent?.ticket_types[i - 1].description }}
            </p>
          </div>
          <div class="flex">
            <h2>{{ eventsStore.selectedEvent?.ticket_types[i - 1].price }}₽</h2>
            <Button class="buy">+</Button>
          </div>
        </div>
        <!-- <h2>
          {{ eventsStore.selectedEvent?.ticket_types[i - 1].count }}
        </h2> -->
      </div>
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
.desc-ticket{
  font-size: 14px;
  text-transform: capitalize;
  width: 50px;
}
p {
  text-transform: uppercase;
}
.buy{
  color: black;
  font-size: 20px;
}
.flex{
  align-items: center;
  gap: 50px;
}
</style>