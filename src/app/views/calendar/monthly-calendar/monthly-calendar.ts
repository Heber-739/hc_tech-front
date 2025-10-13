import { Component, input } from '@angular/core';
import { CalendarItem } from '../../../interfaces/calendar-item';
import { CalendarMonthlyDay } from "../calendar-monthly-day/calendar-monthly-day";

@Component({
  selector: 'app-monthly-calendar',
  imports: [CalendarMonthlyDay],
  templateUrl: './monthly-calendar.html',
  styleUrl: './monthly-calendar.css'
})
export class MonthlyCalendar {

  monthlyItems = input.required<CalendarItem[]>()

}
