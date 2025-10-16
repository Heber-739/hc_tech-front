import { EmployeeProfile } from './employee-profile';

export interface ReportEmployeeData {
  employee: Pick<EmployeeProfile,'id' | 'image' | 'name' | 'workstation' | 'status' | 'entry_date' | 'discharge_date' | 'work_schedule'>,
  data: MonthStaticalData[];
}

export interface MonthStaticalData {
  id:string;
  day:Date;
  day_off:boolean;
  attendence:number;
  vacations:boolean;
  absence :number;
  unjustified:boolean;
  extra_hours:number;

}
