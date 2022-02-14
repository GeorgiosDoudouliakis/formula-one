import { TestBed } from '@angular/core/testing';

import { SeasonFilterVisibilityHandlerService } from './season-filter-visibility-handler.service';

describe('SeasonFilterVisibilityHandlerService', () => {
  let service: SeasonFilterVisibilityHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonFilterVisibilityHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
