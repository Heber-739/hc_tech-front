import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmployeeItem } from './report-employee-item';

describe('ReportEmployeeItem', () => {
  let component: ReportEmployeeItem;
  let fixture: ComponentFixture<ReportEmployeeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEmployeeItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEmployeeItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
