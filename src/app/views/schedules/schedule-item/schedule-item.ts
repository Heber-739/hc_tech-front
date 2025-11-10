import { AfterViewInit, Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DatePickerModule } from 'primeng/datepicker';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';
import { ScheduleShiftItem } from '../../../interfaces/schedules';
import { ShiftService } from '../../../common/services/shift-service';
import { ToastService } from '../../../common/services/toast';

@Component({
  selector: 'app-schedule-item',
  imports: [AvatarModule, DatePickerModule, ModalActions, FormsModule],
  templateUrl: './schedule-item.html',
  styleUrl: './schedule-item.css'
})
export class ScheduleItem {
  item = input.required<ScheduleShiftItem>();
  showConfirm = signal<string>("");

  entrada: Date | undefined = undefined;
  salida:Date | undefined =  undefined;

  private flag:'entrada' | 'salida' | null = null;

  protected shiftService = inject(ShiftService);
  protected toast = inject(ToastService);


  constructor(){
    effect(()=>{
      this.salida = this.item().marcaje.salida || undefined;
      this.entrada = this.item().marcaje.entrada || undefined;
    })
  }

    saveDate(tipo:'entrada' | 'salida'){
      if(!this.entrada && !this.salida) return;
    this.flag = tipo;
    this.showConfirm.update(()=> "save")
  }

  confirm(save:string){
    this.showConfirm.update(()=> "");

    if(save === "save"){

      this.flag == 'entrada' && this.entryRegister()
      this.flag == 'salida' && this.exitRegister()

    } else {
      this.flag == 'entrada' && (this.entrada = undefined);
      this.flag == 'salida' && (this.salida = undefined);
    }

  }

async entryRegister(){
  if(!this.entrada) return;
  let marcaje = this.item().marcaje;
  marcaje.entrada = this.entrada;
  const {data,error} =  await this.shiftService.updateEntryShift(marcaje)
  if(!data) {
    this.toast.show("shift-update-error");
    delete this.item().marcaje.entrada
  } else {
    this.toast.show("shift-update-success");
    this.item().marcaje = data;
  }
}

async exitRegister(){
  if(!this.salida) return;
  let marcaje = this.item().marcaje
  marcaje.salida = this.salida;
  const {data,error} = await this.shiftService.updateExitShift(marcaje)
  if(!data) {
    this.toast.show("shift-update-error");
    delete this.item().marcaje.salida
  } else {
    this.toast.show("shift-update-success");
    this.item().marcaje = data;
  }
}
}
