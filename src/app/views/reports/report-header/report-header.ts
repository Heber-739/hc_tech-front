import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ReportHeaderForm } from '../../../interfaces/forms-interfaces';
import { EMPLOYEE_STATUS } from '../../../common/constants/status';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-report-header',
  imports: [SelectModule, IconFieldModule, InputIconModule, ReactiveFormsModule ],
  templateUrl: './report-header.html',
  styleUrl: './report-header.css'
})
export class ReportHeader {

  protected status = EMPLOYEE_STATUS;
  workstations = input.required<string[]>();


    filters = output<ReportHeaderForm>()

  private fb = inject(FormBuilder)
  filtersForm = this.fb.group({
    name:[],
    workstation:[],
    status:[]
  })

  constructor(){
        this.filtersForm.valueChanges.pipe(
          debounceTime(300)
        ).subscribe({
          next:(value)=> this.filters.emit({
            name:value["name"] || undefined,
            workstation:value["workstation"] || undefined,
            status:value["status"] || undefined
          })
        })
      }



  }

