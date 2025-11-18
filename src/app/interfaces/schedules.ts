import { EmployeeResponse } from "./employee-response";
import { ShiftResponse } from "./shift-response";

export interface SchedulesData {
  Mañana: ScheduleShiftItem[];
  Tarde: ScheduleShiftItem[];
  Noche: ScheduleShiftItem[];
}

export type ScheduleShiftItem = (Pick<EmployeeResponse, 'id' |'nombre' |'puesto' |'imagen' > & { marcaje:ShiftResponse});
