import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { IngreService } from './ingre.service';

describe('IngreService', () => {
  let service: IngreService;
  let httpMock;
  let body, body1, body2;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [IngreService]
  });
                    service = TestBed.get(IngreService);
                    httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: IngreService = TestBed.get(IngreService);
    expect(service).toBeTruthy();
  });

  it('should get ingredients', () => {
    service.geting().subscribe((ing) => {
      expect(ing).toBeTruthy();
    });
    const req1 = httpMock.expectOne('http://localhost:5000/geting');
    expect(req1.request.method).toBe('GET');
  });
  it('should send customized pizza', () => {
    service.sendcustomization(body, body1, body2).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req2 = httpMock.expectOne('http://localhost:5000/sendcustom');
    expect(req2.request.method).toBe('POST');
  });

});
