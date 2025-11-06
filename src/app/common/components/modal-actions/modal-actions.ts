import { Component, inject, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-modal-actions',
  imports: [ConfirmDialog],
  providers:[ConfirmationService],
  templateUrl: './modal-actions.html',
  styleUrl: './modal-actions.css'
})
export class ModalActions implements OnChanges {

  modalKey = input<string>("");
  actionResult = output<string>();

  private configs: {[key:string]:Confirmation} = {
    delete: {
            message: 'Eliminar permanentemente?',
            header: 'Confirmación requerida',
            icon: 'pi pi-exclamation-triangle',
            rejectLabel: 'Cancelar',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'primary',
                outlined: true,
                focus:false

            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger',
            },
            accept: () => this.actionResult.emit("delete"),
            reject: () => this.actionResult.emit("")
        },
    save: {
            message: 'Desea guardar los cambios?',
            header: 'Confirmación requerida',
            icon: 'pi pi-question-circle',
            rejectLabel: 'Cancelar',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'primary',
                outlined: true,
                focus:false
            },
            acceptButtonProps: {
                label: 'Guardar',
                severity: 'primary',
            },
            accept: () => this.actionResult.emit("save"),
            reject: () => this.actionResult.emit("")
        }
  }



private confirmationService = inject(ConfirmationService)


ngOnChanges(changes: SimpleChanges): void {
  if(!this.modalKey() || !this.configs[this.modalKey()]) return;
    this.deleteAction(this.modalKey())
  }



    deleteAction(key:string) {
        this.confirmationService.confirm(this.configs[key]);
    }
}
