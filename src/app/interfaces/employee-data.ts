export interface EmployeeListItemData {
  id:string;
  name: string;
  workstation: string;
  rol: string;
  work_schedule: string;
  status: string;
  time_in_company: string;
  image:string;
  checked?:boolean
}

export interface EmployeeProfile {
  name: string;
  email: string;
  workstation: string;
  rol: string;
  dni:string;
  phone_number:string;
  time_in_company: string;
  work_schedule:string;
  address: string;
  birthday: string;
  status: string;
  image:string;
  entry_date: string;
  discharge_date:string;
  punctuality:number;
  attendance:number;
  checked?:boolean
}
