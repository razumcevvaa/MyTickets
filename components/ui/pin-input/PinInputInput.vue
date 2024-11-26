<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('tailwind.config.jsrelative tailwind.config.jstext-center focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-ring focus:tailwind.config.jsrelative focus:tailwind.config.jsz-10 tailwind.config.jsflex tailwind.config.jsh-10 tailwind.config.jsw-10 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsborder-y tailwind.config.jsborder-r tailwind.config.jsborder-input tailwind.config.jstext-sm tailwind.config.jstransition-all first:tailwind.config.jsrounded-l-md first:tailwind.config.jsborder-l last:tailwind.config.jsrounded-r-md', props.class)" />
</template>
