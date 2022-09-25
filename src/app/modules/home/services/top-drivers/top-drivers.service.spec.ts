import { TestBed } from '@angular/core/testing';

import { TopDriversService } from './top-drivers.service';

describe('TopDriversService', () => {
  let service: TopDriversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopDriversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
