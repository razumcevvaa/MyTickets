<template>
  <Swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 5000,
    disableOnInteraction: false,
  }" :modules="modules" class="mySwiper">
    <SwiperSlide class="carusel-img1"></SwiperSlide>
    <SwiperSlide class="carusel-img2"></SwiperSlide>
    <SwiperSlide class="carusel-img3"></SwiperSlide>
    <SwiperSlide class="carusel-img4"></SwiperSlide>
    <SwiperSlide class="carusel-img5"></SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'

const modules = [Autoplay]
</script>

<script lang="ts">
export default {
  components: {
    Swiper,
    SwiperSlide,
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.carusel-img1 {
  background-image: url(/carusel1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}

.carusel-img2 {
  background-image: url(/carusel2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}

.carusel-img3 {
  background-image: url(/carusel3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}

.carusel-img4 {
  background-image: url(/carusel4.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}

.carusel-img5 {
  background-image: url(/carusel5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}

.carusel-img6 {
  background-image: url(/carusel6.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
}
</style>