import { AfterViewInit, Component, inject, input, output, signal, WritableSignal } from '@angular/core';
import { EmployeeProfile } from '../../../interfaces/employee-data';
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
import { defaultEmployee } from '../../../common/constants/employee-default';

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
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements AfterViewInit {
  protected employee = signal<EmployeeProfile>(defaultEmployee);
  protected rols = employeeRols;
  protected status = employeeStatus;

  disableItems = input<boolean>(true);

  editEmployee = input<EmployeeProfile>();
  add = output<EmployeeProfile>();
  cancel = output<void>();

  fb = inject(FormBuilder);

  employeeForm;

  constructor() {
    this.employeeForm = this.fb.group({
      name: [undefined as string | undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [
        undefined as number | undefined,
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      dni: [
        undefined as number | undefined,
        [Validators.required, Validators.pattern(/^\d{7,8}$/)],
      ],
      birthday: [undefined as Date | undefined, [Validators.required]],
      workstation: ['', [Validators.required]],
      address: ['', [Validators.required]],
      status: ['Activo', [Validators.required]],
      rol: ['', [Validators.required]],
      start_work: ['', [Validators.required]],
      end_work: ['', [Validators.required]],
      entry_date: [new Date(), [Validators.required]],
      discharge_date: [new Date() , [Validators.required]],
    });



    this.employeeForm.valueChanges.pipe(debounceTime(300)).subscribe({
      next: (v: any) => {
        let work_schedule = typeof v['start_work'] === 'object' ?
         this.getSchedule(new Date(v['start_work']), new Date(v['end_work'])):
          `${v['start_work']} - ${v['end_work']}`;

          const workstation = this.disableItems() ? this.employee().workstation : v['workstation'];
          const email = this.disableItems() ? this.employee().email : v['email'];

        this.employee.update((e) => ({
          ...e,
          name: v['name'],
          email,
          phone_number: v['phone_number'] ? `+549 ${v['phone_number']}` : '',
          dni: v['dni'],
          birthday: v['birthday'],
          workstation,
          address: v['address'],
          status: v['status'],
          rol: v['rol'],
          work_schedule,
          entry_date: v['entry_date'],
          discharge_date: v['discharge_date'],
        }));
      },
    });
  }

  ngAfterViewInit(): void {
    if(this.editEmployee()){

      this.employee.set(this.editEmployee()!);

      const { id,image,work_schedule, email, punctuality, attendance, phone_number, checked, ...obj } = this.editEmployee()!;

      let start_work = work_schedule.split('-')[0].trim();
      let end_work = work_schedule.split('-')[1].trim();
      let number = phone_number.length - 10;
      const pn = phone_number.slice(number);

      this.employeeForm.patchValue({ ...obj,
        email,
        start_work,
        end_work,
        phone_number: parseInt(pn),
      });
      this.disableItems() && this.employeeForm.controls.email.disable();
      this.disableItems() && this.employeeForm.controls.workstation.disable();
      this.employeeForm.updateValueAndValidity();
    }
  }

  getSchedule(dateStart: Date, dateEnd: Date) {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit', // Muestra la hora con dos dígitos (ej: 07, 23)
      minute: '2-digit', // Muestra el minuto con dos dígitos (ej: 00, 30)
      hour12: false, // ¡Importante! Asegura el formato de 24 horas (00-23)
      timeZone: 'America/Argentina/Buenos_Aires',
    };
    const start = dateStart.toLocaleTimeString('es-AR', options);
    const end = dateEnd.toLocaleTimeString('es-AR', options);
    return `${start} - ${end}`;
  }

  loadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file: File = input.files?.[0]!;
    const reader = new FileReader();
    reader.onload = () =>
      this.employee.update((emp) => ({ ...emp, image: reader.result as string }));
    reader.readAsDataURL(file);
  }

  getAge(bornDate: Date): number {
    return getCurrentAge(bornDate);
  }

  exit() {
    this.cancel.emit();
  }

  submit() {
    if (this.employeeForm.invalid) return;
    this.add.emit(this.employee());
  }

  getTimeInCompany() {
    if (!this.employee().entry_date || !this.employee().discharge_date) return '';
    const initDate = new Date(this.employee().entry_date);
    const endDate = new Date(this.employee().discharge_date);
    return calculateIntervalTime(initDate, endDate);
  }
}
