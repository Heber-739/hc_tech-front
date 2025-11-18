import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";
import { Company } from './company/company';

@Component({
  selector: 'app-home-panel',
  imports: [DrawerModule, RouterModule, ButtonModule, Sidebar, Header, Company],
  templateUrl: './home-panel.html',
  styleUrl: './home-panel.css'
})
export default class HomePanel {
  viewCompanyForm = signal<boolean>(false);

  toggleCompanyForm(value:boolean){
    this.viewCompanyForm.set(value)
  }

}
