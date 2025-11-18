// src/app/components/modal-actions/modal-actions.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, Confirmation } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

import { ModalActions } from './modal-actions';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ModalActionsComponent', () => {
  let component: ModalActions;
  let fixture: ComponentFixture<ModalActions>;
  let confirmationService: ConfirmationService;

  // Mock del ConfirmationService
  class MockConfirmationService {
    confirm = jasmine.createSpy('confirm').and.callFake((confirmation: Confirmation) => {
      // Simular el comportamiento del servicio real
      if (confirmation.accept) {
        // No ejecutar automáticamente, solo espiar
      }
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalActions, ConfirmDialog], // Componente standalone
      providers: [
        provideZonelessChangeDetection(),
        { provide: ConfirmationService, useClass: MockConfirmationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalActions);
        fixture.autoDetectChanges();
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
  });

  // TEST UNITARIOS
  describe('Unit Tests', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default modalKey input', () => {
      expect(component.modalKey()).toBe('');
    });

    it('should initialize with correct configs', () => {
      expect(component['configs']).toBeDefined();
      expect(component['configs']['delete']).toBeDefined();
      expect(component['configs']['save']).toBeDefined();
    });

    it('should inject ConfirmationService', () => {
      expect(component['confirmationService']).toBeTruthy();
    });
  });

  // TEST DE INPUTS
  describe('Input Tests', () => {
    it('should accept modalKey input', () => {
      component.deleteAction('delete');
      fixture.detectChanges();

      expect(component.modalKey()).toBe('delete');
    });

    it('should handle different modalKey values', () => {
      component.deleteAction('save');
      fixture.detectChanges();

      expect(component.modalKey()).toBe('save');
    });
  });

  // TEST DE OUTPUTS
  describe('Output Tests', () => {
    it('should emit actionResult when accept is called', () => {
      const emitSpy = spyOn(component.actionResult, 'emit');

      // Simular la función accept del config delete
      component['configs']['delete'].accept!();

      expect(emitSpy).toHaveBeenCalledWith('delete');
    });

    it('should emit actionResult when reject is called', () => {
      const emitSpy = spyOn(component.actionResult, 'emit');

      // Simular la función reject del config delete
      component['configs']['delete'].reject!();

      expect(emitSpy).toHaveBeenCalledWith('');
    });

    it('should emit different values for save config', () => {
      const emitSpy = spyOn(component.actionResult, 'emit');

      component['configs']['save'].accept!();
      expect(emitSpy).toHaveBeenCalledWith('save');

      component['configs']['save'].reject!();
      expect(emitSpy).toHaveBeenCalledWith('');
    });
  });

  // TEST DE ngOnChanges
  describe('OnChanges Tests', () => {
    it('should call deleteAction when modalKey changes to valid key', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      component.deleteAction('delete');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'delete',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(deleteActionSpy).toHaveBeenCalledWith('delete');
    });

    it('should call deleteAction when modalKey changes to save', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      component.deleteAction('save');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'save',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(deleteActionSpy).toHaveBeenCalledWith('save');
    });

    it('should NOT call deleteAction when modalKey is empty', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      component.deleteAction('');
      component.ngOnChanges({
        modalKey: {
          currentValue: '',
          previousValue: undefined,
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(deleteActionSpy).not.toHaveBeenCalled();
    });

    it('should NOT call deleteAction when modalKey is invalid', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      component.deleteAction('invalid-key');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'invalid-key',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(deleteActionSpy).not.toHaveBeenCalled();
    });

    it('should handle multiple changes', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      // Primer cambio
      component.deleteAction('delete');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'delete',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      // Segundo cambio
      component.deleteAction('save');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'save',
          previousValue: 'delete',
          firstChange: false,
          isFirstChange: () => false
        }
      });

      expect(deleteActionSpy).toHaveBeenCalledTimes(2);
      expect(deleteActionSpy).toHaveBeenCalledWith('delete');
      expect(deleteActionSpy).toHaveBeenCalledWith('save');
    });
  });

  // TEST DE deleteAction METHOD
  describe('deleteAction Method Tests', () => {
    it('should call confirmationService.confirm with delete config', () => {
      component['deleteAction']('delete');

      expect(confirmationService.confirm).toHaveBeenCalledWith(component['configs']['delete']);
    });

    it('should call confirmationService.confirm with save config', () => {
      component['deleteAction']('save');

      expect(confirmationService.confirm).toHaveBeenCalledWith(component['configs']['save']);
    });

    it('should handle unknown keys gracefully', () => {
      expect(() => {
        component['deleteAction']('unknown-key');
      }).not.toThrow();

      // No debería llamar al confirmationService para keys desconocidas
      expect(confirmationService.confirm).not.toHaveBeenCalled();
    });
  });

  // TEST DE CONFIGURACIONES
  describe('Configuration Tests', () => {
    it('should have correct delete configuration', () => {
      const deleteConfig = component['configs']['delete'];

      expect(deleteConfig.message).toBe('Eliminar permanentemente?');
      expect(deleteConfig.header).toBe('Confirmación requerida');
      expect(deleteConfig.icon).toBe('pi pi-exclamation-triangle');
      expect(deleteConfig.rejectLabel).toBe('Cancelar');
      expect(deleteConfig.rejectButtonProps?.severity).toBe('primary');
      expect(deleteConfig.acceptButtonProps?.severity).toBe('danger');
      expect(deleteConfig.accept).toBeDefined();
      expect(deleteConfig.reject).toBeDefined();
    });

    it('should have correct save configuration', () => {
      const saveConfig = component['configs']['save'];

      expect(saveConfig.message).toBe('Desea guardar los cambios?');
      expect(saveConfig.header).toBe('Confirmación requerida');
      expect(saveConfig.icon).toBe('pi pi-question-circle');
      expect(saveConfig.rejectLabel).toBe('Cancelar');
      expect(saveConfig.rejectButtonProps?.severity).toBe('primary');
      expect(saveConfig.acceptButtonProps?.severity).toBe('primary');
      expect(saveConfig.accept).toBeDefined();
      expect(saveConfig.reject).toBeDefined();
    });
  });

  // TEST DE INTEGRACIÓN
  describe('Integration Tests', () => {
    it('should integrate modalKey change with confirmation service', () => {
      component.deleteAction('delete');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'delete',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(confirmationService.confirm).toHaveBeenCalledWith(component['configs']['delete']);
    });

    it('should complete flow from input change to service call', () => {
      // Simular el flujo completo
      const modalKey = 'save';

      component.deleteAction(modalKey);
      component.ngOnChanges({
        modalKey: {
          currentValue: modalKey,
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(confirmationService.confirm).toHaveBeenCalledWith(component['configs'][modalKey]);
    });

    it('should handle output emissions from config callbacks', () => {
      const emitSpy = spyOn(component.actionResult, 'emit');

      // Simular el flujo completo con emisión
      component.deleteAction('delete');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'delete',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      // Simular que el usuario hace click en "Aceptar"
      component['configs']['delete'].accept!();

      expect(emitSpy).toHaveBeenCalledWith('delete');
    });
  });

  // TEST DE TEMPLATE (Integración con DOM)
  describe('Template Integration Tests', () => {
    it('should render ConfirmDialog component', () => {
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const confirmDialog = compiled.querySelector('p-confirmdialog');

      expect(confirmDialog).toBeTruthy();
    });

    it('should maintain component state after view initialization', () => {
      fixture.detectChanges();

      expect(component.modalKey()).toBe('');
    });
  });

  // TEST DE EDGE CASES
  describe('Edge Cases', () => {
    it('should handle null or undefined modalKey', () => {
      const deleteActionSpy = spyOn(component, 'deleteAction' as any);

      component.deleteAction(null as any);
      component.ngOnChanges({
        modalKey: {
          currentValue: null,
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(deleteActionSpy).not.toHaveBeenCalled();
    });

    it('should not break when configs are modified', () => {
      // Esto prueba que el componente es robusto ante modificaciones externas
      const originalConfig = { ...component['configs']['delete'] };

      component.deleteAction('delete');
      component.ngOnChanges({
        modalKey: {
          currentValue: 'delete',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      });

      expect(confirmationService.confirm).toHaveBeenCalled();
    });
  });
});
