import { connect } from "http2"
import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const user_id = data.user_id
  delete data.user_id
  try {
    const event = await prisma.event.create({
      data: {
        ...data,
        user: {
          connect: { id: user_id }
        }
      }
    })
    return { event, ok: true }
  } catch (e) {
    console.log(e)
    return { events: null, ok: false }
  }
})