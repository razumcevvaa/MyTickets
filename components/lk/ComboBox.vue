<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
// import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { ref } from 'vue'

const typeTickets = [
  { value: 'currentCategory', label: 'standart' },
  { value: 'sveltekit', label: 'vip' },
  //cюда должны передаваться названия сохраненных категорий а ниже выводиться сами категории
]

const open = ref(false)
const value = ref('')
//куда повесить v-model
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-chilвввd>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between form-block-input transparent"
      >
        {{ value
          ? typeTickets.find((typeTickets) => typeTickets.value === value)?.label
          : "Выберите схему продаж" }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Выберите схему продаж" />
        <CommandEmpty>Не найдено</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="typeTickets in typeTickets"
              :key="typeTickets.value"
              :value="typeTickets.value"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ typeTickets.label }}
              <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === typeTickets.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>

<style scoped>
button{
  border-radius: 20px;
}
.transparent {
  width: 210px;
  font-size: 14px;
}
</style>