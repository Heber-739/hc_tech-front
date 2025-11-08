import { Component, input, output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { EmployeeFilters } from '../../../interfaces/employee-filters';
import { debounceTime, first } from 'rxjs';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';
import { UserData } from '../../../interfaces/user';
import storeService from '../../../common/services/store-service';
import { user } from '../../../../../public/datos/datos';

@Component({
  selector: 'app-employee-header',
  imports: [SelectModule, IconFieldModule, InputIconModule, ButtonModule, CheckboxModule, ReactiveFormsModule, ModalActions ],
  templateUrl: './employee-header.html',
  styleUrl: './employee-header.css'
})
export class EmployeeHeader {
  workstations = input.required<string[]>();
  status = input.required<string[]>();

  nameInput = new FormControl("");
  protected filters:EmployeeFilters = {} as EmployeeFilters;

  filtersSelected = output<EmployeeFilters>();
  allChecked = output<boolean>();

  modalKey = signal<string>("");
  user = input<UserData>(user);

  confirmDelete = output<void>();
  addEmployee = output<void>();

  constructor(){

    this.nameInput.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next:(text)=>{
        this.filters["name"] = text?.trim() || "";
        this.filtersSelected.emit(this.filters);
      }
    })
  }

  add(){
    this.addEmployee.emit()
  }

  setWorkstationSelected(e:SelectChangeEvent){
    this.filters["workstation"] = e.value;
    this.filtersSelected.emit(this.filters);

  }

  allItemsChecked = (res:CheckboxChangeEvent) => this.allChecked.emit(res.checked)

  setStatusSelected(e:SelectChangeEvent){
    this.filters["status"] = e.value;
    this.filtersSelected.emit(this.filters);
  }

  deleteAction = () => this.modalKey.set("delete");

  confirm(event:string){
    this.modalKey.set("");
    if(event !== "delete") return;
    this.confirmDelete.emit();
  }
}
