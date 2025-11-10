import { Component, signal } from '@angular/core';
import { ReportHeader } from "./report-header/report-header";
import { ReportHeaderForm } from '../../interfaces/forms-interfaces';
import { ReportEmployeeItem } from "./report-employee-item/report-employee-item";
import { generateEmployeesStatics } from '../../common/utils/functions/generate-staticals';
import { ReportEmployeeData } from '../../interfaces/report-employee';
import { ReportCharts } from "./report-charts/report-charts";
import { ChartService } from './service/chart-seervice';

@Component({
  selector: 'app-reports',
  imports: [ReportHeader, ReportEmployeeItem, ReportCharts],
  providers:[ChartService],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export default class Reports {
 itemsPage = signal<number>(0);
 workstations:string[] = [];

private employeesData = signal<ReportEmployeeData[]>([]);
protected employeesFiltered = signal<ReportEmployeeData[]>([]);

  constructor(private chartSeervice:ChartService){
    this.employeesData.set([]);
    this.employeesFiltered.set(this.employeesData());
    const workstations = new Set<string>;
    this.employeesData().forEach((e) => workstations.add(e.employee.workstation))
    this.workstations = [...workstations];
    this.viewEmployeeData(this.employeesData()[0].employee.id)
  }

filterEmployees(filters:ReportHeaderForm){
  this.employeesFiltered.set(this.employeesData());
  this.employeesFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["workstation"]  ? e.employee.workstation == filters["workstation"] : true;
    const statusMatch = filters["status"] ? e.employee.status == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.employee.name.toLowerCase().includes((filters["name"] || "").toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));

}

  filterReports(filters:ReportHeaderForm){
    this.filterEmployees(filters)
  }

  viewEmployeeData(id:string){
    this.employeesFiltered().forEach((e)=> {
      if(e.employee.id === id){
        this.chartSeervice.employeeData.next(e.data);
      }
    })
}



}
