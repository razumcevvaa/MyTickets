<template>
  <div class="div-slider border-r">
    <div style="position: relative;">
      <div class="text-slider">
        <h1 class="slider-title">Сервис продажи <br> билетов</h1>
        <strong class="slider-strong">С самой маленькой комиссией для продавцов</strong>
        <div class="box-button">
          <NuxtLink class="main-button font-button" to="/registration" rel="nofollow">Продавать
          </NuxtLink>
          <NuxtLink to="/afisha" class="main-button font-button color">Купить билет</NuxtLink>
        </div>
      </div>
    </div>
    <AutoSlider>
    </AutoSlider>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.div-slider {
  width: 75%;
  display: flex;
  align-items: end;
}

.text-slider {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 800px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  z-index: 100;
}

.slider-title {
  font-size: 63px;
  color: #bab9ff;
  font-family: 'TT Norms Pro Black';
  font-weight: 200;
  line-height: 60px;
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
</style>