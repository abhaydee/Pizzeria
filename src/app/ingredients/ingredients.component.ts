import { Component, OnInit } from '@angular/core';
import { IngreService } from '../ingre.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private service: IngreService) { }
  ingredientsarr: any = [];
  // checked1:any;
  // checked(){
  //   alert(this.checked1)
  // }
  ingredientsform = new FormGroup({
    'Sweet corn': new FormControl(),
    'Black beans': new FormControl(),
    'Black olive': new FormControl(),
    'Green olive': new FormControl(),
    Jalapeno: new FormControl(),
    Chicken: new FormControl(),
    Tomato: new FormControl(),
    'Red peprika': new FormControl(),
    Paneer: new FormControl(),
    'Fried Onion': new FormControl(),
    Capsicum: new FormControl(),
    Mushroom: new FormControl(),
    Pepperoni: new FormControl()




  });
  cost = 0;
  pricedata: any = [];
  pricing = 0;
  customname: any;
  customimage: any;
  ngOnInit() {
    this.service.geting().subscribe(ingredients => {this.ingredientsarr = ingredients;
    // console.log(this.ingredientsarr)
  });
  }
  checked(image, name, price) {
    this.customimage = image;
    this.customname = name;
    this.pricing = price;

    // console.log("the custom image",this.customimage)

    // console.log("the custom name",this.customname)
    // console.log("the custom priciing",this.pricing)
    // console.log(this.ingredientsform.value);
    this.pricedata = this.ingredientsform.value;
    // console.log(this.pricedata)
    if (this.ingredientsform.value[name] === true) {
      this.cost = this.cost + price;
    // console.log("the cost",this.cost)
    }
    if (this.ingredientsform.value[name] === false) {
      this.cost = this.cost - price;
      // console.log(this.cost)
    }
  }

  building() {
    this.service.sendcustomization(this.customimage, this.customname, this.pricing + 100).subscribe(response => {
      // console.log(response)
    });
  }





}
