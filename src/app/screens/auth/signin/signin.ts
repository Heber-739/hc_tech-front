import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastService } from '../../../common/services/toast';
import storeService from '../../../common/services/store-service';
import { CompanyService } from '../../../common/services/company';
import { AuthService } from '../../../common/services/auth-service';

@Component({
  selector: 'app-signin',
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  // providers:[ToastService],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export default class Signin implements OnInit{

  toggle = output<void>();
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toastService = inject(ToastService);

  private authService = inject(AuthService);
  private toast = inject(ToastService);
    private companiesService = inject(CompanyService);


  signinForm =  this.fb.group({
    email: ["super@super",[Validators.required,Validators.email]],
    password: ["1234",[Validators.required,Validators.minLength(4), Validators.maxLength(16)]]
  });

  goToSignup = ()=> this.toggle.emit()

  async submit(){
    const {email,password} = this.signinForm.value;
    if(this.signinForm.invalid || !email || !password) return;
    const {data, error} = await this.authService.login({ email, password });
    if(!data) return this.toastService.show("login-error");
    this.toastService.show("login-exitoso");
    localStorage.setItem("user-data", JSON.stringify(data.usuario));
    storeService.set("user-data", data.usuario);
    this.router.navigateByUrl("panel/employees");
    await this.companiesService.getCompanies();
  }

  ngOnInit(): void {
    const showError = storeService.get("expired-session");
    const user = JSON.parse(localStorage.getItem("user-data") || "null");
    showError && user && this.toast.show("expired-session")

  }

}
