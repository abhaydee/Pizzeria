import { Component, OnInit } from '@angular/core';
import { IngreService } from '../ingre.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private service:IngreService) { }
  ingredientsarr:any=[]
  ngOnInit() {
    this.service.geting().subscribe(ingredients=>{this.ingredientsarr=ingredients
    console.log(this.ingredientsarr)})
  }
  // checked1:any;
  // checked(){
  //   alert(this.checked1)
  // }
  ingredientsform=new FormGroup({
    "Sweet corn":new FormControl(),
    "Black beans":new FormControl(),
    "Black olive":new FormControl(),
    "Green olive":new FormControl(),
    "Jalapeno":new FormControl(),
    "Chicken":new FormControl(),
    "Tomato":new FormControl(),
    "Red peprika":new FormControl(),
    "Paneer":new FormControl(),
    "Fried Onion":new FormControl(),
    "Capsicum":new FormControl(),
    "Mushroom":new FormControl(),
    "Pepperoni":new FormControl()




  })
  cost:number=0;
  pricedata:any=[]
  checked(name,price){
    console.log("the price",price)
    console.log("the name",name)
    console.log(this.ingredientsform.value);
    this.pricedata=this.ingredientsform.value;
    console.log(this.pricedata)
    if(this.ingredientsform.value[name]===true){
      this.cost=this.cost+price
    console.log("the cost",this.cost)
    }
    if(this.ingredientsform.value[name]===false){
      this.cost=this.cost-price
      console.log(this.cost)
    }

    

  }
  
}
