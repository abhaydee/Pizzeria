import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IngreService {

  constructor(private http: HttpClient) { }

  geting(): any {
    return this.http.get('http://localhost:5000/geting');
  }
  sendcustomization(image, name, price) {
    const body = {
      image,
      name,
      price,
      cusid: (price / 4) * 2
    };
    return this.http.post('http://localhost:5000/sendcustom', body);
  }
}
