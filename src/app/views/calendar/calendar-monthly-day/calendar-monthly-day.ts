import {  Component, effect, inject, input, signal } from '@angular/core';
import { CalendarItem, CalendarItemType } from '../../../interfaces/calendar-item';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../../common/services/calendar-service';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';
import { ToastService } from '../../../common/services/toast';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { user } from '../../../../../public/datos/datos';
import { UserData } from '../../../interfaces/user';
import storeService from '../../../common/services/store-service';
import { CalendarCreateReq } from '../../../interfaces/calendario-req-res';

@Component({
  selector: 'app-calendar-monthly-day',
  imports: [CommonModule, ModalActions, SelectModule],
  templateUrl: './calendar-monthly-day.html',
  styleUrl: './calendar-monthly-day.css'
})
export class CalendarMonthlyDay {

  item = input.required<CalendarItem>()
  itemData = signal<CalendarItem>({} as CalendarItem)
    user = signal<UserData>(user);

  protected calendarOptions;
  modalKey = signal<string>("");
  private deleteItemID = signal(0);
  private valueSelected = signal<string>("");
  protected toggleSelect = signal<boolean>(false);

  private toast = inject(ToastService);
    private calendarService= inject(CalendarService)

    constructor(){
      effect(()=>
      this.itemData.set(this.item())
    )
      this.init();
      const values = Object.values(CalendarItemType);
      this.calendarOptions = signal<string[]>(values)
    }

    async init(){
      const user = await storeService.getWhenExist<UserData>("user-data");
      this.user.set(user);
    }

async delete(id:number){
  this.deleteItemID.set(id);
  this.modalKey.set("delete");
}

closeModal(result:string){
  this.modalKey.set("");

  result === "delete" ? this.deleteItem() : this.deleteItemID.set(0);
  result === "save" && this.addItem(this.valueSelected()) ;
  this.valueSelected.set("")

}

blur = () => setTimeout(() => {this.toggleSelect.set(false)}, 200);

openSelect = () => this.toggleSelect.set(true)

onSelect = (event:SelectChangeEvent) => {
  this.modalKey.set("save")
  this.valueSelected.set(event.value)
}

private async addItem(value:string){
  const req:CalendarCreateReq = {
          empleado_id:this.user().empleado_id,
      estado:value,
      fecha:this.item().fecha
        }
const {data,error} = await this.calendarService.createCalendarItem(req);
  if(!data) return this.toast.show("calendar-create-error");
    this.toast.show("calendar-create-success");
    const currentItems = this.itemData().items
    this.itemData().items = [data,...currentItems];
}

private async deleteItem(){
  const {data,error} = await this.calendarService.deleteCalendarItem(this.deleteItemID());
  if(!data) return this.toast.show("calendar-delete-error");
    this.toast.show("calendar-delete-success");
    this.itemData.update((obj)=> ({...obj, items:this.itemData().items.filter((i)=> i.id !=  this.deleteItemID())}) )
  this.deleteItemID.set(0)
}

}
