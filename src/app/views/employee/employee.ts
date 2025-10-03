import { Component, signal } from '@angular/core';
import { EmployeeHeader } from './employee-header/employee-header';
import { EmployeeData } from '../../interfaces/employee-data';
import { EmployeeItem } from "./employee-item/employee-item";
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-employee',
  imports: [EmployeeHeader, EmployeeItem, PaginatorModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export default class Employee {

protected employees;
private employeesData: EmployeeData[] = [];

constructor(){
  this.employeesData = this.generateEmployeeData()
  this.employees = signal<EmployeeData[]>([...this.employeesData.slice(0,11)])
}

generateEmployeeData(): EmployeeData[] {
  const data: EmployeeData[] = [];
  const roles: string[] = ["Desarrollador Frontend", "Desarrollador Backend", "Diseñador UX/UI", "Gerente de Proyecto", "Analista de Datos", "Especialista en QA"];
  const schedules: string[] = ["7:00 - 15:00", "15:00 - 23:00", "23:00 - 07:00"];
  const statuses: string[] = ["Activo", "Vacaciones", "Inactivo", "Ausente"];
  const names: string[] = ["Sofía","Alejandro","Valentina","Sebastián","Camila","Mateo","Isabella","Nicolás","Mariana","Diego","Lucía","Gabriel","Elena","Daniel","Paula","Javier","Andrea","Ricardo","Valeria","Manuel"
];
  const surnames: string[] = ["García","Rodríguez","González","Fernández","López","Martínez","Sánchez","Pérez","Gómez","Martín","Jiménez","Ruiz","Hernández","Díaz","Moreno","Muñoz","Álvarez","Romero","Alonso","Gutiérrez"
];

  // Función auxiliar para obtener un elemento aleatorio de un array
  const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  // Función auxiliar para generar un tiempo aleatorio en la empresa (ej. "2 años 5 meses")
  const getRandomTimeInCompany = () => `${Math.floor(Math.random() * 10) + 1} años ${Math.floor(Math.random() * 12)} meses`;

  for (let i = 1; i <= 300; i++) {
    const employee: EmployeeData = {
      name: ` ${getRandomItem(surnames)} ${getRandomItem(names)}`,
      rol: getRandomItem(roles),
      work_schedule: getRandomItem(schedules),
      status: getRandomItem(statuses),
      time_in_company: getRandomTimeInCompany(),
      image: "https://i.pinimg.com/originals/6a/0d/18/6a0d184b73dc7bf9b47cb755ef8d92cb.png", // Misma URL para todos
    };
    data.push(employee);
  }

  return data;
}



onPageChange(e:any){
  let event: {
        "page":number,
        "first":number,
        "rows":number,
        "pageCount":number,
    } = e;

console.log(event)
  }

}


