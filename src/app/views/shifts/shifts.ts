import { Component, signal } from '@angular/core';
import { ShiftHeader } from './shift-header/shift-header';
import { getWeekShifts } from '../../common/utils/functions/generate-shifts';
import { ShiftColumn } from './shift-column/shift-column';
import { ShiftItem, ShiftEmployeesItem } from '../../interfaces/shift-item';

@Component({
  selector: 'app-shifts',
  imports: [ShiftHeader, ShiftColumn],
  templateUrl: './shifts.html',
  styleUrl: './shifts.css'
})
export default class Shifts {

    protected shiftWeek = signal<ShiftItem[]>([])
    shift = signal<keyof ShiftEmployeesItem>("morning");

    constructor(){
    this.shiftWeek.set(getWeekShifts());
  }

  setShift(setShift:keyof ShiftEmployeesItem){
    this.shift.update(()=> setShift)
  }

  changeWeekView(next:boolean){
    const newDay = this.shiftWeek()[3].date;
    next ? newDay.setDate(newDay.getDate()+7):newDay.setDate(newDay.getDate()-7);
     this.shiftWeek.update(()=> getWeekShifts(newDay));
  }

  getToday = (day: Date): boolean => new Date().toDateString() === day.toDateString();


  getWeekRangeString(): string {
    const shiftWeek = this.shiftWeek();

    const startDate = shiftWeek[0].date.getDate();
    const endDate = shiftWeek[shiftWeek.length - 1].date;

const endDay: number = endDate.getDate();

const endYear: number = endDate.getFullYear();

const mendMonth: string = endDate.toLocaleDateString('es-AR', { month: 'long' });
const monthCamelCase = mendMonth.charAt(0).toUpperCase() + mendMonth.slice(1);
    return `${startDate} a ${endDay} de ${monthCamelCase}, ${endYear}`
}

}
