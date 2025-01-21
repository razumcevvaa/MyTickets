import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = JSON.parse(event.context.fields.event)
  data.photo = event.context.files[0].newFileName
  data.date_close = data.date_close+':00Z'
  data.date_end = data.date_end+':00Z'
  data.date_event =data.date_event +':00Z'
  data.date_open =data.date_open+':00Z'
  const ticket_types = data.ticket_types
  delete data.ticket_types
  try {
    const event = await prisma.event.create({
      data: {
        ...data,
        ticket_types: {
          createMany:{
            data: ticket_types
          }
        }
      }
    })
    return { event, ok: true }
  } catch (e) {
    console.log(e)
    return { event: null, ok: false }
  }
})