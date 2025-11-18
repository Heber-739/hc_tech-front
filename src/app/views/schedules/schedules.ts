import { Component, inject, OnInit, signal } from '@angular/core';
import { SchedulesHeader } from './schedules-header/schedules-header';
import { Subscription, filter, distinctUntilChanged } from 'rxjs';
import { ShiftService } from '../../common/services/shift-service';
import storeService from '../../common/services/store-service';
import { Companies } from '../../interfaces/company';
import { ShiftRequest } from '../../interfaces/shifts-request';
import { company, user } from '../../../../public/datos/datos';
import { SchedulesData } from '../../interfaces/schedules';
import { ScheduleItem } from './schedule-item/schedule-item';
import { StringsFilters } from '../../interfaces/shift-filters';
import { UserData } from '../../interfaces/user';

@Component({
  selector: 'app-schedules',
  imports: [SchedulesHeader, ScheduleItem ],
  templateUrl: './schedules.html',
  styleUrl: './schedules.css'
})
export default class Schedules implements OnInit {

    protected subs:Subscription = new Subscription()
    protected company = signal<Companies>(company);
    protected dateSelected = signal<Date>(new Date());
    protected keys: Array<keyof SchedulesData>  = ['Mañana','Tarde','Noche'];
    shiftFilters = signal<StringsFilters>({name:"",rol:""})
    protected user = signal(user);

    shifts = signal<SchedulesData>({
      Tarde:[],
      Mañana:[],
      Noche:[]
    })
    shiftsDay = signal<SchedulesData>({
      Tarde:[],
      Mañana:[],
      Noche:[]
    })

    private shiftService = inject(ShiftService)

  ngOnInit(): void {
    this.init();
     storeService.getObservable<StringsFilters>("schedules-filters").pipe(
      filter((v)=> !!v )
    ).subscribe({
      next:(filters) => {
          this.shiftFilters.set(filters);
          this.updateShifts()
      }
    })
  }

private getShiftFilters(key:keyof SchedulesData){
  const {name, rol} = this.shiftFilters();
  const res = this.shiftsDay()[key]
  return res.filter((item)=>{
    const validName = item.nombre.toLowerCase().includes(name.toLowerCase());
     const validRol = item.puesto.toLowerCase().includes(rol.toLowerCase())
     return validName && validRol
    })
}

  updateShifts(){

    const newState:SchedulesData = {
      Tarde:this.getShiftFilters('Tarde') || [],
      Mañana:this.getShiftFilters('Mañana') || [],
      Noche:this.getShiftFilters('Noche') || []
    }
    this.shifts.set(newState);
  }


  private async init(){
    storeService.set<string>("title-description","Registro de ingresos y egresos")
    const company = await storeService.getWhenExist<Companies>("company-default-selected");
    await storeService.getWhenExist("list-complete-employees");
    const userData = storeService.get<UserData>("user-data");
    this.user.set(userData);
    this.company.set(company);
    this.getShifts();

    this.subs.add(
      storeService.getObservable<Companies>("company-default-selected").pipe(
        filter((res)=>!!res),
        distinctUntilChanged(),
      ).subscribe({
        next:(res)=> {
          this.company.set(res)
          this.getShifts()
        }
      })
    )
  }


  private async getShifts(){

       const req:ShiftRequest = {
          empresa_id:this.company().id,
          dia:this.dateSelected()
        }

        const {data,error} = await this.shiftService.getScheduleShifts(req,this.user());
        if(!data) return
        this.shiftsDay.set(data);
        this.updateShifts();
    }

  getDay(): string {
    const day = this.dateSelected();
    const endDay: number = day.getDate();
    const endYear: number = day.getFullYear();
    const mendMonth: string = day.toLocaleDateString('es-AR', { month: 'long' });

    const monthCamelCase = mendMonth.charAt(0).toUpperCase() + mendMonth.slice(1);
    return `${endDay} de ${monthCamelCase}, ${endYear}`
  }

  changeDay(next:boolean){
    const currentDay = this.dateSelected();
    next ? currentDay.setDate(currentDay.getDate()+1) :currentDay.setDate(currentDay.getDate()-1)
    this.dateSelected.set(currentDay);
    this.getShifts();
  }

  isCurrentShift(shift:"Mañana" | "Tarde" | "Noche"){
    const hour = new Date().getHours()
    switch (shift) {
      case 'Mañana':
        return hour >= 6 && hour < 14
      case 'Tarde':
        return  hour >= 14 && hour < 22
      default:
        return hour >= 22 || hour < 6;
    }

  }

}
