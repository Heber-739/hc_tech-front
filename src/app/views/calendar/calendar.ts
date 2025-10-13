import { Component, output, signal } from '@angular/core';
import { CalendarHeader } from './calendar-header/calendar-header';
import { MonthlyCalendar } from "./monthly-calendar/monthly-calendar";
import { getCalendarItems } from '../../common/utils/functions/generate-calendar-items';
import { CalendarItem } from '../../interfaces/calendar-item';

@Component({
  selector: 'app-calendar',
  imports: [CalendarHeader, MonthlyCalendar],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export default class Calendar {

  calendarItems;
  changeMonth = output<Date>()

  constructor(){
    this.calendarItems = signal<CalendarItem[]>(getCalendarItems())
  }


  getDay(): string {
      const day = this.calendarItems()[15].date;
      const endYear: number = day.getFullYear();
      const mendMonth: string = day.toLocaleDateString('es-AR', { month: 'long' });

      const monthCamelCase = mendMonth.charAt(0).toUpperCase() + mendMonth.slice(1);
      return ` ${monthCamelCase}, ${endYear}`
    }

    change(next:boolean){
      const day = this.calendarItems()[15].date;
      next ? day.setMonth(day.getMonth()+1) : day.setMonth(day.getMonth()-1)
      this.calendarItems.set(getCalendarItems(day));
    }
}
