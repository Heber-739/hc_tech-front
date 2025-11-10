import { inject, Injectable } from '@angular/core';
import { ShiftService } from './shift-service';
import { EmployeeService } from './employee';
import { generateEmployeeData } from '../utils/functions/generate-employees';
import { generateShifts } from '../utils/functions/generate-shifts';
import { generateProcedureItem } from '../utils/functions/procedures-generator';
import { interval, take } from 'rxjs';
import { ProcedureService } from './procedure-service';

@Injectable({
  providedIn: 'root'
})
export class DDBB {

  private employeeService = inject(EmployeeService);
  private shiftService = inject(ShiftService);
  private procedureService = inject(ProcedureService);

  async createElements(){
    // Empleados
    // const employees = await generateEmployeeData();

    // Turnos !! Desactivar validacion backend
    // const shifts = await generateShifts();
    const procedures = await generateProcedureItem();

    interval(400).pipe(
      // take(employees.length)
      // take(shifts.length)
      take(procedures.length)
    ).subscribe((i)=> {
      // this.employeeService.createEmployee(employees[i])
      // this.shiftService.createShift(shifts[i])
      this.procedureService.createProcedure(procedures[i])
    }
    )


    // employees.forEach(async (e)=> await this.employeeService.createEmployee(e))
    // shifts.forEach(async (e)=> await this.shiftService.createShift(e))
    // procedures.forEach(async (e)=> await this.procedureService.createProcedure(e))




  }

}
