import { Component, inject, output, signal } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';
import { ShiftEmployeesItem } from '../../../interfaces/shift-item';

@Component({
  selector: 'app-shift-header',
  imports: [SelectModule, InputIconModule, ReactiveFormsModule, CommonModule, IconFieldModule],
  templateUrl: './shift-header.html',
  styleUrl: './shift-header.css'
})
export class ShiftHeader {

  protected shifts;
  protected shiftSelected = signal<{shift:string,text:string}>({shift:'',text:''});

  setShift = output<keyof ShiftEmployeesItem>()

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
    debounceTime(300)
  ).subscribe({
    next:(v)=> console.log(v)
  })
  }

  setStatusSelected = (e:SelectChangeEvent)=>{
    this.shiftSelected.set(e.value || "")
    this.setShift.emit(e.value?.shift || "");
  }


}
