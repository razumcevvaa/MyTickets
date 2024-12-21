import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  try {
    const user = await prisma.user.findUnique({
      select:{
        id:true,
        email:true,
        name: true,
        login: true,
        city: true,
        token:true,
        event_type: true,
        avg_visitors: true,
      },
      where:{
        login: data.login,
        pass: data.pass
      }
    })
    return {user, ok:true}
  } catch (e) {
    console.log(e)
    return {user:null, ok:false}
  }
})