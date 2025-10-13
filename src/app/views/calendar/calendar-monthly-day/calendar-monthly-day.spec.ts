import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthlyDay } from './calendar-monthly-day';

describe('CalendarMonthlyDay', () => {
  let component: CalendarMonthlyDay;
  let fixture: ComponentFixture<CalendarMonthlyDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarMonthlyDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMonthlyDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
