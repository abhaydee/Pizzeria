import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PizzadataService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:5000/getpizza";
  getpizzadetails(){
    return this.http.get<Object>(this.url);
  }
  postpizzadetails(id,image,price,name){
    let body={
      id:id,
      image:image,
      price:price,
      name:name
      
    }
    return this.http.post("http://localhost:5000/postpizza",body)
  }

  gettempdata(){
    console.log("hitting temp data")
    return this.http.get("http://localhost:5000/getdata")
  }
}
