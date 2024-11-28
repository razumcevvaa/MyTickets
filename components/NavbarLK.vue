<template>
  <div class="container-link">
    <div class="group">
      <div>
        <h3>Основное</h3>
      </div>
      <NuxtLink class="n-link flex box-link" to="/lk/myEvents"><img src="/buyers.png" alt="icon">Мероприятия</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Заказы</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Покупатели</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Статистика</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Промокоды</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Баланс</NuxtLink>
    </div>
    <div class="group">
      <div>
        <h3>Заказы</h3>
      </div>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Добавить заказ</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Возвраты</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Детализация</NuxtLink>
    </div>
    <div class="group">
      <div>
        <h3>Название аккаунта</h3>
      </div>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Настройки</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Сотрудники</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Мой аккаунт</NuxtLink>
      <NuxtLink class="n-link flex box-link" to="/"><img src="/buyers.png" alt="icon">Выход</NuxtLink>
    </div>
    <h4>скачать приложение для сканирования билетов</h4>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
h3,
.box-link {
  border-bottom: 1px solid gray;
  padding: 5px 10px;
}

h3 {
  background-color: #3a3a3a;
  font-family: 'TT Norms Pro Black';
  font-size: 25px;
  padding-left: 20px;
}

.n-link {
  /* padding: 10px 140px 10px 15px; */
  font-size: 25px;
}
img {
  width: 25px;
  height: 25px;
}
.flex {
  align-items: center;
  gap: 10px;
}
</style>