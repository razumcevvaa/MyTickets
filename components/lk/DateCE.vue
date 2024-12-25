<template>
  <div class="layout-row">
    <div class="input_date">
      <form class="space-y-8" @submit="onSubmit">
        <LkCalendarC v-model="eventsStore.newEvent.dateOpen" label="Дата открытия дверей"
          description="С этого момента начинает работать сканирование билетов нашим приложением." />
        <LkCalendarC v-model="eventsStore.newEvent.dateClose" label="Дата закрытия регистрации"
          description="С этого момента покупатели не смогут забронировать и приобрести билет." />
        <LkCalendarC v-model="eventsStore.newEvent.dateEvent" label="Дата начала события"
          description="Фигурирует во всех публичных материалах как дата и время события." />
        <LkCalendarC v-model="eventsStore.newEvent.dateEnd" label="Дата окончания события"
          description="Если дата и время не известны заранее, то укажите приблизительное значение." />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
const eventsStore = useEvents()
watchEffect(() => {
  // console.log(date1.value)
})

const formSchema = toTypedSchema(z.object({
  dob: z
    .string()
    .refine(v => v, { message: 'Дата обязательна' }),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})

</script>

<style scoped>

</style>