import { Component, inject, input } from '@angular/core';
import { SchedulesShiftData } from '../../../interfaces/schedules';
import { AvatarModule } from 'primeng/avatar';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedules-shift',
  imports: [AvatarModule, DatePickerModule, ReactiveFormsModule],
  templateUrl: './schedules-shift.html',
  styleUrl: './schedules-shift.css',
})
export class SchedulesShift {
  shift = input.required<SchedulesShiftData>();
  private fb = inject(FormBuilder);
  scheduleForm;

  constructor() {
    this.scheduleForm = this.fb.group({
      entry: [''],
      discharge: [''],
    });

  }

  getOptionsDate() {
    return this.shift().schedule_options.map((fecha) =>
      fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  }
}
