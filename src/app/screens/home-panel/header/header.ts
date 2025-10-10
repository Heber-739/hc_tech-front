import { user } from './../../../../../public/datos/datos';
import { CommonModule } from '@angular/common';
import { Component, output, signal, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [CommonModule,ButtonModule,AvatarModule,PopoverModule,OverlayBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild('op') op!: Popover;
  protected companyAction = output<void>();

protected notifications = signal([{id:1,description:"asd"},{id:2,description:"asdasd"}]);
protected user = signal(user);
protected title = signal("Empleados");


  toggle(e:Event){
    this.op.toggle(e);
  }

  openCompanyForm(){
    this.companyAction.emit()
  }

}
