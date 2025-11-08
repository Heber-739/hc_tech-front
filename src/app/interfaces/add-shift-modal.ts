import { EmployeeResponse } from "./employee-response";

export interface AddShiftModal {
  show:Pick<EmployeeResponse, 'id' | 'nombre' >[];
  employee:Pick<EmployeeResponse, 'id' | 'nombre' >[];
  date:Date;
}
