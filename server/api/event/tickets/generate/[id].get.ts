import prisma from "~/lib/prisma"
import PDFDocument from "pdfkit"
import fs from "fs"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
    try {
      const ticket = await prisma.purchasedTicket.findUnique({
        where:{
          id
        },
        include:{
          event:true
        }
      })


      const doc = new PDFDocument()
    
      // Настройки документа
      doc.pipe(fs.createWriteStream(ticket?.id+'.pdf'))
      doc.font('font/TTNormsPro-Black.ttf')
    
      // Заголовок
      doc.fontSize(24).text('Билет на мероприятие', { align: 'center' })
    
      // Данные билета
      doc.moveDown()
      doc.fontSize(16).text(`id: ${ticket?.id}`)
      doc.fontSize(16).text(`Название мероприятия: ${ticket?.event.title}`)
      // Завершение документа
      doc.end()

      return {ticket, ok:true}
    } catch (e) {
      console.log(e)
      return {ticket:null, ok:false}
    }
  }
})
