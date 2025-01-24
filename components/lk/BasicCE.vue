<template>
  <div class="layout-row">
    <div class="flex">
      <div>
        <label for="text">Название<span>*</span></label>
        <input class="form-block-input" type="text" id="text" name="text" v-model="eventsStore.newEvent.title" required placeholder="Введите название мероприятия">
      </div>
      <div>
        <label for="event-type">Выберите тип мероприятия:<span>*</span></label>
        <select class="form-block-input" name="event-type" id="event-type" v-model="eventsStore.newEvent.format" required>
          <option :value="undefined">--Выберите формат мероприятия--</option>
          <option value="Концерт">Концерт</option>
          <option value="Вечеринка">Вечеринка</option>
          <option value="Фестиваль">Фестиваль</option>
          <option value="Конференция">Конференция</option>
          <option value="Турнир">Турнир</option>
        </select>
      </div>
    </div>
    <div class="flex">
      <div>
        <label for="city">Город<span>*</span></label>
        <select class="form-block-input" name="city" id="city" v-model="eventsStore.newEvent.city" required>
          <option :value="undefined">--Выберите город--</option>
          <option value="Sochi">Сочи</option>
          <option value="Moscow">Москва</option>
          <option value="Saint-Peter">Cанкт-Петербург</option>
          <option value="Krasnodar">Краснодар</option>
        </select>
      </div>
      <div>
        <label for="age">Возрастное ограничение<span>*</span></label>
        <select class="form-block-input" name="age" id="age" v-model="eventsStore.newEvent.age" required>
          <option :value="undefined">--Выберите возрастное ограничение--</option>
          <option value="0">0+</option>
          <option value="6">6+</option>
          <option value="14">14+</option>
          <option value="16">16+</option>
          <option value="18">18+</option>
          <option value="21">21+</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEvents()
</script>

<style scoped>
span {
  color:red;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.flex {
  gap: 50px;
}

.flex>div {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

label {
  font-size: 17px;
  margin-bottom: 10px;
}

.form-block-input{
  width: 500px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 30px;
}
</style>