<template>
<p>Создать категорию билетов</p>
<div class="box-creating">
  <input class="form-block-input" type="text" placeholder="Название">
  <form class="box-creating-item">
    <label for="text-name">Название категории</label>
    <input class="form-block-input" type="text" name="text-name" id="text-name" v-model="currentCategory.name" placeholder="Например: Standart">
    <label for="text-desc">Описание для категории</label>
    <input class="form-block-input" type="text" name="text-desc" id="text-desc" v-model="currentCategory.description" placeholder="Что входит в возможности билета">
  </form>
  <button @click="addCategory()" class="create-new-type">hbhb </button>
  <ul v-if="categories.length > 0">
      <li v-for="(category, index) in categories" :key="index">
        {{ category.name }} 
        {{ category.description }}
        <button type="button" @click="removeCategory(index)">Удалить</button>
      </li>
    </ul>

  <input type="submit" value="Создать" @click.prevent="submitForm">
    <input type="reset" value="Очистить" @click.prevent="clearForm">
<!-- {{ categories }} -->
</div>
</template>

<script setup lang="ts">
interface Category {
  name: string,
  description: string
}
const currentCategory = reactive({
  name: '',
  description: ''
})
const categories: Ref<Category[]> = ref([])

const addCategory = () => {
  if (currentCategory.name && currentCategory.description) {
    categories.value.push({ ...currentCategory })
    clearCurrentCategory()
  }
}
const removeCategory = (index: number) => {
  categories.value.splice(index, 1)
}
const clearCurrentCategory = () => {
  currentCategory.name = ''
  currentCategory.description = ''
}
const submitForm = () => {
  console.log('Отправленные данные:', categories.value)
}

const clearForm = () => {
  categories.value = []
  clearCurrentCategory()
}

</script>

<style scoped>
.create-new-type {
  background-color: blueviolet;
  width: 200px;
  height: 200px;
}
</style>