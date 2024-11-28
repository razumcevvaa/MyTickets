<template>
  <div class="container-m">
    <div class="left-box">

    </div>
    <div class="right-box border-r">
      <h1 class="logo">passtickets</h1>
      <h2 class="uppercase">Вход в личный кабинет</h2>
      <form>
        <div class="flex">
          <input class="form-block-input" type="text" name="login" placeholder="Введите логин" required>
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
      <p class="underline underline-offset-4">Не помню пароль</p>
      <p class="text-center absolute">Нет аккаунта? <br> Можно <NuxtLink to="/registration"
          class="underline underline-offset-4">зарегистрироваться здесь</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const showPassword = ref(false)
const password = ref('')
definePageMeta({
  layout: 'lk'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk'
  }
})
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