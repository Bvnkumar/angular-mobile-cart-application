import { Directive, ElementRef } from '@angular/core';
import { AppGlobals, Product } from './app.global';
@Directive({
  selector:'[totalamount]'
})
export class TotalAmont{
  totalPrice=0;
constructor(public globals:AppGlobals,public el:ElementRef){
  this.calculateAmount(this.globals.productList,this.globals.cartProduts);
}
calculateAmount(products: Product[], selected: number[]): void {
  const selectedIds = new Set(selected);
  this.totalPrice = products.reduce((total, product) => {
    return selectedIds.has(product.id) ? total + product.price : total;
  }, 0);

  this.el.nativeElement.textContent = `$${this.totalPrice}.00`;
}
}
