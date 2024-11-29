<template>
  <div class="control-toolbar">
    <div>
      <NuxtLink to="/lk/my_event_create">Добавить</NuxtLink>
      <NuxtLink to="/lk/my_event_create">Архив</NuxtLink>
    </div>
    <div class="sorting-control">
      <label for="city">Город:</label>
      <select id="city" required>
        <option value="">Все</option>
        <option value="Санкт-Петербург">Сочи</option>
        <option value="Москва">Москва</option>
        <option value="Новосибирск">Санкт-Петербург</option>
      </select>
      <label for="date">Дата проведения:</label>
      <select id="city" required>
        <option value="">Все</option>
      </select>
     <LkCalendarC/>
    </div>
  </div>
  <div class="all-event">

  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'lk'
})
useHead({
  bodyAttrs: {
    class: 'padd-lk-2'
  }
})
</script>

<style scoped>
select,input {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
</style>