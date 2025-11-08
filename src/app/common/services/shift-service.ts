import { inject, Injectable } from '@angular/core';
import { ShiftRequest } from '../../interfaces/shifts-request';
import { PromiseResult } from '../../interfaces/promise-response';
import { map } from 'rxjs';
import { promiseHandler } from '../utils/functions/promises';
import { HttpClient } from '@angular/common/http';
import { ShiftResponse } from '../../interfaces/shift-response';
import { EmployeeService } from './employee';
import { ShiftItem } from '../../interfaces/shift-item';
import storeService from './store-service';
import { Companies } from '../../interfaces/company';
import { CreateShift } from '../../interfaces/create-shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

   private http = inject(HttpClient);
   private employeeService = inject(EmployeeService);

async getShifts(req:ShiftRequest ):Promise<PromiseResult<ShiftItem>>{

  return promiseHandler(this.http.post<ShiftResponse[]>("http://localhost:3000/api/marcajes/list",req).pipe(
    map((res)=> {
      const response:ShiftItem  = {
        date:req.dia,
        Tarde: [],
        Noche: [],
        Mañana: []
      }
      res.forEach((shift)=>{
      const turno = this.clasificarTurno(shift.hora_inicio);
      const shiftEmployee = this.employeeService.getShiftEmployee(shift.empleado_id);
      shiftEmployee && response[turno].push({...shiftEmployee, turno_id:shift.id})
    })
    return response;
    }  )
  ));
}



private clasificarTurno = (horaInicio:string) => {
    const hora = parseInt(horaInicio.split(":")[0], 10);
    if (hora >= 22 || hora < 6) return "Tarde";
    if (hora >= 6 && hora < 14) return "Mañana";
     return "Noche";
}

// async getEmployees(forceGet: boolean = false):Promise<PromiseResult<EmployeeResponse[]>>{
//   const allEmployees = storeService.get<EmployeeResponse[]>("list-complete-employees");
//   if(allEmployees && !forceGet) return { data:allEmployees, error:null };

//   const company = await storeService.getWhenExist<Companies>("company-default-selected");
//   let params = new HttpParams()
//   params = params.set('empresa_id', company.id);

//   return promiseHandler(this.http.get<EmployeeResponse[]>("http://localhost:3000/api/empleados", {params}).pipe(
//     map((res)=> res.map((employee) => ({
//       ...employee,
//       created_at: new Date(employee.created_at),
//       fecha_nac:new Date(employee.fecha_nac),
//       fecha_egreso:employee.fecha_egreso ? new Date(employee.fecha_egreso) : undefined,
//       fecha_ingreso:new Date(employee.fecha_ingreso)
//     }))),
//     tap((employees)=> storeService.set("list-complete-employees", employees))
//   ))
// }

async createShift(data:CreateShift): Promise<PromiseResult<ShiftResponse>>{
    const {id} = storeService.get<Companies>("company-default-selected");
  const req = {...data,empleado_id:id}

  return promiseHandler(this.http.post<ShiftResponse>("http://localhost:3000/api/marcajes", req));
}

async deleteShift(id:number): Promise<PromiseResult<any>>{
      return promiseHandler(this.http.delete<any>(`http://localhost:3000/api/marcajes/${id}`))
}

// async editEmployee(body:EmployeeResponse): Promise<PromiseResult<EmployeeResponse>>{
//   return promiseHandler(this.http.put<EmployeeResponse>("http://localhost:3000/api/empleados", body));
// }

}
