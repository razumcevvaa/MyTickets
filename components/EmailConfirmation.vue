<template>
  <div class="container-m border-r">
    <h1 class="header-page">Подтверждение</h1>
    <div>
      <PinInput id="pin-input" v-model="value" placeholder="○" @complete="handleComplete">
        <PinInputGroup class="gap-1">
          <template v-for="(id, index) in 6" :key="id">
            <PinInputInput style="color: black;" class="rounded-md border" :index="index" />
            <template v-if="index !== 5">
              <PinInputSeparator />
            </template>
          </template>
        </PinInputGroup>
      </PinInput>
    </div>
    <p class="error-text">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['next'])
const value = ref<string[]>([])
const error = ref('')

const handleComplete = (e: string[]) => {
  if (value.value.join('')=='666999') {
    emit('next')
  } else {
    error.value = 'Неправильно введен код'
  }
}

</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.container-m {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
}

.confirm {
  background-color: transparent;
  border-radius: 10px;
  height: 40px;
  width: 40px;
  margin: 10px;
  color: white;
  font-size: 20px;
  text-align: center;
  border: 1px solid #bab9ff;
}

.main-button {
  border: none;
  text-transform: uppercase;
  font-family: 'TT Norms Pro Medium';
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0 20px 0;
}

.form-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>