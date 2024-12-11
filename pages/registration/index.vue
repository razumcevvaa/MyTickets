
<template>
  <section class="registration">
    <StepOneRegistration v-if="step===1" @next="handleNextStep"/>
    <EmailConfirmation v-else-if="step === 2" @next="handleNextStep"/>
    <StepTwoRegistration v-else-if="step === 3" @next="handleNextStep"/>
    <h3 v-show="error">{{ error }}</h3>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)
const error = ref('')
const handleNextStep = () => {
  if (step.value < 3) {
    step.value++
  }
}

</script>

<style scoped>
.registration {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  justify-content: center;
}
</style>