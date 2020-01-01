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


}
