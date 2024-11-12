<template>

<swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>



  <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
</swiper-container>

</template>

<script setup lang="ts">

import { register } from 'swiper/element/bundle'
register()


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // import '/style.css';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules'
  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Autoplay, Pagination, Navigation],
  //     };
  //   },
  // };


</script>

<style scoped>
swiper-slide{
    background-color: aliceblue;
    color: black;
    height: 300px;
    margin: 10px;
}
</style>