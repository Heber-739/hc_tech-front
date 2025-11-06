import { inject, Injectable } from '@angular/core';
import { PromiseResult } from '../../interfaces/promise-response';
import { LoginResponse } from '../../interfaces/login-response';
import { HttpClient } from '@angular/common/http';
import { promiseHandler } from '../utils/functions/promises';
import { Login } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

      private http = inject(HttpClient);

  async login(req:Login):Promise<PromiseResult<LoginResponse>>{
    return promiseHandler(this.http.post<LoginResponse>("http://localhost:3000/api/usuarios/login", req))
  }

  async logout():Promise<PromiseResult<void>>{
    return promiseHandler(this.http.post<void>("http://localhost:3000/api/usuarios/login", {}))
  }

}
