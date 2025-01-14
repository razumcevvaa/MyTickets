<template>
  <div class="box-creating">
  <p class="uppercase">Создать категорию билетов</p>
  <input class="form-block-input" type="text" placeholder="Название" required>
<div class="box-creating-item">
  <form>
    <label for="text-name">Название категории</label>
    <input class="form-block-input" type="text" name="text-name" id="text-name" v-model="currentCategory.name" placeholder="Например: Standart">
    <label for="text-desc">Описание для категории</label>
    <input class="form-block-input" type="text" name="text-desc" id="text-desc" v-model="currentCategory.description" placeholder="Что входит в возможности билета">
    <label for="price">Цена</label>
    <input class="form-block-input" type="number" name="price" id="price" v-model="eventsStore.newEvent.price">
  </form>
  <button @click="addCategory()" class="main-button transparent">Добавить</button>
  </div>
  <div class="result-category">
    <ul v-if="categories.length > 0">
        <li v-for="(category, index) in categories" :key="index">
          {{ category.name }} 
          {{ category.description }}
          <button class="remove" type="button" @click="removeCategory(index)">Удалить</button>
        </li>
      </ul>
  </div>
    <div>
      <input class="main-button" type="submit" value="Создать" @click.prevent="submitForm">
      <input class="main-button" type="reset" value="Очистить" @click.prevent="clearForm">
    </div>
</div>
</template>

<script setup lang="ts">
const eventsStore = useEvent()
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
//логика для передачи данных и закрытие окна
  console.log('Отправленные данные:', categories.value)
}

const clearForm = () => {
  categories.value = []
  clearCurrentCategory()
}

</script>

<style scoped>
.form-block-input{
  width: 320px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 30px;
}
.main-button {
  margin: 10px;
  cursor: pointer;
  text-transform: uppercase;
}

.box-creating{
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  gap:  10px;
}
.box-creating-item {
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 20px;
  align-items: center;
  gap: 5px;
}
form {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.result-category {
  display: flex;
  align-items: flex-start;
}
.remove {
  text-decoration: underline;
}
</style>