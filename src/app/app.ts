import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './common/services/toast';
import storeService from './common/services/store-service';
import { UserData } from './interfaces/user';
import { CompanyService } from './common/services/company';
import { EmployeeService } from './common/services/employee';
import { Companies } from './interfaces/company';
import { distinctUntilChanged, filter } from 'rxjs';
import { DDBB } from './common/services/ddbb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,CardModule, ButtonModule, ToastModule ],
  providers:[MessageService,ToastService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hc_terch_frontend');
  private companiesService = inject(CompanyService);
  private employeeService = inject(EmployeeService);
  private db = inject(DDBB);

  constructor(){
    const usuario: UserData = JSON.parse(localStorage.getItem("user-data") || "null");
    if(!usuario) return;
    storeService.set("user-data", usuario);
    this.getCompanies();
  }

  private async getCompanies(){
    const {data,error} = await this.companiesService.getCompanies();

    // Descomentar esta linea para crear una base de datos
    // this.db.createElements();


    storeService.getObservable<Companies>("company-default-selected")
    .pipe(
      filter((res)=> !!res),
      distinctUntilChanged()
  ).subscribe({
      next:()=> this.employeeService.getEmployees(true)
    })
  }
}
