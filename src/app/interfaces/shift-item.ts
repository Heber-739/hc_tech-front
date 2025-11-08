import { EmployeeResponse } from "./employee-response";

export interface ShiftItem extends ShiftEmployeesItem {
  date:Date;
}

export type ShiftDay = (Pick<EmployeeResponse, 'id' |'nombre' |'puesto' |'imagen' > & { turno_id:number}) [];

export interface ShiftEmployeesItem {
  Mañana: ShiftDay;
  Tarde: ShiftDay;
  Noche: ShiftDay;
}
