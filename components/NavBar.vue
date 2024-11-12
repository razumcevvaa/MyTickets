<template>
  <nav class="border-r">
    <div class="menu">
      <NuxtLink class="logo" to="/">
        <!-- <div class="for-desktop"><img src="/logo.png" alt="tickets"></div> -->
        <!-- <div class="for-mobile"><img src="" alt="tickets"></div> -->
        PASSTICKETS
      </NuxtLink>
      <DropDown/>
    </div>
    <div class="menu-login">
      <NuxtLink class="hover-text-d" to="/">Возможности</NuxtLink>
      <NuxtLink class="hover-text-d" to="/">Стоимость</NuxtLink>
      <NuxtLink class="hover-text-d" to="/">Помощь</NuxtLink>
      <NuxtLink class="hover-text-d" to="/">Обучение</NuxtLink>
      <NuxtLink href="/"><img class="login-nav-mini" src="/login.png" alt="login"></NuxtLink>
      <!-- cтраница с регистрацией -->
      <!--переключатель -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import DropDown from './DropDown.vue';


</script>

<style scoped>
.login-nav-mini {
  width: 30px;
}

nav {
  background-color: #3a3a3a;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
}

.hover-text-d:hover {
  text-decoration: underline #bab9ff;
}

/* background-color: #d0d0d0; */

.menu-login,
.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  margin-right: 30px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: 0.5s ease-in-out;
  margin-top: 15px;
  border-radius: 20px;
}

.dropdown-content a {
  color: black;
  padding: 15px 13px;
  display: block;
  transition: 0.5s ease-in-out;
  text-decoration: #bab9ff;
}

.dropdown-content a:hover {
  background-color: #ddd;
  text-decoration: underline #bab9ff;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>