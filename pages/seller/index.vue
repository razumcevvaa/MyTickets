<template>
  <!-- <div class="div-slider border-r">
    <div class="text-slider">
      <h1 class="slider-title">Сервис продажи <br> билетов</h1>
      <strong class="slider-strong">С самой маленькой комиссией для продавцов</strong>
      <div class="box-button">
        <a class="main-button font-button" href="/">Продавать</a>
        <NuxtLink to="/afisha" class="main-button font-button color">Купить билет</NuxtLink>
        <NuxtLink to="/seller" class="main-button font-button color">seller</NuxtLink>
      </div>
    </div>
  </div> -->

  <AutoSlider>
    <div class="text-slider">
      <h1 class="slider-title">Сервис продажи <br> билетов</h1>
      <strong class="slider-strong">С самой маленькой комиссией для продавцов</strong>
      <div class="box-button">
        <a class="main-button font-button" href="/">Продавать</a>
        <NuxtLink to="/afisha" class="main-button font-button color">Купить билет</NuxtLink>
      </div>
    </div>
  </AutoSlider>
</template>

<script setup lang="ts">

</script>

<style scoped>

.text-slider {
  display: block;
  position: absolute;
  top: 100px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
}

.slider-title {
  font-size: 63px;
  color: #bab9ff;
  font-family: 'TT Norms Pro Black';
  font-weight: 200;
  font-style: normal;
  text-transform: uppercase;
}

.slider-strong {
  font-size: 40px;
  font-family: 'TT Norms Pro Medium';
  font-weight: 500;
  font-style: normal;
}

.box-button {
  display: flex;
  gap: 30px;
}

.main-button {
  padding: 10px 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  color: black;
  text-align: center;
  margin-top: 20px;
}

.color {
  background-color: #bab9ff;
}
</style>