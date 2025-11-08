import { Component, inject, output, signal } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, filter } from 'rxjs';
import { ShiftEmployeesItem } from '../../../interfaces/shift-item';
import { ShiftFilters } from '../../../interfaces/shift-filters';
import storeService from '../../../common/services/store-service';

@Component({
  selector: 'app-shift-header',
  imports: [SelectModule, InputIconModule, ReactiveFormsModule, CommonModule, IconFieldModule],
  templateUrl: './shift-header.html',
  styleUrl: './shift-header.css'
})
export class ShiftHeader {

  protected shifts;
  protected shiftSelected = signal<{shift:string,text:string}>({shift:'',text:''});

  protected filterConfigs = signal<ShiftFilters>({name:"",rol:"",shift:'Mañana'})

  fb = inject(FormBuilder);
  filtersForm;

  constructor(){
    this.filtersForm = this.fb.group({
      name: [""],
      rol: [""]
    })

    this.shifts = signal([{
      shift: "Mañana",
      text: "Mañana 7:00 a 15:00 hs"
    },
    {
      shift:"Tarde",
      text: "Tarde 15:00 a 23:00 hs"
    },
    {
      shift:"Noche",
      text: "Noche 23:00 a 07:00 hs"
    }
  ])

  this.filtersForm.valueChanges.pipe(
    debounceTime(300),
  ).subscribe({
    next:(v)=> {
      const name = v.name || ""
      const rol = v.rol || ""
      this.filterConfigs.update((e)=> ({...e,name,rol}) )
      storeService.set<ShiftFilters>("change-shift-filters",this.filterConfigs())
    }
  })
}

setStatusSelected = (event:SelectChangeEvent)=>{
  this.shiftSelected.set(event.value || "")
  this.filterConfigs.update((e)=> ({...e,shift:event.value}) )
  storeService.set<ShiftFilters>("change-shift-filters",this.filterConfigs())
}


}
