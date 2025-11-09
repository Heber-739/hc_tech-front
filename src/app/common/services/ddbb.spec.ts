import { TestBed } from '@angular/core/testing';

import { DDBB } from './ddbb';

describe('DDBB', () => {
  let service: DDBB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DDBB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
