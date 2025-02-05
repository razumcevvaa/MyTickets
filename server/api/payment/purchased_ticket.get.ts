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
      if (!purchasedTicket) {
        console.log(`Билет с ID ${id} не найден.`)
        return { ticket: null, ok: false }
      }
      return { purchasedTicket, ok: true }
    } catch (e) {
      console.log(e)
      return { purchasedTicket: [], ok: false }
    }
  }
})