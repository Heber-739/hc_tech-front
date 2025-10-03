import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-employee-header',
  imports: [SelectModule, IconFieldModule, InputIconModule, ButtonModule, CheckboxModule ],
  templateUrl: './employee-header.html',
  styleUrl: './employee-header.css'
})
export class EmployeeHeader {

}
