import { Component, OnInit } from '@angular/core';
import { IngreService } from '../ingre.service';

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

}
