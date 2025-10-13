import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCalendar } from './monthly-calendar';

describe('MonthlyCalendar', () => {
  let component: MonthlyCalendar;
  let fixture: ComponentFixture<MonthlyCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
