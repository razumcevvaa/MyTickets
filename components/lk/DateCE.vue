<template>
  <div class="layout-row">
    <div class="input_date">
      <form class="space-y-8">
      <LkCalendarC v-model="date1" label="Дата закрытия регистрации" description="С этого момента покупатели не смогут забронировать и приобрести билет." />
      <LkCalendarC label="Дата открытия дверей" description="С этого момента начинает работать сканирование билетов нашим приложением." />
      <LkCalendarC label="Дата начала события" description="Фигурирует во всех публичных материалах как дата и время события." />
      <LkCalendarC label="Дата окончания события" description="Если дата и время не известны заранее, то укажите приблизительное значение." />
      <Button class="main-button color" type="submit">
      Cохранить
    </Button>
    </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const date1 = ref('')
watchEffect(()=>{
  console.log(date1.value)
})
// const onSubmit = handleSubmit((values) => {
//   toast({
//     title: 'You submitted the following values:',
//     description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
//   })
// })
</script>

<style scoped>

</style>