import { v4 } from "uuid";
import { EmployeeProfile } from "../../interfaces/employee-profile";

export const defaultEmployee: EmployeeProfile = {
      name: '',
      id: v4(),
      email: '',
      phone_number: '',
      dni: 0,
      birthday: new Date(),
      workstation: '',
      address: '',
      status: '',
      rol: '',
      entry_date: new Date(),
      discharge_date: new Date(),
      work_schedule: '',
      image: '',
      punctuality: 0,
      attendance: 0,

}
