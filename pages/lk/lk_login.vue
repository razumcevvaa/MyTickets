<template>
  <div class="container-m">
    <div class="left-box">

    </div>
    <div class="right-box border-r">
      <h1 class="logo">passtickets</h1>
      <h2 class="uppercase">Вход в личный кабинет</h2>
      <form @submit.prevent="logIn">
        <div class="flex">
          <input class="form-block-input" type="text" name="login" v-model="login" placeholder="Введите логин" required>
          <div style="position: relative">
            <input v-model.trim="password" :type="showPassword ? 'text' : 'password'" class="form-block-input psw-inp"
              name="password" placeholder="Введите пароль" required autocomplete="off">
            <span class="fa-fw" @click="showPassword = !showPassword"><img
                :src="showPassword ? '/open-eye.png' : '/close-eye.png'" alt="eye">
            </span>
          </div>
        </div>
        <input type="submit" value="Войти" class="main-button color">
      </form>
      <p class="text-red-400" v-if="error">{{ error }}</p>
      <p class="underline underline-offset-4">Не помню пароль</p>
      <p class="text-center absolute">Нет аккаунта? <br> Можно <NuxtLink to="/registration"
          class="underline underline-offset-4">зарегистрироваться здесь</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import md5 from 'md5'
const showPassword = ref(false)
const userStore= useUser()
const password = ref('')
const login = ref('')
const error = ref('')


definePageMeta({
  layout: 'login'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk'
  }
})

onMounted(()=>{
  if (userStore.user) {
    navigateTo('/lk')
  }
})

const logIn = async () =>{
  if (login.value && password.value){
    error.value=await userStore.logIn(login.value, md5(password.value))
    if (!error.value) {
      navigateTo('/lk')
    }
  } else{
    error.value = 'Не введен логин или пароль'
  }
}
</script>

<style scoped>
.container-m {
  margin: 0;
  padding: 0;
  display: flex;
  height: 95vh;
}

.logo {
  position: absolute;
  top: 100px;
  font-size: 30px;
}

h2 {
  font-size: 26px;
  margin-bottom: 10px;
}

.flex {
  flex-direction: column;
  gap: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-box {
  width: 50%;
}

.right-box {
  padding: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.absolute {
  bottom: 100px;
}

.main-button {
  width: 150px;
  text-transform: uppercase;
  font-family: 'TT Norms Pro Medium';
  cursor: pointer;
  width: 350px;
  padding:15px 20px;
  border-radius: 25px;
}
input{
  width: 350px;
  padding:15px 20px;
  border-radius: 25px;
}
.fa-fw{
  top: 16.5px;
  right: 25px;
}
</style>