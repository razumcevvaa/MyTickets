<template>
  <div>
    <div class="control-toolbar">
      <h1>Создание мероприятия
        <div class="arrow-8"></div>
      </h1>
    </div>
    <lkNavCreatEvent v-model="compName" />
    <component :is="comp"></component>
  </div>

  {{ eventsStore.newEvent }}
</template>

<script setup lang="ts">
import LkBasicCE from '~~/components/lk/BasicCE.vue'
import LkDateCE from '~/components/lk/DateCE.vue'
import LkTicketsCE from '~/components/lk/TicketsCE.vue'
import LkInfoCE from '~/components/lk/InfoCE.vue'

const eventsStore = useEvents()
const compName = ref('LkBasicCE')
const comp = shallowRef(LkBasicCE)
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
</style>