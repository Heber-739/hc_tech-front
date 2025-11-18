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

  protected shifts: {[key:string]:any};
  protected shiftSelected = signal<{shift:string,text:string}>({shift:'',text:''});

  protected filterConfigs = signal<ShiftFilters>({name:"",rol:"",shift:'Mañana'})

  fb = inject(FormBuilder);
  filtersForm;

  constructor(){
    this.filtersForm = this.fb.group({
      name: [""],
      rol: [""]
    })

    this.shifts = {
      Mañana:{
      shift: "Mañana",
      text: "Mañana 6:00 a 14:00 hs"
    },
    Tarde:{
      shift:"Tarde",
      text: "Tarde 14:00 a 22:00 hs"
    },
    Noche:{
      shift:"Noche",
      text: "Noche 22:00 a 06:00 hs"
    }
  }

  const selected = this.shifts["Mañana"];
  this.shiftSelected.set(selected);

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

setStatusSelected = (event:{value:keyof ShiftEmployeesItem})=>{
  const selected = this.shifts[event.value];
  if(!selected) return;
  this.shiftSelected.set(selected);
  this.filterConfigs.update((e)=> ({...e,shift:event.value}) )
  storeService.set<ShiftFilters>("change-shift-filters",this.filterConfigs())
}


}
