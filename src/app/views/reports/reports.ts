import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { ReportHeader } from "./report-header/report-header";
import { ReportHeaderForm } from '../../interfaces/forms-interfaces';
import { ReportEmployeeItem } from "./report-employee-item/report-employee-item";
import { ReportCharts } from "./report-charts/report-charts";
import storeService from '../../common/services/store-service';
import { EmployeeResponse } from '../../interfaces/employee-response';
import { ReportResponse, ReportUser } from '../../interfaces/report-employee';
import { ReportService } from '../../common/services/report-service';
import { ToastService } from '../../common/services/toast';

@Component({
  selector: 'app-reports',
  imports: [ReportHeader, ReportEmployeeItem, ReportCharts],
  providers:[],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export default class Reports {
 itemsPage = signal<number>(0);
 workstations:string[] = [];

protected employeesData = signal<ReportUser[]>([]);
protected employeesFiltered = signal<ReportUser[]>([]);

protected employeeSelected = signal<number>(0);
protected currentDate = signal<Date>(new Date());

private reportService = inject(ReportService)
private toast = inject(ToastService)

  constructor(){
    storeService.set<string>("title-description","Reportes del personal")
    this.init()
  }

  private async init(){
    const employees = await storeService.getWhenExist<EmployeeResponse[]>("list-complete-employees");
    if(!employees || employees.length < 1) return this.toast.show("empty-reports")
    this.employeesData.update(()=> employees.map((e)=>{
    const {id,imagen,nombre,puesto,estado,fecha_ingreso,fecha_egreso,turno,...r} = e;
    return {id,imagen,nombre,puesto,estado,fecha_ingreso,fecha_egreso,turno}
    }))
    this.employeeSelected.set(this.employeesData()[0].id)

    this.employeesFiltered.set(this.employeesData());
    const workstations = new Set<string>;
    this.employeesData().forEach((e) => workstations.add(e.puesto))
    this.workstations = [...workstations];
  }

filterEmployees(filters:ReportHeaderForm){
  this.employeesFiltered.set(this.employeesData());
  this.employeesFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["workstation"]  ? e.puesto == filters["workstation"] : true;
    const statusMatch = filters["status"] ? e.estado == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.nombre.toLowerCase().includes((filters["name"] || "").toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));

}

  filterReports(filters:ReportHeaderForm){
    this.filterEmployees(filters)
  }

  updateDate = (ev:Date)=> {
    this.currentDate.update(()=> ev);
    this.viewEmployeeData();
  }

  async viewEmployeeData(emp?:number){
    emp && this.employeeSelected.set(emp);
    const {data,error} = await this.reportService.getReports(this.employeeSelected(),this.currentDate());
    if(!data) return;
    storeService.set<ReportResponse[]>("chart-data",data);
}



}
