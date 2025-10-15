import { EmployeeProfile } from "./employee-profile"

export interface ShiftItem extends ShiftEmployeesItem {
  date:Date;
}

export interface ShiftEmployeesItem {
  morning: ShiftEmployeeItem;
  late: ShiftEmployeeItem;
  night: ShiftEmployeeItem;
}

export interface ShiftEmployeeItem {
  employees: Pick<EmployeeProfile, 'id' |'name' |'rol' |'image' >[]
  quota:number
};
