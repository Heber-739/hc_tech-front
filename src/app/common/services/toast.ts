import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private messageService = inject(MessageService);

  private mapToast: {[key:string]:ToastMessageOptions} = {
    // auth
    "login-exitoso": { severity: 'success', summary: 'Success', detail: 'Login exitoso!', life: 3000 },
    "login-error": { severity: 'error', summary: 'Error', detail: 'Login Falló', life: 3000 },
    "expired-session": { severity: 'info', summary: 'Alert', detail: 'La sesión se cerró', life: 3000 },
    // companies
    "companies-load-error": { severity: 'error', summary: 'Error crítico', detail: 'Error al cargar la empresa, por favor recargue el navegador', life: 3000 },
    "companies-update-error": { severity: 'error', summary: 'Error', detail: 'Error al actualizar la empresa', life: 3000 },
    "companies-update-success": { severity: 'success', summary: 'Success', detail: 'Actualizacion exitosa', life: 3000 },
    "companies-delete-error": { severity: 'error', summary: 'Error', detail: 'Error al eliminar la empresa', life: 3000 },
    "companies-delete-success": { severity: 'success', summary: 'Success', detail: 'Se elimino la compañia', life: 3000 },
    "companies-create-success": { severity: 'success', summary: 'Success', detail: 'Compañia creada exitosamente', life: 3000 },

    // employees
    "employee-create-error": { severity: 'error', summary: 'Error', detail: 'Error al crear empleado', life: 3000 },
    "employee-create-success": { severity: 'success', summary: 'Success', detail: 'Empleado creado exitosamente', life: 3000 },
    "employee-update-error": { severity: 'error', summary: 'Error', detail: 'Error al actualizar compaempleadoñia', life: 3000 },
    "employee-update-success": { severity: 'success', summary: 'Success', detail: 'Empleado actualizado exitosamente', life: 3000 },

    // shifts
    "shift-delete-error": { severity: 'error', summary: 'Error', detail: 'Error al eliminar turno', life: 3000 },
    "shift-delete-success": { severity: 'success', summary: 'Success', detail: 'Turno eliminado exitosamente', life: 3000 },
    "shift-create-blocked-previously": { severity: 'error', summary: 'Error', detail: 'No se puede crear un turno con fecha pasada o en curso', life: 3000 },
    "shift-employee-already-exist": { severity: 'error', summary: 'Error', detail: 'Ya existe el usuario en el turno', life: 3000 },
    "shift-create-error": { severity: 'error', summary: 'Error', detail: 'Error al crear turno', life: 3000 },
    "shift-create-success": { severity: 'success', summary: 'Success', detail: 'Turno creado exitosamente', life: 3000 },
    "shift-update-error": { severity: 'error', summary: 'Error', detail: 'Error al actualizar turno', life: 3000 },
    "shift-update-success": { severity: 'success', summary: 'Success', detail: 'Turno actualizado exitosamente', life: 3000 },

    // Procedyres
    "procedur-update-error": { severity: 'error', summary: 'Error', detail: 'Error al actualizar tramite', life: 3000 },
    "procedur-update-success": { severity: 'success', summary: 'Success', detail: 'Trámite actualizado', life: 3000 },
    "procedur-create-error": { severity: 'error', summary: 'Error', detail: 'Error al crear tramite', life: 3000 },
    "procedur-create-success": { severity: 'success', summary: 'Success', detail: 'Trámite creado exitosamente', life: 3000 },

    // Calendar
    "calendar-delete-error": { severity: 'error', summary: 'Error', detail: 'Error al eliminar item de calendario', life: 3000 },
    "calendar-delete-success": { severity: 'success', summary: 'Success', detail: 'Item de calendario eliminado exitosamente', life: 3000 },
    "calendar-create-error": { severity: 'error', summary: 'Error', detail: 'Error al crear item de calendario', life: 3000 },
    "calendar-create-success": { severity: 'success', summary: 'Success', detail: 'Item de calendario creado exitosamente', life: 3000 },

    // Form
    "form-incomplete": { severity: 'info', summary: 'Info', detail: 'Campos faltantes a completar', life: 3000 },
    "pass-not-match": { severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden', life: 3000 },
    "signup-error": { severity: 'error', summary: 'Error', detail: 'Error al crear usuario', life: 3000 },
    "signup-success": { severity: 'success', summary: 'Success', detail: 'Usuario creado exitosamente', life: 3000 },
    "welcome-admin": { severity: 'success', summary: 'Success', detail: 'Bienvenido! Complete su perfil para seguir navegando, haga click en "Agregar" y es importante que ingrese el mismo mail.', life: 15000 },
  }



        // { severity: 'success', summary: 'Success', detail: 'Message Content' }
        // { severity: 'info', summary: 'Info', detail: 'Message Content' }
        // { severity: 'warn', summary: 'Warn', detail: 'Message Content' }
        // { severity: 'error', summary: 'Error', detail: 'Message Content' }
        // { severity: 'contrast', summary: 'Error', detail: 'Message Content' }
        // { severity: 'secondary', summary: 'Secondary', detail: 'Message Content' }

    show(key:string) {
        this.messageService.add(this.mapToast[key]);
    }

}
