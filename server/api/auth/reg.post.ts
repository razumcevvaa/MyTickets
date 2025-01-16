import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        login: data.login,
      },
    })
    if (existingUser) {
      return { message: "Пользователь с таким логином уже существует", ok: false };
    }
    const newUser = await prisma.user.create({
      data,
      select: {
        login: true,
        email: true,
        name: true,
        city: true,
        token: true,
        event_type: true,
        avg_visitors: true,
        events: true
      }
    })
 
    return { user: newUser, ok: true }
  } catch (e) {
    console.log(e)
    return { user: null, ok: false }
  }
})