export interface EmployeeProfile {
  id:string;
  name: string;
  email: string;
  phone_number:string;
  dni:number;
  birthday: Date;
  workstation: string;
  address: string;
  status: string;
  rol: string;
  work_schedule:string;
  image:string;
  entry_date: Date;
  discharge_date:Date;
  punctuality:number;
  attendance:number;
  checked?:boolean
}
