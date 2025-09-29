import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";

@Component({
  selector: 'app-home-panel',
  imports: [DrawerModule, RouterModule, ButtonModule, Sidebar, Header],
  templateUrl: './home-panel.html',
  styleUrl: './home-panel.css',
  standalone:true
})
export default class HomePanel {
  visible = false;
}
