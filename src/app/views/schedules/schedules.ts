import { Component, input, output, signal } from '@angular/core';
import { SchedulesHeader } from './schedules-header/schedules-header';
import { SchedulesShift } from './schedules-shift/schedules-shift';
import { SchedulesData, SchedulesShiftData } from '../../interfaces/schedules';
import { getSchedulesDate } from '../../common/utils/functions/generator-schedules';

@Component({
  selector: 'app-schedules',
  imports: [SchedulesHeader, SchedulesShift ],
  templateUrl: './schedules.html',
  styleUrl: './schedules.css'
})
export default class Schedules {

  shifts;

  constructor(){
    this.shifts  = signal<SchedulesData>(getSchedulesDate(new Date()))
  }

  getDay(): string {
    const shiftWeek = this.shifts().day;
    const endDay: number = shiftWeek.getDate();
    const endYear: number = shiftWeek.getFullYear();
    const mendMonth: string = shiftWeek.toLocaleDateString('es-AR', { month: 'long' });

    const monthCamelCase = mendMonth.charAt(0).toUpperCase() + mendMonth.slice(1);
    return `${endDay} de ${monthCamelCase}, ${endYear}`
  }

  changeDay(next:boolean){
    const currentDay = this.shifts().day;
    next ? currentDay.setDate(currentDay.getDate()+1) :currentDay.setDate(currentDay.getDate()-1)
    this.shifts.set(getSchedulesDate(currentDay))
  }

  isCurrentShift(shift:"Mañana" | "Tarde" | "Noche"){
    const hour = new Date().getHours()
    switch (shift) {
      case 'Mañana':
        return hour >= 7 && hour < 15
      case 'Tarde':
        return  hour >= 15 && hour < 23
      default:
        return hour >= 23 && hour < 7
    }

  }

}
