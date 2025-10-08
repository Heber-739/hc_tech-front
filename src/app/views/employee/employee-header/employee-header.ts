import { Component, input, output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { EmployeeFilters } from '../../../interfaces/employee-filters';
import { debounceTime } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-employee-header',
  imports: [SelectModule, IconFieldModule, InputIconModule, ButtonModule, CheckboxModule, ReactiveFormsModule, ConfirmDialog ],
  providers:[ConfirmationService],
  templateUrl: './employee-header.html',
  styleUrl: './employee-header.css'
})
export class EmployeeHeader {
  workstations = input.required<string[]>();
  status = input.required<string[]>();

  nameInput = new FormControl("");
  protected filters:EmployeeFilters = {};

  filtersSelected = output<EmployeeFilters>();
  confirmDelete = output<void>();
  addEmployee = output<void>();

  constructor(private confirmationService: ConfirmationService){
    this.nameInput.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next:(text)=>{
        this.filters["name"] = text || undefined;
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

  setStatusSelected(e:SelectChangeEvent){
    this.filters["status"] = e.value;
    this.filtersSelected.emit(this.filters);
  }

  deleteAction(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Eliminar permanentemente?',
            header: 'Confirmación requerida',
            icon: 'pi pi-exclamation-triangle',
            rejectLabel: 'Cancelar',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'primary',
                outlined: true,
                focus:false

            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger',
            },
            accept: () => {
                this.confirmDelete.emit();
            }
        });
    }
}
