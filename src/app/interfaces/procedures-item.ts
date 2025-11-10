import { EmployeeResponse } from "./employee-response";

export interface ProcedureItemData {
  id:number;
  employee: EmployeeProcedure;
  status:string;
  metter:string;
  entry_date:Date;
  discharge_date?:Date;
  description:string;
  feedback?:string,
  owner?:{
    id:number;
    name:string;
  };
}


export type EmployeeProcedure = Pick<EmployeeResponse, 'id' | "nombre" | "imagen" | "puesto" >
