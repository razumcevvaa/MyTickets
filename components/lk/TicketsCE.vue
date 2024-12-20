<template>
  <div class="layout-row flex">
    <div>
      <div class="flex gap-5">
        <p class="form-block-label">Схема продаж</p>
        <button @click="create=!create" class="underline">Создать</button>
      </div>
      <div class="input_date">
        <LkComboBox/>
      </div>
    </div>
    <LkSalesScheme v-if="create"/>
  </div>
</template>

<script setup lang="ts">
const create = ref(false)
</script>

<style scoped>
.layout-row {
  gap: 50px;
}
</style>