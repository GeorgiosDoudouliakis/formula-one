import { TestBed } from '@angular/core/testing';

import { DriverConstructorStandingsService } from './driver-constructor-standings.service';

describe('DriverConstructorStandingsService', () => {
  let service: DriverConstructorStandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverConstructorStandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
