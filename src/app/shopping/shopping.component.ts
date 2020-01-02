import { Component, OnInit } from '@angular/core';
import { PizzadataService } from '../pizzadata.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private service:PizzadataService) { }
  tempdata:any=[]
  ngOnInit() {
    this.service.gettempdata().subscribe(tempresults=>{console.log(tempresults)
    this.tempdata=tempresults
    })
  }

}
