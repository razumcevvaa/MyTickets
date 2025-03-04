import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    console.warn("Параметр 'id' не был предоставлен.");
    return { ticket: null, ok: false, message: "ID не предоставлен" };
  }

  try {
    // Ищем билет в базе данных
    const ticket = await prisma.purchasedTicket.findUnique({
      where: {
        id,
      },
      include: {
        event: true,
      },
    });

    // Если билет не найден
    if (!ticket) {
      console.warn(`Билет с ID ${id} не найден.`);
      return { ticket: null, ok: false, message: "Билет не найден" }
    }

    // Возвращаем найденный билет
    return { ticket, ok: true }
  } catch (e) {
    // Логируем ошибку
    console.error(`Произошла ошибка при поиске билета с ID ${id}:`, e)

    // Возвращаем ошибку
    return { ticket: null, ok: false, message: "Ошибка сервера" }
  }
})