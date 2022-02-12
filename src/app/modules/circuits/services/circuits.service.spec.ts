import { TestBed } from '@angular/core/testing';

import { CircuitsService } from './circuits.service';

describe('CircuitsService', () => {
  let service: CircuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
