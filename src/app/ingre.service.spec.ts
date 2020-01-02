import { TestBed } from '@angular/core/testing';

import { IngreService } from './ingre.service';

describe('IngreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngreService = TestBed.get(IngreService);
    expect(service).toBeTruthy();
  });
});
