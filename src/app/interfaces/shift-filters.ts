import { ShiftEmployeesItem } from "./shift-item";

export interface ShiftFilters {
  name:string;
  rol:string;
  shift: keyof ShiftEmployeesItem;
}
