import { Component } from '@angular/core';
import { AppGlobals, Product } from '../app.global';

@Component({
  selector: "cart",
  templateUrl: "cart.component.html",
  styleUrls: ['./cart.component.scss']

})

export class CartComponent {
  selectedList: Product[] = [];
  total_price = 0;
  constructor(public appglobal: AppGlobals) {
    this.syncSelectedProducts();
  }

  private syncSelectedProducts(): void {
    const cartIds = new Set(this.appglobal.cartProduts);
    this.selectedList = this.appglobal.productList.filter(product => cartIds.has(product.id));
    this.calculatePrice();
  }

  //This is method for removing selecting items from cart
  removeItem(product: Product): void {
    this.selectedList = this.selectedList.filter(item => item.id !== product.id);
    this.appglobal.cartProduts = this.appglobal.cartProduts.filter(id => id !== product.id);
    this.calculatePrice();
  }

  private calculatePrice(): void {
    this.total_price = this.selectedList.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  incQuantity(product: Product): void {
    product.quantity += 1;
    this.calculatePrice();
  }

  decQuantity(product: Product): void {
    if (product.quantity <= 1) {
      return;
    }
    product.quantity -= 1;
    this.calculatePrice();
  }

} 
