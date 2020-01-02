import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzadataService } from './pizzadata.service';
import { IngreService } from './ingre.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    IngredientsComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'',component:HomeComponent
     
    },{path:'orders',component:OrderComponent},
      {path:'ingredients',component:IngredientsComponent}
  ])
  ],
  providers: [PizzadataService,IngreService],
  bootstrap: [AppComponent,OrderComponent]
})
export class AppModule { }
