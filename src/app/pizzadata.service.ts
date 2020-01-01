import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PizzadataService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:5000/getpizza";
  getpizzadetails(){
    return this.http.get<Object>(this.url)
  }
}
