import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = JSON.parse(event.context.fields.event)
  const id = data.id
  delete data.id
  delete data.ticket_types
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id
      },
      data: {
        ...data
      },
    })

    return { updatedEvent, ok: true }
  } catch (e) {
    console.log(e);
    return { event: null, ok: false }
  }
})