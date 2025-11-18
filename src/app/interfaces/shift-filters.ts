import { ShiftEmployeesItem } from "./shift-item";

export interface ShiftFilters extends StringsFilters {
  shift: keyof ShiftEmployeesItem;
}

export interface StringsFilters {
  name:string;
  rol:string;
}
