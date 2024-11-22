
<template>
  <section class="registration">
    <StepOneRegistration v-if="step===1" @next="handleNextStep"/>
    <!-- <EmailConfirmation v-else-if="step === 2"/> -->
    <StepTwoRegistration v-else-if="step === 2"/>
    <h3 v-show="error">{{ error }}</h3>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)
const error = ref('')
const handleNextStep = () => {
  step.value = 2
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