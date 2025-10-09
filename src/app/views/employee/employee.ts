import { Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { EmployeeHeader } from './employee-header/employee-header';
import { EmployeeListItemData } from '../../interfaces/employee-data';
import { EmployeeItem } from "./employee-item/employee-item";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { v4 } from 'uuid'
import { EmployeeFilters } from '../../interfaces/employee-filters';
import { AddEmployee } from "./add-employee/add-employee";
import { employeeRols } from '../../common/constants/rols';
import { employeeStatus } from '../../common/constants/status';
@Component({
  selector: 'app-employee',
  imports: [EmployeeHeader, EmployeeItem, PaginatorModule, AddEmployee],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export default class Employee implements OnDestroy {
protected itemsPage:number = 0;
protected workstations = signal<string[]>([""]);
protected status = signal<string[]>([""]);
protected viewEmployeeFormModal = signal<boolean>(false);

protected employees = signal<EmployeeListItemData[]>([]);
private employeesData = signal<EmployeeListItemData[]>([]);
protected employeesFiltered = signal<EmployeeListItemData[]>([]);

private currentFilters:PaginatorState = {first:0} ;
private subscribeResize: Subscription;


constructor(){
  this.subscribeResize = fromEvent(window,'resize').pipe(
    debounceTime(300)
  ).subscribe({
    next:()=>this.getItemsPeerPage()
  })

  this.getItemsPeerPage();
  this.employeesData.set(this.generateEmployeeData());
  const workstations = new Set<string>;
  const status = new Set<string>;
  this.employeesData().forEach((e) => workstations.add(e.workstation) && status.add(e.status))
  this.workstations.set([...workstations]);
  this.status.set([...status]);
  this.employeesFiltered.set(this.employeesData());
  this.onPageChange(this.currentFilters);
}

private getItemsPeerPage(){
  const height = window.innerHeight;
  this.itemsPage = Math.trunc((height  - 170) / 70);
}

generateEmployeeData(): EmployeeListItemData[] {
  const data: EmployeeListItemData[] = [];
  const roles: string[] = employeeRols;
  const workstations: string[] = ["Desarrollador Frontend", "Desarrollador Backend", "Diseñador UX/UI", "Gerente de Proyecto", "Analista de Datos", "Especialista en QA"];
  const schedules: string[] = ["7:00 - 15:00", "15:00 - 23:00", "23:00 - 07:00"];
  const statuses: string[] = employeeStatus;
  const names: string[] = ["Sofía","Alejandro","Valentina","Sebastián","Camila","Mateo","Isabella","Nicolás","Mariana","Diego","Lucía","Gabriel","Elena","Daniel","Paula","Javier","Andrea","Ricardo","Valeria","Manuel"
];
  const surnames: string[] = ["García","Rodríguez","González","Fernández","López","Martínez","Sánchez","Pérez","Gómez","Martín","Jiménez","Ruiz","Hernández","Díaz","Moreno","Muñoz","Álvarez","Romero","Alonso","Gutiérrez"
];

  // Función auxiliar para obtener un elemento aleatorio de un array
  const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  // Función auxiliar para generar un tiempo aleatorio en la empresa (ej. "2 años 5 meses")
  const getRandomTimeInCompany = () => `${Math.floor(Math.random() * 10) + 1} años ${Math.floor(Math.random() * 12)} meses`;

  for (let i = 1; i <= 300; i++) {
    const employee: EmployeeListItemData = {
      id: v4(),
      name: ` ${getRandomItem(surnames)} ${getRandomItem(names)}`,
      rol: getRandomItem(roles),
      workstation: getRandomItem(workstations),
      work_schedule: getRandomItem(schedules),
      status: getRandomItem(statuses),
      time_in_company: getRandomTimeInCompany(),
      image: "https://i.pinimg.com/originals/6a/0d/18/6a0d184b73dc7bf9b47cb755ef8d92cb.png", // Misma URL para todos
      checked:false
    };
    data.push(employee);
  }
  return data;
}

openEmployeeModal(){
  this.viewEmployeeFormModal.set(true);
}
closeEmployeeModal(){
  this.viewEmployeeFormModal.set(false);
}

addEmployee(employee:EmployeeListItemData){
  this.employeesData.update((employees)=> [employee,...employees]);
  this.filterEmployees({});
  this.viewEmployeeFormModal.set(false);
}

checkItem(event:boolean,id:string){
  this.employees.update((employees)=> employees.map((e)=> e.id === id ? {...e, checked:event} : e ))
}

filterEmployees(filters:EmployeeFilters){
  this.employeesFiltered.update(()=>this.employeesData());
  filters["workstation"] && this.employeesFiltered.update((employees)=>employees.filter((e)=> e.workstation == filters["workstation"]))
  filters["status"] && this.employeesFiltered.update((employees)=> employees.filter((e)=>e.status == filters["status"]))
  filters["name"] && this.employeesFiltered.update((employees)=> employees.filter((e)=> e.name.includes(filters["name"] || '')))
  this.onPageChange(this.currentFilters);
}

  onPageChange(e:PaginatorState){
    this.currentFilters = e;
    this.employees.update(()=> this.employeesFiltered().slice(e.first,e.first! + this.itemsPage))
  }

  deleteEmployees(){
    const checked = this.employees().filter((e) => e.checked ).map((e)=>e.id);
    this.employeesData.update((employees)=>employees.filter((e)=> !checked.includes(e.id) ))
    this.filterEmployees({});
  }

  ngOnDestroy(): void {
    this.subscribeResize.unsubscribe();
  }

}


