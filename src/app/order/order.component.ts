import { Component, OnInit } from '@angular/core';
import { PizzadataService } from '../pizzadata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  constructor(private service:PizzadataService) { }
  pizzadata:any
  ngOnInit() {
    this.service.getpizzadetails().subscribe((results)=>this.pizzadata=results)
    console.log(this.pizzadata)
  }

}
