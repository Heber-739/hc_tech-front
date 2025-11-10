import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ShiftHeader } from './shift-header/shift-header';
import { getDefaultShifts } from '../../common/utils/functions/generate-shifts';
import { ShiftColumn } from './shift-column/shift-column';
import { ShiftItem } from '../../interfaces/shift-item';
import { ShiftService } from '../../common/services/shift-service';
import storeService from '../../common/services/store-service';
import { Companies } from '../../interfaces/company';
import { ShiftRequest } from '../../interfaces/shifts-request';
import { distinctUntilChanged, filter, Subscription } from 'rxjs';
import { company } from '../../../../public/datos/datos';
import { ShiftFilters } from '../../interfaces/shift-filters';

@Component({
  selector: 'app-shifts',
  imports: [ShiftHeader, ShiftColumn],
  templateUrl: './shifts.html',
  styleUrl: './shifts.css'
})
export default class Shifts implements OnDestroy {
    protected shiftWeek = signal<ShiftItem[]>(getDefaultShifts());
    protected company = signal<Companies>(company);

    protected subs:Subscription = new Subscription()

    private shiftService = inject(ShiftService)

    constructor(){
      this.init()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  private async init(){
    this.updateShifts()
    this.subs.add(
      storeService.getObservable<Companies>("company-default-selected").pipe(
        filter((res)=>!!res),
        distinctUntilChanged(),
      ).subscribe({
        next:(res)=> {
          this.company.set(res)
          this.updateShifts()
        }
      })
    )
  }

  private async updateShifts(){
    await storeService.getWhenExist("list-complete-employees");
    const newShifts = this.shiftWeek().map((s) => this.getShifts(s))
    const resolve = await Promise.all(newShifts);
    this.shiftWeek.update(()=> resolve);
  }

  private async getShifts(shift:ShiftItem){

     const req:ShiftRequest = {
        empresa_id:this.company().id,
        dia:shift.date
      }

      const {data,error} = await this.shiftService.getShifts(req);
      return data || shift;
  }


  changeWeekView(next:boolean){
    const newDay = this.shiftWeek()[3].date;
    next ? newDay.setDate(newDay.getDate()+7) : newDay.setDate(newDay.getDate()-7);
     this.shiftWeek.update(()=> getDefaultShifts(newDay));
     this.updateShifts();
  }

  getToday = (day: Date): boolean => new Date().toDateString() === day.toDateString();

  getWeekRangeString(): string {
    if(this.shiftWeek().length == 0) return "";
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
