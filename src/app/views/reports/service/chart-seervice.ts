import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MonthStaticalData } from '../../../interfaces/report-employee';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  employeeData = new BehaviorSubject<MonthStaticalData[]>([]);
}
