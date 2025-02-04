import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
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
  }
  return { ok: true }
})