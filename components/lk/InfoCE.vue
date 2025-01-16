<template>
  <div class="layout-row">
    <div class="left">
      <label for="site">Официальная страница</label>
      <input v-model="eventsStore.newEvent.site" class="form-block-input" id="site" type="text" placeholder="http://" autocomplete="off" maxlength="255">
      <label for="adress">Адрес места проведения<span>*</span></label>
      <input v-model="eventsStore.newEvent.address" class="form-block-input" type="text" id="adress" placeholder="Улица, дом, строение (без названия города)" required>
      <label for="description">Описание мероприятия</label>
      <textarea v-model="eventsStore.newEvent.description" class="form-block-input" name="description" id="description" maxlength="1000"></textarea>
    </div>
    <div class="right">
      <label for="place">Место проведения мероприятия <span>*</span></label>
      <input v-model="eventsStore.newEvent.place" class="form-block-input"  type="text" id="place" placeholder="Место проведения мероприятия">
      <label for="refinement">Дополнительные уточнения</label>
      <input v-model="eventsStore.newEvent.refinement" class="form-block-input"  type="text" id="refinement" placeholder="Вход, метро, зал, этаж и т.п.">
      <label for="poster">Афиша<span>*</span></label>
      <p>Рекомендуем вертикальное изображение не менее 640x1290</p>
      <!-- <input v-model="eventsStore.newEvent.photo" class="form-block-input poster"  type="file" id="poster" accept="image/png, image/jpeg"> -->
      <!-- сделать вывод картинки загруженной -->
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEvents()
</script>

<style scoped>
span {
  color: red;
}

.layout-row {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
textarea{
  min-height: 200px;
}

.right,
.left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-block-input{
  width: 500px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 30px;
}
label{
  font-size: 17px;
}
.poster {
  background-color: aqua;
}
</style>