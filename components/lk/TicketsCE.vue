<template>
  <div class="layout-row flex">
    <div class="box-sheme">
      <div class="flex gap-5 flex flex-col">
        <p class="form-block-label">Схема продаж</p>
        <template v-for="i of num" :key="i">
          <label for="text-name">Название категории</label>
          <input class="form-block-input" type="text" name="text-name" id="text-name" v-model="currentCategory[i-1].name"
          placeholder="Например: Standart">
          <label for="text-desc">Описание для категории</label>
          <input class="form-block-input" type="text" name="text-desc" id="text-desc"
          v-model="currentCategory[i-1].description" placeholder="Что входит в возможности билета">
          <label for="price">Цена</label>
          <input class="form-block-input" type="number" name="price" id="price" v-model="currentCategory[i-1].price">
          <label for="count">Количество</label>
          <input class="form-block-input" type="number" name="count" id="count" v-model="currentCategory[i-1].count">
        </template>
      </div>
      <button @click="addCategory()" class="main-button transparent">Добавить</button>
      <!-- добавить категории с прошлого мероприятия кнопка -->
    </div>
  </div>
  <!-- {{ categories }} -->
</template>

<script setup lang="ts">
const eventsStore = useEvents()
interface Category {
  name: string,
  description: string,
  count: number,
  price: number
}
const currentCategory = ref<Category[]>([{
  name: '',
  description: '',
  count: 0,
  price: 0
}])
const num = ref(1)

const addCategory = () => {
  currentCategory.value.push({
    name: '',
    description: '',
    count: 0,
    price: 0
  })
  num.value++
}
</script>

<style scoped>
.layout-row {
  gap: 50px;
}

.box-sheme {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>