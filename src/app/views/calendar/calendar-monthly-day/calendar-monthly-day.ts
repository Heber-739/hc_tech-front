import { Component, input } from '@angular/core';
import { CalendarItem } from '../../../interfaces/calendar-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-monthly-day',
  imports: [CommonModule],
  templateUrl: './calendar-monthly-day.html',
  styleUrl: './calendar-monthly-day.css'
})
export class CalendarMonthlyDay {

    item = input.required<CalendarItem>()


}
