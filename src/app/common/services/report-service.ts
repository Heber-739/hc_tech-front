import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PromiseResult } from '../../interfaces/promise-response';
import { ReportResponse } from '../../interfaces/report-employee';
import { promiseHandler } from '../utils/functions/promises';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private http = inject(HttpClient);


  async getReports(id:number,date:Date):Promise<PromiseResult<ReportResponse[]>>{
    return promiseHandler(this.http.post<ReportResponse[]>("http://localhost:3000/api/reportes/obtener",{id,date}).pipe(
      map((res)=> res.map((item)=>({
          empleado_id: item.empleado_id,
          dia:new Date(item.dia),
          data:item.data
      })
    ))))
  }

}
