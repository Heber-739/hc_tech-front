import { user } from './../../../../../public/datos/datos';
import { CommonModule } from '@angular/common';
import { Component, output, signal, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Popover, PopoverModule } from 'primeng/popover';
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { filter } from 'rxjs';

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
  protected user = signal<UserData>(user);
  protected title = signal("");

constructor() {
  this.getData();
}

async getData(){
  storeService.getObservable<string>("title-description").pipe(
    filter((v)=> !!v)
  ).subscribe({
    next:(title)=> this.title.set(title)
  })
  const user = await storeService.getWhenExist<UserData>("user-data");
  this.user.update(()=> user);
}

  toggle(e:Event){
    this.op.toggle(e);
  }

  openCompanyForm(){
    this.companyAction.emit()
  }

}
