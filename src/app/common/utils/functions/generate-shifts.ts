import { ShiftEmployeeItem } from "../../../interfaces/shift-item";
import { generateEmployeeData } from "./generate-employees";

export const getWeekShifts = (date?:Date)=>{
  const shifts = obtenerSemanaActual(date).map((date)=> ({date,late:[],morning:[],night:[]}));
  const employees = generateEmployeeData();


  const getRandomEmployees = (): ShiftEmployeeItem => {
    const turns = Math.floor(Math.random() * 25) + 21;
    return {employees: Array.from({ length: turns }, () => {
      const index = Math.floor(Math.random() * employees.length);
      const { id, image, name, rol } = employees[index];
      return { id, image, name, rol };
    }), quota: Math.floor(Math.random() * 10) + 41};
  };

  return shifts.map((shift)=> ({
    ...shift,
    quote: Math.floor(Math.random() * 40) + 21,
    late:getRandomEmployees(),
    night:getRandomEmployees(),
    morning:getRandomEmployees()
  }) )
}


  const obtenerSemanaActual = (date: Date = new Date()): Date[] => {
    const semana: Date[] = [];

    const today = new Date(date);
    let week_day = today.getDay();
    const diaSemanaAjustado = week_day === 0 ? 6 : week_day - 1;

    const monday = new Date(date);
    monday.setDate(date.getDate() - diaSemanaAjustado);

    monday.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
        const fecha = new Date(monday);
        fecha.setDate(monday.getDate() + i);
        semana.push(fecha);
    }

    return semana;
}
