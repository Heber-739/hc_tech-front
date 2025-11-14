import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { debounceTime } from 'rxjs';
import { ProcedureHeaderForm } from '../../../interfaces/forms-interfaces';
import { METTER_OPTIONS, STATUS_OPTIONS } from '../../../common/utils/functions/procedures-generator';
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { user } from '../../../../../public/datos/datos';
import { Companies } from '../../../interfaces/company';
import { ToastService } from '../../../common/services/toast';

@Component({
  selector: 'app-procedures-header',
  imports: [ReactiveFormsModule,SelectModule, IconFieldModule, InputIconModule, ButtonModule, ReactiveFormsModule ],
  templateUrl: './procedures-header.html',
  styleUrl: './procedures-header.css'
})
export class ProceduresHeader {

  protected status = signal<string[]>(STATUS_OPTIONS)
  protected metters = signal<string[]>(METTER_OPTIONS)
  protected user = signal<UserData>(user);

  filters = output<ProcedureHeaderForm>()
  addNew = output<void>()
  private toast = inject(ToastService);

  private fb = inject(FormBuilder)
  filtersForm = this.fb.group({
    name:[],
    matter:[],
    status:[]
  })

  constructor(){
    this.init();
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

  async init(){
    const user = await storeService.getWhenExist<UserData>("user-data");
    this.user.set(user);
  }

  add = ()=> {
    const company = storeService.get<Companies>("company-default-selected");
  if(!company?.id) return this.toast.show("empty-company");
    this.addNew.emit();
  }

}
