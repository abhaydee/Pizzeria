import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ShoppingComponent } from './shopping.component';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should delete pizza', () => {
    let id: any;
    expect(component.deletedata(id)).toBeUndefined();
  });
  it('should delete custom pizza', () => {
    let id1, name: any;
    expect(component.deletecustomdata(id1, name)).toBeUndefined();
  });

  it('ngoninit', () => {
    component.ngOnInit();
    expect(component.tempdata.length).toBeGreaterThanOrEqual(0);
  });
});
