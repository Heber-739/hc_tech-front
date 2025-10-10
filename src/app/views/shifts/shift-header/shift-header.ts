import { Component, inject, signal } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { ShiftItem } from '../../../interfaces/shift-item';
import { getWeekShifts } from '../../../common/utils/functions/generate-shifts';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-shift-header',
  imports: [SelectModule, InputIconModule, ReactiveFormsModule, CommonModule, IconFieldModule],
  templateUrl: './shift-header.html',
  styleUrl: './shift-header.css'
})
export class ShiftHeader {

  protected shiftWeek = signal<ShiftItem[]>([])
  protected shifts;
  protected shiftSelected = signal<{shift:string,text:string}>({shift:'',text:''});

  fb = inject(FormBuilder);
  filtersForm;

  constructor(){
    this.shiftWeek.set(getWeekShifts());
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


  setWorkstationSelected = (e:any)=>{}
  setStatusSelected = (e:SelectChangeEvent)=>{
    console.log({e})
    this.shiftSelected.set(e.value || "")
  }




}
