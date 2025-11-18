import { Component, effect, input, output } from '@angular/core';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';
import { EmployeeResponse } from '../../../interfaces/employee-response';
import { UserData } from '../../../interfaces/user';

@Component({
  selector: 'app-employee-item',
  imports: [CheckboxModule, ButtonModule, AvatarModule, FormsModule, CommonModule] ,
  templateUrl: './employee-item.html',
  styleUrl: './employee-item.css'
})
export class EmployeeItem {
  protected checked = output<boolean>();
  protected edit = output<EmployeeResponse>();
  employee = input.required<EmployeeResponse>()
  user = input<UserData>()

  onchecked(e:CheckboxChangeEvent){
    this.checked.emit(e.checked);
  }

  constructor(){
    effect(()=> {
      this.employee().estado = this.employee().estado || "Ausente";
    } )
  }

  getTimeInCompany(){
      const { fecha_ingreso, fecha_egreso} = this.employee();
      return calculateIntervalTime(fecha_ingreso, fecha_egreso);
    }

    editEmployee = () => this.edit.emit(this.employee());


}
