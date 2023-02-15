import { Component } from '@angular/core';
import { AppGlobals } from '../app.global';

@Component({
  selector: "cart",
  templateUrl: "cart.component.html",
  styleUrls: ['./cart.component.scss']

})

export class CartComponent {
  selectedList = [];
  total_price = 0;
  constructor(public appglobal: AppGlobals) {
    if (this.appglobal.cartProduts.length) {
      this.selectedProducts(this.appglobal.productList, this.appglobal.cartProduts)
    }
  }


  selectedProducts(productList, cartProduts) {
    for (let cartProdut of cartProduts) {
      for (let select of productList) {
        if (cartProdut == select.id) {
          this.selectedList.push(select);
        }
      }
    }
    if (this.selectedList.length) {

      this.caluculatePrice();
    } else {
      this.total_price = 0;
    }
  }

  //This is method for removing selecting items from cart
  removeItem(name, id) {
    this.selectedList = this.selectedList.filter(function (ele) {
      return ele.name != name;
    });
    this.appglobal.cartProduts = this.appglobal.cartProduts.filter(obj => obj != id);
    if (this.selectedList.length) {
      this.caluculatePrice();
    } else {
      this.total_price = 0;
    }
  }

  caluculatePrice() {
    this.total_price = 0;
    this.selectedList.forEach((ele, index) => {
      var price = ele.price * ele.quantity;
      this.total_price += price
    })
  }

  incQuantity(price, brand) {
    var target = event;
    this.selectedList.filter(obj => {
      if (obj.name == brand) {
        obj.quantity += 1;
      }
    });
    let quan: string | number = parseFloat(document.getElementsByClassName(brand)[0].innerHTML);
    document.getElementsByClassName(brand)[0].innerHTML = (quan + 1) + '';
    this.itemTotalPrice(parseFloat(price), quan + 1, "inc", brand)
  }
  decQuantity(price, brand) {

    let quan: string | number = parseFloat(document.getElementsByClassName(brand)[0].innerHTML);
    if (quan != 1) {
      document.getElementsByClassName(brand)[0].innerHTML = (quan - 1) + '';
      this.selectedList.filter(obj => {
        if (obj.name == brand) {
          obj.quantity -= 1;
        }
      });
      this.itemTotalPrice(price, quan - 1, "dec", brand)

    }

  }
  itemTotalPrice(price, total, type, brand) {
    document.getElementsByClassName(brand + "total")[0].innerHTML = ' $' + price * total + '.00';
    if (type == "inc") {
      this.total_price += price;
    } else {
      this.total_price -= price;

    }
  }

} 