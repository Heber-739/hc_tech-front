import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-empleados',
  imports: [SelectModule, IconFieldModule, InputIconModule, ButtonModule, CheckboxModule ],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
  standalone:true
})
export default class Empleados {

}
