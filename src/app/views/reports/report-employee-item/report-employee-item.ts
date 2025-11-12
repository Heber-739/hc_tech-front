import { Component, input, output } from '@angular/core';
import { ReportUser } from '../../../interfaces/report-employee';
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

  employee = input.required<ReportUser>()
  viewEmployeeData = output<void>()


  getTimeInCompany() {
      if (!this.employee().fecha_ingreso || !this.employee().fecha_egreso) return '';
      const initDate = new Date(this.employee().fecha_ingreso);
      const endDate = new Date(this.employee().fecha_egreso!);
      return calculateIntervalTime(initDate, endDate);
    }

    setEmployeeData(){
      this.viewEmployeeData.emit();
    }
}
