import { Component, input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { EmployeeData } from '../../../interfaces/employee-data';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-employee-item',
  imports: [CheckboxModule, ButtonModule, AvatarModule  ] ,
  templateUrl: './employee-item.html',
  styleUrl: './employee-item.css'
})
export class EmployeeItem {

  employee = input.required<EmployeeData>()


}
