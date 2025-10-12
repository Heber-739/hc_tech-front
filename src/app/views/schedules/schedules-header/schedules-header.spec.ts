import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesHeader } from './schedules-header';

describe('SchedulesHeader', () => {
  let component: SchedulesHeader;
  let fixture: ComponentFixture<SchedulesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
