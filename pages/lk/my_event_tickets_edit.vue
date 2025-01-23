<template>
  <div>
    <div class="control-toolbar">
      <h1>Редактирование мероприятия
        <div class="arrow-8"></div>
      </h1>
    </div>
    <lkNavCreatEvent v-model="compName" />
    <component :is="comp"></component>
    <p class="error">{{ error }}</p>
    <button class="main-button color" @click="updateEvent" type="submit">
      Сохранить изменения
    </button>
  </div>
  <!-- {{ eventsStore.newEvent }} -->
    <!-- при перезгрузке заполнить все поля -->
</template>

<script setup lang="ts">
import LkBasicCE from '~~/components/lk/BasicCE.vue'
import LkDateCE from '~/components/lk/DateCE.vue'
import LkTicketsCE from '~/components/lk/TicketsCE.vue'
import LkInfoCE from '~/components/lk/InfoCE.vue'

const route = useRoute()


const eventsStore = useEvents()
const data = await $fetch('/api/event/tickets/'+route.query.id)
eventsStore.newEvent.ticket_types = data?.ticket_types

const error = ref('')
const userStore = useUser()
const compName = ref('LkTicketsCE')
const comp = shallowRef(LkTicketsCE)
const compObj = {
  LkBasicCE, LkDateCE, LkTicketsCE, LkInfoCE
} as Record<string, any>

definePageMeta({
  layout: 'lk',
  middleware: 'auth'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})
watchEffect(() => {
  comp.value = compObj[compName.value]
})


const updateEvent = async () => {
  const event = { ...eventsStore.newEvent }
  event.ticket_types = event.ticket_types.filter(el => el.price)
  const data = await $fetch('/api/event/tickets/'+route.query.id, {
    method: 'PUT',
    body: {tt:event.ticket_types}
  })
}

</script>

<style scoped>
h1 {
  font-size: 20px;
  text-transform: uppercase;
  padding: 3.5px;
  position: relative;
}

.arrow-8 {
  position: absolute;
  top: -3px;
  right: -50px;
  width: 30px;
  height: 30px;
}

.arrow-8:before,
.arrow-8:after {
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border-left: 3px solid #bab9ff;
  border-bottom: 3px solid #bab9ff;
  animation: arrow-8 3s linear infinite;
}

.arrow-8:after {
  animation: arrow-8 3s linear infinite -1.5s;
}

@keyframes arrow-8 {
  0% {
    opacity: 0;
    transform: translate(0, -10px) rotate(-45deg);
  }

  10%,
  90% {
    opacity: 0;
  }

  50% {
    opacity: 1;
    transform: translate(0, 0) rotate(-45deg);
  }

  100% {
    opacity: 0;
    transform: translate(0, 10px) rotate(-45deg);
  }
}

.main-button {
  margin-left: 50px;
}
.error {
  color: red;
  padding-left: 50px;
  font-size: 17px;
}
</style>