import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-signup',
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, InputNumberModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export default class Signup {

  private fb = inject(FormBuilder);

  signupForm =  this.fb.group({
    name: ["",[Validators.required]],
    dni: [ undefined as number | undefined ,[Validators.required, Validators.min(7000000)]],
    age: [ undefined as number | undefined ,[Validators.required,Validators.min(18)]],
    company: ["",[Validators.required]]
  });


  submit(){

  }
}
