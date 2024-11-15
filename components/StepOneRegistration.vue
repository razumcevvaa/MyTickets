
<template>
    <h1 class="header-page">Регистрация</h1>
    <h2>Шаг 1</h2>
    <form class="form-email" @submit.prevent="nextStep">
      <div class="form-block">
        <label class="form-block-label" for="email">Email:</label>
        <input v-model="email" class="form-block-input" type="email" name="email" id="email"
          placeholder="Введите ваш email" autofocus required>
        <input type="submit" value="Далее" class="main-button color">
      </div>
    </form>
</template>

<script setup lang="ts">
import { ref, defineEmits} from 'vue'

const emit = defineEmits(['next'])
const email = ref('')

const nextStep = () => {
  if (email.value !== '') {
    emit('next', { data: { username: email.value } });
  }
}
</script>

<style scoped>

.form-block {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.main-button {
  border: none;
  text-transform: uppercase;
  font-family: 'TT Norms Pro Medium';
  font-size: 16px;
  cursor: pointer;
}
</style>