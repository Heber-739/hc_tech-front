import { Component, inject, output, signal } from '@angular/core';
import { EmployeeListItemData, EmployeeProfile } from '../../../interfaces/employee-data';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { employeeRols } from '../../../common/constants/rols';
import { employeeStatus } from '../../../common/constants/status';
import { SelectModule } from 'primeng/select';
import { calculateIntervalTime } from '../../../common/utils/functions/get-interval-time';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { getCurrentAge } from '../../../common/utils/functions/get-age';
import { v4 } from 'uuid';

@Component({
  selector: 'app-add-employee',
  imports: [DividerModule,AvatarModule,ReactiveFormsModule,InputTextModule,DatePickerModule,InputNumberModule,SelectModule,CommonModule,ButtonModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  protected employee;
  protected rols = employeeRols;
  protected status = employeeStatus;

  add = output<EmployeeListItemData>();
  cancel = output<void>();

  fb = inject(FormBuilder);

  employeeForm = this.fb.group({
    name: ['Heber Mauricio Duarte', [Validators.required]],
    mail: ['heberduarteryr@gmail.com', [Validators.required, Validators.email]],
    phone: ['3764273300',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    dni: [36702037, [Validators.required, Validators.pattern(/^\d{7,8}$/)]],
    birthday: ['', [Validators.required]],
    workstation: ['Desarrollador Frontend', [Validators.required]],
    address: ['Av. Falsa 123', [Validators.required]],
    status: ['Activo', [Validators.required]],
    rol: ['Empleado', [Validators.required]],
    start_work: ['', [Validators.required]],
    end_work: ['', [Validators.required]],
    entry_date: ['', [Validators.required]],
    discharge_date: ['', [Validators.required]],
  });

  constructor() {
    this.employee = signal<EmployeeProfile>({
      name: '',
      email: '',
      rol: '',
      workstation: '',
      work_schedule: '',
      status: '',
      time_in_company: '',
      entry_date: '',
      discharge_date: '',
      image: '',
      address: '',
      birthday: '',
      dni: '',
      phone_number: '',
      punctuality: 0,
      attendance: 0,
    });
    this.employeeForm.valueChanges.pipe(debounceTime(300)).subscribe({
      next: (v: any) => {
        console.log({ v });
        this.employee.update((e) => ({
          ...e,
          name: v['name'],
          email: v['mail'],
          phone_number: '+549' + v['phone'],
          dni: v['dni'],
          birthday: v['birthday'],
          workstation: v['workstation'],
          address: v['address'],
          status: v['status'],
          rol: v['rol'],
          work_schedule: this.getSchedule(new Date(v['start_work']),new Date(v['end_work'])),
          time_in_company: calculateIntervalTime(v['entry_date'], v['discharge_date']),
          entry_date: v['entry_date'],
          discharge_date: v['discharge_date'],
        }));
      },
    });
  }

  getSchedule(dateStart:Date,dateEnd:Date){
    const options:Intl.DateTimeFormatOptions = {
    hour: '2-digit',      // Muestra la hora con dos dígitos (ej: 07, 23)
    minute: '2-digit',    // Muestra el minuto con dos dígitos (ej: 00, 30)
    hour12: false,        // ¡Importante! Asegura el formato de 24 horas (00-23)
    timeZone: 'America/Argentina/Buenos_Aires'
  };
    const start = dateStart.toLocaleTimeString('es-AR', options);
    const end = dateEnd.toLocaleTimeString('es-AR', options);
    return `${start} - ${end}`;
    const getHoursFormat = (date:Date) =>  {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    return `${getHoursFormat(dateStart)}:${getHoursFormat(dateEnd)}`
  }

  loadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file: File = input.files?.[0]!;
    const reader = new FileReader();
    reader.onload = () =>
      this.employee.update((emp) => ({ ...emp, image: reader.result as string }));
    reader.readAsDataURL(file);
  }

  getAge(bornDate: string): number {
    return getCurrentAge(new Date(bornDate));
  }

  exit() {
    this.cancel.emit();
  }

  submit() {
    console.log(this.employeeForm.errors);
    if (this.employeeForm.invalid) return;
    const { name, workstation, rol, status, work_schedule, time_in_company, image } =
      this.employee();
    const employee: EmployeeListItemData = {
      id: v4(),
      name,
      workstation,
      rol,
      work_schedule,
      status,
      time_in_company,
      image,
    };
    this.add.emit(employee);
  }
}
