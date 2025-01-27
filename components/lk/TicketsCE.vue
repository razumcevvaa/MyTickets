<template>
  <div class="layout-row flex">
    <div class="box-sheme">
      <p class="form-block-label">Схема продаж</p>
      <div>
        <template v-for="i of num" :key="i" class="box-sheme">
          <div class="box-sheme-item">
            <div>
              <label for="text-name">Название категории</label>
              <input class="form-block-input" type="text" name="text-name" id="text-name"
                v-model="eventsStore.newEvent.ticket_types[i - 1].name" placeholder="Например: Standart">
            </div>
            <div>
              <label for="text-desc">Описание для категории</label>
              <input class="form-block-input" type="text" name="text-desc" id="text-desc"
                v-model="eventsStore.newEvent.ticket_types[i - 1].description"
                placeholder="Что входит в возможности билета">
            </div>
            <div class="text-center">
              <label for="price">Цена</label>
              <input class="form-block-input mini" type="number" name="price" id="price" min="1"
                v-model="eventsStore.newEvent.ticket_types[i - 1].price">
            </div>
            <div class="text-center">
              <label for="count">Количество</label>
              <input class="form-block-input mini" type="number" name="count" id="count" min="1"
                v-model="eventsStore.newEvent.ticket_types[i - 1].count">
            </div>
            <button class="cross" @click="deleteCateg(i - 1)"></button>
          </div>
        </template>
      </div>
      <button @click="addCategory()" class="main-button transparent">Добавить</button>
      <!-- добавить категории с прошлого мероприятия кнопка -->
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEvents()
const num = ref(eventsStore.newEvent.ticket_types?.length ? eventsStore.newEvent.ticket_types?.length : 1)


const addCategory = () => {
  eventsStore.newEvent.ticket_types.push({
    name: '',
    description: '',
    count: 0,
    price: 0
  })
  num.value++
}
const deleteCateg = (index: number) => {
  if (index >= 0 && index < eventsStore.newEvent.ticket_types.length) {
    eventsStore.newEvent.ticket_types.splice(index, 1)
  }
  num.value--
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.layout-row {
  gap: 50px;
}

.box-sheme {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-block-input {
  width: 320px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 30px;
  margin: 10px 0;
}

.mini {
  width: 120px;
  margin: 10px;
  text-align: center;
}

.box-sheme-item {
  display: flex;
  align-items: center;
  max-width: 1100px;
}

.main-button {
  width: 320px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 30px;
}

.cross {
  width: 50px;
  height: 50px;
  background-image: url(public/cross.png);
  /* mask: url(public/cross.png); */
  background-size: cover;
  background-position: bottom;
  margin-top: 25px;
  cursor: pointer;
}
</style>