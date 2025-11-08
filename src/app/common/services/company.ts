import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { promiseHandler } from '../utils/functions/promises';
import { PromiseResult } from '../../interfaces/promise-response';
import { Companies } from '../../interfaces/company';
import { catchError, map, tap } from 'rxjs';
import storeService from './store-service';
import { UserData } from '../../interfaces/user';
import { ToastService } from './toast';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

      private http = inject(HttpClient);
      private toast = inject(ToastService);

      async getCompanies():Promise<PromiseResult<Companies[]>>{
        const { id } = storeService.get<UserData>("user-data");
        return promiseHandler(this.http.post<Companies[]>("http://localhost:3000/api/empresas/empresaById",{user_id:id}).pipe(
          map((res)=> res.map((c)=>({
            ...c,
            created_at:new Date(c.created_at)
          }))),
          tap((data)=> {
            storeService.set("list-complete-employees",null);
            storeService.set<Companies>("company-default-selected", data[0]);
            storeService.set<Companies[]>("companies-list", data);
          }),
          catchError((err)=> {
            this.toast.show("companies-load-error");
            throw err;

          })
        ))
      }

      async updateCompany(body:Companies):Promise<PromiseResult<Companies>>{
        return promiseHandler(this.http.put<Companies>("http://localhost:3000/api/empresas",body).pipe(
         tap(()=> this.getCompanies())
        ))
      }

      async createCompany(body:Companies):Promise<PromiseResult<Companies>>{
        return promiseHandler(this.http.post<Companies>("http://localhost:3000/api/empresas",body).pipe(
         tap(()=> this.getCompanies()),
        ))
      }

      async deleteCompany(id:number):Promise<PromiseResult<{message:string}>>{
        return promiseHandler(this.http.delete<{message:string}>(`http://localhost:3000/api/empresas/${id}`).pipe(
         tap(()=> {this.getCompanies()})
        ))
      }

}
