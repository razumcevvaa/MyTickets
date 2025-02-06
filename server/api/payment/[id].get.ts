import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
    try {
      const ticket = await prisma.purchasedTicket.findUnique({
        where: {
          id: id,
        },
        include: {
          event: true
        }
      })
      return { ticket, ok: true }
    } catch (e) {
      console.error(`Произошла ошибка при поиске билетов для события с ID ${id}:`, e)
      return { ticket: null, ok: false }
    }
  } else {
    console.warn("Параметр 'id' не был предоставлен.")
    return { ticket: null, ok: false }
  }
})