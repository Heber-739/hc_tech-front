import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { promiseHandler } from '../utils/functions/promises';
import { CalendarCreateReq, CalendarReq, CalendarResponse } from '../../interfaces/calendario-req-res';
import { PromiseResult } from '../../interfaces/promise-response';
import { map } from 'rxjs';
import { CalendarItem, CalendarItemData } from '../../interfaces/calendar-item';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {


     private http = inject(HttpClient);

     deleteCalendarItem(id:number):Promise<PromiseResult<any>>{

       return promiseHandler(this.http.delete<any>(`http://localhost:3000/api/calendario/delete/${id}`))
    }

    createCalendarItem(req:CalendarCreateReq):Promise<PromiseResult<CalendarItemData>>{
       return promiseHandler(this.http.post<CalendarResponse>(`http://localhost:3000/api/calendario/crear`,req).pipe(
        map((res)=> ({id:res.id,type:res.estado}))
       ))
    }

     async getCalendarItems(id:number,date:Date):Promise<PromiseResult<CalendarItem[]>>{
      const [fecha_inicio,fecha_fin]= this.getMonthDays(date);
      const req:CalendarReq = { id,fecha_inicio,fecha_fin };

      return promiseHandler(this.http.post<CalendarResponse[]>("http://localhost:3000/api/calendario/listar",req).pipe(
        map((res)=> {
          const skeleton = this.getSkeletonResponse(date);
            const  response:{[key:string]:CalendarItemData[]} = {

            }
            skeleton.forEach((key)=> response[key] = [] )
            res.forEach((item)=> {
              const fullDate = new Date(item.fecha);
              const dateKey = fullDate.toISOString().split('T')[0]; // "2025-11-10"
              const newItemData: CalendarItemData = {
                id: item.id,
                type: item.estado,
              };

              if (skeleton.includes(dateKey)) {
                response[dateKey].push(newItemData)
              }
            })
              return skeleton.map((i)=>({
                fecha:new Date(i),
                items: response[i]
              }))
        }
      ))
      )
     }


     private getSkeletonResponse(date:Date = new Date()):string[]{
        const today = new Date(date);
        today.setDate(1)
        let week_day = today.getDay();
        const _day_ = week_day === 0 ? 6 : week_day - 1;
        const firstDay = new Date(date);
        firstDay.setDate(today.getDate() - _day_);
        firstDay.setHours(0, 0, 0, 0);

        let response = [];

        for (let i = 0; i < 35; i++) {
          const newDate = new Date(firstDay).toISOString().split('T')[0]
          response.push(newDate)
          firstDay.setDate(firstDay.getDate()+1);
        }
        return response;
     }

     private getMonthDays(date:Date = new Date()):[Date,Date]{
        const today = new Date(date);
        today.setDate(1)
        let week_day = today.getDay();
        const _day_ = week_day === 0 ? 6 : week_day - 1;
        const firstDay = new Date(date);
        firstDay.setDate(today.getDate() - _day_);

        firstDay.setHours(0, 0, 0, 0);
        const lastDay = new Date(firstDay);
        lastDay.setDate(firstDay.getDate() + 34)
        return [firstDay,lastDay];
     }
}
