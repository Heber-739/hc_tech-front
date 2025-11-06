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
  private toast = inject(ToastService)

  constructor(){
    const usuario: UserData = JSON.parse(localStorage.getItem("user-data") || "null");
    if(!usuario) return;
    storeService.set("user-data", usuario);
    this.getCompanies();
  }

  private async getCompanies(){
    const {data,error} = await this.companiesService.getCompanies();
  }
}
