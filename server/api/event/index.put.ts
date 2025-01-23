import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const id = data.id
  delete data.id
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id: data.id
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