import { filter } from 'rxjs';
import { Component, input, OnInit, signal } from '@angular/core';
import { ScheduleShiftItem } from '../../../interfaces/schedules';
import { AvatarModule } from 'primeng/avatar';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';
import { ScheduleItem } from '../schedule-item/schedule-item';
import storeService from '../../../common/services/store-service';
import { StringsFilters } from '../../../interfaces/shift-filters';

@Component({
  selector: 'app-schedules-shift',
  templateUrl: './schedules-shift.html',
  styleUrl: './schedules-shift.css',
})
export class SchedulesShift {
  allShift = input.required<ScheduleShiftItem[]>();
  shift = signal<ScheduleShiftItem[]>([]);
  turno = input.required<string>();



constructor(){

}




}
