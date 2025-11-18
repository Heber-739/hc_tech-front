import { Component, effect, inject, OnInit, output, signal } from '@angular/core';
import { MonthlyCalendar } from "./monthly-calendar/monthly-calendar";
import { CalendarItem } from '../../interfaces/calendar-item';
import storeService from '../../common/services/store-service';
import { CalendarService } from '../../common/services/calendar-service';
import { UserData } from '../../interfaces/user';
import { user } from '../../../../public/datos/datos';

@Component({
  selector: 'app-calendar',
  imports: [ MonthlyCalendar],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export default class Calendar implements OnInit{

  calendarItems = signal<CalendarItem[]>([]);
  user = signal<UserData>(user);
  changeMonth = output<Date>()


  private calendarService = inject(CalendarService);


  ngOnInit(): void {
    this.init();
    storeService.set<string>("title-description","Calendario del personal")
  }

  private  async init(){
    const user = await storeService.getWhenExist<UserData>("user-data");
    this.user.set(user);
    this.getCalendarItems(new Date());

  }

  async getCalendarItems(date:Date){
const {data} = await this.calendarService.getCalendarItems(this.user().empleado_id, date);
    if(!data) return;
    this.calendarItems.set(data);
  }


  getDay(): string {
    if (this.calendarItems().length < 16) return "";

    const date: Date = this.calendarItems()[15].fecha;

    const endYear: number = date.getFullYear();

    const mendMonth: string = date.toLocaleDateString('es-AR', { month: 'long' });

    const monthCamelCase = mendMonth.charAt(0).toUpperCase() + mendMonth.slice(1);

    return ` ${monthCamelCase}, ${endYear}`;
}

    change(next:boolean){
      const day = this.calendarItems()[15].fecha;
      next ? day.setMonth(day.getMonth()+1) : day.setMonth(day.getMonth()-1)
      this.getCalendarItems(day);
    }
}
