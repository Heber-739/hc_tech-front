import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCharts } from './report-charts';

describe('ReportCharts', () => {
  let component: ReportCharts;
  let fixture: ComponentFixture<ReportCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
