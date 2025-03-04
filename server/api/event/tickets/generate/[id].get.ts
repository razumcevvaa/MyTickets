import prisma from "~/lib/prisma"
import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
    try {
      const ticket = await prisma.purchasedTicket.findUnique({
        where: {
          id
        },
        include: {
          event: true
        }
      })

      const doc = new PDFDocument()
      const filePath = path.join(process.cwd(), 'public', 'tickets', `${ticket?.id}.pdf`)
      const fileStream = fs.createWriteStream(filePath)
      doc.pipe(fileStream)

      // Настройки документа
      doc.pipe(fs.createWriteStream(ticket?.id + '.pdf'))
      doc.font('font/TTNormsPro-Black.ttf')

      // Заголовок
      doc.fontSize(24).text('Билет на мероприятие', { align: 'center' })

      // Данные билета
      doc.moveDown()
      doc.fontSize(16).text(`id: ${ticket?.id}`)
      doc.fontSize(16).text(`Название мероприятия: ${ticket?.event.title}`)
      // Завершение документа
      doc.end()

      await new Promise((resolve) => fileStream.on('finish', resolve))

      return { ticket, ok: true
      }
    } catch (e) {
      console.log(e)
      return { ticket: null, ok: false }
    }
  }
})
