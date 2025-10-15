import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureItem } from './procedure-item';

describe('ProcedureItem', () => {
  let component: ProcedureItem;
  let fixture: ComponentFixture<ProcedureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
