import { Component, input, output } from '@angular/core';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeProfile } from '../../../interfaces/employee-profile';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';

@Component({
  selector: 'app-employee-item',
  imports: [CheckboxModule, ButtonModule, AvatarModule, FormsModule, CommonModule] ,
  templateUrl: './employee-item.html',
  styleUrl: './employee-item.css'
})
export class EmployeeItem {
  protected checked = output<boolean>();
  protected edit = output<EmployeeProfile>();
  employee = input.required<EmployeeProfile>()

  onchecked(e:CheckboxChangeEvent){
    this.checked.emit(e.checked);
  }

  getTimeInCompany(){
      const initDate = new Date(this.employee().entry_date)
      const endDate = new Date(this.employee().discharge_date)
      return calculateIntervalTime(initDate,endDate);
    }

    editEmployee(){
      this.edit.emit(this.employee());
    }

}
