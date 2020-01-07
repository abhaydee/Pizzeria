import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzadataService } from './pizzadata.service';
import { IngreService } from './ingre.service';
import { ShoppingComponent } from './shopping/shopping.component';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    IngredientsComponent,
    HomeComponent,
    ShoppingComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgwWowModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '', component: HomeComponent

    }, {path: 'orders', component: OrderComponent},
      {path: 'ingredients', component: IngredientsComponent},
      {path: 'shopping', component: ShoppingComponent}
  ])
  ],
  providers: [PizzadataService, IngreService],
  bootstrap: [AppComponent, OrderComponent]
})
export class AppModule { }
