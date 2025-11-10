import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProcedureItemData } from '../../../interfaces/procedures-item';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';
import { ProcedureService } from '../../../common/services/procedure-service';
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { ToastService } from '../../../common/services/toast';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { user } from '../../../../../public/datos/datos';
import { ProcedureCloseRequest } from '../../../interfaces/procedures-req-res';


@Component({
  selector: 'app-procedure-item',
  imports: [PaginatorModule, AvatarModule, CommonModule , FormsModule, ButtonModule, ModalActions, SelectModule, TextareaModule, ButtonModule ],
  templateUrl: './procedure-item.html',
  styleUrl: './procedure-item.css'
})
export class ProcedureItem implements OnInit{

  item = input.required<ProcedureItemData>();
  modalKey = signal<string>("");
  user = signal<UserData>(user);


protected procedureService = inject(ProcedureService);
protected toast = inject(ToastService);

protected estado = ""
protected feedback = ""
protected continueProcedure = signal<boolean>(false)

  constructor(){

  }
  ngOnInit(): void {
    this.init();
  }

  private async init(){
    const user = await storeService.getWhenExist<UserData>("user-data");
    this.user.set(user);
  }

  closeModal(onlyClose:boolean){
    if(onlyClose) return this.continueProcedure.set(false);
    const req = {
      id:this.item().id,
      devolucion:"asd",
      estado:this.estado
    }

  }

  take = () => this.modalKey.update(()=> "save")


  continue = ()=> this.continueProcedure.set(true);


    async confirm(save:string){
    this.modalKey.update(()=> "");
    this.continueProcedure() ? this.closeProcedure() : this.takeProcedure();
  }

  private async takeProcedure(){
       const user = storeService.get<UserData>("user-data");
    const {data,error} = await this.procedureService.takeProcedure(this.item().id,user.id);
    if(!data) return this.toast.show("procedur-update-error")
      this.toast.show("procedur-update-success")
    this.item().owner = data.owner;
    this.item().status = data.status;
  }

  private async closeProcedure(){
    this.continueProcedure.set(false);
    const req:ProcedureCloseRequest = {
    id:this.item().id,
    devolucion:this.feedback,
    estado:this.estado
    }

    const {data,error} = await this.procedureService.closeProcedure(req);
    if(!data) return this.toast.show("procedur-update-error")
      this.toast.show("procedur-update-success")
    this.item().owner = data.owner;
    this.item().status = data.status;
    this.feedback = "";
    this.estado = "";
  }

}
