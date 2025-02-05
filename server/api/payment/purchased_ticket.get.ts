import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
    try {
      const purchasedTicket = await prisma.purchasedTicket.findMany({
        where: {
          event_id: +id,
        },
        include: {
          event: true
        }
      })
      if (purchasedTicket.length === 0) {
        console.log(`Билет с ID ${id} не найден.`)
        return { ticket: null, ok: false }
      }
      return { purchasedTicket, ok: true }
    } catch (e) {
      console.error(`Произошла ошибка при поиске билетов для события с ID ${id}:`, e)
      return { tickets: [], ok: false }
    }
  } else {
    console.warn("Параметр 'id' не был предоставлен.")
    return { tickets: [], ok: false }
  }
})