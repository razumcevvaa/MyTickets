<template>
  <div class="container-link">
    <div class="group">
      <div>
        <h3 class="padd-5">Основное</h3>
      </div>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/my_events' || route.path == '/lk/my_event_create' ? 'activeTab' : ''"
        to="/lk/my_events"><img src="/events.png" alt="icon">Мероприятия</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/reservation' ? 'activeTab' : ''"
        to="/lk/reservation"><img src="/reservation.png" alt="icon">Заказы</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/buyers' ? 'activeTab' : ''" to="/lk/buyers"><img
          src="/buyers.png" alt="icon">Покупатели</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/statistics' ? 'activeTab' : ''"
        to="/lk/statistics"><img src="/statis.png" alt="icon">Статистика</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/promocodes' ? 'activeTab' : ''"
        to="/lk/promocodes"><img src="/promo.png" alt="icon">Промокоды</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/balance' ? 'activeTab' : ''" to="/lk/balance">
        <img src="/balance.png" alt="icon">Баланс
      </NuxtLink>
    </div>
    <div class="group">
      <div>
        <h3 class="padd-5">Заказы</h3>
      </div>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/in_development' ? 'activeTab' : ''"
        to="/lk/in_development"><img src="/add_order.png" alt="icon">Добавить заказ</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/refund' ? 'activeTab' : ''" to="/lk/refund"><img
          src="/return.png" alt="icon">Возвраты</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/in_development' ? 'activeTab' : ''"
        to="/lk/in_development"><img src="/detailing.png" alt="icon">Детализация</NuxtLink>
    </div>
    <div class="group">
      <div>
        <h3 class="padd-5 uppercase">{{ userStore.regUser.name }}</h3>
      </div>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/in_development' ? 'activeTab' : ''"
        to="/lk/in_development"><img src="/seting.png" alt="icon">Настройки</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/in_development' ? 'activeTab' : ''"
        to="/lk/in_development"><img src="/personal.png" alt="icon">Сотрудники</NuxtLink>
      <NuxtLink class="n-link flex box-link" :class="route.path == '/lk/in_development' ? 'activeTab' : ''"
        to="/lk/in_development"><img src="/account.png" alt="icon">Мой аккаунт</NuxtLink>
      <button class="exit-b n-link flex box-link" @click="userStore.logOut" ><img
          src="/exit.png" alt="icon">Выход</button>
    </div>
    <h4>скачать приложение для сканирования билетов</h4>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const userStore = useUser()
</script>

<style scoped>
h3,
.box-link {
  border-bottom: 1px solid gray;
  padding: 6px 10px;
}

h3 {
  background-color: #3a3a3a;
  font-family: 'TT Norms Pro Black';
  font-size: 25px;
  padding-left: 20px;
}


.n-link {
  font-size: 25px;
  color: rgba(255, 255, 255, 0.70);
}

.n-link:hover {
  background-color: #3a3a3a;
}

.activeTab {
  border-left: #bab9ff 5px solid;
  transition: all 0.5s ease-in;
  color: rgba(255, 255, 255, 1);
}

img {
  width: 25px;
  height: 25px;
}

.flex {
  align-items: center;
  gap: 10px;
}

h4 {
  padding: 10px 20px;
  text-align: right;
}

.padd-5 {
  padding: 10px 20px;
}
.exit-b{
  width: 300px;
}
</style>