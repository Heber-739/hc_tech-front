import { HttpClient } from '@angular/common/http';
import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { promiseHandler } from '../../../common/utils/functions/promises';
import { LoginResponse } from '../../../interfaces/login-response';
import { ToastService } from '../../../common/services/toast';
import storeService from '../../../common/services/store-service';

@Component({
  selector: 'app-signin',
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  // providers:[ToastService],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export default class Signin {

  toggle = output<void>();
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toastService = inject(ToastService);

  private http = inject(HttpClient);

  signinForm =  this.fb.group({
    email: ["super@super",[Validators.required,Validators.email]],
    pass: ["1234",[Validators.required,Validators.minLength(4), Validators.maxLength(16)]]
  });

  goToSignup = ()=> this.toggle.emit()

  async submit(){
    if(this.signinForm.invalid) return;
    const values = this.signinForm.value
    const req = {
      email: values.email,
      password: values.pass
    }
    const {data, error} = await promiseHandler(this.http.post<LoginResponse>("http://localhost:3000/api/usuarios/login", req))
    if(error) return this.toastService.show("login-error");
    this.toastService.show("login-exitoso");
    localStorage.setItem("user-data", JSON.stringify(data?.usuario));
    storeService.set("user-data", data?.usuario);
    this.router.navigateByUrl("panel/employees");
  }
}
