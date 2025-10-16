import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { debounceTime } from 'rxjs';
import { ProcedureHeaderForm } from '../../../interfaces/forms-interfaces';
import { METTER_OPTIONS, STATUS_OPTIONS } from '../../../common/utils/functions/procedures-generator';

@Component({
  selector: 'app-procedures-header',
  imports: [ReactiveFormsModule,SelectModule, IconFieldModule, InputIconModule, ButtonModule, ReactiveFormsModule ],
  templateUrl: './procedures-header.html',
  styleUrl: './procedures-header.css'
})
export class ProceduresHeader {

  protected status = signal<string[]>(STATUS_OPTIONS)
  protected metters = signal<string[]>(METTER_OPTIONS)

  filters = output<ProcedureHeaderForm>()

  private fb = inject(FormBuilder)
  filtersForm = this.fb.group({
    name:[],
    matter:[],
    status:[]
  })

  constructor(){
    this.filtersForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe({
      next:(value)=> this.filters.emit({
        name:value["name"] || undefined,
        matter:value["matter"] || undefined,
        status:value["status"] || undefined
      })
    })
  }


}
