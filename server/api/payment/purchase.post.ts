import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    for (let el of data.ticketTypes) {
      await prisma.ticket_type.update({
        data: {
          count_purchased: {
            increment: el.count_purchased
          },
        },
        where: {
          id: el.id
        }
      })
      const purchasedTickets = []
      for (let i = 0; i < el.count_purchased; i++) {
        const purchasedTicket = await prisma.purchasedTicket.create({
          data: {
            ticket_type_id: el.id,
            event_id: el.event_id,
          },
        })
        purchasedTickets.push(purchasedTicket)
      // asink функция без await передаст на формирование билетов 
      }
    }
    return { ok: true }
  } catch (e) {
    console.log(e)
    return { purchasedTicket: null, ok: false }
  }
})