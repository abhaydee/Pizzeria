import { TestBed } from '@angular/core/testing';

import { PizzadataService } from './pizzadata.service';

describe('PizzadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzadataService = TestBed.get(PizzadataService);
    expect(service).toBeTruthy();
  });
});
