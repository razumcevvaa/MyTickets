import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const data = await readBody(event)
  if (id && data.event_id) {
    try {
      await prisma.ticket_type.delete({
        where:{
          id:+id,
          event_id:data.event_id
        },
      })
      return {ok:true}
    } catch (e) {
      console.log(e)
      return {ok:false}
    }
  }
})