import { Component, inject, OnDestroy, signal } from '@angular/core';
import { EmployeeHeader } from './employee-header/employee-header';
import { EmployeeItem } from "./employee-item/employee-item";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { debounceTime, filter, first, fromEvent, Subscription } from 'rxjs';
import { EmployeeFilters } from '../../interfaces/employee-filters';
import { EmployeeForm } from './employee-form/employee-form';
import storeService from '../../common/services/store-service';
import { UserData } from '../../interfaces/user';
import { EmployeeResponse } from '../../interfaces/employee-response';
import { EmployeeService } from '../../common/services/employee';
import { user } from '../../../../public/datos/datos';
import { ToastService } from '../../common/services/toast';
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
  editEmployee = signal<EmployeeResponse | undefined>(undefined)
  protected employees = signal<EmployeeResponse[]>([]);
  user = signal<UserData>(user);

  private employeesData = signal<EmployeeResponse[]>([]);
  protected employeesFiltered = signal<EmployeeResponse[]>([]);


  private currentSizeItems:PaginatorState = {first:0} ;
  private subscriptions: Subscription = new Subscription();

  private employeeService = inject(EmployeeService);
  private toast = inject(ToastService);


constructor(){
  storeService.getObservable<UserData>("user-data").pipe(
      first((data)=>!!data)
    ).subscribe(data => this.user.update(()=> data))

    if(!user.empleado_id) this.toast.show("welcome-admin")
  this.getEmployees()

  this.subscriptions.add(fromEvent(window,'resize').pipe(
    debounceTime(300)
  ).subscribe({
    next:()=>this.getItemsPeerPage()
  }))
  this.subscriptions.add(storeService.getObservable("update-employees").pipe(
    filter((val)=>!!val)
  ).subscribe({
    next:()=> this.getEmployees(true)
  }))
  storeService.set<string>("title-description","Listado de empleados")


}

async getEmployees(callService:boolean = false){
  const {data, error} = await this.employeeService.getEmployees(callService)
  if(!data) throw error;

  this.employeesData.set(data);
  this.employeesFiltered.set(data);
    const workstations = new Set<string>;
  const status = new Set<string>;
  this.employeesData().forEach((e) => workstations.add(e.puesto) && status.add(e.estado))
  this.workstations.set([...workstations]);
  this.status.set([...status]);
  this.getItemsPeerPage();

}

private getItemsPeerPage(){
  const height = window.innerHeight;
  this.itemsPage.set(Math.trunc((height  - 204) / 56));
  this.onPageChange(this.currentSizeItems)
}

openEmployeeModal(employee:EmployeeResponse | undefined = undefined){
  this.editEmployee.update(()=> employee);
  this.viewEmployeeFormModal.set(true);
}

closeEmployeeModal(){
  this.editEmployee.set(undefined);
  this.viewEmployeeFormModal.set(false);
}

addEmployee(employee:EmployeeResponse){
  if(this.editEmployee()){
    this.editEmployee.set(undefined);
    this.employeesData.update((employees)=> employees.map((e)=> e.id == employee.id ? employee : e ));
  } else{
    this.employeesData.update((employees)=> [employee,...employees]);
  }
  this.filterEmployees({} as EmployeeFilters);
  this.viewEmployeeFormModal.set(false);
}

checkItem(event:boolean,id:number){
  this.employees.update((employees)=> employees.map((e)=> e.id === id ? {...e, checked:event} : e ))
}

filterEmployees(filters:EmployeeFilters){
  this.employeesFiltered.set(this.employeesData());
  this.employeesFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["workstation"]  ? e.puesto == filters["workstation"] : true;
    const statusMatch = filters["status"] ? e.estado == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.nombre.toLowerCase().includes(filters["name"].toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));

  this.onPageChange(this.currentSizeItems);
}

  onPageChange(e:PaginatorState){
    this.currentSizeItems = e;
    const items = this.employeesFiltered().slice(e.first,e.first! + this.itemsPage());
    this.employees.update(()=> items)
  }

  async deleteEmployees(){
    const checkeds = this.employees().filter((e) => e.checked ).map((e)=>e.id);
    const {data,error} = await this.employeeService.deleteEmployees(checkeds);
    if(!data) return;
    this.employeesData.update((employees)=>employees.filter((e)=> !data.includes(e.id)))
    this.filterEmployees({} as EmployeeFilters);
  }

  markAllChecked(event:boolean){
    this.employees.update((emp)=> emp.map((e)=>({...e,checked:event })))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}


