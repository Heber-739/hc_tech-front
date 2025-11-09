import { inject, Injectable } from '@angular/core';
import { ShiftService } from './shift-service';
import { EmployeeService } from './employee';
import { generateEmployeeData } from '../utils/functions/generate-employees';
import { generateShifts } from '../utils/functions/generate-shifts';

@Injectable({
  providedIn: 'root'
})
export class DDBB {

  private employeeService = inject(EmployeeService);
  private shiftService = inject(ShiftService);
  // private employeeService = inject(EmployeeService);

  async createElements(){
    // Empleados
    const employees = await generateEmployeeData();
    employees.forEach(async (e)=> await this.employeeService.createEmployee(e))

    // Turnos
    const shifts = await generateShifts();
    console.log({shifts})
    shifts.forEach(async (e)=> await this.shiftService.createShift(e))




  }

}
