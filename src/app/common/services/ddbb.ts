import { inject, Injectable } from '@angular/core';
import { ShiftService } from './shift-service';
import { EmployeeService } from './employee';
import { generateEmployeeData } from '../utils/functions/generate-employees';
import { generateShifts } from '../utils/functions/generate-shifts';
import { generateProcedureItem } from '../utils/functions/procedures-generator';
import { interval, take } from 'rxjs';
import { ProcedureService } from './procedure-service';
import { UserData } from '../../interfaces/user';
import storeService from './store-service';

@Injectable({
  providedIn: 'root'
})
export class DDBB {

  private employeeService = inject(EmployeeService);
  private shiftService = inject(ShiftService);
  private procedureService = inject(ProcedureService);

  async createElements(){
    // await this.createEmployeeElements();
    // await this.createShiftElements();
    // await this.createProceduresElements();
  }


  async createEmployeeElements(){
    const user = storeService.get<UserData>("user-data")
    const employees = await generateEmployeeData();
    interval(400).pipe(
      take(employees.length)
    ).subscribe((i)=> {
      this.employeeService.createEmployee(employees[i], user.id)
    }
    )
  }
  async createShiftElements(){
    // Turnos !! Desactivar validacion backend

    const shifts = await generateShifts();
    interval(400).pipe(
      take(shifts.length)
    ).subscribe((i)=> {
      this.shiftService.createShift(shifts[i])
    }
    )
  }


  async createProceduresElements(){
     const procedures = await generateProcedureItem();
    interval(400).pipe(
      take(procedures.length)
    ).subscribe((i)=> {
      this.procedureService.createProcedure(procedures[i])
    }
    )
  }

}
