<template>
  <div class="box-top border-r">
    <h2 class="uppercase">Топ 1 сегодня</h2>
    <div class="top-event">
      <div class="top1"><img class="afisha-top" src="/top-event.jpg" alt="top"></div>
      <div class="top2"><img class="afisha-top" src="/top-event.jpg" alt="top"></div>
    </div>
    <NuxtLink class="text-decor" to="/afisha">Смотреть все</NuxtLink>
  </div>
</template>

<script setup lang="ts">
// переделать фото в ссылку на евент конкретный
</script>

<style scoped>
.box-top {
  width: 23.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
}

/* поменять размер картинки */
/* написать логику для смены картинки */
.afisha-top {
  width: 260px;
  margin: 10px 0;
  border-radius: 10px;
}
</style>