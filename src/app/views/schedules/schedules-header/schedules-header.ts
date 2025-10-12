import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-schedules-header',
  imports: [ IconFieldModule, ReactiveFormsModule, InputIconModule],
  templateUrl: './schedules-header.html',
  styleUrl: './schedules-header.css'
})
export class SchedulesHeader {

  fb = inject(FormBuilder);
  filtersForm;

  constructor(){
    this.filtersForm = this.fb.group({
      name: [""],
      rol: [""]
    })
  this.filtersForm.valueChanges.pipe(
    debounceTime(300)
  ).subscribe({
    next:(v)=> console.log(v)
  })
  }

}
