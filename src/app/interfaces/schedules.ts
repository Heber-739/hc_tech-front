import { EmployeeProfile } from "./employee-data";

export interface SchedulesData {
  day: Date;
  shift: SchedulesShiftData[];
}

export interface SchedulesShiftData {
  shift: "Mañana" | "Tarde" | "Noche",
  employees: SchedulesEmployees[],
  schedule_options: Date[]
}

export type SchedulesEmployees = Pick<EmployeeProfile, 'name' | 'rol' | 'image' | 'id'> & {
  entry?: Date;
  discharge?: Date;
};
