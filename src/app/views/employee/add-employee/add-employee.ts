import { Component, inject, output, signal } from '@angular/core';
import { EmployeeProfile } from '../../../interfaces/employee-data';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-add-employee',
  imports: [DividerModule, AvatarModule, ReactiveFormsModule,InputTextModule, DatePickerModule, InputNumberModule ],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  protected employee;
  fb = inject(FormBuilder)
  add = output<EmployeeProfile>();


  employeeForm = this.fb.group({
    name: ["Heber Mauricio Duarte", [Validators.required]],
    mail: ["heberduarteryr@gmail.com", [Validators.required,Validators.email]],
    phone: ["3764273300", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    dni: [36702037, [Validators.required, Validators.pattern(/^\d{7,8}$/)]],
    birthday: ["", [Validators.required]],
    workstation: ["", [Validators.required]],
  })


  constructor() {
    this.employee = signal<EmployeeProfile>({
      name: 'Edgardo rios',
      email: '',
      rol: 'Repositor',
      workstation: '',
      work_schedule: '',
      status: '',
      time_in_company: '',
      entry_date: '',
      discharge_date: '',
      image: '',
      address:"",
      birthday:"",
      dni:"",
      phone_number:"",

    });
    this.employeeForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe({
      next:(v:any)=>{
        console.log({v})
        this.employee.update((e) => ({
          name: v["name"],
          email: v["mail"],
          phone_number: "+549" + v["phone"],
          dni:v["dni"],
          birthday: v["birthday"],
          workstation: v["workstation"],
          rol: 'Repositor',
          work_schedule: '',
          status: '',
          time_in_company: '',
          entry_date: '',
          discharge_date: '',
          image: '',
          address:"",
        }))
      }
    })
  }

  calcularEdad(fechaNacimientoString: string): number {
    // 1. Crear el objeto Date a partir de la cadena de texto
    const fechaNacimiento = new Date(fechaNacimientoString);

    // 2. Obtener la fecha actual
    const hoy = new Date();

    // 3. Calcular la diferencia simple de años
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // 4. Ajustar la edad si el cumpleaños AÚN NO ha ocurrido este año
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    // Si el mes actual es menor que el mes de nacimiento, RESTAMOS un año.
    if (mesActual < mesNacimiento) {
        edad--;
    }
    // Si el mes es el mismo, comprobamos el día del mes.
    else if (mesActual === mesNacimiento) {
        const diaActual = hoy.getDate();
        const diaNacimiento = fechaNacimiento.getDate();

        // Si el día actual es menor que el día de nacimiento, RESTAMOS un año.
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }

    return edad;
}

}
