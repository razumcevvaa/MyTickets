<template>
  <div class="to-customers">
    <ul class="to-customers__list">
      <li class="to-customers__item"><a @click="toggleMenu('menu')" id="to-customers__link" class="to-customers__link"
          :class="isMenuOpen === 'menu' ? 'hide' : ''" href="#">Продавцам</a>
        <div class="dropdown-list-wrapper">
          <Transition>
            <ul v-if="isMenuOpen === 'menu'" class="dropdown-list">
              <li class="dropdown-list__item">
                <NuxtLink class="dropdown-list__link" to="/registration" rel="nofollow">Регистрация
                </NuxtLink>
              </li>
              <li class="dropdown-list__item">
                <NuxtLink class="dropdown-list__link" to="/" target="_blank" rel="nofollow">Личный кабинет</NuxtLink>
              </li>
              <li class="dropdown-list__item header__info">
                <hr>
                <p class="header__support">
                  <span>Поддержка</span>
                  <a href="#">info@passtickets.ru</a>
                </p>
              </li>
            </ul>
          </Transition>
        </div>
      </li>
      <li class="to-customers__item"><a @click="toggleMenu('menu2')" id="to-customers__link" class="to-customers__link"
          :class="isMenuOpen === 'menu2' ? 'hide' : ''" href="#">Покупателям</a>
        <div class="dropdown-list-wrapper">
          <Transition>
            <ul v-if="isMenuOpen === 'menu2'" class="dropdown-list">
              <li class="dropdown-list__item">
                <NuxtLink class="dropdown-list__link" to="/afisha" target="_blank" rel="nofollow">Афиша</NuxtLink>
              </li>
              <li class="dropdown-list__item">
                <NuxtLink class="dropdown-list__link" target="_blank" to="/my-tickets" rel="nofollow" >Мои билеты</NuxtLink>
              </li>
              <li class="dropdown-list__item">
                <NuxtLink class="dropdown-list__link" target="_blank" to="/refund" rel="nofollow">Возврат билетов</NuxtLink>
              </li>
              <li class="dropdown-list__item header__info">
                <hr>
                <p class="header__support">
                  <span>Поддержка</span>
                  <a href="#">support@passtickets.ru</a>
                </p>
              </li>
            </ul>
          </Transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const isMenuOpen = ref(null)

const route = useRoute()

const toggleMenu = (menu) => {
  if (isMenuOpen.value === menu) {
    isMenuOpen.value = null
  } else {
    isMenuOpen.value = menu
  }
}

const closeMenuOnClickOutside = (event) => {
  if (!event.target.closest('.to-customers')) {
    isMenuOpen.value = null
  }
}

watch(()=>route.path,(newPath)=>{
  isMenuOpen.value = null
})

onMounted(() => {
  document.addEventListener('click', closeMenuOnClickOutside)
})

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.to-customers__list {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 50px;
}

.to-customers__item {
  text-transform: uppercase;
  position: relative;
}

.to-customers__link {
  font-family: 'TT Norms Pro Medium';
  font-weight: 500;
  font-style: normal;
  color: #fff;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  position: relative;
}

.to-customers__link:after {
  content: "";
  position: absolute;
  right: -19%;
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

.to-customers__link.hide:after {
  transition: opacity 0.3s;
  opacity: 0;
}

.to-customers__link:hover {
  color: #bab9ff;
  text-decoration: none;
}

.to-customers__link:hover:after {
  border-color: #bab9ff;
}


.dropdown-list {
  list-style-type: none;
  z-index: 9988;
  background-color: #fff;
  -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  position: absolute;

}

.header__support span,
.header__support a {
  color: black;
}

.header__support {
  margin-top: 20px;
}

.dropdown-list {
  padding: 30px 20px 15px 20px;
}


.dropdown-list__link {
  padding: 5px;
  color: #000;
  text-transform: none;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
}

.dropdown-list__link:hover {
  color: #bab9ff;
  text-decoration: underline;
  border-color: #bab9ff;
}

.dropdown-list__item {
  font-size: 14px;
  color: black;
  margin-bottom: 15px;
}

.to-customers__item a {
  display: block;
}

.to-customers__link {
  color: #bab9ff;
}


.dropdown-list-wrapper {
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  top: 10px;
  -webkit-box-shadow: none;
  box-shadow: none;
  z-index: 100;
}


.dropdown-list__link:hover,
.dropdown-list__link {
  border-bottom: 0;
}

.dropdown-list {
  border-radius: 20px;
}

.dropdown-list__link {
  color: black;
  font-size: 16px;
}
</style>