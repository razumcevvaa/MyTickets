<template>
  <nav class="border-r">
    <div class="menu">
      <NuxtLink class="logo" to="/">
        <!-- <div class="for-desktop"><img src="/logo.png" alt="tickets"></div> -->
        <!-- <div class="for-mobile"><img src="" alt="tickets"></div> -->
        PASSTICKETS
      </NuxtLink>
      <p class="logo-desc">Билеты на мероприятия <br> в вашем городе от организаторов</p>
    </div>
    <div class="right-menu">
      <div class="city">
        <span class="city_selector" id="city_selector">{{ city }}</span>
      </div>
      <div class="search">
        <form method="get" action="/" rel="nofollow">
          <div>
            <label>
              <input type="text" name="q" value="" autocomplete="off" id="search">
            </label>
            <button type="submit">Поиск</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const city = ref('сочи')

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
  position: relative;
}


.menu-login,
.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  margin-right: 30px;
}

.logo-desc {
  font-size: 17px;
  color: rgb(165, 165, 165);
}

#city_selector {
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
}

.search {
  z-index: 1;
  position: relative;
  cursor: pointer;
}

.search div input {
  background: rgb(186,185,255, 0.2);;
  /* opacity: 0.2; */
  border: 1px solid transparent;
  border-radius: 20px;
  width: 200px;
  height: 40px;
  line-height: 64px;
  color: white;
  font-size: 18px;
  padding: 0 25px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.2s ease-out;
  -moz-transition: width 0.2s ease-out;
  -ms-transition: width 0.2s ease-out;
  -o-transition: width 0.2s ease-out;
  transition: width 0.2s ease-out;
  outline: none;
}

.search div button {
  color: transparent;
  text-shadow: none;
  border: none;
  background: url(/search.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  padding: 0;
  outline: none;
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
}

.right-menu {
  display: flex;
  align-items: center;
  gap: 50px;
}

.city_selector:after {
  content: "";
  position: absolute;
  right: -20px;
  width: 10px;
  height: 10px;
  border: solid #bab9ff;
  border-width: 2px 0 0 2px;
  display: inline-block;
  -webkit-transform: rotate(-136deg);
  transform: rotate(-136deg);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 1;
}
</style>