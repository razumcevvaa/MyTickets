<template>
  <div>
    <div class="control-toolbar">
      <h1>Редактирование мероприятия
        <div class="arrow-8"></div>
      </h1>
    </div>
    <LkTicketsCE/>
    <p class="error">{{ error }}</p>
    <button class="main-button color" @click="updateEvent" type="submit">
      Сохранить изменения
    </button>
    <NuxtLink class="cancel" to="/lk/my_events">Отменить</NuxtLink>
  </div>
  <!-- {{ eventsStore.newEvent }} -->
  <!-- при перезгрузке заполнить все поля -->
</template>

<script setup lang="ts">
const route = useRoute()
const eventsStore = useEvents()

const error = ref('')

definePageMeta({
  layout: 'lk',
  middleware: 'auth'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})

const updateEvent = async () => {
  const event = { ...eventsStore.newEvent }
  event.ticket_types = event.ticket_types.filter(el => el.price)
  const data = await $fetch('/api/event/tickets/'+route.query.id, {
    method: 'PUT',
    body: {tt:event.ticket_types}
  })
  navigateTo('/lk/my_events')
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