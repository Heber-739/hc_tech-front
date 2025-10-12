import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftColumn } from './shift-column';

describe('ShiftColumn', () => {
  let component: ShiftColumn;
  let fixture: ComponentFixture<ShiftColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
