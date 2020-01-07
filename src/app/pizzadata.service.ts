import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PizzadataService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:5000/getpizza';
  getpizzadetails() {
    return this.http.get(this.url);
  }
  postpizzadetails(id, image, price, name) {
    const body = {
      id,
      image,
      price,
      name

    };
    return this.http.post('http://localhost:5000/postpizza', body);
  }

  gettempdata() {
    // console.log("hitting temp data")
    return this.http.get('http://localhost:5000/getdata');
  }

  senddeletedata(id) {
    // console.log("will definately delete data")
   const body = {
      id
    };
   return this.http.post('http://localhost:5000/deletingdata', body);
  }

  getcdata() {
    return this.http.get('http://localhost:5000/getcusdata');
  }

  dextradata(myid, names) {
    const body = {
      tname: names,
      myid
    };
    return this.http.post('http://localhost:5000/deletecustomdata', body);
  }
}
