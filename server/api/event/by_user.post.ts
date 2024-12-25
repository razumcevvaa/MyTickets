import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  try {
    // const now = new Date()
    const events = await prisma.event.findMany({
      select:{
        photo: true,
        title:true,
        // city:true,
        format:true,
        price:true,
        date_event: true,
        date_close: true,
        date_open: true,
        date_end: true,
        location: true,
        age: true,
        description: true,
      },
      where:{
        photo: data.photo,
        title: data.title,
        // city: data.city,
        format: data.format,
        price: data.string,
        date_event: data.dataEvent,
        date_close: data.dateClose,
        date_open: data.dateOpen,
        date_end: data.dateEnd,
        location: data.location,
        age: data.age,
        description?: data.description,
        // date_end: {
        //   gt:now
        // },
        user_id:data.id
      }
    })
    return {events, ok:true}
  } catch (e) {
    console.log(e)
    return {events:[], ok:false}
  }
})