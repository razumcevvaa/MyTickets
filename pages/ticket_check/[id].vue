<template>
  <div v-if="!data">
    <h2>Проверьте соединение с интернетом</h2>
  </div>
  <div v-else-if="!data.ok">
    <h2>Билета нет</h2>
  </div>
  <div v-else>
    <h2>Информация о билете</h2>
    <p>ID билета: {{ data.ticket.id }}</p>
    <!-- <p>Дата покупки: {{ formatDate(ticket.date_purchase) }}</p> -->

    <h2>Информация о событии</h2>
    <p>Название события: {{ data.ticket.event.title }}</p>
    <p>Описание события: {{ data.ticket.event.description || '(нет описания)' }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useFetch<{ ticket: null | any, ok: boolean }>(`/api/payment/${route.params.id}`)

// const PDFDocument = require('pdfkit')
// const doc = new PDFDocument()
// doc.fontSize(25).text('Here is some vector graphics...', 100, 80)

// doc
//   .text('And here is some wrapped text...', 100, 450)
//   .font('Times-Roman', 13)
//   .moveDown()
//   .text('lorem', {
//     width: 412,
//     align: 'justify',
//     indent: 30,
//     columns: 2,
//     height: 300,
//     ellipsis: true
//   })

// doc.end()


</script>

<style scoped lang="scss"></style>