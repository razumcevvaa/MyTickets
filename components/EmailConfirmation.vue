<template>
  <div class="container-m border-r">
    <h1 class="header-page">Подтверждение</h1>
    <!-- <form class="form-email" @submit.prevent="nextStep">
          <div class="form-block">
            <label class="form-block-label" for="email"></label>
            <div>
              <input class="confirm"
          v-for="n in 6"
          :key="n"
          type="number"
          maxlength="1"
          min="0"
          max="9"
        />
            </div>
            <input type="submit" value="Подтвердить" class="main-button color">
          </div>
        </form> -->



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
  </div>
</template>

<script setup lang="ts">
// import {
//   PinInput,
//   PinInputGroup,
//   PinInputInput,
//   PinInputSeparator,
// } from '@/components/ui/pin-input'
// import { ref } from 'vue'

const value = ref<string[]>([])
const handleComplete = (e: string[]) => alert(e.join(''))
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
  padding: 20px;
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