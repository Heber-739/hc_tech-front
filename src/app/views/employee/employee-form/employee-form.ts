import { AfterViewInit, Component, inject, input, output, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { ROLS } from '../../../common/constants/rols';
import { EMPLOYEE_STATUS } from '../../../common/constants/status';
import { SelectModule } from 'primeng/select';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';
import { CommonModule, PercentPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { getCurrentAge } from '../../../common/utils/functions/get-age';
import { defaultEmployee } from '../../../common/constants/employee-default';
import { EmployeeResponse } from '../../../interfaces/employee-response';
import { EmployeeService } from '../../../common/services/employee';

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
  protected employee = signal<EmployeeResponse>(defaultEmployee);
  protected rols = ROLS;
  protected status = EMPLOYEE_STATUS;
  protected attendance = 0;
  protected punctuality = 0;

  disableItems = input<boolean>(true);

  editEmployee = input<EmployeeResponse>();
  add = output<EmployeeResponse>();
  cancel = output<void>();

  fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);

  employeeForm;

  constructor() {
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
      estado: ['Activo', [Validators.required]],
      rol: ['', [Validators.required]],
      turno: ['', [Validators.required]],
      fecha_ingreso: [new Date(), [Validators.required]],
      fecha_egreso: [new Date() , [Validators.required]],
    });


    this.employeeForm.valueChanges.pipe(debounceTime(300)).subscribe({
      next: (v: any) => {
          const puesto = this.disableItems() ? this.employee().puesto : v['puesto'];
          const email = this.disableItems() ? this.employee().email : v['email'];

        this.employee.update((e) => ({
          ...e,
          nombre: v['nombre'],
          email,
          telefono: v['telefono'] ? `+549 ${v['telefono']}` : '',
          dni: v['dni'],
          fecha_nac: v['fecha_nac'],
          puesto,
          direccion: v['direccion'],
          estado: v['estado'],
          rol: v['estado'],
          turno: v['turno'],
          fecha_ingreso: v['fecha_ingreso'],
          fecha_egreso: v['fecha_egreso']
        }));
      },
    });
  }

  ngAfterViewInit(): void {
    this.getStatics();

    if(this.editEmployee()){

      this.employee.set(this.editEmployee()!);

      const { id,empresa_id,fecha_nac,fecha_ingreso,created_at,activo,imagen, telefono, checked, ...obj } = this.editEmployee()!;
      let number = telefono.length - 10;
      const pn = telefono.slice(number);

      this.employeeForm.patchValue({ ...obj,
        telefono: parseInt(pn),
        rol:"",
        fecha_nac: fecha_nac
      });

      this.disableItems() && this.employeeForm.controls.email.disable();
      this.disableItems() && this.employeeForm.controls.puesto.disable();
      this.employeeForm.updateValueAndValidity();
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
      this.employee.update((emp) => ({ ...emp, image: reader.result as string }));
    reader.readAsDataURL(file);
  }

  getAge = () => getCurrentAge(this.employee().fecha_nac);

  getPorcentage = (dato: number, total: number): number => total === 0 ? 0 : (dato / total);

  exit = () =>this.cancel.emit();

  submit() {
    if (this.employeeForm.invalid) return;
    const requestBody = this.employee()
    this.editEmployee() ? this.employeeService.createEmployee(requestBody) : this.employeeService.editEmployee(requestBody)
    this.add.emit(this.employee());
  }

  getTimeInCompany() {
    const {fecha_egreso, fecha_ingreso} = this.employee()
    if (!fecha_ingreso || !fecha_egreso) return '';
    return calculateIntervalTime(fecha_ingreso, fecha_egreso);
  }
}
