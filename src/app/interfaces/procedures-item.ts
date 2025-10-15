import { EmployeeProfile } from "./employee-profile";

export interface ProcedureItemData {
  employee: EmployeeProcedure;
  status:string;
  metter:string;
  entry_date:Date;
  discharge_date?:Date;
  description:string;
  feedback?:string,
  owner?:string;
}

export type EmployeeProcedure = Pick<EmployeeProfile, 'id' | "name" | "image" | "rol" >
