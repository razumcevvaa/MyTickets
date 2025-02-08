// const express = require('express')
// const PDFDocument = require('pdfkit')
// const fs = require('fs')

// const app = express()
// const port = 3000

// // Маршрут для генерации PDF
// app.get('/generate-ticket', (req:any, res:any) => {
//   const doc = new PDFDocument()

//   // Настройки документа
//   doc.pipe(fs.createWriteStream('output.pdf'))

//   // Заголовок
//   doc.fontSize(24).text('Билет на мероприятие', { align: 'center' })

//   // Данные билета
//   doc.moveDown()
//   doc.fontSize(16).text(`Имя: ${req.query.name}`)
//   doc.fontSize(16).text(`Название мероприятия: ${req.query.eventName}`)
//   doc.fontSize(16).text(`Дата: ${req.query.date}`)

//   // Завершение документа
//   doc.end()

//   // Отправка файла клиенту
//   res.download('output.pdf')
// })
