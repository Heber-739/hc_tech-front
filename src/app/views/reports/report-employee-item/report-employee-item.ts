import { Component, input, output } from '@angular/core';
import { ReportEmployeeData } from '../../../interfaces/report-employee';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';

@Component({
  selector: 'app-report-employee-item',
  imports: [CommonModule, AvatarModule,ButtonModule],
  templateUrl: './report-employee-item.html',
  styleUrl: './report-employee-item.css'
})
export class ReportEmployeeItem {

  employee = input.required<ReportEmployeeData>()
  viewEmployeeData = output<void>()


  getTimeInCompany() {
      if (!this.employee().employee.entry_date || !this.employee().employee.discharge_date) return '';
      const initDate = new Date(this.employee().employee.entry_date);
      const endDate = new Date(this.employee().employee.discharge_date);
      return calculateIntervalTime(initDate, endDate);
    }

    setEmployeeData(){
      this.viewEmployeeData.emit();
    }
}
