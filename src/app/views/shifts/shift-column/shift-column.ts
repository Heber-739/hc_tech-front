import { AfterViewInit, Component, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ShiftDay, ShiftItem } from '../../../interfaces/shift-item';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { ShiftFilters } from '../../../interfaces/shift-filters';
import { filter, Subscription } from 'rxjs';
import { ShiftService } from '../../../common/services/shift-service';
import { ToastService } from '../../../common/services/toast';
import { AddShiftModal } from '../../../interfaces/add-shift-modal';
import { AutoCompleteCompleteEvent, AutoCompleteModule, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { EmployeeResponse } from '../../../interfaces/employee-response';
import { Companies } from '../../../interfaces/company';

@Component({
  selector: 'app-shift-column',
  imports: [DividerModule, AvatarModule, MenuModule, AutoCompleteModule ],
  templateUrl: './shift-column.html',
  styleUrl: './shift-column.css'
})
export class ShiftColumn implements AfterViewInit, OnDestroy{

  protected subs = new Subscription();
  protected shiftIdSelected:number = 0;
  shiftDay = input.required<ShiftItem>();

  shiftFilters = signal<ShiftFilters>({name:"",rol:"",shift:'Mañana'})
  addShiftModal = signal<AddShiftModal>({} as AddShiftModal)

  protected showShifts;
  protected user;

  private shiftService = inject(ShiftService);
  private toast = inject(ToastService);

  constructor(){

    effect(()=>{
      this.shiftDay()
      this.updateEmployees(this.shiftFilters())
    })
    this.showShifts = signal<ShiftDay>([]);
    this.subs.add(
      storeService.getObservable<ShiftFilters>("change-shift-filters").pipe(
        filter((v)=> !!v)
      ).subscribe({
        next:(filters)=> {
          this.shiftFilters.set(filters);
          this.updateEmployees(filters)
        }
      })
    )
    const user = storeService.get<UserData>("user-data");
    this.user = signal<UserData>(user);
  }

  ngAfterViewInit(): void {
    this.updateEmployees(this.shiftFilters());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  command = async (event: MenuItemCommandEvent) => {
   const { data,error } = await this.shiftService.deleteShift(this.shiftIdSelected);
   if(!data) return this.toast.show("shift-delete-error")
   this.toast.show("shift-delete-success");

    this.shiftDay()[this.shiftFilters().shift] = this.getShifts().filter((s)=> s.turno_id != this.shiftIdSelected )
    this.showShifts.update((shift)=>shift.filter((s)=> s.turno_id != this.shiftIdSelected));
    this.shiftDay()[this.shiftFilters().shift] = this.showShifts();
  };


  getShifts = () =>  this.shiftDay() && this.shiftDay()[this.shiftFilters().shift]

  getLength = () =>  this.shiftDay() && this.getShifts().length


  items = signal<MenuItem[]>([
            {
                items: [
                      {
                        label: 'Remover',
                        styleClass: "text-red-500",
                        command:this.command
                    }
                ],
            }
        ])


 clickMenu = (id:number) => this.shiftIdSelected = id;

  getDay(): string {
    let day = this.shiftDay().date;
    const dayName = day.toLocaleDateString('es-AR', {
        weekday: 'long'
    });
    const number = day.toLocaleDateString('es-AR', {
      day: 'numeric'
  });

    return `${dayName.charAt(0).toUpperCase()}${dayName.slice(1)} ${number}`;
 }

 private mapShifts = ()=> {
   if( this.shiftFilters().shift == 'Mañana') return [ '06:00:00', '14:00:00']
   if(this.shiftFilters().shift =='Tarde') return [ '14:00:00', '22:00:00']
   return [ '22:00:00', '06:00:00']
  }

  async addShift(e:AutoCompleteSelectEvent){
    const empleado_id = e.value.id

      const alreadyExist = this.getShifts().some((e)=> e.id === empleado_id )
      if(alreadyExist) return this.toast.show("shift-employee-already-exist");


    this.addShiftModal.set({} as AddShiftModal);
    const [hora_inicio,hora_fin] = this.mapShifts();
    const {id:empresa_id} = storeService.get<Companies>("company-default-selected");

    const req = {empresa_id, empleado_id, hora_fin, hora_inicio, dia:this.shiftDay().date};
    const {data,error} = await this.shiftService.createShift(req)
    if(!data) return this.toast.show("shift-create-error")
     this.toast.show("shift-create-success")

    const employee = storeService.get<EmployeeResponse[]>("list-complete-employees").find((e)=>e.id === empleado_id)
    if(!employee) return;
    const {imagen, nombre, puesto, id} = employee;
    let newShifts = this.getShifts()
    const {id:turno_id} = data;
    newShifts.push({id,turno_id,imagen,nombre,puesto});
    this.showShifts.set(newShifts);
    this.shiftDay()[this.shiftFilters().shift] = newShifts;
  }



  updateEmployees = (filters:ShiftFilters) => {
    const {name,rol} = filters;
    const list = this.getShifts();
    const listFilterName = name == "" ? list : list.filter((i)=> i.nombre.toLowerCase().includes(name.toLowerCase()))
    const done = rol == "" ? listFilterName : listFilterName.filter((i)=> i.puesto.toLowerCase().includes(rol.toLowerCase()))
    this.showShifts.set(done);
  }

  searchEmployee(event:AutoCompleteCompleteEvent){
    const { employee} = this.addShiftModal();
    if(!employee) return;

      const show = employee.filter((e)=>e.nombre.toLowerCase().includes(event.query.toLowerCase())) || [];
      this.addShiftModal.update((obj)=>({...obj,show}))

  }


  addClick(): void {
    const hours = this.mapShifts()[0].split(":")[0];
    const date = this.shiftDay().date
    date.setHours(parseInt(hours));
    if(new Date() >= date) return this.toast.show("shift-create-blocked-previously");

    const employee = storeService.get<EmployeeResponse[]>("list-complete-employees").map((e)=>({
      id:e.id,
       nombre:e.nombre
    }))

    this.addShiftModal.update(()=> ({
      date:this.shiftDay().date,
      show:[],
      employee
    }))

  }

  closeModal = () => this.addShiftModal.set({} as AddShiftModal)

}
