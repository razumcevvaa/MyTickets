<template>
  <div class="layout-row flex">
    <div class="box-sheme">
      <div class="flex gap-5">
        <p class="form-block-label">Схема продаж</p>
        <button @click="create = !create" class="underline">Создать</button>
      </div>
      <div class="input_date">
        <LkComboBox/>
      </div>
    </div>
    <LkSalesScheme v-if="create" />
  </div>
  <!-- {{ categories }} -->
</template>

<script setup lang="ts">
// const categories: Ref<Category[]> = ref([])
const create = ref(false)

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