import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { loginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';
import {TotalAmont} from './totalamount.directive'
import {AppGlobals} from './app.global';
import { ReactiveFormsModule } from '@angular/forms';
import {carousel} from './carousel/carousel.component';
import {SideBar} from  './sidebar/sidebar.component'
import {RatingBar} from  './rating/rating.component';
import {FeedBack} from './feedback/feedback.component';
const routes:Routes=[
  {path:'welcome',component:WelcomeComponent},{path:'welcome/:id',component:WelcomeComponent},{
    path:'login',component:loginComponent },
    {path:'',redirectTo:'/welcome',pathMatch: 'full'},
    {path:'cart',component:CartComponent},
    {path:'success',component:SuccessComponent},
    {path:'feedback/:id',component:FeedBack}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule
 ],
  declarations: [ AppComponent, HelloComponent,loginComponent,WelcomeComponent ,CartComponent,SuccessComponent,TotalAmont,carousel,SideBar,RatingBar,FeedBack],
  providers:[AppGlobals],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
