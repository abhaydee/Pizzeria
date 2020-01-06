import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { IngreService } from './ingre.service';

describe('IngreService', () => {
  let service: UserService;
let httpMock;
  beforeEach(() => {TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[IngreService]
  })
  service = TestBed.get(IngreService);
  httpMock = TestBed.get(HttpTestingController);
});




  it('should be created', () => {
    const service: IngreService = TestBed.get(IngreService);
    expect(service).toBeTruthy();
  });
});
