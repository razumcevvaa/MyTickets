import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
      try {
        const ticket_types = await prisma.ticket_type.findMany({
          where:{
            event_id:+id
          },
        })
        return {ticket_types, ok:true}
      } catch (e) {
        console.log(e)
        return {ticket_types:[], ok:false}
    }
}
    return {ticket_types:[], ok:false}
})