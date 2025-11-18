import { AfterViewInit, Component, inject, input, output, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { EMPLOYEE_STATUS } from '../../../common/constants/status';
import { SelectModule } from 'primeng/select';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';
import { CommonModule, PercentPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { getCurrentAge } from '../../../common/utils/functions/get-age';
import { defaultEmployee } from '../../../common/constants/employee-default';
import { EmployeeResponse } from '../../../interfaces/employee-response';
import { EmployeeService } from '../../../common/services/employee';
import { Companies } from '../../../interfaces/company';
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { Rols } from '../../../interfaces/rols';
import { ToastService } from '../../../common/services/toast';

@Component({
  selector: 'app-employee-form',
  imports: [
    DividerModule,
    AvatarModule,
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    InputNumberModule,
    SelectModule,
    CommonModule,
    ButtonModule,
    PercentPipe
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements AfterViewInit {
  protected user;
  protected employee = signal<EmployeeResponse>(defaultEmployee);
  protected rols;
  protected status = EMPLOYEE_STATUS;
  protected attendance = 0;
  protected punctuality = 0;

  editEmployee = input<EmployeeResponse>();
  protected add = output<EmployeeResponse>();
  protected cancel = output<void>();

  protected fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private toast = inject(ToastService);

  protected employeeForm;

  constructor() {
    this.user = signal<UserData>(storeService.get<UserData>("user-data"))
    this.rols = this.user().rol == Rols.SUPERADMIN ? ["admin", "empleado"] : ["empleado"];
    this.employeeForm = this.fb.group({
      nombre: [undefined as string | undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        undefined as number | undefined,
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      dni: [
        undefined as string | undefined,
        [Validators.required, Validators.pattern(/^\d{7,8}$/)],
      ],
      fecha_nac: [undefined as Date | undefined, [Validators.required]],
      puesto: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      rol: ['empleado', [Validators.required]],
      turno: ['', [Validators.required]],
      fecha_ingreso: [new Date(), [Validators.required]],
      fecha_egreso: [undefined as Date | undefined],
    });


    this.employeeForm.valueChanges.pipe(debounceTime(300)).subscribe({
      next: (v: any) => {

        const fecha_egreso = !this.editEmployee() ? undefined : v["fecha_egreso"]
        this.employee.update((e) => ({
          ...e,
          nombre: v['nombre'],
          email:v['email'],
          telefono: v['telefono'] ? `+549 ${v['telefono']}` : '',
          dni: v['dni'],
          fecha_nac: v['fecha_nac'],
          puesto:v['puesto'],
          direccion: v['direccion'],
          rol: v['rol'],
          turno: v['turno'],
          fecha_ingreso: v['fecha_ingreso'],
          fecha_egreso
        }));
      },
    });
  }

  ngAfterViewInit(): void {
    this.getStatics();

    if(this.editEmployee()){

      this.employee.set(this.editEmployee()!);

      const { id,empresa_id,created_at,activo,imagen, telefono, checked, ...obj } = this.editEmployee()!;
      let number = telefono.length - 10;
      const pn = telefono.slice(number);

      this.employeeForm.patchValue({ ...obj,
        telefono: parseInt(pn),
      });

      this.employeeForm.updateValueAndValidity();
    } else {
      const {id} = storeService.get<Companies>("company-default-selected");
      this.employee.update((e)=>({...e,empresa_id:id}))
    }
  }

  private async getStatics(){
    if(!this.editEmployee()) return;
    const { id, empresa_id } = this.editEmployee()!;

    const {data, error} = await this.employeeService.getStatics(id,empresa_id)
    if(!data) return;
    this.attendance = this.getPorcentage(data.dias_asistidos,data.total)
    this.punctuality = this.getPorcentage(data.dias_puntuales,data.total)
  }

  loadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file: File = input.files?.[0]!;
    const reader = new FileReader();
    reader.onload = () =>
      this.employee.update((emp) => ({ ...emp,imagen: reader.result as string }));
    reader.readAsDataURL(file);
  }

  getAge = () => getCurrentAge(this.employee().fecha_nac);

  getPorcentage = (dato: number, total: number): number => total === 0 ? 0 : (dato / total);

  exit = () =>this.cancel.emit();

  submit() {
    if (this.employeeForm.invalid) return;
    const {checked,...requestBody} = this.employee()
    this.editEmployee() ? this.updateEmployee(requestBody) : this.createEmployee(requestBody);
  }

  private async createEmployee(requestBody:EmployeeResponse){
    const {data, error} = await this.employeeService.createEmployee(requestBody,this.user().id);
    if(!data) return this.toast.show("employee-create-error");
    if(this.user().email === requestBody.email){
      this.user.update((user)=> ({...user,empleado_id:data.id}))
      localStorage.setItem("user-data", JSON.stringify(this.user()));
    storeService.set("user-data", this.user());
    }
    this.add.emit(this.employee());
    this.toast.show("employee-create-success");
  }

  private async updateEmployee(requestBody:EmployeeResponse){
    const {data, error} = await  this.employeeService.editEmployee(requestBody);
    if(error) return this.toast.show("employee-update-error");
    this.toast.show("employee-update-success");
  }

  getTimeInCompany() {
    const {fecha_egreso, fecha_ingreso} = this.employee()
    if (!fecha_ingreso || !fecha_egreso) return '';
    return calculateIntervalTime(fecha_ingreso, fecha_egreso);
  }
}
