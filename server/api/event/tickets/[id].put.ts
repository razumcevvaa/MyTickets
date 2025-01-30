import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const data = await readBody(event)
  if (id) {
    try {
      for (let el of data.tt) {
        if (el.id) {
          await prisma.ticket_type.update({
            data: {
              name:el.name,
              price:el.price,
              description:el.description,
              count:el.count
            },
            where:{
              id:el.id
            },
          })
        } else {
          await prisma.ticket_type.create({
            data: {
              ...el,
              event_id:+id
            }
          })
        }
      }
      return {ok:true}
    } catch (e) {
        console.log(e)
        return {ok:false}
    }
  }
})