import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private mapToast: {[key:string]:ToastMessageOptions} = {
    "login-exitoso": { severity: 'success', summary: 'Success', detail: 'Login exitoso!', life: 3000 },
    "login-error": { severity: 'error', summary: 'Error', detail: 'Login Falló', life: 3000 },
    "expired-session": { severity: 'error', summary: 'Error', detail: 'La sesion caducó', life: 3000 },
    "companies-load-error": { severity: 'error', summary: 'Error crítico', detail: 'Error al cargar la empresa, por favor recargue el navegador', life: 3000 },
    "companies-update-error": { severity: 'error', summary: 'Error', detail: 'Error al actualizar la empresa', life: 3000 },
    "companies-delete-error": { severity: 'error', summary: 'Error', detail: 'Error al eliminar la empresa', life: 3000 },
  }

  private messageService = inject(MessageService);


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
