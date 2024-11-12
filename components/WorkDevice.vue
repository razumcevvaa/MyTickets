<template>
<div class="box-device">
  <div class="device-item border-r">
    <img src="/mobile-device.png" alt="mobile">
  </div>
  <div class="device-item border-r">
    <img style="width: 140px;" src="/ipad-device.png" alt="ipad">
  </div>
  <div class="device-item border-r">
    <img src="/lamp-device.png" alt="lamp">
  </div>
  <div class="device-item border-r">
    <img src="/comp-device.png" alt="comp">
  </div>
</div>

<div class="device-text">
  <div class="text-contant">
    <h2>Работай с любого устройства</h2>
    <h3>в любое время вместе с нами</h3>
  </div>
   <NuxtLink class="start-buttton font-button" to="/">Начать</NuxtLink>
   <!-- cтраница с регистрацией -->
</div>
</template>

<style scoped lang="scss">
.box-device {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
.device-item {
  background-color:rgb(31, 31, 31);
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 220px;
  }
}
.text-contant{
  h2{
font-size: 44px;
margin-bottom: 10px;
  }
  h3 {
    font-size: 30px;
  }
}
.device-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.start-buttton {
  background-color: #d0d0d0;
  color: black;
  padding: 10px 40px;
  border-radius: 20px;
  margin-right: 7%;
  font-size: 18px;
}
</style>