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
  customdata:any=[]
  ngOnInit() {
    this.service.gettempdata().subscribe(tempresults=>{
      // console.log(tempresults)
    this.tempdata=tempresults
    this.service.getcdata().subscribe(customresults=>{
      // console.log("mycustom",customresults)
    this.customdata=customresults
  })
    })
  }
  deletedata(id){
    // console.log("will delete data")
    this.service.senddeletedata(id).subscribe(ddata=>{
      // console.log(ddata)
      this.service.gettempdata().subscribe(tempresults=>{
        // console.log(tempresults)
        this.tempdata=tempresults
        // console.log(this.tempdata)
        })
    })
  }

  deletecustomdata(myid,names){
    // console.log("to be deleted",names);
    this.service.dextradata(myid,names).subscribe(results=>{
      // console.log(results)
    })
    this.service.getcdata().subscribe(customresults=>{
      // console.log("mycustom",customresults)
    this.customdata=customresults
  })
  }

}
