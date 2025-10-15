import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresHeader } from './procedures-header';

describe('ProceduresHeader', () => {
  let component: ProceduresHeader;
  let fixture: ComponentFixture<ProceduresHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
