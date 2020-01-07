import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { IngredientsComponent } from './ingredients.component';

import { IngreService } from '../ingre.service';
import { ReactiveFormsModule } from '@angular/forms';
describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule],
      providers:[IngreService],
      declarations: [ IngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ingredients to be checked',()=>{
    let a,b,c
    expect(component.checked(a,b,c)).toBeUndefined()
  })

  it('building pizza',()=>{
    expect(component.building()).toBeUndefined()
  })
});
