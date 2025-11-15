import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { App } from './app';
import { provideZonelessChangeDetection } from '@angular/core';
import { Rols } from './interfaces/rols';
import { UserData } from './interfaces/user';
import { MessageService } from 'primeng/api';
import { CompanyService } from './common/services/company';
import { DDBB } from './common/services/ddbb';
import { EmployeeService } from './common/services/employee';
import { ToastService } from './common/services/toast';
import storeService from './common/services/store-service';
import { of } from 'rxjs';



describe('App component', () => {

class MockCompanyService {
  getCompanies = jasmine.createSpy('getCompanies').and.returnValue(
    Promise.resolve({
      data: [{ id: 1, name: 'Test Company' }],
      error: null
    })
  );
}
 class MockEmployeeService {
  getEmployees = jasmine.createSpy('getEmployees').and.returnValue(Promise.resolve());
}
 class MockDDBB {
  createElements = jasmine.createSpy('createElements').and.returnValue(Promise.resolve());
}
 class MockToastService {
  showSuccess = jasmine.createSpy('showSuccess');
  showError = jasmine.createSpy('showError');
}
 class MockMessageService {
  add = jasmine.createSpy('add');
}

  let component: App;
  let fixture: ComponentFixture<App>;
   let companyService: MockCompanyService  ;
  let employeeService: MockEmployeeService;
  let dbService: MockDDBB;


   const mockUserData: UserData = {
    id: 1,
    empleado_id: 123,
    empresa_id: 456,
    rol: Rols.ADMIN,
    nombre: 'Test User',
    email: 'test@example.com',
  };

  beforeEach(async () => {
    spyOn(localStorage, 'getItem').and.callThrough();
    spyOn(localStorage, 'setItem').and.callThrough();
    spyOn(storeService, 'set').and.callThrough();
    spyOn(storeService, 'getObservable').and.callThrough();
     localStorage.setItem('user-data', JSON.stringify(mockUserData));

    await TestBed.configureTestingModule({
      imports: [App],
      // Add provideZonelessChangeDetection() here!
      providers: [provideZonelessChangeDetection(),
         { provide: CompanyService, useClass: MockCompanyService },
        { provide: EmployeeService, useClass: MockEmployeeService },
        { provide: DDBB, useClass: MockDDBB },
        { provide: ToastService, useClass: MockToastService },
        { provide: MessageService, useClass: MockMessageService }
      ]
    }).compileComponents();



       // Obtener instancias de los servicios mock
    companyService = TestBed.inject(CompanyService) as unknown as MockCompanyService;
    employeeService = TestBed.inject(EmployeeService) as unknown as MockEmployeeService;
    dbService = TestBed.inject(DDBB) as unknown as MockDDBB;

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

     // Limpiar localStorage antes de cada test
    localStorage.clear();
    // Limpiar storeService
    storeService.clear();



    // Espías globales
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
    storeService.clear();

  });

  describe('Unit Tests', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should inject services correctly', () => {
      expect(companyService).toBeTruthy();
      expect(employeeService).toBeTruthy();
      expect(dbService).toBeTruthy();
    });

    it('should initialize with empty localStorage', (() => {
      // El constructor no debería hacer nada si no hay user-data
      expect(localStorage.getItem).toHaveBeenCalledWith('user-data');
      expect(storeService.set).not.toHaveBeenCalled();
    }));

    it('should not call getCompanies when no user data in localStorage', () => {
      expect(companyService.getCompanies).not.toHaveBeenCalled();
    });
  });

  // TEST DE CONSTRUCTOR
  describe('Constructor Behavior', () => {
    it('should set user data in storeService when localStorage has user data', () => {
      // Arrange

      // Act - recrear el componente después de setear localStorage
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;

      // Assert
      expect(storeService.set).toHaveBeenCalledWith('user-data', mockUserData);
    });

    it('should call getCompanies when user data exists', fakeAsync( async () => {

      // Act
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;
      tick(); // Simular async operations

      // Assert
      expect(companyService.getCompanies).toHaveBeenCalled();
    }));

    it('should handle invalid JSON in localStorage gracefully', () => {
      // Arrange
      localStorage.setItem('user-data', 'invalid-json');

      // Act & Assert - no debería lanzar error
      expect(() => {
        fixture = TestBed.createComponent(App);
        component = fixture.componentInstance;
      }).not.toThrow();
    });
  });

  // TEST DE INTEGRACIÓN
  describe('Integration Tests', () => {
    it('should integrate all services correctly', fakeAsync(async () => {
      // Arrange


      // Act
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;
      tick();

      // Assert - Verificar flujo completo
      expect(storeService.set).toHaveBeenCalledWith('user-data', mockUserData);
      expect(companyService.getCompanies).toHaveBeenCalled();
      expect(dbService.createElements).toHaveBeenCalled();
      expect(storeService.getObservable).toHaveBeenCalledWith('company-default-selected');
    }));

    it('should handle empty user data scenario', () => {
      // Arrange - localStorage vacío

      // Act
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;

      // Assert
      expect(companyService.getCompanies).not.toHaveBeenCalled();
      expect(storeService.set).not.toHaveBeenCalledWith('user-data', jasmine.anything());
    });

    it('should work with distinctUntilChanged operator', fakeAsync(async () => {
      // Arrange
      const sameCompany = { id: 1, name: 'Same Company' };

      const mockObservable = of(sameCompany, sameCompany, sameCompany);
      (storeService.getObservable as jasmine.Spy).and.returnValue(mockObservable);

      // Act
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;
      tick();

      expect(storeService.getObservable).toHaveBeenCalled();
    }));
  });

  // TEST DE TEMPLATE
  describe('Template Tests', () => {
    it('should render router outlet', () => {
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });

    it('should include PrimeNG toast component', () => {
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p-toast')).toBeTruthy();
    });
  });

  // TEST DE MANEJO DE ERRORES
  describe('Error Handling', () => {
    it('should handle getCompanies promise rejection', fakeAsync(async () => {
      // Arrange
      companyService.getCompanies.and.returnValue(Promise.reject('Network error'));

      // Act & Assert - No debería lanzar error
      expect(() => {
        fixture = TestBed.createComponent(App);
        component = fixture.componentInstance;
        tick();
      }).not.toThrow();
    }));

    it('should handle null response from getCompanies', fakeAsync(async () => {
      // Arrange
      companyService.getCompanies.and.returnValue(Promise.resolve(null));

      // Act
      fixture = TestBed.createComponent(App);
      component = fixture.componentInstance;
      tick();

      // Assert - Debería continuar sin errores
      expect(dbService.createElements).toHaveBeenCalled();
    }));
  });
});
