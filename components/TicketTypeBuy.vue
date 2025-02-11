<template>
  <div class="box">
    <p>купить билет</p>
    <div>
      <template v-for="(ticketType, i) of num" :key="i" class="box-sheme">
        <div class="box-item">
          <div class="ticket">
            <div>
              <h2>{{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].name }}</h2>
              <p class="desc-ticket">
                {{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].description }}
              </p>
              <p v-if="ticketTotalCounts[i] <= 10"
                class="countLast">
                Последние {{ ticketTotalCounts[i] }} билетов</p>
            </div>
            <div class="flex">
              <h2>{{ eventsStore.selectedEvent?.ticket_types[ticketType - 1].price }}₽</h2>
              <div class="count-tickets">
                <Button v-if="ticketCounts[i] > 0" class="buy" @click="decreaseTicket(i)">-</Button>
                <span class="ticket-count">{{ ticketCounts[i] }}</span>
                <Button @click="increaseTicket(i)" class="buy">+</Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="position-bottom" v-if="Payment">
      <div>
        <p>Количество билетов: <span class="price">{{ totalCount }} шт.</span></p>
        <p class="total-price">К оплате: <span class="price">{{ totalPrice }} ₽</span></p>
      </div>
      <Button class="btn-c" @click="payForTickets">Оплатить</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEvents } from '~/stores/events'
const eventsStore = useEvents()
const num = ref(eventsStore.selectedEvent?.ticket_types?.length ? eventsStore.selectedEvent.ticket_types?.length : 1)
const ticketCounts = ref([] as number[])
const ticketTotalCounts = ref([] as number[])
const totalCount = ref()
const Payment = ref(false)

if (eventsStore.selectedEvent?.ticket_types) {
  eventsStore.selectedEvent.ticket_types.forEach((_, i) => {
    ticketCounts.value[i] = 0
    // @ts-ignore
    ticketTotalCounts.value[i] = eventsStore.selectedEvent.ticket_types[i].count - eventsStore.selectedEvent.ticket_types[i].count_purchased
  })
}

const increaseTicket = (i: number) => {
  const ticketType = eventsStore.selectedEvent?.ticket_types[i]
  if (ticketType && ticketCounts.value[i] < ticketTotalCounts.value[i]) {
    ticketCounts.value[i]++
    totalCount.value = ticketCounts.value.reduce(
      (sum, count) => sum + count, 0
    )
    Payment.value = true
  }
  return
}

const totalPrice = computed(() => {
  let sum = 0
  for (let i=0;i<ticketCounts.value.length; i++) {
    const ticketType = eventsStore.selectedEvent!.ticket_types![i]
    sum += ticketType.price * ticketCounts.value[i]
  }
  return sum
})

const decreaseTicket = (i: number) => {
  if (ticketCounts.value[i] > 0) {
    ticketCounts.value[i]--
    totalCount.value = ticketCounts.value.reduce(
      (sum, count) => sum + count, 0
    )
    if (totalCount.value == 0) Payment.value = false
  }
  return
}

const payForTickets = async () => {
  if (eventsStore.selectedEvent && eventsStore.selectedEvent.ticket_types) {

    const ticketTypes = [...eventsStore.selectedEvent.ticket_types]
    for (let i=0;i<ticketCounts.value.length; i++) {
      ticketTypes[i].count_purchased = ticketCounts.value[i]
    }
    
    ticketTypes.map(el=>el.count_purchased)

    const data = await $fetch('/api/payment/purchase', {
      method: 'POST',
      body: { ticketTypes }
    })
    
    if (data.ok) {
      for (let i=0;i<ticketCounts.value.length; i++) {
        if (eventsStore.selectedEvent) {
          eventsStore.selectedEvent.ticket_types[i].count = eventsStore.selectedEvent.ticket_types[i].count - ticketCounts.value[i]
        }
        navigateTo(`/ticket_check/${data.purchasedTickets[0].id}`)
      }  
    }
  }
}

</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

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
  justify-content: right;
  width: 100px;
}

.countLast {
  font-size: 12px;
  color: rgb(255, 56, 56);
  font-family: 'TT Norms Pro Black';
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

.position-bottom {
  position: absolute;
  bottom: 50px;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: space-between;
  align-self: center;
}

.price {
  font-family: 'TT Norms Pro Black';
}

.btn-c {
  text-transform: uppercase;
}
</style>