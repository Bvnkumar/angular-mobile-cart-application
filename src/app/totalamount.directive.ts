import {Directive, ElementRef} from '@angular/core';
import {AppGlobals} from './app.global';
@Directive({
  selector:'[totalamount]'
})
export class TotalAmont{
  totalPrice=0;
constructor(public globals:AppGlobals,public el:ElementRef){
  this.calculateAmount(this.globals.productList,this.globals.cartProduts);
console.log("el",el.nativeElement.innerHTML)
}
calculateAmount(products,selected){
      if(selected.length){
  for(let i of selected){
  for(let j of products){
      if(i==j.id){
      this.totalPrice+=j.price;
        this.el.nativeElement.innerHTML="$"+this.totalPrice+".00";
     }
    }
  }
}
      else{
       this.el.nativeElement.innerHTML="$0.00";

      }

    }
    }