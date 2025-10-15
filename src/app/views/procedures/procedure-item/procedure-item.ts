import { Component, input } from '@angular/core';
import { ProcedureItemData } from '../../../interfaces/procedures-item';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-procedure-item',
  imports: [PaginatorModule, AvatarModule, CommonModule, ButtonModule ],
  templateUrl: './procedure-item.html',
  styleUrl: './procedure-item.css'
})
export class ProcedureItem {

  item = input.required<ProcedureItemData>()



}
