import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesShift } from './schedules-shift';

describe('SchedulesShift', () => {
  let component: SchedulesShift;
  let fixture: ComponentFixture<SchedulesShift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulesShift]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesShift);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
