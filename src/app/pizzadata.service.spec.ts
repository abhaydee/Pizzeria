import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { PizzadataService } from './pizzadata.service';
import { request } from 'http';

describe('PizzadataService', () => {
  let service:PizzadataService;
  let httpMock;
  let a,b,c,d:any;
  let id:any
  beforeEach(() => {TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[PizzadataService]
  })
  service = TestBed.get(PizzadataService);
  httpMock = TestBed.get(HttpTestingController);

});
  it('should be created', () => {
    const service: PizzadataService = TestBed.get(PizzadataService);
    expect(service).toBeTruthy();
  });


it('should get pizza data',()=>{
  service.getpizzadetails().subscribe((pizza)=>{
    expect(pizza).toBeTruthy();
    
  });
  const req=httpMock.expectOne("http://localhost:5000/getpizza")
  expect(req.request.method).toBe("GET")
})

it('should post pizza data',()=>{
  service.postpizzadetails(a,b,c,d).subscribe((details)=>{
    expect(details).toBeTruthy();

  })
  const req1=httpMock.expectOne("http://localhost:5000/postpizza")
  expect(req1.request.method).toBe("POST");
})

it('delete the pizza data',()=>{
  service.senddeletedata(id).subscribe((a)=>{
    expect(a).toBeTruthy();
  })
  const req2=httpMock.expectOne("http://localhost:5000/deletingdata");
  expect(req2.request.method).toBe("POST")
})

it('send temp pizza data',()=>{
  service.gettempdata().subscribe((temp)=>{
    expect(temp).toBeTruthy();
  });
  const req3=httpMock.expectOne("http://localhost:5000/getdata")
  expect(req3.request.method).toBe("GET")
})

it('should get custom pizza data',()=>{
  service.getcdata().subscribe((cdata)=>{
    expect(cdata).toBeTruthy();
  });
  const req4=httpMock.expectOne("http://localhost:5000/getcusdata")
  expect(req4.request.method).toBe("GET")
})





});