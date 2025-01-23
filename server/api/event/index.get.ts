import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  try {
    const now = new Date()
    const events = await prisma.event.findMany({
      where:{
        date_end: {
          gt:now
        },
      },
      include:{
        ticket_types:true
      }
    })
    return {events, ok:true}
  } catch (e) {
    console.log(e)
    return {events:[], ok:false}
  }
})