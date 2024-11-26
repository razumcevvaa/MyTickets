
<template>
  <div class="box-step border-r">
  <h1 class="header-page">Регистрация</h1>
    <h2 class="text-center">Шаг 1</h2>
    <form class="form-email" method="post" @submit.prevent="nextStep">
      <div class="form-block">
        <label class="form-block-label" for="email">Email:</label>
        <input v-model="email" class="form-block-input" type="email" name="email" id="email"
          placeholder="Введите ваш email" autofocus required>
        <input type="submit" value="Далее" class="main-button color">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits} from 'vue'

const emit = defineEmits(['next'])
const email = ref('')

const nextStep = (e:Event) => {
  e.preventDefault()
  if (email.value !== '') {
    emit('next', { data: { username: email.value } });
  }
}
</script>

<style scoped>
.box-step {
  padding: 20px;
  background-color: rgb(31, 31, 31);
}
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
.text-center {
  text-align: center;
}
</style>