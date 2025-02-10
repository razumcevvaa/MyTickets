// import prisma from "~/lib/prisma"

// export default defineEventHandler(async (event) => {
//   const id = event.context.params?.id
//   if (id) {
//     try {
//       const ticket = await prisma.purchasedTicket.findUnique({
//         where: {
//           id: id,
//         },
//         include: {
//           event: true
//         }
//       })
//       return { ticket, ok: true }
//     } catch (e) {
//       console.error(`Произошла ошибка при поиске билетов для события с ID ${id}:`, e)
//       return { ticket: null, ok: false }
//     }
//   } else {
//     console.warn("Параметр 'id' не был предоставлен.")
//     return { ticket: null, ok: false }
//   }
// })
import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  // Извлекаем ID из параметров маршрута
  const id = event.context.params?.id;
  console.log('Параметры маршрута:', event.context.params)
  // Логируем ID для отладки
  console.log('ID из параметров:', id);
  console.log('Тип ID:', typeof id);

  // Проверяем, передан ли ID
  if (!id) {
    console.warn("Параметр 'id' не был предоставлен.");
    return { ticket: null, ok: false, message: "ID не предоставлен" };
  }

  try {
    // Ищем билет в базе данных
    const ticket = await prisma.purchasedTicket.findUnique({
      where: {
        id: id,
      },
      include: {
        event: true,
      },
    });

    // Если билет не найден
    if (!ticket) {
      console.warn(`Билет с ID ${id} не найден.`);
      return { ticket: null, ok: false, message: "Билет не найден" };
    }

    // Возвращаем найденный билет
    return { ticket, ok: true };
  } catch (e) {
    // Логируем ошибку
    console.error(`Произошла ошибка при поиске билета с ID ${id}:`, e);

    // Возвращаем ошибку
    return { ticket: null, ok: false, message: "Ошибка сервера" };
  }
})