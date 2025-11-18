import { SchedulesData } from "../../../interfaces/schedules";
import { generateEmployeeData } from "./generate-employees";
import { getRandomEmployees } from "./generate-shifts";

// const getSchedulesDate = (date: Date) => {
//   const employees = generateEmployeeData();

//   const response:SchedulesData = {
//     day:date,
//     shift:[]
//   };

//   const dateStart = new Date();
//   const dateEnd = new Date();
// dateStart.setHours(7, 0, 0, 0);
// dateEnd.setHours(15, 0, 0, 0);

// response.shift.push({
//   shift:"Mañana",
//   employees:getRandomEmployees().employees,
//   schedule_options:getIntervals(dateStart,dateEnd)
// })

// dateStart.setHours(15, 0, 0, 0);
// dateEnd.setHours(23, 0, 0, 0);

// response.shift.push({
//   shift:"Tarde",
//   employees:getRandomEmployees().employees,
//   schedule_options:getIntervals(dateStart,dateEnd)
// })

// dateStart.setHours(23, 0, 0, 0);
// dateEnd.setHours(7, 0, 0, 0);

// response.shift.push({
//   shift:"Noche",
//   employees:getRandomEmployees().employees,
//   schedule_options:getIntervals(dateStart,dateEnd)
// })

//   return response;

// }

function getIntervals(fechaInicio: Date, fechaFin: Date): Date[] {
    const fechas: Date[] = [];
    let fechaActual = new Date(fechaInicio.getTime());

    while (fechaActual.getTime() <= fechaFin.getTime()) {
        fechas.push(new Date(fechaActual));
        fechaActual.setMinutes(fechaActual.getMinutes() + 15);
    }

    return fechas;
}


