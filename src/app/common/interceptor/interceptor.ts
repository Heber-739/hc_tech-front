import { HttpClient, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { ToastService } from '../services/toast';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import storeService from '../services/store-service';

// Ya no es un "AuthInterceptor" sino un "CredentialsInterceptor"
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // 💡 Solo necesitamos decir al navegador que incluya las cookies (HttpOnly o no)

  const router = inject(Router);
  const toast = inject(ToastService);

  const modifiedReq = req.clone({
    withCredentials: true,
    setHeaders: {
      'X-Requested-From': 'hctech-front'
    }
  });


  return next(modifiedReq).pipe(
    catchError((error:any) => {
      if(error["status"] === 401){
        storeService.clear();
        toast.show("expired-session");
        router.navigateByUrl("/auth");
      }
      throw error;
    })
  );
};
