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
import { cn } from '@/lib/utils'
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, today } from '@internationalized/date'
// import { CalendarIcon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { toDate } from 'radix-vue/date'
import { useForm } from 'vee-validate'
import { computed, h, ref } from 'vue'
import { z } from 'zod'
defineProps(['label', 'description'])
const df = new DateFormatter('ru-RU', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(z.object({
  dob: z
    .string()
    .refine(v => v, { message: 'Дата обязательна' }),
}))

const placeholder = ref()

const { setFieldValue, values } = useForm({
  validationSchema: formSchema,
})

const value = computed({
  get: () => values.dob ? parseDate(values.dob) : undefined,
  set: val => val,
})

const time = ref('')
const model = defineModel()

watchEffect(() => {
  if (value.value && time.value) {
     model.value = `${value.value}T${time.value}`
  }
  console.log(model.value)
})

</script>

<template>

  <FormField name="dob">
    <FormItem class="flex flex-col">
      <FormLabel>{{ label }}</FormLabel>
      <div>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button variant="outline" :class="cn(
                'w-[240px] ps-3 text-start font-normal',
                !value && 'text-muted-foreground',
              )">
                <span>{{ value ? df.format(toDate(value)) : 'Выберите дату' }}</span>
                <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
              </Button>
              <input hidden>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar class="myCalendar" v-model:placeholder="placeholder" v-model="value"
             initial-focus :min-value="new CalendarDate(2024, 1, 1)"
              @update:model-value="(v) => {
                if (v) {
                  setFieldValue('dob', v.toString())
                }
                else {
                  setFieldValue('dob', undefined)
                }
              }" />
          </PopoverContent>
        </Popover>
        <input type="time" id="time" name="time" required class="input-time" v-model="time">
      </div>
      <FormDescription>{{ description }}</FormDescription>
    </FormItem>
  </FormField>

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

.flex {
  display: flex;
}

.hover\:bg-accent:hover {
  background-color: hsl(0deg 0% 22.02%);
}

td:focus {
  background-color: #bab9ff;
}

.main-button:hover {
  color: white;
}
input{
  cursor: pointer;
}
</style>