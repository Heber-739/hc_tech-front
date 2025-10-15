import { Component, input, signal } from '@angular/core';
import { ProceduresHeader } from "./procedures-header/procedures-header";
import { ProcedureHeaderForm } from '../../interfaces/procedure-header-form';
import { ProcedureItem } from './procedure-item/procedure-item';
import { generateProcedureItem } from '../../common/utils/functions/procedures-generator';
import { ProcedureItemData } from '../../interfaces/procedures-item';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-procedures',
  imports: [ProceduresHeader, ProcedureItem, PaginatorModule],
  templateUrl: './procedures.html',
  styleUrl: './procedures.css'
})
export default class Procedures {
  protected itemsPage = 6;

  itemData = input<ProcedureItemData>()

  protected proceduresData;
  procedures = signal<ProcedureItemData[]>([]);
  proceduresFiltered = signal<ProcedureItemData[]>([]);

  private currentSizeItems:PaginatorState = {first:0} ;


  constructor(){
    this.proceduresData = signal<ProcedureItemData[]>(generateProcedureItem())
    this.proceduresFiltered.set(this.proceduresData());
    this.onPageChange(this.currentSizeItems)
  }

  filterProcedures(filters:ProcedureHeaderForm){
    this.proceduresFiltered.set(this.proceduresData());
  this.proceduresFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["matter"]  ? e.metter == filters["matter"] : true;
    const statusMatch = filters["status"] ? e.status == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.employee.name.toLowerCase().includes((filters["name"] || "").toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));
  this.onPageChange({first:0})
  }



  onPageChange(e:PaginatorState){
    this.currentSizeItems = e;
    this.procedures.update(()=> this.proceduresFiltered().slice(e.first,e.first! + this.itemsPage))
  }

}
