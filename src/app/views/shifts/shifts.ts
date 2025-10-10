import { Component } from '@angular/core';
import { ShiftHeader } from './shift-header/shift-header';

@Component({
  selector: 'app-shifts',
  imports: [ShiftHeader],
  templateUrl: './shifts.html',
  styleUrl: './shifts.css'
})
export default class Shifts {

}
