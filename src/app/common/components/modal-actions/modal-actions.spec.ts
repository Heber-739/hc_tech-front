import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActions } from './modal-actions';

describe('ModalActions', () => {
  let component: ModalActions;
  let fixture: ComponentFixture<ModalActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
