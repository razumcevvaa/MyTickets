
<template>
  <div class="container border-r">
    <h1 class="header-page">Регистрация</h1>
    <h2>Шаг 2</h2>
    <!-- @submit.prevent="nextStep" -->
    <form class="form-email">
      <div class="form-left">
        <div class="form-block">
          <label class="form-block-label" for="name">Название аккаунта<span>*</span></label>
          <input v-model.trim="name" class="form-block-input" type="text" name="name"
            placeholder="Название компании или бренда" autocomplete="off" autofocus required>
        </div>
        <div class="form-block">
          <label class="form-block-label" for="login">Логин<span>*</span></label>
          <input v-model.trim="login" class="form-block-input" type="text" name="login"
            placeholder="Придумайте себе логин" required>
        </div>
        <div class="form-block">
          <label class="form-block-label" for="password">Пароль<span>*</span></label>
          <div style="position: relative">
            <input v-model.trim="password" :type="showPassword ? 'text' : 'password'" class="form-block-input psw-inp"
              name="password" placeholder="Придумайте себе пароль" required autocomplete="off">
            <span class="fa-fw" @click="showPassword = !showPassword"><img
                :src="showPassword ? '/open-eye.png' : '/close-eye.png'" alt="">
            </span>
          </div>
        </div>
      </div>
      <div class="form-right">
        <div class="form-block">
          <label class="form-block-label" for="city">Город<span>*</span></label>
          <input v-model.trim="city" type="text" name="city" placeholder="Где проводите мероприятия"
            class="form-block-input">
        </div>
        <div class="form-block">
          <label class="form-block-label" for="event_type">Вы организовываете<span>*</span></label>
          <input v-model.trim="eventType" type="text" name="event_type" placeholder="Формат мероприятий"
            class="form-block-input" required>
        </div>
        <div class="form-block">
          <label class="form-block-label" for="avg_visitors">Количество посетителей:</label>
          <input v-model.number="avgVisitors" class="form-block-input" type="number" name="avg_visitors"
            placeholder="Ваших мероприятий">
        </div>
      </div>
    </form>
    <input type="submit" value="Войти в личный кабинет" class="main-button color">
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, computed } from 'vue'

const showPassword = ref(false)

const emit = defineEmits(['next'])
const name = ref('')
const login = ref('')
const password = ref('')
const city = ref('')
const eventType = ref('')
const avgVisitors = ref()


interface FormData {
  data: {
    name: string,
    login: string,
    password: string,
    city: string,
    eventType: string,
    avgVisitors?: number,
  },
}
const state = reactive({
  showPassword: false as boolean,
  name: '' as string,
  login: '' as string,
  password: undefined as string | undefined,
  city: '' as string,
  eventType: '' as string,
  avgVisitors: undefined as number | undefined,
  errors: {} as Record<string, string>,
})



// defineEmits(['next'])
// const nextStep = () => {
//   if (email.value !== '') {
//     emit('next', { step: 3, data: { email: email.value } });
//   }
// }
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.form-email {
  display: flex;
  align-items: center;
  gap: 50px;
}

span {
  color: red;
}

.form-block {
  padding: 20px;
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
  margin: 30px 0 20px 0;
}
</style>