import { TestBed } from '@angular/core/testing';

import { YearHandlerService } from './year-handler.service';

describe('YearHandlerService', () => {
  let service: YearHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
