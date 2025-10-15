import { Component, OnDestroy, signal } from '@angular/core';
import { EmployeeHeader } from './employee-header/employee-header';
import { EmployeeProfile } from '../../interfaces/employee-profile';
import { EmployeeItem } from "./employee-item/employee-item";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { EmployeeFilters } from '../../interfaces/employee-filters';
import { EmployeeForm } from './employee-form/employee-form';
import { generateEmployeeData } from '../../common/utils/functions/generate-employees';
@Component({
  selector: 'app-employee',
  imports: [EmployeeHeader, EmployeeItem, PaginatorModule, EmployeeForm],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export default class Employee implements OnDestroy {
itemsPage = signal<number>(0);
protected workstations = signal<string[]>([""]);
protected status = signal<string[]>([""]);
protected viewEmployeeFormModal = signal<boolean>(false);
editEmployee = signal<EmployeeProfile | undefined>(undefined)
protected employees = signal<EmployeeProfile[]>([]);
private employeesData = signal<EmployeeProfile[]>([]);
protected employeesFiltered = signal<EmployeeProfile[]>([]);

private currentSizeItems:PaginatorState = {first:0} ;
private subscribeResize: Subscription;


constructor(){
  this.employeesData.set(generateEmployeeData());
  this.employeesFiltered.set(this.employeesData());
  const workstations = new Set<string>;
  const status = new Set<string>;
  this.employeesData().forEach((e) => workstations.add(e.workstation) && status.add(e.status))
  this.workstations.set([...workstations]);
  this.status.set([...status]);

  this.subscribeResize = fromEvent(window,'resize').pipe(
    debounceTime(300)
  ).subscribe({
    next:()=>this.getItemsPeerPage()
  })

  this.getItemsPeerPage();
  this.employeesFiltered.set(this.employeesData());
  this.onPageChange(this.currentSizeItems);
}

private getItemsPeerPage(){
  const height = window.innerHeight;
  this.itemsPage.set(Math.trunc((height  - 204) / 56));
  this.onPageChange(this.currentSizeItems)
}

openEmployeeModal(employee:EmployeeProfile | undefined = undefined){
  this.editEmployee.update(()=>employee);
  this.viewEmployeeFormModal.set(true);
}

closeEmployeeModal(){
  this.editEmployee.set(undefined);
  this.viewEmployeeFormModal.set(false);
}

addEmployee(employee:EmployeeProfile){
  if(this.editEmployee()){
    this.editEmployee.set(undefined);
    this.employeesData.update((employees)=> employees.map((e)=> e.id == employee.id ? employee : e ));
  } else{
    this.employeesData.update((employees)=> [employee,...employees]);
  }
  this.filterEmployees({} as EmployeeFilters);
  this.viewEmployeeFormModal.set(false);
}

checkItem(event:boolean,id:string){
  this.employees.update((employees)=> employees.map((e)=> e.id === id ? {...e, checked:event} : e ))
}

filterEmployees(filters:EmployeeFilters){
  this.employeesFiltered.set(this.employeesData());
  this.employeesFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["workstation"]  ? e.workstation == filters["workstation"] : true;
    const statusMatch = filters["status"] ? e.status == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.name.toLowerCase().includes(filters["name"].toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));

  this.onPageChange(this.currentSizeItems);
}

  onPageChange(e:PaginatorState){
    this.currentSizeItems = e;
    this.employees.update(()=> this.employeesFiltered().slice(e.first,e.first! + this.itemsPage()))
  }

  deleteEmployees(){
    const checked = this.employees().filter((e) => e.checked ).map((e)=>e.id);
    this.employeesData.update((employees)=>employees.filter((e)=> !checked.includes(e.id) ))
    this.filterEmployees({} as EmployeeFilters);
  }

  ngOnDestroy(): void {
    this.subscribeResize.unsubscribe();
  }

}


