import { Component, inject, input, signal } from '@angular/core';
import { ProceduresHeader } from "./procedures-header/procedures-header";
import { ProcedureHeaderForm } from '../../interfaces/forms-interfaces';
import { ProcedureItem } from './procedure-item/procedure-item';
import { ProcedureItemData } from '../../interfaces/procedures-item';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { filter, distinctUntilChanged, Subscription } from 'rxjs';
import storeService from '../../common/services/store-service';
import { Companies } from '../../interfaces/company';
import { company, user } from '../../../../public/datos/datos';
import { UserData } from '../../interfaces/user';
import { ProcedureCreateRequest, ProcedureRequest } from '../../interfaces/procedures-req-res';
import { ProcedureService } from '../../common/services/procedure-service';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { METTER_OPTIONS } from '../../common/utils/functions/procedures-generator';
import { ToastService } from '../../common/services/toast';

@Component({
  selector: 'app-procedures',
  imports: [ProceduresHeader, ProcedureItem, PaginatorModule, SelectModule,TextareaModule, ButtonModule, FormsModule],
  templateUrl: './procedures.html',
  styleUrl: './procedures.css'
})
export default class Procedures {
  protected itemsPage = 6;
  private currentSizeItems:PaginatorState = {first:0};
  protected metterOptions = METTER_OPTIONS;

  protected subs:Subscription = new Subscription()

  itemData = input<ProcedureItemData>()
  protected user = signal<UserData>(user);
  protected company = signal<Companies>(company);
  procedures = signal<ProcedureItemData[]>([]);
  protected proceduresData;

  proceduresFiltered = signal<ProcedureItemData[]>([]);

  protected toast = inject(ToastService);
  protected procedureService = inject(ProcedureService);
protected addProcedure = signal<boolean>(false);

protected asunto = "";
protected descripcion = "";

  constructor(){
    this.init()
    this.proceduresData = signal<ProcedureItemData[]>([])
    this.proceduresFiltered.set(this.proceduresData());
    this.onPageChange(this.currentSizeItems)
  }

  filterProcedures(filters:ProcedureHeaderForm){
    this.proceduresFiltered.set(this.proceduresData());
  this.proceduresFiltered.update((employees)=>employees.filter((e)=> {
    const workstationMatch = filters["matter"]  ? e.metter == filters["matter"] : true;
    const statusMatch = filters["status"] ? e.status == filters["status"]: true;
    const nameMatch = Boolean(filters["name"]) ? e.employee.nombre.toLowerCase().includes((filters["name"] || "").toLowerCase()) : true;
    return workstationMatch && statusMatch && nameMatch;
  }));
  this.onPageChange({first:0})
  }


    private async init(){
    const user = await storeService.getWhenExist<UserData>("user-data");
    const company = await storeService.getWhenExist<Companies>("company-default-selected");
    this.company.set(company);
    this.user.set(user);
    await storeService.getWhenExist("list-complete-employees");

    this.subs.add(
      storeService.getObservable<Companies>("company-default-selected").pipe(
        filter((res)=>!!res),
        distinctUntilChanged(),
      ).subscribe({
        next:(res)=> {
          this.company.set(res)
          this.getProcedures()
        }
      })
    )
  }


   private async getProcedures(){
         const req:ProcedureRequest = {
            empresa_id:this.company().id,
            empleado_id:this.user().id
          }

          const {data,error} = await this.procedureService.getProcedures(req);
          if(!data) return
          this.proceduresData.set(data);
          this.proceduresFiltered.set(this.proceduresData());
          this.onPageChange(this.currentSizeItems)
        }

        onPageChange(e:PaginatorState){
          this.currentSizeItems = e;
          this.procedures.update(()=> this.proceduresFiltered().slice(e.first,e.first! + this.itemsPage))
        }


        modalHandler = (value:boolean) => this.addProcedure.set(value);


        async addNew(){
          const {id:empleado_id} = this.user()
          const {id:empresa_id} = this.company()
          const req:ProcedureCreateRequest = {
            empleado_id,
            empresa_id,
            asunto: this.asunto,
            descripcion: this.descripcion
          }
          const {data,error} = await this.procedureService.createProcedure(req);
           if(!data) return this.toast.show("procedur-create-error")
            this.toast.show("procedur-create-success")
           this.asunto = "";
           this.descripcion= "";
          this.addProcedure.set(false);

          this.proceduresData.update((list)=> [data,...list]);
          this.proceduresFiltered.set(this.proceduresData());
          this.onPageChange(this.currentSizeItems)

          this.proceduresData
          console.log(data,error)
  }
}
