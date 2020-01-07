import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PizzadataService } from './pizzadata.service';
import { request } from 'http';

describe('PizzadataService', () => {
  const service = TestBed.get(PizzadataService);
  const httpMock = TestBed.get(HttpTestingController);
  const a = 1;
  const b = 1;
  const  c = 1;
  const  d = 1;
  const id: any = 1;
  const exe = 1;
  const exe1 = 2;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PizzadataService]
  });


});
  it('should be created', () => {
    const service: PizzadataService = TestBed.get(PizzadataService);
    expect(service).toBeTruthy();
  });


  it('should get pizza data', () => {
  service.getpizzadetails().subscribe((pizza) => {
    expect(pizza).toBeTruthy();

  });
  const req = httpMock.expectOne('http://localhost:5000/getpizza');
  expect(req.request.method).toBe('GET');
});

  it('should post pizza data', () => {
  service.postpizzadetails(a, b, c, d).subscribe((details) => {
    expect(details).toBeTruthy();

  });
  const req1 = httpMock.expectOne('http://localhost:5000/postpizza');
  expect(req1.request.method).toBe('POST');
});

  it('delete the pizza data', () => {
  service.senddeletedata(id).subscribe((abc) => {
    expect(abc).toBeTruthy();
  });
  const req2 = httpMock.expectOne('http://localhost:5000/deletingdata');
  expect(req2.request.method).toBe('POST');
});

  it('send temp pizza data', () => {
  service.gettempdata().subscribe((temp) => {
    expect(temp).toBeTruthy();
  });
  const req3 = httpMock.expectOne('http://localhost:5000/getdata');
  expect(req3.request.method).toBe('GET');
});

  it('should get custom pizza data', () => {
  service.getcdata().subscribe((cdata) => {
    expect(cdata).toBeTruthy();
  });
  const req4 = httpMock.expectOne('http://localhost:5000/getcusdata');
  expect(req4.request.method).toBe('GET');
});

  it('should post custom pizza data', () => {
  service.dextradata(exe, exe1).subscribe((cdata) => {
    expect(cdata).toBeTruthy();
  });
  const req5 = httpMock.expectOne('http://localhost:5000/deletecustomdata');
  expect(req5.request.method).toBe('POST');
});










});
