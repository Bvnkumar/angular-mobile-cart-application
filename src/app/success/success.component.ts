import { Component } from '@angular/core';
import { AppGlobals } from '../app.global';
import { Router } from '@angular/router'

@Component({
  selector: "success",
  templateUrl: "success.component.html",
  styleUrls: ['./success.component.css']
})

export class SuccessComponent {

  cartCount = [];
  productList;
  constructor(public appglobal: AppGlobals, public route: Router) {
    this.productList = this.appglobal.productList;
  }

  ngOnInit() {
    this.cartCount = this.appglobal.cartProduts;
  }
  clearAll() {
    this.appglobal.cartProduts = [];
    this.route.navigate(["welcome"])

  }
}