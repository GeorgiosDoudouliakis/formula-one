import { TestBed } from '@angular/core/testing';

import { TopConstructorsService } from './top-constructors.service';

describe('TopConstructorsService', () => {
  let service: TopConstructorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopConstructorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
