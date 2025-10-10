import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftHeader } from './shift-header';

describe('ShiftHeader', () => {
  let component: ShiftHeader;
  let fixture: ComponentFixture<ShiftHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
