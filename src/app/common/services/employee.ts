import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StaticsAttendence } from '../../interfaces/statics-employee';
import { promiseHandler } from '../utils/functions/promises';
import { PromiseResult } from '../../interfaces/promise-response';
import { map, tap, first } from 'rxjs';
import { EmployeeResponse } from '../../interfaces/employee-response';
import { UserData } from '../../interfaces/user';
import storeService from './store-service';
import { Companies } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private http = inject(HttpClient);


async getStatics(id:number,empresa_id:number):Promise<PromiseResult<StaticsAttendence>>{
  return promiseHandler(this.http.post<StaticsAttendence>("http://localhost:3000/api/empleados/statics",{id,empresa_id}).pipe(
    map((res)=> ({
      total:res.total,
      dias_asistidos: Number(res.dias_asistidos),
      dias_puntuales: Number(res.dias_puntuales)
    }))
  ))
}

async getEmployees(forceGet: boolean = false):Promise<PromiseResult<EmployeeResponse[]>>{
  const allEmployees = storeService.get<EmployeeResponse[]>("list-complete-employees");
  if(allEmployees && !forceGet) return { data:allEmployees, error:null };

  const company = await storeService.getWhenExist<Companies>("company-default-selected");
  let params = new HttpParams()
  params = params.set('empresa_id', company.id);

  return promiseHandler(this.http.get<EmployeeResponse[]>("http://localhost:3000/api/empleados", {params}).pipe(
    map((res)=> res.map((employee) => ({
      ...employee,
      created_at: new Date(employee.created_at),
      fecha_nac:new Date(employee.fecha_nac),
      fecha_egreso:employee.fecha_egreso ? new Date(employee.fecha_egreso) : undefined,
      fecha_ingreso:new Date(employee.fecha_ingreso)
    }))),
    tap((employees)=> storeService.set("list-complete-employees", employees))
  ))
}

async createEmployee(body:EmployeeResponse): Promise<PromiseResult<EmployeeResponse[]>>{
  return promiseHandler(this.http.post<EmployeeResponse[]>("http://localhost:3000/api/empleados", body));
}

async deleteEmployees(ids:number[]): Promise<PromiseResult<number[]>>{
  const idsDeleted = [];
  for (let i = 0; i < ids.length; i++) {
    try {
      await promiseHandler(this.http.delete<EmployeeResponse[]>(`http://localhost:3000/api/empleados/${ids[i]}`))
      idsDeleted.push(ids[i]);
    } catch (error) {}
  }

  return {data:ids,error:null}
}

async editEmployee(body:EmployeeResponse): Promise<PromiseResult<EmployeeResponse>>{
  return promiseHandler(this.http.put<EmployeeResponse>("http://localhost:3000/api/empleados", body));
}

  getShiftEmployee(eid:number){
    if(!eid) return;
  const employee = storeService.get<EmployeeResponse[]>("list-complete-employees").find((e)=>e.id===eid);
  if(!employee) return;
  const {id, nombre, puesto, imagen} = employee;
  return {id, nombre, puesto, imagen}
}


}
