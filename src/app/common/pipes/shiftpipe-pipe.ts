import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shiftpipe'
})
export class ShiftPipe implements PipeTransform {
  private shiftsMApper: {[key:string]:string} = {
'Mañana':'06:00 - 14:00',
'Tarde':'14:00 - 22:00',
'Noche':'22:00 - 06:00',
  }
  transform(value: string): string {
    return this.shiftsMApper[value];
  }

}
