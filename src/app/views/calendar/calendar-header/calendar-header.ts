import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-calendar-header',
  imports: [IconFieldModule, ReactiveFormsModule, InputIconModule, ButtonModule],
  templateUrl: './calendar-header.html',
  styleUrl: './calendar-header.css'
})
export class CalendarHeader {
  filterName;

  constructor(){
    this.filterName = new FormControl("")
  this.filterName.valueChanges.pipe(
    debounceTime(300)
  ).subscribe({
    next:(v)=> (()=> {})()
  })
  }


    exit() {
  }

  submit() {
  }

}
