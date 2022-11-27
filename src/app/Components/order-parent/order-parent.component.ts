import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/Models/icategory';
import { Iproduct } from 'src/Models/iproduct';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  catlist:Icategory[];
  selectedCatId:number = 0;
  productList:any[] =[] ;
  receivedTotalPrice:Number = 0 ;
  constructor() { 

    this.catlist =[
      {id: 1 , name:"Mobile"} ,
      { id:2 , name :"Camera"} ,
      {id : 3 , name :"Laptop"} 
    ]
  }

  ngOnInit(): void {
  }

  showProduct(event:any)
  {
    this.productList.push(event) ;

  }

  calculate(){
    this.receivedTotalPrice =
  this.productList.reduce((total , item) => item.price * item.count + total, 0);
  }

  delete(prod:any){
    prod.quantity = prod.quantity + +prod.Count;

    this.productList.splice(this.productList.findIndex(e => e.ID ===prod.ID),1)
    if(this.receivedTotalPrice==0){

    }else{
      this.receivedTotalPrice= +this.receivedTotalPrice - (prod.Price*prod.count);
    }
  }
  //  console.log("He llo Fr om this si de");
}
