<template>
  <div class="layout-row">
    <div class="flex">
      <div>
        <label for="text">Название @@@@@@</label>
        <input class="form-block-input" type="text" name="text" v-model="eventsStore.newEvent.description" required>
      </div>
      <div>
        <label for="event-type">Выберите тип мероприятия:</label>
        <select class="form-block-input" name="event-type" id="event-type" required>
          <option value="">--Выберите тип мероприятия--</option>
          <option value="concert">Концерт</option>
          <option value="party">Вечеринка</option>
          <option value="festival">Фестиваль</option>
          <option value="conference">Конференция</option>
          <option value="tournament">Турнир</option>
        </select>
      </div>
    </div>
    <div class="flex">
      <div>
        <label for="city">Город</label>
        <select class="form-block-input" name="city" id="city" required>
          <option value="">--Выберите--</option>
          <option value="Sochi">Сочи</option>
          <option value="Moscow">Москва</option>
          <option value="Saint-Peter">Cанкт-Петербург</option>
          <option value="Krasnodar">Краснодар</option>
        </select>
      </div>
      <div>
        <label for="age">Возрастное ограничение</label>
        <select class="form-block-input" name="age" id="age" required>
          <option value="">--Выберите--</option>
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
.layout-row {}

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
  font-size: 18px;
  margin-bottom: 10px;
}
</style>