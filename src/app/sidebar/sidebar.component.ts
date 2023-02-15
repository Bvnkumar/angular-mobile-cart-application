import { Component } from '@angular/core';
import {AppGlobals} from '../app.global';
import {Router} from '@angular/router'
@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ['./sidebar.component.css']
})
export class SideBar {
  constructor(public appglobal: AppGlobals,public route:Router) {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  logout(){
  this.appglobal.cartProduts=[]
  this.route.navigate(['login'])
  }
}