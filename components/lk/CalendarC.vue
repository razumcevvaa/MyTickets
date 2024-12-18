<script setup lang="ts">
const eventsStore = useEvents()
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, today } from '@internationalized/date'
// import { CalendarIcon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { toDate } from 'radix-vue/date'
import { useForm } from 'vee-validate'
import { computed, h, ref } from 'vue'
import { z } from 'zod'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(z.object({
  dob: z
    .string()
    .refine(v => v, { message: 'A date of birth is required.' }),
}))

const placeholder = ref()

const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: formSchema,
})

const value = computed({
  get: () => values.dob ? parseDate(values.dob) : undefined,
  set: val => val,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <form class="space-y-8" @submit="onSubmit">
    <FormField name="dob">
      <FormItem class="flex flex-col">
        <FormLabel>Дата закрытия регистрации</FormLabel>
        <div>
        <Popover>
          <PopoverTrigger as-child>
            
              <FormControl>
                <Button variant="outline" :class="cn(
                  'w-[240px] ps-3 text-start font-normal',
                !value && 'text-muted-foreground',
              )">
                <span>{{ value ? df.format(toDate(value)) : today(getLocalTimeZone()) }}</span>
                <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
              </Button>
              <input hidden>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar class="myCalendar" v-model:placeholder="placeholder" v-model="value" calendar-label="Date of birth" initial-focus
            :min-value="new CalendarDate(1900, 1, 1)" @update:model-value="(v) => {
                if (v) {
                  setFieldValue('dob', v.toString())
                }
                else {
                  setFieldValue('dob', undefined)
                }
              }" />
          </PopoverContent>
        </Popover>
        <input type="time" id="time" name="time" required class="input-time">

        </div>
        <FormDescription>С этого момента покупатели не смогут забронировать и приобрести билет.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="dob">
      <FormItem class="flex flex-col">
        <FormLabel>Дата открытия дверей</FormLabel>
        <div>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl>
                <Button variant="outline" :class="cn(
                  'w-[240px] ps-3 text-start font-normal',
                  !value && 'text-muted-foreground',
                )">
                  <span>{{ value ? df.format(toDate(value)) : today(getLocalTimeZone()) }}</span>
                  <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                </Button>
                <input hidden>
              </FormControl>
              <input type="time" id="time" name="time" required class="input-time">
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model:placeholder="placeholder" v-model="value" calendar-label="Date of birth" initial-focus
                :min-value="new CalendarDate(1900, 1, 1)" @update:model-value="(v) => {
                  if (v) {
                    setFieldValue('dob', v.toString())
                  }
                  else {
                    setFieldValue('dob', undefined)
                  }
                }" />
            </PopoverContent>
          </Popover>
        </div>
        <FormDescription>С этого момента начинает работать сканирование билетов нашим приложением.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="dob">
      <FormItem class="flex flex-col">
        <FormLabel>Дата начала события</FormLabel>
        <div>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl v-model="eventsStore.newEvent.date">
                <Button variant="outline" :class="cn(
                  'w-[240px] ps-3 text-start font-normal',
                  !value && 'text-muted-foreground',
                )">
                  <span>{{ value ? df.format(toDate(value)) : today(getLocalTimeZone()) }}</span>
                  <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                </Button>
                <input hidden>
              </FormControl>
              <input type="time" id="time" name="time" required class="input-time">
  
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model:placeholder="placeholder" v-model="value" calendar-label="Date of birth" initial-focus
                :min-value="new CalendarDate(1900, 1, 1)" @update:model-value="(v) => {
                  if (v) {
                    setFieldValue('dob', v.toString())
                  }
                  else {
                    setFieldValue('dob', undefined)
                  }
                }" />
            </PopoverContent>
          </Popover>
        </div>
        <FormDescription>Фигурирует во всех публичных материалах как дата и время события.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="dob">
      <FormItem class="flex flex-col">
        <FormLabel>Дата окончания события</FormLabel>
        <div>
          <Popover>
            <PopoverTrigger as-child>
  
              <FormControl>
                <Button variant="outline" :class="cn(
                  'w-[240px] ps-3 text-start font-normal',
                  !value && 'text-muted-foreground',
                )">
                  <span>{{ value ? df.format(toDate(value)) : today(getLocalTimeZone()) }}</span>
                  <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                </Button>
                <input hidden>
              </FormControl>
              <input type="time" id="time" name="time" required class="input-time">
  
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model:placeholder="placeholder" v-model="value" calendar-label="Date of birth" initial-focus
                :min-value="new CalendarDate(1900, 1, 1)" @update:model-value="(v) => {
                  if (v) {
                    setFieldValue('dob', v.toString())
                  }
                  else {
                    setFieldValue('dob', undefined)
                  }
                }" />
            </PopoverContent>
          </Popover>
        </div>
        <FormDescription>Если дата и время не известны заранее, то укажите приблизительное значение.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button class="main-button color" type="submit">
      Cохранить
    </Button>
  </Form>
</template>

<style scoped>
button {
  border-radius: 20px;
  padding: 20px 25px;
  border: 1px solid white;
}

label {
  font-size: 17px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
}

.input-time {
  width: 150px;
  border-radius: 20px;
  padding: 7px 20px;
  background-color: transparent;
  border: 1px solid white;
  margin-left: 20px;
}
.flex{
  display: flex;
}
.hover\:bg-accent:hover{
  background-color: hsl(0deg 0% 22.02%);
}
td:focus{
  background-color: #bab9ff;
}
.main-button:hover {
  color: white;
}
</style>