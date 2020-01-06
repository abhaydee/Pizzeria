import { Component, OnInit } from '@angular/core';
import { PizzadataService } from '../pizzadata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dataArray:any;
  constructor(private service:PizzadataService) { }
 
  ngOnInit() {
    this.service.getpizzadetails().subscribe((results)=>{this.dataArray=results;
    console.log(this.dataArray)});

  }

  passdata(id,image,price,name){
    alert("pizza added to cart")
    this.service.postpizzadetails(id,image,price,name).subscribe((temp)=>{console.log(temp)})
  }


}
