import { CalendarItem, CalendarItemData, CalendarItemType } from "../../../interfaces/calendar-item";
import { getCurrentWeek } from "./generate-shifts";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/** Devuelve un valor aleatorio de cualquier Enum */
function getRandomEnumValue(): CalendarItemType {
    const enumValues = Object.values(CalendarItemType);
    const randomIndex = getRandomInt(0, enumValues.length);
    return enumValues[randomIndex] ;
}

function generateCalendarItems(startDate: Date = new Date()): CalendarItemData[] {

        const currentDate = new Date(startDate);

        // Generar un número aleatorio de items para este día (0 a 3)
        const numItems = getRandomInt(0, 4);
        let items: CalendarItemData[] = [];

        for (let i = 0; i < numItems; i++) {
          const type = getRandomEnumValue();
          if (type === CalendarItemType.VACANCY || type === CalendarItemType.OFF) {
            i = numItems;
            items = [];
          }
            // Generar horas aleatorias entre 8 AM y 5 PM para el schedule
            const startHour = getRandomInt(8, 17);
            const endHour = startHour + getRandomInt(1, 3); // Duración de 1 a 3 horas

            const scheduleStart = new Date(currentDate);
            scheduleStart.setHours(startHour, 0, 0, 0);

            const scheduleEnd = new Date(currentDate);
            scheduleEnd.setHours(endHour, 0, 0, 0);

            // Generar el item de datos
            const data: CalendarItemData = {
                type,
                schedule: [scheduleStart, scheduleEnd],
                description: "Actividad del dia " + currentDate.toLocaleDateString('es')
            };
            items.push(data);
        }


    return items;
}

export const getCalendarItems = (date: Date = new Date()): CalendarItem[] => {
  const days: CalendarItem[] = [];
  const currentDate = new Date(date);
  currentDate.setDate(1);
  for (let i = 0; i < 5; i++) {
    getCurrentWeek(currentDate).forEach((day)=> days.push({
      date:day,
      items:generateCalendarItems(day)
    })  )
    currentDate.setDate(currentDate.getDate() + 7)
  }
  return days;
}
