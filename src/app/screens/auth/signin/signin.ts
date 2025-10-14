import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-signin',
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export default class Signin {

  toggle = output<void>();
  private fb = inject(FormBuilder);
  private router = inject(Router);

  signinForm =  this.fb.group({
    email: ["admin@admin",[Validators.required,Validators.email]],
    pass: ["admin123",[Validators.required,Validators.minLength(8), Validators.maxLength(16)]]
  });

  goToSignup = ()=> this.toggle.emit()

  submit(){
    this.router.navigateByUrl("panel/employees")
  }
}
