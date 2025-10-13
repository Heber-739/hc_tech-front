import { Component, input, signal } from '@angular/core';
import { ShiftEmployeesItem, ShiftItem } from '../../../interfaces/shift-item';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-shift-column',
  imports: [DividerModule, AvatarModule, MenuModule],
  templateUrl: './shift-column.html',
  styleUrl: './shift-column.css'
})
export class ShiftColumn {

  shiftItem = input.required<ShiftItem>()
  shift = input.required<keyof ShiftEmployeesItem>()

  command = (event: MenuItemCommandEvent) => (()=> {})();

  protected employeeSelectedId = signal<string>("")

  items = signal<MenuItem[]>([
            {
                items: [
                    {
                        label: 'Aprobar',
                        styleClass: "text-primary",
                        command:this.command
                      },
                      {
                        label: 'Remover',
                        styleClass: "text-red-500",
                        command:this.command
                    }
                ],

            }
        ])




  getTodayName(): string {
    const dayName = this.shiftItem().date.toLocaleDateString('es-AR', {
        weekday: 'long'
    });
    const number = this.shiftItem().date.toLocaleDateString('es-AR', {
        day: 'numeric'
    });

    return `${dayName.charAt(0).toUpperCase()}${dayName.slice(1)} ${number}`;
}

 clickMenu = (id:string)=> {
  this.employeeSelectedId.set(id)
  return true
 }

}
