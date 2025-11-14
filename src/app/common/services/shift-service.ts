import { inject, Injectable } from '@angular/core';
import { ShiftRequest } from '../../interfaces/shifts-request';
import { PromiseResult } from '../../interfaces/promise-response';
import { map } from 'rxjs';
import { promiseHandler } from '../utils/functions/promises';
import { HttpClient } from '@angular/common/http';
import { ShiftResponse } from '../../interfaces/shift-response';
import { EmployeeService } from './employee';
import { ShiftItem } from '../../interfaces/shift-item';
import { CreateShift } from '../../interfaces/create-shift';
import { SchedulesData } from '../../interfaces/schedules';

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
    })
  ));
}

async getScheduleShifts(req:ShiftRequest):Promise<PromiseResult<SchedulesData>>{
 return promiseHandler(this.http.post<ShiftResponse[]>("http://localhost:3000/api/marcajes/list",req).pipe(
    map((res)=> {
      const response:SchedulesData  = {
          Tarde: [],
          Noche: [],
          Mañana: []
      }
      res.forEach((item)=>{
        let shift = item;
      const turno = this.clasificarTurno(shift.hora_inicio);
      const shiftEmployee = this.employeeService.getShiftEmployee(shift.empleado_id);

      shift.dia = new Date(shift.dia);


      if(shift.salida){
        const salidaDate = new Date(shift.dia);
        let [h, m, s] = String(shift.salida).split(':');
        salidaDate.setHours( parseInt(h,10),parseInt( m,10),parseInt( s,10))
        shift.salida = salidaDate;
      }
      if(shift.entrada){
        const entradaDate = new Date(shift.dia);
        let [h, m, s] = String(shift.entrada).split(':');
        entradaDate.setHours( parseInt(h,10),parseInt( m,10),parseInt( s,10))
        shift.entrada = entradaDate;
      }
      shiftEmployee && response[turno].push({...shiftEmployee, marcaje:shift})
    })
    return response;
    })
  ));
}


private clasificarTurno = (horaInicio:string) => {
    const hora = parseInt(horaInicio.split(":")[0], 10);
    if (hora >= 22 || hora < 6) return "Noche";
    if (hora >= 6 && hora < 14) return "Mañana";
     return "Tarde";
}


async createShift(data:CreateShift): Promise<PromiseResult<ShiftResponse>>{
  return promiseHandler(this.http.post<ShiftResponse>("http://localhost:3000/api/marcajes", data));
}

async updateEntryShift(data:CreateShift): Promise<PromiseResult<ShiftResponse>>{
  return promiseHandler(this.http.put<ShiftResponse>("http://localhost:3000/api/marcajes/entrada", data));
}

async updateExitShift(data:CreateShift): Promise<PromiseResult<ShiftResponse>>{
  return promiseHandler(this.http.put<ShiftResponse>("http://localhost:3000/api/marcajes/salida", data));
}

async deleteShift(id:number): Promise<PromiseResult<any>>{
      return promiseHandler(this.http.delete<any>(`http://localhost:3000/api/marcajes/${id}`))
}


}
