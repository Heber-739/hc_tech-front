import { Companies } from "../../../interfaces/company";
import { CreateShift } from "../../../interfaces/create-shift";
import { EmployeeResponse } from "../../../interfaces/employee-response";
import { ShiftDay } from "../../../interfaces/shift-item";
import storeService from "../../services/store-service";
import { generateEmployeeData } from "./generate-employees";

export const generateShifts = async (date?:Date)=>{
  const fromDate = new Date(date || new Date());
fromDate.setDate(fromDate.getDate() - 10);

const dateIterator = new Date(fromDate);
const {id:empresa_id} = storeService.get<Companies>("company-default-selected");

 const mapShifts = [[ '06:00:00', '14:00:00'], [ '14:00:00', '22:00:00'], [ '22:00:00', '06:00:00']]

 const response:CreateShift[] = [];

for (let i = 1; i <= 20; i++) {

  for (let j = 0; j < mapShifts.length; j++) {
    const element = mapShifts[j];
    const [hora_inicio,hora_fin] = element;

    const employeesSelecteds = await getRandomEmployees();
    employeesSelecteds.forEach((empleado_id)=> response.push({
      empleado_id,
      empresa_id,
      hora_fin,
      hora_inicio,
      dia:new Date(dateIterator)
    }) )
  }
  dateIterator.setDate(dateIterator.getDate() + 1)
}
return response;


  // return shifts.map((shift)=> ({
  //   ...shift,
  //   quote: Math.floor(Math.random() * 40) + 21,
  //   late:getRandomEmployees(),
  //   night:getRandomEmployees(),
  //   morning:getRandomEmployees()
  // }) )
}

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const  getRandomEmployees = async (): Promise<number[]> => {
  const employees = await storeService.getWhenExist<EmployeeResponse[]>("list-complete-employees");
    const turns = Math.floor(Math.random() * 18) + 5;

    return Array.from({ length: turns }, () => {
      const emp = getRandomElement(employees)
      return  emp.id ;
    })
  };

  export const getDefaultShifts = (date: Date = new Date()) => {
  return getCurrentWeek(date).map((date)=>({
      date,
      Tarde:[],
      Mañana:[],
      Noche:[]
    }))
}


 export const getCurrentWeek = (date: Date = new Date()): Date[] => {
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
