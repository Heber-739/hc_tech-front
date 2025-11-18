import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../common/services/auth-service';
import { PasswordModule } from 'primeng/password';
import { ToastService } from '../../../common/services/toast';
import { Router } from '@angular/router';
import storeService from '../../../common/services/store-service';


@Component({
  selector: 'app-signup',
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, InputNumberModule,PasswordModule ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export default class Signup {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private toast = inject(ToastService);
  protected success = output<void>();

  signupForm =  this.fb.group({
    nombre: ["",[Validators.required]],
    email: [ undefined as string | undefined ,[Validators.required, Validators.min(7000000)]],
    password: [ undefined as string | undefined ,[Validators.required,Validators.min(18)]],
    repeat: [ undefined as string | undefined ,[Validators.required,Validators.min(18)]],
  });


  async submit(){
    const {email,nombre,password,repeat} = this.signupForm.value;
    if(!email || !nombre || !password || !repeat) return this.toast.show("form-incomplete")
    if(password !== repeat) return this.toast.show("pass-not-match");

    const {data,error} = await this.authService.signUp({nombre,email,password})
    if(!data) return this.toast.show("signup-error");
    // localStorage.setItem("user-data", JSON.stringify(data));
    // storeService.set("user-data", data);
    this.toast.show("signup-success");
    this.success.emit();
    // this.router.navigateByUrl("/panel/employees");
  }
}
