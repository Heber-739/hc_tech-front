import { Component, input, output } from '@angular/core';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { EmployeeData } from '../../../interfaces/employee-data';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-item',
  imports: [CheckboxModule, ButtonModule, AvatarModule, FormsModule, CommonModule] ,
  templateUrl: './employee-item.html',
  styleUrl: './employee-item.css'
})
export class EmployeeItem {
  protected checked = output<boolean>();
  employee = input.required<EmployeeData>()

  onchecked(e:CheckboxChangeEvent){
    this.checked.emit(e.checked);
  }

}
