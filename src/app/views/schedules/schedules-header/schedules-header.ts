import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import storeService from '../../../common/services/store-service';
import { StringsFilters } from '../../../interfaces/shift-filters';

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
    debounceTime(400),
    distinctUntilChanged()
  ).subscribe({
    next:(v)=> {
      const name = v.name || ""
      const rol = v.rol || ""
      storeService.set<StringsFilters>("schedules-filters",{name,rol})}
  })
  }

}
