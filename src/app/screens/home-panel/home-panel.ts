import { filter } from 'rxjs';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";
import { Company } from './company/company';
import { generarEmpresas } from '../../common/utils/functions/generate-companies';
import { CompanyData } from '../../interfaces/company';

@Component({
  selector: 'app-home-panel',
  imports: [DrawerModule, RouterModule, ButtonModule, Sidebar, Header, Company],
  templateUrl: './home-panel.html',
  styleUrl: './home-panel.css'
})
export default class HomePanel {
  visible = false;
  protected companyForm = signal<boolean>(false)
  companies = signal<CompanyData[]>(generarEmpresas(2))

  toggleCompanyForm(value:boolean){
    this.companyForm.set(value)
  }


  entryCompany(company:CompanyData){
    this.companies().some((c)=> (c.id === company.id))
      ? this.companies.update((cs)=>cs.map((c)=>c.id === company.id ? company:c))
      : this.companies.update((cs)=> [...cs,company])
      this.companyForm.set(false);
  }

  deleteCompany(id:string){
    this.companies.update((cs)=>cs.filter((c)=>c.id !== id));
    this.companyForm.set(false);
  }

}
