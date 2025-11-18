import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProcedureCloseRequest, ProcedureCreateRequest, ProcedureRequest, ProcedureResponse } from '../../interfaces/procedures-req-res';
import { PromiseResult } from '../../interfaces/promise-response';
import { promiseHandler } from '../utils/functions/promises';
import { EmployeeService } from './employee';
import { map } from 'rxjs';
import { ProcedureItemData } from '../../interfaces/procedures-item';
import storeService from './store-service';
import { UserData } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  private http = inject(HttpClient);
  private employeeService = inject(EmployeeService);


  async getProcedures(req:ProcedureRequest, forceCall:boolean = false ):Promise<PromiseResult<ProcedureItemData[]>>{
    const procedures = storeService.get<ProcedureItemData[]>("procedures-list");
    if(procedures && !forceCall) return {data:procedures,error:null};
    return promiseHandler(this.http.post<ProcedureResponse[]>("http://localhost:3000/api/tramites/listar",req).pipe(
      map((res)=> {
        const response:ProcedureItemData[] = [];
        res.forEach((p)=>{
        const employee = this.employeeService.getShiftEmployee(p.empleado_id);
        const user = p.encargado && this.employeeService.getShiftEmployee(p.encargado) || {id:0 ,nombre:"-"};
        const owner = {id:user?.id,name:user?.nombre}
        employee && response.push({
          id:p.id,
          employee,
            status:p.estado,
            metter:p.asunto,
            entry_date:new Date(p.fecha_pedido),
            discharge_date:p.fecha_cerrado ? new Date(p.fecha_cerrado) : undefined,
            description:p.descripcion,
            feedback:p.devolucion,
            owner
        })
      })
      storeService.set<ProcedureItemData[]>("procedures-list",response);
      return response;
      })
    ));
  }

  async takeProcedure(id:number,encargado:number):Promise<PromiseResult<ProcedureItemData>>{
    const req = {id,encargado};
    return promiseHandler(this.http.put<ProcedureResponse>("http://localhost:3000/api/tramites/tomar",req).pipe(
      map((res) => {
        let procedures = storeService.get<ProcedureItemData[]>("procedures-list");
        const index = procedures.findIndex((p)=> p.id === res.id);
        if(index == -1) throw new Error("200");
        const user = storeService.get<UserData>("user-data");
        let item = procedures[index];
        item.owner = {
          id:user.empleado_id,
          name:user.nombre
        };
        item.status = res.estado;
        procedures[index] = item;
        storeService.set<ProcedureItemData[]>("procedures-list",procedures);
        return item;
      })
    ));
  }

  async closeProcedure(req:ProcedureCloseRequest):Promise<PromiseResult<ProcedureItemData>>{
    return promiseHandler(this.http.put<ProcedureResponse>("http://localhost:3000/api/tramites/cerrar",req).pipe(
      map((res) => {
        let procedures = storeService.get<ProcedureItemData[]>("procedures-list");
        const index = procedures.findIndex((p)=> p.id === res.id);
        if(index == -1) throw new Error("200");

        let item = procedures[index];
        item.status = res.estado;
        item.feedback = res.devolucion;
        procedures[index] = item;
        storeService.set<ProcedureItemData[]>("procedures-list",procedures);
        return item;
      })
    ));
  }

  async createProcedure(req:ProcedureCreateRequest):Promise<PromiseResult<ProcedureItemData>>{
    return promiseHandler(this.http.post<ProcedureResponse>("http://localhost:3000/api/tramites/crear",req)
    .pipe(
      map((p) => {
        const employee = this.employeeService.getShiftEmployee(p.empleado_id);
        if(!employee) throw new Error("User not found");
        return ({
          id:p.id,
          employee,
            status:p.estado,
            metter:p.asunto,
            entry_date:new Date(p.fecha_pedido),
            discharge_date:undefined,
            description:p.descripcion,
            feedback:"",
            owner:undefined
        })
      })
    )
  );
  }

}
