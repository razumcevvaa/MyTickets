import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
      try {
        const event = await prisma.event.findUnique({
          where:{
            id:+id
          },
          include:{
            ticket_types:true
          }
        })
        return {event, ok:true}
      } catch (e) {
        console.log(e)
        return {event:null, ok:false}
    }
}
    return {event:null, ok:false}
})