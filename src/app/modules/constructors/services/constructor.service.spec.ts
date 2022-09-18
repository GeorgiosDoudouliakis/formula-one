import { TestBed } from '@angular/core/testing';

import { ConstructorService } from './constructor.service';

describe('ConstructorService', () => {
  let service: ConstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
